const questions = [
  {
    question: "Apa makanan favorit aku?",
    answer: "tempe oreg"
  },
  {
    question: "Apa warna kesukaan aku?",
    answer: "biruu"
  },
  {
    question: "Apa hobby aku?",
    answer: "naik gunung"
  },
  {
    question: "Ikan ikan apa yang cantik?",
    answer: "ikan kamuuu"
  },
  {
    question: "Kenapa aku gak suka ikan?",
    answer: "kana suka nya kamu"
  },
  {
    question: "Tanggal berapa aku lahri",
    answer: "27, september 2007"
  },
  {
    question: "Aku suka kamu karna apa?",
    answer: "karna kamu sempurna buat aku"
  }
];

let current = 0;
let score = 0;

function showQuestion() {
  document.getElementById("question").textContent = questions[current].question;
  document.getElementById("answerInput").value = "";
  document.getElementById("result").textContent = "";
  document.getElementById("score").textContent = "Skor: " + score;
}

function checkAnswer() {
  const userAnswer = document.getElementById("answerInput").value.trim().toLowerCase();
  const correctAnswer = questions[current].answer.toLowerCase();
  const result = document.getElementById("result");

  if (userAnswer === correctAnswer) {
    result.textContent = "✅ Benar! Kamu hebat!";
    score++;
  } else {
    result.textContent = "❌ Salah! Jawaban yang benar: " + questions[current].answer;
  }

  document.getElementById("score").textContent = "Skor: " + score;
}

function nextQuestion() {
  current++;
  if (current >= questions.length) {
    document.getElementById("question").textContent = "🎉 Game selesai!";
    document.getElementById("result").textContent = "Skor akhir kamu: " + score + "/" + questions.length;
    document.getElementById("answerInput").style.display = "none";
  } else {
    showQuestion();
  }
}

window.onload = showQuestion;
