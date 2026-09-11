"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * The few links that sit in the masthead itself. A client component
 * only so it can mark the section you are in; the labels arrive
 * already translated from the server.
 */
export function MastheadLinks({
  links,
  label,
}: {
  links: { href: string; label: string }[];
  label: string;
}) {
  const pathname = usePathname();

  return (
    <nav className="masthead-links" aria-label={label}>
      {links.map((l) => {
        const current = pathname.startsWith(l.href);
        return (
          <Link
            key={l.href}
            href={l.href}
            className="masthead-link"
            data-current={current ? "" : undefined}
            aria-current={current ? "page" : undefined}
          >
            {l.label}
          </Link>
        );
      })}
    </nav>
  );
}
