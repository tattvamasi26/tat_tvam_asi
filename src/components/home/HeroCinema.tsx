"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { HeroImage } from "@/lib/hero";

/**
 * The opening frame.
 *
 * Three layers moving at different rates is what reads as depth:
 * the photograph drifts and scales slowly, a scrim sits still, and
 * the title block rises faster than both and fades out first. Doing
 * it with one transform per layer keeps the whole thing on the
 * compositor — no layout is read or written during the scroll.
 *
 * The rotation cross-fades on a timer rather than on scroll, so the
 * hero is alive even before the visitor touches the wheel.
 */
export function HeroCinema({
  images,
  title,
  titleClass = "",
  tagline,
  subtitle,
  enter,
  explore,
  scrollCue,
}: {
  images: HeroImage[];
  title: string;
  titleClass?: string;
  tagline: string;
  subtitle: string;
  enter: { href: string; label: string };
  explore: { href: string; label: string };
  scrollCue: string;
}) {
  const [active, setActive] = useState(0);
  const rootRef = useRef<HTMLElement>(null);

  // Cross-fade the rotation. 7s is long enough to actually look at a
  // frame and short enough that a visitor sees two before scrolling.
  useEffect(() => {
    if (images.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(
      () => setActive((i) => (i + 1) % images.length),
      7000
    );
    return () => window.clearInterval(id);
  }, [images.length]);

  // Scroll-linked depth. Written as a CSS custom property so all the
  // actual motion stays in the stylesheet, and so a browser that never
  // fires this still renders a correct, static hero.
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        // 0 at the top of the hero, 1 once it has scrolled fully away.
        const p = Math.min(1, Math.max(0, window.scrollY / window.innerHeight));
        el.style.setProperty("--p", p.toFixed(4));
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const current = images[active];

  return (
    <section className="cinema" ref={rootRef}>
      <div className="cinema-plate">
        {images.map((img, i) => (
          <div
            key={img.src}
            className="cinema-frame"
            data-active={i === active ? "" : undefined}
            aria-hidden="true"
          >
            <Image
              src={img.src}
              alt=""
              fill
              // The first frame is the LCP element on every visit.
              priority={i === 0}
              sizes="100vw"
              quality={90}
              style={{ objectFit: "cover", objectPosition: img.position }}
            />
          </div>
        ))}
        <div className="cinema-scrim" aria-hidden="true" />
        <div className="cinema-vignette" aria-hidden="true" />
      </div>

      <div className="shell cinema-core">
        <span className="cinema-om" aria-hidden="true">
          ॐ
        </span>

        <h1 className={`cinema-title ${titleClass}`.trim()}>{title}</h1>

        <div className="cinema-rule" aria-hidden="true" />

        <p className="cinema-tagline">{tagline}</p>
        <p className="cinema-sub">{subtitle}</p>

        <div className="cinema-actions">
          <a href={enter.href} className="btn">
            {enter.label}
          </a>
          <a href={explore.href} className="btn-ghost">
            {explore.label} →
          </a>
        </div>
      </div>

      <div className="cinema-foot">
        <span className="cinema-place">{current.place}</span>
        <span className="cinema-credit">{current.credit}</span>
      </div>

      <div className="cinema-cue" aria-hidden="true">
        <span>{scrollCue}</span>
        <span className="cinema-cue-line" />
      </div>
    </section>
  );
}
