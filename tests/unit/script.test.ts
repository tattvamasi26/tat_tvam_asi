import { test } from "node:test";
import assert from "node:assert/strict";
import { devanagariToKannada, scriptFor, scriptClass } from "../../src/lib/script";
import { TEXTS } from "../../src/lib/seed/texts";
import { VEDAS, GITA, GITA_CHAPTERS, STUTIS, BHAJANS } from "../../src/lib/seed/corpus";
import { VERSES } from "../../src/lib/seed/verses";
import { CONCEPTS } from "../../src/lib/seed/concepts";
import { TEACHERS } from "../../src/lib/seed/teachers";
import { SECTIONS } from "../../src/i18n/sections";
import { getReadableSlugs } from "../../src/lib/data";
import { getFullText } from "../../src/lib/seed/upanishads";

// Devanagari letters — everything in the block except the dandas and the
// Vedic stress marks, which Kannada text borrows unchanged.
const DEVANAGARI_LETTER = /[ऀ-ॐ॓-ॣ०-ॿ]/;

test("consonants, vowel signs and virama map to their Kannada counterparts", () => {
  assert.equal(devanagariToKannada("कृष्ण"), "ಕೃಷ್ಣ");
  assert.equal(devanagariToKannada("ब्रह्म"), "ಬ್ರಹ್ಮ");
  assert.equal(devanagariToKannada("तत्त्वमसि"), "ತತ್ತ್ವಮಸಿ");
  assert.equal(devanagariToKannada("ईशा वास्यमिदं"), "ಈಶಾ ವಾಸ್ಯಮಿದಂ");
});

test("ॐ becomes ಓಂ, as it is printed in Kannada", () => {
  assert.equal(devanagariToKannada("ॐ शान्तिः"), "ಓಂ ಶಾನ್ತಿಃ");
});

test("dandas and Vedic stress marks pass through unchanged", () => {
  assert.equal(devanagariToKannada("।॥"), "।॥");
  assert.equal(devanagariToKannada("॒॑"), "॒॑");
});

test("Latin, digits and punctuation are untouched", () => {
  const s = "Tat tvam asi 6.8.7 — “Thou art That.”";
  assert.equal(devanagariToKannada(s), s);
});

test("never emits an unassigned Kannada code point", () => {
  for (let cp = 0x0900; cp <= 0x097f; cp++) {
    const out = devanagariToKannada(String.fromCodePoint(cp));
    for (const ch of out) {
      assert.ok(!/\p{Cn}/u.test(ch), `U+${cp.toString(16)} became unassigned U+${ch.codePointAt(0)!.toString(16)}`);
    }
  }
});

test("scriptFor converts only for Kannada; scriptClass names the matching face", () => {
  assert.equal(scriptFor("केन", "en"), "केन");
  assert.equal(scriptFor("केन", "hi"), "केन");
  assert.equal(scriptFor("केन", "kn"), "ಕೇನ");
  assert.equal(scriptClass("kn"), "kannada");
  assert.equal(scriptClass("hi"), "deva");
  assert.equal(scriptClass("en"), "deva");
});

test("every Sanskrit string on the site converts to Kannada completely", () => {
  const corpus: [string, string][] = [
    ...TEXTS.map((t) => [`text ${t.slug}`, t.name_sanskrit] as [string, string]),
    ...[...VEDAS, GITA, ...GITA_CHAPTERS, ...STUTIS, ...BHAJANS].map((t) => [`corpus ${t.slug}`, t.name_sanskrit] as [string, string]),
    ...VERSES.map((v) => [`verse ${v.id}`, v.sanskrit] as [string, string]),
    ...CONCEPTS.map((c) => [`concept ${c.slug}`, c.term_sanskrit] as [string, string]),
    ...TEACHERS.map((t) => [`teacher ${t.slug}`, t.name_sanskrit] as [string, string]),
    ...SECTIONS.map((s) => [`section ${s.id}`, s.glyph] as [string, string]),
  ];
  for (const slug of getReadableSlugs()) {
    for (const v of getFullText(slug)!.verses) {
      v.sanskrit.forEach((line, i) => corpus.push([`${slug} ${v.locator} line ${i + 1}`, line]));
      v.keywords.forEach((k) => corpus.push([`${slug} ${v.locator} term ${k.iast}`, k.term]));
    }
  }

  assert.ok(corpus.length > 100, "the corpus should be non-trivial");
  for (const [where, s] of corpus) {
    const k = devanagariToKannada(s);
    const left = k.match(DEVANAGARI_LETTER);
    assert.equal(left, null, `${where}: “${s}” left Devanagari “${left?.[0]}” behind`);
  }
});
