# तत् त्वम् असि — Tat Tvam Asi

A full-stack reference platform for Sanatana Dharma: Vedas, Upanishads, the
Bhagavad Gita, Brahma Sutras, bhashyas, temples and their history, practices
and traditions, and stotras — cited to scholarly sources, not paraphrased.
See `docs/ROADMAP.md` for the full plan and content-pillar sequence.

**Stack:** Next.js 14 · Supabase (Postgres + Auth) · Tailwind CSS · Vercel.
Content is authored through a small built-in `/admin` panel (Supabase
Auth-gated, single admin user) rather than a generic headless CMS — see
`docs/ROADMAP.md` for why. Cloudinary may return once temple photography
becomes a priority; it isn't wired up yet.

---

## Prerequisites

Install these once on your machine:

- **Node.js 18+** — https://nodejs.org (download LTS)
- **Git** — https://git-scm.com

Verify:
```bash
node --version   # should show v18.x or higher
npm --version
```

---

## Step 1 — Install dependencies

```bash
cd tat-tvam-asi
npm install
```

---

## Step 2 — Set up Supabase (free)

1. Go to https://supabase.com → **New project**
2. Name it `tat-tvam-asi`, pick a region close to India (e.g. Singapore)
3. Wait for project to initialise (~2 min)
4. Go to **SQL Editor** → **New query**
5. Copy the entire contents of `supabase/schema.sql` and paste it → **Run**
   - This creates all tables, indexes, RLS policies, and seeds initial data
6. Go to **Settings → API**
7. Copy:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role secret** → `SUPABASE_SERVICE_ROLE_KEY`

---

## Step 3 — Create your admin login

`/admin` (content authoring — Sources, and more as later phases land) is
gated to a single admin account, not a full user/roles system.

1. Supabase dashboard → **Authentication → Users → Add user**
2. Set an email + password for yourself
3. Note that same email — you'll set it as `ADMIN_EMAIL` next

---

## Step 4 — Configure environment variables

```bash
cp .env.local.example .env.local
```

Open `.env.local` and fill in:
```
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...
ADMIN_EMAIL=you@example.com
```

---

## Step 5 — Run locally

```bash
npm run dev
```

Open http://localhost:3000 for the site, or http://localhost:3000/admin to sign in and manage content.

**Supabase is not required to run the site.** All content currently lives in
`src/lib/seed/` and is read through `src/lib/data.ts`, so `npm run dev` works on a
clean checkout with no database and no `.env.local`. Supabase is needed only for
`/admin` and for the seeding step below.

---

## Languages

The site reads in **Kannada, English and Hindi**, and switching language changes the
content as well as the interface.

- **How it works.** The chosen locale is stored in a cookie (`tta_locale`) rather than
  the URL, so every page stays a Server Component and arrives already translated.
  `src/i18n/server.ts` reads it; the switcher in the header writes it and calls
  `router.refresh()`.
- **Deep links.** `?lang=kn` (or `en` / `hi`) on any URL sets the language and redirects
  to the clean address — useful for sharing a page in a particular language.
- **UI vs content.** Interface strings live in `src/i18n/ui.ts`. Content lives in the
  seed data as `*_translations` rows keyed by `(parent_id, language)` — the same shape
  the database uses.
- **Adding a language** is a data change, not an engineering one: add the code to
  `LOCALES` in `src/i18n/config.ts`, add its column to `src/i18n/ui.ts`, and add
  translation rows. There are no per-language code paths anywhere in the app.

Devanagari and Kannada each load their own Noto face, and Sanskrit mūla text always
renders in Devanagari regardless of the interface language — it is scripture, not UI.

---

## Content data

`src/lib/seed/*.ts` holds the content as **rows that mirror `supabase/schema.sql`
column-for-column**, so it can be pushed to Postgres without transformation:

| File | Tables |
|---|---|
| `sources.ts` | `sources` — the citation registry |
| `texts.ts` | `texts`, `text_translations` |
| `verses.ts` | `verses`, `translations`, `verse_notes` |
| `teachers.ts` | `teachers`, `teacher_translations` |
| `temples.ts` | `temples`, `temple_translations` |
| `concepts.ts` | `concepts`, `concept_translations` |
| `mathas.ts` | `mathas`, `matha_translations` |

Language-neutral facts (slug, Sanskrit, dates, coordinates, image URL and credit) stay
on the base row. Anything a human would translate lives in a `*_translations` row.

Every translation row carries a `source_id`, and `translations.source_id` is `NOT NULL`
in the schema — an uncited translation cannot be stored. Content inherited from the
pre-database site points at the `site-editorial` source and renders with a visible
"not yet cited" notice rather than being passed off as scholarship.

### Pushing the local data to Supabase

Once Steps 2–4 are done:

```bash
npm install          # first time only, for the tsx runner
npm run seed         # insert missing rows, leave existing ones alone
npm run seed -- --reset   # delete seeded content first, then insert
```

The script reads the same files the site reads, so there is one source of truth. Local
rows use readable ids (`te-shankara`); Postgres uses uuid defaults, so the script inserts
each parent, reads back its uuid, and rewrites child foreign keys before inserting them.

### Images

Photographs are hotlinked from Wikimedia Commons with the author and licence stored
alongside the URL (`image_credit`), and rendered as a credit line under each image.
`next.config.js` allows `upload.wikimedia.org`; add a host there before using it.

---

## Step 6 — Deploy to Vercel (free)

### Option A — CLI (fastest)
```bash
npm install -g vercel
vercel
```
Follow the prompts. When asked about environment variables, paste each one from your `.env.local`.

### Option B — GitHub (recommended for ongoing work)
1. Push this folder to a new GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/tat-tvam-asi.git
   git push -u origin main
   ```
2. Go to https://vercel.com → **New Project** → **Import Git Repository**
3. Select your repo → click **Deploy**
4. Add environment variables in Vercel: **Settings → Environment Variables**
5. Every `git push` auto-deploys from here on

---

## Project Structure

```
tat-tvam-asi/
├── src/
│   ├── app/                    # Next.js pages (App Router)
│   │   ├── page.tsx            # Homepage
│   │   ├── verses/page.tsx     # All verses
│   │   ├── temples/page.tsx    # Temple gallery
│   │   ├── teachers/page.tsx   # Acharyas
│   │   ├── concepts/page.tsx   # Vedantic terms
│   │   ├── search/page.tsx     # Search
│   │   └── api/search/         # Search API endpoint
│   ├── components/
│   │   ├── layout/             # Navbar, Footer
│   │   ├── ui/                 # Reusable UI components
│   │   └── content/            # Page-specific sections
│   ├── lib/
│   │   ├── supabase.ts         # Server-only Supabase clients (session, service-role)
│   │   ├── supabase-browser.ts # Client-safe Supabase client (admin login form)
│   │   ├── db.ts               # All database read-query functions
│   │   └── utils.ts            # Helper functions
│   └── types/index.ts          # TypeScript types for all content
├── supabase/
│   └── schema.sql              # ← Run this in Supabase SQL Editor
├── .env.local.example          # ← Copy to .env.local and fill in
└── README.md
```

---

## Adding Content

Use the `/admin` panel (Sources, for now — more content types land as later
phases are built out; see `docs/ROADMAP.md`) rather than editing tables
directly. Every translation and bhashya entry requires a Source to be picked
before it can be saved — that's the citation policy enforced at both the
form and the database level.

For anything `/admin` doesn't cover yet, the Supabase Table Editor still
works directly against `supabase/schema.sql`'s tables (`texts`, `verses`,
`translations`, `teachers`, `temples`, `concepts`, `mathas`, …) — just keep
the citation rule in mind: any `translations` or `commentary_entries` row
needs a real `source_id`.

---

## Next Steps (when you're ready)

- [ ] Build out the Bhagavad Gita as the first fully-cited pillar (see `docs/ROADMAP.md` Phase 1)
- [ ] Add Texts/Verses/Commentaries admin screens (Sources is the only one so far)
- [ ] Layer bhashyas onto the Gita once the Texts/Verses admin exists (Phase 3)
- [ ] Set up Cloudinary once temple photography becomes a priority
- [ ] Set up custom domain in Vercel

---

## Cost

| Service    | Free tier                           |
|------------|-------------------------------------|
| Vercel     | Unlimited deploys, 100GB bandwidth  |
| Supabase   | 500MB DB, 1GB storage, 2GB transfer |
| **Total**  | **₹0/month**                        |
