// Reading the Anukramani's devata field.
//
// The field is an ATTRIBUTION, not a name: "1-3 Vayu, 4-6 Indra-Vayu,
// 7-9 Mitra-Varuna" is one hymn addressed to three pairs of gods in
// turn. 232 of the 1,028 suktas change devata mid-hymn, so no single
// string can stand for the whole of them honestly.
//
// What we take from it is the PRINCIPAL devata — the one addressed in
// verse 1 — because that is the one the tradition files the hymn
// under, and because it gives every hymn exactly one home. The full
// string is kept beside it and printed on the sukta's own page.

/** Strip wiki links, keeping their label. */
function unlink(s) {
  return s.replace(/\[https?:\/\/\S+\s+([^\]]*)\]/g, "$1").replace(/\[https?:\/\/\S+\]/g, " ");
}

const DEVA_DIGITS = /[०-९]/g;
const DEVA_TO_LATIN = { "०": 0, "१": 1, "२": 2, "३": 3, "४": 4, "५": 5, "६": 6, "७": 7, "८": 8, "९": 9 };

/**
 * A segment's leading verse spec, e.g. "1-3", "1, 7, 9, 12", "6 (first
 * half)". Returns the verse numbers it claims, or null when the
 * segment names no verses at all (i.e. it speaks for the whole hymn).
 */
function leadingVerses(seg) {
  const m = seg.match(/^[\s(]*((?:[०-९0-9]+\s*[-–—,]?\s*)+)/);
  if (!m) return null;
  const head = m[1];
  if (!/[०-९0-9]/.test(head)) return null;
  const nums = head
    .replace(DEVA_DIGITS, (d) => DEVA_TO_LATIN[d])
    .split(/[-–—,]/)
    .map((x) => Number(x.trim()))
    .filter((n) => Number.isFinite(n));
  return nums.length ? nums : null;
}

/** Split on top-level commas only — parentheses hold their own lists. */
function segments(s) {
  const out = [];
  let depth = 0;
  let cur = "";
  for (const ch of s) {
    if (ch === "(") depth++;
    if (ch === ")") depth = Math.max(0, depth - 1);
    if (ch === "," && depth === 0) {
      out.push(cur);
      cur = "";
    } else cur += ch;
  }
  if (cur.trim()) out.push(cur);

  // "2, 4, 6, 8 the gods" is one attribution, not four segments and a
  // name. A segment carrying only numbers belongs to the one after it.
  const merged = [];
  let carry = "";
  for (const seg of out) {
    if (!/\p{L}/u.test(seg)) {
      carry += seg + ",";
      continue;
    }
    merged.push(carry + seg);
    carry = "";
  }
  if (carry.trim()) merged.push(carry);
  return merged;
}

/** The bare name inside a segment, with verse numbers and asides removed. */
function bareName(seg) {
  let s = unlink(seg);
  s = s.replace(/\([^)]*\)?/g, " ");            // asides
  s = s.replace(/^[\s०-९0-9,.\-–—]+/, "");      // leading verse spec
  s = s.split(/[।=]/)[0];                       // devata, then metre
  s = s.replace(/\s+/g, " ").trim();
  // A trailing "va" marks an alternative reading, but only as its own
  // word: "vishve deva" ends in those two letters and must survive.
  s = s.replace(/\s+(वा|इति\s*एके)$/, "").trim();
  return s;
}

/**
 * The principal devata of a raw attribution string: the name attached
 * to verse 1, else the first name given.
 */
export function principalDevata(raw) {
  if (!raw || !raw.trim()) return "";
  let s = unlink(raw).trim();
  s = s.replace(/^\([^)]*\)\s*/, "");           // a leading aside, e.g. "(प्रतिदैवतं…)"
  const segs = segments(s);

  // A first segment with no verse numbers speaks for the whole hymn:
  // "Agni, (in) 1 the Rtus alternatively" is Agni's hymn, not the
  // Rtus'. Only when the string OPENS with a verse range do we look
  // for the segment that covers verse 1.
  const opensWithRange = leadingVerses(segs[0] || "") !== null;
  if (opensWithRange) {
    for (const seg of segs) {
      const verses = leadingVerses(seg);
      if (verses && verses.includes(1) && !/\sवा\s*$/.test(seg.trim())) {
        const name = bareName(seg);
        if (name) return name;
      }
    }
  }
  for (const seg of segs) {
    const name = bareName(seg);
    if (name) return name;
  }
  return "";
}

/** Does this attribution name more than one devata? */
export function isMixed(raw) {
  if (!raw) return false;
  const segs = segments(unlink(raw));
  const names = new Set(segs.map(bareName).filter(Boolean));
  return names.size > 1;
}
