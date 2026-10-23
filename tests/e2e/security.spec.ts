import { test, expect } from "@playwright/test";

// A copied passage keeps its source; a copied word stays a word; and a
// real browser, which sends the headers a disguised script leaves out,
// is let in. The middleware's other refusals are unit-tested in
// tests/unit/security.test.ts.

async function copyFrom(page: import("@playwright/test").Page, selector: string, chars: number) {
  return page.evaluate(
    ({ selector, chars }) => {
      const el = document.querySelector(selector)!;
      const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
      let node = walker.nextNode();
      while (node && (node.textContent ?? "").trim().length < chars) node = walker.nextNode();
      const range = document.createRange();
      range.setStart(node!, 0);
      range.setEnd(node!, chars);
      const sel = document.getSelection()!;
      sel.removeAllRanges();
      sel.addRange(range);
      const data = new DataTransfer();
      el.dispatchEvent(new ClipboardEvent("copy", { clipboardData: data, bubbles: true, cancelable: true }));
      return { plain: data.getData("text/plain"), html: data.getData("text/html"), selected: sel.toString() };
    },
    { selector, chars },
  );
}

test("a copied passage carries the page and the reuse terms", async ({ page }) => {
  await page.goto("/rights?lang=en");
  const out = await copyFrom(page, "main", 60);
  expect(out.plain.startsWith(out.selected)).toBe(true);
  expect(out.plain).toContain("Source: Tat Tvam Asi, http");
  expect(out.plain).toContain("/rights");
  expect(out.html).toContain('href="http');
});

test("the attribution is in the reader's language", async ({ page }) => {
  await page.goto("/rights?lang=kn");
  const out = await copyFrom(page, "main", 60);
  expect(out.plain).toContain("ಮೂಲ: Tat Tvam Asi");
});

test("a short copy is left as it is", async ({ page }) => {
  await page.goto("/rights?lang=en");
  const out = await copyFrom(page, "main", 12);
  // Not intercepted: the page leaves the event to the browser.
  expect(out.plain).toBe("");
});

test.describe("the reading meter", () => {
  // Five pages free, then sign-in, which brings the reader back.
  const pages = [
    "/stutis/ganesha/ganesha-dhyana-shlokas",
    "/stutis/ganesha/ganesha-dvadasha-nama",
    "/stutis/ganesha/ganesha-pancharatnam",
    "/stutis/ganesha/sankatanashana-ganesha-stotram",
    "/stutis/ganesha/ganeshashtakam",
  ];

  test("five reading pages are free; the sixth asks the reader to sign in", async ({ page, context }, testInfo) => {
    test.skip(testInfo.project.name !== "desktop", "checked once");
    await page.goto(pages[0] + "?lang=en");
    const metered = (await context.cookies()).some((c) => c.name === "tta_meter");
    test.skip(!metered, "sign-in is not set up on this server, so the meter is off");

    for (const p of pages.slice(1)) {
      await page.goto(p);
      expect(new URL(page.url()).pathname).toBe(p);
    }
    // Two left after the third page, and the notice says so before the wall.
    await expect(page.locator(".meter-notice")).toBeVisible();

    // An index is never counted.
    await page.goto("/stutis/ganesha");
    expect(new URL(page.url()).pathname).toBe("/stutis/ganesha");
    // A page already read opens again.
    await page.goto(pages[0]);
    expect(new URL(page.url()).pathname).toBe(pages[0]);

    // A new one does not.
    await page.goto("/upanishads/isha");
    const url = new URL(page.url());
    expect(url.pathname).toBe("/signin");
    expect(url.searchParams.get("reason")).toBe("limit");
    expect(url.searchParams.get("next")).toBe("/upanishads/isha");
    await expect(page.locator(".auth-meter-pip[data-on]")).toHaveCount(5);
    await expect(page.locator("a.auth-google")).toHaveAttribute("href", /\/auth\/google\?next=%2Fupanishads%2Fisha/);
  });

  test("a forged meter cookie is ignored, not trusted", async ({ page, context, baseURL }, testInfo) => {
    test.skip(testInfo.project.name !== "desktop", "checked once");
    const host = new URL(baseURL!).hostname;
    await context.addCookies([{ name: "tta_meter", value: "zzzz..forged", domain: host, path: "/" }]);
    await page.goto(pages[0] + "?lang=en");
    expect(new URL(page.url()).pathname).toBe(pages[0]);
  });
});
