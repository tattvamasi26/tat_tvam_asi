# तत् त्वम् असि — Tat Tvam Asi

A full-stack content platform for Advaita Vedanta, Upanishads, Hindu temples, and Sanatana Dharma.

**Stack:** Next.js 14 · Supabase (Postgres) · Sanity CMS · Cloudinary · Tailwind CSS · Vercel

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

## Step 3 — Set up Sanity CMS (free) — optional for now

Sanity is used for rich editorial content (articles, long-form essays). You can skip this initially and use only Supabase.

If you want it now:
```bash
npm create sanity@latest -- --project-id YOUR_PROJECT_ID --dataset production
```

Or go to https://sanity.io → New project → get your Project ID.

---

## Step 4 — Set up Cloudinary (free) — optional for now

For image uploads and optimisation. Skip initially; add when you start uploading temple photos.

1. Sign up at https://cloudinary.com
2. Dashboard → copy Cloud Name, API Key, API Secret

---

## Step 5 — Configure environment variables

```bash
cp .env.local.example .env.local
```

Open `.env.local` and fill in your values from the steps above.

**Minimum required to run:**
```
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...
```

Leave Sanity and Cloudinary fields as placeholders for now — the app will still run.

---

## Step 6 — Run locally

```bash
npm run dev
```

Open http://localhost:3000 — your site is live locally.

---

## Step 7 — Deploy to Vercel (free)

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
│   │   ├── supabase.ts         # Supabase client
│   │   ├── sanity.ts           # Sanity client
│   │   ├── db.ts               # All database query functions
│   │   └── utils.ts            # Helper functions
│   └── types/index.ts          # TypeScript types for all content
├── supabase/
│   └── schema.sql              # ← Run this in Supabase SQL Editor
├── .env.local.example          # ← Copy to .env.local and fill in
└── README.md
```

---

## Adding Content

### Verses
In Supabase dashboard → **Table Editor** → `verses` → **Insert row**:
- `sanskrit` — Devanagari text
- `transliteration` — IAST romanisation
- `translation_en` — English meaning
- `source` — e.g. "Mandukya Upanishad"
- `chapter` — e.g. "1.2"
- `category` — one of: `advaita`, `shruti`, `smriti`, `temples`, `dharma`
- `is_mahavakya` — true/false
- `tags` — e.g. `{brahman,consciousness,mandukya}`

### Temples
In `temples` table, add a row. Then add images in `temple_images` with the temple's `id`.

### Teachers
In `teachers` table. `key_works` is a Postgres array: `{"Vivekachudamani","Brahmasutra Bhashya"}`.

---

## Next Steps (when you're ready)

- [ ] Add individual detail pages (`/verses/[id]`, `/temples/[slug]`, etc.)
- [ ] Connect Sanity for long-form articles
- [ ] Set up Cloudinary and upload temple photography
- [ ] Add full-text search (Supabase `to_tsvector` already indexed)
- [ ] Add sitemap.xml for SEO
- [ ] Set up custom domain in Vercel

---

## Cost

| Service    | Free tier                           |
|------------|-------------------------------------|
| Vercel     | Unlimited deploys, 100GB bandwidth  |
| Supabase   | 500MB DB, 1GB storage, 2GB transfer |
| Sanity     | 10GB storage, 3 users               |
| Cloudinary | 25 credits/month (~25,000 images)   |
| **Total**  | **₹0/month**                        |
