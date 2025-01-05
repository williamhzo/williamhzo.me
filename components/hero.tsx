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
      <div className="group -mt-8 flex items-center justify-end gap-32">
        <SpinningText
          className="-mt-4 font-mono text-sm uppercase opacity-0 transition-opacity duration-750 group-hover:opacity-100"
          radius={5.5}
          duration={15}
        >
          {`web3 • engineering • design • craft • `}
        </SpinningText>

        <div className="flex flex-col items-end">
          <motion.h1
            className="text-right font-sans text-4xl font-semibold tracking-tight text-black select-none"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              y: { duration: 0.3 },
              opacity: { duration: 0.5 },
            }}
          >
            hey, <br />
            i&apos;m william
          </motion.h1>

          <motion.span
            className="text-muted-foreground/75 items-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.15 }}
          >
            — @williamhzo
          </motion.span>

          <motion.ul
            className="flex items-center gap-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.15 }}
          >
            <SocialLink href={paths.x} icon={XIcon} />
            <SocialLink href={paths.github} icon={GithubIcon} />
          </motion.ul>
        </div>
      </div>

      <motion.div
        className="group mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.15 }}
      >
        <div className="flex max-w-prose flex-col gap-0 text-balance">
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
