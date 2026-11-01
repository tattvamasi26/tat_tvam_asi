// Reads every picture under public/images and writes the colour each one
// is "about" to src/lib/seed/picture-tones.json, so a page head can be
// washed in the tone of its own picture.
//
//   node scripts/images/tones.mjs
//
// The tone is the average of the picture's coloured mid-tones: near-black
// backgrounds, blown highlights and grey are left out, or a shrine photo
// on black would tint every page brown-grey. A picture with no colour to
// speak of (a line drawing, a black-and-white photograph) gets none.
import { readdirSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const IMAGES = path.join(ROOT, "public", "images");
const OUT = path.join(ROOT, "src", "lib", "seed", "picture-tones.json");

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const full = path.join(dir, name);
    return statSync(full).isDirectory() ? walk(full) : /\.(jpe?g|png)$/i.test(name) ? [full] : [];
  });

function hsl(r, g, b) {
  const max = Math.max(r, g, b) / 255;
  const min = Math.min(r, g, b) / 255;
  const l = (max + min) / 2;
  const s = max === min ? 0 : l > 0.5 ? (max - min) / (2 - max - min) : (max - min) / (max + min);
  return { s, l };
}

const hex = (n) => Math.round(n).toString(16).padStart(2, "0");

const tones = {};
for (const file of walk(IMAGES).sort()) {
  const { data } = await sharp(file).resize(48, 48, { fit: "inside" }).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  let r = 0, g = 0, b = 0, n = 0;
  for (let i = 0; i < data.length; i += 3) {
    const { s, l } = hsl(data[i], data[i + 1], data[i + 2]);
    if (s < 0.28 || l < 0.18 || l > 0.85) continue;
    r += data[i]; g += data[i + 1]; b += data[i + 2]; n++;
  }
  // Fewer than one pixel in twelve with colour: leave it untinted.
  if (n < data.length / 3 / 12) continue;
  const src = "/" + path.relative(path.join(ROOT, "public"), file).split(path.sep).join("/");
  tones[src] = `#${hex(r / n)}${hex(g / n)}${hex(b / n)}`;
}

writeFileSync(OUT, JSON.stringify(tones, null, 1) + "\n");
console.log(`${Object.keys(tones).length} tones written to ${path.relative(ROOT, OUT)}`);
