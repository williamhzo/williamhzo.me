export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { default: Post } = await import(`@/content/${slug}.mdx`);

  return <Post />;
}

export function generateStaticParams() {
  return [
    { slug: "writing-on-the-web" },
    { slug: "unlocking-the-blog-paralysis" },
    { slug: "letting-go-of-pixel-perfect" },
  ];
}

export const dynamicParams = false;
