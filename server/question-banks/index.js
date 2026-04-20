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

function parseSpecialOption(optionText) {
  const trimmed = optionText.trim();

  if (/^todas las anteriores$/i.test(trimmed)) {
    return { type: "all" };
  }

  if (/^ninguna de las anteriores$/i.test(trimmed)) {
    return { type: "none" };
  }

  if (/^[A-E](?:\s*(?:,|y)\s*[A-E])*$/i.test(trimmed)) {
    return {
      type: "letters",
      letters: [...trimmed.toUpperCase().matchAll(/[A-E]/g)].map(
        (match) => match[0],
      ),
    };
  }

  return null;
}

function buildLetterCombo(indices) {
  const letters = indices.map((index) => String.fromCharCode(65 + index));
  if (letters.length === 2) {
    return `${letters[0]} y ${letters[1]}`;
  }
  if (letters.length === 3) {
    return `${letters[0]}, ${letters[1]} y ${letters[2]}`;
  }
  return letters.join(", ");
}

function moveIndexStable(indices, fromPosition, toPosition) {
  const next = indices.slice();
  const [item] = next.splice(fromPosition, 1);
  next.splice(toPosition, 0, item);
  return next;
}

function rebalanceQuestions(questions) {
  const assignedCounts = new Map();

  return questions.map((question) => {
    const optionIndices = question.options.map((_, index) => index);
    const specialIndex = question.options.findIndex((option) =>
      parseSpecialOption(option),
    );
    const special =
      specialIndex >= 0 ? parseSpecialOption(question.options[specialIndex]) : null;
    const movableIndices =
      specialIndex >= 0
        ? optionIndices.filter((index) => index !== specialIndex)
        : optionIndices;

    const candidateTargets =
      question.correctOptionIndex === specialIndex
        ? [specialIndex]
        : movableIndices.filter((index) => index >= 0);

    const targetIndex = candidateTargets
      .slice()
      .sort((left, right) => {
        const countDifference =
          (assignedCounts.get(left) || 0) - (assignedCounts.get(right) || 0);
        if (countDifference !== 0) {
          return countDifference;
        }

        const center = (question.options.length - 1) / 2;
        const leftDistance = Math.abs(left - center);
        const rightDistance = Math.abs(right - center);
        if (leftDistance !== rightDistance) {
          return leftDistance - rightDistance;
        }

        return left - right;
      })[0];

    assignedCounts.set(targetIndex, (assignedCounts.get(targetIndex) || 0) + 1);

    let nextOrder;
    if (specialIndex >= 0 && question.correctOptionIndex !== specialIndex) {
      const fromPosition = movableIndices.indexOf(question.correctOptionIndex);
      const toPosition = movableIndices.indexOf(targetIndex);
      const movedIndices = moveIndexStable(
        movableIndices,
        fromPosition,
        toPosition,
      );

      nextOrder = [];
      let movedCursor = 0;
      for (let index = 0; index < question.options.length; index += 1) {
        if (index === specialIndex) {
          nextOrder.push(specialIndex);
        } else {
          nextOrder.push(movedIndices[movedCursor]);
          movedCursor += 1;
        }
      }
    } else {
      nextOrder = moveIndexStable(
        optionIndices,
        optionIndices.indexOf(question.correctOptionIndex),
        optionIndices.indexOf(targetIndex),
      );
    }

    const nextIndexByPreviousIndex = new Map();
    nextOrder.forEach((previousIndex, nextIndex) => {
      nextIndexByPreviousIndex.set(previousIndex, nextIndex);
    });

    const nextOptions = nextOrder.map(
      (previousIndex) => question.options[previousIndex],
    );

    if (special?.type === "letters") {
      const referencedPreviousIndices = special.letters.map(
        (letter) => letter.charCodeAt(0) - 65,
      );
      const nextSpecialIndex = nextIndexByPreviousIndex.get(specialIndex);
      const nextReferencedIndices = referencedPreviousIndices
        .map((previousIndex) => nextIndexByPreviousIndex.get(previousIndex))
        .sort((left, right) => left - right);
      nextOptions[nextSpecialIndex] = buildLetterCombo(nextReferencedIndices);
    }

    return {
      ...question,
      options: nextOptions,
      correctOptionIndex: nextIndexByPreviousIndex.get(question.correctOptionIndex),
    };
  });
}

const QUESTION_BANKS = {
  ...Object.fromEntries(
    Object.entries({
      ...perLow,
      ...perHigh,
      ...eduLow,
      ...eduHigh,
    }).map(([code, questions]) => [code, rebalanceQuestions(questions)]),
  ),
};

module.exports = {
  QUESTION_BANKS,
  TOPIC_LABELS,
};
