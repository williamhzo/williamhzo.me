import { InlineLink } from "@/components/link";
import { paths } from "@/constants";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <div className="mx-auto flex flex-col gap-12 px-6 pt-24 font-mono">
      <Hero />

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
