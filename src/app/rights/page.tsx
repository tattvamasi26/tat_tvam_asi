import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { rightsStrings } from "@/i18n/rights";

export const metadata: Metadata = {
  title: "Rights and reuse",
  description:
    "What on Tat Tvam Asi may be used and how: reading and short quotation are welcome; copying, scraping and AI training are not.",
};

/** The notice the site's machine-readable opt-outs point to. Laid out as About is. */
export default function RightsPage() {
  const { locale } = getTranslations();
  const s = rightsStrings(locale);

  return (
    <>
      <section className="pagehead">
        <div className="shell-narrow pagehead-inner">
          <h1 className="title">{s.title}</h1>
          <p className="lede">{s.lede}</p>
        </div>
      </section>

      <section className="shell-narrow stack-lg" style={{ paddingTop: 0 }}>
        {s.sections.map((sec, i) => (
          <div key={sec.heading}>
            {i > 0 && <hr className="rule" style={{ margin: "2.75rem 0 2rem" }} />}
            <h2 className="eyebrow">{sec.heading}</h2>
            {sec.body.map((p) => (
              <p key={p} className="prose" style={{ marginTop: "0.9rem" }}>
                {p}
              </p>
            ))}
          </div>
        ))}
      </section>
    </>
  );
}
