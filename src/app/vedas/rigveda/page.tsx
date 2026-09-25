import Link from "next/link";
import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { getVedas } from "@/lib/data";
import { sectionsFor } from "@/i18n/sections";
import { mandalas, devatasByHymnCount, devata as devataById, plain, totals, sukta } from "@/lib/rigveda";
import { scriptFor, scriptClass } from "@/lib/script";
import { Caution } from "@/components/ui/Caution";

/**
 * The Rigveda's front door.
 *
 * The Vedas index has always advertised "10,552 Verses" against the
 * Rigveda. This is the page that has to stand behind that number — so
 * it says plainly what is here (all 1,028 hymns, with their text and
 * their spine) and what is not (any translation at all), before it
 * offers a way in.
 *
 * Three ways in, because a newcomer and a reader who knows the
 * collection want different doors: the ten mandalas, the devatas, and
 * a handful of hymns most people arrive looking for.
 */

export const metadata: Metadata = { title: "Rigveda" };

/** Hymns a reader is most likely to come looking for by name. */
const WELL_KNOWN = ["1.1", "3.62", "10.129", "10.90", "10.125", "1.164", "7.86", "10.34"];

/** How many hymns carry a translation. None yet — and the page says so. */
const TRANSLATED = 0;

export default function RigvedaPage() {
  const { locale, t } = getTranslations();
  const veda = getVedas(locale).find((v) => v.slug === "rigveda");
  const section = sectionsFor(locale).find((x) => x.id === "vedas")!;
  const all = totals();
  const books = mandalas();
  const devatas = devatasByHymnCount();
  const sc = scriptClass(locale);


  return (
    <>
      <section className="pagehead">
        <div className="shell pagehead-inner">
          <span className={`${sc} pagehead-glyph`} aria-hidden="true">
            {scriptFor("ऋ", locale)}
          </span>
          <Link href="/vedas" className="reader-kicker">
            {section.label}
          </Link>
          <h1 className="title">{veda?.name ?? "Rigveda"}</h1>
          {locale === "en" && <p className="translit">{veda?.nameIast}</p>}
          {veda?.summary && <p className="lede">{veda.summary}</p>}

          <div className="reader-facts">
            <span>
              <i>{t.rvSuktas}</i>
              <span className="rv-fact rv-count-n">{all.suktas.toLocaleString("en-IN")}</span>
            </span>
            <span>
              <i>{t.rvVerses}</i>
              <span className="rv-fact rv-count-n">{all.verses.toLocaleString("en-IN")}</span>
            </span>
            <span>
              <i>{t.rvDevata}</i>
              <span className="rv-fact rv-count-n">{all.devatas.toLocaleString("en-IN")}</span>
            </span>
          </div>

          {/* The honest statement, before any way in. */}
          <p className="reader-partial">
            <Caution /> <strong>{t.rvTextCompleteTitle}</strong>{" "}
            {TRANSLATED.toLocaleString("en-IN")} {t.rvTranslatedCount}. {t.rvTextCompleteBody}
          </p>
        </div>
      </section>

      <section className="shell stack-lg" style={{ paddingTop: 0 }}>
        <h2 className="h3">{t.rvArrangedTitle}</h2>
        <p className="card-text rv-arranged">{t.rvArrangedBody}</p>
      </section>

      <section className="shell stack-lg" style={{ paddingTop: 0 }}>
        <h2 className="h3">{t.rvMandalas}</h2>
        <div className="rv-grid">
          {books.map((m) => (
            <Link key={m.mandala} href={`/vedas/rigveda/${m.mandala}`} className="rv-card">
              <span className="rv-card-num">{m.mandala.toLocaleString("en-IN")}</span>
              <span className="rv-card-name">
                {t.rvMandala} {m.mandala.toLocaleString("en-IN")}
              </span>
              <span className="rv-card-meta">
                {m.suktas.toLocaleString("en-IN")} {t.rvSuktas} · {m.verses.toLocaleString("en-IN")} {t.rvVerses}
              </span>
              <span className={`rv-card-devatas ${sc}`}>
                {m.devatas
                  .slice(0, 3)
                  .map((d) => scriptFor(d.devata.sa, locale))
                  .join(" · ")}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="shell stack-lg" style={{ paddingTop: 0 }}>
        <h2 className="h3">{t.rvByDevata}</h2>
        <p className="card-text rv-arranged">{t.rvByDevataBlurb}</p>
        <div className="rv-devatas">
          {devatas.slice(0, 24).map(({ devata, suktas }) => (
            <Link key={devata.id} href={`/vedas/rigveda/devata/${devata.id}`} className="rv-devata">
              <span className={`rv-devata-sa ${sc}`}>{scriptFor(devata.sa, locale)}</span>
              <span className="rv-devata-n">{suktas.toLocaleString("en-IN")}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="shell stack-lg" style={{ paddingTop: 0 }}>
        <h2 className="h3">{t.rvFamousTitle}</h2>
        <ol className="rv-list">
          {WELL_KNOWN.map((ref) => {
            const s = sukta(ref);
            if (!s) return null;
            return (
              <li key={ref}>
                <Link href={`/vedas/rigveda/${s.mandala}/${s.sukta}`} className="rv-row">
                  <span className="rv-row-num">{ref}</span>
                  <span className="rv-row-body">
                    <span className={`rv-row-sa ${sc}`}>
                      {scriptFor(devataById(s.devataId)?.sa ?? plain(s.devata), locale)}
                    </span>
                    <span className="rv-row-meta">
                      <span className={sc}>{scriptFor(plain(s.rishi), locale)}</span>
                    </span>
                  </span>
                  <span className="rv-row-verses">
                    {s.verses.toLocaleString("en-IN")} {t.rvVerses}
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>
      </section>
    </>
  );
}
