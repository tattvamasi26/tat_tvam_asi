import Image from "next/image";
import type { SectionImage } from "@/lib/seed/section-images";
import type { Locale } from "@/i18n/config";
import { RiteArt } from "@/components/rituals/RiteArt";

/**
 * The picture beside a page's title: a credited painting where there
 * is one, the site's own drawing where there is not, nothing at all
 * where neither exists. Used in the `.rf-dhero` head the Purāṇas, the
 * Stories, the darśanas and the śāstra branches share with the rites,
 * so every one of them puts its picture in the same place.
 */
export function HeadPicture({
  image,
  art,
  label,
  drawnCredit,
  locale,
}: {
  locale: Locale;
  image?: SectionImage;
  art?: string;
  label: string;
  drawnCredit: string;
}) {
  if (image) {
    return (
      <figure className="rf-dhero-art is-photo">
        <span className="rf-dhero-frame">
          <Image
            src={image.src}
            alt={image.alt[locale]}
            fill
            sizes="(max-width: 860px) 100vw, 45vw"
            priority
            style={{ objectFit: "cover", objectPosition: image.position }}
          />
        </span>
        <figcaption>
          <a href={image.sourceUrl} target="_blank" rel="noopener noreferrer">
            {image.credit}
          </a>
        </figcaption>
      </figure>
    );
  }
  if (art) {
    return (
      <figure className="rf-dhero-art">
        <RiteArt art={art} label={label} />
        <figcaption>{drawnCredit}</figcaption>
      </figure>
    );
  }
  return null;
}

/** Whether a head has anything to show beside the title. */
export function hasHeadPicture(image?: SectionImage, art?: string): boolean {
  return Boolean(image || art);
}
