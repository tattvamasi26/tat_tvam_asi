import type { MetadataRoute } from "next";
import { getTempleRoutes } from "@/lib/data";
import { DEVATAS, MANDALA_COUNT, suktasFor } from "@/lib/rigveda";
import { bhajanGroups } from "@/lib/bhajans";
import { FESTIVALS } from "@/lib/seed/festivals";
import { RITUALS } from "@/lib/seed/rituals";
import { PURANAS } from "@/lib/seed/puranas";
import { STORIES } from "@/lib/seed/stories";
import { PRACTICES } from "@/lib/seed/practice";
import { LOCALES } from "@/i18n/config";
import { TEACHERS } from "@/lib/seed/teachers";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://tattvamasi.in";
  const staticRoutes = ["/", "/verses", "/upanishads", "/teachers", "/temples", "/concepts", "/mathas", "/search", "/about", "/vedas", "/vedas/rigveda", "/acharyas", "/shastras"];

  // Every region and everything inside it, so a temple written in
  // depth is reachable from the sitemap rather than only by link.
  const { regions, entries } = getTempleRoutes();
  const templeRoutes = [
    ...regions.map((r) => `/temples/${r.section}`),
    ...entries.map((e) => `/temples/${e.section}/${e.entry}`),
  ];

  // The Rigveda's ten mandalas and its devatas. The 1,028 sukta URLs
  // are left out on purpose: each is reachable from its mandala, and a
  // sitemap is not the place to enumerate a whole Veda.
  const rigvedaRoutes = [
    ...Array.from({ length: MANDALA_COUNT }, (_, i) => `/vedas/rigveda/${i + 1}`),
    ...DEVATAS.filter((d) => suktasFor(d.id).length > 0).map((d) => `/vedas/rigveda/devata/${d.id}`),
  ];

  const acharyaRoutes = TEACHERS.map((t) => `/acharyas/${t.slug}`);

  // The front door and the twenty-two groups, not the 913 songs — the
  // same line the Rigveda draws at its 1,028 suktas.
  const bhajanRoutes = ["/bhajans", ...bhajanGroups(LOCALES[0]).map((g) => `/bhajans/${g.id}`)];

  const festivalRoutes = ["/festivals", ...FESTIVALS.map((f) => `/festivals/${f.slug}`)];
  const ritualRoutes = ["/rituals", ...RITUALS.map((r) => `/rituals/${r.slug}`)];
  const puranaRoutes = [
    "/puranas",
    ...PURANAS.map((p) => `/puranas/${p.slug}`),
    "/puranas/stories",
    ...STORIES.map((x) => `/puranas/stories/${x.slug}`),
  ];
  const practiceRoutes = ["/practice", ...PRACTICES.map((p) => `/practice/${p.slug}`)];

  return [
    ...staticRoutes,
    ...templeRoutes,
    ...rigvedaRoutes,
    ...acharyaRoutes,
    ...bhajanRoutes,
    ...ritualRoutes,
    ...puranaRoutes,
    ...festivalRoutes,
    ...practiceRoutes,
  ].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "daily" : "weekly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
