import type { Locale } from "@/i18n/config";
import type { CorpusStotraPage } from "@/lib/data";
import { scanUrl } from "@/lib/stotra-corpus";
import { scriptFor, scriptClass } from "@/lib/script";
import { stotraCorpusStrings } from "@/i18n/stotra-corpus";
import { Arrow } from "@/components/ui/Arrow";

/**
 * A stotra from the collection: the whole text in one column, as the
 * hand-entered stotras are set (StotraText), but with no meaning to
 * open — none is written — and, below it, the record of how the text
 * was checked: the edition and its pages, every correction made from
 * the scan, and every place the book's own reading was kept.
 *
 * The record is shown as data (verse, reading, page) with the labels in
 * the reader's language, so it reads the same in all three.
 */
export function EditionText({
  page,
  locale,
  labels,
}: {
  page: CorpusStotraPage;
  locale: Locale;
  labels: { verse: string; showIast: boolean };
}) {
  const s = stotraCorpusStrings(locale);
  const sc = scriptClass(locale);
  const { stotra, edition, verses } = page;
  const pages = stotra.edition.printedPages;
  const sa = (text: string) => <span className={`edition-sa ${sc}`}>{scriptFor(text, locale)}</span>;
  const pageRef = (p: number) => `${s.pageAbbr} ${p}`;
  const checked = new Date(stotra.checkedOn).toLocaleDateString(`${locale}-IN`, { dateStyle: "long" });

  return (
    <>
      <section className="stotra-text">
        <ol className="stotra-verses">
          {verses.map((v, i) => (
            // Keyed by place: a book may leave some verses unnumbered.
            <li key={i} id={v.n ? `v${v.n}` : undefined} className="stotra-verse">
              <span className="stotra-verse-num" aria-label={v.n ? `${labels.verse} ${v.n}` : undefined}>
                {v.n}
              </span>
              <div className="stotra-verse-body">
                <div className={`stotra-verse-mula ${sc}`}>
                  {v.sanskrit.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
                {labels.showIast && (
                  <div className="stotra-verse-iast translit">
                    {v.iast.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* The record is for whoever wants it; a reader sees one line.
          Closed by default, so it never stands between them and the text. */}
      <details className="edition-notes">
        <summary>
          <span className="edition-summary-line">
            {s.checkedLine} · {edition.title[locale]}, {s.pageAbbr}{" "}
            {pages.length > 1 ? `${pages[0]}–${pages.at(-1)}` : pages[0]}
          </span>
          <span className="edition-summary-open">{s.editionTitle}</span>
        </summary>
        <p>
          {sa(edition.titleSa)} · {edition.title[locale]}, {edition.detail[locale]}. {s.printedPages}:{" "}
          {pages.length > 1 ? `${pages[0]}–${pages.at(-1)}` : pages[0]}.
        </p>
        <p>{s.method}</p>
        {stotra.refrainExpanded && <p>{s.refrain}</p>}
        {stotra.spacingAdjusted && <p>{s.spacing}</p>}
        {stotra.reflowed && <p>{s.reflowed}</p>}

        {stotra.corrections.length > 0 && (
          <>
            <h3>{s.correctionsTitle}</h3>
            <ul>
              {stotra.corrections.map((c, i) => (
                <li key={i}>
                  {labels.verse} {c.verse}: {sa(c.from)} <Arrow /> {sa(c.to)} ({pageRef(c.page)}
                  {c.kind === "misprint" ? `, ${s.misprint}` : ""})
                </li>
              ))}
            </ul>
          </>
        )}

        {stotra.variants.length > 0 && (
          <>
            <h3>{s.variantsTitle}</h3>
            <ul>
              {stotra.variants.map((v, i) => (
                <li key={i}>
                  {labels.verse} {v.verse}:{" "}
                  {v.kind === "extra" ? (
                    <>
                      {s.witnessAdds} ({pageRef(v.page)})
                    </>
                  ) : v.kind === "order" ? (
                    <>
                      {s.witnessOrder} ({pageRef(v.page)})
                    </>
                  ) : v.reading ? (
                    <>
                      {sa(v.reading)} ({s.witnessHas} {v.witness ? sa(v.witness) : "—"}; {pageRef(v.page)})
                    </>
                  ) : (
                    <>
                      {s.witnessLacks} ({pageRef(v.page)})
                    </>
                  )}
                </li>
              ))}
            </ul>
          </>
        )}

        <ul className="edition-links">
          <li>
            <a href={edition.index} target="_blank" rel="noopener noreferrer">
              {s.scansLink}
            </a>
            {": "}
            {stotra.edition.scans.map((scan, i) => (
              <span key={scan.page}>
                {i > 0 && ", "}
                <a href={scanUrl(scan.wikisource)} target="_blank" rel="noopener noreferrer">
                  {pageRef(pages[i])}
                </a>
              </span>
            ))}{" "}
            · CC BY-SA 4.0
          </li>
          <li>
            <a href={stotra.witness} target="_blank" rel="noopener noreferrer">
              {s.witnessLink}
            </a>
          </li>
          <li>
            {s.checkedOn}: {checked}
          </li>
        </ul>
      </details>
    </>
  );
}
