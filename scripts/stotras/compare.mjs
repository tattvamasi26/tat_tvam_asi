// Comparing the edition with its witness, and applying the checks
// recorded in src/lib/stotra-corpus/checked/. Shared by collate.mjs,
// proof.mjs and build.mjs.

import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import { ROOT, knToDeva } from "./lib.mjs";

export const CHECKED = join(ROOT, "src", "lib", "stotra-corpus", "checked");

/**
 * Text levelled for comparison. Only conventions are levelled — how a
 * nasal or a visarga sandhi is written, ळ for ल, spacing, punctuation,
 * numbering. A different letter stays a difference.
 */
export function norm(s) {
  return knToDeva(s)
    .normalize("NFC")
    .replace(/[‌‍]/g, "")
    .replace(/ळ/g, "ल")
    .replace(/ऽ/g, "")
    .replace(/[\s।॥|.,;:'"()\[\]{}\-–—_*0-9०-९?!]/g, "")
    // Nasals: one rule, applied the same way to both texts once the
    // spaces are gone, so a word end and a verse end level alike.
    .replace(/[ङञणन]्(?=[क-घच-झट-ढत-धप-भ])/g, "ं")
    .replace(/म्(?=[क-हअ-औ]|$)/g, "ं")
    .replace(/श्श/g, "ःश")
    .replace(/स्स/g, "ःस")
    .replace(/ष्ष/g, "ःष")
    .replace(/र्([क-ह])्\1/g, "र्$1");
}

function bigrams(s) {
  const m = new Map();
  for (let i = 0; i < s.length - 1; i++) m.set(s.slice(i, i + 2), (m.get(s.slice(i, i + 2)) ?? 0) + 1);
  return m;
}

/** Sørensen–Dice over character bigrams: 1 for identical texts. */
export function dice(a, b) {
  const A = bigrams(a), B = bigrams(b);
  let inter = 0, na = 0, nb = 0;
  for (const v of A.values()) na += v;
  for (const v of B.values()) nb += v;
  for (const [k, v] of A) inter += Math.min(v, B.get(k) ?? 0);
  return na + nb ? (2 * inter) / (na + nb) : 0;
}

/**
 * Myers' O(ND) diff over code points. Returns the edits as
 * { op: "del" | "ins", a, b } — a deletion of A[a], or an insertion of
 * B[b] before A[a] — or null when the texts differ by more than maxD.
 */
export function diff(a, b, maxD = 6000) {
  const A = [...a], B = [...b], N = A.length, M = B.length, MAX = N + M;
  const off = MAX + 1;
  const V = new Int32Array(2 * MAX + 3);
  const trace = [];
  for (let d = 0; d <= Math.min(MAX, maxD); d++) {
    trace.push(V.slice());
    for (let k = -d; k <= d; k += 2) {
      let x = k === -d || (k !== d && V[off + k - 1] < V[off + k + 1]) ? V[off + k + 1] : V[off + k - 1] + 1;
      let y = x - k;
      while (x < N && y < M && A[x] === B[y]) x++, y++;
      V[off + k] = x;
      if (x >= N && y >= M) {
        // Walk back through the trace to recover the edits.
        const edits = [];
        let cx = N, cy = M, ck = k;
        for (let D = d; D > 0; D--) {
          const T = trace[D];
          const down = ck === -D || (ck !== D && T[off + ck - 1] < T[off + ck + 1]);
          const pk = down ? ck + 1 : ck - 1;
          const px = T[off + pk], py = px - pk;
          const sx = down ? px : px + 1, sy = down ? py + 1 : py;
          while (cx > sx && cy > sy) cx--, cy--;
          if (down) edits.push({ op: "ins", a: px, b: py });
          else edits.push({ op: "del", a: px, b: py });
          cx = px; cy = py; ck = pk;
        }
        return { A, B, edits: edits.reverse() };
      }
    }
  }
  return null;
}

/** Contiguous runs of edits, each with a little context either side. */
export function hunks(result, context = 6) {
  const { A, B, edits } = result;
  const runs = [];
  for (const e of edits) {
    const last = runs.at(-1);
    if (last && e.a <= last.aEnd + 1 && Math.abs(e.b - last.bEnd) <= 2) {
      last.aEnd = Math.max(last.aEnd, e.op === "del" ? e.a + 1 : e.a);
      last.bEnd = Math.max(last.bEnd, e.op === "ins" ? e.b + 1 : e.b);
    } else runs.push({ aStart: e.a, aEnd: e.op === "del" ? e.a + 1 : e.a, bStart: e.b, bEnd: e.op === "ins" ? e.b + 1 : e.b });
  }
  return runs.map((r) => {
    // Trim what the two sides share at either end, so a run that the
    // diff drew as "भानु → …भानु" reads as the insertion it is.
    let { aStart, aEnd, bStart, bEnd } = r;
    while (aStart < aEnd && bStart < bEnd && A[aEnd - 1] === B[bEnd - 1]) aEnd--, bEnd--;
    while (aStart < aEnd && bStart < bEnd && A[aStart] === B[bStart]) aStart++, bStart++;
    return {
      at: aStart,
      edition: A.slice(aStart, aEnd).join(""),
      witness: B.slice(bStart, bEnd).join(""),
      before: A.slice(Math.max(0, aStart - context), aStart).join(""),
      after: A.slice(aEnd, aEnd + context).join(""),
    };
  });
}

// ── The checked records ────────────────────────────────────

/** Every check record, by the scan page its stotra starts on (titles repeat). */
export function loadChecks() {
  const out = new Map();
  if (!existsSync(CHECKED)) return out;
  for (const f of readdirSync(CHECKED)) {
    if (!f.endsWith(".json")) continue;
    const c = JSON.parse(readFileSync(join(CHECKED, f), "utf8"));
    out.set(c.startPage, { ...c, file: f });
  }
  return out;
}

/**
 * The edition's verses with the recorded corrections applied and any
 * abbreviated refrain written out. Throws if a correction does not find
 * exactly the text it says it replaces: a correction that silently
 * misses is worse than none.
 */
export function applyChecks(stotra, check) {
  // Every verse gets one label, used by check records, proof sheets and
  // the collation alike: the edition's own number where it prints one,
  // else "#k", its place among the verses (headings not counted).
  let k = 0;
  const verses = stotra.verses
    .filter((v) => v.lines.length || v.heading)
    .map((v) => {
      const out = { ...v, lines: [...v.lines] };
      if (v.lines.length) {
        k++;
        out.label = v.n != null ? String(v.n) : `#${k}`;
      }
      return out;
    });
  if (!check) return verses;
  for (const c of check.corrections ?? []) {
    // A verse is named by the edition's number ("verse": 4) or, where the
    // edition prints none, by its place in the stotra ("verse": "#4").
    const v = verseAt(verses, c.verse);
    if (!v) throw new Error(`${check.file}: no verse ${c.verse}`);
    const joined = v.lines.join("\n");
    const count = joined.split(c.from).length - 1;
    if (count !== 1) throw new Error(`${check.file}: verse ${c.verse}: "${c.from}" found ${count} times`);
    v.lines = joined.replace(c.from, c.to).split("\n");
  }
  // Two verses the transcription ran together, because it lost the
  // danda between them: split after the line that ends the first.
  for (const sp of check.split ?? []) {
    const i = verses.findIndex((v) => v.label === String(sp.verse));
    if (i < 0) throw new Error(`${check.file}: no verse ${sp.verse} to split`);
    const v = verses[i];
    const at = v.lines.findIndex((l) => l.includes(sp.after));
    if (at < 0 || at === v.lines.length - 1) throw new Error(`${check.file}: cannot split verse ${sp.verse} after "${sp.after}"`);
    const rest = { ...v, n: null, lines: v.lines.slice(at + 1), label: `${v.label}b` };
    v.lines = v.lines.slice(0, at + 1);
    verses.splice(i + 1, 0, rest);
  }
  if (check.refrain) {
    // The book prints a repeated refrain once and abbreviates it after:
    // "काशिका ...", "चिदा...", "चिदानन्द ...". Any start of the refrain
    // followed by dots is written out in full.
    const { from, full } = check.refrain;
    const esc = from.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const re = new RegExp(`${esc}[^\\s.।॥]*\\s*(?:\\.\\s*){2,}|${esc}[^\\s.।॥]*\\s*…`, "g");
    for (const v of verses) v.lines = v.lines.map((l) => l.replace(re, full + " ").replace(/\s+॥/, " ॥"));
    // Some books cut the refrain to its first word with no dots at all
    // ("…त्तदेको ॥"); `bare: true` writes that out too, at a line's end.
    if (check.refrain.bare) {
      const bare = new RegExp(`${esc}\\s*॥\\s*$`);
      for (const v of verses) v.lines = v.lines.map((l) => (l.includes(full) ? l : l.replace(bare, `${full} ॥`)));
    }
  }
  if (check.drop) {
    // Lines the segmenter took in that are not the stotra's (a running
    // head it missed, the next stotra's title).
    for (const d of check.drop) {
      const v = verseAt(verses, d.verse);
      v.lines = v.lines.filter((l) => l !== d.line);
    }
  }
  return verses;
}

function verseAt(verses, label) {
  const l = String(label);
  return verses.find((v) => v.label === l);
}

/**
 * A witness page cut down to the stotra: no title line, no breadcrumb,
 * no notice about the site's books, nothing from its colophon on.
 */
export function cleanWitness(text) {
  const lines = text.split("\n").filter((l) => l.trim());
  const out = [];
  for (const [i, l] of lines.entries()) {
    if (/स्तोत्रनिधि|→|Click|पुस्तक|ग्रंथ|पारायण|इन्नष्टु|नोडि/.test(l)) continue;
    // Its colophon: "इति …" naming the work, never ending in a verse number.
    if (/^\s*इति/.test(l) && !/[०-९0-9]\s*[॥|]*\s*$/.test(l) && /(सम्पूर्ण|संपूर्ण|समाप्त|विरचित|कृत|स्तोत्र|स्तव|स्तुति|ष्टक)/.test(l)) break;
    if (i === 0 && !/[।॥|]/.test(l)) continue; // its title
    out.push(l);
  }
  return out.join("\n");
}
