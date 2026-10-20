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
