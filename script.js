let timer;
let isRunning = false;
let minutes = 25;
let seconds = 0;

const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");

function updateTimer() {
  timerDisplay.textContent = `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

function startTimer() {
  if (isRunning) return;

  isRunning = true;
  timer = setInterval(() => {
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(timer);
        isRunning = false;
        alert("Pomodoro session is over!");
        return;
      }
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }
    updateTimer();
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  minutes = 25;
  seconds = 0;
  updateTimer();
}

startBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", resetTimer);

updateTimer();
