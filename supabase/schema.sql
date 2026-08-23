-- ============================================================
--  Tat Tvam Asi — Supabase Database Schema (v2 — Phase 0)
--  Run this in: Supabase Dashboard → SQL Editor → New query
--
--  This is a CLEAN REWRITE of the original schema, not a
--  migration — the v1 schema was designed but never run against
--  a live database, so there is no live data to preserve.
--
--  Design rationale: see docs/ROADMAP.md. In short — one
--  generalized `texts` → `verses` hierarchy covers every
--  canonical work (Vedas, Upanishads, Gita, Brahma Sutras,
--  Stotras), `translations` and `commentary_entries` require a
--  citation via `sources` (DB-level enforcement of "no uncited
--  translation ships"), and `commentaries` are first-class so
--  multiple acharyas/sampradayas can comment on the same verse.
-- ============================================================

create extension if not exists "uuid-ossp";

-- ────────────────────────────────────────────────────────────
--  Sources / Citations
--  Every translation and commentary entry must cite one of these.
-- ────────────────────────────────────────────────────────────
create table if not exists sources (
  id                uuid primary key default uuid_generate_v4(),
  work_title        text not null,
  translator_author text,
  publisher         text,
  publication_year  int,
  edition           text,
  copyright_status  text not null default 'pending_review'
                      check (copyright_status in (
                        'public_domain_pre_1928', 'public_domain_other', 'cc_by', 'cc_by_sa',
                        'licensed', 'original_by_site_owner', 'legacy_uncited_flagged', 'pending_review'
                      )),
  license_url       text,
  source_url        text,
  notes             text,
  created_at        timestamptz default now()
);

-- ────────────────────────────────────────────────────────────
--  Teachers / Acharyas
--  (sampradaya_id column added after `sampradayas` exists below,
--  to avoid a circular foreign key at creation time)
-- ────────────────────────────────────────────────────────────
create table if not exists teachers (
  id              uuid primary key default uuid_generate_v4(),
  name            text not null,
  name_sanskrit   text,
  birth_year      int,
  death_year      int,
  era             text,
  tradition       text not null default 'Advaita Vedanta',  -- display fallback; sampradaya_id is the real FK
  key_works       text[] default '{}',
  biography       text,
  quote           text,
  image_url       text,
  slug            text not null unique,
  created_at      timestamptz default now()
);

-- ────────────────────────────────────────────────────────────
--  Sampradayas (traditions / schools of commentary)
--  First-class because it's now an FK target from `teachers`
--  and `commentaries` — not just a display label.
-- ────────────────────────────────────────────────────────────
create table if not exists sampradayas (
  id                 uuid primary key default uuid_generate_v4(),
  slug               text not null unique,
  name               text not null,
  name_sanskrit      text,
  description        text,
  founder_teacher_id uuid references teachers(id) on delete set null,
  created_at         timestamptz default now()
);

alter table teachers add column if not exists sampradaya_id uuid references sampradayas(id) on delete set null;

-- ────────────────────────────────────────────────────────────
--  Texts — one row per canonical work at ANY level: a Veda, a
--  Samhita, an Upanishad, the Gita, the Brahma Sutras, a Stotra.
--  Replaces the old `upanishads` table.
-- ────────────────────────────────────────────────────────────
create table if not exists texts (
  id                uuid primary key default uuid_generate_v4(),
  slug              text not null unique,
  title_sanskrit    text not null,
  title_iast        text not null,
  title_en          text not null,
  work_type         text not null check (work_type in (
                      'veda', 'samhita', 'brahmana', 'aranyaka', 'upanishad', 'smriti', 'sutra', 'stotra', 'itihasa'
                    )),
  parent_id         uuid references texts(id) on delete set null,
  veda              text check (veda in ('rigveda', 'samaveda', 'yajurveda', 'atharvaveda')),
  canonical_order   int,
  verse_count       int,
  summary           text,
  key_teaching      text,
  citation_status   text not null default 'pending_review'
                      check (citation_status in ('cited', 'legacy_uncited', 'pending_review')),
  -- Stotra-only metadata (nullable for non-stotra work_types). Kept on this
  -- same table rather than a separate `stotras` table — a stotra is
  -- structurally just "a text with verses"; forking the schema for it
  -- would duplicate the verses/translations/commentary machinery for no
  -- benefit.
  author_teacher_id uuid references teachers(id) on delete set null,
  deity             text,
  occasion          text[] default '{}',
  meter             text,
  audio_url         text,  -- reserved for a future audio phase; not wired up anywhere yet
  created_at        timestamptz default now(),
  updated_at        timestamptz default now()
);

-- ────────────────────────────────────────────────────────────
--  Verses / Shlokas / Mantras / Sutras
-- ────────────────────────────────────────────────────────────
create table if not exists verses (
  id                    uuid primary key default uuid_generate_v4(),
  text_id               uuid not null references texts(id) on delete cascade,
  sanskrit              text not null,
  transliteration_iast  text not null,
  site_gloss            text,  -- the site's own editorial voice; explicitly NOT a cited translation
  division_1            text,  -- e.g. chapter / khanda
  division_2            text,  -- e.g. verse / mantra number within division_1
  division_3            text,  -- rarely needed (e.g. Brahma Sutra pada.adhikarana.sutra)
  locator               text,  -- display string, e.g. "6.8.7" or "BG 2.47"
  tags                  text[] default '{}',
  category              text not null default 'shruti'
                          check (category in ('advaita', 'shruti', 'smriti', 'temples', 'dharma', 'teachers')),
  is_mahavakya          boolean default false,
  citation_status       text not null default 'pending_review'
                          check (citation_status in ('cited', 'legacy_uncited', 'pending_review')),
  created_at            timestamptz default now(),
  updated_at            timestamptz default now()
);

-- ────────────────────────────────────────────────────────────
--  Translations — the table that enforces "no uncited translation."
-- ────────────────────────────────────────────────────────────
create table if not exists translations (
  id                uuid primary key default uuid_generate_v4(),
  verse_id          uuid not null references verses(id) on delete cascade,
  language          text not null default 'en',
  translation_text  text not null,
  source_id         uuid not null references sources(id),
  is_primary        boolean default true,
  created_at        timestamptz default now(),
  updated_at        timestamptz default now()
);

-- ────────────────────────────────────────────────────────────
--  Commentaries (bhashyas) — a bhashya as a WORK, e.g. "Śaṅkara's
--  Brahma Sūtra Bhāṣya." Lets multiple acharyas/sampradayas
--  comment on the same base text.
-- ────────────────────────────────────────────────────────────
create table if not exists commentaries (
  id             uuid primary key default uuid_generate_v4(),
  teacher_id     uuid not null references teachers(id) on delete cascade,
  base_text_id   uuid not null references texts(id) on delete cascade,
  title          text not null,
  sampradaya_id  uuid references sampradayas(id) on delete set null,
  language       text not null default 'sanskrit',
  summary        text,
  source_id      uuid references sources(id),  -- nullable: may reproduce an existing translated bhashya
  created_at     timestamptz default now()
);

-- ────────────────────────────────────────────────────────────
--  Commentary entries — the actual per-verse bhashya content.
--  Query pattern: join commentary_entries -> commentaries ->
--  teachers where verse_id = X, to render Shankara / Ramanuja /
--  Madhva side by side on one verse page.
-- ────────────────────────────────────────────────────────────
create table if not exists commentary_entries (
  id             uuid primary key default uuid_generate_v4(),
  commentary_id  uuid not null references commentaries(id) on delete cascade,
  verse_id       uuid not null references verses(id) on delete cascade,
  sanskrit_text  text,
  content        text not null,
  source_id      uuid not null references sources(id),
  sort_order     int default 0,
  created_at     timestamptz default now()
);

-- ────────────────────────────────────────────────────────────
--  Dynasties — temple history timeline
-- ────────────────────────────────────────────────────────────
create table if not exists dynasties (
  id             uuid primary key default uuid_generate_v4(),
  slug           text not null unique,
  name           text not null,
  name_local     text,
  start_year_ce  int,  -- negative = BCE
  end_year_ce    int,
  region         text,
  description    text
);

-- ────────────────────────────────────────────────────────────
--  Temples
-- ────────────────────────────────────────────────────────────
create table if not exists temples (
  id                  uuid primary key default uuid_generate_v4(),
  name                text not null,
  name_local          text,
  location            text not null,
  state               text not null,
  dynasty             text,   -- display fallback; dynasty_id is the real FK
  dynasty_id          uuid references dynasties(id) on delete set null,
  century_built       text,
  architecture_style  text,
  presiding_deity     text,
  description         text,
  significance        text,
  slug                text not null unique,
  created_at          timestamptz default now()
);

create table if not exists temple_images (
  id             uuid primary key default uuid_generate_v4(),
  temple_id      uuid not null references temples(id) on delete cascade,
  url            text not null,
  cloudinary_id  text,
  alt_text       text not null,
  caption        text,
  credit         text,
  is_primary     boolean default false,
  created_at     timestamptz default now()
);

create table if not exists temple_events (
  id              uuid primary key default uuid_generate_v4(),
  temple_id       uuid not null references temples(id) on delete cascade,
  year_ce_approx  int,
  event_type      text not null check (event_type in (
                    'founding', 'renovation', 'desecration', 'rediscovery', 'unesco_designation', 'other'
                  )),
  description     text not null,
  source_id       uuid references sources(id),
  created_at      timestamptz default now()
);

-- ────────────────────────────────────────────────────────────
--  Concepts / Tattvas
-- ────────────────────────────────────────────────────────────
create table if not exists concepts (
  id                   uuid primary key default uuid_generate_v4(),
  term_sanskrit        text not null,
  term_iast            text not null,
  term_en              text not null,
  definition           text not null,
  detailed_explanation text,
  related_concepts     text[] default '{}',
  related_verses       text[] default '{}',
  category             text not null default 'advaita'
                         check (category in ('advaita', 'shruti', 'smriti', 'temples', 'dharma', 'teachers')),
  slug                 text not null unique,
  created_at           timestamptz default now()
);

-- ────────────────────────────────────────────────────────────
--  Mathas / Monasteries
-- ────────────────────────────────────────────────────────────
create table if not exists mathas (
  id                      uuid primary key default uuid_generate_v4(),
  name                    text not null,
  location                text not null,
  state                   text not null,
  founded_by              text not null,
  direction               text check (direction in ('north', 'south', 'east', 'west')),
  presiding_deity         text,
  mahavakya               text,
  veda                    text,
  current_shankaracharya  text,
  description             text,
  slug                    text not null unique
);

-- ────────────────────────────────────────────────────────────
--  Practices / traditions (festivals, rituals, vratas, samskaras)
-- ────────────────────────────────────────────────────────────
create table if not exists practices (
  id                uuid primary key default uuid_generate_v4(),
  slug              text not null unique,
  name_sanskrit     text,
  name_en           text not null,
  practice_type     text not null check (practice_type in (
                      'festival', 'ritual', 'vrata', 'samskara', 'daily_practice'
                    )),
  description       text,
  significance      text,
  associated_deity  text,
  timing_rule       text,
  region_scope      text,
  created_at        timestamptz default now()
);

create table if not exists practice_texts (
  practice_id uuid not null references practices(id) on delete cascade,
  text_id     uuid not null references texts(id) on delete cascade,
  primary key (practice_id, text_id)
);

create table if not exists practice_temples (
  practice_id uuid not null references practices(id) on delete cascade,
  temple_id   uuid not null references temples(id) on delete cascade,
  primary key (practice_id, temple_id)
);

-- ────────────────────────────────────────────────────────────
--  Articles (long-form essays — unchanged, available for future use)
-- ────────────────────────────────────────────────────────────
create table if not exists articles (
  id                    uuid primary key default uuid_generate_v4(),
  title                 text not null,
  slug                  text not null unique,
  excerpt               text,
  body                  text,
  category              text not null default 'advaita'
                          check (category in ('advaita', 'shruti', 'smriti', 'temples', 'dharma', 'teachers')),
  tags                  text[] default '{}',
  author                text,
  published_at          timestamptz default now(),
  updated_at            timestamptz default now(),
  reading_time_minutes  int default 5,
  is_featured           boolean default false
);

-- ────────────────────────────────────────────────────────────
--  Tags
-- ────────────────────────────────────────────────────────────
create table if not exists tags (
  id          uuid primary key default uuid_generate_v4(),
  name        text not null unique,
  slug        text not null unique,
  description text
);

-- ────────────────────────────────────────────────────────────
--  Indexes
-- ────────────────────────────────────────────────────────────
create index if not exists idx_texts_work_type       on texts(work_type);
create index if not exists idx_texts_parent           on texts(parent_id);
create index if not exists idx_texts_veda             on texts(veda);

create index if not exists idx_verses_text_id         on verses(text_id);
create index if not exists idx_verses_category        on verses(category);
create index if not exists idx_verses_mahavakya       on verses(is_mahavakya);
create index if not exists idx_verses_citation_status on verses(citation_status);
create index if not exists idx_verses_tags            on verses using gin(tags);

create index if not exists idx_translations_verse_id  on translations(verse_id);
create index if not exists idx_translations_source_id on translations(source_id);

create index if not exists idx_commentary_entries_verse_id      on commentary_entries(verse_id);
create index if not exists idx_commentary_entries_commentary_id on commentary_entries(commentary_id);
create index if not exists idx_commentaries_base_text_id        on commentaries(base_text_id);
create index if not exists idx_commentaries_teacher_id          on commentaries(teacher_id);

create index if not exists idx_temples_state       on temples(state);
create index if not exists idx_temples_dynasty_id  on temples(dynasty_id);
create index if not exists idx_temple_events_temple on temple_events(temple_id);

create index if not exists idx_articles_category  on articles(category);
create index if not exists idx_articles_featured  on articles(is_featured);

create index if not exists idx_practices_type on practices(practice_type);

-- Full-text search
create index if not exists idx_texts_fts on texts
  using gin(to_tsvector('english', coalesce(title_en, '') || ' ' || coalesce(summary, '')));
create index if not exists idx_translations_fts on translations
  using gin(to_tsvector('english', coalesce(translation_text, '')));
create index if not exists idx_concepts_fts on concepts
  using gin(to_tsvector('english', coalesce(term_en, '') || ' ' || coalesce(definition, '')));

-- ────────────────────────────────────────────────────────────
--  Row-Level Security — public read on everything, no public
--  write (admin writes go through the service-role key, which
--  bypasses RLS, from server actions only).
-- ────────────────────────────────────────────────────────────
alter table sources            enable row level security;
alter table teachers           enable row level security;
alter table sampradayas        enable row level security;
alter table texts              enable row level security;
alter table verses             enable row level security;
alter table translations       enable row level security;
alter table commentaries       enable row level security;
alter table commentary_entries enable row level security;
alter table dynasties          enable row level security;
alter table temples            enable row level security;
alter table temple_images      enable row level security;
alter table temple_events      enable row level security;
alter table concepts           enable row level security;
alter table mathas             enable row level security;
alter table practices          enable row level security;
alter table practice_texts     enable row level security;
alter table practice_temples   enable row level security;
alter table articles           enable row level security;
alter table tags               enable row level security;

do $$
declare
  t text;
begin
  foreach t in array array[
    'sources','teachers','sampradayas','texts','verses','translations',
    'commentaries','commentary_entries','dynasties','temples','temple_images',
    'temple_events','concepts','mathas','practices','practice_texts',
    'practice_temples','articles','tags'
  ]
  loop
    execute format('drop policy if exists "public read %I" on %I;', t, t);
    execute format('create policy "public read %I" on %I for select using (true);', t, t);
  end loop;
end $$;

-- ============================================================
--  Seed data
--  Ports the pre-existing static content from src/lib/data.ts
--  into the new schema. Every translation below is attributed to
--  the "legacy uncited" placeholder source below and flagged
--  accordingly — none of it is presented as scholarly citation.
--  Real cited content starts in Phase 1 (Bhagavad Gita).
-- ============================================================

insert into sources (id, work_title, translator_author, copyright_status, notes)
values (
  '00000000-0000-0000-0000-000000000001',
  'Site editorial paraphrase — uncited legacy content, pending scholarly citation',
  'Tat Tvam Asi editorial team',
  'legacy_uncited_flagged',
  'Placeholder source for all pre-Phase-0 content ported from src/lib/data.ts. Every verse/translation attributed to this source needs a real citation before it can be marked cited.'
)
on conflict (id) do nothing;

-- Teachers
insert into teachers (name, name_sanskrit, birth_year, death_year, era, tradition, key_works, biography, quote, slug) values
('Adi Shankaracharya', 'आदि शङ्कराचार्य', 788, 820, '8th century CE', 'Advaita Vedanta',
  array['Brahmasutra Bhashya','Vivekachudamani','Upadeshasahasri','Bhagavad Gita Bhashya','Aparokshanubhuti'],
  'Born in Kaladi, Kerala, Shankaracharya consolidated and systematised the doctrine of Advaita Vedanta. He established four Mathas across India, wrote extensive commentaries on the Prasthanatrayi, and revived Hinduism from the ground up — all before the age of 32.',
  'Brahma satyam jagan mithya, jivo brahmaiva naparah — Brahman alone is real, the world is appearance, the individual self is none other than Brahman.',
  'adi-shankaracharya'),
('Ramana Maharshi', 'रमण महर्षि', 1879, 1950, '19th–20th century CE', 'Advaita Vedanta',
  array['Who am I?','Forty Verses on Reality','Upadesa Saram'],
  'At age 16, Ramana Maharshi underwent a spontaneous experience of death and Self-realisation in Madurai. He settled at the foot of Arunachala, where he taught largely through silence. His method — self-enquiry through the question ''Who am I?'' — is regarded as one of the most direct paths to liberation.',
  'The degree of freedom from unwanted thoughts and the degree of concentration on a single thought are the measures to gauge spiritual progress.',
  'ramana-maharshi'),
('Nisargadatta Maharaj', 'निसर्गदत्त महाराज', 1897, 1981, '20th century CE', 'Advaita Vedanta',
  array['I Am That','Prior to Consciousness','Seeds of Consciousness'],
  'A humble Mumbai bidi-maker who attained Self-realisation through the instruction of his guru Siddharameshwar Maharaj. His dialogues, compiled in ''I Am That'', are considered among the most direct and uncompromising expositions of Advaita in the modern era.',
  'Love says ''I am everything''. Wisdom says ''I am nothing''. Between the two, my life flows.',
  'nisargadatta-maharaj')
on conflict (slug) do nothing;

-- Sampradaya + link founder
insert into sampradayas (slug, name, name_sanskrit, description, founder_teacher_id)
select 'advaita-vedanta', 'Advaita Vedanta', 'अद्वैत वेदान्त',
  'Non-dual Vedanta: the school holding that Brahman, Atman, and the world are not three different things but one undivided reality.',
  id
from teachers where slug = 'adi-shankaracharya'
on conflict (slug) do nothing;

update teachers set sampradaya_id = (select id from sampradayas where slug = 'advaita-vedanta')
where tradition = 'Advaita Vedanta' and sampradaya_id is null;

-- Texts (Upanishads)
insert into texts (slug, title_sanskrit, title_iast, title_en, work_type, veda, verse_count, summary, key_teaching, citation_status) values
('mandukya-upanishad', 'माण्डूक्य उपनिषद्', 'Māṇḍūkya Upaniṣad', 'Mandukya Upanishad', 'upanishad', 'atharvaveda', 12,
  'The shortest yet most profound Upanishad, expounding the nature of Om and the four states of consciousness — waking, dream, deep sleep, and Turiya.',
  'Ayam Atma Brahma — This Self is Brahman', 'legacy_uncited'),
('kena-upanishad', 'केन उपनिषद्', 'Kena Upaniṣad', 'Kena Upanishad', 'upanishad', 'samaveda', 35,
  'Explores the nature of Brahman as that which cannot be known by the ordinary mind — the eye of the eye, the mind of the mind, the ear of the ear.',
  'That which is not thought by the mind, but by which the mind thinks — that alone is Brahman.', 'legacy_uncited'),
('isha-upanishad', 'ईश उपनिषद्', 'Īśa Upaniṣad', 'Isha Upanishad', 'upanishad', 'yajurveda', 18,
  'The shortest Upanishad in the Yajurveda. Reconciles knowledge and action, renunciation and engagement.',
  'Tena tyaktena bhuñjīthāḥ — By renouncing, enjoy.', 'legacy_uncited'),
('katha-upanishad', 'कठ उपनिषद्', 'Kaṭha Upaniṣad', 'Katha Upanishad', 'upanishad', 'yajurveda', 119,
  'Nachiketa, a young boy, asks Yama — the lord of death — about what lies beyond death. Yama''s answer is the complete teaching on the immortal Self.',
  'The Self is not born, nor does it die. It did not come from anywhere; nothing came from it.', 'legacy_uncited'),
('mundaka-upanishad', 'मुण्डक उपनिषद्', 'Muṇḍaka Upaniṣad', 'Mundaka Upanishad', 'upanishad', 'atharvaveda', 64,
  'Distinguishes between the higher knowledge of Brahman and lower knowledge of the world. Uses the image of two birds on the same tree.',
  'Two birds, inseparable companions, dwell on the same tree. One eats the fruits; the other only watches.', 'legacy_uncited'),
('chandogya-upanishad', 'छान्दोग्य उपनिषद्', 'Chāndogya Upaniṣad', 'Chandogya Upanishad', 'upanishad', 'samaveda', 628,
  'The longest and most storied Upanishad. Contains Tat Tvam Asi — given nine times by a father to his son through nine different analogies.',
  'Tat Tvam Asi — Thou Art That', 'legacy_uncited'),
('brihadaranyaka-upanishad', 'बृहदारण्यक उपनिषद्', 'Bṛhadāraṇyaka Upaniṣad', 'Brihadaranyaka Upanishad', 'upanishad', 'yajurveda', 435,
  'The largest Upanishad, rich with dialogues between Yajnavalkya and Maitreyi on the nature of Self.',
  'Aham Brahmasmi — I am Brahman', 'legacy_uncited'),
('aitareya-upanishad', 'ऐतरेय उपनिषद्', 'Aitareya Upaniṣad', 'Aitareya Upanishad', 'upanishad', 'rigveda', 33,
  'Expounds the nature of Brahman as pure consciousness.',
  'Prajnanam Brahma — Consciousness is Brahman', 'legacy_uncited')
on conflict (slug) do nothing;

-- Verses + their legacy-flagged translations + site_gloss
with v as (
  insert into verses (text_id, sanskrit, transliteration_iast, site_gloss, division_1, division_2, division_3, locator, category, is_mahavakya, tags, citation_status)
  select t.id, x.sanskrit, x.translit, nullif(x.gloss, ''), x.d1, x.d2, x.d3, x.locator, x.category, x.mahavakya, x.tags, 'legacy_uncited'
  from (values
    ('chandogya-upanishad', 'सर्वं खल्विदं ब्रह्म', 'Sarvaṃ Khalvidaṃ Brahma', '', '3','14','1','3.14.1', 'advaita', false, array['brahman','non-duality']),
    ('brihadaranyaka-upanishad', 'अहं ब्रह्मास्मि', 'Ahaṃ Brahmāsmi', 'One of the four Mahavakyas — the great sayings of the Upanishads. Spoken in the Brihadaranyaka, it is the direct assertion of non-difference between the individual self and Brahman.', '1','4','10','1.4.10', 'advaita', true, array['mahavakya','brahman','atman']),
    ('chandogya-upanishad', 'एकमेवाद्वितीयम्', 'Ekam Evādvitīyam', '', '6','2','1','6.2.1', 'advaita', false, array['brahman','oneness','non-duality']),
    ('brihadaranyaka-upanishad', 'नेति नेति', 'Neti Neti', 'The method of Neti Neti — not this, not this — is the systematic negation of everything that can be objectified. What remains when all objects are negated is the subject itself: pure awareness.', '2','3','6','2.3.6', 'advaita', false, array['inquiry','brahman','method']),
    ('aitareya-upanishad', 'प्रज्ञानं ब्रह्म', 'Prajñānaṃ Brahma', 'The Mahavakya of the Rigveda. It points directly at consciousness itself as the ultimate reality — not an object of consciousness, but consciousness as such.', '3','3',null,'3.3', 'advaita', true, array['mahavakya','consciousness','brahman']),
    ('chandogya-upanishad', 'तत्त्वमसि', 'Tat Tvam Asi', 'The Mahavakya of the Samaveda, and the teaching for which this platform is named. Uddalaka gave this teaching to his son Shvetaketu nine times, through nine analogies, until the recognition arose.', '6','8','7','6.8.7', 'advaita', true, array['mahavakya','atman','brahman']),
    ('mandukya-upanishad', 'अयमात्मा ब्रह्म', 'Ayam Ātmā Brahma', 'The Mahavakya of the Atharvaveda. The Mandukya Upanishad is the shortest — twelve verses — and this is its central declaration.', '1','2',null,'1.2', 'advaita', true, array['mahavakya','atman','brahman']),
    ('isha-upanishad', 'ॐ पूर्णमदः पूर्णमिदम्', 'Oṃ Pūrṇamadaḥ Pūrṇamidam', 'The opening invocation of the Isha Upanishad. It describes the nature of Brahman as Purna — complete, whole, lacking nothing.', 'Invocation',null,null,'Invocation', 'shruti', false, array['purna','wholeness','brahman'])
  ) as x(text_slug, sanskrit, translit, gloss, d1, d2, d3, locator, category, mahavakya, tags)
  join texts t on t.slug = x.text_slug
  returning id, locator, sanskrit
)
insert into translations (verse_id, language, translation_text, source_id, is_primary)
select v.id, 'en', x.translation, '00000000-0000-0000-0000-000000000001', true
from v
join (values
  ('सर्वं खल्विदं ब्रह्म', 'All this is verily Brahman — not some of it, not most of it. All of it. The ground beneath apparent difference.'),
  ('अहं ब्रह्मास्मि', 'I am Brahman. Not as arrogance — as the recognition that there is no boundary between the knower and the known.'),
  ('एकमेवाद्वितीयम्', 'One only, without a second. Not one among many — one in which there is no other. The most radical statement in human thought.'),
  ('नेति नेति', 'Not this, not this. Arriving at Brahman by negating everything that Brahman is not — until only the negator remains.'),
  ('प्रज्ञानं ब्रह्म', 'Consciousness is Brahman. Pure awareness is the ground of all existence.'),
  ('तत्त्वमसि', 'Thou Art That. The individual self is not different from the ultimate reality.'),
  ('अयमात्मा ब्रह्म', 'This Self is Brahman. Look within; there lies the infinite.'),
  ('ॐ पूर्णमदः पूर्णमिदम्', 'That is whole. This is whole. From wholeness emerges wholeness. Even after wholeness is taken from wholeness, wholeness remains.')
) as x(sanskrit, translation) on x.sanskrit = v.sanskrit;

-- Concepts
insert into concepts (term_sanskrit, term_iast, term_en, definition, detailed_explanation, category, slug) values
('ब्रह्मन्', 'Brahman', 'Brahman', 'The ultimate, infinite, unchanging reality underlying all existence.', 'In Advaita Vedanta, Brahman is the sole reality — infinite, eternal, and self-luminous consciousness. It is described as Sat-Chit-Ananda: pure being, pure consciousness, pure bliss. Everything that appears as the world is Brahman alone, like waves in the ocean.', 'advaita', 'brahman'),
('आत्मन्', 'Ātman', 'Atman', 'The individual Self, which Advaita holds to be identical with Brahman.', 'Atman is the witness-consciousness within every being. Unlike the ego or mind, Atman is unborn, undying, and unchanging. The central teaching of Advaita is that the apparent individual self (jiva) is, in its deepest nature, none other than Brahman.', 'advaita', 'atman'),
('माया', 'Māyā', 'Maya', 'The cosmic creative power that causes the appearance of multiplicity in the one Brahman.', 'Maya is neither real nor unreal — it is the inexplicable power (shakti) of Brahman by which the infinite appears as the finite world. It operates through two functions: avarana (veiling of Brahman) and viksepa (projection of the world). Maya dissolves upon Self-knowledge.', 'advaita', 'maya'),
('अद्वैत', 'Advaita', 'Non-duality', 'The philosophical position that reality is one, without a second.', 'Advaita (a + dvaita = not two) is the conclusion of Vedantic inquiry: that Brahman, Atman, and the world are not three different things but one undivided reality. The diversity of appearances is due to Maya (cosmic illusion), not to any real difference in the substrate.', 'advaita', 'advaita'),
('मोक्ष', 'Mokṣa', 'Liberation', 'Freedom from the cycle of birth and death through Self-realisation.', 'Moksha in Advaita is not a state to be achieved but the recognition of what already is. It is the direct knowing that one has never been bound — that the Self is always free. This recognition dissolves the false identification with body and mind that constitutes bondage.', 'advaita', 'moksha'),
('विवेक', 'Viveka', 'Discrimination', 'The faculty of discernment between the real (Brahman) and the unreal (world-appearance).', 'Viveka is the first qualification for Vedantic inquiry. It is the capacity to clearly distinguish between what is eternal and what is transient, between consciousness itself and the objects that appear in it. Without viveka, liberation is not possible.', 'advaita', 'viveka')
on conflict (slug) do nothing;

-- Dynasties
insert into dynasties (slug, name, region) values
('chola', 'Chola', 'Tamil Nadu'),
('rashtrakuta', 'Rashtrakuta', 'Deccan / Maharashtra'),
('nayak', 'Nayak', 'Tamil Nadu'),
('eastern-ganga', 'Eastern Ganga', 'Odisha'),
('vijayanagara', 'Vijayanagara', 'Karnataka / Deccan')
on conflict (slug) do nothing;

-- Temples
insert into temples (name, name_local, location, state, dynasty, dynasty_id, century_built, architecture_style, presiding_deity, description, significance, slug) values
('Brihadeeswarar Temple', 'பெரிய கோயில்', 'Thanjavur', 'Tamil Nadu', 'Chola', (select id from dynasties where slug = 'chola'), '11th century CE', 'Dravidian',
  'Shiva (Brihadeeswara)', 'Built by Raja Raja Chola I, this UNESCO World Heritage Site towers 66 metres with a vimana made of a single 80-tonne granite capstone — raised without modern machinery.', 'The temple demonstrates the Chola understanding that the temple is a model of Mount Meru — the axis of the cosmos. The garbhagriha represents the cave of the heart.', 'brihadeeswarar-temple'),
('Kailasa Temple', 'कैलास मंदिर', 'Ellora', 'Maharashtra', 'Rashtrakuta', (select id from dynasties where slug = 'rashtrakuta'), '8th century CE', 'Rock-cut',
  'Shiva (Kailashanatha)', 'Carved from a single basalt cliff, the Kailasa Temple at Ellora is the largest monolithic structure in the world. An estimated 200,000 tonnes of rock were removed by hand over several decades.', 'The temple is a three-dimensional mandala — a sacred diagram of the cosmos carved into the living rock of the earth itself.', 'kailasa-temple-ellora'),
('Meenakshi Amman Temple', 'மீனாக்ஷி அம்மன் கோவில்', 'Madurai', 'Tamil Nadu', 'Nayak', (select id from dynasties where slug = 'nayak'), '17th century CE', 'Dravidian',
  'Meenakshi (Parvati)', 'One of the largest temple complexes in India, with 14 gopurams (gateway towers) covered in thousands of painted sculptures. The innermost sanctum enshrines the goddess Meenakshi.', 'This temple encodes the entire cosmos in its plan — the 64 sacred games of Shiva are depicted in its corridors, making it a living scripture in stone.', 'meenakshi-amman-temple'),
('Konark Sun Temple', 'कोणार्क', 'Konark', 'Odisha', 'Eastern Ganga', (select id from dynasties where slug = 'eastern-ganga'), '13th century CE', 'Kalinga',
  'Surya (Sun God)', 'Designed as a colossal chariot of the sun god, with 24 intricately carved wheels functioning as sundials. A masterpiece of Odishan architecture.', 'The temple demonstrates the Vedic understanding of time as the chariot of the sun. The 24 wheels correspond to the 24 hours, and the 8 spokes to the eight praharas of the day.', 'konark-sun-temple'),
('Virupaksha Temple', 'ವಿರೂಪಾಕ್ಷ ದೇವಾಲಯ', 'Hampi', 'Karnataka', 'Vijayanagara', (select id from dynasties where slug = 'vijayanagara'), '7th century CE', 'Dravidian',
  'Shiva (Virupaksha)', 'One of the oldest functioning temples in India, continuously worshipped for over 1,300 years. At the centre of the magnificent Vijayanagara Empire ruins.', 'The temple is the living heart of Hampi — its continuous worship across dynasties, invasions, and centuries is itself a testament to the indestructible nature of Dharma.', 'virupaksha-temple-hampi')
on conflict (slug) do nothing;

-- Mathas (Four Amnaya Peethas of Shankaracharya)
insert into mathas (name, location, state, founded_by, direction, presiding_deity, mahavakya, veda, description, slug) values
('Sringeri Sharada Peetham', 'Sringeri', 'Karnataka', 'Adi Shankaracharya', 'south', 'Sharadamba', 'Aham Brahmasmi', 'Yajurveda', 'The southern matha, established on the banks of the Tunga river in Karnataka. It is the seat of the Dakshinamnaya tradition and maintains the Yajurveda.', 'sringeri-sharada-peetham'),
('Dwarka Sharada Peetham', 'Dwarka', 'Gujarat', 'Adi Shankaracharya', 'west', 'Siddheshwari', 'Tat Tvam Asi', 'Samaveda', 'The western matha at Dwarka, associated with the Samaveda and the mahavakya Tat Tvam Asi.', 'dwarka-sharada-peetham'),
('Jyotirmath', 'Joshimath', 'Uttarakhand', 'Adi Shankaracharya', 'north', 'Narayana', 'Ayam Atma Brahma', 'Atharvaveda', 'The northern matha in the Himalayas, near Badrinath. Associated with the Atharvaveda and the mahavakya Ayam Atma Brahma.', 'jyotirmath'),
('Govardhana Peetham', 'Puri', 'Odisha', 'Adi Shankaracharya', 'east', 'Vimala', 'Prajnanam Brahma', 'Rigveda', 'The eastern matha at Puri, associated with the Rigveda and the mahavakya Prajnanam Brahma.', 'govardhana-peetham')
on conflict (slug) do nothing;
