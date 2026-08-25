"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { HeroImage } from "@/lib/hero";

/**
 * Slow crossfade between hero photographs, with a very slight scale drift
 * on the active frame so a still image reads as alive without video.
 *
 * Every frame is rendered server-side and simply toggled by opacity — the
 * markup is identical whether or not JS runs, so the hero is never blank
 * and there is no layout shift when hydration lands. Only the first frame
 * gets `priority`; the rest lazy-load and are already decoded long before
 * their turn comes round.
 */
export function HeroStage({
  images,
  intervalMs = 7000,
}: {
  images: HeroImage[];
  intervalMs?: number;
}) {
  const [active, setActive] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (query.matches) return; // hold on the first frame, permanently

    setAnimate(true);
    const id = window.setInterval(
      () => setActive((i) => (i + 1) % images.length),
      intervalMs
    );
    return () => window.clearInterval(id);
  }, [images.length, intervalMs]);

  return (
    <div className="hero-stage" aria-hidden="true">
      {images.map((img, i) => (
        <div
          key={img.src}
          className="hero-frame"
          data-active={i === active ? "" : undefined}
          data-drift={animate && i === active ? "" : undefined}
        >
          <Image
            src={img.src}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: img.position }}
          />
        </div>
      ))}

      <div className="hero-veil" />

      {/* Which photograph is on screen, and who took it. */}
      <div className="hero-caption">
        <span className="hero-place">{images[active]?.place}</span>
        <span className="hero-credit">{images[active]?.credit}</span>
      </div>

      <div className="hero-dots">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            className="hero-dot"
            data-active={i === active ? "" : undefined}
            aria-label={img.place}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </div>
  );
}
