const perLow = require("./per-low");
const perHigh = require("./per-high");
const eduLow = require("./edu-low");
const eduHigh = require("./edu-high");

const TOPIC_LABELS = {
  mainIdea: "idea principal",
  details: "lectura literal de datos y comportamientos",
  inference: "inferencias válidas",
  causeEffect: "relaciones causales",
  tools: "función de elementos secundarios del texto",
  conclusion: "conclusión general",
  vocabulary: "vocabulario en contexto",
  structure: "estructura y organización del texto",
};

const QUESTION_BANKS = {
  ...perLow,
  ...perHigh,
  ...eduLow,
  ...eduHigh,
};

module.exports = {
  QUESTION_BANKS,
  TOPIC_LABELS,
};
