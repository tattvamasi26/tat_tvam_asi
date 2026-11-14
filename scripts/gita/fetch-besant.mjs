// The Besant & Bhagavan Das Gita (1905) on Sanskrit Wikisource: every
// transcribed page, its proofread status and revision id, saved to
// corpus/gita/besant/pages.json. GET only, spaced.
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { api, ROOT, toDevaDigits } from "../stotras/lib.mjs";

const BASE = "पृष्ठम्:भगवद्गीता (आनिबेसेण्ट्, भगवान्दासश्च).djvu/";
const N = 398;
const out = [];
for (let k = 1; k <= N; k += 6) {
  const titles = [];
  for (let i = k; i < Math.min(k + 6, N + 1); i++) titles.push(BASE + toDevaDigits(i));
  const d = await api({ action: "query", titles: titles.join("|"), prop: "revisions|proofread", rvprop: "ids|content", rvslots: "main" });
  for (const p of d.query.pages) {
    const n = Number(p.title.split("/").pop().replace(/[०-९]/g, (c) => "०१२३४५६७८९".indexOf(c)));
    out.push({ n, missing: !!p.missing, quality: p.proofread?.quality ?? null, revid: p.revisions?.[0]?.revid ?? null, text: p.revisions?.[0]?.slots?.main?.content ?? "" });
  }
  console.log("pages", k, "…");
}
out.sort((a, b) => a.n - b.n);
writeFileSync(join(ROOT, "corpus", "gita", "besant", "pages.json"), JSON.stringify(out, null, 1));
const q = {};
for (const p of out) q[p.missing ? "missing" : p.quality] = (q[p.missing ? "missing" : p.quality] || 0) + 1;
console.log("quality:", q);
