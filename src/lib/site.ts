// The site's own address, in one place.
//
// tattvam-asi.org is the canonical domain; tattvam-asi.in redirects to
// it (set in the Vercel dashboard, not here). NEXT_PUBLIC_SITE_URL can
// override it for a preview or a move, so nothing else in the code
// should spell the domain out.
const FALLBACK = "https://tattvam-asi.org";

function origin(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL;
  if (configured) {
    try {
      return new URL(configured).origin;
    } catch {
      // fall through to the canonical domain
    }
  }
  return FALLBACK;
}

/** e.g. "https://tattvam-asi.org", with no trailing slash. */
export const SITE_URL = origin();
