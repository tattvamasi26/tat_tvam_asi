"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { SIGNED_IN_COOKIE } from "@/lib/security/reading-gate";

/**
 * The masthead's account button. Signed in, it opens the account page;
 * signed out, it opens sign-in and brings the reader back to the page
 * they were on. Which one is read from a plain cookie the middleware
 * keeps beside the verified session, so the masthead costs no session
 * lookup; the pages behind it check the session themselves.
 */
export function AccountButton({ signInLabel, accountLabel }: { signInLabel: string; accountLabel: string }) {
  const pathname = usePathname();
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    setSignedIn(document.cookie.split("; ").some((c) => c.startsWith(SIGNED_IN_COOKIE + "=")));
  }, [pathname]);

  const back = pathname === "/signin" || pathname === "/account" ? "/" : pathname;
  const href = signedIn ? "/account" : `/signin?next=${encodeURIComponent(back)}`;
  const label = signedIn ? accountLabel : signInLabel;

  return (
    // A plain <a>: neither page may be prefetched, and both read
    // cookies fresh.
    <a href={href} className="icon-btn" aria-label={label} title={label} data-signed-in={signedIn ? "" : undefined}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="17" height="17" aria-hidden="true">
        <circle cx="12" cy="8.5" r="3.8" />
        <path d="M4.5 20c1.3-3.6 4.2-5.4 7.5-5.4s6.2 1.8 7.5 5.4" strokeLinecap="round" />
      </svg>
    </a>
  );
}
