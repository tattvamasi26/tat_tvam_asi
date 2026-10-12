import Link from "next/link";
import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { puranaStrings } from "@/i18n/puranas";
import { puranaUi } from "@/i18n/purana-ui";
import { getPuranas, getPuranasByGuna, getTraditionalVerseTotal } from "@/lib/data";
import { scriptClass } from "@/lib/script";
import { Arrow } from "@/components/ui/Arrow";

export const metadata: Metadata = {
  title: "The Puranas",
  description:
    "Eighteen Mahapuranas — what each one is, how it is arranged, what is in it, and what came out of it into practice.",
};

/**
 * The eighteen, in the order the lists give them.
 *
 * Order first and grading second, deliberately. The famous three-way
 * sort into sāttvika, rājasa and tāmasa comes from inside the Padma
 * Purāṇa — a Vaiṣṇava text that puts the Vaiṣṇava Purāṇas top and the
 * Śaiva ones bottom. Leading with it would repeat a partisan ranking as
 * though it were a neutral classification, so it sits below the list,
 * smaller, with its provenance attached.
 *
 * The list is rows, not cards: eighteen of a kind read best as one
 * scannable column. Each row carries the Purāṇa's length as a bar on
 * one scale, because the scale is the point — Skanda alone claims a
 * fifth of the four hundred thousand — and the bar says it faster than
 * eighteen numbers. The figures are labelled tradition, not counts.
 */
export default function PuranasPage() {
  const { locale } = getTranslations();
  const s = puranaStrings(locale);
  const u = puranaUi(locale);
  const puranas = getPuranas(locale);
  const graded = getPuranasByGuna(locale);
  const sc = scriptClass(locale);
  const longest = Math.max(...puranas.map((p) => p.verses));

  const grade = {
    sattvika: { title: u.groupSattvika, lede: u.groupSattvikaLede },
    rajasa: { title: u.groupRajasa, lede: u.groupRajasaLede },
    tamasa: { title: u.groupTamasa, lede: u.groupTamasaLede },
  } as const;

  return (
    <>
      <section className="pagehead">
        <div className="shell pagehead-inner">
          <p className="eyebrow">
            {s.count(puranas.length.toLocaleString("en-IN"), getTraditionalVerseTotal().toLocaleString("en-IN"))}
          </p>
          <h1 className="title">{s.title}</h1>
          <p className="lede">{s.lede}</p>
        </div>
      </section>

      {/* The two other parts of the section, as the way on. */}
      <section className="shell pu2-also" aria-label={u.alsoTitle}>
        <Link href="/puranas/stories" className="rf-tab" data-active="no">
          <span className="rf-tab-top">
            <span className="rf-tab-label">{u.storiesTitle}</span>
            <span className="rf-tab-go" aria-hidden="true">
              <Arrow />
            </span>
          </span>
          <span className="rf-tab-blurb">{u.storiesBlurb}</span>
        </Link>
        <Link href="/cosmos" className="rf-tab" data-active="no">
          <span className="rf-tab-top">
            <span className="rf-tab-label">{u.cosmosTitle}</span>
            <span className="rf-tab-go" aria-hidden="true">
              <Arrow />
            </span>
          </span>
          <span className="rf-tab-blurb">{u.cosmosBlurb}</span>
        </Link>
      </section>

      <section className="shell pu2-list-wrap">
        <div className="pu2-list-head">
          <h2 className="pu2-h2">{u.scaleTitle}</h2>
          <p className="pu2-lede">{u.scaleLede}</p>
        </div>

        <ol className="pu2-list">
          {puranas.map((p) => (
            <li key={p.slug}>
              <Link href={`/puranas/${p.slug}`} className="pu2-row">
                <span className="pu2-n">{p.order.toLocaleString("en-IN")}</span>
                <span className="pu2-main">
                  <span className="pu2-name">{p.name}</span>
                  <span className={`pu2-sanskrit ${sc}`}>{p.sanskrit}</span>
                  <span className="pu2-lede-row">{p.lede}</span>
                </span>
                <span className="pu2-deity">{p.deity}</span>
                <span className="pu2-size">
                  <span className="pu2-bar" aria-hidden="true">
                    <span className="pu2-bar-fill" style={{ width: `${(p.verses / longest) * 100}%` }} />
                  </span>
                  <span className="pu2-verses">{s.verseUnit(p.verses.toLocaleString("en-IN"))}</span>
                </span>
              </Link>
            </li>
          ))}
        </ol>

        <p className="pu2-note">{s.verseNote}</p>
      </section>

      {/* The grading, below the list and smaller, with where it is from. */}
      <section className="rf-band pu2-grades" aria-labelledby="pu2-grades">
        <div className="shell">
          <div className="pu2-list-head">
            <h2 className="pu2-h2" id="pu2-grades">
              {u.gradeTitle}
            </h2>
            <p className="pu2-lede">{u.groupNote}</p>
          </div>

          <div className="pu2-grade-grid">
            {graded.map((g) => (
              <div key={g.guna} className="pu2-grade">
                <h3 className="pu2-grade-title">{grade[g.guna].title}</h3>
                <p className="pu2-grade-lede">{grade[g.guna].lede}</p>
                <ul className="pu2-grade-list">
                  {g.puranas.map((p) => (
                    <li key={p.slug}>
                      <Link href={`/puranas/${p.slug}`} className="chip">
                        {p.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="shell rf-closing">
        <p className="rf-closing-text">{s.standing}</p>
      </section>
    </>
  );
}
