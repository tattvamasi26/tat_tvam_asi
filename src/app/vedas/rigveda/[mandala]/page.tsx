import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "@/i18n/server";
import { MANDALA_COUNT, groupsOf, mandala as mandalaSummary, plain } from "@/lib/rigveda";
import { scriptFor, scriptClass } from "@/lib/script";

/**
 * One mandala, its hymns grouped by devata.
 *
 * 191 numbered rows is a list nobody reads, and mandala 1 and 10 have
 * exactly that many. Grouping by devata turns the same list into a way
 * in: "to Indra (58)" is a thing a reader can want. Each hymn sits in
 * exactly one group — the devata its first verse addresses — so the
 * groups still sum to the mandala's own count.
 */

export function generateStaticParams() {
  return Array.from({ length: MANDALA_COUNT }, (_, i) => ({ mandala: String(i + 1) }));
}

export function generateMetadata({ params }: { params: { mandala: string } }): Metadata {
  return { title: `Rigveda — Mandala ${params.mandala}` };
}

export default function MandalaPage({ params }: { params: { mandala: string } }) {
  const { locale, t } = getTranslations();

  // The segment is a number or it is nothing: "/vedas/rigveda/abc" is
  // not a mandala, and must 404 rather than render an empty one.
  if (!/^\d+$/.test(params.mandala)) notFound();
  const n = Number(params.mandala);
  if (n < 1 || n > MANDALA_COUNT) notFound();

  const summary = mandalaSummary(n);
  const groups = groupsOf(n);
  const sc = scriptClass(locale);

  return (
    <>
      <section className="pagehead">
        <div className="shell pagehead-inner">
          <span className={`${sc} pagehead-glyph`} aria-hidden="true">
            {scriptFor("ऋ", locale)}
          </span>
          <Link href="/vedas/rigveda" className="reader-kicker">
            {scriptFor("ऋग्वेदः", locale)}
          </Link>
          <h1 className="title">
            {t.rvMandala} {n.toLocaleString("en-IN")}
          </h1>
          <div className="reader-facts">
            <span>
              <i>{t.rvSuktas}</i>
              <span className="rv-fact rv-count-n">{summary.suktas.toLocaleString("en-IN")}</span>
            </span>
            <span>
              <i>{t.rvVerses}</i>
              <span className="rv-fact rv-count-n">{summary.verses.toLocaleString("en-IN")}</span>
            </span>
            <span>
              <i>{t.rvDevata}</i>
              <span className="rv-fact rv-count-n">{groups.length.toLocaleString("en-IN")}</span>
            </span>
          </div>
        </div>
      </section>

      <section className="shell stack-lg" style={{ paddingTop: 0 }}>
        {groups.map((g) => (
          <div key={g.devata.id} className="rv-group">
            <div className="rv-group-head">
              <Link href={`/vedas/rigveda/devata/${g.devata.id}`} className="rv-group-name">
                <span className={`rv-group-sa ${sc}`}>{scriptFor(g.devata.sa, locale)}</span>
                {locale === "en" && <span> — {g.devata.en}</span>}
              </Link>
              <span className="rv-group-n">
                {g.suktas.length.toLocaleString("en-IN")} {t.rvSuktas}
              </span>
            </div>

            <ol className="rv-list">
              {g.suktas.map((s) => (
                <li key={s.ref}>
                  <Link href={`/vedas/rigveda/${s.mandala}/${s.sukta}`} className="rv-row">
                    <span className="rv-row-num">{s.sukta.toLocaleString("en-IN")}</span>
                    <span className="rv-row-body">
                      {s.mixed && (
                        <span className={`rv-row-sa ${sc}`}>{scriptFor(plain(s.devata), locale)}</span>
                      )}
                      <span className="rv-row-meta">
                        <span className={sc}>{scriptFor(plain(s.rishi), locale)}</span>
                        {s.metre && (
                          <>
                            {" · "}
                            <span className={sc}>{scriptFor(plain(s.metre), locale)}</span>
                          </>
                        )}
                      </span>
                    </span>
                    <span className="rv-row-verses">
                      {s.verses.toLocaleString("en-IN")} {t.rvVerses}
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </section>
    </>
  );
}
