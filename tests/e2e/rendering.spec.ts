import { test, expect } from "@playwright/test";
import { ROUTES, LOCALES, openPage, inspectPage, fontAudit } from "./support";

/**
 * Every public page, in every language, at every width (see the
 * projects in playwright.config.ts): the letters must render whole.
 *
 * Two tests per page and language:
 *   · layout — runs at all four widths, because overflow, clipping and
 *     collisions all depend on how much room there is;
 *   · fonts — runs once (desktop), because which font draws a glyph and
 *     whether it had to be faked does not change with the width.
 */
for (const route of ROUTES) {
  for (const locale of LOCALES) {
    test.describe(`${route} [${locale}]`, () => {
      test("layout: nothing overflows, clips, collides or stretches", async ({ page, baseURL }) => {
        await openPage(page, baseURL!, route, locale);
        const r = await page.evaluate(inspectPage, { locale });

        expect.soft(r.overflow, "the page scrolls sideways").toEqual([]);
        expect.soft(r.clipped, "text is cut off by its container").toEqual([]);
        expect.soft(r.indic, "Indic text is letter-spaced, slanted or crushed").toEqual([]);
        expect.soft(r.collisions, "letters overlap other letters").toEqual([]);
        expect.soft(r.images, "images or the logo are stretched").toEqual([]);
      });

      test("fonts: every glyph from the site's fonts, none synthesised", async ({ page, baseURL }, info) => {
        test.skip(info.project.name !== "desktop", "font resolution does not depend on the width");
        await openPage(page, baseURL!, route, locale);

        const audit = await fontAudit(page);
        expect.soft(audit.fallback, "glyphs drawn by a system font").toEqual([]);
        expect.soft(audit.faux, "bold or italic faked by the browser").toEqual([]);

        const r = await page.evaluate(inspectPage, { locale });
        expect.soft(r.script, "Sanskrit not in the reader's script").toEqual([]);
      });
    });
  }
}
