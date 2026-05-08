import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://tattvamasi.in";
  const staticRoutes = ["/", "/verses", "/upanishads", "/teachers", "/temples", "/concepts", "/mathas", "/search", "/about"];
  return staticRoutes.map(route => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "daily" : "weekly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
