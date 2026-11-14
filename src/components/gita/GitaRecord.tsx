import type { Locale } from "@/i18n/config";
import type { GitaChapterText } from "@/lib/gita";
import { GITA_EDITION, editionIndexUrl, scanPageUrl } from "@/lib/gita";
import { gitaStrings } from "@/i18n/gita";
import { scriptFor, scriptClass } from "@/lib/script";
import { Arrow } from "@/components/ui/Arrow";

/**
 * The record of how a chapter's text was checked, folded under one
 * line as the stotra collection's is (EditionText): the edition, the
 * method, every correction made from the scan with its page, and every
 * reading kept as the book prints it. Given `only`, it is narrowed to
 * one verse, for the verse's own page.
 *
 * The readings are data, so the record reads the same in all three
 * languages; only its labels change.
 */
export function GitaRecord({
  text,
  locale,
  only,
}: {
  text: GitaChapterText;
  locale: Locale;
  only?: number;
}) {
  const s = gitaStrings(locale);
  const sc = scriptClass(locale);
  const ref = (n: number) => `${text.chapter}.${n}`;
  const mine = (r: string) => only === undefined || r === ref(only);
  const verses = text.verses.filter((v) => only === undefined || v.n === only);
  const pages = [...new Map(verses.flatMap((v) => v.pages).map((p) => [p.n, p])).values()].sort((a, b) => a.n - b.n);
  const fixes = text.fixes.filter((f) => mine(f.ref));
  const sa = fixes.filter((f) => f.field === "mula");
  const en = fixes.filter((f) => f.field === "translation");
  const kept = text.kept.filter((k) => mine(k.ref));
  const sanskrit = (t: string) => <span className={`edition-sa ${sc}`}>{scriptFor(t, locale)}</span>;
  const when = new Date(text.checkedOn).toLocaleDateString(`${locale}-IN`, { dateStyle: "long" });

  return (
    <details className="edition-notes">
      <summary>
        <span className="edition-summary-line">
          {s.checkedLine} · Besant &amp; Bhagavan Das, {GITA_EDITION.year}
        </span>
        <span className="edition-summary-open">{s.recordOpen}</span>
      </summary>
      <p lang="en">
        <i>{GITA_EDITION.title}</i>. {GITA_EDITION.translators}. {GITA_EDITION.printer}, {GITA_EDITION.year}.
      </p>
      <p>{s.method}</p>
      <p>{s.englishMethod}</p>

      {sa.length > 0 && (
        <>
          <h3>{s.correctionsTitle}</h3>
          <ul>
            {sa.map((f, i) => (
              <li key={i}>
                {f.ref}: {sanskrit(f.from)} <Arrow /> {sanskrit(f.to)} ({s.pageAbbr} {f.page}
                {f.kind === "misprint" ? `, ${s.misprint}` : ""})
              </li>
            ))}
          </ul>
        </>
      )}
      {en.length > 0 && (
        <ul lang="en">
          {en.map((f, i) => (
            <li key={i}>
              {f.ref}: “{f.from.trim()}” <Arrow /> “{f.to.trim()}” ({s.pageAbbr} {f.page})
            </li>
          ))}
        </ul>
      )}

      {kept.length > 0 && (
        <>
          <h3>{s.keptTitle}</h3>
          <ul>
            {kept.map((k, i) => (
              <li key={i}>
                {k.ref}: {sanskrit(k.ours)} ({s.pageAbbr} {k.page}) <span lang="en">{k.note}</span>
              </li>
            ))}
          </ul>
        </>
      )}

      <ul className="edition-links">
        <li>
          <a href={editionIndexUrl()} target="_blank" rel="noopener noreferrer">
            {s.scansLink}
          </a>
          {": "}
          {pages.map((p, i) => (
            <span key={p.n}>
              {i > 0 && ", "}
              <a href={scanPageUrl(p.n, p.rev)} target="_blank" rel="noopener noreferrer">
                {s.pageAbbr} {p.n}
              </a>
            </span>
          ))}{" "}
          · CC BY-SA 4.0
        </li>
        <li>
          {s.checkedOn}: {when}
        </li>
      </ul>
    </details>
  );
}
