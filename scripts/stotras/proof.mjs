// A proof sheet for one stotra: its verses as the edition has them
// (with any recorded corrections applied), and every place the witness
// disagrees, in context — what to look for on the scan.
//
//   node scripts/stotras/proof.mjs "कालभैरवाष्टकम्"
//
// Reads corpus/stotras/bsr/collation.json, so run collate.mjs first.
// Scan page n of the book is printed page n − 8.

import { readFileSync } from "node:fs";
import { join } from "node:path";
import { CORPUS } from "./lib.mjs";
import { loadChecks, applyChecks } from "./compare.mjs";

const title = process.argv[2];
const stotras = JSON.parse(readFileSync(join(CORPUS, "bsr", "stotras.json"), "utf8"));
const collation = JSON.parse(readFileSync(join(CORPUS, "bsr", "collation.json"), "utf8"));
const matches = stotras.filter((s) => s.title === title);
const which = Number(process.argv[3] ?? 0);
const s = matches[which];
if (!s) {
  console.log("no such stotra; titles containing it:", stotras.filter((x) => x.title.includes(title)).map((x) => x.title));
  process.exit(1);
}
const rec = collation.filter((r) => r.title === title)[which];
const check = loadChecks().get(s.pages[0]);
const verses = applyChecks(s, check);

console.log(`${s.title}  scan pages ${s.pages.join(", ")}  (printed ${s.pages.map((p) => p - 8).join(", ")})`);
console.log(`quality: ${JSON.stringify(s.quality)}`);
console.log(`witness: ${rec?.witness?.url ?? "none"}  status: ${rec?.status}\n`);
verses.forEach((v) => {
  const label = v.label;
  if (v.heading) console.log(`  [${v.heading}]`);
  if (!label) return;
  console.log(`${label.padStart(4)}  ${v.lines.join("\n      ")}`);
  for (const u of rec?.unsettled?.filter((x) => x.verse === label) ?? []) {
    console.log(`        ? …${u.before}[${u.edition || "∅"} → ${u.witness || "∅"}]${u.after}…`);
  }
});
console.log(`\ncolophon: ${s.colophon.join(" / ")}`);
