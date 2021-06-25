const score = document.querySelector('.score'),
  gameArea = document.querySelector('.gameArea'),
  start = document.querySelector('.start'),
  car = document.createElement('div');

car.classList.add('car');

start.addEventListener('click', startGame);
document.addEventListener('keydown', startRun);
document.addEventListener('keyup', stopRun);

const keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowRight: false,
  ArrowLeft: false
};

const setting = {
  start: false,
  score: 0,
  speed: 3
}

function startGame() {
  start.classList.add('hide');
  setting.start = true;
  gameArea.appendChild(car);
  requestAnimationFrame(playGame);
}

function playGame() {
  if (setting.start) {
    requestAnimationFrame(playGame);
  }
}

function startRun(event) {
  event.preventDefault();
  keys[event.key] = true;
}

function stopRun(event) {
  event.preventDefault();
  keys[event.key] = false;
}