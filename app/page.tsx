import { InlineLink } from "@/components/link";
import { paths } from "@/constants";
import { Hero } from "@/components/hero";
import { SpinningText } from "@/components/spinning-text";
import Link from "next/link";
import { getBlogPosts } from "@/lib/blog";

export default async function Home() {
  const posts = await getBlogPosts();

  return (
    <div className="mx-auto flex max-w-screen-lg flex-col gap-12 px-6 pt-24 font-mono">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-4">
        <div className="group -mt-8 flex items-center justify-end gap-32">
          <SpinningText
            className="-mt-4 font-mono text-sm uppercase opacity-0 transition-opacity duration-750 group-hover:opacity-100"
            radius={5.5}
            duration={15}
          >
            {`web3 • engineering • design • craft • `}
          </SpinningText>

          <Hero />
        </div>

        <div className="group mt-12 flex max-w-prose flex-col gap-0 text-balance">
          <h2>
            a paris-based <strong>product engineer</strong> with a keen eye for
            design, crafting high impact <strong>user-focused products</strong>.
          </h2>

          <p className="mt-6">
            currently building <InlineLink href={paths.shape}>shape</InlineLink>{" "}
            & <InlineLink href={paths.deca}>deca</InlineLink>, and{" "}
            <strong>having a blast</strong>.
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-accent mb-4 font-sans font-semibold">riting</h3>

        <ul className="flex flex-col gap-6">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={paths.notes(post.slug)}
                className="group flex flex-col items-start gap-0"
              >
                <span className="group-hover:text-foreground text-accent font-semibold transition-colors duration-150">
                  {post.title}
                </span>
                <span className="text-muted-foreground">
                  {post.description.replace(/\.$/, "")}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-accent mb-4 font-sans font-semibold">more</h3>
        <p className="max-w-prose text-pretty">
          you can reach me on{" "}
          <InlineLink href={paths.x}>x (twitter)</InlineLink>. my full resume is{" "}
          <InlineLink href={paths.cv}>here</InlineLink> and you can see more of
          my work on <InlineLink href={paths.github}>github</InlineLink>.
          i&apos;m also (very rarely) on{" "}
          <InlineLink href={paths.linkedin}>linkedin</InlineLink>.
        </p>
      </div>
    </div>
  );
}
