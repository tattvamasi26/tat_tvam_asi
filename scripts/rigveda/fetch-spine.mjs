// Harvest the Rigveda spine from sa.wikisource: every sukta's rishi,
// devata and metre, plus its Sayana bhashya, for all ten mandalas.
//
//   -> corpus/rigveda/rv-spine-raw.json
//   -> corpus/rigveda/suktas/<mandala>.<sukta>.wiki   (1,028 files)
//
// Run: node scripts/rigveda/fetch-spine.mjs
//
// The page's stanza count is NOT usable: it tallies every numeral mark
// on the page, and Sayana quotes other verses inline, so it reports
// 11,632 against the canonical 10,552. Verse counts come from the
// samhita itself. See docs/RIGVEDA-SOURCES.md §9.
//
// Two things make this cheap rather than a 1,028-request crawl:
//   1. allpages enumerates the titles that ACTUALLY exist, so the
//      Valakhilya numbering in mandala 8 needs no special case.
//   2. prop=revisions accepts batched titles, so content comes back
//      ~20 pages at a time.
//
// Wikimedia rate-limits this endpoint, so every request is spaced and
// every batch failure falls back to fetching that batch one page at a
// time.

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const UA = "TatTvamAsi-research/1.0 (reference site; Rigveda spine harvest)";
const H = { "User-Agent": UA };
const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const OUT = join(ROOT, "corpus", "rigveda");
const PAGES_DIR = join(OUT, "suktas");
mkdirSync(PAGES_DIR, { recursive: true });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const DEVA = "०१२३४५६७८९";
const toDeva = (n) => String(n).split("").map((d) => DEVA[+d]).join("");
const fromDeva = (s) => s.replace(/[०-९]/g, (d) => String(DEVA.indexOf(d)));

async function api(params, attempt = 0) {
  const url = new URL("https://sa.wikisource.org/w/api.php");
  url.searchParams.set("format", "json");
  url.searchParams.set("formatversion", "2");
  for (const [k, v] of Object.entries(params)) url.searchParams.set(k, v);
  const res = await fetch(url, { headers: H });
  const body = await res.text();
  try {
    return JSON.parse(body);
  } catch {
    if (attempt < 4) {
      const wait = 10000 * (attempt + 1);
      console.log(`  [throttled] waiting ${wait / 1000}s and retrying…`);
      await sleep(wait);
      return api(params, attempt + 1);
    }
    throw new Error("API kept refusing: " + body.slice(0, 120));
  }
}

// ── 1. Which sukta pages exist? ─────────────────────────────
console.log("Enumerating sukta pages per mandala…");
const titles = [];
for (let md = 1; md <= 10; md++) {
  const r = await api({
    action: "query",
    list: "allpages",
    apprefix: `ऋग्वेदः सूक्तं ${toDeva(md)}.`,
    aplimit: "500",
  });
  const found = (r.query?.allpages || []).map((p) => p.title);
  console.log(`  mandala ${String(md).padStart(2)}: ${found.length} pages`);
  titles.push(...found);
  await sleep(3000);
}
console.log(`TOTAL: ${titles.length} sukta pages (canonical 1,028)\n`);

// ── 2. Fetch their content in batches ───────────────────────
const BATCH = 20;
const records = [];
let done = 0;

function parseOne(page) {
  const text = page.revisions?.[0]?.slots?.main?.content ?? "";
  // "ऋग्वेदः सूक्तं १.१६४" -> mandala 1, sukta 164
  const ref = fromDeva(page.title.replace(/^.*सूक्तं\s*/, "").trim());
  const [mandala, sukta] = ref.split(".").map(Number);

  const header = text.slice(0, text.indexOf("}}") + 2);
  const field = (name) => {
    const m = header.match(new RegExp("\\|\\s*" + name + "\\s*=\\s*([^\\n|]*)"));
    return m ? m[1].trim() : "";
  };

  // notes reads like "दे. अग्निः। गायत्री" — devata, then metre.
  const notes = field("notes");
  const devata = (notes.match(/दे\.\s*([^।|]*)/) || [, ""])[1].trim();
  const metre = notes.includes("।") ? notes.split("।").slice(1).join("।").trim() : "";

  // Stanzas: count the ॥१॥-style numerals in the poem block.
  const stanzaMarks = new Set(
    [...text.matchAll(/॥\s*([०-९]+)\s*॥/g)].map((m) => Number(fromDeva(m[1])))
  );

  return {
    ref: `${mandala}.${sukta}`,
    mandala,
    sukta,
    title: page.title,
    rishi: field("author"),
    devata,
    metre,
    notesRaw: notes,
    stanzas: stanzaMarks.size,
    hasSayana: /सायणभाष्य/.test(text),
    chars: text.length,
    hasAccents: /[॒॑]/.test(text),
  };
}

async function fetchTitles(group) {
  const r = await api({
    action: "query",
    prop: "revisions",
    rvprop: "content",
    rvslots: "main",
    redirects: "1",
    titles: group.join("|"),
  });
  return r.query?.pages || [];
}

for (let i = 0; i < titles.length; i += BATCH) {
  const group = titles.slice(i, i + BATCH);
  let pages;
  try {
    pages = await fetchTitles(group);
  } catch (err) {
    console.log(`  batch at ${i} failed (${err.message}); falling back to singles`);
    pages = [];
    for (const t of group) {
      try {
        pages.push(...(await fetchTitles([t])));
      } catch {
        console.log(`    gave up on ${t}`);
      }
      await sleep(4000);
    }
  }

  for (const page of pages) {
    if (page.missing) continue;
    const rec = parseOne(page);
    records.push(rec);
    const text = page.revisions?.[0]?.slots?.main?.content ?? "";
    writeFileSync(join(PAGES_DIR, `${rec.mandala}.${rec.sukta}.wiki`), text, "utf8");
  }
  done += group.length;
  console.log(`  ${String(done).padStart(4)}/${titles.length} fetched`);
  await sleep(3000);
}

// ── 3. Report and save ──────────────────────────────────────
records.sort((a, b) => a.mandala - b.mandala || a.sukta - b.sukta);
writeFileSync(join(OUT, "rv-spine-raw.json"), JSON.stringify(records, null, 1), "utf8");

const withRishi = records.filter((r) => r.rishi).length;
const withDevata = records.filter((r) => r.devata).length;
const withMetre = records.filter((r) => r.metre).length;
const withSayana = records.filter((r) => r.hasSayana).length;
const totalStanzas = records.reduce((n, r) => n + r.stanzas, 0);

console.log("\n" + "=".repeat(60));
console.log("HARVEST COMPLETE");
console.log("  suktas         :", records.length, "(canonical 1,028)");
console.log("  with rishi     :", withRishi);
console.log("  with devata    :", withDevata);
console.log("  with metre     :", withMetre);
console.log("  with Sayana    :", withSayana);
console.log("  stanzas counted:", totalStanzas, "(canonical 10,552)");
console.log("  saved          :", join(OUT, "rv-spine-raw.json"));
console.log("  sukta wikitext :", PAGES_DIR);

const gaps = records.filter((r) => !r.rishi || !r.devata);
if (gaps.length) {
  console.log(`\n  ${gaps.length} sukta(s) missing rishi or devata:`);
  for (const g of gaps.slice(0, 40)) {
    console.log(`    ${g.ref}  rishi="${g.rishi}" devata="${g.devata}" notes="${g.notesRaw}"`);
  }
}
