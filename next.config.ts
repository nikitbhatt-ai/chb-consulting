import type { NextConfig } from "next";

// Old WordPress post URLs -> new blog routes (301 permanent redirects).
const OLD_POST_SLUGS = [
  "cyclospora-outbreak",
  "2027-presidential-budget-food-safety",
  "the-digital-revolution-transforming-food-safety",
  "public-health-agency-and-robust-technology",
  "food-safety-culture-recipe",
  "cost-to-closing-your-business-for-foodborne-illness-outbreak",
];

const nextConfig: NextConfig = {
  async redirects() {
    return OLD_POST_SLUGS.map((slug) => ({
      source: `/${slug}`,
      destination: `/blog/${slug}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
