const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const size = 20, cols = canvas.width / size, rows = canvas.height / size;
let snake = [{x:8, y:8}], dir = {x:1, y:0}, food = {}, score = 0;
let speed = 200, gameInterval;

function placeFood() {
  food = {
    x: Math.floor(Math.random() * cols),
    y: Math.floor(Math.random() * rows)
  };
}

function draw() {
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#0f0';
  snake.forEach(s => ctx.fillRect(s.x * size, s.y * size, size, size));
  ctx.fillStyle = '#f00';
  ctx.fillRect(food.x * size, food.y * size, size, size);
}

function update() {
  const head = {x: snake[0].x + dir.x, y: snake[0].y + dir.y};
  if (head.x < 0 || head.x >= cols || head.y < 0 || head.y >= rows ||
      snake.some(s => s.x === head.x && s.y === head.y)) {
    clearInterval(gameInterval);
    alert('Game Over! 점수: ' + score);
    return;
  }
  snake.unshift(head);
  if (head.x === food.x && head.y === food.y) {
    score++;
    document.getElementById('score').innerText = 'Score: ' + score;
    placeFood();
  } else {
    snake.pop();
  }
  draw();
}

function startGame() {
  snake = [{x:8, y:8}];
  dir = {x:1, y:0};
  score = 0;
  document.getElementById('score').innerText = 'Score: 0';
  placeFood();
  if (gameInterval) clearInterval(gameInterval);
  gameInterval = setInterval(update, speed);
}

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowUp' && dir.y === 0) dir = {x:0,y:-1};
  else if (e.key === 'ArrowDown' && dir.y === 0) dir = {x:0,y:1};
  else if (e.key === 'ArrowLeft' && dir.x === 0) dir = {x:-1,y:0};
  else if (e.key === 'ArrowRight' && dir.x === 0) dir = {x:1,y:0};
});

startGame();

 