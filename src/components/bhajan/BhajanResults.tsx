import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { BhajanResults as Results } from "@/lib/bhajans/search";
import { bhajanStrings } from "@/i18n/bhajans";
import { bhajanGroup, composerName, formName } from "@/lib/bhajans";

/**
 * The songs a search leaves, as the group pages list them (.bh-song),
 * with what a cross-group list needs that a group page does not: the
 * devata each song is filed under, and, when a song was found by a
 * line rather than its title, that line — so the reader can see why it
 * is here before opening it.
 */

// A stanza's number at the end of a line ("||೪||") is the source's
// layout, not the song.
const plainLine = (s: string) => s.replace(/\s*\|{1,2}\s*[೦-೯0-9]*\s*\|{0,2}\s*$/, "").trim();

export function BhajanResults({
  results,
  locale,
  shown,
  moreHref,
}: {
  results: Results;
  locale: Locale;
  shown: number;
  moreHref: string;
}) {
  const b = bhajanStrings(locale);
  const hits = results.hits.slice(0, shown);
  const total = results.total.toLocaleString("en-IN");

  return (
    <section className="bh-results" id="results" aria-labelledby="results-count">
      <p className="bh-results-count" id="results-count" role="status">
        {b.results(total)}
      </p>

      {results.total === 0 ? (
        <div className="bh-results-none">
          <p>{b.noResults}</p>
          <p>{b.noResultsHint}</p>
        </div>
      ) : (
        <ul className="bh-songs">
          {hits.map(({ row, line }) => {
            const composer = composerName(row.composer, locale);
            const group = bhajanGroup(row.devata);
            return (
              <li key={row.slug}>
                <Link href={`/bhajans/${row.devata}/${row.slug}`} className="bh-song">
                  <span className="bh-song-name kannada" lang="kn">
                    {row.titleKn}
                  </span>
                  {row.titleEn && <span className="bh-song-roman">{row.titleEn}</span>}
                  {line && (
                    <span className="bh-song-line">
                      <span className="bh-song-line-label">{b.foundInLine}</span>
                      <span className="kannada" lang="kn">
                        {plainLine(line)}
                      </span>
                    </span>
                  )}
                  <span className="bh-song-meta">
                    {group && <span className="chip bh-chip-devata">{group.name[locale]}</span>}
                    {composer && <span className="chip">{composer}</span>}
                    {row.form !== "song" && row.form !== "pada" && <span className="chip">{formName(row.form, locale)}</span>}
                    {row.hasVideo && <span className="chip chip-gold">{b.labelListen}</span>}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      )}

      {results.total > shown && (
        <p className="bh-results-more">
          <Link href={moreHref} scroll={false} className="btn-outline">
            {b.showMore}
          </Link>
        </p>
      )}
    </section>
  );
}
