import pygame, random, sys, os

pygame.init()
WIDTH, HEIGHT = 800, 600
BLOCK = 20
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("🐍 Snake Game Final (Soft Maze)")
font = pygame.font.SysFont("Arial", 25)

# 🎨 테마 선택
def choose_theme():
    print("테마 선택: classic / ocean / desert / night")
    t = input(">> ").strip().lower()
    if t == "ocean": return (0,105,148), (255,255,255), (255,255,0), (200,200,200)
    elif t == "desert": return (255,236,139), (160,82,45), (255,140,0), (128,128,128)
    elif t == "night": return (30,30,30), (0,255,255), (255,255,255), (100,100,100)
    return (0,0,0), (0,255,0), (255,0,0), (169,169,169)

BG, SN, FD, WL = choose_theme()

# 🎮 난이도 선택
def choose_difficulty():
    print("난이도: easy / normal / hard")
    d = input(">> ").strip().lower()
    if d not in ["easy", "normal", "hard"]: d = "normal"
    base_fps = 5 if d=="easy" else (10 if d=="normal" else 15)
    return base_fps

base_fps = choose_difficulty()
clock = pygame.time.Clock()

# 🏆 최고 점수
def load_high(): return int(open("highscore.txt").read()) if os.path.exists("highscore.txt") else 0
def save_high(sc): open("highscore.txt","w").write(str(sc))
high_score = load_high()

# 🧱 벽 생성 (완화된 난이도)
def gen_walls(level):
    walls = []
    spacing = 80  # 간격 넓힘

    # 가로 벽: 최대 3줄만
    for i in range(1, min(level + 1, 4)):
        for x in range(150, 650, spacing):
            walls.append([x, 100 + i * spacing])

    # 세로 벽: 레벨 5 이상부터, 최대 2줄
    if level >= 5:
        for i in range(2):
            for y in range(100, 500, spacing * 2):
                walls.append([200 + i * spacing * 2, y])

    return walls

# 🐍 초기 상태
snake = [[100,100],[80,100],[60,100]]
dx, dy = BLOCK, 0
score, level = 0, 1
FPS = base_fps
walls = gen_walls(level)

# 🍎 먹이 생성
def spawn_food():
    while True:
        p = [random.randrange(0, WIDTH, BLOCK), random.randrange(0, HEIGHT, BLOCK)]
        if p not in snake and p not in walls: return p

food_positions = [spawn_food() for _ in range(3)]

# 💀 게임 오버
def game_over():
    global high_score
    high_score = max(high_score, score)
    save_high(high_score)
    screen.blit(font.render("Game Over! 아무 키나 누르세요.", True, (255,255,255)), [WIDTH//4, HEIGHT//2])
    pygame.display.update()
    pygame.time.wait(500)
    while True:
        for e in pygame.event.get():
            if e.type == pygame.KEYDOWN:
                pygame.quit(); sys.exit()

# 🎨 화면 출력
def draw_all():
    screen.fill(BG)
    for b in snake: pygame.draw.rect(screen, SN, (*b,BLOCK,BLOCK))
    for f in food_positions: pygame.draw.rect(screen, FD, (*f,BLOCK,BLOCK))
    for w in walls: pygame.draw.rect(screen, WL, (*w,BLOCK,BLOCK))
    screen.blit(font.render(f"Score: {score}", True, (255,255,255)), (10,10))
    screen.blit(font.render(f"High: {high_score}", True, (255,255,255)), (10,40))
    screen.blit(font.render(f"Level: {level}", True, (255,255,255)), (700,10))
    pygame.display.update()

# 🎮 게임 루프
while True:
    for e in pygame.event.get():
        if e.type == pygame.QUIT or (e.type==pygame.KEYDOWN and e.key==pygame.K_ESCAPE): game_over()
    keys = pygame.key.get_pressed()
    if keys[pygame.K_LEFT] and dx==0: dx,dy=-BLOCK,0
    if keys[pygame.K_RIGHT] and dx==0: dx,dy=BLOCK,0
    if keys[pygame.K_UP] and dy==0: dx,dy=0,-BLOCK
    if keys[pygame.K_DOWN] and dy==0: dx,dy=0,BLOCK

    head = [snake[0][0]+dx, snake[0][1]+dy]
    snake.insert(0, head)
    if head in food_positions:
        score += 1
        food_positions.remove(head)
    else:
        snake.pop()

    # 🔁 자동 레벨 업
    new_level = score // 3 + 1
    if new_level != level:
        level = new_level
        FPS = base_fps + int((level - 1) * 1.2)
        walls = gen_walls(level)
        food_positions = [f for f in food_positions if f not in walls]

    # 🍎 먹이 수 조절
    target_food_count = min(3 + level // 2, 6)
    while len(food_positions) < target_food_count:
        food_positions.append(spawn_food())

    # 💥 충돌 판정
    if head in snake[1:] or head in walls or not (0 <= head[0] < WIDTH) or not (0 <= head[1] < HEIGHT):
        game_over()

    draw_all()
    clock.tick(FPS)
