import { POSTS } from "@/lib/blog";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { default: Post, metadata } = await import(`@/content/${slug}.mdx`);

  const dateObj = new Date(metadata.publishedDate);
  const formattedDate = dateObj.toLocaleDateString("us-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div>
      <div className="mb-12 flex flex-col">
        <h1>{metadata.title}</h1>
        <p>{metadata.description}</p>
        <small className="italic">{formattedDate}</small>
      </div>
      <Post />
    </div>
  );
}

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;
