const displayTimer = document.getElementById("display");
let timer = null;
let elapsedTime = 0;
let startTime = 0;
let isRunning = false;

function startTimer() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(loadTimer, 10);
    isRunning = true;
  }
}
function loadTimer() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  let minute = Math.floor((elapsedTime / (1000 * 60)) % 60);
  let second = Math.floor((elapsedTime / 1000) % 60);
  let milliseconds = Math.floor((elapsedTime % 1000) / 10);

  hours = String(hours).padStart(2, "0");
  minute = String(minute).padStart(2, "0");
  second = String(second).padStart(2, "0");
  milliseconds = String(milliseconds).padStart(2, "0");

  displayTimer.textContent = `${hours}:${minute}:${second}:${milliseconds}`;
}

function stopTimer() {
  if (isRunning) {
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    isRunning = false;
  }
}

function resetTimer() {
  clearInterval(timer);
  elapsedTime = 0;
  startTime = 0;
  isRunning = false;

  displayTimer.textContent = `00:00:00:00`;
}

document.getElementById("startBtn").addEventListener("click", startTimer);
document.getElementById("stopBtn").addEventListener("click", stopTimer);
document.getElementById("resetBtn").addEventListener("click", resetTimer);
