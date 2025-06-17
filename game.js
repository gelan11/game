const gameArea = document.getElementById('game-area');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start-btn');

let score = 0;
let timeLeft = 20;
let gameInterval;
let timer;

function getRandomPosition() {
  const x = Math.random() * (gameArea.clientWidth - 60);
  const y = Math.random() * (gameArea.clientHeight - 60);
  return { x, y };
}

function spawnBunny() {
  const bunny = document.createElement('div');
  bunny.classList.add('bunny');
  const pos = getRandomPosition();
  bunny.style.left = pos.x + 'px';
  bunny.style.top = pos.y + 'px';

  bunny.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = `✨ Skor: ${score}`;
    bunny.remove();
  });

  gameArea.appendChild(bunny);

  setTimeout(() => bunny.remove(), 1000);
}

function startGame() {
  score = 0;
  timeLeft = 20;
  scoreDisplay.textContent = `✨ Skor: ${score}`;
  timerDisplay.textContent = `⏱️ Waktu: ${timeLeft}`;
  gameArea.innerHTML = '';

  gameInterval = setInterval(spawnBunny, 700);
  timer = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `⏱️ Waktu: ${timeLeft}`;
    if (timeLeft <= 0) {
      clearInterval(gameInterval);
      clearInterval(timer);
      alert(`Game selesai! Skormu: ${score}`);
    }
  }, 1000);
}

startButton.addEventListener('click', startGame);
