const fs = require("fs");
const path = require("path");
const { QUESTION_BANKS, TOPIC_LABELS } = require("./question-banks");

const ROOT_DIR = path.resolve(__dirname, "..");
const TEXTS_DIR = path.join(ROOT_DIR, "texts");

const INTRO_TEXT =
  "Tengo las instrucciones para que puedas practicar tests de comprensión lectora. Hay 10 tests de tipo periodístico (PER1 a PER10) y 10 tests de tipo académico (EDU1 a EDU10). Tienen dificultad creciente. No hace falta llegar a la dificultad 10, ni a ningún otro número: es solo práctica de tests. Estos ejercicios no necesariamente se parecerán a evaluaciones oficiales; están pensados exclusivamente para práctica. Cada persona hace los que quiere. Si te resultan fáciles los primeros, podés saltear algunos; si no, podés seguir el orden. Cuando se te hagan muy difíciles, por ejemplo si obtenés resultados bajos, conviene seguir practicando en ese nivel hasta lograr un rendimiento alto y sostenido antes de pasar a otro más complejo.";

const LEVEL_TO_READING_TIME = {
  1: "3-4 minutos",
  2: "4-5 minutos",
  3: "4-6 minutos",
  4: "5-6 minutos",
  5: "6-7 minutos",
  6: "6-8 minutos",
  7: "7-9 minutos",
  8: "8-10 minutos",
  9: "10-12 minutos",
  10: "12-15 minutos",
};

const LEVEL_TO_QUESTION_RANGE = {
  1: "7 preguntas",
  2: "10 preguntas",
  3: "12 preguntas",
  4: "15 preguntas",
  5: "17 preguntas",
  6: "20 preguntas",
  7: "22 preguntas",
  8: "25 preguntas",
  9: "27 preguntas",
  10: "30 preguntas",
};

function parseTextFile(filePath) {
  const raw = fs.readFileSync(filePath, "utf8").trim();
  const lines = raw.split(/\r?\n/);
  const titleLine = lines[0] || "";
  const title = titleLine.replace(/^Título:\s*/i, "").trim();
  const body = lines.slice(1).join("\n").trim();
  const paragraphs = body
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return { title, paragraphs };
}

function sortByLevel(a, b) {
  return a.level - b.level;
}

function loadTests() {
  const categories = [
    { code: "PER", label: "Periodístico" },
    { code: "EDU", label: "Académico" },
  ];

  const tests = [];

  for (const category of categories) {
    const categoryDir = path.join(TEXTS_DIR, category.code);
    const files = fs
      .readdirSync(categoryDir)
      .filter((file) => file.endsWith(".txt"))
      .sort((a, b) => a.localeCompare(b, "es", { numeric: true }));

    for (const file of files) {
      const match = file.match(/(PER|EDU)(\d+)\.txt$/i);
      if (!match) continue;

      const [, testCode, levelText] = match;
      const level = Number(levelText);
      const code = `${testCode.toUpperCase()}${level}`;
      const filePath = path.join(categoryDir, file);
      const parsed = parseTextFile(filePath);
      const questions = QUESTION_BANKS[code] || [];

      tests.push({
        code,
        category: category.code,
        categoryLabel: category.label,
        level,
        title: parsed.title,
        paragraphs: parsed.paragraphs,
        readingTime: LEVEL_TO_READING_TIME[level],
        suggestedQuestionCount: LEVEL_TO_QUESTION_RANGE[level],
        available: questions.length > 0,
        availableLabel:
          questions.length > 0
            ? "Disponible"
            : "Próximamente: falta cargar el banco de preguntas",
        questions,
      });
    }
  }

  return tests.sort((a, b) => {
    if (a.category !== b.category) {
      return a.category.localeCompare(b.category);
    }
    return sortByLevel(a, b);
  });
}

const tests = loadTests();

function getPublicTestSummary(test) {
  return {
    code: test.code,
    category: test.category,
    categoryLabel: test.categoryLabel,
    level: test.level,
    title: test.title,
    readingTime: test.readingTime,
    suggestedQuestionCount: test.suggestedQuestionCount,
    available: test.available,
    availableLabel: test.availableLabel,
    questionCount: test.questions.length,
  };
}

function getTestByCode(code) {
  return tests.find((test) => test.code === code.toUpperCase()) || null;
}

module.exports = {
  INTRO_TEXT,
  TOPIC_LABELS,
  getPublicTestSummary,
  getTestByCode,
  tests,
};
