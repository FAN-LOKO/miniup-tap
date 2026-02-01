let score = 0;
let level = 1;
let tapsOnThisLevel = 0;
const tapsPerLevel = 20;

const scoreEl = document.getElementById("score");
const levelEl = document.getElementById("level");
const tapButton = document.getElementById("tapButton");

function updateUI() {
  scoreEl.textContent = score;
  levelEl.textContent = level;
}

tapButton.addEventListener("click", () => {
  // За каждый тап даём очков = текущий уровень
  score += level;
  tapsOnThisLevel += 1;

  // Переход на новый уровень каждые 20 тапов
  if (tapsOnThisLevel >= tapsPerLevel) {
    level += 1;
    tapsOnThisLevel = 0;
  }

  updateUI();
});

updateUI();
