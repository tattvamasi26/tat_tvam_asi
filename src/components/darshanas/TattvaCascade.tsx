import type { StructureItemView } from "@/lib/data";

/**
 * Sāṅkhya's twenty-five.
 *
 * The drawing has one job: show that puruṣa is not on the cascade.
 * Everything else descends in tiers from mūlaprakṛti, each tier
 * produced by the one above it, and puruṣa stands beside the whole
 * column producing nothing — which is exactly the school's claim and
 * is invisible in a flat list of twenty-five names.
 *
 * Plain CSS: a two-column grid with puruṣa spanning the full height,
 * the cascade as an ordered list of tiers, and a connecting spine
 * drawn with a border. On a phone puruṣa moves above the cascade and
 * keeps its separation by surface rather than by position, since
 * side-by-side at 390px would squeeze both to nothing.
 */
export function TattvaCascade({
  purusha,
  tiers,
  scriptClass,
  strings,
}: {
  purusha: StructureItemView;
  tiers: { id: string; label: string; items: StructureItemView[] }[];
  scriptClass: string;
  strings: { count: string; total: number; aside: string };
}) {
  return (
    <figure className="da-tattvas">
      <div className="da-tattva-frame">
        {/* Apart, and labelled as apart. */}
        <div className="da-purusha">
          <p className="da-purusha-name">{purusha.name}</p>
          <p className={`da-purusha-sanskrit ${scriptClass}`}>{purusha.sanskrit}</p>
          <p className="da-purusha-gloss">{purusha.gloss}</p>
        </div>

        <ol className="da-cascade">
          {tiers.map((t) => (
            <li key={t.id} className="da-tier" data-tier={t.id}>
              <p className="da-tier-label">{t.label}</p>
              <ul className="da-tier-items">
                {t.items.map((i) => (
                  <li key={i.id} className="da-tattva">
                    <span className="da-tattva-name">{i.name}</span>
                    <span className={`da-tattva-sanskrit ${scriptClass}`}>{i.sanskrit}</span>
                    <span className="da-tattva-gloss">{i.gloss}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>

      <figcaption className="da-tattva-caption">
        <span className="da-tattva-count">
          {strings.count.replace("{n}", strings.total.toLocaleString("en-IN"))}
        </span>
        {strings.aside}
      </figcaption>
    </figure>
  );
}
