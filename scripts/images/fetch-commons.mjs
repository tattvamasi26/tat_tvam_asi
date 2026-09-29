// Download a named set of Wikimedia Commons images, licence-checked.
//
//   node scripts/images/fetch-commons.mjs festivals
//
// The site's rule is that every picture names its licence, its author
// and its Commons page. So this never trusts the list below: it asks
// the API what each file actually is, refuses anything that is not
// freely licensed, and writes a manifest from what Commons said rather
// than from what anyone typed. The manifest is what the site reads.
//
// Requests are paced. Commons rate-limits a fast loop and answers with
// an empty result rather than an error, which looks exactly like "no
// such image" — nine festivals appeared to have no photographs at all
// before the delay was added.

import { writeFile, mkdir, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const UA = "tat-tvam-asi/1.0 (devotional reference site; image sourcing)";
const API = "https://commons.wikimedia.org/w/api.php";
const PAUSE = 2500;

const SETS = {
  festivals: {
    out: "public/images/festivals",
    width: 1600,
    picks: {
      ugadi: "Raja Ravi Varma, Vasantika (oleographic print).jpg",
      "rama-navami": "Ramapanchayan, Raja Ravi Varma (Lithograph).jpg",
      "akshaya-tritiya": "Gaja Lakshmi.jpg",
      "guru-purnima": "Dakshinamurti at V&A.jpg",
      "nagara-panchami": "Kaliya's wifes and Krishna. Kangra c.1785-90. Painting of India.JPG",
      varamahalakshmi: "Lakshmi, by Raja Ravi Varma and Ravi Varma Press, 1930s.jpg",
      "krishna-janmashtami":
        "Vishnu revealing his divinity to Vasudeva and Devaki, National Museum, New Delhi.jpg",
      "ganesha-chaturthi": "Thajavur Ganesha.jpg",
      navaratri: "Durga Mahisasuramardini.JPG",
      vijayadashami: "Dasara Navaratri Festival Lights Mysore Palace India.jpg",
      deepavali: "Happy Deepavali - Flickr - kdinuraj.jpg",
      "utthana-dwadashi": "Tulsi Vivaah ceremony.jpg",
      "gita-jayanti": "Krishna Arjuna Gita.jpg",
      "makara-sankranti": "Konark Wheel Sculpture.jpg",
      "maha-shivaratri": "Shiva as the Lord of Dance LACMA edit.jpg",
      holi: "A Holi Festival - Krishna Radha and Gopis.jpg",
    },
  },
  practice: {
    out: "public/images/practice",
    width: 1800,
    picks: {
      // Dawn on the Ganges: the Gayatri is said at first light.
      gayatri: "The dawn at the Ganges.jpg",
      // Rudraksha, which is what a japa mala is strung from.
      "ganapati-japa": "Elaeocarpus ganitrus 02.jpg",
      atharvashirsha: "Brass lamp.jpg",
      breath: "Fog-Shrouded Kaptai Lake.jpg",
      // Arunachala, where the practice of self-enquiry is at home.
      silence: "Tiruvannamalai Hill.jpg",
    },
  },
};

const FREE = /cc0|cc[- ]by|public domain|attribution/i;
const strip = (s) => (s ?? "").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function info(title, width) {
  const url = new URL(API);
  for (const [k, v] of Object.entries({
    format: "json",
    action: "query",
    titles: `File:${title}`,
    prop: "imageinfo",
    iiprop: "url|size|extmetadata",
    iiurlwidth: String(width),
  })) url.searchParams.set(k, v);

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
    // The scaled rendering, never the original: a 5,000px photograph
    // is megabytes and a page never needs one.
    src: ii.thumburl ?? ii.url,
    width: ii.thumbwidth ?? ii.width,
    height: ii.thumbheight ?? ii.height,
  };
}

const setName = process.argv[2];
const set = SETS[setName];
if (!set) {
  console.error(`usage: node scripts/images/fetch-commons.mjs <${Object.keys(SETS).join("|")}>`);
  process.exit(1);
}

await mkdir(set.out, { recursive: true });
// Anything already downloaded stays; only the gaps are fetched.
const manifestPath = path.join(set.out, "commons.json");
const manifest = existsSync(manifestPath)
  ? JSON.parse(await readFile(manifestPath, "utf8"))
  : {};
let failed = 0;

for (const [id, title] of Object.entries(set.picks)) {
  if (manifest[id] && existsSync(path.join(set.out, `${id}.jpg`))) {
    console.log(`${id.padEnd(22)} already have it`);
    continue;
  }
  const meta = await info(title, set.width);
  await sleep(PAUSE);

  if (!meta) {
    // Commons answers a rate-limited query with an empty result, which
    // is indistinguishable from a missing file. Assume the former and
    // back off; a genuinely missing file will still be missing on the
    // next run, when the log says so twice.
    console.log(`${id.padEnd(22)} no answer (missing, or rate limited) — ${title}`);
    failed++;
    await sleep(PAUSE * 4);
    continue;
  }
  if (!FREE.test(meta.licence)) {
    console.log(`${id.padEnd(22)} REFUSED (${meta.licence})`);
    failed++;
    continue;
  }

  const res = await fetch(meta.src, { headers: { "user-agent": UA } });
  if (!res.ok) {
    const why = res.status === 429 ? "rate limited — run again to resume" : `failed ${res.status}`;
    console.log(`${id.padEnd(22)} ${why}`);
    failed++;
    await sleep(PAUSE * 4);
    continue;
  }
  const bytes = Buffer.from(await res.arrayBuffer());
  await writeFile(path.join(set.out, `${id}.jpg`), bytes);

  manifest[id] = {
    src: `/images/${path.basename(set.out)}/${id}.jpg`,
    width: meta.width,
    height: meta.height,
    credit: `${meta.author || "Wikimedia Commons"} · ${meta.licence} · Wikimedia Commons`,
    sourceUrl: meta.descriptionUrl,
  };
  console.log(
    `${id.padEnd(22)} ${String(meta.width).padStart(4)}x${String(meta.height).padEnd(4)} ${meta.licence.padEnd(14)} ${Math.round(bytes.length / 1024)}KB`,
  );
  await sleep(PAUSE);
}

await writeFile(manifestPath, JSON.stringify(manifest, null, 2), "utf8");
console.log(`\n${Object.keys(manifest).length} images written to ${set.out}/ (${failed} failed)`);
