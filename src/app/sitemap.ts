import type { MetadataRoute } from "next";
import { getTempleRoutes } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://tattvamasi.in";
  const staticRoutes = ["/", "/verses", "/upanishads", "/teachers", "/temples", "/concepts", "/mathas", "/search", "/about"];

  // Every region and everything inside it, so a temple written in
  // depth is reachable from the sitemap rather than only by link.
  const { regions, entries } = getTempleRoutes();
  const templeRoutes = [
    ...regions.map((r) => `/temples/${r.section}`),
    ...entries.map((e) => `/temples/${e.section}/${e.entry}`),
  ];

  return [...staticRoutes, ...templeRoutes].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "daily" : "weekly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
