// Check the edition against a second witness, verse by verse.
//
//   reads  corpus/stotras/bsr/stotras.json, corpus/stotras/stotranidhi-catalogue.json,
//          src/lib/stotra-corpus/checked/*.json
//   cache  corpus/stotras/witness/*.txt   (a witness page's text, in Devanagari)
//   -> corpus/stotras/bsr/collation.json
//
// Run: node scripts/stotras/collate.mjs
//
// The edition is the Bṛhat Stotra Ratnākara as proofread on Wikisource.
// Proofreading there is uneven — "validated" pages still carry OCR
// slips (शस्मु for शम्भु), and syllables hanging in the margin were
// dropped — so no text is published on that status alone. Each stotra
// is compared with an independent transcription on stotranidhi.com.
// Every place the two disagree is settled on the scan of the printed
// page, and the decision is recorded in the stotra's check record
// (src/lib/stotra-corpus/checked/): a correction, where the
// transcription misread the print, or a variant kept, where the book
// really reads differently. A stotra is verified when nothing is left
// unsettled.
//
// The witness is used only to check. The site publishes the edition's
// text; nothing is taken from the witness.
//
// The witness is chosen by its text, not its title: stotranidhi numbers
// its variants ("दक्षिणामूर्तिस्तोत्रम् – 1 … 5"), and two stotras can
// share a name. Pages are fetched three seconds apart and cached.

import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { CORPUS, knToDeva, titleKey, sleep } from "./lib.mjs";
import { norm, dice, diff, hunks, loadChecks, applyChecks, cleanWitness } from "./compare.mjs";

const WIT = join(CORPUS, "witness");
mkdirSync(WIT, { recursive: true });
const UA = "Mozilla/5.0 (compatible; TatTvamAsi-research/1.0; +https://tattvam-asi.org)";

const stotras = JSON.parse(readFileSync(join(CORPUS, "bsr", "stotras.json"), "utf8"));
const catalogue = JSON.parse(readFileSync(join(CORPUS, "stotranidhi-catalogue.json"), "utf8"));
const checks = loadChecks();

// "Sri X Stotram – ಶ್ರೀ ..." carries an English name first; in
// "ಬಿಲ್ವಾಷ್ಟಕಂ – 1" the number belongs to the name.
const knTitle = (t) => (/^[A-Za-z]/.test(t) && t.includes("–") ? t.split("–").pop().trim() : t);
const items = new Map();
for (const g of catalogue.groups)
  for (const it of g.items)
    if (!items.has(it.url)) items.set(it.url, { ...it, key: titleKey(knTitle(it.title).replace(/–\s*[0-9೦-೯]+.*$/, "")) });
const witnesses = [...items.values()];

export async function witnessText(url) {
  const file = join(WIT, Buffer.from(url).toString("base64url").slice(-80) + ".txt");
  if (existsSync(file)) return readFileSync(file, "utf8");
  let html = "";
  for (let attempt = 0; attempt < 5; attempt++) {
    await sleep(3000 * (attempt + 1));
    try {
      const res = await fetch(url, { headers: { "User-Agent": UA, "Accept-Language": "kn,en" } });
      if (res.status === 404) return "";
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      html = await res.text();
      break;
    } catch (e) {
      console.log(`  [${e.message}] retrying ${url.slice(-50)}`);
    }
  }
  if (!html) return "";
  const i = html.indexOf('class="entry-content');
  const j = html.indexOf("</article", i);
  const body = html
    .slice(i, j)
    .replace(/<(script|style)[\s\S]*?<\/\1>/g, "")
    .replace(/<br\s*\/?>|<\/p>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&#8211;/g, "–")
    .replace(/&[a-z]+;|&#\d+;/g, "");
  // Keep only the stotra: lines mostly in Kannada letters, and not the
  // breadcrumb trail ("ಸ್ತೋತ್ರನಿಧಿ → …").
  const text = knToDeva(
    body
      .split("\n")
      .map((l) => l.trim())
      .filter((l) => !/→|ಸ್ತೋತ್ರನಿಧಿ/.test(l))
      .filter((l) => (l.match(/[ಀ-೿]/g)?.length ?? 0) > l.length * 0.5)
      .join("\n"),
  );
  writeFileSync(file, text);
  return text;
}

const out = [];
for (const s of stotras) {
  const check = checks.get(s.pages[0]) ?? null;
  const verses = applyChecks(s, check).filter((v) => v.lines.length);
  const vNorm = verses.map((v) => norm(v.lines.join(" ")));
  const whole = vNorm.join("");
  const rec = { title: s.title, pages: s.pages, verses: verses.length, checked: Boolean(check), witness: null, unsettled: [] };

  // The witness: the one named in the check record, else the best by text.
  let best = null;
  if (check?.witness) {
    const text = norm(cleanWitness(await witnessText(check.witness)));
    best = { url: check.witness, score: dice(whole, text), text };
  } else {
    const bsrKey = titleKey(s.title.replace(/प्रारम्भः?$/, ""));
    const cands = witnesses.filter(
      (w) => w.key === bsrKey || (w.key.length >= 4 && bsrKey.length >= 4 && (w.key.includes(bsrKey) || bsrKey.includes(w.key))),
    );
    for (const c of cands.slice(0, 8)) {
      const text = norm(cleanWitness(await witnessText(c.url)));
      if (!text) continue;
      const score = dice(whole, text);
      if (!best || score > best.score) best = { url: c.url, score, text };
    }
  }

  if (best && best.score >= 0.6) {
    rec.witness = { url: best.url, similarity: Number(best.score.toFixed(3)) };
    const result = diff(whole, best.text);
    if (!result) rec.tooDifferent = true;
    else {
      // Charge each hunk to the verse it falls in.
      const bounds = [];
      let pos = 0;
      for (const v of vNorm) bounds.push([pos, (pos += [...v].length)]);
      for (const h of hunks(result)) {
        let vi = bounds.findIndex(([x, y]) => h.at >= x && h.at < y);
        if (vi < 0) vi = bounds.length - 1;
        const v = verses[vi];
        const label = v.label;
        // A kept variant settles a disagreement only where it falls inside
        // the very reading the record names — never the rest of the verse.
        const rel = h.at - bounds[vi][0];
        const vText = [...vNorm[vi]].join("");
        const covered = (check?.variants ?? []).some((k) => {
          if (String(k.verse) !== label) return false;
          if (k.whole) return true; // a verse the witness lacks altogether
          // Text the witness adds that the book does not have: settles an
          // insertion only, and only of that text.
          if (k.extra) return h.edition === "" && norm(k.extra).includes(h.witness);
          if (!k.reading) return false;
          // A final nasal is written ं or म् by what follows: try both.
          const base = norm(k.reading);
          const forms = new Set([base, base.replace(/ं$/, "म्"), base.replace(/म्$/, "ं")]);
          for (const r of forms) {
            for (let i = vText.indexOf(r); i >= 0; i = vText.indexOf(r, i + 1)) {
              const start = [...vText.slice(0, i)].length;
              const end = start + [...r].length;
              if (rel >= start && rel + [...h.edition].length <= end) return true;
            }
          }
          return false;
        });
        if (covered) continue;
        rec.unsettled.push({ verse: label, ...h });
      }
    }
  }
  rec.status = !check ? "unchecked" : rec.witness && !rec.tooDifferent && rec.unsettled.length === 0 ? "verified" : "unsettled";
  out.push(rec);
  const verseCount = new Set(rec.unsettled.map((u) => u.verse)).size;
  console.log(
    `${rec.status.padEnd(9)} ${rec.witness ? (rec.tooDifferent ? "too-different" : `${String(rec.unsettled.length).padStart(3)} spots in ${String(verseCount).padStart(3)}/${verses.length} verses`) : "no witness"}  ${s.title}`,
  );
}
writeFileSync(join(CORPUS, "bsr", "collation.json"), JSON.stringify(out, null, 1));
console.log(`${out.length} stotras; ${out.filter((r) => r.witness).length} with a witness; ${out.filter((r) => r.status === "verified").length} verified`);
