export type Metadata = {
  title: string;
  publishedAt: string;
  description: string;
  slug: string;
  canonicalUrl: string;
  publish: boolean;
};

export async function getBlogPosts(): Promise<Metadata[]> {
  const postsMetadata: Metadata[] = [];
  for (const post of POSTS) {
    try {
      const module = await import(`../content/${post.slug}.mdx`);
      postsMetadata.push(module.metadata);
    } catch (error) {
      console.error(`Failed to import ${post.slug}.mdx:`, error);
    }
  }
  return postsMetadata;
}

export async function getBlogPostMetadata(slug: string): Promise<Metadata> {
  const module = await import(`../content/${slug}.mdx`);
  return module.metadata;
}

export const POSTS = [
  {
    title: 'Letting go of "pixel perfect"',
    slug: "letting-go-of-pixel-perfect",
  },
  {
    title: 'Unlocking the "blog paralysis"',
    slug: "unlocking-the-blog-paralysis",
  },
  { title: "Writing on the web", slug: "writing-on-the-web" },
];
