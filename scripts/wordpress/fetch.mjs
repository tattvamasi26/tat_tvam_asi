// Harvest a WordPress site, read-only.
//
//   node scripts/wordpress/fetch.mjs https://example.com --probe
//   node scripts/wordpress/fetch.mjs https://example.com
//   node scripts/wordpress/fetch.mjs https://example.com --only songs,posts
//   node scripts/wordpress/fetch.mjs https://example.com --auth user:xxxx xxxx xxxx
//
// --probe counts what is there and downloads none of it. Run it first.
// --only takes just the collections named, once the probe has said
// which one holds the songs.
//
// WordPress has shipped the REST API in core since 4.7 (December
// 2016). Nothing needs to be installed on the source site, and nothing
// on it changes: this script issues GET requests and no others. That
// is enforced rather than promised — `get()` is the only way out of
// this file to the network, and it refuses any method but GET.
//
// Output lands in corpus/wordpress/<host>/, which is git-ignored, the
// same arrangement the Rigveda harvest uses: the raw harvest is
// re-fetchable and stays out of the repo; only what the editorial
// layer makes of it is committed.
//
// If the songs are private, or the site has hidden its REST API, pass
// --auth with a WordPress Application Password (Users -> Profile ->
// Application Passwords, core since 5.6, also no plugin). An
// application password can be revoked from that same screen, and is
// not the account's real password.

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const UA = "tat-tvam-asi-import/1.0 (read-only harvest)";

let AUTH = null;

/** The only door to the network in this file, and it opens one way. */
async function get(url) {
  const headers = { "user-agent": UA, accept: "application/json" };
  if (AUTH) headers.authorization = `Basic ${Buffer.from(AUTH).toString("base64")}`;
  const res = await fetch(url, { method: "GET", headers, redirect: "follow" });
  return res;
}

/**
 * How many items a collection holds, without downloading them. One
 * request, one item back, and the count read off the header WordPress
 * sends with every collection response.
 */
async function count(base, route) {
  const url = new URL(`${base}/wp-json/wp/v2/${route}`);
  url.searchParams.set("per_page", "1");
  const res = await get(url);
  if (!res.ok) return null;
  return Number(res.headers.get("x-wp-total") ?? "0");
}

/** Walk a paginated collection to the end. WordPress caps per_page at 100. */
async function collection(base, route, params = {}) {
  const out = [];
  for (let page = 1; ; page++) {
    const url = new URL(`${base}/wp-json/wp/v2/${route}`);
    url.searchParams.set("per_page", "100");
    url.searchParams.set("page", String(page));
    for (const [k, v] of Object.entries(params)) url.searchParams.set(k, v);

    const res = await get(url);
    if (res.status === 400 && page > 1) break; // past the last page
    if (!res.ok) {
      if (page === 1) {
        console.log(`  ${route}: ${res.status} ${res.statusText} — skipped`);
        return out;
      }
      break;
    }
    const batch = await res.json();
    if (!Array.isArray(batch) || batch.length === 0) break;
    out.push(...batch);

    const total = Number(res.headers.get("x-wp-totalpages") ?? "1");
    process.stdout.write(`\r  ${route}: ${out.length} (page ${page}/${total || "?"})   `);
    if (page >= total) break;
  }
  process.stdout.write(`\r  ${route}: ${out.length} items${" ".repeat(24)}\n`);
  return out;
}

async function main() {
  const args = process.argv.slice(2);
  const site = args.find((a) => a.startsWith("http"));
  if (!site) {
    console.error("usage: node scripts/wordpress/fetch.mjs https://example.com [--auth user:app-password]");
    process.exit(1);
  }
  const i = args.indexOf("--auth");
  if (i !== -1) AUTH = args.slice(i + 1).join(" ").trim();

  const base = site.replace(/\/+$/, "");
  const host = new URL(base).host.replace(/[^a-z0-9.-]/gi, "_");
  const out = path.join(process.cwd(), "corpus", "wordpress", host);
  await mkdir(out, { recursive: true });

  // 1. The discovery document says what the site is and what it serves.
  const rootRes = await get(`${base}/wp-json/`);
  if (!rootRes.ok) {
    console.error(`\n${base}/wp-json/ answered ${rootRes.status} ${rootRes.statusText}.`);
    console.error("The REST API may be disabled, or behind a login. Try --auth with an");
    console.error("Application Password, or check the site is reachable from here.");
    process.exit(1);
  }
  const root = await rootRes.json();
  console.log(`\n${root.name ?? host}`);
  if (root.description) console.log(root.description);
  console.log("");

  // 2. Every post type the site declares, not just "post" — songs are
  //    very often a custom type (song, lyrics, kirtan, bhajan).
  //
  //    WordPress declares its own machinery through the same endpoint:
  //    block templates, navigation menus, global styles, webfonts, and
  //    whatever the installed plugins register. None of that is
  //    content, so it is filtered out rather than harvested and then
  //    sifted. Anything genuinely a post type survives the filter.
  const typesRes = await get(`${base}/wp-json/wp/v2/types`);
  const types = typesRes.ok ? await typesRes.json() : {};

  const MACHINERY = /^(wp_|jp_|jetpack|nav_menu|attachment$|feedback$|activity_log)/;
  const routes = new Set(["posts", "pages"]);
  const skipped = [];
  for (const [slug, t] of Object.entries(types)) {
    const r = t?.rest_base;
    if (!r || t.rest_namespace !== "wp/v2") continue;
    // A rest_base holding a regex is a sub-route, not a collection.
    if (r.includes("(?P<") || MACHINERY.test(slug)) {
      skipped.push(slug);
      continue;
    }
    routes.add(r);
  }
  console.log(`content types: ${[...routes].join(", ")}`);
  if (skipped.length) console.log(`skipped as machinery: ${skipped.join(", ")}`);
  console.log("");

  // 3. --probe stops here: it says what is there and takes none of it.
  if (args.includes("--probe")) {
    for (const route of new Set([...routes, "categories", "tags", "media"])) {
      const n = await count(base, route);
      console.log(`  ${route.padEnd(16)} ${n === null ? "not readable" : n}`);
    }
    console.log("\nNothing was downloaded. Drop --probe to harvest.");
    return;
  }

  const j = args.indexOf("--only");
  const only = j === -1 ? null : new Set(args[j + 1].split(",").map((x) => x.trim()));

  const harvest = { site: root, types, collections: {} };
  for (const route of routes) {
    if (only && !only.has(route)) continue;
    // _embed pulls the featured image, author and terms into each item,
    // so the whole song arrives in one request rather than four.
    harvest.collections[route] = await collection(base, route, { _embed: "1" });
  }
  for (const route of ["categories", "tags"]) {
    if (only && !only.has(route)) continue;
    harvest.collections[route] = await collection(base, route);
  }

  for (const [name, items] of Object.entries(harvest.collections)) {
    if (items.length) await writeFile(path.join(out, `${name}.json`), JSON.stringify(items, null, 2), "utf8");
  }
  await writeFile(path.join(out, "site.json"), JSON.stringify({ site: root, types }, null, 2), "utf8");

  const total = Object.values(harvest.collections).reduce((n, c) => n + c.length, 0);
  console.log(`\n${total} items written to corpus/wordpress/${host}/`);
  console.log("Nothing was written to the source site: every request above was a GET.");
}

main();
