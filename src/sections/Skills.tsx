"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          tag="$ ls ./skills"
          title="Skills & Toolkit"
          description="Technologies I reach for most, grouped by what they're actually used for."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (gi % 3) * 0.08 }}
              className="group rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-signal/40"
            >
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-sm font-medium text-ink">{group.category}</h3>
                <span className="font-mono-tag text-[10px] text-muted">
                  {group.eyebrow}
                </span>
              </div>
              <ul className="space-y-4">
                {group.skills.map((skill, si) => (
                  <li key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between text-xs">
                      <span className="text-ink/80">{skill.name}</span>
                      <span className="font-mono-tag text-muted">{skill.level}%</span>
                    </div>
                    <div className="h-1 w-full overflow-hidden rounded-full bg-line">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.7, delay: si * 0.06, ease: "easeOut" }}
                        className="h-full rounded-full bg-signal"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
