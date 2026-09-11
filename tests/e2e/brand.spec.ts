import { test, expect } from "@playwright/test";
import { openPage } from "./support";

/**
 * The logo, as adapted from the design canvas (Tat tvam asi Logo
 * Design.zip): the side-profile bloom, the lockup, the reversed mark on
 * dark, and the icons generated from the same geometry.
 */
const BLOOM_RATIO = 160 / 106;
const IVORY = "rgb(241, 233, 216)";
const BRASS = "rgb(201, 149, 74)";

test.describe("the logo", () => {
  test("masthead: the seven-petal bloom, in proportion, with the name in Cormorant", async ({ page, baseURL }) => {
    await openPage(page, baseURL!, "/", "en");
    const home = page.locator(".masthead a[aria-label]").first();
    await expect(home).toHaveAttribute("aria-label", "Tat tvam asi");

    const mark = home.locator("svg.mark");
    await expect(mark).toBeVisible();
    await expect(mark.locator(".mark-ink path")).toHaveCount(5);
    await expect(mark.locator(".mark-accent path")).toHaveCount(2);

    const box = (await mark.boundingBox())!;
    expect(box.width).toBeGreaterThanOrEqual(24);
    expect(Math.abs(box.width / box.height / BLOOM_RATIO - 1)).toBeLessThan(0.02);

    const accent = await mark.locator(".mark-accent").evaluate((g) => getComputedStyle(g).fill);
    expect(accent).toBe(BRASS);

    const face = await home.locator(".lockup-text").evaluate((el) => getComputedStyle(el).fontFamily);
    expect(face).toMatch(/Cormorant/i);
    await expect(home.locator(".lockup-text")).toHaveText("Tat tvam asi");
  });

  test("footer: the mark reversed — ivory and brass on the dark panel", async ({ page, baseURL }) => {
    await openPage(page, baseURL!, "/about", "en");
    const mark = page.locator(".footer .lockup svg.mark");
    await expect(mark).toBeVisible();
    expect(await mark.evaluate((el) => getComputedStyle(el).color)).toBe(IVORY);
    expect(await mark.locator(".mark-accent").evaluate((g) => getComputedStyle(g).fill)).toBe(BRASS);
    // The decorative rosette is there, but hidden from assistive tech.
    await expect(page.locator(".footer svg.rosette")).toHaveAttribute("aria-hidden", "true");
  });

  for (const [locale, scriptClass, face] of [
    ["kn", "kannada", /Tiro Kannada|Tiro_Kannada/i],
    ["hi", "deva", /Tiro Devanagari|Tiro_Devanagari/i],
  ] as const) {
    test(`the lockup follows the reading language [${locale}]`, async ({ page, baseURL }) => {
      await openPage(page, baseURL!, "/", locale);
      const text = page.locator(".masthead .lockup-text");
      await expect(text).toHaveClass(new RegExp(scriptClass));
      expect(await text.evaluate((el) => getComputedStyle(el).fontFamily)).toMatch(face);
    });
  }

  test("the index overlay opens on the bloom, petals fanning", async ({ page, baseURL }) => {
    await openPage(page, baseURL!, "/", "en");
    // The overlay is portalled in only once React has mounted; clicking
    // before that would be a click on a button with no handler yet.
    await expect(page.locator(".nav-overlay")).toBeAttached();
    await page.locator(".nav-trigger").click();
    const mark = page.locator(".nav-overlay[data-open] svg.mark");
    await expect(mark).toBeVisible();
    await expect(mark).toHaveClass(/mark-bloom/);
  });

  test("icons: tab, legacy and touch icons are served and linked", async ({ page, baseURL, request }) => {
    await openPage(page, baseURL!, "/", "en");
    const links = await page.locator('head link[rel~="icon"], head link[rel="apple-touch-icon"]').evaluateAll((ls) =>
      ls.map((l) => (l as HTMLLinkElement).getAttribute("href") ?? "")
    );
    expect(links.some((h) => h.includes("icon.svg"))).toBe(true);
    expect(links.some((h) => h.includes("favicon.ico"))).toBe(true);
    expect(links.some((h) => h.includes("apple-icon"))).toBe(true);

    const svg = await request.get("/icon.svg");
    expect(svg.ok()).toBe(true);
    expect(svg.headers()["content-type"]).toContain("svg");

    const ico = await request.get("/favicon.ico");
    expect(ico.ok()).toBe(true);
    const bytes = await ico.body();
    expect([...bytes.subarray(0, 4)]).toEqual([0, 0, 1, 0]); // ICONDIR: reserved 0, type 1 (icon)

    const touch = await request.get("/apple-icon.png");
    expect(touch.ok()).toBe(true);
    expect((await touch.body()).subarray(1, 4).toString()).toBe("PNG");
  });
});
