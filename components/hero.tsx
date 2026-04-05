"use client";

import { ElementType } from "react";
import { XIcon, GithubIcon } from "@/components/icons";
import { FC } from "react";
import { paths } from "@/constants";
import { Link } from "@/components/link";
import { motion } from "motion/react";

export const Hero: FC = () => {
  return (
    <div className="flex flex-col items-start gap-1">
      <motion.h1
        className="text-left text-3xl font-semibold select-none md:text-4xl"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          y: { duration: 0.3 },
          opacity: { duration: 0.5 },
        }}
      >
        <a
          href={paths.x}
          target="_blank"
          rel="noreferrer"
          className="group/name"
        >
          <span className="text-accent group-hover/name:text-link transition-colors duration-150">
            william
          </span>
          {/* <span className="text-accent group-hover/name:text-link transition-colors duration-150">
            {" "}
            h
          </span>
          <span className="text-muted-foreground group-hover/name:text-link transition-colors duration-150">
            ermo
          </span>
          <span className="text-accent group-hover/name:text-link transition-colors duration-150">
            zo
          </span> */}
        </a>
      </motion.h1>

      <motion.p
        className="text-foreground max-w-lg text-base text-balance md:text-lg"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          y: { duration: 0.3 },
          opacity: { duration: 0.5 },
        }}
      >
        AI-native product engineer with a keen eye for design, building high
        value user experiences, <span className="text-link italic">fast</span>.
      </motion.p>

      <motion.p
        className="text-muted-foreground text-base text-balance md:text-lg"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          y: { duration: 0.3, delay: 0.05 },
          opacity: { duration: 0.5, delay: 0.05 },
        }}
      >
        I design and build across the full product stack from idea to end user's
        device, <span className="text-link italic">end-to-end</span>.
      </motion.p>

      <motion.ul
        className="mt-2 -ml-2 flex items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.15 }}
      >
        <SocialLink href={paths.x} icon={XIcon} />
        <SocialLink
          href={paths.github}
          icon={GithubIcon}
          iconClassName="size-[18px]"
        />
      </motion.ul>
    </div>
  );
};

const SocialLink = ({
  href,
  icon: Icon,
  iconClassName,
}: {
  href: string;
  icon: ElementType;
  iconClassName?: string;
}) => {
  return (
    <li className="grid place-items-center">
      <Link
        href={href}
        className="text-muted-foreground hover:text-link rounded-xl p-2 transition-colors duration-150"
      >
        <Icon className={iconClassName ?? "size-4"} />
      </Link>
    </li>
  );
};
