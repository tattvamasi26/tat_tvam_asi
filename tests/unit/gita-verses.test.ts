import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import path from "node:path";
import { GITA_SPINE, checkedChapters, chapterText, translationParts, isChapterChecked } from "../../src/lib/gita";
import { isGatedPath } from "../../src/lib/security/reading-gate";

// The Gita's verses: the Besant & Bhagavan Das edition (1905), checked
// against its scans (docs/GITA.md). These hold the published text to
// the shape the build promises and the rules the section keeps.

const COUNTS = [47, 72, 43, 42, 29, 47, 30, 28, 34, 42, 55, 20, 34, 27, 20, 24, 28, 78];
const ROOT = path.resolve(__dirname, "../..");
const DEVANAGARI = /[ऀ-ॿ]/;

test("the spine knows all eighteen chapters and the vulgate count", () => {
  assert.equal(GITA_SPINE.chapters.length, 18);
  assert.deepEqual(
    GITA_SPINE.chapters.map((c) => c.verses),
    COUNTS,
  );
  assert.equal(COUNTS.reduce((a, b) => a + b, 0), 700);
  assert.equal(GITA_SPINE.edition.year, 1905);
});

test("a chapter is published exactly when its file and its record exist", () => {
  const dataDir = path.join(ROOT, "src/lib/gita/data");
  const checkedDir = path.join(ROOT, "src/lib/gita/checked");
  for (let ch = 1; ch <= 18; ch++) {
    const published = existsSync(path.join(dataDir, `chapter-${ch}.json`));
    assert.equal(published, isChapterChecked(ch), `chapter ${ch}: the spine and the files disagree`);
    if (published)
      assert.ok(
        existsSync(path.join(checkedDir, `chapter-${String(ch).padStart(2, "0")}.json`)),
        `chapter ${ch}: published without a check record`,
      );
  }
  assert.ok(checkedChapters().length >= 1, "no chapter is checked yet");
});

test("every published chapter is whole, in order, and clean", async () => {
  for (const ch of checkedChapters()) {
    const text = (await chapterText(ch))!;
    assert.equal(text.verses.length, COUNTS[ch - 1], `chapter ${ch}: wrong number of verses`);
    text.verses.forEach((v, i) => {
      const ref = `${ch}.${v.n}`;
      assert.equal(v.n, i + 1, `${ref}: out of order`);
      const verseLines = v.lines.filter((l) => !l.speaker);
      assert.ok(verseLines.length >= 1, `${ref}: no verse lines`);
      for (const l of v.lines) {
        assert.match(l.t, DEVANAGARI, `${ref}: a line with no Devanagari`);
        assert.doesNotMatch(l.t, /[A-Za-z]/, `${ref}: Latin letters in the mūla`);
        assert.doesNotMatch(l.t, /[०-९0-9]/, `${ref}: a verse number left in the mūla`);
      }
      // The verse closes on a double daṇḍa, the half-verse on a single one.
      assert.match(verseLines.at(-1)!.t, /॥$/, `${ref}: does not close on ॥`);
      assert.ok(v.translation.trim().length > 20, `${ref}: no translation`);
      assert.doesNotMatch(v.translation, DEVANAGARI, `${ref}: Devanagari in the English`);
      assert.doesNotMatch(v.translation, /\{\{|\}\}|\[\s*\d+\s*\]/, `${ref}: wiki markup or a page number in the English`);
      assert.doesNotMatch(v.translation, /[a-z,;] \d\b/, `${ref}: a stray footnote marker`);
      assert.ok(v.pages.length >= 1 && v.pages.every((p) => p.rev), `${ref}: no scan page with its revision`);
    });
  }
});

test("every correction names its page, and a misprint says why it is one", async () => {
  for (const ch of checkedChapters()) {
    const text = (await chapterText(ch))!;
    assert.ok(text.checkedOn, `chapter ${ch}: no date of checking`);
    for (const f of text.fixes) {
      assert.ok(f.page > 0, `${f.ref}: a correction with no page`);
      assert.notEqual(f.from, f.to, `${f.ref}: a correction that changes nothing`);
      if (f.field === "mula") {
        assert.ok(["transcription", "misprint"].includes(f.kind), `${f.ref}: unknown kind`);
        if (f.kind === "misprint") assert.ok(f.why && f.why.length > 20, `${f.ref}: a misprint corrected without saying why`);
      }
    }
    for (const k of text.kept) assert.ok(k.page > 0 && k.note.length > 20, `${k.ref}: a kept reading needs a page and a note`);
  }
});

test("the speaker of the English is split off whole", () => {
  assert.deepEqual(translationParts("Arjuna said: How shall I?"), [{ speaker: "Arjuna", text: "How shall I?" }]);
  assert.deepEqual(translationParts("And spake: Arjuna said: “Stay.”"), [
    { speaker: undefined, text: "And spake:" },
    { speaker: "Arjuna", text: "“Stay.”" },
  ]);
  assert.deepEqual(translationParts("The Blessed Lord said: Thou grievest."), [{ speaker: "The Blessed Lord", text: "Thou grievest." }]);
});

test("a verse page is a reading page, counted by the meter", () => {
  assert.equal(isGatedPath("/gita/1/21"), true);
  assert.equal(isGatedPath("/gita/1"), true);
  assert.equal(isGatedPath("/gita"), false);
});

test("no page imports a chapter file directly; one chapter loads at a time", () => {
  const app = path.join(ROOT, "src/app");
  const walk = (dir: string): string[] =>
    readdirSync(dir, { withFileTypes: true }).flatMap((d) => (d.isDirectory() ? walk(path.join(dir, d.name)) : [path.join(dir, d.name)]));
  for (const file of walk(app).filter((f) => /\.tsx?$/.test(f))) {
    const src = readFileSync(file, "utf8");
    assert.doesNotMatch(src, /gita\/data\/chapter-/, `${path.relative(ROOT, file)} imports a chapter file`);
  }
});
