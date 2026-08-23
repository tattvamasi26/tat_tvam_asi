import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { getVerseById } from "@/lib/data";

// No generateStaticParams: reading the locale cookie makes this route
// dynamic by definition — one URL has to be able to serve three languages.

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  // Metadata is generated in the default language: it feeds crawlers and
  // link previews, which have no locale cookie to read.
  const verse = getVerseById(params.id, "en");
  return verse ? { title: verse.transliteration, description: verse.translation } : {};
}

export default function VerseDetailPage({ params }: { params: { id: string } }) {
  const { locale, t } = getTranslations();
  const verse = getVerseById(params.id, locale);
  if (!verse) notFound();

  return (
    <>
      <section className="pagehead">
        <div className="shell pagehead-inner">
          <Link href="/verses" className="btn-ghost" style={{ marginBottom: "0.5rem" }}>
            ← {t.versesTitle}
          </Link>
          {verse.isMahavakya && <span className="chip chip-gold">{t.labelMahavakya}</span>}
          <h1 className="sanskrit" style={{ fontSize: "clamp(2.2rem, 6vw, 4rem)" }}>
            {verse.sanskrit}
          </h1>
          <p className="subtitle translit">{verse.transliteration}</p>
        </div>
      </section>

      <section className="shell-narrow stack-lg" style={{ paddingTop: 0 }}>
        <div className="factbar" style={{ marginBottom: "2.5rem" }}>
          <div className="fact">
            <div className="fact-label">{t.labelSource}</div>
            <div className="fact-value">{verse.source}</div>
          </div>
          <div className="fact">
            <div className="fact-label">{t.labelChapter}</div>
            <div className="fact-value">{verse.locator}</div>
          </div>
        </div>

        <p className="eyebrow">{t.labelTranslation}</p>
        <p className="prose" style={{ marginTop: "0.9rem", fontSize: "1.2rem", color: "var(--ink-0)" }}>
          {verse.translation}
        </p>
        {!verse.isCited && <p className="notice-uncited">⚠ {t.uncitedNotice}</p>}

        {verse.note && (
          <>
            <hr className="rule" style={{ margin: "3rem 0 2rem" }} />
            <p className="eyebrow">{t.labelCommentary}</p>
            <p className="prose" style={{ marginTop: "0.9rem" }}>{verse.note}</p>
          </>
        )}

        {verse.tags.length > 0 && (
          <div className="chips" style={{ marginTop: "2.5rem" }}>
            {verse.tags.map((tag) => (
              <span key={tag} className="chip">{tag}</span>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
