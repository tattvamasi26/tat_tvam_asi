import { test, expect, type Page } from "@playwright/test";
import { openPage } from "./support";

/**
 * The stutis, devata by devata: their order, their quiet dark
 * background, legibility on it, the pictures, and the links between
 * stotras. The generic layout, script and font checks for these pages
 * run in rendering.spec.ts like every other route.
 */

// Width does not change any of this; two widths are enough.
test.beforeEach(({}, testInfo) => {
  test.skip(!["desktop", "phone"].includes(testInfo.project.name), "checked at desktop and phone widths");
});

/** Text colour against the panel behind it, for each selector that matches visible text. */
async function contrasts(page: Page, selectors: string[]) {
  return page.evaluate((sels) => {
    type RGBA = { r: number; g: number; b: number; a: number };
    const probe = document.createElement("span");
    document.body.append(probe);
    const rgba = (css: string): RGBA | null => {
      probe.style.color = "";
      probe.style.color = css.trim();
      const m = getComputedStyle(probe).color.match(/rgba?\(([^)]+)\)/);
      if (!m) return null;
      const [r, g, b, a = 1] = m[1].split(/[\s,/]+/).filter(Boolean).map(Number);
      return { r, g, b, a };
    };
    const over = (top: RGBA, under: RGBA): RGBA => ({
      r: top.r * top.a + under.r * (1 - top.a),
      g: top.g * top.a + under.g * (1 - top.a),
      b: top.b * top.a + under.b * (1 - top.a),
      a: 1,
    });
    const lum = ({ r, g, b }: RGBA) => {
      const f = (v: number) => ((v /= 255) <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));
      return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
    };

    const out: { where: string; ratio: number; large: boolean }[] = [];
    for (const sel of sels) {
      for (const el of Array.from(document.querySelectorAll<HTMLElement>(sel))) {
        if (!el.textContent?.trim() || !el.checkVisibility?.()) continue;
        const cs = getComputedStyle(el);
        // The panel's own colour (per theme), then every translucent surface
        // between it and the text, composited in order.
        let ground = rgba(cs.getPropertyValue("--s-base"))!;
        const layers: RGBA[] = [];
        for (let n: HTMLElement | null = el; n && !n.classList.contains("sanctum"); n = n.parentElement) {
          const bg = rgba(getComputedStyle(n).backgroundColor);
          if (bg && bg.a > 0) layers.push(bg);
        }
        for (const l of layers.reverse()) ground = over(l, ground);
        const ink = over(rgba(cs.color)!, ground);
        const [hi, lo] = [lum(ink), lum(ground)].sort((a, b) => b - a);
        const px = parseFloat(cs.fontSize);
        out.push({
          where: `${sel} “${el.textContent.trim().slice(0, 24)}”`,
          ratio: (hi + 0.05) / (lo + 0.05),
          large: px >= 24 || (px >= 18.66 && parseInt(cs.fontWeight, 10) >= 700),
        });
      }
    }
    probe.remove();
    return out;
  }, selectors);
}

test.describe("the stutis", () => {
  test("open on Gāyatrī, then Gaṇeśa, and list the devatas still being entered", async ({ page, baseURL }) => {
    await openPage(page, baseURL!, "/stutis", "en");
    await expect(page.locator(".dawn-card")).toHaveAttribute("href", "/stutis/gayatri/gayatri-mantra");
    const cards = page.locator(".devata-card");
    await expect(cards.nth(0)).toHaveAttribute("href", "/stutis/gayatri");
    await expect(cards.nth(1)).toHaveAttribute("href", "/stutis/ganesha");
    await expect(page.locator(".coming-item")).toHaveCount(3);
  });

  test("the background is one quiet light: nothing drawn behind the text, no blurred picture", async ({ page, baseURL }) => {
    for (const route of ["/stutis", "/stutis/ganesha", "/stutis/ganesha/ganesha-pancharatnam"]) {
      await openPage(page, baseURL!, route, "en");
      // Only the drawn arrow and caution icons may be SVG on these pages.
      expect(await page.locator(".sanctum svg:not(.arrow):not(.caution)").count(), `${route}: artwork behind the text`).toBe(0);
      const blurred = await page.locator(".sanctum img").evaluateAll((imgs) =>
        imgs.filter((img) => {
          for (let n: Element | null = img; n && !n.classList.contains("sanctum"); n = n.parentElement) {
            if (getComputedStyle(n).filter.includes("blur")) return true;
          }
          return false;
        }).length
      );
      expect(blurred, `${route}: a blurred picture wash`).toBe(0);
    }
  });

  for (const [route, locale] of [
    ["/stutis", "en"],
    ["/stutis/ganesha", "kn"],
    ["/stutis/gayatri/gayatri-mantra", "hi"],
    ["/stutis/ganesha/ganesha-pancharatnam", "en"],
  ] as const) {
    test(`text on the dark stays legible [${route} ${locale}]`, async ({ page, baseURL }) => {
      await openPage(page, baseURL!, route, locale);
      // Open one explanation so the commentary is measured too.
      const toggle = page.locator(".vbtn").first();
      if (await toggle.count()) await toggle.click();
      const results = await contrasts(page, [
        ".sanctum-title",
        ".sanctum-lede",
        ".sanctum-kicker",
        ".sanctum-chip",
        ".sanctum-credit",
        ".dawn-summary",
        ".coming-note",
        ".coming-epithet",
        ".devata-epithet",
        ".stotra-card-summary",
        ".stotra-card-iast",
        ".stotra-facts dt",
        ".stotra-facts dd",
        ".vstage-sanskrit",
        ".vstage-iast .translit",
        ".vstage-translation",
        ".vstage-note p",
        ".vterm dd",
      ]);
      expect(results.length).toBeGreaterThan(3);
      const failing = results.filter((r) => r.ratio < (r.large ? 3 : 4.5)).map((r) => `${r.where}: ${r.ratio.toFixed(2)}:1`);
      expect(failing).toEqual([]);
    });
  }

  test("each devata's picture is shown in full, unstretched, with its credit and source", async ({ page, baseURL }) => {
    for (const slug of ["gayatri", "ganesha"]) {
      await openPage(page, baseURL!, `/stutis/${slug}`, "en");
      const img = page.locator(".devata-hero-media img");
      await expect(img).toBeVisible();
      expect(await img.evaluate((el: HTMLImageElement) => el.naturalWidth)).toBeGreaterThan(0);
      expect(await img.evaluate((el) => getComputedStyle(el).objectFit)).toBe("cover");
      await expect(page.locator(".devata-hero-media .sanctum-credit a")).toHaveAttribute("href", /commons\.wikimedia\.org/);
    }
  });

  test("on a Kannada page the mantra is in Kannada script, ॐ as ಓಂ", async ({ page, baseURL }) => {
    await openPage(page, baseURL!, "/stutis/gayatri/gayatri-mantra", "kn");
    await expect(page.locator(".vstage-sanskrit").first()).toContainText("ಓಂ");
    await expect(page.locator(".stotra-title")).toHaveText(/[ಀ-೿]/);
  });

  test("stotras lead on to each other in the order they are said", async ({ page, baseURL }) => {
    await openPage(page, baseURL!, "/stutis/ganesha/ganesha-dhyana-shlokas", "en");
    await expect(page.locator('.pager-link[data-dir="prev"]')).toHaveCount(0);
    await expect(page.locator('.pager-link[data-dir="next"]')).toHaveAttribute("href", "/stutis/ganesha/gananam-tva");

    await openPage(page, baseURL!, "/stutis/ganesha/sankatanashana-ganesha-stotram", "en");
    await expect(page.locator('.pager-link[data-dir="prev"]')).toHaveAttribute("href", "/stutis/ganesha/ganesha-pancharatnam");
    await expect(page.locator('.pager-link[data-dir="next"]')).toHaveCount(0);
  });

  test("a phalaśruti is labelled as one, not numbered as a verse", async ({ page, baseURL }) => {
    await openPage(page, baseURL!, "/stutis/ganesha/ganesha-pancharatnam", "en");
    await expect(page.locator("#ganesha-pancharatnam-phala .vstage-num")).toHaveText("Phalashruti");
    await expect(page.locator(".spine-count")).toContainText("/06");
  });

  test("a devata still being entered has no page, and neither does a stotra under the wrong devata", async ({ page }) => {
    expect((await page.goto("/stutis/shiva"))?.status()).toBe(404);
    expect((await page.goto("/stutis/gayatri/ganesha-pancharatnam"))?.status()).toBe(404);
  });
});
