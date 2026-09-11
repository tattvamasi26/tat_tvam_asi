import { test } from "node:test";
import assert from "node:assert/strict";
import { getReadableSlugs, getUpanishadHeader } from "../../src/lib/data";
import { getFullText } from "../../src/lib/seed/upanishads";
import { LOCALES } from "../../src/i18n/config";

// The reader sets the mūla and its transliteration line against line, and
// renders each verse in the reader's language. Content that breaks either
// promise shows up on screen as misaligned or missing lines.

test("the site has texts to read", () => {
  assert.ok(getReadableSlugs().length >= 3);
});

test("every registered text has its header row, so its reader has a title", () => {
  for (const slug of getReadableSlugs()) {
    assert.ok(getUpanishadHeader(slug, "en"), `${slug} has no row in seed/texts.ts`);
  }
});

test("IAST is set line-for-line against the mūla", () => {
  for (const slug of getReadableSlugs()) {
    for (const v of getFullText(slug)!.verses) {
      assert.equal(v.iast.length, v.sanskrit.length, `${slug} ${v.locator}: ${v.sanskrit.length} Sanskrit lines, ${v.iast.length} IAST lines`);
      v.sanskrit.forEach((line, i) => assert.ok(line.trim(), `${slug} ${v.locator}: Sanskrit line ${i + 1} is blank`));
      v.iast.forEach((line, i) => assert.ok(line.trim(), `${slug} ${v.locator}: IAST line ${i + 1} is blank`));
    }
  }
});

test("every verse reads in every language, with nothing blank", () => {
  for (const slug of getReadableSlugs()) {
    for (const v of getFullText(slug)!.verses) {
      for (const l of LOCALES) {
        assert.ok(v.handle[l]?.trim(), `${slug} ${v.locator}: no ${l} handle`);
        assert.ok(v.readings[l]?.translation.trim(), `${slug} ${v.locator}: no ${l} translation`);
        assert.ok(v.readings[l]?.explanation.trim(), `${slug} ${v.locator}: no ${l} explanation`);
        v.keywords.forEach((k) => assert.ok(k.gloss[l]?.trim(), `${slug} ${v.locator}: “${k.iast}” has no ${l} gloss`));
      }
    }
  }
});

test("verse ids and locators are unique within a text — they are the reader's anchors", () => {
  for (const slug of getReadableSlugs()) {
    const verses = getFullText(slug)!.verses;
    assert.equal(new Set(verses.map((v) => v.id)).size, verses.length, `${slug}: duplicate verse id`);
    assert.equal(new Set(verses.map((v) => v.locator)).size, verses.length, `${slug}: duplicate locator`);
  }
});

test("a text held as selections says what it covers, in every language", () => {
  for (const slug of getReadableSlugs()) {
    const t = getFullText(slug)!;
    if (t.completeness !== "selections") continue;
    for (const l of LOCALES) assert.ok(t.covers?.[l]?.trim(), `${slug}: no ${l} coverage note`);
  }
});
