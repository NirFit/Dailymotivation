"""Build a designed before/after comparison image from a WhatsApp screenshot."""
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import numpy as np

SRC = '/tmp/before_after/source_4.jpeg'
OUT = '/tmp/before_after/before_after.png'

# === 1. Crop the two photos out of the WhatsApp screenshot ===
src = Image.open(SRC)
before_raw = src.crop((297, 250,  881, 1026))   # 584 x 776
after_raw  = src.crop((290, 1038, 881, 1797))   # 591 x 759
# Trim the WhatsApp timestamp ("9:43") off the bottom
before_raw = before_raw.crop((0, 0, before_raw.width, before_raw.height - 60))
after_raw  = after_raw.crop((0, 0, after_raw.width,  after_raw.height  - 60))

# === 2. Normalise both photos into matching portrait cards ===
CARD_W, CARD_H = 760, 1000

def fit_cover(img, w, h):
    iw, ih = img.size
    sr, dr = iw / ih, w / h
    if sr > dr:
        nw = int(ih * dr)
        x0 = (iw - nw) // 2
        img = img.crop((x0, 0, x0 + nw, ih))
    else:
        nh = int(iw / dr)
        y0 = (ih - nh) // 2
        img = img.crop((0, y0, iw, y0 + nh))
    return img.resize((w, h), Image.LANCZOS)

before_card = fit_cover(before_raw, CARD_W, CARD_H)
after_card  = fit_cover(after_raw,  CARD_W, CARD_H)

# Round the corners
RADIUS = 36
def rounded(img, radius):
    mask = Image.new('L', img.size, 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, img.size[0], img.size[1]),
                                           radius=radius, fill=255)
    out = Image.new('RGBA', img.size, (0, 0, 0, 0))
    out.paste(img, (0, 0), mask)
    return out
before_card = rounded(before_card, RADIUS)
after_card  = rounded(after_card,  RADIUS)

# === 3. Canvas with a vibrant gradient background ===
W, H = 1920, 1280
g = np.zeros((H, W, 3), dtype=np.float32)
for y in range(H):
    t = y / H
    for x in range(W):
        u = x / W
        # blend two diagonals
        a = (u + t) * 0.5
        if a < 0.5:
            k = a / 0.5
            r = 12 + (70-12)*k
            gr = 8 + (28-8)*k
            b = 32 + (130-32)*k
        else:
            k = (a - 0.5) / 0.5
            r = 70 + (110-70)*k
            gr = 28 + (30-28)*k
            b = 130 + (160-130)*k
        g[y, x] = (r, gr, b)
canvas = Image.fromarray(g.clip(0,255).astype(np.uint8)).convert('RGBA')

def add_orb(c, cx, cy, r, color, alpha=160):
    layer = Image.new('RGBA', c.size, (0, 0, 0, 0))
    ImageDraw.Draw(layer).ellipse((cx - r, cy - r, cx + r, cy + r),
                                  fill=color + (alpha,))
    layer = layer.filter(ImageFilter.GaussianBlur(85))
    c.paste(layer, (0, 0), layer)
    return c

canvas = add_orb(canvas, 220,  280, 320, (140, 70, 230), 200)
canvas = add_orb(canvas, W-260, H-260, 360, (230, 70, 170), 190)
canvas = add_orb(canvas, W//2, H//2, 240, (60, 100, 230), 110)

# === 4. Card layout (right = before, left = after; Hebrew RTL) ===
GAP = 90
TOTAL_W = CARD_W * 2 + GAP
LEFT = (W - TOTAL_W) // 2
TOP = 220

right_x = LEFT + CARD_W + GAP   # before (older)
left_x  = LEFT                  # after (newer)

def shadow_layer(card, blur=50, alpha=200):
    sh = Image.new('RGBA', (card.width + blur*2, card.height + blur*2), (0,0,0,0))
    sm = Image.new('L', card.size, 0)
    ImageDraw.Draw(sm).rounded_rectangle((0, 0, card.size[0], card.size[1]),
                                         radius=RADIUS, fill=alpha)
    sh.paste((0, 0, 0, alpha), (blur, blur), sm)
    return sh.filter(ImageFilter.GaussianBlur(blur/2))

sh_b = shadow_layer(before_card)
sh_a = shadow_layer(after_card)
canvas.paste(sh_b, (right_x - 50, TOP - 22), sh_b)
canvas.paste(sh_a, (left_x  - 50, TOP - 22), sh_a)
canvas.paste(before_card, (right_x, TOP), before_card)
canvas.paste(after_card,  (left_x,  TOP), after_card)

# Coloured outline + soft glow for each card
def card_glow(c, x, y, w, h, color):
    layer = Image.new('RGBA', c.size, (0,0,0,0))
    ImageDraw.Draw(layer).rounded_rectangle((x-12, y-12, x+w+12, y+h+12),
                                            radius=RADIUS+10,
                                            outline=color+(140,), width=14)
    layer = layer.filter(ImageFilter.GaussianBlur(8))
    c = Image.alpha_composite(c, layer)
    layer2 = Image.new('RGBA', c.size, (0,0,0,0))
    ImageDraw.Draw(layer2).rounded_rectangle((x-3, y-3, x+w+3, y+h+3),
                                             radius=RADIUS+3,
                                             outline=color+(255,), width=4)
    return Image.alpha_composite(c, layer2)

canvas = card_glow(canvas, right_x, TOP, CARD_W, CARD_H, (235, 95, 95))   # before – warm red
canvas = card_glow(canvas, left_x,  TOP, CARD_W, CARD_H, (90, 230, 150))  # after  – fresh green

# === 5. Hebrew text ===
draw = ImageDraw.Draw(canvas)
FONT_BOLD  = '/usr/share/fonts/truetype/culmus/FrankRuehlCLM-Bold.ttf'
FONT_HEAVY = '/usr/share/fonts/truetype/culmus/ShofarDemi-Bold.ttf'

# Title with subtle shadow
title_font = ImageFont.truetype(FONT_HEAVY, 120)
draw.text((W//2 + 4, 99), 'שנה של שינוי', font=title_font, fill=(0,0,0,180), anchor='mm')
draw.text((W//2,     95), 'שנה של שינוי', font=title_font, fill=(255,255,255), anchor='mm')

sub_font = ImageFont.truetype(FONT_BOLD, 40)
draw.text((W//2, 178), 'מסע של אמונה, התמדה ועבודה קשה', font=sub_font,
          fill=(220, 200, 255), anchor='mm')

# Pills with date
PILL_Y = TOP + CARD_H + 80
pill_font = ImageFont.truetype(FONT_HEAVY, 60)
date_font = ImageFont.truetype(FONT_BOLD, 36)

def pill(c, cx, cy, text, year, color):
    layer = Image.new('RGBA', c.size, (0,0,0,0))
    ld = ImageDraw.Draw(layer)
    pad_x, pad_y = 60, 22
    bbox = ld.textbbox((0,0), text, font=pill_font, anchor='mm')
    w = bbox[2]-bbox[0] + pad_x*2
    h = bbox[3]-bbox[1] + pad_y*2
    ld.rounded_rectangle((cx-w//2, cy-h//2, cx+w//2, cy+h//2),
                         radius=h//2, fill=color+(245,),
                         outline=(255,255,255,140), width=3)
    ld.text((cx, cy-2), text, font=pill_font, fill=(255,255,255), anchor='mm')
    out = Image.alpha_composite(c, layer)
    d = ImageDraw.Draw(out)
    d.text((cx, cy + h//2 + 32), str(year), font=date_font,
           fill=(255,255,255,230), anchor='mm')
    return out

canvas = pill(canvas, right_x + CARD_W//2, PILL_Y, 'לפני', 2025, (210, 70, 70))
canvas = pill(canvas, left_x  + CARD_W//2, PILL_Y, 'אחרי', 2026, (60, 175, 105))

# Arrow disc between the pills (points right→left because Hebrew reads RTL)
draw = ImageDraw.Draw(canvas)
mid_x = (right_x + left_x + CARD_W) // 2
disc_r = 60
draw.ellipse((mid_x - disc_r, PILL_Y - disc_r, mid_x + disc_r, PILL_Y + disc_r),
             fill=(255, 255, 255, 240), outline=(180, 80, 220, 255), width=4)
arrow_font = ImageFont.truetype(FONT_HEAVY, 90)
draw.text((mid_x, PILL_Y - 4), '←', font=arrow_font, fill=(80, 30, 130), anchor='mm')

# Bottom tagline
tag_font = ImageFont.truetype(FONT_BOLD, 34)
draw.text((W//2, H - 60), '✦  כל יום הוא הזדמנות חדשה  ✦',
          font=tag_font, fill=(220, 200, 255), anchor='mm')

# === 6. Save ===
canvas.convert('RGB').save(OUT, quality=95)
print('Saved:', OUT)
