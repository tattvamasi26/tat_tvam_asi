/**
 * Devanagari to IAST, for Sanskrit.
 *
 * The hand-entered stotras carry an IAST line typed beside every line
 * of mūla. The stotra collection (lib/stotra-corpus) has thousands of
 * lines, so its transliteration is made here instead, by rule, from the
 * Devanagari — never typed, so it can never drift from the text it
 * shows.
 *
 * Conventions, matching the hand-entered stotras:
 * - anusvāra is ṃ, visarga ḥ, avagraha ', candrabindu m̐;
 * - a nasal written out stays the nasal it is (पञ्च → pañca);
 * - the daṇḍas become | and ||, as in the hand-entered stotras;
 * - Devanagari digits become Latin digits.
 *
 * Kept free of Node APIs: the stotra page imports it.
 */

const VOWELS: Record<string, string> = {
  अ: "a", आ: "ā", इ: "i", ई: "ī", उ: "u", ऊ: "ū", ऋ: "ṛ", ॠ: "ṝ", ऌ: "ḷ", ॡ: "ḹ",
  ए: "e", ऐ: "ai", ओ: "o", औ: "au", ऍ: "e", ऑ: "o",
};

const SIGNS: Record<string, string> = {
  "ा": "ā", "ि": "i", "ी": "ī", "ु": "u", "ू": "ū", "ृ": "ṛ", "ॄ": "ṝ", "ॢ": "ḷ", "ॣ": "ḹ",
  "े": "e", "ै": "ai", "ो": "o", "ौ": "au", "ॅ": "e", "ॉ": "o",
};

const CONSONANTS: Record<string, string> = {
  क: "k", ख: "kh", ग: "g", घ: "gh", ङ: "ṅ",
  च: "c", छ: "ch", ज: "j", झ: "jh", ञ: "ñ",
  ट: "ṭ", ठ: "ṭh", ड: "ḍ", ढ: "ḍh", ण: "ṇ",
  त: "t", थ: "th", द: "d", ध: "dh", न: "n",
  प: "p", फ: "ph", ब: "b", भ: "bh", म: "m",
  य: "y", र: "r", ल: "l", व: "v", ळ: "ḻ",
  श: "ś", ष: "ṣ", स: "s", ह: "h",
};

const OTHER: Record<string, string> = {
  "ं": "ṃ", "ः": "ḥ", "ँ": "m̐", "ऽ": "'", "ॐ": "oṃ", "।": "|", "॥": "||",
  "०": "0", "१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9",
};

const VIRAMA = "्";
const NUKTA = "़";
const ZW = /[‌‍]/;

export function devanagariToIast(input: string): string {
  const chars = [...input.normalize("NFC")];
  let out = "";
  for (let i = 0; i < chars.length; i++) {
    const c = chars[i];
    if (ZW.test(c) || c === NUKTA) continue;
    const cons = CONSONANTS[c];
    if (cons !== undefined) {
      out += cons;
      let j = i + 1;
      while (chars[j] === NUKTA || (chars[j] && ZW.test(chars[j]))) j++;
      const next = chars[j];
      if (next === VIRAMA) {
        i = j;
      } else if (next !== undefined && SIGNS[next] !== undefined) {
        out += SIGNS[next];
        i = j;
      } else {
        out += "a";
        i = j - 1;
      }
      continue;
    }
    if (VOWELS[c] !== undefined) out += VOWELS[c];
    else if (OTHER[c] !== undefined) out += OTHER[c];
    else if (SIGNS[c] !== undefined) out += SIGNS[c]; // a stray sign: keep its sound
    else if (c === VIRAMA) continue;
    else out += c;
  }
  return out;
}
