"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { FaYoutube } from "react-icons/fa";
import { contentCreation, achievements } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";

export function ContentCreation() {
  return (
    <section className="scroll-mt-24 border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading tag="$ cat highlights.md" title="Content & Achievements" />

        <div className="grid gap-6 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-line bg-surface p-8 lg:col-span-2"
          >
            <FaYoutube className="mb-4 h-6 w-6 text-signal" />
            <h3 className="mb-2 text-lg font-medium text-ink">{contentCreation.heading}</h3>
            <p className="mb-5 text-sm leading-relaxed text-muted">
              {contentCreation.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {contentCreation.topics.map((topic) => (
                <span
                  key={topic}
                  className="rounded-full border border-line px-2.5 py-1 font-mono-tag text-[10px] text-muted"
                >
                  {topic}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="rounded-2xl border border-line bg-surface p-8 lg:col-span-3"
          >
            <Award className="mb-4 h-6 w-6 text-signal" />
            <h3 className="mb-4 text-lg font-medium text-ink">Achievements</h3>
            <ul className="space-y-3">
              {achievements.map((a) => (
                <li
                  key={a.title}
                  className="flex items-center justify-between gap-4 border-b border-line pb-3 text-sm last:border-b-0 last:pb-0"
                >
                  <span className="text-ink/85">{a.title}</span>
                  <span className="shrink-0 font-mono-tag text-xs text-muted">{a.year}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
