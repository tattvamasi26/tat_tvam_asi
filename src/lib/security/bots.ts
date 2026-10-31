/**
 * Who may read the site, decided by what a client says it is.
 *
 * Two lists, used in two places. `AI_CRAWLERS` is every robots.txt
 * token the AI companies publish for their training and answer
 * crawlers; robots.ts tells each of them no, and the middleware refuses
 * the ones that also put that name in their User-Agent, so a crawler
 * that ignores robots.txt is turned away anyway. `SCRAPER_UA` matches
 * the HTTP libraries and headless browsers that bulk copiers use, which
 * no person reading a page in a browser ever sends.
 *
 * This is a lock on the front door, not a vault. A determined copier
 * can send a browser's User-Agent; the rate limit and the trap link
 * (middleware.ts) are what catch them, and docs/SECURITY.md says what
 * remains to be done at the edge once the site is deployed.
 *
 * Kept free of Node APIs: it runs in the middleware.
 */

/**
 * robots.txt tokens for AI training, AI answer engines and dataset
 * builders. `ua: false` marks a token that is only a robots.txt switch
 * (Google-Extended, Applebot-Extended): those crawl as Googlebot and
 * Applebot, which search needs, so they can be refused only by
 * robots.txt.
 */
export const AI_CRAWLERS: { token: string; ua: boolean }[] = [
  // OpenAI
  { token: "GPTBot", ua: true },
  { token: "ChatGPT-User", ua: true },
  { token: "OAI-SearchBot", ua: true },
  // Anthropic
  { token: "ClaudeBot", ua: true },
  { token: "Claude-User", ua: true },
  { token: "Claude-SearchBot", ua: true },
  { token: "Claude-Web", ua: true },
  { token: "anthropic-ai", ua: true },
  // Google and Apple: robots.txt switches only
  { token: "Google-Extended", ua: false },
  { token: "Applebot-Extended", ua: false },
  { token: "GoogleOther", ua: true },
  { token: "Google-CloudVertexBot", ua: true },
  // Others
  { token: "CCBot", ua: true },
  { token: "PerplexityBot", ua: true },
  { token: "Perplexity-User", ua: true },
  { token: "Bytespider", ua: true },
  { token: "TikTokSpider", ua: true },
  { token: "Amazonbot", ua: true },
  { token: "meta-externalagent", ua: true },
  { token: "meta-externalfetcher", ua: true },
  { token: "FacebookBot", ua: true },
  { token: "cohere-ai", ua: true },
  { token: "cohere-training-data-crawler", ua: true },
  { token: "MistralAI-User", ua: true },
  { token: "DuckAssistBot", ua: true },
  { token: "YouBot", ua: true },
  { token: "Diffbot", ua: true },
  { token: "AI2Bot", ua: true },
  { token: "Ai2Bot-Dolma", ua: true },
  { token: "Timpibot", ua: true },
  { token: "Omgilibot", ua: true },
  { token: "Omgili", ua: true },
  { token: "Webzio-Extended", ua: true },
  { token: "ImagesiftBot", ua: true },
  { token: "img2dataset", ua: true },
  { token: "Kangaroo Bot", ua: true },
  { token: "PanguBot", ua: true },
  { token: "PetalBot", ua: true },
  { token: "iaskspider", ua: true },
  { token: "ICC-Crawler", ua: true },
  { token: "VelenPublicWebCrawler", ua: true },
  { token: "Brightbot", ua: true },
  { token: "Sidetrade indexer bot", ua: true },
  { token: "QualifiedBot", ua: true },
  { token: "Scrapy", ua: true },
  { token: "Crawl4AI", ua: true },
  { token: "FirecrawlAgent", ua: true },
];

/**
 * Bulk-copying tools. A browser never sends any of these. Anchored on
 * word boundaries so that, say, "curl" does not catch an unrelated word.
 */
export const SCRAPER_UA: RegExp[] = [
  /HeadlessChrome/i,
  /PhantomJS/i,
  /\bpuppeteer\b/i,
  /\bplaywright\b/i,
  /\bselenium\b/i,
  /\bwebdriver\b/i,
  /\bpython-requests\b/i,
  /\bpython-urllib\b/i,
  /\baiohttp\b/i,
  /\bhttpx\b/i,
  /\bcurl\//i,
  /\bwget\b/i,
  /\bGo-http-client\b/i,
  /\bnode-fetch\b/i,
  /\baxios\b/i,
  /\bundici\b/i,
  /^node$/i,
  /\bokhttp\b/i,
  /\bJava\//i,
  /\bApache-HttpClient\b/i,
  /\blibwww-perl\b/i,
  /\bHTTrack\b/i,
  /\bWebCopier\b/i,
  /\bWebZIP\b/i,
  /\bTeleport\s?Pro\b/i,
  /\bSiteSucker\b/i,
  /\bOffline Explorer\b/i,
  /\bMJ12bot\b/i,
  /\bDotBot\b/i,
  /\bDataForSeoBot\b/i,
  /\bBLEXBot\b/i,
  /\bmagpie-crawler\b/i,
  /\bheritrix\b/i,
  /\bNutch\b/i,
];

const AI_UA = AI_CRAWLERS.filter((c) => c.ua).map(
  (c) => new RegExp(c.token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"),
);

export type Verdict = "ok" | "ai" | "scraper";

/** What a User-Agent says the client is. An empty one is a script. */
export function classify(userAgent: string | null | undefined): Verdict {
  const ua = (userAgent ?? "").trim();
  if (ua.length === 0) return "scraper";
  if (AI_UA.some((re) => re.test(ua))) return "ai";
  if (SCRAPER_UA.some((re) => re.test(ua))) return "scraper";
  return "ok";
}

/**
 * The trap. Linked invisibly from every page and disallowed in
 * robots.txt, so nothing that obeys robots.txt and nobody using a
 * browser ever requests it. Whatever does is copying the site and is
 * refused for a while afterwards.
 */
export const TRAP_PATH = "/archive-index";
