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
  - An `open` devata has stotras to read. It gets a page, a theme and a picture.
  - A `planned` devata appears on the index with the stotras already summarised for it, marked as not yet entered. Its page 404s.
- Each stotra is a module in `seed/stotras/` that calls `registerStotra()` (in `seed/stotras.ts`). It supplies its verses as `FullVerse[]`, plus `devata`, `order`, `origin`, `composer` and `metre`.
  - Import the module in the stotra block of `data.ts`, or it has no page.
  - Its header (name and summary) is a `STUTIS` row in `seed/corpus.ts`, with `deity` set to the devata. The row's `id` must equal the module's `textId`.
- Verses use three kinds of locator: `invocation`, `1`…`n`, or `phala` for a closing phalaśruti. The reader labels each one.
- Each module names the edition its mūla was checked against, and any place it departs from that edition.
  - stotranidhi.com refuses automated reads, so the texts so far were checked against sa.wikisource.org.
  - Any reading in doubt was checked against a second source.
- Pictures:
  - They live in `public/images/stutis/`, under free licences.
  - Each declares its real pixel size, and a unit test reads the JPEG to check it.
  - A cropped CC BY-SA photograph says "cropped" in its credit.

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
  - `stotra.css` styles the stutis as a dark panel, to the owner's brief:
    - one soft glow from above, and faint embers from `components/stotra/SanctumField`
    - nothing drawn behind the text: no yantra artwork, no blurred copy of the picture
    - each devata changes only the warmth of the light and the gold

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
- the plain background (no artwork or blurred picture behind the text)
- text contrast of at least 4.5:1 on the dark
- the pictures and their credits
- the links from one stotra to the next

## Conventions

- Commit messages use `feat:` or `fix:` followed by a plain-language sentence describing the change or the bug. Example: `fix: running schema.sql twice duplicated every verse`.
