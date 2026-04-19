const app = document.querySelector("#app");
const backButton = document.querySelector("#backToSelection");
const statusMessage = document.querySelector("#statusMessage");

const state = {
  config: null,
  tests: [],
  selectedTest: null,
  phase: "loading",
  questionIndex: 0,
  selectedOption: null,
  feedback: null,
  answers: [],
  errorMessage: "",
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function announce(message) {
  if (!statusMessage) return;
  statusMessage.textContent = "";
  window.requestAnimationFrame(() => {
    statusMessage.textContent = message;
  });
}

function formatPercentage(value) {
  return `${Math.round(value * 100)}%`;
}

async function fetchJson(url, fallbackMessage) {
  const response = await fetch(url);
  const contentType = response.headers.get("content-type") || "";
  const rawBody = await response.text();

  if (!response.ok) {
    let message = fallbackMessage;
    if (contentType.includes("application/json")) {
      try {
        const parsed = JSON.parse(rawBody);
        if (parsed && typeof parsed.error === "string") {
          message = parsed.error;
        }
      } catch (_error) {
        // Conserva el mensaje genérico si el JSON vino roto.
      }
    } else if (rawBody.trim()) {
      message = `${fallbackMessage} (HTTP ${response.status})`;
    }
    throw new Error(message);
  }

  if (!contentType.includes("application/json")) {
    throw new Error(fallbackMessage);
  }

  try {
    return JSON.parse(rawBody);
  } catch (_error) {
    throw new Error(fallbackMessage);
  }
}

function hasActiveAttempt() {
  return (
    Boolean(state.selectedTest) &&
    (state.phase === "reading" || state.phase === "question")
  );
}

function confirmResetToSelection() {
  if (!hasActiveAttempt()) return true;

  return window.confirm(
    "Si volvés al catálogo, se perderá el progreso actual de este test. ¿Querés continuar?",
  );
}

function showLoading() {
  const template = document.querySelector("#loadingTemplate");
  app.innerHTML = "";
  app.append(template.content.cloneNode(true));
}

function showError(message) {
  const template = document.querySelector("#errorTemplate");
  app.innerHTML = "";
  app.append(template.content.cloneNode(true));
  app.querySelector("#errorMessage").textContent = message;
  app.querySelector("#retryButton").addEventListener("click", initializeApp);
  announce(message);
}

function updateBackButton() {
  const show =
    state.phase === "reading" ||
    state.phase === "question" ||
    state.phase === "result";
  backButton.classList.toggle("hidden", !show);
}

function render() {
  updateBackButton();

  if (state.phase === "loading") {
    showLoading();
    return;
  }

  if (state.phase === "error") {
    showError(state.errorMessage);
    return;
  }

  if (state.phase === "intro") {
    renderIntro();
    return;
  }

  if (state.phase === "selection") {
    renderSelection();
    return;
  }

  if (state.phase === "reading") {
    renderReading();
    return;
  }

  if (state.phase === "question") {
    renderQuestion();
    return;
  }

  if (state.phase === "result") {
    renderResult();
  }
}

function renderIntro() {
  app.innerHTML = `
    <section class="panel intro-card">
      <span class="status-chip">Introducción obligatoria</span>
      <h2>Antes de empezar</h2>
      <p>${escapeHtml(state.config.introText)}</p>
      <p class="muted">
        Esta app está pensada para práctica exclusiva en navegador y ya incluye
        todos los tests disponibles en el catálogo.
      </p>
      <p class="muted">
        Actualmente hay <strong>${escapeHtml(state.config.availableCount)}</strong>
        tests disponibles sobre un total de
        <strong>${escapeHtml(state.config.totalCount)}</strong>.
      </p>
      <div class="inline-actions">
        <button id="continueToCatalog" class="primary-button" type="button">
          Ver tests disponibles
        </button>
      </div>
    </section>
  `;

  app.querySelector("#continueToCatalog").addEventListener("click", () => {
    state.phase = "selection";
    render();
  });
}

function groupTestsByCategory() {
  return state.tests.reduce((accumulator, test) => {
    if (!accumulator[test.category]) {
      accumulator[test.category] = {
        label: test.categoryLabel,
        tests: [],
      };
    }
    accumulator[test.category].tests.push(test);
    return accumulator;
  }, {});
}

function renderSelection() {
  const grouped = groupTestsByCategory();
  const categorySections = Object.values(grouped)
    .map((group) => {
      const cards = group.tests
        .map((test) => {
          const disabled = !test.available;
          return `
            <article class="test-card ${disabled ? "unavailable" : ""}">
              <div>
                <div class="test-meta">
                  <span class="pill">${escapeHtml(test.code)}</span>
                  <span class="pill">Nivel ${test.level}/10</span>
                  <span class="pill">${escapeHtml(test.readingTime)}</span>
                  <span class="pill">${test.questionCount} preguntas</span>
                </div>
                <h3>${escapeHtml(test.title)}</h3>
                <p class="muted">
                  ${escapeHtml(test.availableLabel)}. Este test incluye
                  ${escapeHtml(test.suggestedQuestionCount)}.
                </p>
              </div>
              <button
                class="${disabled ? "ghost-button" : "primary-button"}"
                type="button"
                data-code="${escapeHtml(test.code)}"
                ${disabled ? "disabled" : ""}
              >
                ${disabled ? "Banco de preguntas pendiente" : "Comenzar test"}
              </button>
            </article>
          `;
        })
        .join("");

      return `
        <section class="panel stack">
          <div>
            <h2>Serie ${escapeHtml(group.label)}</h2>
            <p class="muted">Elegí un test para empezar.</p>
          </div>
          <div class="catalog-grid">
            ${cards}
          </div>
        </section>
      `;
    })
    .join("");

  app.innerHTML = `
    <section class="panel stack">
      <span class="status-chip">Catálogo de tests</span>
      <h2>Elegí qué querés rendir</h2>
      <p class="muted">
        Todos los tests del catálogo están listos para rendirse desde la app.
      </p>
    </section>
    ${categorySections}
  `;

  app.querySelectorAll("button[data-code]").forEach((button) => {
    button.addEventListener("click", () => startTest(button.dataset.code));
  });
}

async function startTest(code) {
  try {
    state.phase = "loading";
    render();
    const test = await fetchJson(
      `/api/tests/${encodeURIComponent(code)}`,
      "No se pudo cargar el test seleccionado.",
    );
    if (!Array.isArray(test.questions) || test.questions.length === 0) {
      throw new Error(
        "Este test no tiene preguntas cargadas correctamente en este momento.",
      );
    }

    state.selectedTest = test;
    state.phase = "reading";
    state.questionIndex = 0;
    state.selectedOption = null;
    state.feedback = null;
    state.answers = [];
    render();
  } catch (error) {
    state.phase = "error";
    state.errorMessage = error.message;
    render();
  }
}

function renderReading() {
  const test = state.selectedTest;
  const isReturningFromQuestions =
    state.answers.length > 0 || state.questionIndex > 0 || state.feedback;
  const paragraphs = test.paragraphs
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join("");

  app.innerHTML = `
    <section class="panel reading-layout">
      <div class="stack">
        <span class="status-chip">Lectura</span>
        <h2>${escapeHtml(test.code)} - ${escapeHtml(test.title)}</h2>
        <div class="test-meta">
          <span class="pill">${escapeHtml(test.categoryLabel)}</span>
          <span class="pill">Nivel ${test.level}/10</span>
          <span class="pill">Tiempo sugerido: ${escapeHtml(test.readingTime)}</span>
        </div>
        <p class="muted">
          ${
            isReturningFromQuestions
              ? "Podés releer el texto y luego retomar el examen sin perder tu progreso."
              : "Leé el texto completo. Cuando termines, hacé clic en"
          }
          ${
            isReturningFromQuestions
              ? ""
              : '<strong>Listo, terminé de leer</strong> para empezar las preguntas.'
          }
        </p>
      </div>
      <div class="text-block">
        ${paragraphs}
      </div>
      <div class="inline-actions">
        <button id="startQuestions" class="primary-button" type="button">
          ${
            isReturningFromQuestions
              ? "Volver a las preguntas"
              : "Listo, terminé de leer"
          }
        </button>
      </div>
    </section>
  `;

  app.querySelector("#startQuestions").addEventListener("click", () => {
    state.phase = "question";
    render();
  });
}

function getCurrentQuestion() {
  return state.selectedTest?.questions?.[state.questionIndex] || null;
}

function renderQuestion() {
  const question = getCurrentQuestion();
  if (!question) {
    state.phase = "error";
    state.errorMessage =
      "No se pudo recuperar la pregunta actual. Volvé a cargar el test.";
    render();
    return;
  }
  const totalQuestions = state.selectedTest.questions.length;

  const options = question.options
    .map((option, index) => {
      let className = "option-card";
      if (state.feedback) {
        if (index === question.correctOptionIndex) {
          className += " correct";
        } else if (
          index === state.selectedOption &&
          state.selectedOption !== question.correctOptionIndex
        ) {
          className += " incorrect";
        }
      } else if (index === state.selectedOption) {
        className += " selected";
      }

      return `
        <label class="${className}">
          <input
            class="option-input"
            type="radio"
            name="currentQuestion"
            value="${index}"
            data-option-index="${index}"
            ${index === state.selectedOption ? "checked" : ""}
            ${state.feedback ? "disabled" : ""}
          />
          <span class="option-label">
            <strong>${String.fromCharCode(65 + index)}.</strong> ${escapeHtml(option)}
          </span>
        </label>
      `;
    })
    .join("");

  const feedbackHtml = state.feedback
    ? `
      <section class="feedback-panel ${state.feedback.isCorrect ? "correct" : "incorrect"}">
        <h3>${state.feedback.isCorrect ? "Correcto" : "Incorrecto"}</h3>
        <p>
          <strong>Respuesta correcta:</strong>
          ${String.fromCharCode(65 + question.correctOptionIndex)}.
          ${escapeHtml(question.options[question.correctOptionIndex])}
        </p>
        <p>${escapeHtml(question.explanation)}</p>
      </section>
      <section class="tip-box">
        <strong>Tip pedagógico:</strong>
        ${escapeHtml(question.tip)}
      </section>
      <div class="inline-actions">
        <button id="backToReading" class="ghost-button" type="button">
          Volver al texto
        </button>
        <button id="nextQuestion" class="primary-button" type="button">
          ${
            state.questionIndex === totalQuestions - 1
              ? "Ver resultado final"
              : "Siguiente pregunta"
          }
        </button>
      </div>
    `
    : `
      <div class="inline-actions">
        <button id="backToReading" class="ghost-button" type="button">
          Volver al texto
        </button>
        <button id="submitAnswer" class="primary-button" type="button" ${
          state.selectedOption === null ? "disabled" : ""
        }>
          Corregir respuesta
        </button>
      </div>
    `;

  app.innerHTML = `
    <section class="panel stack">
      <div class="question-header">
        <div>
          <span class="status-chip">Modo guiado</span>
          <h2>${escapeHtml(state.selectedTest.code)} - Preguntas</h2>
        </div>
        <p class="progress">Pregunta ${state.questionIndex + 1} de ${totalQuestions}</p>
      </div>
      <section class="panel stack">
        <fieldset class="question-fieldset">
          <legend id="questionPrompt" class="question-legend" tabindex="-1">
            ${escapeHtml(question.prompt)}
          </legend>
          <div class="options-grid">
            ${options}
          </div>
        </fieldset>
      </section>
      ${feedbackHtml}
    </section>
  `;

  app.querySelectorAll("[data-option-index]").forEach((button) => {
    button.addEventListener("change", () => {
      state.selectedOption = Number(button.dataset.optionIndex);
      renderQuestion();
    });
  });

  const promptElement = app.querySelector("#questionPrompt");
  if (promptElement) {
    promptElement.focus();
  }

  const submitButton = app.querySelector("#submitAnswer");
  if (submitButton) {
    submitButton.addEventListener("click", submitCurrentAnswer);
  }

  const nextButton = app.querySelector("#nextQuestion");
  if (nextButton) {
    nextButton.addEventListener("click", advanceQuestion);
  }

  const backToReadingButton = app.querySelector("#backToReading");
  if (backToReadingButton) {
    backToReadingButton.addEventListener("click", () => {
      state.phase = "reading";
      render();
    });
  }
}

function submitCurrentAnswer() {
  const question = getCurrentQuestion();
  const isCorrect = state.selectedOption === question.correctOptionIndex;

  state.answers.push({
    questionId: question.id,
    selectedOption: state.selectedOption,
    correctOption: question.correctOptionIndex,
    isCorrect,
    topics: question.topics,
  });

  state.feedback = { isCorrect };
  announce(
    isCorrect
      ? `Respuesta correcta en la pregunta ${state.questionIndex + 1}.`
      : `Respuesta incorrecta en la pregunta ${state.questionIndex + 1}.`,
  );
  render();
}

function advanceQuestion() {
  const isLast = state.questionIndex >= state.selectedTest.questions.length - 1;
  if (isLast) {
    state.phase = "result";
    render();
    return;
  }

  state.questionIndex += 1;
  state.selectedOption = null;
  state.feedback = null;
  render();
}

function buildSummary() {
  const total = state.selectedTest.questions.length;
  const correct = state.answers.filter((answer) => answer.isCorrect).length;
  const wrong = total - correct;
  const accuracy = total > 0 ? correct / total : 0;

  const correctTopicCounts = {};
  const wrongTopicCounts = {};

  for (const answer of state.answers) {
    const bucket = answer.isCorrect ? correctTopicCounts : wrongTopicCounts;
    for (const topic of answer.topics) {
      bucket[topic] = (bucket[topic] || 0) + 1;
    }
  }

  const strengths = Object.entries(correctTopicCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([topic]) => state.config.topicLabels[topic] || topic);

  const errors = Object.entries(wrongTopicCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([topic]) => state.config.topicLabels[topic] || topic);

  let diagnosis = "Buen trabajo general.";
  if (accuracy >= 0.9) {
    diagnosis = "Mostraste una comprensión muy sólida del texto y casi no cometiste errores.";
  } else if (accuracy >= 0.75) {
    diagnosis = "La comprensión es buena, aunque todavía hay algunos puntos para afinar.";
  } else if (accuracy >= 0.5) {
    diagnosis = "La comprensión es intermedia: captaste varias ideas, pero todavía conviene consolidar el nivel.";
  } else {
    diagnosis = "El texto todavía presenta dificultades importantes; conviene seguir practicando este mismo nivel.";
  }

  const nextCode = `${state.selectedTest.category}${state.selectedTest.level + 1}`;
  const nextTest = state.tests.find((test) => test.code === nextCode) || null;

  let recommendation;
  if (accuracy >= 0.8 && nextTest && nextTest.available) {
    recommendation = `Ya podés probar ${nextTest.code}.`;
  } else if (accuracy >= 0.8 && nextTest) {
    recommendation = `Tu resultado ya permite pensar en ${nextTest.code}, pero su banco de preguntas todavía no está cargado en la app.`;
  } else if (accuracy >= 0.8 && !nextTest) {
    recommendation =
      "Ya completaste el nivel más alto de esta serie con un muy buen resultado. Podés repetirlo para consolidarte o pasar a la otra serie.";
  } else if (accuracy >= 0.5) {
    recommendation = `Conviene repetir ${state.selectedTest.code} hasta lograr un rendimiento alto y sostenido antes de subir de nivel.`;
  } else {
    recommendation = `Lo mejor es seguir practicando ${state.selectedTest.code} antes de pasar a un texto más complejo.`;
  }

  return {
    total,
    correct,
    wrong,
    accuracy,
    diagnosis,
    strengths: strengths.length ? strengths : ["identificación parcial del contenido central"],
    errors: errors.length ? errors : ["sin un patrón de error dominante"],
    recommendation,
  };
}

function renderResult() {
  const summary = buildSummary();

  app.innerHTML = `
    <section class="panel final-grid">
      <span class="status-chip">Resultado final</span>
      <div class="score-card">
        <div>
          <h2>${escapeHtml(state.selectedTest.code)} completado</h2>
          <p class="muted">${escapeHtml(summary.diagnosis)}</p>
        </div>
        <div>
          <div class="score-value">${summary.correct}/${summary.total}</div>
          <p class="muted">${escapeHtml(formatPercentage(summary.accuracy))} de aciertos</p>
        </div>
      </div>

      <div class="two-columns">
        <section class="panel list-card">
          <h3>Fortalezas</h3>
          <ul>
            ${summary.strengths
              .map((item) => `<li>${escapeHtml(item)}</li>`)
              .join("")}
          </ul>
        </section>
        <section class="panel list-card">
          <h3>Errores principales</h3>
          <ul>
            ${summary.errors.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </section>
      </div>

      <section class="panel">
        <h3>Recomendación</h3>
        <p>${escapeHtml(summary.recommendation)}</p>
      </section>

      <div class="inline-actions">
        <button id="retryCurrentTest" class="primary-button" type="button">
          Repetir este test
        </button>
        <button id="returnToCatalog" class="ghost-button" type="button">
          Volver al catálogo
        </button>
      </div>
    </section>
  `;

  app.querySelector("#retryCurrentTest").addEventListener("click", () => {
    startTest(state.selectedTest.code);
  });

  app.querySelector("#returnToCatalog").addEventListener("click", () => {
    resetToSelection();
  });
}

function resetToSelection(force = false) {
  if (!force && !confirmResetToSelection()) {
    return;
  }

  state.selectedTest = null;
  state.questionIndex = 0;
  state.selectedOption = null;
  state.feedback = null;
  state.answers = [];
  state.phase = "selection";
  render();
}

async function initializeApp() {
  try {
    state.phase = "loading";
    render();

    const [config, tests] = await Promise.all([
      fetchJson("/api/config", "No se pudo cargar la configuración de la app."),
      fetchJson("/api/tests", "No se pudo cargar el catálogo de tests."),
    ]);
    state.config = config;
    state.tests = tests;
    state.phase = "intro";
    announce("Aplicación lista. Ya podés elegir un test.");
    render();
  } catch (error) {
    state.phase = "error";
    state.errorMessage =
      error.message || "Ocurrió un problema al iniciar la aplicación.";
    render();
  }
}

backButton.addEventListener("click", () => {
  resetToSelection();
});
initializeApp();
