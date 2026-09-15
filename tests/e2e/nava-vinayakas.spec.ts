import { test, expect } from "@playwright/test";
import { openPage } from "./support";

/**
 * The Nava Vinayakas of Tulunadu: nine temples in order, south to north,
 * framed honestly as a pilgrims' circuit, every photograph credited, and
 * reached from the Temples page. Layout, script and font checks for the
 * page run in rendering.spec.ts like every other route.
 */

test.beforeEach(({}, testInfo) => {
  test.skip(!["desktop", "phone"].includes(testInfo.project.name), "checked at desktop and phone widths");
});

test("nine temples, south to north, each photograph credited to its source", async ({ page, baseURL }) => {
  await openPage(page, baseURL!, "/temples/tulunadu/nava-vinayakas", "en");
  const items = page.locator(".nv-item");
  await expect(items).toHaveCount(9);
  await expect(items.first()).toHaveAttribute("id", "madhur");
  await expect(items.last()).toHaveAttribute("id", "gokarna");
  await expect(page.locator(".nv-route-list a")).toHaveCount(9);
  await expect(page.locator(".nv-note")).toContainText("not a list from scripture");

  const photos = await page.locator(".nv-media img").count();
  expect(photos).toBeGreaterThan(0);
  await expect(page.locator(".nv-body .credit a")).toHaveCount(photos);
  for (const href of await page.locator(".nv-body .credit a").evaluateAll((as) => as.map((a) => a.getAttribute("href")))) {
    expect(href).toMatch(/^https:\/\/commons\.wikimedia\.org\//);
  }
});

test("the Temples page leads to the Nava Vinayakas", async ({ page, baseURL }) => {
  await openPage(page, baseURL!, "/temples", "en");
  await expect(page.locator('a[href="/temples/tulunadu/nava-vinayakas"]')).toBeVisible();
});
