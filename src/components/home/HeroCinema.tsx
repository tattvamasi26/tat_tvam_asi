"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { HeroImage } from "@/lib/hero";

/**
 * The opening frame.
 *
 * Three layers moving at different rates is what reads as depth: the
 * photograph drifts and scales slowly, a scrim sits still, and the
 * title block rises faster than both and fades out first. One transform
 * per layer keeps the whole thing on the compositor — no layout is read
 * or written during the scroll.
 *
 * The page also grades itself to whichever frame is showing. Each
 * photograph carries a sampled tint and accent (see lib/hero.ts), and
 * those are published as custom properties that the scrim, the hairline
 * and the caption all read. Because they are colours on a CSS property
 * with a transition, the grade cross-fades along with the image instead
 * of snapping.
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

  // Scroll-linked depth, plus a pointer-linked parallax. Both are
  // written as custom properties so every bit of actual motion lives in
  // the stylesheet, and a browser that never fires these still renders
  // a correct, static hero.
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let px = 0;
    let py = 0;
    let tx = 0;
    let ty = 0;
    let idle = true;

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(tick);
    };

    // Pointer parallax is eased rather than applied directly: following
    // the cursor exactly reads as jitter, while a lerp reads as weight.
    const onPointer = (e: PointerEvent) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 2;
      ty = (e.clientY / window.innerHeight - 0.5) * 2;
      if (idle) {
        idle = false;
        if (!frame) frame = window.requestAnimationFrame(tick);
      }
    };

    function tick() {
      frame = 0;
      const node = rootRef.current;
      if (!node) return;

      // 0 at the top of the hero, 1 once it has scrolled fully away.
      const p = Math.min(1, Math.max(0, window.scrollY / window.innerHeight));
      node.style.setProperty("--p", p.toFixed(4));

      px += (tx - px) * 0.06;
      py += (ty - py) * 0.06;
      node.style.setProperty("--mx", px.toFixed(4));
      node.style.setProperty("--my", py.toFixed(4));

      // Keep animating only while the eased value is still catching up.
      if (Math.abs(tx - px) > 0.001 || Math.abs(ty - py) > 0.001) {
        frame = window.requestAnimationFrame(tick);
      } else {
        idle = true;
      }
    }

    tick();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointer, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointer);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const current = images[active];

  return (
    <section
      className="cinema"
      ref={rootRef}
      style={
        {
          "--frame-tint": current.grade.tint,
          "--frame-accent": current.grade.accent,
          "--frame-scrim": current.grade.scrim,
        } as React.CSSProperties
      }
    >
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
        {/* Keyed on src so the caption re-runs its fade when the frame
            changes, rather than swapping text under a static label. */}
        <span key={current.src} className="cinema-caption">
          <span className="cinema-place">{current.place}</span>
          <span className="cinema-credit">{current.credit}</span>
        </span>

        <span className="cinema-ticks" aria-hidden="true">
          {images.map((img, i) => (
            <span key={img.src} className="cinema-tick" data-on={i === active ? "" : undefined} />
          ))}
        </span>
      </div>

      <div className="cinema-cue" aria-hidden="true">
        <span>{scrollCue}</span>
        <span className="cinema-cue-line" />
      </div>
    </section>
  );
}
