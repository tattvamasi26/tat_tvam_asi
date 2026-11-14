import type { Locale } from "@/i18n/config";
import type { BhajanSpineRow } from "./index";
import { allBhajans, bhajanGroups, songsIn, HARIDASAS, BHAJAN_GROUPS } from "./index";
import { FORM_NAMES } from "./groups";
import { fold } from "./fold";

// ─────────────────────────────────────────────────────────
//  Finding a song.
//
//  A reader rarely knows which devata a song is filed under. They know
//  a line — usually the first, sometimes one from the middle — or the
//  Haridasa who sang it, and they type it however they type Kannada:
//  in Kannada, or in roman letters spelled their own way. So the
//  search reads the titles, every line of every song and the
//  composers' names and signatures, all through fold(), which gives
//  ಕೃಷ್ಣ, krishna and krushna one key.
//
//  This runs on the server, inside the page that shows the results.
//  There is no search endpoint: the site has no public data API, and a
//  results page needs none (docs/SECURITY.md).
//
//  It is the one place that reads every group's texts, because a line
//  from the middle of a song can only be found by reading it. The index
//  is built once per server process, on the first search, and kept.
//  Pages still never import a texts file themselves.
// ─────────────────────────────────────────────────────────

interface Entry {
  row: BhajanSpineRow;
  /** The title, Kannada and roman, folded; and the same without spaces. */
  title: string;
  titleTight: string;
  /** Each line of the song as printed, and folded. */
  lines: { text: string; key: string; tight: string }[];
  /** The whole song folded, for words spread across lines. */
  body: string;
  /** Composer's names in all three languages, and the signature. */
  meta: string;
}

let INDEX: Promise<Entry[]> | null = null;

function buildIndex(): Promise<Entry[]> {
  return (async () => {
    const byGroup = new Map<string, Awaited<ReturnType<typeof songsIn>>>();
    await Promise.all(
      BHAJAN_GROUPS.map(async (g) => {
        byGroup.set(g.id, await songsIn(g.id));
      }),
    );
    const dasa = new Map(HARIDASAS.map((h) => [h.id, h]));
    return allBhajans().map((row) => {
      const text = byGroup.get(row.devata)?.find((s) => s.slug === row.slug);
      const raw = (text?.stanzas ?? []).flat().map((l) => l.trim()).filter(Boolean);
      const translit = (text?.transliteration ?? []).flat().join(" ");
      const lines = raw.map((l) => {
        const key = fold(l);
        return { text: l, key, tight: key.replace(/ /g, "") };
      });
      const title = fold(`${row.titleKn} ${row.titleEn}`);
      const h = row.composer ? dasa.get(row.composer) : undefined;
      return {
        row,
        title,
        titleTight: title.replace(/ /g, ""),
        lines,
        body: `${lines.map((l) => l.key).join(" ")} ${fold(translit)}`,
        meta: h ? fold(`${h.name.en} ${h.name.kn} ${h.ankita} ${text?.ankita ?? ""}`) : fold(text?.ankita ?? ""),
      };
    });
  })();
}

function index(): Promise<Entry[]> {
  if (!INDEX) INDEX = buildIndex().catch((e) => {
    INDEX = null;
    throw e;
  });
  return INDEX;
}

export interface BhajanQuery {
  q?: string;
  devata?: string;
  /** A Haridasa's id, or "none" for songs no Haridasa signed. */
  composer?: string;
  form?: string;
  /** Only songs with a recitation. */
  listen?: boolean;
}

export interface BhajanHit {
  row: BhajanSpineRow;
  score: number;
  /** The line that matched, as printed, when it is not the title. */
  line?: string;
}

export interface FacetOption {
  value: string;
  label: string;
  count: number;
}

export interface BhajanResults {
  hits: BhajanHit[];
  total: number;
  facets: { devata: FacetOption[]; composer: FacetOption[]; form: FacetOption[]; listen: number };
  /** The query as folded, empty when there is none. */
  key: string;
}

/** How well a song answers the query; 0 is not at all. */
function score(e: Entry, key: string): { score: number; line?: string } {
  const tight = key.replace(/ /g, "");
  const words = key.split(" ").filter(Boolean);
  if (e.titleTight.startsWith(tight)) return { score: 100 };
  if (e.titleTight.includes(tight)) return { score: 80 };
  if (words.every((w) => e.title.includes(w))) return { score: 65 };
  const i = e.lines.findIndex((l) => l.tight.includes(tight));
  if (i >= 0) return { score: i === 0 ? 60 : 45, line: i === 0 ? undefined : e.lines[i].text };
  if (words.every((w) => e.meta.includes(w))) return { score: 35 };
  if (words.every((w) => e.body.includes(w) || e.meta.includes(w))) {
    const near = e.lines.find((l) => l.key.includes(words[0]));
    return { score: 20, line: near?.text };
  }
  return { score: 0 };
}

const passes = (row: BhajanSpineRow, f: BhajanQuery, skip?: keyof BhajanQuery) =>
  (skip === "devata" || !f.devata || row.devata === f.devata) &&
  (skip === "composer" || !f.composer || (f.composer === "none" ? !row.composer : row.composer === f.composer)) &&
  (skip === "form" || !f.form || row.form === f.form) &&
  (skip === "listen" || !f.listen || row.hasVideo);

/** The songs a query and its filters leave, ranked, with what each filter would leave. */
export async function searchBhajans(f: BhajanQuery, locale: Locale): Promise<BhajanResults> {
  const key = fold(f.q ?? "");
  const searching = key.replace(/ /g, "").length >= 2;

  // The query is matched once; the filters are applied after, so each
  // filter's counts can say what it would leave given everything else.
  let matched: BhajanHit[];
  if (searching) {
    const entries = await index();
    matched = [];
    for (const e of entries) {
      const s = score(e, key);
      if (s.score > 0) matched.push({ row: e.row, score: s.score, line: s.line });
    }
  } else {
    matched = allBhajans().map((row) => ({ row, score: 0 }));
  }

  const collator = new Intl.Collator("kn");
  const hits = matched
    .filter((h) => passes(h.row, f))
    .sort((a, b) => b.score - a.score || collator.compare(a.row.titleKn, b.row.titleKn));

  const count = (skip: keyof BhajanQuery, test: (r: BhajanSpineRow) => boolean) =>
    matched.filter((h) => passes(h.row, f, skip) && test(h.row)).length;

  const devata = bhajanGroups(locale).map((g) => ({ value: g.id, label: g.name, count: count("devata", (r) => r.devata === g.id) }));
  const composer = [
    ...HARIDASAS.map((h) => ({ value: h.id, label: h.name[locale], count: count("composer", (r) => r.composer === h.id) })),
    { value: "none", label: "", count: count("composer", (r) => !r.composer) },
  ];
  const forms = [...new Set(allBhajans().map((r) => r.form))];
  const form = forms
    .map((v) => ({ value: v, label: FORM_NAMES[v]?.[locale] ?? v, count: count("form", (r) => r.form === v) }))
    .sort((a, b) => b.count - a.count);

  return {
    hits,
    total: hits.length,
    facets: { devata, composer, form, listen: count("listen", (r) => r.hasVideo) },
    key: searching ? key : "",
  };
}

/** Whether a query asks for anything; with nothing asked, the page browses instead. */
export function isActive(f: BhajanQuery): boolean {
  return !!((f.q ?? "").trim() || f.devata || f.composer || f.form || f.listen);
}

/** A query read from the page's search params, keeping only values that exist. */
export function readQuery(params: Record<string, string | string[] | undefined>): BhajanQuery {
  const one = (k: string) => {
    const v = params[k];
    return (Array.isArray(v) ? v[0] : v)?.trim() || undefined;
  };
  const q = one("q")?.slice(0, 120);
  const devata = one("devata");
  const composer = one("composer");
  const form = one("form");
  return {
    q,
    devata: devata && BHAJAN_GROUPS.some((g) => g.id === devata) ? devata : undefined,
    composer: composer && (composer === "none" || HARIDASAS.some((h) => h.id === composer)) ? composer : undefined,
    form: form && FORM_NAMES[form] ? form : undefined,
    listen: one("listen") === "1" || undefined,
  };
}
