import type { MetadataRoute } from "next";
import { site } from "@/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
