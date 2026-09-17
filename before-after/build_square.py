"""Square (1080x1350) before/after, sized for Instagram/WhatsApp sharing."""
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import numpy as np

SRC = '/tmp/before_after/source_4.jpeg'
OUT = '/home/user/Dailymotivation/before-after/before_after_square.png'

src = Image.open(SRC)
before_raw = src.crop((297, 250,  881, 1026))
after_raw  = src.crop((290, 1038, 881, 1797))
before_raw = before_raw.crop((0, 0, before_raw.width, before_raw.height - 60))
after_raw  = after_raw.crop((0, 0, after_raw.width,  after_raw.height  - 60))

CARD_W, CARD_H = 470, 660

def fit_cover(img, w, h):
    iw, ih = img.size
    sr, dr = iw / ih, w / h
    if sr > dr:
        nw = int(ih * dr); x0 = (iw - nw) // 2
        img = img.crop((x0, 0, x0 + nw, ih))
    else:
        nh = int(iw / dr); y0 = (ih - nh) // 2
        img = img.crop((0, y0, iw, y0 + nh))
    return img.resize((w, h), Image.LANCZOS)

RADIUS = 28
def rounded(img, r):
    m = Image.new('L', img.size, 0)
    ImageDraw.Draw(m).rounded_rectangle((0,0,*img.size), radius=r, fill=255)
    o = Image.new('RGBA', img.size, (0,0,0,0)); o.paste(img,(0,0),m); return o

before_card = rounded(fit_cover(before_raw, CARD_W, CARD_H), RADIUS)
after_card  = rounded(fit_cover(after_raw,  CARD_W, CARD_H), RADIUS)

W, H = 1080, 1350
g = np.zeros((H, W, 3), dtype=np.float32)
for y in range(H):
    for x in range(W):
        a = (x/W + y/H) * 0.5
        if a < 0.5:
            k = a/0.5; r=12+(70-12)*k; gr=8+(28-8)*k; b=32+(130-32)*k
        else:
            k = (a-0.5)/0.5; r=70+(110-70)*k; gr=28+(30-28)*k; b=130+(160-130)*k
        g[y,x]=(r,gr,b)
canvas = Image.fromarray(g.clip(0,255).astype(np.uint8)).convert('RGBA')

def add_orb(c,cx,cy,r,col,a=180):
    L = Image.new('RGBA', c.size, (0,0,0,0))
    ImageDraw.Draw(L).ellipse((cx-r,cy-r,cx+r,cy+r), fill=col+(a,))
    L = L.filter(ImageFilter.GaussianBlur(70))
    c.paste(L,(0,0),L); return c

canvas = add_orb(canvas, 130, 200, 240, (140,70,230), 200)
canvas = add_orb(canvas, W-160, H-180, 280, (230,70,170), 190)
canvas = add_orb(canvas, W//2, H//2, 200, (60,100,230), 110)

GAP = 50
TOTAL = CARD_W*2 + GAP
LEFT = (W - TOTAL)//2
TOP = 230
right_x = LEFT + CARD_W + GAP   # before
left_x  = LEFT                  # after

def shadow(card, blur=40, alpha=180):
    sh = Image.new('RGBA',(card.width+blur*2,card.height+blur*2),(0,0,0,0))
    sm = Image.new('L', card.size, 0)
    ImageDraw.Draw(sm).rounded_rectangle((0,0,*card.size), radius=RADIUS, fill=alpha)
    sh.paste((0,0,0,alpha),(blur,blur),sm)
    return sh.filter(ImageFilter.GaussianBlur(blur/2))

sb,sa = shadow(before_card), shadow(after_card)
canvas.paste(sb,(right_x-40,TOP-18),sb)
canvas.paste(sa,(left_x-40,TOP-18),sa)
canvas.paste(before_card,(right_x,TOP),before_card)
canvas.paste(after_card,(left_x,TOP),after_card)

def card_glow(c,x,y,w,h,col):
    L = Image.new('RGBA', c.size, (0,0,0,0))
    ImageDraw.Draw(L).rounded_rectangle((x-10,y-10,x+w+10,y+h+10),
                                        radius=RADIUS+8, outline=col+(140,), width=12)
    L = L.filter(ImageFilter.GaussianBlur(7))
    c = Image.alpha_composite(c,L)
    L2 = Image.new('RGBA', c.size, (0,0,0,0))
    ImageDraw.Draw(L2).rounded_rectangle((x-3,y-3,x+w+3,y+h+3),
                                         radius=RADIUS+3, outline=col+(255,), width=4)
    return Image.alpha_composite(c,L2)

canvas = card_glow(canvas, right_x, TOP, CARD_W, CARD_H, (235, 95, 95))
canvas = card_glow(canvas, left_x,  TOP, CARD_W, CARD_H, (90, 230, 150))

draw = ImageDraw.Draw(canvas)
HEAVY = '/usr/share/fonts/truetype/culmus/ShofarDemi-Bold.ttf'
BOLD  = '/usr/share/fonts/truetype/culmus/FrankRuehlCLM-Bold.ttf'

title_font = ImageFont.truetype(HEAVY, 92)
draw.text((W//2+3, 92), 'שנה של שינוי', font=title_font, fill=(0,0,0,180), anchor='mm')
draw.text((W//2,   90), 'שנה של שינוי', font=title_font, fill=(255,255,255), anchor='mm')

sub_font = ImageFont.truetype(BOLD, 30)
draw.text((W//2, 158), 'מסע של אמונה, התמדה ועבודה קשה',
          font=sub_font, fill=(220,200,255), anchor='mm')

PILL_Y = TOP + CARD_H + 70
pill_font = ImageFont.truetype(HEAVY, 50)
date_font = ImageFont.truetype(BOLD, 30)

def pill(c, cx, cy, text, year, col):
    L = Image.new('RGBA', c.size, (0,0,0,0))
    ld = ImageDraw.Draw(L)
    px, py = 50, 18
    bb = ld.textbbox((0,0), text, font=pill_font, anchor='mm')
    w = bb[2]-bb[0]+px*2; h = bb[3]-bb[1]+py*2
    ld.rounded_rectangle((cx-w//2,cy-h//2,cx+w//2,cy+h//2),
                         radius=h//2, fill=col+(245,),
                         outline=(255,255,255,140), width=3)
    ld.text((cx,cy-2), text, font=pill_font, fill=(255,255,255), anchor='mm')
    out = Image.alpha_composite(c,L)
    ImageDraw.Draw(out).text((cx, cy + h//2 + 28), str(year),
                             font=date_font, fill=(255,255,255,230), anchor='mm')
    return out

canvas = pill(canvas, right_x + CARD_W//2, PILL_Y, 'לפני', 2025, (210,70,70))
canvas = pill(canvas, left_x  + CARD_W//2, PILL_Y, 'אחרי', 2026, (60,175,105))

draw = ImageDraw.Draw(canvas)
mid_x = (right_x + left_x + CARD_W)//2
disc_r = 50
draw.ellipse((mid_x-disc_r, PILL_Y-disc_r, mid_x+disc_r, PILL_Y+disc_r),
             fill=(255,255,255,240), outline=(180,80,220,255), width=4)
arrow_font = ImageFont.truetype(HEAVY, 70)
draw.text((mid_x, PILL_Y-3), '←', font=arrow_font, fill=(80,30,130), anchor='mm')

tag_font = ImageFont.truetype(BOLD, 28)
draw.text((W//2, H - 50), '✦  כל יום הוא הזדמנות חדשה  ✦',
          font=tag_font, fill=(220,200,255), anchor='mm')

canvas.convert('RGB').save(OUT, quality=95)
print('Saved:', OUT, canvas.size)
