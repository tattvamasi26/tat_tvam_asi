# Tat Tvam Asi — Roadmap to "World's Best Sanatana Dharma Reference"

## Context

`tat_tvam_asi` already has a working Next.js 14 scaffold (Tailwind, App Router) with pages for verses, upanishads, teachers, temples, concepts, mathas and search — but all content is hardcoded, uncited paraphrase in `src/lib/data.ts` (~8 verses, 6 upanishad summaries, 3 teachers, 5 temples). The Supabase schema in `supabase/schema.sql` was written but never run against a live database, so there is no live data to migrate — only a design to replace.

The user's ambition is much larger than what exists today: Vedas, Upanishads, Bhagavad Gita, Brahma Sutras, bhashyas from multiple acharyas/sampradayas (not just Advaita), temples and their history, practices/traditions, and stotras/recitations — built incrementally, forever ("will go even more in future"). This is a solo, cost-sensitive effort. To be credible as a reference site, content must move from engaging-but-uncited paraphrase to **cited, scholarly-grade** translations and commentary, sourced from public-domain or properly licensed works, with attribution tracked per entry.

Decisions already made with the user (not open questions):
- Content pillar order: deferred to this plan — see recommendation below.
- Content rigor: cited, scholarly-grade going forward; legacy uncited content gets flagged, not deleted or silently passed off as scholarship.
- Audio recitations: explicitly out of scope for now — text-first, audio later.
- Tech stack: stay solo/cost-sensitive on Supabase (Postgres) + Vercel; **drop Sanity and Cloudinary from near-term scope**; replace "generic headless CMS" with a **purpose-built structured DB + a lightweight custom admin UI**, because Sanskrit verse/commentary/citation/cross-reference relationships don't map cleanly onto a generic content-block CMS.

## Data Model

One generalized hierarchy — `texts` → `verses` — covers every canonical work (Vedas/Samhitas/Brahmanas/Aranyakas, Upanishads, Gita, Brahma Sutras, Stotras) instead of a bespoke table per text type. This is what makes "many bhashyas per verse, from many acharyas across sampradayas" and "a citation on every translation" tractable.

**Net-new tables:**
- `sources` — citation registry: translator/author, publication year, `copyright_status` (public-domain-pre-1928, CC-licensed, original-site-editorial, legacy-uncited-flagged, etc.), source URL. Central to the legal/credibility requirement.
- `texts` — replaces `upanishads`; one row per canonical work at any level (a Veda, a Samhita, an Upanishad, the Gita, the Brahma Sutras, a Stotra), with `work_type`, self-referencing `parent_id`, and stotra-specific optional metadata (deity, occasion, author teacher) so stotras don't need a forked schema.
- `verses` — extended: `text_id` FK instead of free-text `source`, structured `division_1/2/3` for chapter/verse addressing, `citation_status` flag, and a separate `site_gloss` field so the site's own editorial voice stays clearly labeled and never confused with a cited translation.
- `translations` — `verse_id`, `language`, `translation_text`, `source_id` **NOT NULL**. This FK constraint is the DB-level enforcement of "no uncited translation ships."
- `commentaries` / `commentary_entries` — a bhashya as a work (teacher + base text + sampradaya) plus its per-verse entries, each citation-required like translations. This is what renders Shankara / Ramanuja / Madhva side-by-side on one verse.
- `sampradayas` — promoted from free text to a first-class lookup, since it's now an FK target from `teachers` and `commentaries`.
- `dynasties`, `temple_events` — temple history timeline, citable the same way as scripture.
- `practices` (+ join tables) — festivals, rituals, vratas, samskaras, cross-linked to texts/temples.

**Survive as-is (additive columns only):** `teachers`, `temples`, `concepts`, `mathas`, `tags`, `articles`.
**Restructured:** `upanishads` folds into `texts`; `verses` is the highest-churn table.

`src/types/index.ts` gets matching interfaces (`Text`, revised `Verse`, `Translation`, `Source`, `Commentary`, `CommentaryEntry`, `Sampradaya`, `Dynasty`, `TempleEvent`, `Practice`) alongside the surviving ones.

## Admin / Authoring

No generic CMS — a small `/admin` area in the same Next.js app:
- **Auth:** Supabase Auth, single admin user, authorization check is `session.user.email === ADMIN_EMAIL`. No roles/permissions system (YAGNI for a solo builder).
- **Routing:** `src/app/admin/(protected)/…` with a `layout.tsx` auth gate; mutations via Server Actions colocated with each page (not a separate REST layer), calling `revalidatePath` so public pages update immediately after a save. Service-role Supabase client only ever instantiated server-side.
- **Citation enforcement, twice:** client-side, the save button for a translation/commentary entry is disabled until a source is picked; DB-side, `translations.source_id` and `commentary_entries.source_id` are `NOT NULL` foreign keys — belt and suspenders.
- **CRUD build order** (citation-critical path first): Sources → Texts → Verses → Commentaries/Bhashyas → Teachers/Temples/Dynasties/Events/Mathas → Practices/Sampradayas → Stotras (reuses Texts/Verses screens).
- **Images:** plain URL + credit text field for now (e.g. Wikimedia Commons links); Cloudinary re-enters scope only once temple photography becomes a priority.

## Build Sequence

**Phase 0 — Foundation (plumbing before content).**
Stand up a real Supabase project. Rewrite `supabase/schema.sql` clean (nothing live to migrate) with the full model above. Add `@supabase/supabase-js`, `@supabase/ssr`, `zod`. Seed a one-time port of today's `data.ts` content, with every existing paraphrase landing as a `translations` row pointing at a placeholder source explicitly named *"Site editorial paraphrase — uncited legacy content, pending scholarly citation"* (`copyright_status='legacy_uncited_flagged'`) — so nothing is silently upgraded to "scholarship" without review. Build `src/lib/supabase.ts` + `src/lib/db.ts`, repoint every existing page off `data.ts`, fix the `src/app/upanishads/page.tsx` duplicate-array drift found during exploration. Ship `/admin` auth scaffold + Sources CRUD. Commit the plan itself into the repo (e.g. `docs/ROADMAP.md`) as the first commit of this phase.

**Phase 1 — Data model + admin UI proven on the first pillar: the Bhagavad Gita.**
Why Gita first: exactly 700 verses across 18 fixed chapters — a solo builder can reach 100% cited coverage, unlike the open-ended Vedic Samhitas. Strong pre-1928 public-domain English translations exist (Telang 1882, Arnold 1885, Besant 1905) to prove the citation model on real sources immediately. It's also the one text where Shankara, Ramanuja, and Madhva each wrote a celebrated bhashya on the *same* verses — ideal for proving the multi-sampradaya commentary UI in Phase 3. Highest external search demand of any candidate pillar.

**Phase 2 — Ship the Gita publicly** with real cited verses/translations and new routes (`/gita/[chapter]/[verse]`).

**Phase 3 — Layer bhashyas onto the Gita**, multiple acharyas side-by-side per verse — the feature that most differentiates this site from "yet another Gita site."

**Phase 4 — Complete the 13 Principal Upanishads** (site already has 6 as bare summaries). Reuses all Phase 1 schema/admin work with near-zero new engineering; Hume's *Thirteen Principal Upanishads* (1921) gives one coherent public-domain source for the whole pillar.

**Phase 5 — Temple history depth** (`dynasties`, `temple_events`) layered onto existing temple content.

**Phase 6 — Practices/traditions + Sampradayas** as a browsable pillar cross-linking teachers, temples, texts.

**Phase 7 — Remaining Vedic corpus** (full Samhita/Brahmana/Aranyaka) — pushed deliberately late: highest labor cost, most technical/ritual content, smallest immediate audience per unit effort.

**Phase 8 — Stotras content buildout** — schema already exists from Phase 0/1; this phase is pure content entry.

**Explicitly deferred, not forgotten:** audio recitation hosting/licensing; Cloudinary-based temple photography at scale. Schema reserves room (`texts.audio_url`, `temple_images.cloudinary_id`) without committing engineering effort now.

**Brahma Sutras are deliberately not an early phase**, despite being short (555 sutras): they're unintelligible without a bhashya, so that pillar is really "sutras + bhashya" bundled — better tackled once the bhashya infrastructure is proven in Phase 3.

## Key Files

- `supabase/schema.sql` — full rewrite: `texts`, extended `verses`, `translations`, `sources`, `commentaries`, `commentary_entries`, `sampradayas`, `dynasties`, `temple_events`, `practices`, additive columns on `teachers`/`temples`, RLS (public read all content, admin-only write via service role).
- `src/types/index.ts` — new interfaces alongside surviving ones.
- `src/lib/supabase.ts` *(new)* — browser + server Supabase clients via `@supabase/ssr`.
- `src/lib/db.ts` *(new)* — typed query functions (`getVerseByLocator`, `getTextBySlug`, `getCommentariesForVerse`, `getTranslationsForVerse`, …) replacing `src/lib/data.ts` as the read path for every page.
- `src/lib/data.ts` — retired as production data source once `db.ts` lands; kept briefly only as reference for the legacy-content seed script.
- `src/app/admin/(protected)/layout.tsx`, `src/app/admin/login/page.tsx` — auth scaffold.
- `src/app/admin/{sources,texts,verses,commentaries}/*` — CRUD screens with server actions, in that order.
- `src/app/gita/[chapter]/[verse]/page.tsx`, `src/app/upanishads/[slug]/[locator]/page.tsx` *(new)* — first pillars' detail routes, replacing today's list-only `/upanishads`.
- `src/app/sitemap.ts` — switch from a hardcoded route array to dynamically enumerating `texts`/`verses`/`temples` slugs from `db.ts` once real content volume exists.

## Immediate Next Steps (start of Phase 0)

1. Commit this roadmap into the repo (`docs/ROADMAP.md`) so it's the durable record of the plan, not just this chat.
2. Create a Supabase project, wire up env vars.
3. Rewrite `supabase/schema.sql` per the data model above and run it.
4. Add `@supabase/supabase-js`, `@supabase/ssr`, `zod`; build `src/lib/supabase.ts` and `src/lib/db.ts`.
5. Port existing `data.ts` content into the new schema as citation-flagged legacy content; repoint all existing pages to read from `db.ts`; fix the `upanishads/page.tsx` duplicate-array bug.
6. Scaffold `/admin` auth + Sources CRUD, ready to start Phase 1 (Gita) content entry.

## Verification

- After Phase 0: `npm run dev`, confirm every existing page (`/verses`, `/upanishads`, `/teachers`, `/temples`, `/concepts`, `/mathas`, `/search`) renders identically to today but now reading from Supabase instead of `data.ts`; confirm `/admin/login` gates `/admin` and Sources CRUD round-trips a record.
- After each later phase: the new pillar's public pages render with real cited content, `npm run build` succeeds, and `sitemap.ts` includes the new routes.
