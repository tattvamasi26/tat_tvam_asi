import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "@/i18n/server";
import { gitaStrings } from "@/i18n/gita";
import { getGitaChapter } from "@/lib/data";
import { chapterText, isChapterChecked } from "@/lib/gita";
import { GitaVerseBody } from "@/components/gita/GitaVerse";
import { GitaRecord } from "@/components/gita/GitaRecord";
import { LanguageChoice } from "@/components/content/LanguageChoice";
import { Arrow } from "@/components/ui/Arrow";

/**
 * One verse of the Gita — the place a verse is read on its own, and
 * where everything that belongs to one verse will gather.
 *
 * Set as the sukta and stotra pages are: the reader's head above, the
 * verse in one text card below, then the record of how this verse was
 * checked, narrowed to it.
 *
 * Only a checked chapter has verse pages; anything else 404s, as does
 * a segment that is not a number. No generateStaticParams: seven
 * hundred prerendered routes cost more build time than they are worth
 * on a page that renders per locale anyway.
 */

const parse = (s: string) => (/^\d+$/.test(s) ? Number(s) : NaN);

export function generateMetadata({ params }: { params: { chapter: string; verse: string } }): Metadata {
  return { title: `Bhagavad Gita ${params.chapter}.${params.verse}` };
}

export default async function GitaVersePage({ params }: { params: { chapter: string; verse: string } }) {
  const { locale, t } = getTranslations();
  const ch = parse(params.chapter);
  const n = parse(params.verse);
  if (!Number.isInteger(ch) || !Number.isInteger(n) || !isChapterChecked(ch)) notFound();

  const text = await chapterText(ch);
  const verse = text?.verses.find((v) => v.n === n);
  const chapter = getGitaChapter(ch, locale);
  if (!text || !verse || !chapter) notFound();

  const s = gitaStrings(locale);
  const total = text.verses.length;
  const at = text.verses.indexOf(verse);
  const previous = text.verses[at - 1];
  const next = text.verses[at + 1];
  const num = (x: number) => x.toLocaleString("en-IN");

  return (
    <div className="reader stotra-page">
      <header className="reader-head shell">
        <Link href={`/gita/${ch}`} className="reader-kicker">
          {s.labelChapter} {num(ch)} · {chapter.name}
        </Link>
        <h1 className="reader-title">{`${num(ch)}.${num(n)}`}</h1>
        <p className="reader-name">{s.verseOf.replace("{n}", num(n)).replace("{total}", num(total))}</p>
        <LanguageChoice current={locale} label={t.chooseLanguage} />
      </header>

      <section className="shell">
        <p className="gita-credit">
          {s.translationCredit} {s.translationNotYet}
        </p>
        <div className="stotra-text">
          <div className="stotra-verse gita-single">
            <span className="stotra-verse-num" aria-hidden="true">
              {num(n)}
            </span>
            <GitaVerseBody verse={verse} locale={locale} />
          </div>
        </div>

        <GitaRecord text={text} locale={locale} only={n} />

        <nav className="stotra-pager">
          {previous ? (
            <Link href={`/gita/${ch}/${previous.n}`} className="pager-link" data-dir="prev">
              <span className="pager-label">
                <Arrow dir="left" /> {s.previous}
              </span>
              <span className="pager-name">{`${num(ch)}.${num(previous.n)}`}</span>
            </Link>
          ) : (
            <Link href={`/gita/${ch}`} className="pager-link" data-dir="prev">
              <span className="pager-label">
                <Arrow dir="left" /> {s.allVerses}
              </span>
              <span className="pager-name">{chapter.name}</span>
            </Link>
          )}
          {next ? (
            <Link href={`/gita/${ch}/${next.n}`} className="pager-link" data-dir="next">
              <span className="pager-label">
                {s.next} <Arrow dir="right" />
              </span>
              <span className="pager-name">{`${num(ch)}.${num(next.n)}`}</span>
            </Link>
          ) : (
            <Link href={`/gita/${ch}#verses`} className="pager-link" data-dir="next">
              <span className="pager-label">
                {s.allVerses} <Arrow dir="right" />
              </span>
              <span className="pager-name">{chapter.name}</span>
            </Link>
          )}
        </nav>
      </section>
    </div>
  );
}
