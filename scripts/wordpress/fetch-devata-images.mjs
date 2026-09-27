// Devata pictures for the bhajan section, from Wikimedia Commons.
//
//   node scripts/wordpress/fetch-devata-images.mjs
//
// Every picture here is freely licensed and carries its author and its
// Commons page, which is what this site requires of a picture. The
// files chosen lean towards Karnataka where the tradition is
// Karnataka's — Halebidu's Ganesha, Kaidala's Krishna, Pandharpur's
// Vitthala — because these are Kannada songs.
//
// The script asks the API for each file's real licence, author and
// size rather than trusting this list, and refuses anything that comes
// back non-free. It writes a manifest next to the images so the site's
// credits are generated from what Commons actually says.

import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const UA = "tat-tvam-asi/1.0 (devotional reference site; image sourcing)";
const API = "https://commons.wikimedia.org/w/api.php";
const OUT = "public/images/bhajans";

/** devata id -> the Commons file that illustrates it. */
const PICKS = {
  ganesha: "Ganesha idol at Halebidu.JPG",
  krishna: "Krishna as Envoy, by Raja Ravi Varma.jpg",
  vitthala: "Vithoba Vitthala Panduranga IMG 20230629 081153 (9) 01.jpg",
  vishnu: "Vishnu - Jagdish Temple, Udaipur - 20191208 1425 7602.jpg",
  anjaneya: "Wall Sculpture of Hanuman Swami at Madurai Temple.JPG",
  shiva: "Siva-parvati-by-raja-ravi-varma.jpg",
  raghavendra: "Raghavendra swamy statue in SRKPuram 01.jpg",
  saraswati: "Saraswati by Raja Ravi Varma.jpg",
  rama: "Ravi Varma-Rama-breaking-bow.jpg",
  narasimha: "Narasimha painting.jpg",
};

// Four devatas are illustrated by photographs the site's owner
// supplied instead — Ganesha, Venkateshwara, Devi and Lakshmi. They
// are copied in by scripts/wordpress/copy-owner-images.mjs and
// credited to him, the way the Ganesha stuti pictures already are.

const FREE = /cc0|cc[- ]by|public domain|attribution/i;
const strip = (s) => (s ?? "").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();

async function info(title) {
  const url = new URL(API);
  for (const [k, v] of Object.entries({
    format: "json",
    action: "query",
    titles: `File:${title}`,
    prop: "imageinfo",
    iiprop: "url|size|extmetadata",
    iiurlwidth: "1400",
  })) {
    url.searchParams.set(k, v);
  }
  const res = await fetch(url, { headers: { "user-agent": UA } });
  if (!res.ok) return null;
  const data = await res.json();
  const page = Object.values(data?.query?.pages ?? {})[0];
  const ii = page?.imageinfo?.[0];
  if (!ii) return null;
  const m = ii.extmetadata ?? {};
  return {
    licence: strip(m.LicenseShortName?.value),
    author: strip(m.Artist?.value),
    descriptionUrl: ii.descriptionurl,
    // The 1400px rendering, not the 6000px original: a card never
    // needs more, and the original would be megabytes.
    src: ii.thumburl ?? ii.url,
    width: ii.thumbwidth ?? ii.width,
    height: ii.thumbheight ?? ii.height,
  };
}

await mkdir(OUT, { recursive: true });
const manifest = {};

for (const [id, title] of Object.entries(PICKS)) {
  const meta = await info(title);
  if (!meta) {
    console.log(`${id.padEnd(14)} NOT FOUND  ${title}`);
    continue;
  }
  if (!FREE.test(meta.licence)) {
    console.log(`${id.padEnd(14)} REFUSED (${meta.licence})  ${title}`);
    continue;
  }

  const res = await fetch(meta.src, { headers: { "user-agent": UA } });
  if (!res.ok) {
    console.log(`${id.padEnd(14)} download failed ${res.status}`);
    continue;
  }
  const bytes = Buffer.from(await res.arrayBuffer());
  const file = `${id}.jpg`;
  await writeFile(path.join(OUT, file), bytes);

  manifest[id] = {
    src: `/images/bhajans/${file}`,
    width: meta.width,
    height: meta.height,
    credit: `${meta.author} · ${meta.licence} · Wikimedia Commons`,
    sourceUrl: meta.descriptionUrl,
  };
  console.log(
    `${id.padEnd(14)} ${String(meta.width).padStart(4)}x${String(meta.height).padEnd(4)} ${meta.licence.padEnd(14)} ${Math.round(bytes.length / 1024)}KB`,
  );
}

await writeFile(path.join(OUT, "commons.json"), JSON.stringify(manifest, null, 2), "utf8");
console.log(`\n${Object.keys(manifest).length} pictures + manifest written to ${OUT}/`);
