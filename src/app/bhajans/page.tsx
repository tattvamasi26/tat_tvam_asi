import Link from "next/link";
import Image from "next/image";
import { RiteArt } from "@/components/rituals/RiteArt";
import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { sectionsFor } from "@/i18n/sections";
import { bhajanStrings, finderLabels } from "@/i18n/bhajans";
import { bhajanGroups, bhajanCount, composerCounts } from "@/lib/bhajans";
import { bhajanGroup } from "@/lib/bhajans/groups";
import { groupImage } from "@/lib/bhajans/images";
import { getBhajans } from "@/lib/data";
import { isActive, readQuery, searchBhajans } from "@/lib/bhajans/search";
import { BhajanFinder } from "@/components/bhajan/BhajanFinder";
import { BhajanResults } from "@/components/bhajan/BhajanResults";

type Params = Record<string, string | string[] | undefined>;

// A search is a page of results, not a page of its own: it is not to
// be indexed, and it points search engines back at the front door.
export function generateMetadata({ searchParams }: { searchParams: Params }): Metadata {
  const base = {
    title: "Bhajans",
    description: "Kannada devotional songs — the padas of the Haridasas, arranged by devata.",
  };
  return isActive(readQuery(searchParams)) ? { ...base, robots: { index: false, follow: true }, alternates: { canonical: "/bhajans" } } : base;
}

/** How many results show before "Show more", and how many each press adds. */
const PAGE = 48;

/** A heading with a hairline running out to the count. */
function Head({ title, count }: { title: string; count?: string }) {
  return (
    <div className="bh-head">
      <h2>{title}</h2>
      <span className="bh-head-rule" aria-hidden="true" />
      {count && <span className="bh-head-count">{count}</span>}
    </div>
  );
}

/**
 * The front door.
 *
 * What this corpus is and what it lacks, then the gods the songs are
 * sung to, then the men who wrote them. The devata cards carry the
 * page: a reader who knows nothing about Haridasa poetry still knows
 * what Krishna and Ganesha are, and can start there.
 */
export default async function BhajansPage({ searchParams }: { searchParams: Params }) {
  const { locale } = getTranslations();
  const section = sectionsFor(locale).find((s) => s.id === "bhajans")!;
  const b = bhajanStrings(locale);
  const groups = bhajanGroups(locale);
  const composers = composerCounts(locale);
  const elsewhere = getBhajans(locale);
  const total = bhajanCount().toLocaleString("en-IN");

  // Finding a song. The filters' counts are computed even when nothing
  // is asked, so each option says how many songs it holds.
  const query = readQuery(searchParams);
  const active = isActive(query);
  const results = await searchBhajans(query, locale);
  const shown = Math.min(Math.max(PAGE, Number(searchParams.n) || PAGE), 2000);
  const more = new URLSearchParams();
  for (const [k, val] of Object.entries(query)) if (val) more.set(k, val === true ? "1" : String(val));
  more.set("n", String(shown + PAGE));

  const devatas = groups.filter((g) => g.kind === "devata");
  const others = groups.filter((g) => g.kind !== "devata");

  const card = (g: (typeof groups)[number]) => {
    const pic = groupImage(g.id);
    const local = bhajanGroup(g.id)!.name.kn;
    return (
      <li key={g.id}>
        <Link href={`/bhajans/${g.id}`} className="bh-card" data-kind={g.kind}>
          <div className="bh-card-frame">
            {pic ? (
              <Image
                src={pic.src}
                alt={pic.alt[locale]}
                fill
                sizes="(max-width: 700px) 50vw, 210px"
                style={{ objectFit: "cover", objectPosition: pic.position }}
              />
            ) : g.id === "niti" ? (
              /* The songs addressed to the mind have no devata to show;
                 the site's drawing of the tambura and cymbals stands in. */
              <RiteArt art="bhajan-niti" label={g.name} />
            ) : (
              /* No picture is a designed state, not an empty frame:
                 the name stands in its place, as it does for a temple
                 with no free photograph. */
              <p className="bh-plate kannada" lang="kn">
                {local}
              </p>
            )}
          </div>
          <div className="bh-card-body">
            <p className="bh-card-name">{g.name}</p>
            {locale !== "kn" && (
              <span className="bh-card-local kannada" lang="kn">
                {local}
              </span>
            )}
            <span className="bh-card-count">
              {g.count.toLocaleString("en-IN")} {g.count === 1 ? b.songsOne : b.songsMany}
            </span>
          </div>
        </Link>
      </li>
    );
  };

  return (
    <>
      <section className="pagehead">
        <div className="shell pagehead-inner">
          <p className="eyebrow">{section.label}</p>
          <h1 className="title">{section.label}</h1>
          <p className="lede">{b.lede}</p>
        </div>
      </section>

      <section className="shell stack-lg bh-page" style={{ paddingTop: 0 }}>
        <div className="bh-find-block">
          <Head title={b.findTitle} />
          <p className="bh-note">{b.findLede}</p>
          <BhajanFinder
            live
            values={{
              q: query.q ?? "",
              devata: query.devata ?? "",
              composer: query.composer ?? "",
              form: query.form ?? "",
              listen: !!query.listen,
            }}
            options={{
              devata: results.facets.devata,
              composer: results.facets.composer.map((o) => (o.value === "none" ? { ...o, label: b.unsigned } : o)),
              form: results.facets.form,
            }}
            listenCount={results.facets.listen}
            labels={finderLabels(b)}
          />
          {active && <BhajanResults results={results} locale={locale} shown={shown} moreHref={`/bhajans?${more}#results`} />}
        </div>

        {/* What the corpus is and what it lacks: on the front door always. */}
        <div className="bh-standing">
          <p className="bh-standing-count">{b.corpusNote(total)}</p>
          <p className="bh-standing-text">{b.noMeaning}</p>
          <p className="bh-standing-source">{b.fromSource}</p>
        </div>

        {/* Browsing, when nothing is being searched for. */}
        {!active && (
          <>
            <Head title={b.byDevata} count={`${devatas.length}`} />
            <ul className="bh-grid">{devatas.map(card)}</ul>

            {others.length > 0 && <ul className="bh-grid">{others.map(card)}</ul>}

            {/* The Haridasas. A song is filed under its devata, but it is
                signed by its composer — and the signature sits inside the
                text, which makes it the one attribution here a reader can
                check for themselves. */}
            <Head title={b.byComposer} count={`${composers.length}`} />
            <ul className="bh-dasas">
              {composers.map((c) => (
                <li key={c.id}>
                  {/* Each Haridasa leads to his songs: the search, filtered to him. */}
                  <Link href={`/bhajans?composer=${c.id}#results`} className="bh-dasa" aria-label={b.songsBy(c.name)}>
                    <span className="bh-dasa-name">{c.name}</span>
                    <span className="bh-dasa-when">{c.when}</span>
                    <span className="bh-dasa-ankita kannada" lang="kn">
                      {c.ankita}
                    </span>
                    <span className="bh-dasa-count">
                      {c.count.toLocaleString("en-IN")} {c.count === 1 ? b.songsOne : b.songsMany}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* The four bhajans that were here before this corpus arrived.
                Not Kannada and not Haridasa, so they keep their own place
                rather than being folded in. */}
            {elsewhere.length > 0 && (
              <>
                <Head title={b.alsoSung} />
                <p className="bh-note">{b.alsoSungNote}</p>
                <ul className="bh-elsewhere">
                  {elsewhere.map((x) => (
                    <li key={x.id} className="bh-elsewhere-row">
                      <span className="bh-elsewhere-name">{x.name}</span>
                      {/* A Gujarati song, a Hindi āratī, a Sanskrit stotra: each
                          title as it is written, in Devanagari on every page,
                          and marked so — it is not Sanskrit to be converted. */}
                      <span className="bh-elsewhere-sanskrit deva" lang="und-Deva">
                        {x.nameSanskrit}
                      </span>
                      <span className="bh-elsewhere-summary">{x.summary}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </>
        )}
      </section>
    </>
  );
}
