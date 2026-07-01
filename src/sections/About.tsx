"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { personal, education, certifications } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          tag="$ whoami"
          title="About"
          description="A quick summary of who I am and what I've been building."
        />

        <div className="grid gap-12 md:grid-cols-5 md:gap-16">
          <div className="md:col-span-3">
            {personal.aboutParagraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="mb-5 text-balance leading-relaxed text-muted last:mb-0"
              >
                {p}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex items-center gap-2 font-mono-tag text-xs text-muted"
            >
              <MapPin className="h-3.5 w-3.5 text-signal" />
              {personal.location}
            </motion.div>
          </div>

          <div className="md:col-span-2">
            <h3 className="mb-5 flex items-center gap-2 font-mono-tag text-xs uppercase tracking-wider text-muted">
              <GraduationCap className="h-4 w-4 text-signal" />
              Education
            </h3>
            <ul className="space-y-6 border-l border-line pl-6">
              {education.map((item, i) => (
                <motion.li
                  key={item.degree}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="relative"
                >
                  <span
                    className={
                      "absolute -left-[27px] top-1.5 h-2 w-2 rounded-full " +
                      (item.status === "current" ? "bg-signal" : "bg-line")
                    }
                  />
                  <p className="text-sm font-medium text-ink">{item.degree}</p>
                  <p className="mt-1 text-sm text-muted">{item.institution}</p>
                  <p className="mt-1 font-mono-tag text-xs text-muted/70">
                    {item.period} · {item.detail}
                  </p>
                </motion.li>
              ))}
            </ul>

            <h3 className="mb-4 mt-10 font-mono-tag text-xs uppercase tracking-wider text-muted">
              Certifications
            </h3>
            <ul className="space-y-3">
              {certifications.map((cert) => (
                <li key={cert.title} className="text-sm">
                  <span className="text-ink">{cert.title}</span>
                  <span className="text-muted"> — {cert.issuer}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
