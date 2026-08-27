import Image from "next/image";

/**
 * A pinned scene: the photograph sticks to the viewport while the
 * text panel travels up over it, then releases.
 *
 * The pinning is `position: sticky` on the media inside a tall
 * wrapper — no scroll handler and no pinning library, which means
 * it cannot desynchronise from the scrollbar the way JS-driven
 * pinning does on a trackpad fling.
 *
 * `height` is how much scroll the scene consumes, expressed in
 * viewport heights. Two is roughly "one beat"; three lets a longer
 * passage finish reading before the scene lets go.
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
  return (
    <section className="scene" id={id} style={{ "--scene-h": height } as React.CSSProperties}>
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
