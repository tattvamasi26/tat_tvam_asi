import Link from "next/link";
import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { cosmosStrings } from "@/i18n/cosmos";
import { puranaStrings } from "@/i18n/puranas";
import {
  getTimeUnits,
  getYugas,
  getLokas,
  getDvipas,
  getPralayas,
  getNow,
  getCosmosTopics,
} from "@/lib/data";
import { TimeScale } from "@/components/cosmos/TimeScale";
import { YugaWheel } from "@/components/cosmos/YugaWheel";
import { LokaAxis } from "@/components/cosmos/LokaAxis";
import { DvipaRings } from "@/components/cosmos/DvipaRings";
import { scriptClass } from "@/lib/script";
import { Arrow } from "@/components/ui/Arrow";

export const metadata: Metadata = {
  title: "Time and the cosmos",
  description:
    "The scheme of ages, worlds and dissolutions the Puranas work out in more detail than almost anything else they contain.",
};

/**
 * Four drawings and four arguments.
 *
 * Each section is a drawing paired with the list it needs, the way
 * Rituals & Festivals is built: the drawing carries the shape, the
 * list carries the names. The drawings are the only honest way to
 * show some of this — a logarithmic ladder cannot be a table, and the
 * 4:3:2:1 ratio is invisible in four large numbers and obvious in a
 * ring.
 *
 * The standing note goes first and says what the section refuses to
 * do, because the one thing a reader has almost certainly met before
 * arriving here is the kalpa being compared to the age of the earth.
 */
export default function CosmosPage() {
  const { locale } = getTranslations();
  const s = cosmosStrings(locale);
  const pu = puranaStrings(locale);
  const sc = scriptClass(locale);

  const units = getTimeUnits(locale);
  const yugas = getYugas(locale);
  const lokas = getLokas(locale);
  const dvipas = getDvipas(locale);
  const pralayas = getPralayas(locale);
  const now = getNow(locale);
  const topics = getCosmosTopics(locale);

  return (
    <>
      <section className="pagehead">
        <div className="shell pagehead-inner">
          <h1 className="title">{s.title}</h1>
          <p className="lede">{s.lede}</p>
          <Link href="/puranas" className="chip" style={{ marginTop: "0.5rem" }}>
            <Arrow dir="left" /> {pu.title}
          </Link>
        </div>
      </section>

      <section className="shell" style={{ paddingTop: 0 }}>
        <div className="co-standing">
          <p className="co-standing-text">{s.standing}</p>
        </div>
      </section>

      {/* ── the ladder ───────────────────────────────────── */}
      <section className="co-lens" aria-labelledby="co-scale">
        <div className="shell co-lens-inner">
          <div className="co-lens-head">
            <h2 className="co-lens-title" id="co-scale">{s.scaleTitle}</h2>
            <p className="co-lens-lede">{s.scaleLede}</p>
          </div>

          <TimeScale units={units} caption={s.scaleCaption} decadeLabel={s.seconds} />

          <ol className="co-rungs">
            {units.map((u, i) => (
              <li key={u.id} className="co-rung">
                <span className="co-rung-num">{(i + 1).toLocaleString("en-IN")}</span>
                <span className="co-rung-body">
                  <span className="co-rung-name">{u.name}</span>
                  <span className={`co-rung-sanskrit ${sc}`}>{u.sanskrit}</span>
                  <span className="co-rung-def">{u.defined}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── the four ages ────────────────────────────────── */}
      <section className="co-lens" aria-labelledby="co-yuga">
        <div className="shell co-lens-inner">
          <div className="co-lens-head">
            <h2 className="co-lens-title" id="co-yuga">{s.yugaTitle}</h2>
            <p className="co-lens-lede">{s.yugaLede}</p>
          </div>

          <div className="co-pair">
            <YugaWheel
              yugas={yugas}
              caption={s.yugaCaption}
              centre={{ top: s.yugaCentreTop, bottom: s.yugaCentreBottom }}
            />

            <ul className="co-yuga-list">
              {yugas.map((y) => (
                <li key={y.id} data-here={y.id === now.yuga?.id ? "yes" : "no"}>
                  <span className="co-yuga-name">{y.name}</span>
                  <span className="co-yuga-years">
                    {s.yugaYears.replace("{n}", y.years.toLocaleString("en-IN"))}
                  </span>
                  <span className="co-yuga-char">{y.character}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Where the scheme says we are. */}
          <div className="co-now">
            <p className="fact-label">{s.nowTitle}</p>
            <p className="co-now-text">
              {s.nowText
                .replace("{year}", now.brahmaYear.toLocaleString("en-IN"))
                .replace("{manvantara}", now.manvantara.toLocaleString("en-IN"))
                .replace("{manu}", now.manu)
                .replace("{mahayuga}", now.mahayuga.toLocaleString("en-IN"))
                .replace("{yuga}", now.yuga?.name ?? "")}
            </p>
            <p className="co-now-note">{s.nowNote}</p>
          </div>
        </div>
      </section>

      {/* ── the fourteen worlds ──────────────────────────── */}
      <section className="co-lens" aria-labelledby="co-loka">
        <div className="shell co-lens-inner">
          <div className="co-lens-head">
            <h2 className="co-lens-title" id="co-loka">{s.lokaTitle}</h2>
            <p className="co-lens-lede">{s.lokaLede}</p>
          </div>

          <div className="co-pair">
            <LokaAxis lokas={lokas} caption={s.lokaCaption} perishableLabel={s.perishable} />

            <ul className="co-loka-list">
              {[...lokas]
                .sort((a, b) => b.level - a.level)
                .map((l) => (
                  <li key={l.id} data-here={l.level === 0 ? "yes" : "no"}>
                    <span className="co-loka-item-name">{l.name}</span>
                    <span className={`co-loka-item-sanskrit ${sc}`}>{l.sanskrit}</span>
                    <span className="co-loka-item-gloss">{l.gloss}</span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Meru and the islands ─────────────────────────── */}
      <section className="co-lens" aria-labelledby="co-dvipa">
        <div className="shell co-lens-inner">
          <div className="co-lens-head">
            <h2 className="co-lens-title" id="co-dvipa">{s.dvipaTitle}</h2>
            <p className="co-lens-lede">{s.dvipaLede}</p>
          </div>

          <div className="co-pair">
            <DvipaRings dvipas={dvipas} caption={s.dvipaCaption} centre={s.meru} />

            <ol className="co-dvipa-list">
              {dvipas.map((d) => (
                <li key={d.id}>
                  <span className="co-dvipa-num">{d.ring.toLocaleString("en-IN")}</span>
                  <span className="co-dvipa-body">
                    <span className="co-dvipa-name">{d.name}</span>
                    <span className="co-dvipa-sea">
                      {s.labelSea}: {d.sea}
                    </span>
                    {d.note && <span className="co-dvipa-note">{d.note}</span>}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── the dissolutions ─────────────────────────────── */}
      <section className="co-lens" aria-labelledby="co-pralaya">
        <div className="shell co-lens-inner">
          <div className="co-lens-head">
            <h2 className="co-lens-title" id="co-pralaya">{s.pralayaTitle}</h2>
            <p className="co-lens-lede">{s.pralayaLede}</p>
          </div>

          <ol className="co-pralayas">
            {pralayas.map((p, i) => (
              <li key={p.id}>
                <span className="co-pralaya-num">{(i + 1).toLocaleString("en-IN")}</span>
                <span className="co-pralaya-body">
                  <span className="co-pralaya-name">{p.name}</span>
                  <span className={`co-pralaya-sanskrit ${sc}`}>{p.sanskrit}</span>
                  <span className="co-pralaya-when">{p.when}</span>
                  <span className="co-pralaya-what">{p.what}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── the four arguments ───────────────────────────── */}
      <section className="shell co-topics">
        <h2 className="co-lens-title">{s.topicsTitle}</h2>
        <ul className="co-topic-grid">
          {topics.map((t) => (
            <li key={t.slug}>
              <Link href={`/cosmos/${t.slug}`} className="co-topic">
                <span className="co-topic-name">{t.name}</span>
                <span className={`co-topic-sanskrit ${sc}`}>{t.sanskrit}</span>
                <span className="co-topic-lede">{t.lede}</span>
                <span className="co-topic-more">
                  {s.read} <Arrow />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
