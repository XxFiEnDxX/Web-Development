const p1score = document.querySelector(".p1");
const p2score = document.querySelector(".p2");

const scoreSelector = document.querySelector("#toWin");

const p1btn = document.querySelector("#p1btn");
const p2btn = document.querySelector("#p2btn");
const reset = document.querySelector("#reset");

let toWin = 3;

let p1Curr = 0;
let p2Curr = 0;

let isGameOver = false;

p1btn.addEventListener("click", function () {
  if (!isGameOver) {
    p1Curr++;
    p1score.textContent = p1Curr;
    if (p1Curr === toWin) {
      isGameOver = true;
      p1score.classList.add('winner');
      p2score.classList.add('loser');
    }
  }
});

p2btn.addEventListener("click", function () {
  if (!isGameOver) {
    p2Curr++;
    p2score.textContent = p2Curr;
    if (p2Curr === toWin) {
      isGameOver = true;
      p2score.classList.add('winner');
      p1score.classList.add('loser');
    }
  }
});

function resetGame() {
    isGameOver = false;
    p1Curr = p2Curr = 0;
    p1score.textContent = 0;
    p2score.textContent = 0;
    p1score.classList.remove('loser','winner');
    p2score.classList.remove('loser','winner');
}

reset.addEventListener("click", resetGame);

scoreSelector.addEventListener('change', function () {
    toWin = parseInt(this.value);
    resetGame();
    // p1score.textContent = 011;
});
