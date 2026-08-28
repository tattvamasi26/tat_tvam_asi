import Image from "next/image";
import { gradeFor } from "@/lib/hero";

/**
 * A pinned scene: the photograph sticks to the viewport while the text
 * panel travels up over it, then releases.
 *
 * The pinning is `position: sticky` inside a tall wrapper — no scroll
 * handler and no pinning library, which means it cannot desynchronise
 * from the scrollbar the way JS-driven pinning does on a trackpad
 * fling. The photograph's own slow drift and the panel's rise are both
 * scroll-driven CSS animations, so they stay welded to the scrollbar
 * for the same reason.
 *
 * The scene grades itself to its photograph: `gradeFor` returns the
 * tint and accent sampled from that image, and the scrim strength
 * scales with how bright the frame is, so a midday shot gets darkened
 * harder than a dusk one to hold the same text contrast.
 *
 * `height` is how much scroll the scene consumes, in viewport heights.
 * Two is roughly "one beat"; three lets a longer passage finish reading
 * before the scene lets go.
 */
export function ScrollScene({
  id,
  src,
  alt,
  credit,
  position = "50% 50%",
  height = 2,
  children,
  align = "end",
}: {
  /** Anchor, so a scene can be linked to directly. */
  id?: string;
  src: string;
  alt: string;
  credit?: string;
  position?: string;
  height?: number;
  children: React.ReactNode;
  /** Where the panel sits once the scene is fully in view. */
  align?: "start" | "center" | "end";
}) {
  const grade = gradeFor(src);

  return (
    <section
      className="scene"
      id={id}
      style={
        {
          "--scene-h": height,
          "--frame-tint": grade.tint,
          "--frame-accent": grade.accent,
          "--frame-scrim": grade.scrim,
        } as React.CSSProperties
      }
    >
      <div className="scene-pin">
        <div className="scene-media">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="100vw"
            quality={88}
            style={{ objectFit: "cover", objectPosition: position }}
          />
          <div className="scene-scrim" aria-hidden="true" />
        </div>

        <div className="shell scene-panel" data-align={align}>
          {children}
        </div>

        {credit && <p className="scene-credit">{credit}</p>}
      </div>
    </section>
  );
}
