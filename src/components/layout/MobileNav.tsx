"use client";

import { useState } from "react";
import Link from "next/link";

/**
 * The drawer is rendered inside the sticky masthead, so it inherits the
 * blur and stays pinned while open. Links close it on click — otherwise
 * the drawer would still be open behind the newly navigated page.
 */
export function MobileNav({
  links,
  searchLabel,
  aboutLabel,
}: {
  links: { href: string; label: string }[];
  searchLabel: string;
  aboutLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const all = [...links, { href: "/search", label: searchLabel }, { href: "/about", label: aboutLabel }];

  return (
    <>
      <button
        type="button"
        className="navtoggle"
        aria-expanded={open}
        aria-label="Menu"
        onClick={() => setOpen((v) => !v)}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="18" height="18">
          {open ? (
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          ) : (
            <path d="M4 8h16M4 16h16" strokeLinecap="round" />
          )}
        </svg>
      </button>

      {open && (
        <div className="drawer" style={{ position: "absolute", left: 0, right: 0, top: "68px" }}>
          <div className="shell">
            {all.map((l) => (
              <Link key={l.href} href={l.href} className="drawer-link" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
