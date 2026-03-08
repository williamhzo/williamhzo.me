type ImportedPostMetadata = {
  title: string;
  publishedDate: string;
  description: string;
  canonicalUrl: string;
  publish: boolean;
};

export type Metadata = ImportedPostMetadata & {
  slug: string;
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
      const postModule = (await import(`../content/${post.slug}.mdx`)) as {
        metadata: ImportedPostMetadata;
      };
      postsMetadata.push({ ...postModule.metadata, slug: post.slug });
    } catch (error) {
      console.error(`Failed to import ${post.slug}.mdx:`, error);
    }
  }
  return postsMetadata;
}

export async function getBlogPostMetadata(slug: string): Promise<Metadata> {
  const postModule = (await import(`../content/${slug}.mdx`)) as {
    metadata: ImportedPostMetadata;
  };
  return { ...postModule.metadata, slug };
}
