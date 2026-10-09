import Link from "next/link";
import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { darshanaStrings } from "@/i18n/darshanas";
import { shastraStrings } from "@/i18n/shastras";
import { sectionsFor } from "@/i18n/sections";
import { getDarshanas, getDarshanaPairs, getPramanas, getPramanaGrid } from "@/lib/data";
import { PramanaGrid } from "@/components/darshanas/PramanaGrid";
import { PairBand } from "@/components/darshanas/PairBand";
import { Reveal } from "@/components/motion/Reveal";
import { scriptClass, scriptFor } from "@/lib/script";
import { Arrow } from "@/components/ui/Arrow";

export const metadata: Metadata = {
  title: "The six darshanas",
  description:
    "Nyaya, Vaisheshika, Sankhya, Yoga, Mimamsa and Vedanta — three questions asked twice each, and how many means of knowledge each school accepts.",
};

/**
 * The six darśanas.
 *
 * Built the way Rituals & Festivals and the cosmos pages are: a
 * drawing paired with the list it needs. There are two drawings here
 * and each does something prose cannot. The pairs show that this is
 * three questions rather than six positions. The grid shows where
 * each school stops counting means of knowledge, which is the
 * sharpest comparison between them available and is invisible in six
 * separate paragraphs.
 *
 * Three standing notes come first, before anything else, because all
 * three correct something a reader has almost certainly arrived
 * holding: that the six are an ancient set, that āstika means theist,
 * and that six is all there were. None of those is true, and a page
 * that waits until the footnotes to say so has already misled.
 */
export default function DarshanasPage() {
  const { locale } = getTranslations();
  const s = darshanaStrings(locale);
  const sh = shastraStrings(locale);
  const sc = scriptClass(locale);

  const schools = getDarshanas(locale);
  const pairs = getDarshanaPairs(locale);
  const pramanas = getPramanas(locale);
  const grid = getPramanaGrid(locale);
  const section = sectionsFor(locale).find((x) => x.id === "darshanas")!;

  return (
    <>
      <section className="pagehead">
        <div className="shell pagehead-inner">
          <span className={`${sc} pagehead-glyph`} aria-hidden="true">
            {scriptFor(section.glyph, locale)}
          </span>
          <h1 className="title">{s.title}</h1>
          <p className="lede">{s.lede}</p>
          <Link href="/shastras" className="chip" style={{ marginTop: "0.5rem" }}>
            <Arrow dir="left" /> {sh.title}
          </Link>
        </div>
      </section>

      {/* ── what the reader arrived believing ─────────────── */}
      <section className="shell" style={{ paddingTop: 0 }}>
        <ol className="da-standing">
          <li>
            <p className="da-standing-text">{s.standingSix}</p>
          </li>
          <li>
            <p className="da-standing-text">{s.standingAstika}</p>
          </li>
          <li>
            <p className="da-standing-text">{s.standingOthers}</p>
          </li>
        </ol>
      </section>

      {/* ── three questions, each asked twice ─────────────── */}
      <section className="da-lens" aria-labelledby="da-pairs">
        <div className="shell da-lens-inner">
          <div className="da-lens-head">
            <h2 className="da-lens-title" id="da-pairs">
              {s.pairsTitle}
            </h2>
            <p className="da-lens-lede">{s.pairsLede}</p>
          </div>

          <PairBand pairs={pairs} scriptClass={sc} readLabel={s.read} />
        </div>
      </section>

      {/* ── where each school stops counting ──────────────── */}
      <section className="da-lens" aria-labelledby="da-grid">
        <div className="shell da-lens-inner">
          <div className="da-lens-head">
            <h2 className="da-lens-title" id="da-grid">
              {s.gridTitle}
            </h2>
            <p className="da-lens-lede">{s.gridLede}</p>
          </div>

          <PramanaGrid
            pramanas={pramanas}
            schools={grid.schools}
            others={grid.others}
            scriptClass={sc}
            strings={{
              caption: s.gridCaption,
              accepts: s.gridAccepts,
              yes: s.gridYes,
              no: s.gridNo,
              ownList: s.gridOwnList,
              colSchool: s.colSchool,
              colCount: s.colCount,
              legendTitle: s.legendTitle,
            }}
          />
        </div>
      </section>

      {/* ── the six ───────────────────────────────────────── */}
      <section className="shell stack-lg">
        <Reveal>
          <div className="band-head">
            <div className="band-head-text">
              <span className="band-index">{schools.length.toLocaleString("en-IN")}</span>
              <h2 className="title" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
                {s.schoolsTitle}
              </h2>
            </div>
          </div>
        </Reveal>

        <ol className="da-grid-cards">
          {schools.map((d) => (
            <li key={d.slug}>
              <Link href={`/darshanas/${d.slug}`} className="da-card">
                <span className={`da-card-glyph ${sc}`} aria-hidden="true">
                  {d.glyph}
                </span>
                <span className="da-card-body">
                  <span className="da-card-name">{d.name}</span>
                  <span className={`da-card-sanskrit ${sc}`}>{d.sanskrit}</span>
                  <span className="da-card-question">{d.question}</span>
                  <span className="da-card-lede">{d.lede}</span>
                  <span className="da-card-foot">
                    <span className="da-card-count">
                      {s.gridAccepts.replace("{n}", d.pramanas.length.toLocaleString("en-IN"))}
                    </span>
                    <span className="da-card-read">
                      {s.read} <Arrow />
                    </span>
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      {/* ── and the ones not counted among them ───────────── */}
      <section className="da-lens" aria-labelledby="da-others">
        <div className="shell da-lens-inner">
          <div className="da-lens-head">
            <h2 className="da-lens-title" id="da-others">
              {s.othersTitle}
            </h2>
            <p className="da-lens-lede">{s.othersLede}</p>
          </div>

          <ul className="da-others">
            {grid.others.map((o) => (
              <li key={o.id} className="da-other">
                <p className="da-other-head">
                  <span className="da-other-name">{o.name}</span>
                  <span className={`da-other-sanskrit ${sc}`}>{o.sanskrit}</span>
                  <span className="da-other-count">
                    {o.accepts === null
                      ? s.gridOwnList
                      : s.gridAccepts.replace("{n}", o.accepts.length.toLocaleString("en-IN"))}
                  </span>
                </p>
                <p className="da-other-note">{o.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
