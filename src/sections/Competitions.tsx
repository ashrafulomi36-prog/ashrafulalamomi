"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { competitions } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";

export function Competitions() {
  return (
    <section id="competitions" className="scroll-mt-24 border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          tag="$ cat competitions.log --sort=desc"
          title="Competitions"
          description="Contests, case competitions, and academic challenges — most recent first."
        />

        <div className="overflow-hidden rounded-2xl border border-line">
          {competitions.map((c, i) => (
            <motion.div
              key={`${c.title}-${c.year}`}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 8) * 0.04 }}
              className="flex flex-col gap-2 border-b border-line bg-surface px-6 py-5 last:border-b-0 sm:flex-row sm:items-center sm:justify-between sm:px-8"
            >
              <div className="flex items-start gap-4">
                <span className="mt-1 font-mono-tag text-xs text-muted">{c.year}</span>
                <div>
                  <p className="text-sm font-medium text-ink">{c.title}</p>
                  <p className="mt-0.5 text-sm text-muted">{c.org}</p>
                </div>
              </div>
              {c.result && (
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-signal-soft px-3 py-1 font-mono-tag text-[11px] text-signal">
                  <Trophy className="h-3 w-3" />
                  {c.result}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
