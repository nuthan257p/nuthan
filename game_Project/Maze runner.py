import pygame
import sys
import random
import time

# Configuration
TILE_SIZE = 32
SCREEN_WIDTH, SCREEN_HEIGHT = 640, 480
LEVEL_SIZES = [(10, 8), (14, 10), (18, 12), (22, 14), (26, 16)]
LOOP_FACTOR = 0.15
COIN_FACTOR = 0.1
TRAP_FACTOR = 0.05
LEVEL_TIME_LIMITS = [60, 75, 90, 105, 120]
# Gradient color pairs for each level
BG_GRADIENTS = [
    ((20, 20, 40), (60, 60, 80)),  # Level 1
    ((40, 20, 20), (80, 40, 40)),  # Level 2
    ((20, 40, 20), (60, 80, 60)),  # Level 3
    ((40, 40, 20), (80, 80, 60)),  # Level 4
    ((20, 40, 40), (60, 80, 80)),  # Level 5
]
BTN_WIDTH, BTN_HEIGHT = 200, 50

# Colors
COLOR_MENU_BG     = (30, 144, 255)
COLOR_GAMEOVER_BG = (139, 0, 0)
COLOR_HUD_TEXT    = (255, 255, 255)

# Assets
PLAYER_IMG        = 'adventurer.png'
COIN_IMG          = 'coin.png'
TRAP_ACTIVE_IMG   = 'spider-web.png'
TRAP_INACTIVE_IMG = 'web.png'
BG_MUSIC          = 'BG-Music.wav'
COIN_SOUND        = 'collectcoin.wav'
DEATH_SOUND       = 'dead-8bit-41400.wav'
LEVEL_UP_SOUND    = 'level-passed.wav'

pygame.init()
screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
pygame.display.set_caption('Maze Explorer')
clock = pygame.time.Clock()
font = pygame.font.Font(None, 36)

# Load assets
player_img      = pygame.transform.scale(pygame.image.load(PLAYER_IMG), (TILE_SIZE, TILE_SIZE))
coin_img        = pygame.transform.scale(pygame.image.load(COIN_IMG),   (TILE_SIZE, TILE_SIZE))
trap_active_img = pygame.transform.scale(pygame.image.load(TRAP_ACTIVE_IMG),   (TILE_SIZE, TILE_SIZE))
trap_inactive_img = pygame.transform.scale(pygame.image.load(TRAP_INACTIVE_IMG), (TILE_SIZE, TILE_SIZE))
pygame.mixer.music.load(BG_MUSIC)
coin_sound      = pygame.mixer.Sound(COIN_SOUND)
death_sound     = pygame.mixer.Sound(DEATH_SOUND)
level_up_sound  = pygame.mixer.Sound(LEVEL_UP_SOUND)

# Game states
MENU, PLAY, GAMEOVER = range(3)
state       = MENU
level_index = 0
start_time  = 0
score       = 0

# Globals for sprites
play_group = None
player     = None
walls = exits = coins = traps = None
cam = [pygame.Vector2(0,0), 0, 0]

# UI helper
def draw_button(rect, text):
    pygame.draw.rect(screen, (200,200,200), rect)
    txt = font.render(text, True, (0,0,0))
    screen.blit(txt, txt.get_rect(center=rect.center))

# Maze generation
def generate_maze(cols, rows):
    w, h = 2*cols + 1, 2*rows + 1
    maze = [[True]*w for _ in range(h)]
    for y in range(rows):
        for x in range(cols):
            maze[2*y+1][2*x+1] = False
    visited = [[False]*cols for _ in range(rows)]
    stack = [(0,0)]; visited[0][0] = True
    while stack:
        y, x = stack[-1]
        neighbors = []
        for dy, dx in [(1,0),(-1,0),(0,1),(0,-1)]:
            ny, nx = y+dy, x+dx
            if 0 <= ny < rows and 0 <= nx < cols and not visited[ny][nx]:
                neighbors.append((ny,nx))
        if neighbors:
            ny, nx = random.choice(neighbors)
            maze[y+ny+1][x+nx+1] = False
            visited[ny][nx] = True
            stack.append((ny,nx))
        else:
            stack.pop()
    return maze

def add_loops(maze, cols, rows):
    for _ in range(int(cols*rows*LOOP_FACTOR)):
        gh, gw = len(maze), len(maze[0])
        y, x = random.randrange(1,gh-1), random.randrange(1,gw-1)
        if (y,x) not in [(1,1),(gh-2,gw-2)]:
            maze[y][x] = False
    return maze

# Sprite classes
class Tile(pygame.sprite.Sprite):
    def __init__(self,x,y):
        super().__init__()
        self.image = pygame.Surface((TILE_SIZE,TILE_SIZE))
        self.image.fill((70,70,70))
        self.rect = self.image.get_rect(topleft=(x*TILE_SIZE,y*TILE_SIZE))
        self.solid = True

class Exit(pygame.sprite.Sprite):
    def __init__(self,x,y):
        super().__init__()
        self.image = pygame.Surface((TILE_SIZE,TILE_SIZE))
        self.image.fill((100,255,100))
        self.rect = self.image.get_rect(topleft=(x*TILE_SIZE,y*TILE_SIZE))

class Coin(pygame.sprite.Sprite):
    def __init__(self,x,y):
        super().__init__()
        self.image = coin_img
        self.rect = self.image.get_rect(topleft=(x*TILE_SIZE,y*TILE_SIZE))

class Trap(pygame.sprite.Sprite):
    def __init__(self,x,y):
        super().__init__()
        self.active = True
        self.timer = 0
        self.cooldown = 1
        self.image = trap_active_img
        self.rect = self.image.get_rect(topleft=(x*TILE_SIZE,y*TILE_SIZE))
    def update(self,dt):
        self.timer += dt
        if self.timer >= self.cooldown:
            self.timer %= self.cooldown
            self.active = not self.active
            self.image = trap_active_img if self.active else trap_inactive_img

class Player(pygame.sprite.Sprite):
    def __init__(self,pos):
        super().__init__()
        self.image = player_img
        self.rect  = self.image.get_rect(topleft=pos)

# Build level
def build_level(maze):
    global play_group, player, walls, exits, coins, traps, cam, score
    walls = pygame.sprite.Group()
    exits = pygame.sprite.Group()
    coins = pygame.sprite.Group()
    traps = pygame.sprite.Group()
    floors = []
    h,w = len(maze), len(maze[0])
    for y in range(h):
        for x in range(w):
            if maze[y][x]:
                walls.add(Tile(x,y))
            else:
                floors.append((x,y))
    for x,y in random.sample(floors,int(len(floors)*COIN_FACTOR)):
        coins.add(Coin(x,y))
    for x,y in random.sample(floors,int(len(floors)*TRAP_FACTOR)):
        traps.add(Trap(x,y))
    start = (1*TILE_SIZE, 1*TILE_SIZE)
    exits.add(Exit(w-2,h-2))
    player = Player(start)
    play_group = pygame.sprite.Group(walls, exits, coins, traps, player)
    cam = [pygame.Vector2(0,0), w*TILE_SIZE, h*TILE_SIZE]
    score = 0

# Events
def death_event():
    global state
    death_sound.play()
    state = GAMEOVER

def level_start(idx):
    global start_time
    cols, rows = LEVEL_SIZES[idx]
    maze = add_loops(generate_maze(cols,rows), cols, rows)
    build_level(maze)
    start_time = time.time()

# Debug helper
def print_levels():
    pass

# Gradient background helper
def draw_gradient_bg(color1, color2):
    for y in range(SCREEN_HEIGHT):
        ratio = y / SCREEN_HEIGHT
        r = int(color1[0]*(1-ratio) + color2[0]*ratio)
        g = int(color1[1]*(1-ratio) + color2[1]*ratio)
        b = int(color1[2]*(1-ratio) + color2[2]*ratio)
        pygame.draw.line(screen, (r,g,b), (0,y), (SCREEN_WIDTH,y))

# Draw play
def draw_play(rem_time):
    start_col, end_col = BG_GRADIENTS[level_index]
    draw_gradient_bg(start_col, end_col)
    for spr in play_group:
        screen.blit(spr.image, spr.rect.topleft - cam[0])
    hud = f"Level:{level_index+1}  Score:{score}  Time:{int(rem_time)}"
    screen.blit(font.render(hud,True,COLOR_HUD_TEXT),(10,10))

# Main loop
if __name__=='__main__':
    print_levels()
    pygame.mixer.music.play(-1)
    while True:
        clock.tick(90)
        for ev in pygame.event.get():
            if ev.type == pygame.QUIT:
                pygame.quit()
                sys.exit()
            if state == MENU and ev.type == pygame.MOUSEBUTTONDOWN:
                btn = pygame.Rect((SCREEN_WIDTH-BTN_WIDTH)//2,150,BTN_WIDTH,BTN_HEIGHT)
                if btn.collidepoint(ev.pos):
                    state = PLAY
                    level_start(level_index)
            elif state == PLAY and ev.type == pygame.KEYDOWN:
                dm = {pygame.K_UP:(0,-1),pygame.K_DOWN:(0,1),pygame.K_LEFT:(-1,0),pygame.K_RIGHT:(1,0),
                      pygame.K_w:(0,-1),pygame.K_s:(0,1),pygame.K_a:(-1,0),pygame.K_d:(1,0)}
                if ev.key in dm:
                    dx,dy = dm[ev.key]
                    nr = player.rect.move(dx*TILE_SIZE, dy*TILE_SIZE)
                    if not any(w.rect.colliderect(nr) for w in walls):
                        player.rect = nr
                        if pygame.sprite.spritecollide(player,coins,True): coin_sound.play(); score+=1
                        for t in traps:
                            if t.active and player.rect.colliderect(t.rect): death_event()
                        if player.rect.colliderect(exits.sprites()[0].rect):
                            level_up_sound.play()
                            if level_index+1 >= len(LEVEL_SIZES):
                                state = GAMEOVER
                            else:
                                level_index += 1
                                level_start(level_index)
            elif state == GAMEOVER and ev.type == pygame.KEYDOWN and ev.key == pygame.K_RETURN:
                state = PLAY
                level_index = 0
                level_start(level_index)
        if state == MENU:
            screen.fill(COLOR_MENU_BG)
            btn = pygame.Rect((SCREEN_WIDTH-BTN_WIDTH)//2,150,BTN_WIDTH,BTN_HEIGHT)
            draw_button(btn,'Play Game')
        elif state == PLAY:
            dt = clock.tick(90)/1000.0
            for t in traps:
                t.update(dt)
            px,py = player.rect.center
            cam[0].x = max(0, min(px-SCREEN_WIDTH//2, cam[1]-SCREEN_WIDTH))
            cam[0].y = max(0, min(py-SCREEN_HEIGHT//2, cam[2]-SCREEN_HEIGHT))
            rem = LEVEL_TIME_LIMITS[level_index] - (time.time()-start_time)
            if rem <= 0:
                death_event()
            draw_play(rem)
        else:
            screen.fill(COLOR_GAMEOVER_BG)
            msg = 'You Win!' if level_index>=len(LEVEL_SIZES)-1 else 'Game Over!'
            lbl = font.render(msg,True,(255,255,0))
            screen.blit(lbl,((SCREEN_WIDTH-lbl.get_width())//2,100))
            btn = pygame.Rect((SCREEN_WIDTH-BTN_WIDTH)//2,200,BTN_WIDTH,BTN_HEIGHT)
            draw_button(btn,'Play Again')
        pygame.display.flip()