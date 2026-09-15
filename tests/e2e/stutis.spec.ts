import { test, expect, type Page } from "@playwright/test";
import { openPage } from "./support";

/**
 * The stutis, devata by devata, in the site's own design language:
 * their order, the plain paper they sit on, the pictures, the text set
 * like a stotra portal's with the meaning closed until asked for, and
 * the links between stotras. The generic layout, script and font checks
 * for these pages run in rendering.spec.ts like every other route.
 */

// Width does not change any of this; two widths are enough.
test.beforeEach(({}, testInfo) => {
  test.skip(!["desktop", "phone"].includes(testInfo.project.name), "checked at desktop and phone widths");
});

/** Relative luminance of the first opaque surface under a point of the page. */
async function groundLuminance(page: Page) {
  return page.evaluate(() => {
    for (const el of document.elementsFromPoint(innerWidth / 2, innerHeight * 0.6)) {
      const m = getComputedStyle(el).backgroundColor.match(/rgba?\(([^)]+)\)/);
      if (!m) continue;
      const [r, g, b, a = 1] = m[1].split(/[\s,/]+/).filter(Boolean).map(Number);
      if (a < 0.5) continue;
      const f = (v: number) => ((v /= 255) <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));
      return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
    }
    return 1;
  });
}

test.describe("the stutis", () => {
  test("open on Gayatri, then Ganesha, with the devatas still to come listed", async ({ page, baseURL }) => {
    await openPage(page, baseURL!, "/stutis", "en");
    const cards = page.locator(".devata-card");
    await expect(cards.nth(0)).toHaveAttribute("href", "/stutis/gayatri");
    await expect(cards.nth(1)).toHaveAttribute("href", "/stutis/ganesha");
    await expect(page.locator(".coming-soon-list li")).toHaveCount(3);
  });

  test("they sit on the site's paper: no dark panel, no animated or drawn background", async ({ page, baseURL }) => {
    for (const route of ["/stutis", "/stutis/ganesha", "/stutis/ganesha/ganesha-pancharatnam"]) {
      await openPage(page, baseURL!, route, "en");
      expect(await page.locator("main canvas").count(), `${route}: an animated background`).toBe(0);
      expect(await page.locator("main svg:not(.arrow):not(.caution)").count(), `${route}: artwork`).toBe(0);
      expect(await groundLuminance(page), `${route}: a dark surface`).toBeGreaterThan(0.6);
    }
  });

  test("each devata's page shows their picture, unstretched, with its credit and source", async ({ page, baseURL }) => {
    for (const slug of ["gayatri", "ganesha"]) {
      await openPage(page, baseURL!, `/stutis/${slug}`, "en");
      const img = page.locator(".devata-feature-media img");
      await expect(img).toBeVisible();
      expect(await img.evaluate((el: HTMLImageElement) => el.naturalWidth)).toBeGreaterThan(0);
      expect(await img.getAttribute("alt")).toBeTruthy();
      await expect(page.locator(".stutis-credit a")).toHaveAttribute("href", /commons\.wikimedia\.org/);
    }
  });

  test("the text comes first; the meaning opens only when asked, and no word meanings are shown", async ({ page, baseURL }) => {
    await openPage(page, baseURL!, "/stutis/ganesha/ganesha-pancharatnam", "en");
    const toggle = page.locator(".stotra-toggle");
    await expect(page.locator(".stotra-verse")).toHaveCount(6);
    await expect(page.locator(".stotra-verse-meaning")).toHaveCount(0);
    await expect(page.locator(".vterm, .vstage-terms")).toHaveCount(0);
    await expect(toggle).toHaveAttribute("aria-pressed", "false");

    await toggle.click();
    await expect(toggle).toHaveAttribute("aria-pressed", "true");
    await expect(page.locator(".stotra-verse-meaning")).toHaveCount(6);
    // The translation is the site's own, and says so whenever it is shown.
    await expect(page.locator(".stotra-text .notice-uncited")).toBeVisible();

    await toggle.click();
    await expect(page.locator(".stotra-verse-meaning")).toHaveCount(0);
  });

  test("transliteration is given to English readers; Kannada readers get Kannada script, ॐ as ಓಂ", async ({ page, baseURL }) => {
    await openPage(page, baseURL!, "/stutis/gayatri/gayatri-mantra", "en");
    expect(await page.locator(".stotra-verse-iast").count()).toBeGreaterThan(0);

    await openPage(page, baseURL!, "/stutis/gayatri/gayatri-mantra", "kn");
    await expect(page.locator(".stotra-verse-iast")).toHaveCount(0);
    await expect(page.locator(".stotra-verse-mula").first()).toContainText("ಓಂ");
    await expect(page.locator(".stotra-title")).toHaveText(/[ಀ-೿]/);
  });

  test("verses are numbered; an invocation and a phalashruti are labelled instead", async ({ page, baseURL }) => {
    await openPage(page, baseURL!, "/stutis/ganesha/ganesha-pancharatnam", "en");
    await expect(page.locator("#ganesha-pancharatnam-1 .stotra-verse-num")).toHaveText("1");
    await expect(page.locator("#ganesha-pancharatnam-phala .stotra-verse-label")).toHaveText("Phalashruti");

    await openPage(page, baseURL!, "/stutis/gayatri/gayatri-mantra", "en");
    await expect(page.locator("#gayatri-vyahriti .stotra-verse-label")).toHaveText("Invocation");
  });

  test("stotras lead on to each other in the order they are said", async ({ page, baseURL }) => {
    await openPage(page, baseURL!, "/stutis/ganesha/ganesha-dhyana-shlokas", "en");
    await expect(page.locator('.pager-link[data-dir="prev"]')).toHaveCount(0);
    await expect(page.locator('.pager-link[data-dir="next"]')).toHaveAttribute("href", "/stutis/ganesha/ganesha-dvadasha-nama");

    await openPage(page, baseURL!, "/stutis/ganesha/sankatanashana-ganesha-stotram", "en");
    await expect(page.locator('.pager-link[data-dir="prev"]')).toHaveAttribute("href", "/stutis/ganesha/ganesha-pancharatnam");
    await expect(page.locator('.pager-link[data-dir="next"]')).toHaveAttribute("href", "/stutis/ganesha/ganesha-bhujangam");

    await openPage(page, baseURL!, "/stutis/ganesha/ganeshashtakam", "en");
    await expect(page.locator('.pager-link[data-dir="next"]')).toHaveCount(0);
  });

  test("Ganesha's page: the festival band, then ten stotras in three sections, each with a picture", async ({ page, baseURL }) => {
    await openPage(page, baseURL!, "/stutis/ganesha", "en");
    await expect(page.locator(".festival-title")).toHaveText("Ganesha Chaturthi");
    await expect(page.locator(".festival .btn")).toHaveAttribute("href", "/stutis/ganesha/ganapati-atharvashirsha");
    await expect(page.locator(".stotra-group h2")).toHaveText(["Daily prayers", "From the Vedas", "Stotras"]);
    await expect(page.locator(".stotra-group-media img")).toHaveCount(3);
    await expect(page.locator(".stotra-row")).toHaveCount(10);
    await expect(page.locator(".stotra-row-num").last()).toHaveText("10");
    await expect(page.locator(".chip-video")).toHaveCount(10);
  });

  test("a stotra's recitation loads nothing from YouTube until it is played", async ({ page, baseURL }) => {
    await openPage(page, baseURL!, "/stutis/ganesha/ganapati-atharvashirsha", "en");
    await expect(page.locator(".stotra-video iframe")).toHaveCount(0);
    await expect(page.locator(".stotra-video-title")).toContainText("Atharvashirsha");
    await page.locator(".stotra-video-poster").click();
    await expect(page.locator(".stotra-video iframe")).toHaveAttribute("src", /youtube-nocookie\.com\/embed\/7nIZcKM-BiM/);
  });

  test("a devata still to come has no page, and neither does a stotra under the wrong devata", async ({ page }) => {
    expect((await page.goto("/stutis/shiva"))?.status()).toBe(404);
    expect((await page.goto("/stutis/gayatri/ganesha-pancharatnam"))?.status()).toBe(404);
  });
});
