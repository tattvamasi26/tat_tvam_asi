import type { Page } from "@playwright/test";

// ─────────────────────────────────────────────────────────
//  Shared machinery for the rendering tests.
//
//  `inspectPage` runs inside the browser and returns every problem it
//  finds as a readable string, grouped by kind, so a failing test says
//  exactly which element on which page is wrong. `fontAudit` asks
//  Chrome itself which font drew each piece of text.
// ─────────────────────────────────────────────────────────

export const LOCALES = ["en", "kn", "hi"] as const;
export type Locale = (typeof LOCALES)[number];

export const ROUTES = [
  "/",
  "/upanishads",
  "/upanishads/isha",
  "/upanishads/kena",
  "/upanishads/mandukya",
  "/vedas",
  "/gita",
  "/stutis",
  "/stutis/gayatri",
  "/stutis/gayatri/gayatri-mantra",
  "/stutis/ganesha",
  "/stutis/ganesha/ganesha-pancharatnam",
  "/stutis/ganesha/sankatanashana-ganesha-stotram",
  "/bhajans",
  "/acharyas",
  "/acharyas/adi-shankaracharya",
  "/temples",
  "/temples/brihadeeswarar-temple",
  "/temples/tulunadu/kollur-mookambika",
  "/concepts",
  "/concepts/brahman",
  "/mathas",
  "/verses",
  "/verses/v-sarvam-khalvidam",
  "/search?q=brahman",
  "/about",
  "/this-page-does-not-exist",
];

/** Opens a page in a language, with every image loaded and every font settled. */
export async function openPage(page: Page, baseURL: string, route: string, locale: Locale) {
  await page.context().addCookies([{ name: "tta_locale", value: locale, url: baseURL }]);
  await page.goto(route, { waitUntil: "load" });
  await page.evaluate(async () => {
    document.querySelectorAll<HTMLImageElement>('img[loading="lazy"]').forEach((img) => (img.loading = "eager"));
    await Promise.all(
      Array.from(document.images).map((img) =>
        img.complete
          ? null
          : new Promise((done) => {
              img.addEventListener("load", done, { once: true });
              img.addEventListener("error", done, { once: true });
              setTimeout(done, 10_000);
            })
      )
    );
    await document.fonts.ready;
  });
}

export interface PageReport {
  overflow: string[];
  clipped: string[];
  indic: string[];
  collisions: string[];
  images: string[];
  script: string[];
}

/**
 * Everything that makes letters look broken, measured in the page.
 * Self-contained on purpose: Playwright serialises it into the browser.
 */
export function inspectPage({ locale }: { locale: string }): PageReport {
  const INDIC = /[ऀ-ॿ଀-୿஀-௿ಀ-೿]/;
  // Devanagari letters, excluding the dandas and Vedic stress marks that
  // Kannada text legitimately borrows from the Devanagari block.
  const DEVANAGARI_LETTER = /[ऀ-ॐ॓-ॣ०-ॿ]/;
  const KANNADA_LETTER = /[ಀ-೿]/;
  const vw = document.documentElement.clientWidth;

  const report: PageReport = { overflow: [], clipped: [], indic: [], collisions: [], images: [], script: [] };

  const describe = (el: Element): string => {
    const parts: string[] = [];
    let n: Element | null = el;
    for (let i = 0; n && n !== document.body && i < 3; i++, n = n.parentElement) {
      const cls = (n.getAttribute("class") ?? "").trim().split(/\s+/).filter(Boolean).slice(0, 2).join(".");
      parts.unshift(n.tagName.toLowerCase() + (cls ? "." + cls : ""));
    }
    const text = (el.textContent ?? "").trim().replace(/\s+/g, " ").slice(0, 36);
    return `${parts.join(" > ")} “${text}”`;
  };

  const styleOf = (el: Element) => getComputedStyle(el);
  const inHiddenTree = (el: Element) => !!el.closest('[aria-hidden="true"], [hidden], .masthead, .nav-overlay');
  const visible = (el: Element) =>
    (el as HTMLElement).checkVisibility?.({ opacityProperty: true, visibilityProperty: true, checkOpacity: true, checkVisibilityCSS: true } as CheckVisibilityOptions) ?? true;

  // Ancestors that clip (overflow hidden/clip), nearest first.
  const clipCache = new Map<Element, { el: Element; x: boolean; y: boolean }[]>();
  const clippers = (el: Element) => {
    const hit = clipCache.get(el);
    if (hit) return hit;
    const list: { el: Element; x: boolean; y: boolean }[] = [];
    for (let n = el.parentElement; n; n = n.parentElement) {
      const cs = styleOf(n);
      const x = cs.overflowX === "hidden" || cs.overflowX === "clip";
      const y = cs.overflowY === "hidden" || cs.overflowY === "clip";
      if (x || y) list.push({ el: n, x, y });
    }
    // The element itself can clip its own text too.
    const own = styleOf(el);
    if (own.overflowX === "hidden" || own.overflowX === "clip" || own.overflowY === "hidden" || own.overflowY === "clip") {
      list.unshift({ el, x: own.overflowX === "hidden" || own.overflowX === "clip", y: own.overflowY === "hidden" || own.overflowY === "clip" });
    }
    clipCache.set(el, list);
    return list;
  };
  // Inside a collapsed container (a closed drawer): hidden on purpose.
  const collapsed = (el: Element) =>
    clippers(el).some(({ el: c }) => {
      const r = c.getBoundingClientRect();
      return r.width < 2 || r.height < 2;
    });
  const truncatesOnPurpose = (el: Element) => {
    for (let n: Element | null = el; n && n !== document.body; n = n.parentElement) {
      const cs = styleOf(n) as CSSStyleDeclaration & { webkitLineClamp?: string };
      if ((cs.webkitLineClamp && cs.webkitLineClamp !== "none") || cs.textOverflow === "ellipsis") return true;
    }
    return false;
  };
  const layered = (el: Element) => {
    for (let n: Element | null = el; n && n !== document.body; n = n.parentElement) {
      const p = styleOf(n).position;
      if (p === "absolute" || p === "fixed") return true;
    }
    return false;
  };

  // Every non-empty text node, with its element.
  const texts: Text[] = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  for (let t = walker.nextNode() as Text | null; t; t = walker.nextNode() as Text | null) {
    const el = t.parentElement;
    if (!el || !t.data.trim() || el.closest("script, style, noscript, template")) continue;
    texts.push(t);
  }
  const range = document.createRange();
  const rectsOf = (t: Text) => {
    range.selectNodeContents(t);
    return Array.from(range.getClientRects()).filter((r) => r.width > 0.5 && r.height > 0.5);
  };

  // ── 1 · The page must not scroll sideways ──────────────────
  const overflowPx = document.documentElement.scrollWidth - vw;
  if (overflowPx > 1) {
    const culprits = Array.from(document.body.querySelectorAll("*"))
      .filter((el) => {
        const r = el.getBoundingClientRect();
        return r.width > 0 && r.right > vw + 1 && !clippers(el).some((c) => c.x && c.el !== document.body);
      })
      .sort((a, b) => b.getBoundingClientRect().right - a.getBoundingClientRect().right)
      .slice(0, 4)
      .map((el) => `${describe(el)} reaches ${Math.round(el.getBoundingClientRect().right)}px`);
    report.overflow.push(`page is ${Math.round(overflowPx)}px wider than the ${vw}px viewport`, ...culprits);
  }

  // ── 2 · No text cut off by the box that holds it ───────────
  for (const t of texts) {
    const el = t.parentElement!;
    if (inHiddenTree(el) || !visible(el) || el.closest(".marquee") || truncatesOnPurpose(el) || collapsed(el)) continue;
    const rects = rectsOf(t);
    for (const { el: c, x, y } of clippers(el)) {
      const cr = c.getBoundingClientRect();
      const out = rects.find(
        (r) => (x && (r.left < cr.left - 1 || r.right > cr.right + 1)) || (y && (r.top < cr.top - 1 || r.bottom > cr.bottom + 1))
      );
      if (out) {
        report.clipped.push(`${describe(el)} is clipped by ${describe(c).split(" “")[0]}`);
        break;
      }
    }
  }

  // ── 3 · Indic text: never letter-spaced, slanted or crushed ─
  const checkedIndic = new Set<Element>();
  for (const t of texts) {
    const el = t.parentElement!;
    if (checkedIndic.has(el) || !INDIC.test(t.data) || !visible(el)) continue;
    checkedIndic.add(el);
    const cs = styleOf(el);
    const fontPx = parseFloat(cs.fontSize);
    const ls = cs.letterSpacing === "normal" ? 0 : parseFloat(cs.letterSpacing);
    if (Math.abs(ls) > 0.5) report.indic.push(`${describe(el)} has letter-spacing ${cs.letterSpacing}`);
    if (cs.fontStyle !== "normal") report.indic.push(`${describe(el)} is ${cs.fontStyle}`);
    const tops = new Set(rectsOf(t).map((r) => Math.round(r.top)));
    if (tops.size > 1 && cs.lineHeight !== "normal" && parseFloat(cs.lineHeight) / fontPx < 1.3) {
      report.indic.push(`${describe(el)} wraps at line-height ${(parseFloat(cs.lineHeight) / fontPx).toFixed(2)}`);
    }
  }

  // ── 4 · No letters on top of other letters ─────────────────
  // Each word's ink box: its layout box, tightened to the glyphs it
  // actually draws (canvas measureText), so tall matras and deep
  // conjuncts count and empty line-height does not.
  const ctx = document.createElement("canvas").getContext("2d")!;
  const inkCache = new Map<string, { asc: number; desc: number; fbAsc: number }>();
  type Box = { x1: number; x2: number; y1: number; y2: number; el: Element; node: Text; line: number };
  const boxes: Box[] = [];
  for (const t of texts) {
    const el = t.parentElement!;
    if (inHiddenTree(el) || !visible(el) || layered(el) || collapsed(el) || el.closest(".marquee")) continue;
    const cs = styleOf(el);
    const font = `${cs.fontStyle} ${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
    ctx.font = font;
    // Only the ink a container actually shows counts: a 3-line clamp's
    // fourth line still has a box, but it is clipped, so each word's ink
    // is cut to its clipping ancestors before it is compared.
    const clipRects = clippers(el).map(({ el: c, x, y }) => ({ box: c.getBoundingClientRect(), x, y }));
    for (const m of t.data.matchAll(/\S+/g)) {
      const key = font + " " + m[0];
      let ink = inkCache.get(key);
      if (!ink) {
        const mt = ctx.measureText(m[0]);
        ink = { asc: mt.actualBoundingBoxAscent, desc: mt.actualBoundingBoxDescent, fbAsc: mt.fontBoundingBoxAscent };
        inkCache.set(key, ink);
      }
      range.setStart(t, m.index!);
      range.setEnd(t, m.index! + m[0].length);
      for (const r of Array.from(range.getClientRects())) {
        if (r.width < 0.5) continue;
        const baseline = r.top + ink.fbAsc;
        let x1 = r.left;
        let x2 = r.right;
        let y1 = baseline - ink.asc;
        let y2 = baseline + ink.desc;
        for (const { box, x, y } of clipRects) {
          if (x) {
            x1 = Math.max(x1, box.left);
            x2 = Math.min(x2, box.right);
          }
          if (y) {
            y1 = Math.max(y1, box.top);
            y2 = Math.min(y2, box.bottom);
          }
        }
        if (x2 - x1 < 1 || y2 - y1 < 1) continue; // nothing of this word is drawn
        boxes.push({ x1, x2, y1, y2, el, node: t, line: Math.round(r.top) });
      }
      if (boxes.length > 20_000) break;
    }
  }
  boxes.sort((a, b) => a.y1 - b.y1);
  const seenPairs = new Set<string>();
  for (let i = 0; i < boxes.length && report.collisions.length < 15; i++) {
    const a = boxes[i];
    for (let j = i + 1; j < boxes.length && boxes[j].y1 < a.y2; j++) {
      const b = boxes[j];
      if (a.node === b.node && a.line === b.line) continue;
      if (a.el.contains(b.el) || b.el.contains(a.el) ? a.line === b.line : false) continue;
      const ox = Math.min(a.x2, b.x2) - Math.max(a.x1, b.x1);
      const oy = Math.min(a.y2, b.y2) - Math.max(a.y1, b.y1);
      if (ox <= 2 || oy <= 2) continue;
      const smaller = Math.min((a.x2 - a.x1) * (a.y2 - a.y1), (b.x2 - b.x1) * (b.y2 - b.y1));
      if (ox * oy < smaller * 0.12) continue;
      const key = describe(a.el) + "|" + describe(b.el);
      if (seenPairs.has(key)) continue;
      seenPairs.add(key);
      report.collisions.push(
        a.el === b.el
          ? `${describe(a.el)}: its own lines overlap by ${Math.round(oy)}px`
          : `${describe(a.el)} overlaps ${describe(b.el)} by ${Math.round(oy)}px`
      );
    }
  }

  // ── 5 · Images and marks keep their proportions ────────────
  for (const img of Array.from(document.images)) {
    const r = img.getBoundingClientRect();
    // Images inside a collapsed container (a lecture thumbnail in a closed
    // explanation drawer) are not on screen and load only when opened.
    if (r.width < 2 || r.height < 2 || !visible(img) || inHiddenTree(img) || collapsed(img)) continue;
    if (!img.naturalWidth) {
      report.images.push(`image did not load: ${img.currentSrc || img.src}`);
      continue;
    }
    const fit = styleOf(img).objectFit;
    if (fit === "fill" || fit === "") {
      const drift = r.width / r.height / (img.naturalWidth / img.naturalHeight) - 1;
      if (Math.abs(drift) > 0.02) report.images.push(`${describe(img)} is stretched ${(drift * 100).toFixed(1)}%`);
    }
  }
  for (const svg of Array.from(document.querySelectorAll<SVGSVGElement>("svg.mark, svg.rosette"))) {
    const r = svg.getBoundingClientRect();
    const vb = svg.viewBox.baseVal;
    if (r.width < 2 || r.height < 2 || !vb || !vb.width) continue;
    const drift = r.width / r.height / (vb.width / vb.height) - 1;
    if (Math.abs(drift) > 0.02) report.images.push(`${svg.getAttribute("class")} is distorted ${(drift * 100).toFixed(1)}%`);
  }

  // ── 6 · Sanskrit is shown in the reader's own script ───────
  const SACRED =
    ".sanskrit, .deva, .kannada, .pillar-glyph, .readcard-glyph, .readcard-mula, .text-row-glyph, .nav-glyph, .pagehead-glyph, .vakya-mula, .votd-mula, .term-mula, .reader-title, .vstage-sanskrit";
  for (const el of Array.from(document.querySelectorAll(SACRED))) {
    if (el.closest(".langchoice, .lang-menu, .lang, .home-badge-icon, [lang]:not(html)") || el.classList.contains("lockup-text") || el.classList.contains("footer-wordmark")) continue;
    const text = el.textContent ?? "";
    if (locale === "kn" && DEVANAGARI_LETTER.test(text)) report.script.push(`${describe(el)} is Devanagari on a Kannada page`);
    if (locale !== "kn" && KANNADA_LETTER.test(text) && !el.closest(".kollur-local")) {
      report.script.push(`${describe(el)} is Kannada script on a ${locale} page`);
    }
  }

  return report;
}

/**
 * Asks Chrome which font actually drew each element's text.
 *
 * `fallback` lists glyphs drawn by a system font — a character none of
 * the site's fonts carry, so every device draws it differently. `faux`
 * lists text the browser had to embolden or slant itself because the
 * face it landed on has no such weight or style.
 */
export async function fontAudit(page: Page): Promise<{ fallback: string[]; faux: string[] }> {
  // Chrome reports the fonts for a node's whole subtree, so a bold heading
  // holding an italic serif span would be blamed for the span's font. Each
  // element therefore records its nearest tagged ancestor, and its own
  // glyphs are its total minus what its tagged children report.
  const tagged = await page.evaluate(() => {
    const out: { desc: string; weight: number; style: string; parent: number }[] = [];
    const seen = new Set<Element>();
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    for (let t = walker.nextNode() as Text | null; t && out.length < 3000; t = walker.nextNode() as Text | null) {
      const el = t.parentElement;
      if (!el || seen.has(el) || !t.data.trim() || el.closest("script, style, noscript, template")) continue;
      const check = (el as HTMLElement).checkVisibility;
      if (check && !check.call(el)) continue;
      seen.add(el);
      el.setAttribute("data-tt", String(out.length));
      const cs = getComputedStyle(el);
      const cls = (el.getAttribute("class") ?? "").trim().split(/\s+/).slice(0, 2).join(".");
      out.push({
        desc: `${el.tagName.toLowerCase()}${cls ? "." + cls : ""} “${t.data.trim().slice(0, 30)}”`,
        weight: parseInt(cs.fontWeight, 10),
        style: cs.fontStyle,
        parent: -1,
      });
    }
    // Renumber in document order (the order CDP's querySelectorAll returns),
    // then record each element's nearest tagged ancestor.
    const ordered = Array.from(document.querySelectorAll("[data-tt]"));
    const result = ordered.map((el, i) => {
      const info = out[Number(el.getAttribute("data-tt"))];
      el.setAttribute("data-tt", String(i));
      return { ...info, parent: -1 };
    });
    ordered.forEach((el, i) => {
      const up = el.parentElement?.closest("[data-tt]");
      result[i].parent = up ? Number(up.getAttribute("data-tt")) : -1;
    });
    return result;
  });

  const client = await page.context().newCDPSession(page);
  await client.send("DOM.enable");
  await client.send("CSS.enable");
  const { root } = await client.send("DOM.getDocument", { depth: 0 });
  const { nodeIds } = await client.send("DOM.querySelectorAll", { nodeId: root.nodeId, selector: "[data-tt]" });

  type Use = { family: string; name: string; custom: boolean; count: number };
  const totals: Map<string, Use>[] = [];
  for (const nodeId of nodeIds) {
    const { fonts } = await client.send("CSS.getPlatformFontsForNode", { nodeId });
    const m = new Map<string, Use>();
    for (const f of fonts) {
      const name = `${f.familyName}${f.postScriptName ? " / " + f.postScriptName : ""}`;
      m.set(name, { family: f.familyName, name, custom: f.isCustomFont, count: f.glyphCount });
    }
    totals.push(m);
  }
  await client.detach();

  const fallback = new Set<string>();
  const faux = new Set<string>();
  const SINGLE_WEIGHT = /Tiro|Instrument|Cormorant/i;
  const NO_ITALIC = /Inter Tight|Noto Sans|Cormorant/i;

  for (let i = 0; i < totals.length; i++) {
    const info = tagged[i];
    if (!info) continue;
    // This element's own glyphs: its subtree total minus its tagged children's.
    const own = new Map<string, Use>();
    totals[i].forEach((u, k) => own.set(k, { ...u }));
    tagged.forEach((child, c) => {
      if (child.parent !== i) return;
      totals[c].forEach((u, k) => {
        const o = own.get(k);
        if (o) o.count -= u.count;
      });
    });
    own.forEach((f) => {
      if (f.count <= 0) return;
      if (!f.custom) fallback.add(`${info.desc} → ${f.family} (${f.count} glyph${f.count === 1 ? "" : "s"})`);
      if (info.weight >= 600 && SINGLE_WEIGHT.test(f.name)) faux.add(`${info.desc} → synthetic bold ${info.weight} in ${f.family}`);
      if (info.style !== "normal" && NO_ITALIC.test(f.name)) faux.add(`${info.desc} → synthetic italic in ${f.family}`);
    });
  }
  return { fallback: Array.from(fallback).slice(0, 25), faux: Array.from(faux).slice(0, 25) };
}
