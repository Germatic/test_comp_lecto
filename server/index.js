const express = require("express");
const path = require("path");

const {
  INTRO_TEXT,
  TOPIC_LABELS,
  getPublicTestSummary,
  getTestByCode,
  tests,
} = require("./data");

const app = express();
const PORT = Number(process.env.PORT || 3000);

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/api/config", (_req, res) => {
  res.json({
    appTitle: "Sistema de Práctica de Tests de Comprensión Lectora",
    introText: INTRO_TEXT,
    topicLabels: TOPIC_LABELS,
    availableCount: tests.filter((test) => test.available).length,
    totalCount: tests.length,
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

app.get(/.*/, (_req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
