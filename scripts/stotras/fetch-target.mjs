// The coverage target: which stotras stotranidhi.com lists in Kannada,
// by devata. Titles and links only — no stotra text is read or kept.
//
//   -> corpus/stotras/stotranidhi-catalogue.json
//
// Run: node scripts/stotras/fetch-target.mjs
//
// stotranidhi publishes no licence for its editions, so its texts are
// not a source for this site (docs/STOTRAS.md). Its list is a fair
// statement of what a complete stotra collection holds, and the site
// measures itself against it. Thirty-nine requests, three seconds apart;
// its robots.txt allows these pages.

import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { CORPUS, sleep } from "./lib.mjs";

const BASE = "https://stotranidhi.com/kn";
const UA = "Mozilla/5.0 (compatible; TatTvamAsi-research/1.0; +https://tattvamasi.in)";

async function get(url) {
  const res = await fetch(url, { headers: { "User-Agent": UA, "Accept-Language": "kn,en" } });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.text();
}

const decode = (s) =>
  s
    .replace(/<[^>]+>/g, "")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n))
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&#8211;/g, "–")
    .replace(/\s+/g, " ")
    .trim();

function bodyLinks(page) {
  const i = page.indexOf('class="entry-content');
  const j = page.indexOf("</article", i);
  const body = page.slice(i, j);
  const out = [];
  for (const m of body.matchAll(/<a[^>]+href="(https:\/\/stotranidhi\.com\/kn\/[^"]+)"[^>]*>([\s\S]*?)<\/a>/g)) {
    const title = decode(m[2]);
    if (title) out.push({ url: m[1], title });
  }
  return out;
}

mkdirSync(CORPUS, { recursive: true });
const index = await get(`${BASE}/stotras-list-kannada/`);
const links = bodyLinks(index);
const groups = links.filter((l) => l.url.includes("/stotras-list-kannada/") && !l.url.endsWith("/stotras-list-kannada/"));
// Groups the index shows only as a picture, not as a text link.
const EXTRA = [{ url: `${BASE}/stotras-list-kannada/sri-ganesha-stotrani-kannada/`, title: "ಶ್ರೀ ಗಣೇಶ ಸ್ತೋತ್ರಗಳು" }];
for (const e of EXTRA) if (!groups.some((g) => g.url === e.url)) groups.unshift(e);
const catalogue = { fetched: new Date().toISOString().slice(0, 10), groups: [], other: links.filter((l) => !groups.includes(l)) };

for (const g of groups) {
  await sleep(3000);
  const items = bodyLinks(await get(g.url)).filter((l) => !l.url.includes("/stotras-list-kannada/"));
  catalogue.groups.push({ ...g, items });
  console.log(items.length, g.title);
}
writeFileSync(join(CORPUS, "stotranidhi-catalogue.json"), JSON.stringify(catalogue, null, 1));
console.log("total", catalogue.groups.reduce((n, g) => n + g.items.length, 0));
