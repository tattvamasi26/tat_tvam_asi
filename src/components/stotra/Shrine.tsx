import Image from "next/image";
import type { DevataView } from "@/lib/data";

type Picture = NonNullable<DevataView["image"]>;

/**
 * The devata's picture, set in an arch the way a mūrti is set in its
 * prabhāvali — a thin gilt frame with a soft glow behind it.
 *
 * The arch crops with object-fit: cover from the picture's declared
 * focal point, so the picture is never squeezed to fit the frame.
 */
export function Shrine({
  image,
  sizes,
  priority = false,
  className = "",
}: {
  image: Picture;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <figure className={`shrine ${className}`.trim()}>
      <span className="shrine-glow" aria-hidden="true" />
      <span className="shrine-arch">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          style={{ objectFit: "cover", objectPosition: image.position }}
        />
      </span>
    </figure>
  );
}
