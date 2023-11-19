const express = require("express");
const router = express.Router();

const triviaQuestions = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    answer: "Blue whale",
  },
];
let score = 0;

router.get("/quiz", (req, res) => {
  score = 0;
  res.json(triviaQuestions);
});

router.post("/quiz", (req, res) => {
  const { question, answer } = req.body;
  const filteredAnswer = triviaQuestions.filter(
    (quest) => quest.question == question
  );
  console.log(filteredAnswer);
  if (filteredAnswer[0].answer === answer) {
    score += 1;
    res.status(200);
  } else {
    res.status(404);
  }
});

router.get("/quiz/score", (req, res) => {
  res.json(score);
});

module.exports = router;
