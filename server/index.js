const express = require("express");
const path = require("path");
const analytics = require("./analytics");

const {
  INTRO_TEXT,
  TOPIC_LABELS,
  getPublicTestSummary,
  getTestByCode,
  tests,
} = require("./data");

const app = express();
const PORT = Number(process.env.PORT || 3000);
const ADMIN_API_TOKEN = process.env.ADMIN_API_TOKEN || "";

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

function requireAdminToken(req, res, next) {
  if (!analytics.isEnabled()) {
    return res.status(404).json({ error: "Analytics no está habilitado." });
  }

  if (!ADMIN_API_TOKEN) {
    return res.status(503).json({
      error: "El acceso administrativo no está configurado en este servidor.",
    });
  }

  const authHeader = req.get("authorization") || "";
  const bearerPrefix = "Bearer ";
  const token = authHeader.startsWith(bearerPrefix)
    ? authHeader.slice(bearerPrefix.length).trim()
    : "";

  if (!token || token !== ADMIN_API_TOKEN) {
    return res.status(401).json({ error: "No autorizado." });
  }

  return next();
}

app.get("/api/config", (_req, res) => {
  res.json({
    appTitle: "Sistema de Práctica de Tests de Comprensión Lectora",
    introText: INTRO_TEXT,
    topicLabels: TOPIC_LABELS,
    availableCount: tests.filter((test) => test.available).length,
    totalCount: tests.length,
    analyticsEnabled: analytics.isEnabled(),
  });
});

app.get("/api/tests", (_req, res) => {
  const summaries = tests.map(getPublicTestSummary);
  res.json(summaries);
});

app.get("/api/tests/:code", (req, res) => {
  const test = getTestByCode(req.params.code);
  if (!test) {
    return res.status(404).json({ error: "Test no encontrado." });
  }

  return res.json({
    ...getPublicTestSummary(test),
    paragraphs: test.paragraphs,
    questions: test.questions,
  });
});

app.post("/api/attempts", async (req, res) => {
  if (!analytics.isEnabled()) {
    return res.status(201).json({ attemptId: null, analyticsEnabled: false });
  }

  const testCode =
    typeof req.body?.testCode === "string" ? req.body.testCode.trim() : "";
  if (!testCode) {
    return res
      .status(400)
      .json({ error: "Hace falta indicar el código de test para iniciar el intento." });
  }

  const test = getTestByCode(testCode);
  if (!test || !test.available) {
    return res
      .status(404)
      .json({ error: "No se encontró un test disponible para iniciar el intento." });
  }

  try {
    const attempt = await analytics.createAttempt({
      test,
      requestMetadata: analytics.getRequestMetadata(req),
    });

    return res.status(201).json(attempt);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "No se pudo registrar el inicio del intento." });
  }
});

app.post("/api/attempts/:attemptId/events", async (req, res) => {
  if (!analytics.isEnabled()) {
    return res.status(202).json({ ok: true, analyticsEnabled: false });
  }

  const attemptId =
    typeof req.params.attemptId === "string" ? req.params.attemptId.trim() : "";
  const eventType =
    typeof req.body?.eventType === "string" ? req.body.eventType.trim() : "";

  if (!attemptId || !eventType) {
    return res
      .status(400)
      .json({ error: "Hace falta indicar el intento y el tipo de evento." });
  }

  try {
    const result = await analytics.logEvent(attemptId, {
      eventType,
      questionId: req.body?.questionId,
      questionIndex: req.body?.questionIndex,
      selectedOption: req.body?.selectedOption,
      correctOption: req.body?.correctOption,
      isCorrect: req.body?.isCorrect,
      payload: req.body?.payload,
    });

    return res.status(201).json(result);
  } catch (error) {
    return res
      .status(400)
      .json({ error: error.message || "No se pudo registrar el evento analítico." });
  }
});

app.post("/api/attempts/:attemptId/complete", async (req, res) => {
  if (!analytics.isEnabled()) {
    return res.status(202).json({ ok: true, analyticsEnabled: false });
  }

  const attemptId =
    typeof req.params.attemptId === "string" ? req.params.attemptId.trim() : "";

  if (!attemptId) {
    return res.status(400).json({ error: "Hace falta indicar el intento." });
  }

  const { correctAnswers, totalQuestions, accuracy, completionReason, payload } =
    req.body || {};

  if (
    !Number.isInteger(correctAnswers) ||
    !Number.isInteger(totalQuestions) ||
    typeof accuracy !== "number"
  ) {
    return res.status(400).json({
      error:
        "Hace falta indicar correctAnswers, totalQuestions y accuracy para cerrar el intento.",
    });
  }

  try {
    const result = await analytics.completeAttempt(attemptId, {
      correctAnswers,
      totalQuestions,
      accuracy,
      completionReason,
      payload,
    });

    return res.status(201).json(result);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "No se pudo registrar el cierre del intento." });
  }
});

app.post("/api/attempts/:attemptId/abandon", async (req, res) => {
  if (!analytics.isEnabled()) {
    return res.status(202).json({ ok: true, analyticsEnabled: false });
  }

  const attemptId =
    typeof req.params.attemptId === "string" ? req.params.attemptId.trim() : "";
  if (!attemptId) {
    return res.status(400).json({ error: "Hace falta indicar el intento." });
  }

  try {
    const result = await analytics.abandonAttempt(attemptId, {
      reason: req.body?.reason,
      payload: req.body?.payload,
    });

    return res.status(201).json(result);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "No se pudo registrar el abandono del intento." });
  }
});

app.get("/api/admin/attempts", requireAdminToken, async (req, res) => {
  try {
    const result = await analytics.listAttempts({
      testCode: req.query.testCode,
      status: req.query.status,
      originIpHash: req.query.originIpHash,
      limit: req.query.limit,
      offset: req.query.offset,
    });

    return res.json({
      total: result.total,
      limit: result.limit,
      offset: result.offset,
      rows: result.rows,
    });
  } catch (_error) {
    return res
      .status(500)
      .json({ error: "No se pudieron recuperar los intentos analíticos." });
  }
});

app.get("/api/admin/attempts.csv", requireAdminToken, async (req, res) => {
  try {
    const result = await analytics.listAttempts({
      testCode: req.query.testCode,
      status: req.query.status,
      originIpHash: req.query.originIpHash,
      limit: req.query.limit,
      offset: req.query.offset,
    });

    res.setHeader("Content-Type", "text/csv; charset=utf-8");
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=\"analytics-attempts.csv\"",
    );
    return res.send(analytics.attemptsToCsv(result.rawRows));
  } catch (_error) {
    return res
      .status(500)
      .json({ error: "No se pudo exportar el CSV de intentos." });
  }
});

app.get("/api/admin/attempts/:attemptId/events", requireAdminToken, async (req, res) => {
  const attemptId =
    typeof req.params.attemptId === "string" ? req.params.attemptId.trim() : "";
  if (!attemptId) {
    return res.status(400).json({ error: "Hace falta indicar el intento." });
  }

  try {
    const rows = await analytics.listAttemptEvents(attemptId, {
      limit: req.query.limit,
      offset: req.query.offset,
    });

    return res.json({
      attemptId,
      limit: analytics.clampExportLimit(req.query.limit),
      offset: analytics.clampOffset(req.query.offset),
      rows,
    });
  } catch (_error) {
    return res
      .status(500)
      .json({ error: "No se pudieron recuperar los eventos del intento." });
  }
});

app.get(/.*/, (_req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

async function startServer() {
  await analytics.initAnalytics();

  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
  });
}

startServer().catch((error) => {
  // eslint-disable-next-line no-console
  console.error("No se pudo iniciar el servidor.", error);
  process.exit(1);
});
