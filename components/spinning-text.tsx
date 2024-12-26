"use client";

import { cn } from "@/utils";
import { motion, Transition, Variants } from "motion/react";
import React, { CSSProperties } from "react";

type SpinningTextProps = {
  children: string;
  className?: string;
  radius?: number;
  duration?: number;
};

export function SpinningText({
  children,
  className,
  radius = 5,
  duration = 10,
}: SpinningTextProps) {
  const letters = children.split("");
  const totalLetters = letters.length;

  return (
    <motion.div
      className={cn("relative select-none", className)}
      initial="hidden"
      animate="visible"
      variants={{ visible: { rotate: 360 } }}
      transition={{ repeat: Infinity, ease: "linear", duration }}
    >
      {letters.map((letter, index) => (
        <motion.span
          aria-hidden="true"
          key={`${index}-${letter}`}
          variants={{
            hidden: { opacity: 1 },
            visible: { opacity: 1 },
          }}
          className="absolute top-1/2 left-1/2 inline-block"
          style={
            {
              "--index": index,
              "--total": totalLetters,
              "--radius": radius,
              fontSize: "1rem",
              transform: `
            translate(-50%, -50%)
            rotate(calc(360deg / var(--total) * var(--index)))
            translateY(calc(var(--radius, 5) * -1ch))
            `,
              transformOrigin: "center",
            } as CSSProperties
          }
        >
          {letter}
        </motion.span>
      ))}
      <span className="sr-only">{children}</span>
    </motion.div>
  );
}
