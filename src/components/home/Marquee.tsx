import type { ReactNode } from "react";

/**
 * An endless horizontal shelf. The children are rendered twice and the
 * track slides by exactly one copy, so the loop has no seam; the second
 * copy is hidden from assistive tech and made inert so keyboard users
 * tab through each item once. Pauses on hover and focus; under reduced
 * motion it becomes an ordinary scrollable row.
 */
export function Marquee({ children, label }: { children: ReactNode; label?: string }) {
  return (
    <div className="marquee" role="region" aria-label={label}>
      <div className="marquee-track">
        <div className="marquee-group">{children}</div>
        <div className="marquee-group" aria-hidden="true" {...({ inert: "" } as Record<string, string>)}>
          {children}
        </div>
      </div>
    </div>
  );
}
