import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import path from "node:path";
import { allSectionImages, sectionArt } from "../../src/lib/seed/section-images";
import { allGroupImages } from "../../src/lib/bhajans/images";
import { hasRiteArt } from "../../src/components/rituals/RiteArt";
import { RITUALS, RITUAL_GROUPS } from "../../src/lib/seed/rituals";
import { LOCALES } from "../../src/i18n/config";

// The pictures across the site.
//
// Three promises are kept here. Every picture's declared size is the
// file's real size — Commons stopped honouring the requested width and
// seventy manifest entries had the wrong numbers before this test
// existed. Every picture is freely licensed and links to where it came
// from. And every picture is described in all three languages, because
// a picture with no alt text is not shown at all.

function jpegSize(file: string): { width: number; height: number } {
  const b = readFileSync(file);
  assert.ok(b[0] === 0xff && b[1] === 0xd8, `${file} is not a JPEG`);
  let i = 2;
  while (i + 9 < b.length) {
    if (b[i] !== 0xff) {
      i++;
      continue;
    }
    const marker = b[i + 1];
    const length = b.readUInt16BE(i + 2);
    if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
      return { height: b.readUInt16BE(i + 5), width: b.readUInt16BE(i + 7) };
    }
    i += 2 + length;
  }
  throw new Error(`no size marker in ${file}`);
}

const FREE = /cc0|cc[- ]by|public domain|attribution/i;

test("every Commons manifest on the site declares its files' real sizes", () => {
  const root = "public/images";
  let checked = 0;
  for (const dir of readdirSync(root)) {
    const manifest = path.join(root, dir, "commons.json");
    if (!existsSync(manifest)) continue;
    const entries = JSON.parse(readFileSync(manifest, "utf8")) as Record<string, { src: string; width: number; height: number }>;
    for (const [id, e] of Object.entries(entries)) {
      const file = path.join("public", e.src);
      assert.ok(existsSync(file), `${dir}/${id}: ${e.src} is missing`);
      assert.deepEqual(jpegSize(file), { width: e.width, height: e.height }, `${dir}/${id}: declared size is not the file's`);
      checked++;
    }
  }
  assert.ok(checked > 60, "the manifests went missing");
});

test("every section picture is free, sourced and described in every language", () => {
  const all = allSectionImages();
  assert.ok(all.length >= 30, "the section pictures went missing");
  for (const [key, img] of all) {
    assert.match(img.credit, FREE, `${key}: the credit names no free licence`);
    assert.match(img.sourceUrl, /^https:\/\/commons\.wikimedia\.org\/wiki\/File:/, `${key}: no Commons page`);
    for (const locale of LOCALES) {
      assert.ok(img.alt[locale]?.trim().length > 10, `${key}: no ${locale} alt text`);
    }
  }
});

test("the new bhajan pictures are described in every language", () => {
  for (const [id, img] of allGroupImages()) {
    for (const locale of LOCALES) assert.ok(img.alt[locale]?.trim(), `${id}: no ${locale} alt`);
  }
});

test("every rite and group has its drawing, and every named drawing exists", () => {
  for (const r of RITUALS) assert.ok(hasRiteArt(r.slug), `${r.slug} has no drawing`);
  for (const g of RITUAL_GROUPS) assert.ok(hasRiteArt(g.id), `group ${g.id} has no drawing`);
  for (const [kind, slug] of [
    ["story", "prithu"],
    ["darshana", "nyaya"],
    ["darshana", "mimamsa"],
    ["darshana", "vaisheshika"],
    ["branch", "vedanta"],
    ["branch", "agamas"],
    ["branch", "prakarana"],
  ] as const) {
    const art = sectionArt(kind, slug);
    assert.ok(art && hasRiteArt(art), `${kind}:${slug} names a drawing that does not exist`);
  }
  assert.ok(hasRiteArt("bhajan-niti"));
});
