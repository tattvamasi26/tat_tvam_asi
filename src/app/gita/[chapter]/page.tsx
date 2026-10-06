import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { gitaStrings } from "@/i18n/gita";
import { sectionsFor } from "@/i18n/sections";
import { getGitaChapter, getGitaChapters } from "@/lib/data";
import { GITA_CHAPTER_NOTES } from "@/lib/seed/gita-chapters";
import { scriptClass } from "@/lib/script";
import { Arrow } from "@/components/ui/Arrow";
import { LOCALES } from "@/i18n/config";

export function generateStaticParams() {
  return GITA_CHAPTER_NOTES.map((c) => ({ chapter: String(c.n) }));
}

export async function generateMetadata({
  params,
}: {
  params: { chapter: string };
}): Promise<Metadata> {
  const c = getGitaChapter(Number(params.chapter), LOCALES[0]);
  return c ? { title: `${c.name} — Gita`, description: c.lede } : { title: "Gita" };
}

/**
 * One chapter.
 *
 * No verses, by decision rather than omission — see the note on the
 * index. What a reader gets instead is what the chapter does, where
 * it turns, and where its own text is argued over, which is more than
 * a list of eighteen names was giving them.
 *
 * A non-numeric segment has to 404 rather than render an empty
 * chapter, the same rule the Rigveda's mandala and sukta segments
 * keep.
 */
export default function GitaChapterPage({ params }: { params: { chapter: string } }) {
  const { locale } = getTranslations();
  const n = Number(params.chapter);
  if (!Number.isInteger(n)) notFound();

  const s = gitaStrings(locale);
  const c = getGitaChapter(n, locale);
  if (!c) notFound();

  const sc = scriptClass(locale);
  const section = sectionsFor(locale).find((x) => x.id === "gita")!;
  const all = getGitaChapters(locale);
  const prev = n > 1 ? all[n - 2] : null;
  const next = n < all.length ? all[n] : null;

  return (
    <>
      <section className="pu-hero">
        <div className="shell pu-hero-inner">
          <Link href="/gita" className="pu-hero-back">
            <Arrow dir="left" /> {s.back}
          </Link>
          <p className="pu-hero-kicker">
            {s.labelChapter} {c.n.toLocaleString("en-IN")}
          </p>
          <h1 className="pu-hero-title">{c.name}</h1>
          <p className={`pu-hero-sanskrit ${sc}`}>{c.sanskrit}</p>
          <p className="pu-hero-lede">{c.lede}</p>
        </div>
      </section>

      <section className="shell pu-body">
        <div className="pu-facts">
          <div className="fact">
            <div className="fact-label">{s.labelChapter}</div>
            <div className="fact-value">{c.n.toLocaleString("en-IN")}</div>
          </div>
          <div className="fact">
            <div className="fact-label">{s.labelVerses}</div>
            <div className="fact-value">{c.verses.toLocaleString("en-IN")}</div>
          </div>
          <div className="fact">
            <div className="fact-label">{section.label}</div>
            <div className="fact-value" style={{ fontSize: "0.95rem" }}>
              {s.chaptersTitle}
            </div>
          </div>
        </div>

        <div className="pu-section">
          <h2 className="pu-h2">{s.labelArgument}</h2>
          <p>{c.argument}</p>
        </div>

        <div className="pu-section">
          <h2 className="pu-h2">{s.labelTurn}</h2>
          <p>{c.turn}</p>
        </div>

        {/* Only chapter 13 carries one, and it is the reason the
            eighteen add up to one more than seven hundred. */}
        {c.note && (
          <div className="pu-aside">
            <p className="fact-label">{s.labelNote}</p>
            <p>{c.note}</p>
          </div>
        )}

        {c.links.length > 0 && (
          <div className="pu-section">
            <h2 className="pu-h2">{s.labelElsewhere}</h2>
            <ul className="pu-chips">
              {c.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="chip chip-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <nav className="stotra-pager">
          {prev ? (
            <Link href={`/gita/${prev.n}`} className="pager-link" data-dir="prev">
              <span className="pager-label">
                <Arrow dir="left" /> {s.previous}
              </span>
              <span className="pager-name">{prev.name}</span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link href={`/gita/${next.n}`} className="pager-link" data-dir="next">
              <span className="pager-label">
                {s.next} <Arrow dir="right" />
              </span>
              <span className="pager-name">{next.name}</span>
            </Link>
          )}
        </nav>
      </section>
    </>
  );
}
