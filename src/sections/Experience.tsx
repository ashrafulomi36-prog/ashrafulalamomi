"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          tag="$ cat experience.log"
          title="Experience & Leadership"
          description="Ventures I've founded and roles I've taken on across student organizations."
        />

        <ol className="relative space-y-10 border-l border-line pl-8 sm:pl-10">
          {experience.map((item, i) => (
            <motion.li
              key={`${item.title}-${item.org}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative"
            >
              <span className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full border border-line bg-paper sm:-left-[49px]">
                <span className="h-2 w-2 rounded-full bg-signal" />
              </span>

              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-base font-medium text-ink">
                  {item.title} <span className="text-muted">· {item.org}</span>
                </h3>
                <span className="font-mono-tag text-xs text-muted">{item.period}</span>
              </div>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                {item.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line px-2.5 py-1 font-mono-tag text-[10px] text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
