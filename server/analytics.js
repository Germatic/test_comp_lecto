const crypto = require("crypto");
const { Pool } = require("pg");

const DATABASE_URL = process.env.DATABASE_URL || "";
const ANALYTICS_IP_SALT =
  process.env.ANALYTICS_IP_SALT || DATABASE_URL || "local-development-salt";
const DATABASE_SSL =
  process.env.DATABASE_SSL === "true" || process.env.PGSSLMODE === "require";
const DEFAULT_EXPORT_LIMIT = 200;
const MAX_EXPORT_LIMIT = 1000;

const ATTEMPT_STATUSES = new Set([
  "started",
  "in_progress",
  "completed",
  "abandoned",
]);

const ANALYTICS_EVENT_TYPES = new Set([
  "attempt_started",
  "reading_viewed",
  "reading_revisited",
  "question_viewed",
  "answer_submitted",
  "result_viewed",
  "attempt_abandoned",
  "attempt_completed",
]);

const analyticsEnabled = Boolean(DATABASE_URL);
const pool = analyticsEnabled
  ? new Pool({
      connectionString: DATABASE_URL,
      ssl: DATABASE_SSL ? { rejectUnauthorized: false } : undefined,
    })
  : null;

let schemaReady = false;

function isEnabled() {
  return analyticsEnabled;
}

function clampExportLimit(value) {
  const parsed = Number.parseInt(value, 10);
  if (!Number.isInteger(parsed) || parsed <= 0) {
    return DEFAULT_EXPORT_LIMIT;
  }
  return Math.min(parsed, MAX_EXPORT_LIMIT);
}

function clampOffset(value) {
  const parsed = Number.parseInt(value, 10);
  if (!Number.isInteger(parsed) || parsed < 0) {
    return 0;
  }
  return parsed;
}

function normalizeIp(rawValue) {
  if (!rawValue || typeof rawValue !== "string") return "unknown";
  const trimmed = rawValue.trim();
  if (!trimmed) return "unknown";
  if (trimmed.startsWith("::ffff:")) {
    return trimmed.slice(7);
  }
  return trimmed;
}

function getOriginIp(req) {
  const forwardedFor = req.headers["x-forwarded-for"];
  if (typeof forwardedFor === "string" && forwardedFor.trim()) {
    return normalizeIp(forwardedFor.split(",")[0]);
  }

  if (Array.isArray(forwardedFor) && forwardedFor.length > 0) {
    return normalizeIp(forwardedFor[0]);
  }

  return normalizeIp(req.ip || req.socket?.remoteAddress || "unknown");
}

function hashIp(ipAddress) {
  return crypto
    .createHash("sha256")
    .update(`${ANALYTICS_IP_SALT}:${ipAddress}`)
    .digest("hex");
}

function getRequestMetadata(req) {
  const originIp = getOriginIp(req);
  return {
    originIpHash: hashIp(originIp),
    userAgent: req.get("user-agent") || null,
    referer: req.get("referer") || req.get("referrer") || null,
    requestPath: req.originalUrl || req.path || null,
  };
}

function normalizePayload(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return {};
  }

  return value;
}

function assertEventType(eventType) {
  if (!ANALYTICS_EVENT_TYPES.has(eventType)) {
    throw new Error("Tipo de evento analítico inválido.");
  }
}

function normalizeAttemptStatus(status) {
  if (typeof status !== "string") {
    return null;
  }

  const normalized = status.trim();
  if (!ATTEMPT_STATUSES.has(normalized)) {
    return null;
  }

  return normalized;
}

function buildAttemptFilters(filters = {}) {
  const whereParts = [];
  const params = [];

  if (typeof filters.testCode === "string" && filters.testCode.trim()) {
    params.push(filters.testCode.trim().toUpperCase());
    whereParts.push(`test_code = $${params.length}`);
  }

  const status = normalizeAttemptStatus(filters.status);
  if (status) {
    params.push(status);
    whereParts.push(`status = $${params.length}`);
  }

  if (typeof filters.originIpHash === "string" && filters.originIpHash.trim()) {
    params.push(filters.originIpHash.trim());
    whereParts.push(`origin_ip_hash = $${params.length}`);
  }

  return {
    whereSql: whereParts.length ? `WHERE ${whereParts.join(" AND ")}` : "",
    params,
  };
}

function mapAttemptRow(row) {
  return {
    attemptId: row.attempt_id,
    testCode: row.test_code,
    testCategory: row.test_category,
    testLevel: row.test_level,
    testTitle: row.test_title,
    status: row.status,
    originIpHash: row.origin_ip_hash,
    userAgent: row.user_agent,
    referer: row.referer,
    startedPath: row.started_path,
    completionReason: row.completion_reason,
    correctAnswers: row.correct_answers,
    totalQuestions: row.total_questions,
    accuracy: row.accuracy,
    startedAt: row.started_at,
    updatedAt: row.updated_at,
    completedAt: row.completed_at,
  };
}

function mapEventRow(row) {
  return {
    eventId: row.event_id,
    attemptId: row.attempt_id,
    eventType: row.event_type,
    questionId: row.question_id,
    questionIndex: row.question_index,
    selectedOption: row.selected_option,
    correctOption: row.correct_option,
    isCorrect: row.is_correct,
    payload: row.payload_json,
    occurredAt: row.occurred_at,
  };
}

function escapeCsvValue(value) {
  if (value === null || value === undefined) {
    return "";
  }

  const stringValue =
    value instanceof Date
      ? value.toISOString()
      : typeof value === "object"
        ? JSON.stringify(value)
        : String(value);
  return `"${stringValue.replaceAll('"', '""')}"`;
}

function attemptsToCsv(rows) {
  const headers = [
    "attempt_id",
    "test_code",
    "test_category",
    "test_level",
    "test_title",
    "status",
    "origin_ip_hash",
    "user_agent",
    "referer",
    "started_path",
    "completion_reason",
    "correct_answers",
    "total_questions",
    "accuracy",
    "started_at",
    "updated_at",
    "completed_at",
  ];

  const lines = rows.map((row) =>
    headers.map((header) => escapeCsvValue(row[header])).join(","),
  );

  return [headers.join(","), ...lines].join("\n");
}

async function initAnalytics() {
  if (!analyticsEnabled || schemaReady) {
    return;
  }

  await pool.query(`
    CREATE TABLE IF NOT EXISTS analytics_attempts (
      attempt_id TEXT PRIMARY KEY,
      test_code TEXT NOT NULL,
      test_category TEXT NOT NULL,
      test_level INTEGER NOT NULL,
      test_title TEXT NOT NULL,
      status TEXT NOT NULL,
      origin_ip_hash TEXT NOT NULL,
      user_agent TEXT,
      referer TEXT,
      started_path TEXT,
      completion_reason TEXT,
      correct_answers INTEGER,
      total_questions INTEGER,
      accuracy DOUBLE PRECISION,
      started_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      completed_at TIMESTAMPTZ
    );
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS analytics_events (
      event_id BIGSERIAL PRIMARY KEY,
      attempt_id TEXT NOT NULL REFERENCES analytics_attempts(attempt_id) ON DELETE CASCADE,
      event_type TEXT NOT NULL,
      question_id TEXT,
      question_index INTEGER,
      selected_option INTEGER,
      correct_option INTEGER,
      is_correct BOOLEAN,
      payload_json JSONB NOT NULL DEFAULT '{}'::jsonb,
      occurred_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `);

  await pool.query(`
    CREATE INDEX IF NOT EXISTS analytics_attempts_started_at_idx
      ON analytics_attempts(started_at DESC);
  `);

  await pool.query(`
    CREATE INDEX IF NOT EXISTS analytics_attempts_test_code_idx
      ON analytics_attempts(test_code);
  `);

  await pool.query(`
    CREATE INDEX IF NOT EXISTS analytics_attempts_status_idx
      ON analytics_attempts(status);
  `);

  await pool.query(`
    CREATE INDEX IF NOT EXISTS analytics_events_attempt_id_idx
      ON analytics_events(attempt_id);
  `);

  await pool.query(`
    CREATE INDEX IF NOT EXISTS analytics_events_event_type_idx
      ON analytics_events(event_type);
  `);

  await pool.query(`
    CREATE INDEX IF NOT EXISTS analytics_events_occurred_at_idx
      ON analytics_events(occurred_at DESC);
  `);

  schemaReady = true;
}

async function createAttempt({ test, requestMetadata }) {
  if (!analyticsEnabled) {
    return { attemptId: null, analyticsEnabled: false };
  }

  const attemptId = crypto.randomUUID();
  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    await client.query(
      `
        INSERT INTO analytics_attempts (
          attempt_id,
          test_code,
          test_category,
          test_level,
          test_title,
          status,
          origin_ip_hash,
          user_agent,
          referer,
          started_path
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      `,
      [
        attemptId,
        test.code,
        test.category,
        test.level,
        test.title,
        "started",
        requestMetadata.originIpHash,
        requestMetadata.userAgent,
        requestMetadata.referer,
        requestMetadata.requestPath,
      ],
    );

    await client.query(
      `
        INSERT INTO analytics_events (
          attempt_id,
          event_type,
          payload_json
        )
        VALUES ($1, $2, $3::jsonb)
      `,
      [
        attemptId,
        "attempt_started",
        JSON.stringify({
          testCode: test.code,
          category: test.category,
          level: test.level,
        }),
      ],
    );

    await client.query("COMMIT");
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }

  return { attemptId, analyticsEnabled: true };
}

async function logEvent(attemptId, event) {
  if (!analyticsEnabled) {
    return { ok: true, analyticsEnabled: false };
  }

  assertEventType(event.eventType);

  const payload = normalizePayload(event.payload);
  const nextStatus =
    event.eventType === "attempt_started" ? "started" : "in_progress";

  const insertResult = await pool.query(
    `
      INSERT INTO analytics_events (
        attempt_id,
        event_type,
        question_id,
        question_index,
        selected_option,
        correct_option,
        is_correct,
        payload_json
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8::jsonb)
    `,
    [
      attemptId,
      event.eventType,
      event.questionId || null,
      Number.isInteger(event.questionIndex) ? event.questionIndex : null,
      Number.isInteger(event.selectedOption) ? event.selectedOption : null,
      Number.isInteger(event.correctOption) ? event.correctOption : null,
      typeof event.isCorrect === "boolean" ? event.isCorrect : null,
      JSON.stringify(payload),
    ],
  );

  const updateResult = await pool.query(
    `
      UPDATE analytics_attempts
      SET
        updated_at = NOW(),
        status = CASE
          WHEN status = 'started' AND $2 = 'in_progress' THEN 'in_progress'
          ELSE status
        END
      WHERE attempt_id = $1
    `,
    [attemptId, nextStatus],
  );

  if (insertResult.rowCount === 0 || updateResult.rowCount === 0) {
    throw new Error("No se encontró el intento analítico indicado.");
  }

  return { ok: true, analyticsEnabled: true };
}

async function completeAttempt(attemptId, summary) {
  if (!analyticsEnabled) {
    return { ok: true, analyticsEnabled: false };
  }

  const completionReason =
    typeof summary.completionReason === "string" && summary.completionReason.trim()
      ? summary.completionReason.trim()
      : "completed";
  const payload = normalizePayload(summary.payload);
  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    const previousAttemptResult = await client.query(
      `
        SELECT status
        FROM analytics_attempts
        WHERE attempt_id = $1
        FOR UPDATE
      `,
      [attemptId],
    );

    if (previousAttemptResult.rowCount === 0) {
      throw new Error("No se encontró el intento analítico indicado.");
    }

    const previousStatus = previousAttemptResult.rows[0].status;

    const updateResult = await client.query(
      `
        UPDATE analytics_attempts
        SET
          status = 'completed',
          completion_reason = $2,
          correct_answers = $3,
          total_questions = $4,
          accuracy = $5,
          updated_at = NOW(),
          completed_at = NOW()
        WHERE attempt_id = $1
      `,
      [
        attemptId,
        completionReason,
        summary.correctAnswers,
        summary.totalQuestions,
        summary.accuracy,
      ],
    );

    if (updateResult.rowCount === 0) {
      throw new Error("No se encontró el intento analítico indicado.");
    }

    if (previousStatus !== "completed") {
      await client.query(
        `
          INSERT INTO analytics_events (
            attempt_id,
            event_type,
            payload_json
          )
          VALUES ($1, $2, $3::jsonb)
        `,
        [attemptId, "attempt_completed", JSON.stringify(payload)],
      );
    }

    await client.query("COMMIT");
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }

  return { ok: true, analyticsEnabled: true };
}

async function abandonAttempt(attemptId, details) {
  if (!analyticsEnabled) {
    return { ok: true, analyticsEnabled: false };
  }

  const reason =
    typeof details.reason === "string" && details.reason.trim()
      ? details.reason.trim()
      : "abandoned";
  const payload = normalizePayload(details.payload);
  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    const updateResult = await client.query(
      `
        UPDATE analytics_attempts
        SET
          status = CASE
            WHEN status = 'completed' THEN status
            ELSE 'abandoned'
          END,
          completion_reason = CASE
            WHEN status = 'completed' THEN completion_reason
            ELSE $2
          END,
          updated_at = NOW(),
          completed_at = CASE
            WHEN status = 'completed' THEN completed_at
            ELSE NOW()
          END
        WHERE attempt_id = $1
        RETURNING status
      `,
      [attemptId, reason],
    );

    if (updateResult.rowCount > 0 && updateResult.rows[0].status !== "completed") {
      await client.query(
        `
          INSERT INTO analytics_events (
            attempt_id,
            event_type,
            payload_json
          )
          VALUES ($1, $2, $3::jsonb)
        `,
        [attemptId, "attempt_abandoned", JSON.stringify(payload)],
      );
    }

    await client.query("COMMIT");
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }

  return { ok: true, analyticsEnabled: true };
}

module.exports = {
  ATTEMPT_STATUSES,
  getRequestMetadata,
  initAnalytics,
  isEnabled,
  logEvent,
  createAttempt,
  completeAttempt,
  abandonAttempt,
  attemptsToCsv,
  clampExportLimit,
  clampOffset,
  listAttempts: async (filters = {}) => {
    if (!analyticsEnabled) {
      return { rows: [], total: 0, limit: 0, offset: 0 };
    }

    const limit = clampExportLimit(filters.limit);
    const offset = clampOffset(filters.offset);
    const { whereSql, params } = buildAttemptFilters(filters);

    const countResult = await pool.query(
      `
        SELECT COUNT(*)::INTEGER AS total
        FROM analytics_attempts
        ${whereSql}
      `,
      params,
    );

    const rowsResult = await pool.query(
      `
        SELECT
          attempt_id,
          test_code,
          test_category,
          test_level,
          test_title,
          status,
          origin_ip_hash,
          user_agent,
          referer,
          started_path,
          completion_reason,
          correct_answers,
          total_questions,
          accuracy,
          started_at,
          updated_at,
          completed_at
        FROM analytics_attempts
        ${whereSql}
        ORDER BY started_at DESC
        LIMIT $${params.length + 1}
        OFFSET $${params.length + 2}
      `,
      [...params, limit, offset],
    );

    return {
      rows: rowsResult.rows.map(mapAttemptRow),
      rawRows: rowsResult.rows,
      total: countResult.rows[0]?.total || 0,
      limit,
      offset,
    };
  },
  listAttemptEvents: async (attemptId, options = {}) => {
    if (!analyticsEnabled) {
      return [];
    }

    const limit = clampExportLimit(options.limit);
    const offset = clampOffset(options.offset);
    const result = await pool.query(
      `
        SELECT
          event_id,
          attempt_id,
          event_type,
          question_id,
          question_index,
          selected_option,
          correct_option,
          is_correct,
          payload_json,
          occurred_at
        FROM analytics_events
        WHERE attempt_id = $1
        ORDER BY occurred_at ASC, event_id ASC
        LIMIT $2
        OFFSET $3
      `,
      [attemptId, limit, offset],
    );

    return result.rows.map(mapEventRow);
  },
};
