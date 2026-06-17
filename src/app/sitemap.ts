import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { specialties } from "@/lib/specialties";
import { libraryCategories } from "@/lib/library";
import { getAllBlogSlugs } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/sobre-el-doctor",
    "/especialidades",
    "/preguntas-frecuentes",
    "/biblioteca-educativa",
    "/blog",
    "/contacto",
    "/agenda",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const specialtyRoutes = specialties.map((s) => ({
    url: `${siteConfig.url}/especialidades/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const libraryRoutes = libraryCategories.map((c) => ({
    url: `${siteConfig.url}/biblioteca-educativa/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const libraryTopicRoutes = libraryCategories.flatMap((c) =>
    c.topics.map((t) => ({
      url: `${siteConfig.url}/biblioteca-educativa/${c.slug}/${t.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  const blogRoutes = getAllBlogSlugs().map((slug) => ({
    url: `${siteConfig.url}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...specialtyRoutes, ...libraryRoutes, ...libraryTopicRoutes, ...blogRoutes];
}
