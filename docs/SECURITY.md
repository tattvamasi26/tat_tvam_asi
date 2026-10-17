# Security

What protects the site, what each layer can and cannot do, and what has
to be switched on when the site is deployed.

## The limit to be honest about

Anything a browser can show, a person can copy. No public website can be
made copy-proof, and the usual tricks — blocking right-click, disabling
text selection, scrambling the HTML — stop nobody who means it while
making the site worse for every reader and for screen readers. The site
uses none of them.

What *can* be done is to make copying explicit, slow and unlawful:

1. **Say no, in every form machines read.** Compliant AI companies honour
   these, and in the EU the reservation has legal force.
2. **Refuse what ignores it.** Crawlers that name themselves, copying
   tools, clients that walk the trap link, and anything that reads too
   fast.
3. **Put it on the record.** A rights notice that a copier cannot claim
   not to have seen.
4. **At the edge, once deployed:** the host's bot management, which sees
   traffic across millions of sites and catches crawlers that disguise
   themselves as browsers. Nothing inside the application can do that.

## What is in the code

### 1. Opt-out signals

| Signal | Where | Read by |
|---|---|---|
| `robots.txt`: `Disallow: /` for 48 AI tokens | `src/app/robots.ts`, list in `src/lib/security/bots.ts` | OpenAI, Anthropic, Google (Google-Extended), Apple (Applebot-Extended), Common Crawl, Perplexity, Meta, ByteDance, Amazon, Cohere and others |
| `X-Robots-Tag: noai, noimageai` | `next.config.js` headers | Some crawlers and image datasets |
| `tdm-reservation: 1` header and `/.well-known/tdmrep.json` | `next.config.js`, `public/.well-known/` | W3C TDMRep; gives the reservation legal effect under EU Directive 2019/790 Art. 4 |
| `/ai.txt` | `public/ai.txt` | Spawning and dataset builders that read it |
| `/rights` | `src/app/rights/`, `src/i18n/rights.ts` | People, and courts |

Search engines (Googlebot, Bingbot, DuckDuckBot, Applebot) are still let
in: refusing them would hide the site from the people it is for.
Google-Extended and Applebot-Extended are robots.txt switches only, so
Google and Apple are refused AI *training* while still indexing for
search.

### 2. Refusal (`src/middleware.ts`)

- **Named AI crawlers** (`ua: true` in `AI_CRAWLERS`) get `403`, on pages
  and on pictures, so robots.txt is enforced rather than requested.
- **Copying tools and headless browsers** — curl, wget, python-requests,
  httpx, aiohttp, Go, axios, Scrapy, HTTrack, HeadlessChrome, Puppeteer,
  Playwright, Selenium, an empty User-Agent — get `403` on pages.
  Pictures refuse only named AI crawlers, because Next's image optimiser
  reads `/images/` through an internal request with no headers.
- **The trap.** Every page carries an invisible link to `/archive-index`
  (`hidden`, `aria-hidden`, `tabIndex=-1`, `rel=nofollow`, a plain `<a>`
  so the router never prefetches it), and robots.txt forbids it. No
  reader and no well-behaved crawler ever asks for it. A client that
  does is refused everything for an hour.
- **Rate limit.** 120 pages a minute and 1,200 an hour per client
  address; router prefetches and pictures are not counted. A reader
  never comes near it; a crawl of the 1,028 Rigveda hymns does.
  Over the limit: `429` with `Retry-After`.
- Requests with no client address (local `next start`, the tests, the
  optimiser's internal reads) are never counted or banned. Behind a
  proxy, the proxy **must** send `X-Forwarded-For`, or every visitor
  looks like one local client and the limit does nothing.

The tests run as an ordinary Chrome User-Agent (`playwright.config.ts`),
since headless Chrome names itself and would be refused.

**What this does not stop:** a scraper that sends a real browser's
User-Agent, reads slowly, rotates addresses and ignores the hidden link.
That is what step 4 is for.

### 3. Hardening

- **Headers on every response** (`next.config.js`):
  - **CSP.** Scripts and styles come only from the site; pictures from
    the site, Wikimedia and YouTube stills; frames only from
    youtube-nocookie; connections only to the site and Supabase; no
    plugins; `base-uri`/`form-action` 'self'; `frame-ancestors 'none'`.
  - **Other headers:**
    - `X-Frame-Options: DENY` and `X-Content-Type-Options: nosniff`.
    - `Referrer-Policy`.
    - `Permissions-Policy`: no camera, microphone, location or payment.
      Fullscreen and wake-lock stay on for the practice timer.
    - `COOP: same-origin`.
    - **`CORP: same-origin`, so another site cannot hotlink the
      pictures.**
  - **HSTS** (two years, preload) is set by the middleware on any host
    but localhost. Sent to localhost, it would force every other local
    project to https.
  - The `X-Powered-By` header is off.
- **No open data feed.** `/api/search` returned the whole corpus as JSON
  to anyone and nothing on the site used it; it is gone. Search is the
  server-rendered `/search` page.
- **Image optimiser** fetches only from Wikimedia and YouTube (the unused
  Cloudinary and Sanity hosts were removed — each host listed is one a
  stranger can make the server fetch from).
- **Admin**
  - **Noindex.** Every `/admin` page carries `noindex` in its metadata,
    an `X-Robots-Tag` header and `Cache-Control: no-store`.
  - **One error message.** Sign-in shows the same message for every
    failure, so the form never reveals whether an address has an
    account.
  - **Backoff.** After three failures each attempt waits longer, up to
    five minutes. Supabase also rate-limits sign-in on its own side.
  - **Admin re-checked on the server.** Every server action calls
    `requireAdmin()` again and validates its input with zod. The
    service-role key is used only after that check, and only on the
    server (`src/lib/supabase.ts` is `server-only`).
  - **Origin check.** Next rejects a server action whose `Origin` does
    not match the host, which closes off CSRF.
- **Database.** RLS is enabled on all 25 tables; the public role can only
  read. Writes go through the service role behind `requireAdmin()`.
- **Secrets.** `.env.local` is git-ignored and has never been committed
  (history checked 2026-10-14). Only `NEXT_PUBLIC_*` values reach the
  browser — the Supabase URL and anon key, which are public by design
  and safe because of RLS.
- **No injection surface.** There is no `dangerouslySetInnerHTML`
  anywhere, no user-written content rendered, and no input reaching a
  query except the admin's zod-validated forms.

`tests/unit/security.test.ts` pins all of the above. It checks who is let
in and who is not, robots.txt, the rate limit and the trap, every header,
the opt-out files, the rights notice in three languages, and that
`/api/search` stays gone.

## Dependencies

`npm audit` (2026-10-14) reports advisories in **Next.js 14.2.35**.
There is no fixed 14.x or 15.x. The fix is Next 16, which needs React 19
and makes `cookies()` and route `params` asynchronous — every page
changes. Until then:

- Most advisories concern features the site does not use: rewrites,
  WebSocket upgrades, the Pages Router with i18n, `beforeInteractive`
  scripts, CSP nonces, Edge-runtime server actions and custom servers.
- **The ones that apply** are denial-of-service through the image
  optimiser and through Server Components / Server Actions, and
  cache-poisoning. On Vercel the image optimiser and the cache are the
  platform's own, which removes most of that exposure. Self-hosted,
  upgrade first.

Run `npm audit --omit=dev` before every deployment.

## At deployment — do these

The application cannot do the following itself. Each is a setting at the
host:

1. **Turn on the host's AI-bot blocking.**
   - **Vercel:** Firewall → *Bot Protection* on, and the managed *AI
     Bots* ruleset set to *Deny*.
   - **Cloudflare:** Security → Bots → *Block AI Scrapers and Crawlers*
     on, plus *Bot Fight Mode*, and *AI Labyrinth* if the plan has it.

   These catch crawlers that pretend to be browsers, which no
   User-Agent list can.
2. **Turn on bot verification for real browsers** where the plan allows
   it: Vercel **BotID**, or Cloudflare **Super Bot Fight Mode** /
   Turnstile. Then headless browsers pretending to be Chrome are refused
   too.
3. **Add a rate-limit rule at the edge** (Vercel WAF or Cloudflare), for
   example 300 requests a minute per IP. The in-app limiter counts per
   server process; the edge counts across every instance.
4. **Keep `X-Forwarded-For` set** if anything sits in front of
   `next start`.
5. **Set the Supabase auth URL allow-list** to the production domain, and
   keep email sign-ups **disabled**. The admin account is created by
   hand.
6. **Submit the domain to the HSTS preload list** (hstspreload.org) once
   https is live everywhere.
7. **Watch for copies.** A periodic search for a distinctive sentence
   from the site, or Google Alerts on one, finds a copy; the rights
   notice and the TDM reservation are what a takedown notice cites.

## Reporting

There is no public security contact yet. Add one (an address, and a
`/.well-known/security.txt` naming it) before launch.
