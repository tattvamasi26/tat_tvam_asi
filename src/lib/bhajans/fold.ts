import { devanagariToIast } from "@/lib/iast";

// ─────────────────────────────────────────────────────────
//  One key for every way a song's words get typed.
//
//  A reader looking for ಕೃಷ್ಣ may type it in Kannada, or as krishna,
//  krushna, krsna or kṛṣṇa; ರಂಗ as ranga or raṃga; ವಿಠಲ as vittala,
//  vithala or viṭhala. Both the song and the query are reduced to the
//  same plain key, so any of those finds the song:
//
//    1. Kannada is turned into IAST by rule: through Devanagari (the two
//       blocks run in parallel, 0x380 apart) and src/lib/iast.ts. The
//       short e and o that Kannada has and Sanskrit lacks are written
//       long first, since the IAST rule only knows the long ones.
//    2. Diacritics go, the aspirates and the sibilants are levelled
//       (bh → b, sh/ṣ/ś → s, ch → c), doubled letters collapse, and the
//       vowel ṛ, which readers write ri or ru, is written r.
//    3. An anusvāra before a labial (saṃbhrama) is n either way, as a
//       reader typing sambhrama means the same sound.
//
//  The key is for matching only and is never shown. It over-matches a
//  little by design (hari and har fold together), which costs a few
//  extra results and never a missed song.
// ─────────────────────────────────────────────────────────

const KN_SHORT: Record<string, string> = {
  "ಎ": "ಏ", // ಎ → ಏ
  "ಒ": "ಓ", // ಒ → ಓ
  "ೆ": "ೇ", // ೆ → ೇ
  "ೊ": "ೋ", // ೊ → ೋ
};

/** Kannada script to IAST, by rule. */
export function kannadaToIast(text: string): string {
  const deva = text
    .replace(/[ಎಒೆೊ]/g, (c) => KN_SHORT[c])
    .replace(/[ಀ-೯]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0x380));
  return devanagariToIast(deva);
}

/** Any text (Kannada, Devanagari, IAST or plain roman) to the matching key. */
export function fold(text: string): string {
  let s = text;
  if (/[ಀ-೿]/.test(s)) s = kannadaToIast(s);
  if (/[ऀ-ॿ]/.test(s)) s = devanagariToIast(s);
  s = s
    .toLowerCase()
    .replace(/ṛ|ṝ/g, "r")
    // The anusvāra is m at the end of a word (rāmaṃ) and n before a
    // consonant, where readers write it (raṃga, govinda).
    .replace(/[ṃṁ](?![a-zāīūṛṣśṇṭḍñṅḷḻ])/g, "m")
    .replace(/[ṃṁ]/g, "n")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z\s]/g, " ")
    .replace(/sh/g, "s")
    .replace(/([bcdgjkpt])h/g, "$1")
    .replace(/w/g, "v")
    .replace(/z/g, "j")
    .replace(/m(?=[pb])/g, "n")
    .replace(/ee/g, "i")
    .replace(/oo/g, "u")
    .replace(/(.)\1+/g, "$1")
    // The vowel ṛ as readers write it: kr̥ṣṇa, krishna, krushna.
    .replace(/(?<=[bcdgjklmnpstvy])r[iu](?![aeiou])/g, "r")
    .replace(/\s+/g, " ")
    .trim();
  return s;
}
