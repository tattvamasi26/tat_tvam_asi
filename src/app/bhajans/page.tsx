import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { sectionsFor } from "@/i18n/sections";
import { getBhajans } from "@/lib/data";
import { TextIndex } from "@/components/content/TextIndex";
import { scriptFor, scriptClass } from "@/lib/script";

export const metadata: Metadata = { title: "Bhajans" };

export default function Page() {
  const { locale, t } = getTranslations();
  const items = getBhajans(locale);
  const section = sectionsFor(locale).find((s) => s.id === "bhajans")!;

  return (
    <>
      <section className="pagehead">
        <div className="shell pagehead-inner">
          <span className={`${scriptClass(locale)} pagehead-glyph`} aria-hidden="true">{scriptFor(section.glyph, locale)}</span>
          <h1 className="title">{section.label}</h1>
          <p className="lede">{section.blurb}</p>
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
