/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV !== "production";

// The admin's sign-in form talks to Supabase from the browser, so its
// origin has to be allowed to connect. Nothing else leaves the page.
let supabaseOrigin = "";
try {
  if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
    supabaseOrigin = new URL(process.env.NEXT_PUBLIC_SUPABASE_URL).origin;
  }
} catch {
  // A malformed URL just leaves Supabase out; sign-in then fails loudly.
}

/**
 * Content Security Policy. What the site loads, and from where:
 * - scripts and styles: its own. 'unsafe-inline' because the App
 *   Router writes its page data as inline scripts and the pages use
 *   inline styles; there is no user-written HTML anywhere for an
 *   attacker to inject into (no dangerouslySetInnerHTML).
 * - pictures: its own, Wikimedia Commons and YouTube stills.
 * - frames: only the youtube-nocookie player, after the reader presses play.
 * - fonts: self-hosted by next/font.
 * It may not be framed by anyone (clickjacking), and forms post only
 * to itself.
 */
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://upload.wikimedia.org https://i.ytimg.com",
  "font-src 'self' data:",
  `connect-src 'self'${supabaseOrigin ? ` ${supabaseOrigin} ${supabaseOrigin.replace(/^https/, "wss")}` : ""}${isDev ? " ws:" : ""}`,
  "frame-src https://www.youtube-nocookie.com",
  "media-src 'self'",
  "worker-src 'self' blob:",
  "manifest-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  // Production is https only; a stray http:// reference is upgraded
  // rather than loaded in the clear. Not in dev, which runs on http.
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: [
      "camera=()",
      "microphone=()",
      "geolocation=()",
      "payment=()",
      "usb=()",
      "interest-cohort=()",
      "browsing-topics=()",
      // The practice timer goes full screen and keeps the screen lit;
      // the stotra player may go full screen too.
      'fullscreen=(self "https://www.youtube-nocookie.com")',
      "screen-wake-lock=(self)",
      'autoplay=(self "https://www.youtube-nocookie.com")',
      'encrypted-media=(self "https://www.youtube-nocookie.com")',
      'picture-in-picture=(self "https://www.youtube-nocookie.com")',
    ].join(", "),
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  // Another site's page cannot embed these files: no hotlinked pictures.
  { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
  { key: "X-DNS-Prefetch-Control", value: "off" },
  { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
  // Opt-outs from AI training and text-and-data mining. `noai` and
  // `noimageai` are read by some crawlers; `tdm-reservation` is the W3C
  // TDMRep signal, which the EU's copyright directive gives legal force.
  { key: "X-Robots-Tag", value: "noai, noimageai" },
  { key: "tdm-reservation", value: "1" },
  { key: "tdm-policy", value: "https://tattvamasi.in/rights" },
];

const nextConfig = {
  // A production build normally writes to .next, which the dev server
  // is also using — so NEXT_DIST_DIR lets a build run without stopping
  // dev. Unset, nothing changes.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  // Don't advertise the framework.
  poweredByHeader: false,
  images: {
    // Only the hosts the site actually uses; each one added is a host the
    // optimiser will fetch from on a stranger's request.
    remotePatterns: [
      { protocol: "https", hostname: "upload.wikimedia.org" },
      // YouTube thumbnails for the lecture links on the verse pages.
      { protocol: "https", hostname: "i.ytimg.com" },
    ],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

module.exports = nextConfig;
