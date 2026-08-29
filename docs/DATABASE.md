# Database setup — Tat Tvam Asi

How the data layer is built, why it is built that way, and the exact
steps to stand it up. Read the "Where we are now" section first — it
explains why the site currently runs with **no database at all**, and
why that is deliberate rather than unfinished.

---

## 1. Where we are now

The site reads every page from local TypeScript files in
[`src/lib/seed/`](../src/lib/seed/), through
[`src/lib/data.ts`](../src/lib/data.ts). There is no Supabase project
wired up, no `.env.local` required, and `npm run dev` works on a clean
clone.

That is on purpose. It gives three things:

- **The site always runs.** No student, contributor or reviewer is
  blocked on credentials to see the work.
- **Content is reviewable in a diff.** A verse translation arrives as a
  pull request, not as an untracked row someone typed into a web form
  at 2am.
- **No lock-in on the schema while it is still moving.** Restructuring a
  TypeScript array is free; restructuring a live table with data in it
  is not.

The cost is that content edits require a deploy, and there is no admin
UI for non-technical editors. That cost gets paid down by moving to
Postgres — which is what the rest of this document is about.

**The rule that makes the migration safe:** every file in `src/lib/seed/`
mirrors a table in [`supabase/schema.sql`](../supabase/schema.sql)
column-for-column. The seed data is not a mock — it is the real rows,
sitting in a file instead of a table.

---

## 2. The shape of the data

One generalised hierarchy carries every canonical work:

```
sources ──────────────┐
                      │ (every translation must cite one)
texts ── text_translations
  │
  └── verses ── translations   (source_id NOT NULL)
              └── verse_notes  (the site's own commentary)
```

`texts` holds a Veda, an Upaniṣad, a Gītā chapter and a stotra in the
same table, distinguished by `work_type` and `parent_id`. That is why
adding the Gita or the stotras needs no new tables — only new rows.

### The one constraint that matters

```sql
create table translations (
  verse_id   uuid not null references verses(id) on delete cascade,
  source_id  uuid not null references sources(id),   -- ← this
  ...
);
```

`source_id` is `NOT NULL`. **An uncited translation cannot physically be
stored.** This is the site's editorial policy expressed as a database
constraint rather than as a promise, and it is the single most important
line in the schema. Do not relax it.

Content that has no scholarly citation yet is not exempted — it points
at the `site-editorial` source row, whose `copyright_status` is
`legacy_uncited_flagged`, and it renders on the site with a visible
"not yet cited" notice. Honest labelling, not a loophole.

### Language

Language-neutral facts (slug, Sanskrit, dates, coordinates, image URL)
live on the base row. Anything a human would translate lives in a
`*_translations` row keyed by `(parent_id, language)`. Adding a fourth
language is therefore a data task, not an engineering one.

---

## 3. Standing up Supabase

### Step 1 — create the project

1. <https://supabase.com> → **New project**
2. Name `tat-tvam-asi`, region **Singapore** (closest to India)
3. Set a strong database password and save it in your password manager —
   Supabase will not show it again
4. Wait ~2 minutes for provisioning

### Step 2 — run the schema

1. **SQL Editor → New query**
2. Paste the entire contents of [`supabase/schema.sql`](../supabase/schema.sql)
3. **Run**

This creates every table, index, and row-level-security policy. It is
written to be idempotent (`create table if not exists`), so running it
twice is safe.

### Step 3 — create the admin user

`/admin` is gated to one account. There is no roles system, deliberately —
it is a solo project and YAGNI applies.

1. **Authentication → Users → Add user**
2. Set your email and a password
3. Confirm the user (Supabase may require email confirmation; you can
   toggle that off under **Authentication → Providers → Email** while
   developing)

### Step 4 — collect the keys

**Settings → API**, copy three values:

| Supabase field | Env var | Safe in the browser? |
|---|---|---|
| Project URL | `NEXT_PUBLIC_SUPABASE_URL` | yes |
| `anon` `public` | `NEXT_PUBLIC_SUPABASE_ANON_KEY` | yes — RLS protects it |
| `service_role` `secret` | `SUPABASE_SERVICE_ROLE_KEY` | **NO — server only** |

### Step 5 — write `.env.local`

```bash
cp .env.local.example .env.local
```

Fill in:

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...
ADMIN_EMAIL=you@example.com
```

`ADMIN_EMAIL` must match the user you created in step 3 exactly — the
auth gate is a string comparison against `session.user.email`.

> **The service-role key bypasses row-level security entirely.** It must
> never be imported into a client component, never prefixed
> `NEXT_PUBLIC_`, and never committed. `.env.local` is gitignored;
> confirm that before your first commit. If it ever leaks, rotate it
> immediately under **Settings → API → Rotate**.

---

## 4. Pushing the content

```bash
npm install          # first time only — installs the tsx runner
npm run seed         # insert missing rows, leave existing ones alone
npm run seed -- --reset   # delete seeded content first, then insert
```

The script is [`scripts/seed-supabase.ts`](../scripts/seed-supabase.ts).
It reads the same files the site reads, so there is exactly one source
of truth.

### The id problem, and how the script solves it

Local rows use readable string ids (`t-isha`, `te-shankara`,
`isha-1`). Postgres generates `uuid` defaults. The script therefore
cannot insert children and parents in one pass. It:

1. inserts each parent row,
2. reads back the generated uuid,
3. stores `localId → uuid` in an in-memory `idMap`,
4. rewrites every child foreign key through that map before inserting.

This is also why the script is **idempotent**: before inserting a
parent it looks for an existing row matching a natural key (`slug`, or
`text_id + locator` for verses). If it finds one it records the uuid and
moves on. Running `npm run seed` twice does not duplicate anything.

### Verifying it worked

```sql
-- every translation must have a source; this must return 0
select count(*) from translations where source_id is null;

-- what is cited vs what is still editorial
select s.work_title, s.copyright_status, count(*) as translations
from translations t join sources s on s.id = t.source_id
group by 1, 2 order by 3 desc;

-- the Isha should come back with 19 rows (18 verses + the śānti mantra)
select v.locator, count(t.*) as languages
from verses v
join texts x on x.id = v.text_id
left join translations t on t.verse_id = v.id
where x.slug = 'isha'
group by 1 order by 1;
```

---

## 5. Row-level security

Every content table has RLS enabled with the same two-policy shape:

- **public read** — anonymous visitors can `select` all content
- **no public write** — inserts and updates only via the service-role
  key, which only ever exists server-side

This is what makes it safe to ship `NEXT_PUBLIC_SUPABASE_ANON_KEY` to
the browser. If you add a table, add its policies in the same commit —
a table with RLS enabled and no policy is invisible to the site, and a
table without RLS is writable by anyone holding the anon key.

---

## 6. Switching the site over to Postgres

This is the step that is **not yet done**, and it is worth being precise
about why.

[`src/lib/db.ts`](../src/lib/db.ts) already exists with query functions
against Supabase. But it has drifted: its functions take no `Locale`,
because it was written before the site became trilingual. Every page now
calls `src/lib/data.ts`, which does.

So the switch-over is not "change the import". The work is:

1. Give every `db.ts` function the same signature as its `data.ts`
   counterpart — `(…args, locale: Locale)` — and resolve the
   `*_translations` join inside it.
2. Return the same view shapes (`VerseView`, `TeacherView`, …) so pages
   do not change at all.
3. Repoint imports one page at a time, verifying each renders
   identically before moving on.
4. Keep `data.ts` until every page is migrated; delete it last.

Do **not** migrate all pages in one commit. Doing it page by page means
a regression is one `git revert` away from being isolated.

---

## 7. Adding content from here on

**While the site still reads from files** (now): edit
`src/lib/seed/*.ts`, open a PR, review the diff, merge, deploy. Run
`npm run seed` afterwards if a Supabase project exists and you want it
in sync.

**Once `/admin` is the authoring surface**: use the admin panel, which
enforces the citation rule at the form level as well as the database
level — the save button stays disabled until a source is picked.

Either way the same rule holds: **a translation without a source cannot
be saved.** If you find yourself wanting to bypass that, the answer is
to add a `sources` row describing what you actually have — even if that
row says "site editorial, pending citation" — not to make the column
nullable.

---

## 8. Cost

| Service | Free tier | Enough for |
|---|---|---|
| Supabase | 500 MB database, 1 GB storage, 2 GB egress | the entire text corpus many times over — text is tiny |
| Vercel | 100 GB bandwidth | images are the only real consumer |

The 500 MB limit is not a constraint for this project. All eighteen
principal Upaniṣads with three translations and commentary on every
verse is on the order of a few megabytes. Photography is what will cost
you, and that is served from `public/` or a CDN, not from Postgres.

One thing to watch: Supabase pauses free projects after **7 days of
inactivity**. A paused project returns connection errors, which will look
like a code bug. If the site suddenly cannot reach the database and
nothing changed, check the Supabase dashboard first.
