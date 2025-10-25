const topics = {
  fractions: {
    title: "Fractions & Mixed Numbers",
    questions: [
      {
        prompt:
          "Lena baked 3 pies. She cut each pie into 8 equal slices and shared 14 slices with her classmates. How many pies were left?",
        choices: ["1 1/2 pies", "1 2/8 pies", "2 2/8 pies", "1 6/8 pies"],
        answer: 0,
        hint: "14 slices is the same as 1 whole pie (8 slices) plus 6 more slices.",
      },
      {
        prompt:
          "Add: 2/3 + 3/4. Write your answer as a fraction in simplest form.",
        choices: ["5/7", "17/12", "17/16", "23/12"],
        answer: 1,
        hint: "Find a common denominator by using twelfths.",
      },
      {
        prompt:
          "Which expression shows how to multiply 1 1/2 × 2/5?",
        choices: [
          "(3/2) × (2/5)",
          "(1/2) × (5/2)",
          "(2/3) × (5/2)",
          "(5/2) × (3/5)",
        ],
        answer: 0,
        hint: "Rewrite the mixed number as an improper fraction before multiplying.",
      },
      {
        prompt:
          "A recipe needs 3/4 cup of sugar. Ezra only has a 1/8-cup scoop. How many scoops does he need?",
        choices: ["4 scoops", "6 scoops", "8 scoops", "10 scoops"],
        answer: 1,
        hint: "How many eighths make three fourths?",
      },
    ],
  },
  decimals: {
    title: "Decimals & Place Value",
    questions: [
      {
        prompt:
          "Which number is greater: 4.305 or 4.35?",
        choices: ["4.305", "4.35", "They are equal", "Need more information"],
        answer: 1,
        hint: "Compare tenths, then hundredths, then thousandths.",
      },
      {
        prompt:
          "Write the number 5,206.407 in expanded form.",
        choices: [
          "5,000 + 200 + 6 + 0.4 + 0.007",
          "5,000 + 200 + 6 + 0.04 + 0.007",
          "5,000 + 20 + 6 + 0.4 + 0.007",
          "5,000 + 200 + 0.6 + 0.04 + 0.007",
        ],
        answer: 0,
        hint: "Each digit represents a different place value, including decimals.",
      },
      {
        prompt:
          "Round 8.964 to the nearest tenth.",
        choices: ["8.9", "9.0", "8.96", "8.97"],
        answer: 1,
        hint: "Look at the hundredths place to decide how to round the tenths place.",
      },
      {
        prompt:
          "Sasha ran 2.75 km and Jordan ran 2.708 km. How much farther did Sasha run?",
        choices: ["0.042 km", "0.052 km", "0.062 km", "0.102 km"],
        answer: 0,
        hint: "Line up the decimals before subtracting.",
      },
    ],
  },
  geometry: {
    title: "Geometry & Measurement",
    questions: [
      {
        prompt:
          "A rectangular prism has a length of 5 cm, width of 3 cm, and height of 4 cm. What is its volume?",
        choices: ["12 cubic cm", "15 cubic cm", "60 cubic cm", "64 cubic cm"],
        answer: 2,
        hint: "Multiply length × width × height.",
      },
      {
        prompt:
          "Which coordinate point lies in Quadrant II of the coordinate plane?",
        choices: ["(3, -4)", "(-3, 4)", "(-5, -2)", "(4, 3)"],
        answer: 1,
        hint: "Quadrant II has negative x-values and positive y-values.",
      },
      {
        prompt:
          "The perimeter of an equilateral triangle is 27 cm. What is the length of each side?",
        choices: ["6 cm", "7 cm", "8 cm", "9 cm"],
        answer: 3,
        hint: "All sides of an equilateral triangle are equal.",
      },
      {
        prompt:
          "Convert 3.5 liters to milliliters.",
        choices: ["350 mL", "3,500 mL", "35 mL", "30,500 mL"],
        answer: 1,
        hint: "1 liter equals 1,000 milliliters.",
      },
    ],
  },
  algebra: {
    title: "Patterns & Algebraic Thinking",
    questions: [
      {
        prompt:
          "What is the value of 3 × (n + 4) when n = 5?",
        choices: ["12", "15", "21", "27"],
        answer: 3,
        hint: "Substitute 5 for n, then follow the order of operations.",
      },
      {
        prompt:
          "A pattern rule is 'multiply by 2, then subtract 3'. If the first term is 4, what is the third term?",
        choices: ["5", "7", "9", "11"],
        answer: 1,
        hint: "Apply the rule step-by-step to each new term.",
      },
      {
        prompt:
          "Solve for m: 4m − 7 = 21.",
        choices: ["m = 4", "m = 5", "m = 6", "m = 7"],
        answer: 2,
        hint: "Undo subtraction first, then divide by 4.",
      },
      {
        prompt:
          "Which expression is equivalent to 5 × 6 + 5 × 4?",
        choices: ["5 × 10", "10 × 5", "5 × (6 + 4)", "(5 + 6) × 4"],
        answer: 2,
        hint: "Use the distributive property.",
      },
    ],
  },
  wordProblems: {
    title: "Multi-step Word Problems",
    questions: [
      {
        prompt:
          "A class is making gift bags. Each bag needs 3 pencils and 2 stickers. If the class has 48 pencils and 40 stickers, how many complete bags can they make?",
        choices: ["16 bags", "18 bags", "20 bags", "24 bags"],
        answer: 0,
        hint: "Find how many bags each supply can make, then take the smaller number.",
      },
      {
        prompt:
          "Maya read 156 pages in 3 days. She read the same number of pages each day. How many pages did she read each day?",
        choices: ["42", "50", "52", "56"],
        answer: 2,
        hint: "Divide the total pages by the number of days.",
      },
      {
        prompt:
          "Tickets to a science museum cost $12 for adults and $8 for children. A family buys 2 adult tickets and 3 child tickets. They pay with $50. How much change should they get?",
        choices: ["$2", "$6", "$8", "$12"],
        answer: 1,
        hint: "Calculate the total cost first, then subtract from $50.",
      },
      {
        prompt:
          "A garden has 4 rows of tomato plants with 9 plants in each row and 3 rows of pepper plants with 7 plants in each row. How many plants are in the garden altogether?",
        choices: ["39", "63", "75", "81"],
        answer: 3,
        hint: "Find the total tomatoes and peppers separately, then add.",
      },
    ],
  },
};

const menuButtons = document.querySelectorAll(".menu-button");
const topicBadge = document.querySelector(".topic-badge");
const questionText = document.querySelector(".question-text");
const choicesContainer = document.querySelector(".choices");
const feedback = document.querySelector(".feedback");
const scoreDisplay = document.querySelector(".score");
const actions = document.querySelector(".playground-actions");
const ctaButton = document.querySelector(".cta");

let currentTopic = "fractions";
let questionHistory = new Map();
let score = 0;
let total = 0;
let answered = false;

function getQuestions(topicKey) {
  const { questions } = topics[topicKey];
  if (!questionHistory.has(topicKey)) {
    questionHistory.set(topicKey, [...questions]);
  }
  if (questionHistory.get(topicKey).length === 0) {
    questionHistory.set(topicKey, [...questions]);
  }
  return questionHistory.get(topicKey);
}

function pickQuestion(topicKey) {
  const available = getQuestions(topicKey);
  const index = Math.floor(Math.random() * available.length);
  return available.splice(index, 1)[0];
}

let currentQuestion = pickQuestion(currentTopic);
renderQuestion(currentQuestion, topics[currentTopic].title);

menuButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const topicKey = button.dataset.topic;
    if (topicKey === currentTopic) return;

    menuButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    currentTopic = topicKey;
    topicBadge.textContent = topics[topicKey].title;
    resetStats();
    currentQuestion = pickQuestion(currentTopic);
    renderQuestion(currentQuestion, topics[currentTopic].title);
  });
});

choicesContainer.addEventListener("click", (event) => {
  const choiceButton = event.target.closest(".choice");
  if (!choiceButton || answered) return;

  const selectedIndex = Number(choiceButton.dataset.index);
  answered = true;
  total += 1;

  disableChoices();

  if (selectedIndex === currentQuestion.answer) {
    score += 1;
    choiceButton.classList.add("correct");
    feedback.textContent = "Great job! That's correct.";
    feedback.classList.remove("negative");
  } else {
    choiceButton.classList.add("incorrect");
    const correctChoice = choicesContainer.querySelector(
      `.choice[data-index="${currentQuestion.answer}"]`
    );
    if (correctChoice) {
      correctChoice.classList.add("correct");
    }
    feedback.textContent = "Nice try! Review the hint and tackle the next one.";
    feedback.classList.add("negative");
  }

  updateScore();
});

actions.addEventListener("click", (event) => {
  const actionButton = event.target.closest(".action");
  if (!actionButton) return;

  const actionType = actionButton.dataset.action;

  if (actionType === "hint") {
    feedback.textContent = currentQuestion.hint;
    feedback.classList.remove("negative");
    return;
  }

  if (actionType === "reset") {
    resetStats();
    currentQuestion = pickQuestion(currentTopic);
    renderQuestion(currentQuestion, topics[currentTopic].title);
    return;
  }

  if (actionType === "next") {
    if (!answered) {
      feedback.textContent = "Choose an answer before jumping ahead.";
      feedback.classList.add("negative");
      return;
    }

    currentQuestion = pickQuestion(currentTopic);
    renderQuestion(currentQuestion, topics[currentTopic].title);
  }
});

ctaButton?.addEventListener("click", (event) => {
  const targetId = event.target.dataset.scroll;
  if (!targetId) return;
  const target = document.querySelector(targetId);
  target?.scrollIntoView({ behavior: "smooth" });
});

function renderQuestion(question, topicTitle) {
  topicBadge.textContent = topicTitle;
  questionText.textContent = question.prompt;
  feedback.textContent = "Select the best answer to earn points.";
  feedback.classList.remove("negative");
  answered = false;

  choicesContainer.innerHTML = "";
  question.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice";
    button.dataset.index = String(index);
    button.textContent = choice;
    button.disabled = false;
    choicesContainer.appendChild(button);
  });
}

function resetStats() {
  score = 0;
  total = 0;
  updateScore();
  feedback.textContent = "Select the best answer to earn points.";
  feedback.classList.remove("negative");
  answered = false;
}

function updateScore() {
  scoreDisplay.textContent = `Score: ${score} / ${total}`;
}

function disableChoices() {
  choicesContainer
    .querySelectorAll(".choice")
    .forEach((button) => (button.disabled = true));
}
