#!/usr/bin/env python3
"""Generate public/assets/og.png — the social preview card.

Optional: the site builds without it. Run it by hand when the wordmark changes:

    python3 scripts/make-og.py

Requires Pillow (pip install pillow) and the macOS system fonts.
"""

from pathlib import Path

from PIL import Image, ImageChops, ImageDraw, ImageFilter, ImageFont

W, H = 1200, 630
BG = (8, 9, 12)
FG = (238, 241, 247)
MINT = (94, 231, 160)
PERI = (138, 180, 255)
DIM = (109, 120, 139)
LINE = (34, 39, 54)

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "assets" / "og.png"

SANS_BOLD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
SANS = "/System/Library/Fonts/Supplemental/Arial.ttf"
MONO = "/System/Library/Fonts/Supplemental/Courier New Bold.ttf"

if not Path(SANS_BOLD).exists():
    raise SystemExit("expected macOS system fonts; adjust the paths in this script")


def font(path, size):
    return ImageFont.truetype(path, size)


def capsule(size, box, radius, width):
    """A rounded-rectangle outline, drawn horizontally."""
    layer = Image.new("L", (size, size), 0)
    d = ImageDraw.Draw(layer)
    d.rounded_rectangle(box, radius=radius, outline=255, width=width)
    return layer


def chain_mark(size=210, width=17):
    """Two interlocking capsules at 45° — the site's mark."""
    left = capsule(size, (6, 74, 120, 136), 31, width)
    right = capsule(size, (90, 74, 204, 136), 31, width)
    union = ImageChops.lighter(left, right)
    overlap = ImageChops.multiply(left, right)
    mask = ImageChops.subtract(union, overlap)  # the gap that makes it a chain
    return mask.rotate(45, resample=Image.BICUBIC, expand=True)


def main() -> None:
    img = Image.new("RGB", (W, H), BG)
    d = ImageDraw.Draw(img)

    # a soft mint glow behind the mark
    halo = Image.new("L", (W, H), 0)
    ImageDraw.Draw(halo).ellipse([-220, -300, 480, 420], fill=120)
    halo = halo.filter(ImageFilter.GaussianBlur(150))
    glow = Image.new("RGB", (W, H), BG)
    glow.paste(Image.new("RGB", (W, H), (22, 62, 44)), (0, 0), halo)
    img = Image.blend(img, glow, 0.85)
    d = ImageDraw.Draw(img)

    mark = chain_mark()
    mark = mark.resize((132, 132), Image.LANCZOS)
    tint = Image.new("RGB", mark.size, MINT)
    img.paste(tint, (78, 74), mark)
    d = ImageDraw.Draw(img)

    # wordmark
    d.text((84, 214), "datalink", font=font(SANS_BOLD, 92), fill=FG)
    w = d.textlength("datalink", font=font(SANS_BOLD, 92))
    d.text((84 + w + 14, 214), ".ac", font=font(SANS, 92), fill=DIM)

    # the statement
    d.text((84, 336), "Data in the link.", font=font(SANS_BOLD, 56), fill=FG)

    # the two readers
    d.text((84, 412), "the human sees the picture", font=font(SANS, 34), fill=MINT)
    d.text((84, 456), "the agent reads the data", font=font(SANS, 34), fill=PERI)

    # a bar-chart motif, because a data link ought to look like one
    base_y = 500
    for i, (h, colour) in enumerate([(58, MINT), (92, PERI), (36, DIM), (74, MINT), (48, PERI)]):
        x = 790 + i * 36
        d.rounded_rectangle([x, base_y - h, x + 22, base_y], radius=6, fill=colour)

    # a link, as it appears in a bar
    d.rounded_rectangle([84, 528, 1116, 588], radius=12, fill=(16, 19, 26), outline=LINE, width=2)
    d.ellipse([104, 550, 118, 564], fill=MINT)
    d.text((134, 542), "datalink.ac/d?type=pie&labels=TS,Py,Go&values=4821,2312,980",
           font=font(MONO, 23), fill=(198, 206, 220))

    OUT.parent.mkdir(parents=True, exist_ok=True)
    img.save(OUT, "PNG", optimize=True)
    print(f"wrote {OUT} ({OUT.stat().st_size // 1024} KB)")


if __name__ == "__main__":
    main()
