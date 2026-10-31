import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "@/i18n/server";
import { sectionsFor } from "@/i18n/sections";
import { getVedas } from "@/lib/data";
import { TextIndex } from "@/components/content/TextIndex";
import { scriptFor, scriptClass } from "@/lib/script";
import { Arrow } from "@/components/ui/Arrow";

export const metadata: Metadata = { title: "Vedas" };

export default function Page() {
  const { locale, t } = getTranslations();
  const items = getVedas(locale);
  const section = sectionsFor(locale).find((s) => s.id === "vedas")!;

  return (
    <>
      <section className="pagehead">
        <div className="shell pagehead-inner">
          <span className={`${scriptClass(locale)} pagehead-glyph`} aria-hidden="true">{scriptFor(section.glyph, locale)}</span>
          <h1 className="title">{section.label}</h1>
          <p className="lede">{section.blurb}</p>
          {/* The Rigveda is entered hymn by hymn; the other three are
              not, so only it gets a way in. */}
          <Link href="/vedas/rigveda" className="btn" style={{ marginTop: "0.4rem" }}>
            {t.readWork} — {scriptFor("ऋग्वेदः", locale)} <Arrow />
          </Link>
        </div>
      </section>

      <section className="shell stack-lg" style={{ paddingTop: 0 }}>
        <TextIndex
          items={items}
          locale={locale}
          labels={{
            keyTeaching: t.labelKeyTeaching,
            verseCount: t.labelVerseCount,
            veda: t.labelVeda,
          }}
        />
      </section>
    </>
  );
}
