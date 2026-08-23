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
