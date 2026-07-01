"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  tag: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  tag,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 max-w-2xl md:mb-16",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 font-mono-tag text-xs text-signal",
          align === "center" && "mx-auto"
        )}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-signal" />
        {tag}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
        className="text-balance text-3xl font-medium tracking-tight text-ink sm:text-4xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          className="mt-4 text-balance text-base leading-relaxed text-muted"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
