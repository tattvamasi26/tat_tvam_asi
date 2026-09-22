// Fetch the accented (sasvara) Rigveda samhita from sa.wikisource.
//
//   -> corpus/rigveda/rv-sasvara-raw.txt
//
// Run: node scripts/rigveda/fetch-samhita.mjs
//
// Two plain-text pages hold the whole collection, locator-tagged and
// machine-parseable:
//
//   1.001.01a अ॒ग्निमी॑ळे पु॒रोहि॑तं य॒ज्ञस्य॑ दे॒वमृ॒त्विज॑म् ।
//   1.001.01c होता॑रं रत्न॒धात॑मम् ॥
//
// The pada letter is OPTIONAL. RV 1.65-70 and 7.17 are in dvipada
// viraj and print one line per stanza with no letter at all; a parser
// that requires it reports 1,021 suktas and thinks seven hymns are
// missing. They are not missing. See docs/RIGVEDA-SOURCES.md §2.
//
// Licence: CC BY-SA 4.0 (and GFDL), per the Wikimedia Terms of Use.
// Attribution is satisfied by a link to the page history.

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const OUT = join(ROOT, "corpus", "rigveda");

const UA = "TatTvamAsi-research/1.0 (reference site; Rigveda samhita)";
const PAGES = ["ऋग्वेदः/संहिता/सस्वरपाठः/१-५", "ऋग्वेदः/संहिता/सस्वरपाठः/६-१०"];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function page(title, attempt = 0) {
  const url = new URL("https://sa.wikisource.org/w/api.php");
  for (const [k, v] of Object.entries({
    format: "json",
    formatversion: "2",
    action: "query",
    prop: "revisions",
    rvprop: "content",
    rvslots: "main",
    titles: title,
  })) {
    url.searchParams.set(k, v);
  }
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  const body = await res.text();
  try {
    const json = JSON.parse(body);
    const p = json.query?.pages?.[0];
    if (!p || p.missing) throw new Error(`no such page: ${title}`);
    return p.revisions[0].slots.main.content;
  } catch (err) {
    // Wikimedia answers a throttled request with an HTML error page,
    // which is why this catches a parse failure rather than a status.
    if (attempt < 4) {
      const wait = 10000 * (attempt + 1);
      console.log(`  [throttled] waiting ${wait / 1000}s…`);
      await sleep(wait);
      return page(title, attempt + 1);
    }
    throw err;
  }
}

mkdirSync(OUT, { recursive: true });

let text = "";
for (const title of PAGES) {
  console.log("fetching", title);
  const content = await page(title);
  console.log(`  ${content.length.toLocaleString()} characters`);
  text += content + "\n";
  await sleep(3000);
}

const file = join(OUT, "rv-sasvara-raw.txt");
writeFileSync(file, text, "utf8");

// Count what came back, so a short page is noticed here and not three
// steps later in the build.
const verseLine = /^(\d+)\.(\d+)\.(\d+)([a-z]?)\s+/;
const suktas = new Set();
const stanzas = new Set();
for (const line of text.split(/\r?\n/)) {
  const m = line.match(verseLine);
  if (!m) continue;
  suktas.add(`${Number(m[1])}.${Number(m[2])}`);
  stanzas.add(`${Number(m[1])}.${Number(m[2])}.${Number(m[3])}`);
}

console.log("\nsaved  :", file);
console.log("suktas :", suktas.size, "(canonical 1,028)");
console.log("stanzas:", stanzas.size, "(canonical 10,552)");
if (suktas.size !== 1028 || stanzas.size !== 10552) {
  console.error("\nThe counts are wrong. Do not build from this file.");
  process.exit(1);
}
