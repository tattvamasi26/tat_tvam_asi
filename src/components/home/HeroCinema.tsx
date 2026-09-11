"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { HeroImage } from "@/lib/hero";

export interface HeroBadge {
  icon: "sources" | "languages" | "reader";
  title: string;
  note: string;
}

const ICONS: Record<HeroBadge["icon"], React.ReactNode> = {
  sources: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3h12v18l-6-4-6 4z" />
      <path d="M9.2 9.8l2 2 3.8-3.8" />
    </svg>
  ),
  languages: <span className="deva">अ</span>,
  reader: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 5.5c3-1.6 6-1.6 9 .3v14c-3-1.9-6-1.9-9-.3z" />
      <path d="M21 5.5c-3-1.6-6-1.6-9 .3v14c3-1.9 6-1.9 9-.3z" />
    </svg>
  ),
};

/**
 * The opening frame: one photograph, a headline, and three facts.
 *
 * The photographs cross-fade on a slow rotation, each drifting in
 * scale while it is on screen; a warm grade over all of them keeps a
 * blue dusk and a white marble courtyard inside the same palette.
 * Everything that moves is CSS — the only script here is the timer
 * that picks the frame.
 */
export function HeroCinema({
  images,
  siteName,
  nameClass = "",
  tagline,
  headline,
  accent,
  lede,
  enter,
  explore,
  badges,
}: {
  images: HeroImage[];
  siteName: string;
  nameClass?: string;
  /** Omitted when it would only repeat the site name (Hindi). */
  tagline?: string;
  headline: string;
  accent: string;
  lede: string;
  enter: { href: string; label: string };
  explore: { href: string; label: string };
  badges: HeroBadge[];
}) {
  const [active, setActive] = useState(0);

  // 7s is long enough to actually look at a frame and short enough
  // that a visitor sees two before scrolling.
  useEffect(() => {
    if (images.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setActive((i) => (i + 1) % images.length), 7000);
    return () => window.clearInterval(id);
  }, [images.length]);

  const current = images[active];

  return (
    <section className="home-hero">
      <div className="home-hero-media" aria-hidden="true">
        {images.map((img, i) => (
          <div key={img.src} className="home-hero-frame" data-active={i === active ? "" : undefined}>
            <Image
              src={img.src}
              alt=""
              fill
              // The first frame is the LCP element on every visit.
              priority={i === 0}
              sizes="100vw"
              quality={85}
              style={{ objectFit: "cover", objectPosition: img.position }}
            />
          </div>
        ))}
        <div className="home-hero-scrim" />
      </div>

      <div className="shell home-hero-inner">
        <p className="home-hero-kicker">
          <span className="om" aria-hidden="true">
            ॐ
          </span>
          <span className={nameClass || undefined}>{siteName}</span>
          {tagline && (
            <>
              <i aria-hidden="true">·</i>
              <span>{tagline}</span>
            </>
          )}
        </p>

        <h1 className="home-hero-title">
          {headline} <span className="accent">{accent}</span>
        </h1>

        <p className="home-hero-lede">{lede}</p>

        <div className="home-hero-actions">
          <a href={enter.href} className="btn">
            {enter.label} <span aria-hidden="true">→</span>
          </a>
          <a href={explore.href} className="btn-glass">
            {explore.label}
          </a>
        </div>

        <ul className="home-hero-badges">
          {badges.map((b) => (
            <li key={b.icon} className="home-badge">
              <span className="home-badge-icon" aria-hidden="true">
                {ICONS[b.icon]}
              </span>
              <span>
                <span className="home-badge-title">{b.title}</span>
                <span className="home-badge-note">{b.note}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="home-hero-foot">
        {/* Keyed on src so the caption re-runs its fade when the frame
            changes, rather than swapping text under a static label. */}
        <span key={current.src} className="home-hero-caption">
          {current.place} <em>· {current.credit}</em>
        </span>
        <span className="home-hero-ticks" aria-hidden="true">
          {images.map((img, i) => (
            <span key={img.src} className="home-hero-tick" data-on={i === active ? "" : undefined} />
          ))}
        </span>
      </div>
    </section>
  );
}
