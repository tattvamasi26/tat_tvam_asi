import type { Locale } from "@/i18n/config";

// ─────────────────────────────────────────────────────────
//  Sanskrit is not Devanagari.
//
//  Devanagari is the script Sanskrit is most often printed in
//  today, but it is not the script Sanskrit "is". The same verse
//  is written in Kannada script across Karnataka, in Telugu
//  script in Andhra, in Grantha in the Tamil country, in Sharada
//  in Kashmir — and a stotra book bought in Udupi is in Kannada
//  letters, not Devanagari ones.
//
//  So a reader who has chosen Kannada should see the mūla in
//  Kannada. Showing them Devanagari is not "showing the original";
//  it is showing one regional convention and calling it neutral.
//
//  HOW THE CONVERSION WORKS
//
//  Both blocks are ISCII-derived and laid out in parallel, so for
//  the shared range a single offset does the whole job:
//
//      Devanagari  U+0900 … U+097F
//      Kannada     U+0C80 … U+0CFF        offset +0x380
//
//      क U+0915 → ಕ U+0C95      ा U+093E → ಾ U+0CBE
//      ् U+094D → ್ U+0CCD      ं U+0902 → ಂ U+0C82
//
//  This is a script transliteration, not a translation and not a
//  phonetic respelling: it is reversible, and it changes nothing
//  about the words. The exceptions are handled explicitly below.
// ─────────────────────────────────────────────────────────

const OFFSET = 0x380;

/**
 * Code points with no counterpart at the parallel offset, or where
 * the parallel slot is unassigned. Anything not listed and not in
 * the mapped range is passed through untouched.
 */
const EXPLICIT: Record<string, string> = {
  // Kannada has no single OM sign; ಓಂ is what is actually printed.
  "ॐ": "ಓಂ", // ॐ → ಓಂ
  // Daṇḍa and double daṇḍa are shared Indic punctuation. They live in
  // the Devanagari block but are used unchanged in Kannada text.
  "।": "।", // ।
  "॥": "॥", // ॥
  // Candra-E / candra-O are Marathi/Konkani vowels; their parallel
  // Kannada slots are unassigned. They do not occur in Sanskrit, but
  // pass them through rather than emitting a hole.
  "ऍ": "ऍ",
  "ऑ": "ऑ",
  "ॅ": "ॅ",
  "ॉ": "ॉ",
};

/** Unassigned in the Kannada block — never emit these. */
function isAssignedKannada(cp: number): boolean {
  // Holes in U+0C80..U+0CFF that the offset could otherwise land in.
  const holes = [
    0x0c8d, 0x0c91, 0x0ca9, 0x0cb4, 0x0cba, 0x0cbb, 0x0cc5, 0x0cc9,
    0x0cce, 0x0ccf, 0x0cd0, 0x0cd1, 0x0cd2, 0x0cd3, 0x0cd4, 0x0cd7,
    0x0cd8, 0x0cd9, 0x0cda, 0x0cdb, 0x0cdc, 0x0cdd, 0x0cdf,
  ];
  return !holes.includes(cp);
}

/** Devanagari → Kannada script, character by character. */
export function devanagariToKannada(input: string): string {
  let out = "";
  for (const ch of input) {
    const explicit = EXPLICIT[ch];
    if (explicit !== undefined) {
      out += explicit;
      continue;
    }
    const cp = ch.codePointAt(0)!;
    if (cp >= 0x0900 && cp <= 0x097f) {
      const target = cp + OFFSET;
      out += isAssignedKannada(target) ? String.fromCodePoint(target) : ch;
    } else {
      out += ch;
    }
  }
  return out;
}

/**
 * The mūla in the script that goes with the reading language.
 *
 * English and Hindi both get Devanagari — Hindi because it is written
 * in it, English because Devanagari plus the IAST line beside it is
 * the scholarly convention and neither is the reader's own script
 * anyway. Kannada gets Kannada.
 */
export function scriptFor(text: string, locale: Locale): string {
  return locale === "kn" ? devanagariToKannada(text) : text;
}

/** The CSS class that pairs with the script `scriptFor` produced. */
export function scriptClass(locale: Locale): string {
  return locale === "kn" ? "kannada" : "deva";
}
