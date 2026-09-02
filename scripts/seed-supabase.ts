/**
 * Push the local seed data in src/lib/seed/* to a live Supabase project.
 *
 *   npm run seed          # insert missing rows, leave existing ones alone
 *   npm run seed -- --reset   # delete seeded content first, then insert
 *
 * Requires NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in
 * .env.local (the service-role key bypasses RLS, which insert needs).
 *
 * The local rows use readable string ids ("te-shankara"); Postgres uses
 * uuid defaults. This script therefore inserts each parent, reads back
 * the generated uuid, and rewrites child foreign keys through `idMap`
 * before inserting them — so the same data lands correctly whether it
 * is read from disk or from the database.
 */
import { readFileSync } from "node:fs";
import { createClient } from "@supabase/supabase-js";

import { SOURCES } from "../src/lib/seed/sources";
import { TEXTS, TEXT_TRANSLATIONS } from "../src/lib/seed/texts";
import {
  VERSES as STANDALONE_VERSES,
  VERSE_TRANSLATIONS as STANDALONE_TRANSLATIONS,
  VERSE_NOTES as STANDALONE_NOTES,
} from "../src/lib/seed/verses";
// Importing these runs each text's registerText() side effect, which is
// what puts it in the registry below. A text that is not imported here
// exists on disk but never reaches Postgres.
import "../src/lib/seed/isha";
import "../src/lib/seed/mandukya";
import "../src/lib/seed/kena";
import { allReadableRows } from "../src/lib/seed/upanishads";
import { TEACHERS, TEACHER_TRANSLATIONS } from "../src/lib/seed/teachers";
import { TEMPLES, TEMPLE_TRANSLATIONS } from "../src/lib/seed/temples";
import { CONCEPTS, CONCEPT_TRANSLATIONS } from "../src/lib/seed/concepts";
import { MATHAS, MATHA_TRANSLATIONS } from "../src/lib/seed/mathas";

/**
 * verses.ts holds the curated standalone verses that /verses browses;
 * isha.ts holds a complete text read verse-by-verse. They are separate
 * collections on the site for good reason, but Postgres wants one
 * `verses` table, so they are concatenated here rather than merged
 * upstream — which would have put nineteen Isha verses into the
 * standalone browse list.
 */
// Every registered text, not a hand-maintained list — adding the next
// Upanishad is one import line above and nothing else.
const readable = allReadableRows();

const VERSES = [...STANDALONE_VERSES, ...readable.verses];
const VERSE_TRANSLATIONS = [...STANDALONE_TRANSLATIONS, ...readable.translations];
const VERSE_NOTES = [...STANDALONE_NOTES, ...readable.notes];

// ── env ─────────────────────────────────────────────────────
function loadEnv() {
  try {
    for (const line of readFileSync(".env.local", "utf8").split("\n")) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
      if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
    }
  } catch {
    // No .env.local — fall back to real environment variables.
  }
}
loadEnv();

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) {
  console.error(
    "Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.\n" +
      "Copy .env.local.example to .env.local and fill it in — see README.md."
  );
  process.exit(1);
}

const db = createClient(url, key, { auth: { persistSession: false } });
const reset = process.argv.includes("--reset");

/** local string id → Postgres uuid */
const idMap = new Map<string, string>();

function strip<T extends { id: string }>(row: T) {
  const { id: _local, ...rest } = row;
  return rest;
}

/**
 * The base tables predate the translation tables, so several of their
 * columns (temples.name, mathas.location, …) are still NOT NULL. The
 * `extra` callback supplies those from the English translation row, so
 * the legacy columns stay populated and readable in the Supabase table
 * editor while the per-language text lives in *_translations.
 */
async function insertParents<T extends { id: string; slug?: string }>(
  table: string,
  rows: T[],
  matchOn: (r: T) => Record<string, string>,
  extra?: (r: T) => Record<string, unknown>,
  /**
   * Rewrites the payload entirely. `extra` can only ADD columns, which is
   * no use when a local column has to be RENAMED to match the table —
   * `texts` stores title_sanskrit where the seed row says name_sanskrit,
   * and sending the local name is rejected as an unknown column.
   */
  transform?: (payload: Record<string, unknown>, r: T) => Record<string, unknown>
) {
  for (const row of rows) {
    const filter = matchOn(row);
    const { data: existing } = await db.from(table).select("id").match(filter).maybeSingle();
    if (existing) {
      idMap.set(row.id, existing.id);
      continue;
    }
    let payload: Record<string, unknown> = {
      ...strip(row),
      ...(extra ? extra(row) : {}),
    };
    if (transform) payload = transform(payload, row);
    const { data, error } = await db.from(table).insert(payload).select("id").single();
    if (error) throw new Error(`${table}: ${error.message}`);
    idMap.set(row.id, data.id);
  }
  console.log(`  ${table.padEnd(22)} ${rows.length} row(s)`);
}

/** The English row for a parent, used to fill the legacy NOT NULL columns. */
function english<T extends { language: string }>(rows: T[], fk: string, id: string, field: keyof T) {
  const row = rows.find((r) => (r as Record<string, unknown>)[fk] === id && r.language === "en");
  return row?.[field];
}

async function insertChildren<T extends object>(table: string, rows: T[], fkField: string) {
  const mapped = rows.map((r) => {
    const local = (r as Record<string, unknown>)[fkField] as string;
    const parent = idMap.get(local);
    if (!parent) throw new Error(`${table}: no uuid mapped for ${local}`);
    return { ...(r as Record<string, unknown>), [fkField]: parent };
  });
  const { error } = await db
    .from(table)
    .upsert(mapped as never, { onConflict: `${fkField},language` });
  if (error) throw new Error(`${table}: ${error.message}`);
  console.log(`  ${table.padEnd(22)} ${mapped.length} row(s)`);
}

async function main() {
  if (reset) {
    console.log("Resetting seeded content…");
    // Children first — foreign keys cascade, but being explicit keeps
    // the order obvious to anyone reading this later.
    for (const t of [
      "verse_notes", "translations", "verses", "text_translations", "texts",
      "teacher_translations", "teachers", "temple_translations", "temples",
      "concept_translations", "concepts", "matha_translations", "mathas", "sources",
    ]) {
      const { error } = await db.from(t).delete().neq("id", "00000000-0000-0000-0000-000000000000");
      if (error) console.warn(`  skipped ${t}: ${error.message}`);
    }
  }

  console.log("Seeding…");
  await insertParents("sources", SOURCES, (r) => ({ work_title: r.work_title }));
  // `texts` predates the translation tables: it still has NOT NULL
  // title_sanskrit / title_iast / title_en on the base row, while the seed
  // keeps names in text_translations. Map the two Sanskrit columns across
  // and fill title_en from the English translation so the row is valid and
  // stays readable in the Supabase table editor.
  await insertParents(
    "texts",
    TEXTS,
    (r) => ({ slug: r.slug }),
    undefined,
    (payload, r) => {
      const { name_sanskrit, name_iast, ...rest } = payload as Record<string, unknown>;
      return {
        ...rest,
        title_sanskrit: name_sanskrit,
        title_iast: name_iast,
        title_en: english(TEXT_TRANSLATIONS, "text_id", r.id, "name") ?? name_iast,
      };
    }
  );
  await insertChildren("text_translations", TEXT_TRANSLATIONS, "text_id");

  // Verses carry a text_id that must be remapped before insert.
  for (const v of VERSES) {
    const textUuid = idMap.get(v.text_id);
    if (!textUuid) throw new Error(`verses: no uuid for ${v.text_id}`);
    const { data: existing } = await db
      .from("verses").select("id").match({ text_id: textUuid, locator: v.locator }).maybeSingle();
    if (existing) {
      idMap.set(v.id, existing.id);
      continue;
    }
    const { data, error } = await db
      .from("verses").insert({ ...strip(v), text_id: textUuid }).select("id").single();
    if (error) throw new Error(`verses: ${error.message}`);
    idMap.set(v.id, data.id);
  }
  console.log(`  ${"verses".padEnd(22)} ${VERSES.length} row(s)`);

  // Translations need both verse_id and source_id remapped.
  const translations = VERSE_TRANSLATIONS.map((t) => ({
    ...t,
    verse_id: idMap.get(t.verse_id),
    source_id: idMap.get(t.source_id),
  }));
  const { error: trErr } = await db
    .from("translations").upsert(translations, { onConflict: "verse_id,language" });
  if (trErr) throw new Error(`translations: ${trErr.message}`);
  console.log(`  ${"translations".padEnd(22)} ${translations.length} row(s)`);

  await insertChildren("verse_notes", VERSE_NOTES, "verse_id");

  await insertParents("teachers", TEACHERS, (r) => ({ slug: r.slug }), (r) => ({
    name: english(TEACHER_TRANSLATIONS, "teacher_id", r.id, "name"),
    era: english(TEACHER_TRANSLATIONS, "teacher_id", r.id, "era"),
    tradition: english(TEACHER_TRANSLATIONS, "teacher_id", r.id, "tradition"),
    biography: english(TEACHER_TRANSLATIONS, "teacher_id", r.id, "biography"),
    quote: english(TEACHER_TRANSLATIONS, "teacher_id", r.id, "quote"),
    key_works: english(TEACHER_TRANSLATIONS, "teacher_id", r.id, "key_works"),
  }));
  await insertChildren("teacher_translations", TEACHER_TRANSLATIONS, "teacher_id");

  await insertParents("temples", TEMPLES, (r) => ({ slug: r.slug }), (r) => ({
    name: english(TEMPLE_TRANSLATIONS, "temple_id", r.id, "name"),
    location: english(TEMPLE_TRANSLATIONS, "temple_id", r.id, "location"),
    state: english(TEMPLE_TRANSLATIONS, "temple_id", r.id, "state"),
    dynasty: english(TEMPLE_TRANSLATIONS, "temple_id", r.id, "dynasty"),
    architecture_style: english(TEMPLE_TRANSLATIONS, "temple_id", r.id, "architecture_style"),
    presiding_deity: english(TEMPLE_TRANSLATIONS, "temple_id", r.id, "presiding_deity"),
    description: english(TEMPLE_TRANSLATIONS, "temple_id", r.id, "description"),
    significance: english(TEMPLE_TRANSLATIONS, "temple_id", r.id, "significance"),
  }));
  await insertChildren("temple_translations", TEMPLE_TRANSLATIONS, "temple_id");

  await insertParents("concepts", CONCEPTS, (r) => ({ slug: r.slug }), (r) => ({
    term_en: english(CONCEPT_TRANSLATIONS, "concept_id", r.id, "term"),
    definition: english(CONCEPT_TRANSLATIONS, "concept_id", r.id, "definition"),
    detailed_explanation: english(CONCEPT_TRANSLATIONS, "concept_id", r.id, "detailed_explanation"),
  }));
  await insertChildren("concept_translations", CONCEPT_TRANSLATIONS, "concept_id");

  await insertParents("mathas", MATHAS, (r) => ({ slug: r.slug }), (r) => ({
    name: english(MATHA_TRANSLATIONS, "matha_id", r.id, "name"),
    location: english(MATHA_TRANSLATIONS, "matha_id", r.id, "location"),
    state: english(MATHA_TRANSLATIONS, "matha_id", r.id, "state"),
    presiding_deity: english(MATHA_TRANSLATIONS, "matha_id", r.id, "presiding_deity"),
    founded_by: english(MATHA_TRANSLATIONS, "matha_id", r.id, "founded_by"),
    description: english(MATHA_TRANSLATIONS, "matha_id", r.id, "description"),
  }));
  await insertChildren("matha_translations", MATHA_TRANSLATIONS, "matha_id");

  console.log("\nDone. Every translation row references a source; none is null.");
}

main().catch((e) => {
  console.error("\nSeed failed:", e.message);
  process.exit(1);
});
