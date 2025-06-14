const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const BLOCK = 20, COLS = canvas.width/BLOCK, ROWS = canvas.height/BLOCK;

let snake = [{x:4, y:4}];
let dir = {x:1, y:0};
let food = [];
let walls = [];
let score = 0, level = 1, fps = 5;

function spawnFood() {
  let p;
  do {
    p = { x: Math.floor(Math.random()*COLS), y: Math.floor(Math.random()*ROWS) };
  } while (snake.some(s=>s.x===p.x&&s.y===p.y) || walls.some(w=>w.x===p.x&&w.y===p.y));
  food.push(p);
}

function genWalls(level) {
  let list = [];
  // 예: 레벨에 따라 줄 수를 조절해 벽 위치 생성
  for (let i = 0; i < level && i < 4; i++)
    list.push({ x: 5+i*10, y: 5+i*5 });
  return list;
}

function updateLevel() {
  let newLevel = Math.floor(score/3)+1;
  if (newLevel !== level) {
    level = newLevel;
    fps = 5 + level; // 속도 완만하게 조절
    walls = genWalls(level);
  }
}

function update() {
  // 방향키 입력 처리 (keydown 이벤트로 구현)
  const head = { x: snake[0].x + dir.x, y: snake[0].y + dir.y };

  // 벽, 자신, 경계 체크
  if (head.x<0||head.x>=COLS||head.y<0||head.y>=ROWS ||
      snake.some(s=>s.x===head.x&&s.y===head.y) ||
      walls.some(w=>w.x===head.x&&w.y===head.y)) {
    alert(`Game Over! Score: ${score}`);
    initGame();
    return;
  }

  snake.unshift(head);
  const fIdx = food.findIndex(f=>f.x===head.x&&f.y===head.y);
  if (fIdx>=0) {
    score++;
    food.splice(fIdx,1);
  } else {
    snake.pop();
  }
  updateLevel();
}

function draw() {
  ctx.fillStyle='#000'; ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle='#0f0'; snake.forEach(s=>ctx.fillRect(s.x*BLOCK,s.y*BLOCK,BLOCK,BLOCK));
  ctx.fillStyle='#f00'; food.forEach(f=>ctx.fillRect(f.x*BLOCK,f.y*BLOCK,BLOCK,BLOCK));
  ctx.fillStyle='#aaa'; walls.forEach(w=>ctx.fillRect(w.x*BLOCK,w.y*BLOCK,BLOCK,BLOCK));
}

function initGame() {
  snake=[{x:4,y:4}];
  dir={x:1,y:0};
  score=0; level=1; fps=5;
  walls=genWalls(level);
  food=[];
  for(let i=0;i<3;i++) spawnFood();
  clearInterval(gameLoop);
  gameLoop = setInterval(()=>{
    update();
    draw();
  }, 1000/fps);
}

document.addEventListener('keydown', e => {
  if(e.key==='ArrowUp' && dir.y===0) dir={x:0,y:-1};
  if(e.key==='ArrowDown' && dir.y===0) dir={x:0,y:1};
  if(e.key==='ArrowLeft' && dir.x===0) dir={x:-1,y:0};
  if(e.key==='ArrowRight' && dir.x===0) dir={x:1,y:0};
});

initGame();
