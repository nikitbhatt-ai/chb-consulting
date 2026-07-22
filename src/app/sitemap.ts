import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";
import { getAllPostMeta } from "@/lib/blog";

/** All live routes, plus every blog post. */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/health-department-czar",
    "/multi-unit-food-safety",
    "/food-manufacturing-consulting",
    "/houston-food-safety-consultant",
    "/resources",
    "/blog",
    "/about",
    "/contact",
  ];

  const pages: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  const posts: MetadataRoute.Sitemap = getAllPostMeta().map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: post.date || undefined,
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...pages, ...posts];
}
