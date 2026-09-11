import { defineConfig } from "@playwright/test";

/**
 * Rendering tests: every public page, in every language, at four widths.
 *
 * They run in the Chrome already installed on the machine (`channel:
 * "chrome"`), so there is no browser download. Reduced motion is on for
 * every test: the site's scroll-driven reveals start elements offset and
 * transparent, which would put letters in the wrong place for anything
 * that measures them. With reduced motion the page renders at rest.
 *
 *   npm run test:e2e                        all projects
 *   npx playwright test --project=phone     one width
 *   npx playwright test -g "kena"           one page
 */
const PORT = Number(process.env.PORT ?? 3000);

export default defineConfig({
  testDir: "./tests/e2e",
  timeout: 180_000,
  expect: { timeout: 15_000 },
  fullyParallel: true,
  // Two, not more. Against `next dev` every page compiles on first hit and
  // every hero photograph is resized on demand for each width and pixel
  // density; beyond two browsers the server saturates and page loads time
  // out — a test-harness failure, not a site one.
  workers: 2,
  retries: 0,
  reporter: [["list"], ["html", { open: "never", outputFolder: "playwright-report" }]],
  use: {
    baseURL: process.env.BASE_URL ?? `http://localhost:${PORT}`,
    channel: "chrome",
    contextOptions: { reducedMotion: "reduce" },
    trace: "retain-on-failure",
  },
  projects: [
    { name: "phone", use: { viewport: { width: 360, height: 780 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true } },
    { name: "tablet", use: { viewport: { width: 820, height: 1180 } } },
    // Just above the masthead's 1100px breakpoint, where the bar is fullest.
    { name: "laptop", use: { viewport: { width: 1180, height: 800 } } },
    { name: "desktop", use: { viewport: { width: 1536, height: 900 } } },
  ],
  webServer: {
    command: "npm run dev",
    url: `http://localhost:${PORT}`,
    reuseExistingServer: true,
    timeout: 240_000,
  },
});
