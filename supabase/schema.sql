-- ============================================================
--  Tat Tvam Asi — Supabase Database Schema
--  Run this in: Supabase Dashboard → SQL Editor → New query
-- ============================================================

-- Enable UUID generation
create extension if not exists "uuid-ossp";

-- ── Upanishads ──────────────────────────────────────────
create table if not exists upanishads (
  id            uuid primary key default uuid_generate_v4(),
  name_sanskrit text not null,
  name_iast     text not null,
  name_en       text not null unique,
  veda          text not null check (veda in ('rigveda','samaveda','yajurveda','atharvaveda')),
  verse_count   int,
  summary       text,
  key_teaching  text,
  slug          text not null unique,
  created_at    timestamptz default now()
);

-- ── Verses / Shlokas ────────────────────────────────────
create table if not exists verses (
  id               uuid primary key default uuid_generate_v4(),
  sanskrit         text not null,
  transliteration  text not null,
  translation_en   text not null,
  translation_kn   text,
  commentary       text,
  source           text not null,
  chapter          text,
  upanishad_id     uuid references upanishads(id) on delete set null,
  tags             text[] default '{}',
  category         text not null default 'shruti'
                     check (category in ('advaita','shruti','smriti','temples','dharma','teachers')),
  is_mahavakya     boolean default false,
  created_at       timestamptz default now(),
  updated_at       timestamptz default now()
);

-- ── Teachers / Acharyas ─────────────────────────────────
create table if not exists teachers (
  id              uuid primary key default uuid_generate_v4(),
  name            text not null,
  name_sanskrit   text,
  birth_year      int,
  death_year      int,
  era             text,
  tradition       text not null default 'Advaita Vedanta',
  key_works       text[] default '{}',
  biography       text,
  quote           text,
  image_url       text,
  slug            text not null unique,
  created_at      timestamptz default now()
);

-- ── Concepts / Tattvas ──────────────────────────────────
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
                         check (category in ('advaita','shruti','smriti','temples','dharma','teachers')),
  slug                 text not null unique,
  created_at           timestamptz default now()
);

-- ── Temples ─────────────────────────────────────────────
create table if not exists temples (
  id                  uuid primary key default uuid_generate_v4(),
  name                text not null,
  name_local          text,
  location            text not null,
  state               text not null,
  dynasty             text,
  century_built       text,
  architecture_style  text,
  presiding_deity     text,
  description         text,
  significance        text,
  slug                text not null unique,
  created_at          timestamptz default now()
);

-- ── Temple Images ────────────────────────────────────────
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

-- ── Articles ─────────────────────────────────────────────
create table if not exists articles (
  id                    uuid primary key default uuid_generate_v4(),
  title                 text not null,
  slug                  text not null unique,
  excerpt               text,
  body                  text,
  category              text not null default 'advaita'
                          check (category in ('advaita','shruti','smriti','temples','dharma','teachers')),
  tags                  text[] default '{}',
  author                text,
  published_at          timestamptz default now(),
  updated_at            timestamptz default now(),
  reading_time_minutes  int default 5,
  is_featured           boolean default false
);

-- ── Mathas ───────────────────────────────────────────────
create table if not exists mathas (
  id                      uuid primary key default uuid_generate_v4(),
  name                    text not null,
  location                text not null,
  state                   text not null,
  founded_by              text not null,
  direction               text check (direction in ('north','south','east','west')),
  presiding_deity         text,
  mahavakya               text,
  veda                    text,
  current_shankaracharya  text,
  description             text,
  slug                    text not null unique
);

-- ── Tags ─────────────────────────────────────────────────
create table if not exists tags (
  id          uuid primary key default uuid_generate_v4(),
  name        text not null unique,
  slug        text not null unique,
  description text
);

-- ── Indexes for fast lookup ──────────────────────────────
create index if not exists idx_verses_category   on verses(category);
create index if not exists idx_verses_mahavakya  on verses(is_mahavakya);
create index if not exists idx_verses_tags       on verses using gin(tags);
create index if not exists idx_temples_state     on temples(state);
create index if not exists idx_temples_dynasty   on temples(dynasty);
create index if not exists idx_articles_category on articles(category);
create index if not exists idx_articles_featured on articles(is_featured);

-- Full-text search indexes
create index if not exists idx_verses_fts on verses
  using gin(to_tsvector('english', coalesce(translation_en,'') || ' ' || coalesce(source,'')));
create index if not exists idx_concepts_fts on concepts
  using gin(to_tsvector('english', coalesce(term_en,'') || ' ' || coalesce(definition,'')));

-- ── Row-Level Security ───────────────────────────────────
alter table upanishads  enable row level security;
alter table verses      enable row level security;
alter table teachers    enable row level security;
alter table concepts    enable row level security;
alter table temples     enable row level security;
alter table temple_images enable row level security;
alter table articles    enable row level security;
alter table mathas      enable row level security;
alter table tags        enable row level security;

-- Public read access for all tables
create policy "public read upanishads"   on upanishads   for select using (true);
create policy "public read verses"       on verses        for select using (true);
create policy "public read teachers"     on teachers      for select using (true);
create policy "public read concepts"     on concepts      for select using (true);
create policy "public read temples"      on temples       for select using (true);
create policy "public read temple_images" on temple_images for select using (true);
create policy "public read articles"     on articles      for select using (true);
create policy "public read mathas"       on mathas        for select using (true);
create policy "public read tags"         on tags          for select using (true);

-- ── Seed Data ────────────────────────────────────────────

-- Upanishads
insert into upanishads (name_sanskrit, name_iast, name_en, veda, verse_count, summary, key_teaching, slug) values
('माण्डूक्य उपनिषद्', 'Māṇḍūkya Upaniṣad', 'Mandukya Upanishad', 'atharvaveda', 12,
  'The shortest yet most profound Upanishad, expounding the nature of Om and the four states of consciousness.',
  'Ayam Atma Brahma — This Self is Brahman', 'mandukya-upanishad'),
('छान्दोग्य उपनिषद्', 'Chāndogya Upaniṣad', 'Chandogya Upanishad', 'samaveda', 628,
  'One of the oldest Upanishads, containing the famous teaching of Tat Tvam Asi and the nature of Brahman.',
  'Tat Tvam Asi — Thou Art That', 'chandogya-upanishad'),
('बृहदारण्यक उपनिषद्', 'Bṛhadāraṇyaka Upaniṣad', 'Brihadaranyaka Upanishad', 'yajurveda', 435,
  'The largest Upanishad, rich with dialogues between Yajnavalkya and Maitreyi on the nature of Self.',
  'Aham Brahmasmi — I am Brahman', 'brihadaranyaka-upanishad'),
('ऐतरेय उपनिषद्', 'Aitareya Upaniṣad', 'Aitareya Upanishad', 'rigveda', 33,
  'Expounds the nature of Brahman as pure consciousness (Prajnanam Brahma).',
  'Prajnanam Brahma — Consciousness is Brahman', 'aitareya-upanishad'),
('केन उपनिषद्', 'Kena Upaniṣad', 'Kena Upanishad', 'samaveda', 35,
  'Explores the nature of Brahman as that which cannot be known by the ordinary mind.',
  'That which is not thought by the mind, but by which the mind thinks — that is Brahman', 'kena-upanishad');

-- Mahavakyas (The Four Great Sayings)
insert into verses (sanskrit, transliteration, translation_en, source, chapter, category, is_mahavakya, tags) values
('प्रज्ञानं ब्रह्म', 'Prajñānaṃ Brahma', 'Consciousness is Brahman', 'Aitareya Upanishad', '3.3', 'advaita', true, ARRAY['mahavakya','brahman','consciousness','rigveda']),
('अहं ब्रह्मास्मि', 'Ahaṃ Brahmāsmi', 'I am Brahman', 'Brihadaranyaka Upanishad', '1.4.10', 'advaita', true, ARRAY['mahavakya','brahman','atman','yajurveda']),
('तत्त्वमसि', 'Tat Tvam Asi', 'Thou Art That', 'Chandogya Upanishad', '6.8.7', 'advaita', true, ARRAY['mahavakya','brahman','atman','samaveda']),
('अयमात्मा ब्रह्म', 'Ayam Ātmā Brahma', 'This Self is Brahman', 'Mandukya Upanishad', '1.2', 'advaita', true, ARRAY['mahavakya','brahman','atman','atharvaveda']);

-- More verses
insert into verses (sanskrit, transliteration, translation_en, source, chapter, category, is_mahavakya, tags) values
('सर्वं खल्विदं ब्रह्म', 'Sarvaṃ Khalvidaṃ Brahma', 'All this is verily Brahman', 'Chandogya Upanishad', '3.14.1', 'advaita', false, ARRAY['brahman','non-duality','existence']),
('एकमेवाद्वितीयम्', 'Ekam Evādvitīyam', 'One only, without a second', 'Chandogya Upanishad', '6.2.1', 'advaita', false, ARRAY['non-duality','brahman','oneness']),
('नेति नेति', 'Neti Neti', 'Not this, not this — the method of negation to arrive at Brahman', 'Brihadaranyaka Upanishad', '2.3.6', 'advaita', false, ARRAY['brahman','inquiry','neti-neti','method']);

-- Teachers
insert into teachers (name, name_sanskrit, birth_year, death_year, era, tradition, key_works, biography, quote, slug) values
('Adi Shankaracharya', 'आदि शङ्कराचार्य', 788, 820, '8th century CE', 'Advaita Vedanta',
  ARRAY['Brahmasutra Bhashya','Vivekachudamani','Upadeshasahasri','Bhagavad Gita Bhashya','Aparokshanubhuti'],
  'Born in Kaladi, Kerala, Shankaracharya consolidated and systematised the doctrine of Advaita Vedanta. He established four Mathas across India, wrote extensive commentaries on the Prasthanatrayi, and revived Hinduism from the ground up — all before the age of 32.',
  'Brahma satyam jagan mithya, jivo brahmaiva naparah — Brahman alone is real, the world is appearance, the individual self is none other than Brahman.',
  'adi-shankaracharya'),
('Ramana Maharshi', 'रमण महर्षि', 1879, 1950, '19th–20th century CE', 'Advaita Vedanta',
  ARRAY['Who am I?','Forty Verses on Reality','Upadesa Saram'],
  'At age 16, Ramana Maharshi underwent a spontaneous experience of death and Self-realisation in Madurai. He settled at the foot of Arunachala, where he taught largely through silence. His method — self-enquiry through the question ''Who am I?'' — is regarded as one of the most direct paths to liberation.',
  'The degree of freedom from unwanted thoughts and the degree of concentration on a single thought are the measures to gauge spiritual progress.',
  'ramana-maharshi'),
('Nisargadatta Maharaj', 'निसर्गदत्त महाराज', 1897, 1981, '20th century CE', 'Advaita Vedanta',
  ARRAY['I Am That','Prior to Consciousness','Seeds of Consciousness'],
  'A humble Mumbai bidi-maker who attained Self-realisation through the instruction of his guru Siddharameshwar Maharaj. His dialogues, compiled in ''I Am That'', are considered among the most direct and uncompromising expositions of Advaita in the modern era.',
  'Love says ''I am everything''. Wisdom says ''I am nothing''. Between the two, my life flows.',
  'nisargadatta-maharaj');

-- Concepts
insert into concepts (term_sanskrit, term_iast, term_en, definition, detailed_explanation, category, slug) values
('ब्रह्मन्', 'Brahman', 'Brahman', 'The ultimate, infinite, unchanging reality underlying all existence.', 'In Advaita Vedanta, Brahman is the sole reality — infinite, eternal, and self-luminous consciousness. It is described as Sat-Chit-Ananda: pure being, pure consciousness, pure bliss. Everything that appears as the world is Brahman alone, like waves in the ocean.', 'advaita', 'brahman'),
('आत्मन्', 'Ātman', 'Atman', 'The individual Self, which Advaita holds to be identical with Brahman.', 'Atman is the witness-consciousness within every being. Unlike the ego or mind, Atman is unborn, undying, and unchanging. The central teaching of Advaita is that the apparent individual self (jiva) is, in its deepest nature, none other than Brahman.', 'advaita', 'atman'),
('माया', 'Māyā', 'Maya', 'The cosmic creative power that causes the appearance of multiplicity in the one Brahman.', 'Maya is neither real nor unreal — it is the inexplicable power (shakti) of Brahman by which the infinite appears as the finite world. It operates through two functions: avarana (veiling of Brahman) and viksepa (projection of the world). Maya dissolves upon Self-knowledge.', 'advaita', 'maya'),
('अद्वैत', 'Advaita', 'Non-duality', 'The philosophical position that reality is one, without a second.', 'Advaita (a + dvaita = not two) is the conclusion of Vedantic inquiry: that Brahman, Atman, and the world are not three different things but one undivided reality. The diversity of appearances is due to Maya (cosmic illusion), not to any real difference in the substrate.', 'advaita', 'advaita'),
('मोक्ष', 'Mokṣa', 'Liberation', 'Freedom from the cycle of birth and death through Self-realisation.', 'Moksha in Advaita is not a state to be achieved but the recognition of what already is. It is the direct knowing that one has never been bound — that the Self is always free. This recognition dissolves the false identification with body and mind that constitutes bondage.', 'advaita', 'moksha'),
('विवेक', 'Viveka', 'Discrimination', 'The faculty of discernment between the real (Brahman) and the unreal (world-appearance).', 'Viveka is the first qualification for Vedantic inquiry. It is the capacity to clearly distinguish between what is eternal and what is transient, between consciousness itself and the objects that appear in it. Without viveka, liberation is not possible.', 'advaita', 'viveka');

-- Temples
insert into temples (name, name_local, location, state, dynasty, century_built, architecture_style, presiding_deity, description, significance, slug) values
('Brihadeeswarar Temple', 'பெரிய கோயில்', 'Thanjavur', 'Tamil Nadu', 'Chola', '11th century CE', 'Dravidian',
  'Shiva (Brihadeeswara)', 'Built by Raja Raja Chola I, this UNESCO World Heritage Site towers 66 metres with a vimana made of a single 80-tonne granite capstone — raised without modern machinery.', 'The temple demonstrates the Chola understanding that the temple is a model of Mount Meru — the axis of the cosmos. The garbhagriha represents the cave of the heart.', 'brihadeeswarar-temple'),
('Kailasa Temple', 'कैलास मंदिर', 'Ellora', 'Maharashtra', 'Rashtrakuta', '8th century CE', 'Rock-cut',
  'Shiva (Kailashanatha)', 'Carved from a single basalt cliff, the Kailasa Temple at Ellora is the largest monolithic structure in the world. An estimated 200,000 tonnes of rock were removed by hand over several decades.', 'The temple is a three-dimensional mandala — a sacred diagram of the cosmos carved into the living rock of the earth itself.', 'kailasa-temple-ellora'),
('Meenakshi Amman Temple', 'மீனாக்ஷி அம்மன் கோவில்', 'Madurai', 'Tamil Nadu', 'Nayak', '17th century CE', 'Dravidian',
  'Meenakshi (Parvati)', 'One of the largest temple complexes in India, with 14 gopurams (gateway towers) covered in thousands of painted sculptures. The innermost sanctum enshrines the goddess Meenakshi.', 'This temple encodes the entire cosmos in its plan — the 64 sacred games of Shiva are depicted in its corridors, making it a living scripture in stone.', 'meenakshi-amman-temple'),
('Konark Sun Temple', 'कोणार्क', 'Konark', 'Odisha', 'Eastern Ganga', '13th century CE', 'Kalinga',
  'Surya (Sun God)', 'Designed as a colossal chariot of the sun god, with 24 intricately carved wheels functioning as sundials. A masterpiece of Odishan architecture.', 'The temple demonstrates the Vedic understanding of time as the chariot of the sun. The 24 wheels correspond to the 24 hours, and the 8 spokes to the eight praharas of the day.', 'konark-sun-temple'),
('Virupaksha Temple', 'ವಿರೂಪಾಕ್ಷ ದೇವಾಲಯ', 'Hampi', 'Karnataka', 'Vijayanagara', '7th century CE', 'Dravidian',
  'Shiva (Virupaksha)', 'One of the oldest functioning temples in India, continuously worshipped for over 1,300 years. At the centre of the magnificent Vijayanagara Empire ruins.', 'The temple is the living heart of Hampi — its continuous worship across dynasties, invasions, and centuries is itself a testament to the indestructible nature of Dharma.', 'virupaksha-temple-hampi');

-- Mathas (Four Amnaya Peethas of Shankaracharya)
insert into mathas (name, location, state, founded_by, direction, presiding_deity, mahavakya, veda, description, slug) values
('Sringeri Sharada Peetham', 'Sringeri', 'Karnataka', 'Adi Shankaracharya', 'south', 'Sharadamba', 'Aham Brahmasmi', 'Yajurveda', 'The southern matha, established on the banks of the Tunga river in Karnataka. It is the seat of the Dakshinamnaya tradition and maintains the Yajurveda.', 'sringeri-sharada-peetham'),
('Dwarka Sharada Peetham', 'Dwarka', 'Gujarat', 'Adi Shankaracharya', 'west', 'Siddheshwari', 'Tat Tvam Asi', 'Samaveda', 'The western matha at Dwarka, associated with the Samaveda and the mahavakya Tat Tvam Asi.', 'dwarka-sharada-peetham'),
('Jyotirmath', 'Joshimath', 'Uttarakhand', 'Adi Shankaracharya', 'north', 'Narayana', 'Ayam Atma Brahma', 'Atharvaveda', 'The northern matha in the Himalayas, near Badrinath. Associated with the Atharvaveda and the mahavakya Ayam Atma Brahma.', 'jyotirmath'),
('Govardhana Peetham', 'Puri', 'Odisha', 'Adi Shankaracharya', 'east', 'Vimala', 'Prajnanam Brahma', 'Rigveda', 'The eastern matha at Puri, associated with the Rigveda and the mahavakya Prajnanam Brahma.', 'govardhana-peetham');
