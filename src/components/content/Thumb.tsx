import Image from "next/image";
import type { Locale } from "@/i18n/config";
import { sectionImage, sectionArt, type ImageKind } from "@/lib/seed/section-images";
import { RiteArt } from "@/components/rituals/RiteArt";

/**
 * A small picture for an index card or row: the credited painting
 * where there is one, the site's drawing where there is not, a quiet
 * paper tile where neither exists. The credit lives on the entry's own
 * page, beside the large version; a thumbnail is decoration for the
 * row, so it carries no alt text of its own when the row already
 * names the entry (label "").
 */
export function Thumb({
  kind,
  slug,
  label,
  locale,
}: {
  kind: ImageKind;
  slug: string;
  label: string;
  locale: Locale;
}) {
  const img = sectionImage(kind, slug);
  const art = sectionArt(kind, slug);
  return (
    <span className="thumb">
      {img ? (
        <Image
          src={img.src}
          alt={label ? img.alt[locale] : ""}
          fill
          // Small, and few to a page: loaded with the page rather than
          // on scroll, so the last card is never an empty frame.
          loading="eager"
          sizes="(max-width: 700px) 100vw, 420px"
          style={{ objectFit: "cover", objectPosition: img.position }}
        />
      ) : art ? (
        <RiteArt art={art} label={label} />
      ) : null}
    </span>
  );
}
