"use client";

import { SpinningText } from "@/components/spinning-text";
import { ElementType } from "react";
import { XIcon } from "@/components/icons";
import { GithubIcon } from "@/components/icons";
import { FC } from "react";
import { paths } from "@/constants";
import { InlineLink, Link } from "@/components/link";
import { motion, Variants } from "motion/react";
import { useCopyToClipboard } from "@/hooks";
import { Clipboard, Check } from "lucide-react";

export const Hero: FC = () => {
  const [copiedText, copy] = useCopyToClipboard();

  return (
    <div className="mx-auto flex min-h-[100dvh] w-full max-w-screen-xl flex-col gap-4">
      <div className="flex flex-col items-end">
        <motion.h1
          className="text-right font-sans text-8xl font-semibold tracking-tight text-black select-none"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            y: { duration: 0.3 },
            opacity: { duration: 0.5 },
          }}
        >
          hey, <br />
          i&apos;m william
        </motion.h1>

        <motion.div
          className="-mt-1.5 flex flex-col items-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button
            className="group text-muted-foreground/75 relative cursor-pointer items-center gap-1"
            onClick={() => copy("williamhzo")}
          >
            — @williamhzo
            <span className="absolute top-1/2 right-0 -translate-y-1/2 opacity-0 transition-all duration-200 group-hover:translate-x-4 group-hover:opacity-100">
              {copiedText ? (
                <Check className="size-3" />
              ) : (
                <Clipboard className="size-3" />
              )}
            </span>
          </button>

          <ul className="mt-1 flex items-center gap-1">
            <SocialLink href={paths.x} icon={XIcon} />
            <SocialLink href={paths.github} icon={GithubIcon} />
          </ul>
        </motion.div>
      </div>

      <motion.div
        className="group mt-12 flex items-center justify-between"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          y: { duration: 0.4 },
          opacity: { duration: 0.5 },
        }}
      >
        <div className="flex max-w-prose flex-col gap-0 text-2xl text-balance">
          <h2>
            a paris-based <em>product engineer</em> with a keen eye for design,
            crafting high impact <em>user-focused products</em>.
          </h2>

          <p className="mt-6">
            currently building <InlineLink href={paths.shape}>shape</InlineLink>{" "}
            & <InlineLink href={paths.deca}>deca</InlineLink>, and{" "}
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
      </motion.div>
    </div>
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
