"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FREE_READS, LEFT_COOKIE, SIGNED_IN_COOKIE, isGatedPath } from "@/lib/security/reading-gate";
import { Arrow } from "@/components/ui/Arrow";

type Labels = { leftOne: string; leftMany: string; leftNone: string; cta: string; close: string };

function readCookie(name: string): string | null {
  const hit = document.cookie.split("; ").find((c) => c.startsWith(name + "="));
  return hit ? decodeURIComponent(hit.slice(name.length + 1)) : null;
}

/**
 * A small card at the foot of a reading page, for a signed-out reader
 * with two or fewer free pages left, so the sign-in page never comes as
 * a surprise. It reads the count the middleware leaves in a plain
 * cookie; the signed cookie is what actually counts. Closed, it stays
 * closed for the rest of the visit at that count.
 */
export function MeterNotice({ labels }: { labels: Labels }) {
  const pathname = usePathname();
  const [left, setLeft] = useState<number | null>(null);

  useEffect(() => {
    setLeft(null);
    // Not on a missing page: there is nothing there to read.
    if (!isGatedPath(pathname) || readCookie(SIGNED_IN_COOKIE) || document.querySelector("[data-not-found]")) return;
    // No count means the meter is not running (sign-in switched off):
    // say nothing. Number(null) is 0, which once told every reader on
    // the live site that they had used their last free page.
    const raw = readCookie(LEFT_COOKIE);
    if (raw === null || raw.trim() === "") return;
    const n = Number(raw);
    if (!Number.isFinite(n) || n < 0 || n > 2 || n >= FREE_READS) return;
    try {
      if (sessionStorage.getItem("tta_meter_closed") === String(n)) return;
    } catch {
      // Storage refused: show it anyway.
    }
    setLeft(n);
  }, [pathname]);

  if (left === null) return null;

  const close = () => {
    try {
      sessionStorage.setItem("tta_meter_closed", String(left));
    } catch {
      // Nothing to remember it in; it closes for this page only.
    }
    setLeft(null);
  };
  const text = left === 0 ? labels.leftNone : left === 1 ? labels.leftOne : labels.leftMany.replace("{n}", String(left));

  return (
    <aside className="meter-notice" role="status">
      <p className="meter-notice-text">{text}</p>
      <div className="meter-notice-actions">
        {/* A plain <a>: the sign-in page reads cookies fresh. */}
        <a className="btn" href={`/signin?next=${encodeURIComponent(pathname)}`}>
          {labels.cta} <Arrow />
        </a>
        <button type="button" className="meter-notice-close" aria-label={labels.close} onClick={close}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>
    </aside>
  );
}
