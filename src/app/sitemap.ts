import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

/**
 * Sitemap. Only live pages are listed so we never point search engines
 * at a page that does not exist yet. Add routes here as each page ships.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
