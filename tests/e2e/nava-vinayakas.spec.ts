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

test("Temples leads to Tulunadu, and Tulunadu to the Nava Vinayakas", async ({ page, baseURL }) => {
  await openPage(page, baseURL!, "/temples", "en");
  await expect(page.locator('a[href="/temples/tulunadu"]')).toBeVisible();

  await openPage(page, baseURL!, "/temples/tulunadu", "en");
  await expect(page.locator('a[href="/temples/tulunadu/nava-vinayakas"]')).toBeVisible();
  // The region lists its temples written in depth beside the circuit.
  await expect(page.locator('a[href="/temples/tulunadu/kollur-mookambika"]')).toBeVisible();
});

test("a temple written in depth: facts, sections, pictures and sources", async ({ page, baseURL }) => {
  await openPage(page, baseURL!, "/temples/tulunadu/udupi-krishna-matha", "en");
  await expect(page.locator("h1")).toContainText("Udupi");
  expect(await page.locator(".temple-fact").count()).toBeGreaterThan(3);
  expect(await page.locator(".temple-section").count()).toBeGreaterThan(3);
  await expect(page.locator(".temple-hero img")).toBeVisible();
  const sources = page.locator(".temple-sources a");
  expect(await sources.count()).toBeGreaterThan(0);
  for (const href of await sources.evaluateAll((as) => as.map((a) => a.getAttribute("href")))) {
    expect(href).toMatch(/^https:\/\//);
  }
});

test("a temple's old address still leads to it", async ({ page, baseURL }) => {
  await openPage(page, baseURL!, "/temples/brihadeeswarar-temple", "en");
  expect(new URL(page.url()).pathname).toBe("/temples/tamil-nadu/brihadeeswarar-temple");
});
