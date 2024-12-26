import { Link } from "@/components/link";
import { SpinningText } from "@/components/spinning-text";
import { Username } from "@/components/username";
import { paths } from "@/constants";
import { ElementType, ReactNode } from "react";
import { XIcon } from "@/components/icons";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <div className="mx-auto flex flex-col gap-12 px-6 font-mono">
      <div className="mx-auto flex min-h-[100dvh] w-full max-w-screen-xl flex-col gap-4 py-64">
        <div className="flex flex-col items-end">
          <h1 className="text-right font-sans text-9xl font-semibold tracking-tight select-none">
            hey, <br />
            i&apos;m william
          </h1>

          <div className="-mt-1.5 flex flex-col items-end">
            <Username />

            <ul className="mt-1 flex items-center gap-1">
              <SocialLink href={paths.x} icon={XIcon} />
              <SocialLink href={paths.github} icon={GithubIcon} />
            </ul>
          </div>
        </div>

        <div className="group mt-12 flex items-center justify-between">
          <div className="flex max-w-prose flex-col gap-0 text-xl text-balance">
            <h2>
              a paris-based <em>product engineer</em> with a keen eye for
              design, crafting high impact <em>user-focused products</em>.
            </h2>

            <p>
              currently building{" "}
              <InlineLink href={paths.shape}>shape</InlineLink> &{" "}
              <InlineLink href={paths.deca}>deca</InlineLink>, and{" "}
              <em>having a blast</em>.
            </p>
          </div>

          <SpinningText
            className="mr-14 font-mono uppercase opacity-0 transition-opacity duration-750 group-hover:opacity-100"
            radius={5}
            duration={15}
          >
            {/* {`love • create • share • expand • connect • `} */}
            {`le regard fixé sur un daruma • `}
          </SpinningText>
        </div>
      </div>

      <div className="mx-auto max-w-screen-md">
        <div>
          <h3 className="mb-4 font-sans text-7xl font-light tracking-tight">
            playground
          </h3>
          <div>lorem ipsum</div>
          <div>lorem ipsum</div>
          <div>lorem ipsum</div>
          <div>lorem ipsum</div>
        </div>

        <div>
          <h3 className="mb-4 font-sans text-7xl font-light tracking-tight">
            writing
          </h3>
          <div>lorem ipsum</div>
          <div>lorem ipsum</div>
          <div>lorem ipsum</div>
        </div>

        <div>
          <h3 className="mb-4 font-sans text-7xl font-light tracking-tight">
            more
          </h3>
          <p>
            my full resume is <InlineLink href={paths.cv}>here</InlineLink>, you
            can see more of my work on{" "}
            <InlineLink href={paths.github}>github</InlineLink> and{" "}
            <InlineLink href={paths.x}>x (twitter)</InlineLink>. i&apos;m also
            (very rarely) on{" "}
            <InlineLink href={paths.linkedin}>linkedin</InlineLink>.
          </p>
        </div>
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
    <Link href={href} className="font-semibold underline hover:no-underline">
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
