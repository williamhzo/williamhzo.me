export type Metadata = {
  title: string;
  publishedAt: string;
  description: string;
  slug: string;
  canonicalUrl: string;
  publish: boolean;
};

export const POSTS = [
  { title: "Building on Shape", slug: "shape" },
  { title: 'Letting go of "pixel perfect"', slug: "pixel-perfect" },
  { title: 'Unlocking the "blog paralysis"', slug: "blog-paralysis" },
  { title: "Writing on the web", slug: "writing" },
];

export async function getBlogPosts(): Promise<Metadata[]> {
  const postsMetadata: Metadata[] = [];
  for (const post of POSTS) {
    try {
      const module = await import(`../content/${post.slug}.mdx`);
      postsMetadata.push({ ...module.metadata, slug: post.slug });
    } catch (error) {
      console.error(`Failed to import ${post.slug}.mdx:`, error);
    }
  }
  return postsMetadata;
}

export async function getBlogPostMetadata(slug: string): Promise<Metadata> {
  const module = await import(`../content/${slug}.mdx`);
  return { ...module.metadata, slug };
}
