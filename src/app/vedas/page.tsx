import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { sectionsFor } from "@/i18n/sections";
import { getVedas } from "@/lib/data";
import { TextIndex } from "@/components/content/TextIndex";

export const metadata: Metadata = { title: "Vedas" };

export default function Page() {
  const { locale, t } = getTranslations();
  const items = getVedas(locale);
  const section = sectionsFor(locale).find((s) => s.id === "vedas")!;

  return (
    <>
      <section className="pagehead">
        <div className="shell pagehead-inner">
          <span className="deva pagehead-glyph">{section.glyph}</span>
          <h1 className="title">{section.label}</h1>
          <p className="lede">{section.blurb}</p>
        </div>
      </section>

      <section className="shell stack-lg" style={{ paddingTop: 0 }}>
        <TextIndex
          items={items}
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
