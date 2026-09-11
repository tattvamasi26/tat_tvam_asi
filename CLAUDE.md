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
npx tsc --noEmit         # typecheck — the main automated check; there is no test suite
npm run build
npm run seed             # push src/lib/seed/* to Supabase (inserts missing rows, idempotent)
npm run seed -- --reset  # wipe the content tables first, then insert
```

- `npm run lint` doesn't work as-is. No ESLint config has ever been committed, so `next lint` starts its interactive setup instead of linting.
- The seed needs `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` in `.env.local`. Don't remove the `--experimental-websocket` line in `.npmrc`: supabase-js needs a global WebSocket, and Node 20 only has one behind that flag.
- To check a UI change, load the page in all three languages by appending `?lang=en`, `?lang=kn` or `?lang=hi`.

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
  - The site reads `seed/corpus.ts` (Vedas, the Gita and its chapters, stutis, bhajans), but the seed script does not push it.
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

Adding an Upanishad needs no page, component or CSS changes.

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
- Sanskrit is stored only in Devanagari.
  - `scriptFor(text, locale)` in `src/lib/script.ts` converts it to Kannada script for `kn`. It shifts code points by +0x380, with explicit exceptions such as ॐ→ಓಂ.
  - `scriptClass(locale)` returns the matching `kannada` or `deva` font class.
  - Never store Sanskrit in Kannada script in the seed data.

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
  - `src/styles/{chrome,pages,home,reader}.css`: unlayered, imported in order from `app/layout.tsx`.

  Tailwind utilities are barely used; follow the semantic-class approach.
- **Tailwind drops any `@layer` class it can't find written out literally** in `src/app`, `src/components` or `src/pages`. A class name built at runtime (such as the `tone-${i % 7}` colour palette) must live in an unlayered file (the tones are in `styles/pages.css`), or it silently disappears.
- Fonts are loaded with `next/font` in `app/layout.tsx`:
  - Inter Tight: interface and headlines.
  - Instrument Serif: the italic `.accent` phrase in headlines, and verse translations.
  - Tiro Devanagari Sanskrit and Tiro Kannada: the mūla and IAST.
  - Noto Sans Devanagari and Noto Sans Kannada: Hindi and Kannada interface text.

  Headline letter-spacing and line-height are tokens that relax under `html:lang(kn)` and `html:lang(hi)`; don't hard-code negative tracking on Indic text.
- Headlines that have an italic turn are two UI strings (e.g. `heroHeadline` + `heroAccent`), so each language decides where its own turn falls.
- The old dark-theme token names (`--bg-0`, `--text0`, `--ink-0`…) are kept as aliases for the hand-authored Kollur Mookambika page and the admin screens.
- `"use client"` is limited to interactive pieces: the reader's stage and spine, the language choice, the nav, motion, and the home hero. These import only **types** from `@/lib/data`. A value import would ship the entire seed corpus to the browser.
- Images are either local (`public/images/`) or from hosts allowed in `next.config.js` `remotePatterns` (Wikimedia, i.ytimg.com). Every image URL is stored with an `image_credit`.
- `/teachers` permanently redirects to `/acharyas`.

## Conventions

- Commit messages use `feat:` or `fix:` followed by a plain-language sentence describing the change or the bug. Example: `fix: running schema.sql twice duplicated every verse`.
