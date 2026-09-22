# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

**Tat Tvam Asi** is a reference site for Sanatana Dharma in three languages (English, Kannada, Hindi). It covers the Upanishads verse by verse, plus the Vedas, the Gita, acharyas, temples, mathas and concepts. It is built with Next.js 14 (App Router) and TypeScript, with Supabase (Postgres + Auth) behind a small `/admin`. The project's defining rule is editorial, and it is enforced in both code and schema: **every translation cites a source, and nothing uncited or partial may present itself as scholarly or complete.**

The parent folder's `../CLAUDE.md` also loads in sessions here, but it describes an unrelated project (Vyuha). Ignore it for this repo.

Docs:
- `README.md`: setup and deploy.
- `docs/DATABASE.md`: the data layer, seed mechanics, and the plan for switching to Postgres. This is the most current doc.
- `docs/UPANISHADS.md`: which texts get entered, in what order, complete or as selections.
- `docs/ROADMAP.md`: the long-range phases.

`START_HERE.md` and ROADMAP's Phase 0 text were written before the move to local seed data (START_HERE says pages read from Supabase; they don't). Where either disagrees with `DATABASE.md`, `DATABASE.md` is right.

## Commands

```bash
npm run dev              # http://localhost:3000 — needs no .env.local and no database
npx tsc --noEmit         # typecheck (add --incremental false if it reports errors in code you didn't touch)
npm run build
npm run test:unit        # node:test via tsx: script conversion, content integrity, UI strings, the logo, the stotras
npm run test:e2e         # Playwright in the installed Chrome: every page × en/kn/hi × four widths
npx playwright test --project=desktop -g "kena"   # one width, pages matching "kena"
npm run seed             # push src/lib/seed/* to Supabase (inserts missing rows, idempotent)
npm run seed -- --reset  # wipe the content tables first, then insert
```

- `npm run lint` doesn't work as-is. No ESLint config has ever been committed, so `next lint` starts its interactive setup instead of linting.
- The seed needs `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` in `.env.local`. Don't remove the `--experimental-websocket` line in `.npmrc`: supabase-js needs a global WebSocket, and Node 20 only has one behind that flag.
- The e2e suite reuses a dev server already on :3000, or starts `npm run dev`. Against the dev server, one width takes about ten minutes; `--project=desktop` is the one that also runs the font audit.
- To check a UI change by eye, load the page in all three languages by appending `?lang=en`, `?lang=kn` or `?lang=hi`.

## Architecture

### The site reads seed files, not the database

Every public page reads from `src/lib/data.ts`, which reads TypeScript arrays in `src/lib/seed/`. Supabase is used only by `/admin` and `npm run seed`.

- Pages are Server Components. Each calls `const { locale, t } = getTranslations()` (from `src/i18n/server.ts`), then a `data.ts` function that takes `locale` and returns a flat `*View` object with the language already resolved (falling back to English). Pages never touch `*_translations` rows directly.
- Seed rows mirror `supabase/schema.sql` column for column; the row types are in `src/lib/seed/types.ts`. Language-neutral facts go on the base row. Anything a person would translate goes in a `*_translations` row keyed by `(parent_id, language)`.
- Local ids are readable strings (`t-isha`). `scripts/seed-supabase.ts` inserts each parent, reads back its uuid, and rewrites child foreign keys before inserting the children.
- Keep the seed files and the schema in lockstep:
  - Every `WorkType` in `types.ts` must be allowed by the `texts.work_type` check constraint.
  - Text slugs inserted by `schema.sql` must match `seed/texts.ts` exactly. A mismatch silently creates a second row per text.
  - Known column mismatches are bridged in the seed script, not in the data. `texts` has `title_*` columns where the seed has `name_*` (the script's `transform` renames them). Base tables still have legacy NOT NULL English columns, which the script fills from the `en` translation row (`english()`).
  - The site reads `seed/corpus.ts` (Vedas, the Gita and its chapters, stutis, bhajans), but the seed script does not push it. Nor does it push the stotra registry (`seed/stotras.ts`); `allStotraRows()` builds its rows for when it does.
- `src/lib/db.ts` is the Supabase read path, but it has fallen out of step with `data.ts`: its functions take no `Locale`. Only `/admin/sources` uses it at runtime. The switch-over plan is in `docs/DATABASE.md` §6:
  1. Give each `db.ts` function the same signature as its `data.ts` counterpart, returning the same View shapes.
  2. Move one page per commit.
  3. Delete `data.ts` last.

### The Upanishad reader is a registry

`/upanishads/[slug]` is a single generic reader page. A text becomes readable by registering itself.

- Each text module (`seed/isha.ts`, `mandukya.ts`, `kena.ts`) is written verse by verse as a `FullVerse[]`:
  - the Devanagari mūla, one pada per line
  - IAST, aligned line for line with the mūla
  - glossed keywords
  - `readings[locale].translation` and `readings[locale].explanation`

  The module ends with `registerText({ slug, textId, verses, videos?, series?, commentary?, completeness?, covers? })`, defined in `seed/upanishads.ts`. The flat Postgres rows are derived from it by `allReadableRows()`.
- **Registration is an import side effect.** A new text module must be imported both in `src/lib/data.ts` (the `import "./seed/…"` block) and in `scripts/seed-supabase.ts`. If it isn't, it sits on disk unregistered: its reader 404s, the `/upanishads` index shows no Read link for it, and the seed skips it.
- `slug` and `textId` must match a row in `seed/texts.ts`. The reader's header (name, summary, Veda, verse count) comes from that row.
- A text entered only in part must set `completeness: "selections"` and a per-locale `covers`. Together they render a banner saying which sections are present and which aren't.
- Lectures: `seed/lectures.ts` maps a verse locator to a YouTube video id. A verse with no entry shows no lecture card. Never point it at a neighbouring talk instead. The Īśa text predates the registry and keeps its own `isha-video.ts` and `isha-commentary.ts`.

Adding an Upanishad needs no page, component or CSS changes. The unit tests (`tests/unit/content.test.ts`) check the new text's IAST alignment and translations.

### Stotras are arranged by devata

The routes are `/stutis`, then `/stutis/[devata]`, then `/stutis/[devata]/[stotra]`. The stutis use the same registry idea as the Upanishads:

- `seed/devatas.ts` lists the devatas in order, Gāyatrī first and then Gaṇeśa.
  - An `open` devata has stotras to read. It gets a page and a picture.
  - A `planned` devata is listed by name under "Coming soon" on the index. It appears only once at least one stotra is summarised for it in `corpus.ts`. Its page 404s.
- Each stotra is a module in `seed/stotras/` that calls `registerStotra()` (in `seed/stotras.ts`). It supplies:
  - its verses: the mūla, aligned IAST, and a translation in every language. Handles, glosses and commentary are optional, because the page doesn't show them.
  - `devata`, `group`, `order`, `origin`, `composer` and `metre`
  - optionally a `video` (a YouTube id with a title and channel) and its own `image`

  Other rules for modules:
  - Import the module in the stotra block of `data.ts`, or it has no page.
  - Its header (name and summary) is a `STUTIS` row in `seed/corpus.ts`, with `deity` set to the devata. The row's `id` must equal the module's `textId`.
  - `group` places it in one section of the devata's page: `daily` (Daily prayers), `vedic` (From the Vedas) or `stotra` (Stotras). `order` runs straight through the sections, so the page and the previous/next links agree.
- A devata's page (`app/stutis/[devata]`):
  - It opens with the feature block.
  - An optional festival band follows (`festival` in `devatas.ts`: Gaṇeśa Chaturthi, pointing to the Atharvaśīrṣa). Its date is given in the lunar calendar, never as a year's date.
  - Then comes one section per group. Sections alternate between paper and `--paper-2`, each with a picture from `groupImages`. With a single group, the page shows one plain "Stotras" list.
- Videos: the owner chose the recitations; each module names the choice.
  - `StotraVideo` shows a still and loads `youtube-nocookie.com` only when pressed.
  - Attach a video only if it recites the exact text entered. Similar titles often mean a different text: one "Ganesha Ashtakam" is really the Ekadantam hymn, and one "Sumukhascha" is the sixteen-name version.
- Verses use three kinds of locator: `invocation`, `1`…`n`, or `phala` for a closing phalaśruti. The reader labels each one.
- A stotra page follows the stotra portals, to the owner's brief (`components/stotra/StotraText`):
  - The whole text sits in one column, each verse numbered, in the reader's script.
  - Transliteration appears only on English pages.
  - The translation stays closed until the reader presses "Show meaning", and the "not yet cited" notice appears with it.
  - Word-by-word glosses and commentary stay in the data but are not shown. Don't add them to the page unless asked.
- Each module names the edition its mūla was checked against, and any place it departs from that edition.
  - stotranidhi.com refuses automated reads, so the texts so far were checked against sa.wikisource.org.
  - Any reading in doubt was checked against a second source.
- Pictures:
  - They live in `public/images/stutis/`.
  - Each devata's own portrait is under a free licence and links to its Commons page.
  - The festival and section pictures in `seed/stuti-images.ts` were supplied by the owner. They are credited "Supplied by the site owner", with no source link, because their original source isn't recorded.
  - Each picture declares its real pixel size, and a unit test reads the JPEG to check it.
  - A picture cropped from its original says "cropped" in its credit.
  - Each one must clearly show the devata. The owner chooses among candidates before one goes in.

### Temples are arranged by region

The routes are `/temples` (the regions), `/temples/[section]` (one region), and `/temples/[section]/[entry]` (a temple, or a circuit). There is one dynamic segment per level, so `[section]` and `[entry]` resolve by data rather than by folder.

- `seed/temple-regions.ts` lists the regions: Tulunadu, Tamil Nadu, the Deccan, Odisha. A region is cultural, not administrative — Tulunadu spans Kasaragod in Kerala and the Karnataka coast.
- A region page shows its circuits first, then its temples.
- A temple written in depth is a module under `seed/temple-pages/` that calls `registerTemplePage()`. Import it in the temple block of `data.ts`, or it has no page.
  - The prose is written per language (`content.en`, `.kn`, `.hi`), each with the whole structure, the way `i18n/kollur.ts` was written. A unit test holds the languages to the same section ids and the same block kinds, so none can drift.
  - Blocks are `para`, `sub` (a titled passage), `list` (label and text) and `rows` (a time, a name, what happens then).
  - Every module names the sources its facts came from, and the page prints them. Say plainly where a tradition is a tradition, and where a legend was written down long after the event.
  - Kollur keeps its prose in `i18n/kollur.ts`; its module shapes that into the monograph. Its old hand-built dark page is gone.
- The shorter entries stay as `TEMPLES` rows in `seed/temples.ts`, each carrying a `region`. They render through `ShortTemple` with the same head and facts bar.
- A circuit (a set of temples visited together) is a row in `seed/temple-collections.ts` pointing at its own data and page; the Nava Vinayakas are the first.
  - That page says plainly that the nine are a pilgrims' circuit, not a scriptural list, and that Idagunji and Gokarna lie north of Tulunadu proper. Keep both points.
- Photographs come from Wikimedia Commons with the licence and author in each credit; a temple with no free photograph shows its own name in its own script instead. Don't substitute a photo of another temple.
- Temples used to live at `/temples/<slug>`. Those addresses still work: `[section]` redirects a slug it recognises to the temple's page inside its region. Keep that redirect when adding regions.

### Citation and accuracy rules

Don't route around these.

- `translations.source_id` is NOT NULL.
- Content without a scholarly citation points at the `site-editorial` source (`copyright_status: legacy_uncited_flagged`) and shows a visible "not yet cited" notice.
- Every reader translation and commentary is currently the site's own editorial writing (`isCited: false`). Never attribute it to Hume or any other translator.
- If something has no source, add a `sources` row that describes what it actually is. Never make the column nullable.
- Enter Sanskrit mūla only if you can verify every syllable. For long texts, enter labelled selections instead of a complete-looking text you can't verify.

### Languages and scripts

- The locale lives in the `tta_locale` cookie, not the URL, so every page renders dynamically and arrives already translated.
  - `src/middleware.ts` turns a `?lang=xx` parameter into that cookie and redirects to the clean URL.
  - The header switcher writes the cookie and calls `router.refresh()`.
- Where strings live:
  - UI chrome strings: `src/i18n/ui.ts` (`UIStrings`, one entry per locale).
  - Site sections: `src/i18n/sections.ts`, a single list that drives the nav, the footer and the home index. Add sections there rather than hard-coding them.
  - The Kollur Mookambika page has its own dictionary, `src/i18n/kollur.ts`.
- Adding a locale takes four changes:
  1. Add it to `LOCALES` in `src/i18n/config.ts`.
  2. Add its column in `ui.ts`.
  3. Add translation rows.
  4. Add it to the separate hard-coded `LOCALES` in `seed/upanishads.ts`.
- Sanskrit is stored only in Devanagari, and **every place that renders Sanskrit shows it in the reader's script**: pass it through `scriptFor(text, locale)` and give it `scriptClass(locale)` (both in `src/lib/script.ts`). The e2e script check fails on Devanagari in a Sanskrit element on a Kannada page.
  - `scriptFor` shifts U+0900–U+096F by +0x380 into Kannada, with explicit exceptions such as ॐ→ಓಂ. U+0970 onwards passes through, because those Kannada slots are unassigned.
  - `.sanskrit` names the Devanagari face, so Kannada-script Sanskrit needs the `.sanskrit.kannada` pairing.
  - Never store Sanskrit in Kannada script in the seed data.
  - Text that is in another language on purpose (a temple's own Kannada name on an English page) carries a `lang` attribute; the script check skips `[lang]` elements.

### Supabase and `/admin`

- `src/lib/supabase.ts` is server-only. It exports three clients:
  - `supabaseServer()`: reads the cookie session; used by the auth gate.
  - `getSupabasePublic()`: anon key, created lazily, and throws only when a query actually runs.
  - `supabaseAdmin()`: service role, which bypasses RLS.

  Client components use `supabase-browser.ts` instead.
- `app/admin/(protected)/layout.tsx` shows a setup notice if Supabase isn't configured. Otherwise it requires `user.email === ADMIN_EMAIL`. There is deliberately no roles system.
- Because the service-role client bypasses RLS, every server action must check the admin itself. The existing actions (`requireAdmin()` in `sources/actions.ts`) re-verify the admin, validate input with zod, and call `revalidatePath`. New actions must do the same. Sources is the only CRUD screen so far.
- `schema.sql` must stay safe to re-run: use `if not exists`, `on conflict`, and drop-then-create for policies.
- The seed's upserts depend on these unique keys:
  - `verses (text_id, locator)`
  - `translations (verse_id, language, source_id)`
  - `(parent_id, language)` on every `*_translations` table
- A new table needs RLS enabled and a public-read policy in the same change.

### UI

- The theme is warm and light: paper background (`--paper`), deep brown ink (`--ink`, `--ink-2`…), marigold for fills (`--marigold`), and `--gold` / `--saffron` as the accents that are safe for text. Sanskrit is set in `--sacred`.
- Styling is hand-written CSS on semantic classes, split by surface:
  - `src/app/globals.css`: tokens, type, buttons and chips, inside Tailwind `@layer`s.
  - `src/styles/{chrome,pages,home,reader,stotra}.css`: unlayered, imported in order from `app/layout.tsx`.
  - `stotra.css` styles the stutis in the site's own design language: the page head and cards on paper, the feature block, and the whole stotra in a single text card.
    - There is no dark panel and no background effect; the owner rejected both.
    - For any UI change, study the existing pages first and design within them. The owner's personal `design-language` skill spells this out.

  Tailwind utilities are barely used; follow the semantic-class approach.
- **Tailwind drops any `@layer` class it can't find written out literally** in `src/app`, `src/components` or `src/pages`. A class name built at runtime (such as the `tone-${i % 7}` colour palette) must live in an unlayered file (the tones are in `styles/pages.css`), or it silently disappears.
- Unlayered rules beat the layered `.deva`/`.kannada` script classes. A component rule that sets `font` or `font-family` on an element that can carry a script class must restate the script face for it; see `.lockup-text.deva` in `chrome.css`.
- The logo (`src/components/brand/Mark.tsx`) comes from the design canvas in `Tat tvam asi Logo Design.zip`:
  - `Mark` is the side-profile lotus: seven petals (five ink, two brass) from 24px up, five in one colour below. Its colour comes from `--mark-ink` / `--mark-accent`; on dark surfaces the ink is `--mark-ivory`.
  - `Rosette` (the eight-petalled ashtadala) is decoration only.
  - `Wordmark` is the lockup: Cormorant Garamond in Latin, Tiro in Kannada and Hindi.
  - `src/app/icon.svg`, `favicon.ico` and `apple-icon.png` were generated from the same geometry.
- Fonts are loaded with `next/font` in `app/layout.tsx`:
  - Inter Tight: interface and headlines.
  - Instrument Serif: the italic `.accent` phrase in headlines, and verse translations.
  - Cormorant Garamond: the wordmark only.
  - Tiro Devanagari Sanskrit and Tiro Kannada: the mūla and IAST.
  - Noto Sans Devanagari, Kannada, Tamil and Oriya: Hindi and Kannada interface text, and temple names in their own script (`.name-local`, never italic).
- **Never type a glyph the fonts don't carry.** That means → ← ↗ ⚠ and emoji; Google's subsets omit them, so each device would draw them in its own system font. Use `<Arrow>` or `<Caution>` from `components/ui`. A unit test rejects typed arrows in UI strings, and the e2e font audit rejects any system-font glyph.
- Kannada and Hindi typography:
  - Headline letter-spacing is a token that is 0 under `html:lang(kn)` and `html:lang(hi)`. Line-heights also relax there: `--lh-display`, `--lh-title`, and `--lh-snug` for one- and two-line headings.
  - A guard in `globals.css` zeroes all letter-spacing and neutralises inline italics on those pages, the hand-authored Kollur page's inline styles included.
  - Put new heading line-heights on these tokens rather than hard-coding 1.1–1.2.
- Headlines that have an italic turn are two UI strings (e.g. `heroHeadline` + `heroAccent`), so each language decides where its own turn falls.
- The old dark-theme token names (`--bg-0`, `--text0`, `--ink-0`…) are kept as aliases for the hand-authored Kollur Mookambika page and the admin screens.
- `"use client"` is limited to interactive pieces: the reader's stage and spine, the language choice, the nav, motion, and the home hero. These import only **types** from `@/lib/data`. A value import would ship the entire seed corpus to the browser.
- Images are either local (`public/images/`) or from hosts allowed in `next.config.js` `remotePatterns` (Wikimedia, i.ytimg.com). Every image URL is stored with an `image_credit`.
- `/teachers` permanently redirects to `/acharyas`.

### Rendering tests

`tests/e2e/rendering.spec.ts` loads every route in `ROUTES` (`tests/e2e/support.ts`) in all three languages at four widths, with reduced motion so scroll reveals don't offset anything. Add new pages to `ROUTES`. A test fails on any of these:
- sideways page overflow
- text cut off by an `overflow: hidden` container
- Indic text that is letter-spaced, italic, or wrapped at a line-height below 1.3
- glyphs overlapping other glyphs (word ink boxes from canvas `measureText`)
- stretched images or logo marks
- Sanskrit not in the reader's script
- any glyph drawn by a system font, found through Chrome DevTools' `CSS.getPlatformFontsForNode` (desktop run only)
- bold or italic the browser had to fake, found the same way (desktop run only)

`brand.spec.ts` pins the logo, the lockup in each language, the reversed footer mark and the icons.

`stutis.spec.ts` covers the stutis:
- the order of the devatas
- that they sit on the site's paper, with no dark panel, canvas or artwork
- the pictures and their credits
- that the meaning stays closed until asked for, and that no word meanings are shown
- that transliteration appears only in English
- the links from one stotra to the next
- Gaṇeśa's festival band and three sections of ten stotras
- that a video loads nothing from YouTube until played
- the 404s for devatas not yet entered

`nava-vinayakas.spec.ts` checks the nine temples' order, the pilgrims'-circuit note, a Commons credit for every photograph, and the link from Temples.

## Conventions

- Commit messages use `feat:` or `fix:` followed by a plain-language sentence describing the change or the bug. Example: `fix: running schema.sql twice duplicated every verse`.
