"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mark } from "@/components/brand/Mark";

export interface NavSection {
  id: string;
  href: string;
  glyph: string;
  label: string;
  blurb: string;
}

/**
 * A full-screen index rather than a bar of links.
 *
 * The founder's constraint was that the section list will keep growing
 * past what a horizontal bar can hold. A bar fails at about seven items;
 * an overlay index does not care whether there are seven or thirty,
 * because it lays them out as a list with room for a gloss on each.
 *
 * At rest the masthead shows only the lockup, a Menu trigger and the
 * language switcher — so the reading surface stays uncluttered.
 */
export function SiteNav({
  sections,
  secondary,
  labels,
  siteName,
  nameClass = "",
}: {
  sections: NavSection[];
  secondary: { href: string; label: string }[];
  labels: { open: string; close: string; index: string; more: string };
  /** Site name in the reading language — see Wordmark for why it varies. */
  siteName: string;
  nameClass?: string;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // The overlay is portalled to <body>. The masthead sets `backdrop-filter`,
  // and an ancestor with that property becomes the containing block for its
  // position:fixed descendants — which sized the overlay to the 68px header
  // instead of the viewport. Portalling lifts it clear of that.
  useEffect(() => setMounted(true), []);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Close on navigation — otherwise the overlay stays up over the new page.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    // Lock the page behind the overlay.
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;

      // Trap focus inside the panel while it is open.
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKey);
    // Move focus into the panel so a keyboard user is not left behind it.
    panelRef.current?.querySelector<HTMLElement>("a[href]")?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      previouslyFocused?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className="nav-trigger"
        aria-expanded={open}
        aria-haspopup="dialog"
        onClick={() => setOpen(true)}
      >
        <span className="nav-trigger-rules" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <span className="nav-trigger-text">{labels.open}</span>
      </button>

      {mounted &&
        createPortal(
          <div className="nav-overlay" data-open={open ? "" : undefined} role="dialog" aria-modal="true" aria-label={labels.index}>
        <div className="nav-scrim" onClick={() => setOpen(false)} />

        <div className="nav-panel" ref={panelRef}>
          <div className="shell nav-panel-head">
            <Link href="/" className="lockup" aria-label={siteName}>
              <Mark size={32} animated={open} />
              <span className={`lockup-text ${nameClass}`.trim()}>{siteName}</span>
            </Link>

            <button type="button" className="nav-close" onClick={() => setOpen(false)}>
              <span className="nav-trigger-text">{labels.close}</span>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav className="shell nav-index" aria-label={labels.index}>
            <ol>
              {sections.map((s, i) => (
                <li key={s.id} style={{ ["--i" as string]: i }}>
                  <Link
                    href={s.href}
                    className="nav-item"
                    data-current={pathname.startsWith(s.href) ? "" : undefined}
                  >
                    <span className="nav-num">{String(i + 1).padStart(2, "0")}</span>
                    <span className="nav-body">
                      <span className="nav-label">{s.label}</span>
                      <span className="nav-blurb">{s.blurb}</span>
                    </span>
                    <span className="nav-glyph deva" aria-hidden="true">{s.glyph}</span>
                  </Link>
                </li>
              ))}
            </ol>

            <div className="nav-secondary">
              <span className="nav-secondary-label">{labels.more}</span>
              <div className="nav-secondary-links">
                {secondary.map((l) => (
                  <Link key={l.href} href={l.href} className="nav-secondary-link">
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
