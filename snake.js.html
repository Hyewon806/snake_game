<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2487.4">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; min-height: 14.0px}
  </style>
</head>
<body>
<p class="p1">const canvas = document.getElementById('gameCanvas');</p>
<p class="p1">const ctx = canvas.getContext('2d');</p>
<p class="p1">const size = 20, cols = canvas.width / size, rows = canvas.height / size;</p>
<p class="p1">let snake = [{x:8, y:8}], dir = {x:1, y:0}, food = {}, score = 0;</p>
<p class="p1">let speed = 200, gameInterval;</p>
<p class="p2"><br></p>
<p class="p1">function placeFood() {</p>
<p class="p1"><span class="Apple-converted-space">  </span>food = {</p>
<p class="p1"><span class="Apple-converted-space">    </span>x: Math.floor(Math.random() * cols),</p>
<p class="p1"><span class="Apple-converted-space">    </span>y: Math.floor(Math.random() * rows)</p>
<p class="p1"><span class="Apple-converted-space">  </span>};</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">function draw() {</p>
<p class="p1"><span class="Apple-converted-space">  </span>ctx.fillStyle = '#000'; ctx.fillRect(0,0,canvas.width,canvas.height);</p>
<p class="p1"><span class="Apple-converted-space">  </span>ctx.fillStyle = '#0f0';</p>
<p class="p1"><span class="Apple-converted-space">  </span>snake.forEach(s =&gt; ctx.fillRect(s.x*size, s.y*size, size, size));</p>
<p class="p1"><span class="Apple-converted-space">  </span>ctx.fillStyle = '#f00';</p>
<p class="p1"><span class="Apple-converted-space">  </span>ctx.fillRect(food.x*size, food.y*size, size, size);</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">function update() {</p>
<p class="p1"><span class="Apple-converted-space">  </span>const head = {x: snake[0].x + dir.x, y: snake[0].y + dir.y};</p>
<p class="p1"><span class="Apple-converted-space">  </span>if (</p>
<p class="p1"><span class="Apple-converted-space">    </span>head.x &lt; 0 || head.x &gt;= cols ||</p>
<p class="p1"><span class="Apple-converted-space">    </span>head.y &lt; 0 || head.y &gt;= rows ||</p>
<p class="p1"><span class="Apple-converted-space">    </span>snake.some(s =&gt; s.x===head.x &amp;&amp; s.y===head.y)</p>
<p class="p1"><span class="Apple-converted-space">  </span>) {</p>
<p class="p1"><span class="Apple-converted-space">    </span>clearInterval(gameInterval);</p>
<p class="p1"><span class="Apple-converted-space">    </span>alert('Game Over! 점수: ' + score);</p>
<p class="p1"><span class="Apple-converted-space">    </span>return;</p>
<p class="p1"><span class="Apple-converted-space">  </span>}</p>
<p class="p1"><span class="Apple-converted-space">  </span>snake.unshift(head);</p>
<p class="p1"><span class="Apple-converted-space">  </span>if (head.x === food.x &amp;&amp; head.y === food.y) {</p>
<p class="p1"><span class="Apple-converted-space">    </span>score++;</p>
<p class="p1"><span class="Apple-converted-space">    </span>document.getElementById('score').innerText = 'Score: ' + score;</p>
<p class="p1"><span class="Apple-converted-space">    </span>placeFood();</p>
<p class="p1"><span class="Apple-converted-space">  </span>} else {</p>
<p class="p1"><span class="Apple-converted-space">    </span>snake.pop();</p>
<p class="p1"><span class="Apple-converted-space">  </span>}</p>
<p class="p1"><span class="Apple-converted-space">  </span>draw();</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">function startGame() {</p>
<p class="p1"><span class="Apple-converted-space">  </span>snake = [{x:8, y:8}];</p>
<p class="p1"><span class="Apple-converted-space">  </span>dir = {x:1, y:0};</p>
<p class="p1"><span class="Apple-converted-space">  </span>score = 0;</p>
<p class="p1"><span class="Apple-converted-space">  </span>document.getElementById('score').innerText = 'Score: 0';</p>
<p class="p1"><span class="Apple-converted-space">  </span>placeFood();</p>
<p class="p1"><span class="Apple-converted-space">  </span>if (gameInterval) clearInterval(gameInterval);</p>
<p class="p1"><span class="Apple-converted-space">  </span>gameInterval = setInterval(update, speed);</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">document.addEventListener('keydown', e =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">  </span>if (e.key === 'ArrowUp' &amp;&amp; dir.y === 0) dir = {x:0,y:-1};</p>
<p class="p1"><span class="Apple-converted-space">  </span>else if (e.key === 'ArrowDown' &amp;&amp; dir.y === 0) dir = {x:0,y:1};</p>
<p class="p1"><span class="Apple-converted-space">  </span>else if (e.key === 'ArrowLeft' &amp;&amp; dir.x === 0) dir = {x:-1,y:0};</p>
<p class="p1"><span class="Apple-converted-space">  </span>else if (e.key === 'ArrowRight' &amp;&amp; dir.x === 0) dir = {x:1,y:0};</p>
<p class="p1">});</p>
<p class="p2"><br></p>
<p class="p1">startGame();</p>
</body>
</html>
