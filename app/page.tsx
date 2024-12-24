import { GithubIcon, XIcon } from "@/components/icons";
import { Link } from "@/components/link";
import { Username } from "@/components/username";
import { paths } from "@/constants";
import { ReactNode, ElementType } from "react";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-16">
        <div className="relative flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <h1 className="font-semibold select-none">hey, i'm william</h1>
            <Username />
          </div>

          <ul className="absolute right-0 flex items-center gap-0.5">
            <SocialLink href={paths.x} icon={XIcon} />
            <SocialLink href={paths.github} icon={GithubIcon} />
          </ul>
        </div>

        <h2 className="font-mono text-balance">
          a paris-based <span className="font-semibold">product engineer</span>{" "}
          with a keen eye for design, crafting high impact{" "}
          <span className="font-semibold">user-focused products</span>.
          currently building <InlineLink href={paths.shape}>shape</InlineLink> &{" "}
          <InlineLink href={paths.deca}>deca</InlineLink>, and having a blast.
        </h2>
      </div>

      <div>
        <h3 className="mb-4 font-semibold">playground</h3>
        <p>lorem ipsum</p>
        <p>lorem ipsum</p>
        <p>lorem ipsum</p>
        <p>lorem ipsum</p>
      </div>

      <div>
        <h3 className="mb-4 font-semibold">writing</h3>
        <p>lorem ipsum</p>
      </div>

      <div>
        <h3 className="mb-4 font-semibold">more</h3>
        <p>
          my full resume is <InlineLink href={paths.cv}>here</InlineLink>, you
          can see more of my work on{" "}
          <InlineLink href={paths.github}>github</InlineLink> and{" "}
          <InlineLink href={paths.x}>x</InlineLink> (twitter). i'm also (very
          rarely) on <InlineLink href={paths.linkedin}>linkedin</InlineLink>.
        </p>
      </div>
    </div>
  );
}

const InlineLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => {
  return (
    <Link href={href} className="font-semibold">
      {children}
    </Link>
  );
};

const SocialLink = ({
  href,
  icon: Icon,
}: {
  href: string;
  icon: ElementType;
}) => {
  return (
    <li className="grid place-items-center">
      <Link
        href={href}
        className="hover:bg-muted-background rounded-xl p-2 transition-colors duration-150"
      >
        <Icon className="text-muted-foreground size-4" />
      </Link>
    </li>
  );
};
