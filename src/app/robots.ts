import type { MetadataRoute } from "next";
import { AI_CRAWLERS, TRAP_PATH } from "@/lib/security/bots";
import { SITE_URL } from "@/lib/site";

/**
 * Search engines may index the site; AI crawlers and dataset builders
 * may not read it at all. Each AI token gets its own `Disallow: /`
 * group, because a crawler reads only the group naming it and would
 * skip the general rules.
 *
 * Nobody may follow the trap link, so only what ignores this file is
 * caught by it (middleware.ts).
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...AI_CRAWLERS.map((c) => ({ userAgent: c.token, disallow: "/" })),
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/api/", "/account", "/auth/", "/signin", TRAP_PATH],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
