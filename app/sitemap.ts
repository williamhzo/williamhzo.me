import type { MetadataRoute } from "next";
import { POSTS } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = POSTS.map((post) => ({
    url: `https://williamhzo.me/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [
    {
      url: "https://williamhzo.me",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://williamhzo.me/notes",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    ...posts,
  ];
}
