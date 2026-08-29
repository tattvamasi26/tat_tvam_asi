import Link from "next/link";
import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { getIshaVerses, getIshaText } from "@/lib/data";
import { TEXTURE } from "@/lib/hero";
import { ScrollScene } from "@/components/home/ScrollScene";
import { VerseStage } from "@/components/content/VerseStage";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Isha Upanishad",
  description:
    "The complete Īśāvāsya Upaniṣad — eighteen verses and the śānti mantra, with Sanskrit, transliteration, translation in English, Kannada and Hindi, and a commentary on every verse.",
};

export default function IshaPage() {
  const { locale, t } = getTranslations();
  const work = getIshaText(locale);
  const verses = getIshaVerses(locale);

  if (!work) return null;

  return (
    <>
      {/* ── The opening scene ──────────────────────────── */}
      <ScrollScene
        src={TEXTURE.wheel.src}
        alt=""
        credit={TEXTURE.wheel.credit}
        height={2}
        align="center"
      >
        <p className="scene-eyebrow">{t.navUpanishads}</p>
        <h1 className="vhero-title deva">{work.nameSanskrit}</h1>
        <p className="vhero-name">{work.name}</p>
        <p className="translit" style={{ fontSize: "1.05rem" }}>{work.nameIast}</p>
        <p className="scene-lede" style={{ marginInline: "auto" }}>{work.summary}</p>
      </ScrollScene>

      {/* ── What this text is ─────────────────────────── */}
      <section className="shell vintro">
        <Reveal>
          <div className="factbar">
            <div className="fact">
              <div className="fact-label">{t.labelVeda}</div>
              <div className="fact-value">{work.veda}</div>
            </div>
            <div className="fact">
              <div className="fact-label">{t.labelVerseCount}</div>
              <div className="fact-value">{work.verseCount}</div>
            </div>
            <div className="fact">
              <div className="fact-label">{t.labelKeyTeaching}</div>
              <div className="fact-value" style={{ fontSize: "0.95rem" }}>
                {work.keyTeaching}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── The verses ────────────────────────────────── */}
      <section className="shell vlist">
        {verses.map((v, i) => (
          <VerseStage
            key={v.id}
            verse={v}
            index={i}
            locale={locale}
            labels={{
              verse: t.labelVerse,
              invocation: t.labelInvocation,
              explanation: t.labelExplanation,
              hideExplanation: t.labelHideExplanation,
              compare: t.labelCompare,
              hideCompare: t.labelHideCompare,
              terms: t.labelTerms,
              uncited: t.uncitedNotice,
            }}
          />
        ))}
      </section>

      {/* ── Out ───────────────────────────────────────── */}
      <section className="shell" style={{ paddingBlock: "clamp(3rem, 8vh, 6rem)" }}>
        <div className="vfoot">
          <Link href="/upanishads" className="btn-ghost">
            ← {t.upanishadsTitle}
          </Link>
          <p className="meta">{t.labelSource}: {verses[0]?.sourceTitle}</p>
        </div>
      </section>
    </>
  );
}
