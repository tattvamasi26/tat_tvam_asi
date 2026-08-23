# Start Here — Tat Tvam Asi

This folder is the current state of the Tat Tvam Asi project, built in a Claude
Code session. Drop it into your own GitHub repo and pick up from here.

## What's in this folder

A Next.js 14 + Supabase (Postgres + Auth) app. Read `README.md` for full setup
steps and `docs/ROADMAP.md` for the complete plan (data model, admin CMS
design, and the phased content build order — Bhagavad Gita first, then
Upanishads, temples, practices, the wider Vedic corpus, stotras).

## Putting this into your own repo

```bash
# Inside a fresh clone of YOUR repo:
cp -r /path/to/this/extracted/folder/* /path/to/your-repo/
cp -r /path/to/this/extracted/folder/.gitignore /path/to/your-repo/
cd /path/to/your-repo
git add .
git commit -m "Import Tat Tvam Asi Phase 0"
git push
```

(`.gitignore` and any other dotfiles won't show up in a plain `cp *`, hence
copying it separately above.)

## What's already built (Phase 0)

- `supabase/schema.sql` — full database schema: every text (Vedas, Upanishads,
  Gita, Brahma Sutras, Stotras) lives in one `texts` → `verses` hierarchy;
  every translation and bhashya entry must cite a `sources` row — this is
  enforced at the database level, not just by convention.
- `src/lib/db.ts` — all the read-query functions the site's pages use.
- `src/lib/supabase.ts` / `src/lib/supabase-browser.ts` — Supabase client setup.
- Every page (`/verses`, `/upanishads`, `/teachers`, `/temples`, `/concepts`,
  `/mathas`, `/search`) reads from Supabase, not hardcoded data.
- `/admin` — a small Supabase Auth-gated panel (single admin account) with a
  working Sources CRUD screen — the first piece of the citation-enforcing
  content workflow.
- Verified: typecheck, lint, and `npm run build` all pass. The build only
  fails past that point because no live Supabase project exists yet — see
  next section.

## What YOU need to do next

1. **Create a Supabase project** and run `supabase/schema.sql` in its SQL
   Editor — see `README.md` Steps 2–4 for the exact walkthrough, including
   creating your admin login and setting `ADMIN_EMAIL`.
2. **Copy `.env.local.example` to `.env.local`** and fill in the values from
   step 1.
3. **`npm install && npm run dev`** — the site should now render real data
   from Supabase instead of erroring.
4. Once that's confirmed working, continue with **Phase 1** in
   `docs/ROADMAP.md`: building out the Bhagavad Gita as the first fully-cited
   content pillar.

## Why this handoff happened as a zip instead of a git push

This was built in a cloud Claude Code session whose GitHub App integration
didn't have write access to the target repo (`tattvamasi26/tat_tvam_asi`) —
reads worked, pushes returned `403`. Rather than keep blocking on that, the
work is handed off here as a plain file drop so you can commit it to
whichever repo you choose, with your own GitHub credentials.
