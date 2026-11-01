// Shared by the stotra harvest scripts.

import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

export const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
export const CORPUS = join(ROOT, "corpus", "stotras");
export const UA = "TatTvamAsi-research/1.0 (reference site; stotra harvest; https://tattvam-asi.in)";

export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** The Wikisource API, spaced, with a growing wait on refusal. */
export async function api(params, attempt = 0) {
  const url = new URL("https://sa.wikisource.org/w/api.php");
  url.searchParams.set("format", "json");
  url.searchParams.set("formatversion", "2");
  for (const [k, v] of Object.entries(params)) url.searchParams.set(k, v);
  await sleep(700);
  try {
    const res = await fetch(url, { headers: { "User-Agent": UA } });
    if (res.status === 429 || res.status >= 500) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (e) {
    if (attempt >= 5) throw e;
    const wait = 8000 * (attempt + 1);
    console.log(`  [${e.message}] waiting ${wait / 1000}s…`);
    await sleep(wait);
    return api(params, attempt + 1);
  }
}

/**
 * Kannada script to Devanagari: the inverse of scriptFor() in
 * src/lib/script.ts. The two blocks are laid out in parallel, 0x380
 * apart, for every letter Sanskrit uses.
 */
export function knToDeva(s) {
  return s.replace(/[ಀ-೯]/g, (ch) => String.fromCharCode(ch.charCodeAt(0) - 0x380));
}

// A nasal written out before a stop of its own class is the same sound
// as an anusvāra (पञ्च = पंच). Not before य, र, ल, व, a sibilant or
// another nasal: there the two are different words (सुब्रह्मण्य, महिम्नः).
const NASALS = /[ङञणनम]्(?=[क-घच-झट-ढत-धप-भ])/g;

/**
 * A title reduced to what two spellings of the same stotra share: no
 * "Śrī", no spaces or punctuation, no parenthetical source, every nasal
 * before a consonant written as anusvāra, and the common endings
 * (stotram, -ṃ, -ḥ) levelled. Used only to match titles, never shown.
 */
export function titleKey(raw) {
  let s = knToDeva(raw)
    .replace(/\(.*?\)/g, "")
    .replace(/श्रीमत्|श्रीः|श्री/g, "")
    .replace(/[\s.,:;'"’‘\-–—।॥/]/g, "")
    .replace(NASALS, "ं")
    .replace(/स्त्रोत्र/g, "स्तोत्र")
    .replace(/ॠ/g, "ऋ")
    .replace(/ळ/g, "ल")
    // Words written apart that the book joins: "सुब्रह्मण्य अष्टोत्तर" is
    // सुब्रह्मण्याष्टोत्तर (a + a = ā, a + i = e, a + u = o).
    .replace(/([क-ह])[अआ]/g, "$1ा")
    .replace(/([क-ह])[इई]/g, "$1े")
    .replace(/([क-ह])[उऊ]/g, "$1ो");
  // One ending at a time: -m / -ṃ / -ḥ, then a trailing "stotra".
  s = s.replace(/(म्|ं|ः)$/, "");
  s = s.replace(/स्तोत्र$/, "");
  return s;
}

export const toDevaDigits = (n) => String(n).replace(/\d/g, (d) => "०१२३४५६७८९"[+d]);
