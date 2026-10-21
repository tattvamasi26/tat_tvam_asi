// Split the Bṛhat Stotra Ratnākara into its stotras.
//
//   reads  corpus/stotras/bsr/pages.json
//   -> corpus/stotras/bsr/stotras.json
//
// Run: node scripts/stotras/segment-bsr.mjs
//
// The book's own index (scan pp. 5–8) is unproofread OCR, so the
// stotras are found in the text itself:
//   - a stotra opens at a heading, ॥ नाम ॥, set on its own line;
//   - it closes at its colophon, "इति … सम्पूर्णम्", which may run over
//     two lines;
//   - a verse ends at its number, ॥ १२ — so verses run on across a page
//     turn without help;
//   - the running head ("२५८ बृहत्स्तोत्ररत्नाकरे -प्रथमभागः") and the
//     section marks (॥ बृहत्स्तोत्ररत्नाकरः ॥) are dropped.
// A heading inside a stotra (ध्यानम्, न्यासः, …प्रारम्भः) starts a new
// stotra only after a colophon has closed the last one.
//
// Nothing is corrected here. What the page says is what is kept; the
// build (build.mjs) decides what may be published.

import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { CORPUS } from "./lib.mjs";

const pages = JSON.parse(readFileSync(join(CORPUS, "bsr", "pages.json"), "utf8"));
const DEVA = "०१२३४५६७८९";
const fromDeva = (s) => Number(s.replace(/[०-९]/g, (d) => String(DEVA.indexOf(d))));

/** Wiki markup off a line: bold, sizes, centring, gaps, comments, footnotes. */
function plain(line) {
  // Formatting templates, innermost first: {{center|{{bold|…}}}} → …
  let s = line;
  for (let i = 0; i < 5; i++) {
    const next = s.replace(
      /\{\{\s*(?:center|c|bold|b|larger|large|x-larger|xx-larger|smaller|small|big|font-size|right|left|float right|float left)\s*\|(?:\s*\d+%\s*\|)?([^{}]*)\}\}/gi,
      "$1",
    );
    if (next === s) break;
    s = next;
  }
  return tidy(s)
    // A heading set with its page number beside it: "॥ विश्वेश्वराष्टकम् ॥ ३६२".
    .replace(/^(॥\s*[^॥०-९]+॥)\s*[०-९]+$/, "$1")
    .replace(/(॥)\s*\.$/, "$1")
    // A colon typed for a visarga ("य: पठेत्", "तप:-").
    .replace(/([ऀ-ॿ]):/g, "$1ः");
}

function tidy(line) {
  return line
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<ref[^>]*>[\s\S]*?<\/ref>|<ref[^>]*\/>/g, "")
    .replace(/'''|''/g, "")
    .replace(/<\/?(big|small|b|i|center|poem|span|div|sup|sub|u|p)[^>]*>/gi, "")
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/\{\{(gap|rule|nop|clear|dhr|-)[^}]*\}\}/gi, "")
    .replace(/\{\{(?:center|c|larger|x-larger|xx-larger|bold|smaller|big|font-size)\|(?:\d+%\|)?([^{}]*)\}\}/gi, "$1")
    .replace(/\{\{|\}\}/g, "")
    .replace(/\|\|/g, "॥")
    .replace(/(^|[^|])\|(?!\|)/g, "$1।")
    .replace(/।।/g, "॥")
    .replace(/[ \t ]+/g, " ")
    .trim();
}

const RUNNING_HEAD = /बृहत्स्तोत्ररत्नाकरे|प्रथमभाग|^[०-९\s]+$/;
const SECTION_MARK = /^॥\s*(बृहत्स्तोत्ररत्नाकरः|श्रीः)\s*॥$/;
const HEADING = /^॥\s*([^॥०-९]+?)\s*॥$/;
const CLOSING_WORD = /(सम्पूर्ण|संपूर्ण|समाप्त|सम्पूर्णा|समाप्ता)/;
const INTERNAL = /^(अथ\s*)?(ध्यान|न्यास|करन्यास|अङ्गन्यास|हृदयादिन्यास|विनियोग|सहस्रनामप्रारम्भ|नामावलि|पीठिका|पूर्वपीठिका|उत्तरपीठिका|फलश्रुति|दिग्बन्ध|प्रार्थना|अङ्गपूजा|आवाहन|कीलक|पञ्चपूजा|मूलमन्त्र)/;
/** What a stotra's own name ends in. */
const NAME = /(स्तोत्र|स्त्रोत्र|स्तव|स्तुति|अष्टक|ष्टक|पञ्चक|षट्क|दशक|भुजङ्ग|लहरी|कवच|नाम|हृदय|माला|मालिका|पूजा|डिण्डिम|रत्न|श्लोकी|दण्डक|लक्षण|द्वैत|वृत्ति|प्रयात|मस्तु)[ःम्ंमा]*$/;
/** How a colophon speaks: "इति श्री…पुराणे …", "इति …विरचितं … सम्पूर्णम्". */
const COLOPHON = /^॥?\s*इति\s*(श्री|पुष्पदन्त|स्कान्द|स्तव|.*(पुराण|विरचित|कृत[ंमाः]|परमहंस|तन्त्र|रामायण|भारत|सम्पूर्ण|संपूर्ण|समाप्त))/;
const VERSE_END = /॥\s*([०-९]+)\s*॥?\s*$/;

const stotras = [];
let cur = null;
let closing = false; // inside a colophon
let verse = [];

function open(title, page, bold) {
  cur = {
    title: title.replace(/^अथ\s*/, "").trim(),
    bold,
    pages: [page.page],
    revids: { [page.page]: page.revid },
    quality: { [page.page]: page.quality },
    verses: [],
    colophon: [],
    loose: [],
  };
  stotras.push(cur);
  closing = false;
  verse = [];
}

function flushVerse(n = null) {
  if (!cur || verse.length === 0) return;
  cur.verses.push({ n, lines: verse });
  verse = [];
}

for (const page of pages) {
  if (page.page < 9) continue; // title leaves and the unproofread index
  const body = page.text.replace(/<noinclude>[\s\S]*?<\/noinclude>/g, "");
  if (cur && !cur.closed && !cur.pages.includes(page.page)) {
    cur.pages.push(page.page);
    cur.revids[page.page] = page.revid;
    cur.quality[page.page] = page.quality;
  }
  for (const raw of body.split("\n")) {
    const line = plain(raw);
    if (!line || RUNNING_HEAD.test(line) || SECTION_MARK.test(line)) continue;
    // A printer's signature mark at the foot of a sheet ("Bruha—9").
    if (/^[A-Za-z]+\s*[-—–]+\s*\d+$/.test(line)) continue;
    // The odd pages' running head is the stotra's own name, often with
    // the page number beside it ("कालभैरवाष्टकम् २५९").
    if (cur && line.replace(/[\s०-९]+$/, "").replace(/\s+/g, "") === cur.title.replace(/\s+/g, "")) continue;
    const isBold = raw.includes("'''");

    // A bold title with no dandas round it ('''गणेशकवचम्''') is a heading too.
    const bareTitle = isBold && !/[।॥]/.test(line) && line.length < 70 && NAME.test(line) ? [line, line] : null;
    const h = HEADING.exec(line) ?? bareTitle;
    if (h && !/^इति/.test(h[1])) {
      const t = h[1].trim();
      if (CLOSING_WORD.test(t)) {
        // "॥ शिवभुजङ्गं सम्पूर्णम् ॥": the end of a colophon, or a close on its own.
        flushVerse();
        if (cur) cur.colophon.push(line);
        closing = false;
        if (cur) cur.closed = true;
        continue;
      }
      const looksLikeName = (isBold || NAME.test(t)) && !INTERNAL.test(t);
      const startsNew = !cur || cur.closed || (looksLikeName && cur.verses.length > 0);
      if (startsNew) {
        flushVerse();
        open(t, page, isBold);
        continue;
      }
      // An internal heading: kept as a line of its own in the text.
      flushVerse();
      cur.verses.push({ n: null, heading: t, lines: [] });
      continue;
    }

    if (!cur) continue;

    // A colophon: "इति …", not ending in a verse number.
    if (COLOPHON.test(line) && !VERSE_END.test(line)) {
      flushVerse();
      cur.colophon.push(line);
      closing = !CLOSING_WORD.test(line) && !/॥\s*$/.test(line);
      if (!closing) cur.closed = true;
      continue;
    }
    if (closing) {
      cur.colophon.push(line);
      if (CLOSING_WORD.test(line) || /॥\s*$/.test(line)) {
        closing = false;
        cur.closed = true;
      }
      continue;
    }
    if (cur.closed) {
      cur.loose.push({ page: page.page, line });
      continue;
    }

    const end = VERSE_END.exec(line);
    if (end) {
      const text = line.replace(VERSE_END, "॥").trim();
      verse.push(text === "॥" ? verse.pop() + " ॥" : text);
      flushVerse(fromDeva(end[1]));
    } else if (/॥\s*$/.test(line)) {
      // A verse the edition does not number ends at its double danda.
      verse.push(line);
      flushVerse(null);
    } else {
      verse.push(line);
    }
  }
}
flushVerse();

writeFileSync(join(CORPUS, "bsr", "stotras.json"), JSON.stringify(stotras, null, 1));
const withVerses = stotras.filter((s) => s.verses.some((v) => v.lines.length));
console.log(`${stotras.length} stotras found, ${withVerses.length} with verses`);
for (const s of stotras) {
  const qs = Object.values(s.quality);
  const q = qs.includes("not-proofread") ? "UNPROOFREAD" : qs.includes("proofread") ? "proofread" : "validated";
  console.log(
    `${String(s.pages[0]).padStart(3)}-${String(s.pages.at(-1)).padEnd(3)} ${String(s.verses.length).padStart(4)}v ${s.closed ? " " : "?"} ${q.padEnd(11)} ${s.title}${s.loose.length ? `  [${s.loose.length} loose]` : ""}`,
  );
}
