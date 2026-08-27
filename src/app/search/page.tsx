import Link from "next/link";
import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { searchAll } from "@/lib/data";

export const metadata: Metadata = { title: "Search" };

/**
 * A plain GET form rather than a client-side search box: the route is
 * already dynamic (it reads the locale cookie), results are server
 * rendered, and the query stays in the URL so a search can be shared.
 */
export default function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const { locale, t } = getTranslations();
  const q = searchParams.q?.trim() ?? "";
  const results = searchAll(q, locale);

  const total =
    results.verses.length + results.teachers.length + results.temples.length + results.concepts.length;

  return (
    <>
      <section className="pagehead">
        <div className="shell-narrow pagehead-inner">
          <p className="eyebrow">{t.navSearch}</p>
          <h1 className="title">{t.searchTitle}</h1>
          <p className="lede">{t.searchBlurb}</p>

          <form method="get" action="/search" className="searchbar" style={{ marginTop: "1.5rem" }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--ink-3)" strokeWidth="1.4" width="19" height="19">
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
            </svg>
            <input
              type="search"
              name="q"
              defaultValue={q}
              placeholder={t.searchPlaceholder}
              aria-label={t.searchTitle}
              autoFocus
            />
          </form>
        </div>
      </section>

      <section className="shell-narrow stack-lg" style={{ paddingTop: 0 }}>
        {q && (
          <p className="meta" style={{ marginBottom: "2rem" }}>
            {t.searchResultsFor} “{q}” — {total}
          </p>
        )}

        {q && total === 0 && <p className="lede">{t.searchNoResults}</p>}

        {results.verses.length > 0 && (
          <div style={{ marginBottom: "3rem" }}>
            <p className="eyebrow" style={{ marginBottom: "1.2rem" }}>{t.versesTitle}</p>
            <div style={{ display: "grid", gap: "1rem" }}>
              {results.verses.map((v) => (
                <Link key={v.id} href={`/verses/${v.id}`} className="verse" style={{ display: "block" }}>
                  <p className="sanskrit" style={{ fontSize: "1.5rem" }}>{v.sanskrit}</p>
                  <p className="card-text clamp-3" style={{ marginTop: "0.6rem" }}>{v.translation}</p>
                  <span className="meta" style={{ display: "block", marginTop: "0.8rem" }}>{v.source}</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {results.concepts.length > 0 && (
          <div style={{ marginBottom: "3rem" }}>
            <p className="eyebrow" style={{ marginBottom: "1.2rem" }}>{t.conceptsTitle}</p>
            <div className="chips">
              {results.concepts.map((c) => (
                <Link key={c.id} href={`/concepts/${c.slug}`} className="chip chip-gold" style={{ padding: "0.5rem 1rem" }}>
                  <span className="deva">{c.termSanskrit}</span>
                  <span style={{ color: "var(--ink-2)" }}>{c.term}</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {results.teachers.length > 0 && (
          <div style={{ marginBottom: "3rem" }}>
            <p className="eyebrow" style={{ marginBottom: "1.2rem" }}>{t.teachersTitle}</p>
            <div style={{ display: "grid", gap: "0.75rem" }}>
              {results.teachers.map((p) => (
                <Link key={p.id} href={`/acharyas/${p.slug}`} className="card">
                  <div className="card-body">
                    <h3 className="card-title" style={{ fontSize: "1.2rem" }}>{p.name}</h3>
                    <p className="meta">{p.era}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {results.temples.length > 0 && (
          <div>
            <p className="eyebrow" style={{ marginBottom: "1.2rem" }}>{t.templesTitle}</p>
            <div style={{ display: "grid", gap: "0.75rem" }}>
              {results.temples.map((tp) => (
                <Link key={tp.id} href={`/temples/${tp.slug}`} className="card">
                  <div className="card-body">
                    <h3 className="card-title" style={{ fontSize: "1.2rem" }}>{tp.name}</h3>
                    <p className="meta">
                      {tp.location} · {tp.state}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
