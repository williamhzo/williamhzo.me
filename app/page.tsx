import { InlineLink } from "@/components/link";
import { paths } from "@/constants";
import { Hero } from "@/components/hero";
import { SpinningText } from "@/components/spinning-text";
import Link from "next/link";
import { getBlogPosts } from "@/lib/blog";
import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

export default async function Home() {
  const posts = await getBlogPosts();

  return (
    <div className="mx-auto flex max-w-(--breakpoint-md) flex-col gap-12 px-6 pt-24 font-mono">
      <div className="mx-auto flex w-full max-w-(--breakpoint-xl) flex-col gap-4">
        <div className="group -mt-8 flex items-center justify-start gap-32">
          <Hero />

          <SpinningText
            className="-mt-4 font-mono text-sm uppercase opacity-0 transition-opacity duration-750 group-hover:opacity-100"
            radius={5.5}
            duration={15}
          >
            {`web3 • engineering • design • craft • `}
          </SpinningText>
        </div>

        <HomeSection title="today" className="mt-12 max-w-prose">
          <h2 className="text-balance">
            Paris-based <strong>product engineer</strong> with a keen eye for
            design, crafting high impact <strong>user-focused products</strong>.
          </h2>

          <p className="text-balance">
            currently building <InlineLink href={paths.shape}>shape</InlineLink>{" "}
            & <InlineLink href={paths.deca}>deca</InlineLink>, and{" "}
            <strong>having a blast</strong>.
          </p>

          <p>
            always open to chat about the evm, design, digital objects,
            community, product, motorcycles, building for humans & more.
          </p>
        </HomeSection>
      </div>

      <HomeSection title="writing">
        <ul className="flex flex-col gap-6">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={paths.post(post.slug)}
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
      </HomeSection>

      <HomeSection title="more" contentClassName="max-w-prose">
        <p className="text-pretty">
          you can reach me on{" "}
          <InlineLink href={paths.x}>x (twitter)</InlineLink>. my full resume is{" "}
          <InlineLink href={paths.cv}>here</InlineLink> and you can see more of
          my work on <InlineLink href={paths.github}>github</InlineLink>.
        </p>

        <p>
          <InlineLink
            href={paths.repo}
            className="text-muted-foreground font-normal"
          >
            source code
          </InlineLink>
        </p>
      </HomeSection>
    </div>
  );
}

function HomeSection({
  title,
  children,
  className,
  contentClassName,
}: {
  title: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
}) {
  return (
    <section className={cn("flex flex-col gap-4", className)}>
      <h3 className="text-accent font-sans font-semibold">{title}</h3>
      <div className={cn("flex flex-col gap-6", contentClassName)}>
        {children}
      </div>
    </section>
  );
}
