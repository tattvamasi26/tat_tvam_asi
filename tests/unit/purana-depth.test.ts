import { test } from "node:test";
import assert from "node:assert/strict";
import { PURANA_DEPTH } from "../../src/lib/seed/purana-depth";
import { PURANAS } from "../../src/lib/seed/puranas";
import { getPurana } from "../../src/lib/data";
import { PURANA_UI } from "../../src/i18n/purana-ui";
import { LOCALES } from "../../src/i18n/config";

// How each Purana is arranged and what is in it. Every one of the
// eighteen has it, the three languages agree entry for entry, and the
// one thing this section exists not to do — present the Bhavisya's
// colonial-era "prophecies" as ancient — stays said.

test("every Purana has its parts and its passages", () => {
  for (const p of PURANAS) {
    const d = PURANA_DEPTH.en[p.slug];
    assert.ok(d, `${p.slug} has no depth`);
    assert.ok(d.parts.length >= 2, `${p.slug} says too little about how it is arranged`);
    assert.ok(d.passages.length >= 1, `${p.slug} names nothing a reader has met`);
  }
  for (const slug of Object.keys(PURANA_DEPTH.en)) {
    assert.ok(PURANAS.some((p) => p.slug === slug), `depth for ${slug}, which is not one of the eighteen`);
  }
});

test("the three languages agree entry for entry", () => {
  for (const p of PURANAS) {
    const en = PURANA_DEPTH.en[p.slug];
    for (const locale of LOCALES) {
      const d = PURANA_DEPTH[locale][p.slug];
      assert.ok(d, `${p.slug} has no ${locale} depth`);
      assert.equal(d.parts.length, en.parts.length, `${p.slug}: ${locale} parts differ`);
      assert.equal(d.passages.length, en.passages.length, `${p.slug}: ${locale} passages differ`);
      for (const [name, text] of [...d.parts, ...d.passages]) {
        assert.ok(name.trim() && text.trim(), `${p.slug}: an empty ${locale} entry`);
      }
    }
  }
});

test("the Bhavisya's late additions are called late", () => {
  const text = PURANA_DEPTH.en.bhavishya.passages.map(([, t]) => t).join(" ");
  assert.match(text, /colonial|additions|not ancient/i);
});

test("the depth reaches the view, and the grading strings exist", () => {
  for (const locale of LOCALES) {
    assert.equal(getPurana("vishnu", locale)?.depth?.parts.length, 6, `${locale}: the Visnu's six books`);
    const u = PURANA_UI[locale];
    for (const [k, v] of Object.entries(u)) assert.ok(String(v).trim(), `${locale}.${k} is blank`);
    assert.ok(u.countPuranas.includes("{n}"));
  }
});
