"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects, type Project } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";

function ProjectCard({ project, onOpen, index }: { project: Project; onOpen: () => void; index: number }) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.07 }}
      className="group flex flex-col rounded-2xl border border-line bg-surface p-6 text-left transition-all hover:-translate-y-1 hover:border-signal/50 hover:shadow-[0_20px_40px_-24px_rgba(15,157,99,0.35)] focus-visible:-translate-y-1"
    >
      <div className="mb-6 flex aspect-[16/10] items-center justify-center rounded-xl border border-line bg-surface-2 font-mono-tag text-xs text-muted">
        <span className="opacity-60">{project.category}</span>
      </div>
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-medium text-ink">{project.title}</h3>
        <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal" />
      </div>
      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-line px-2.5 py-1 font-mono-tag text-[10px] text-muted"
          >
            {tech}
          </span>
        ))}
        {project.stack.length > 3 && (
          <span className="rounded-full border border-line px-2.5 py-1 font-mono-tag text-[10px] text-muted">
            +{project.stack.length - 3}
          </span>
        )}
      </div>
    </motion.button>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[80] flex items-end justify-center bg-ink/50 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90svh] w-full max-w-2xl overflow-y-auto rounded-t-3xl border border-line bg-paper p-7 sm:rounded-3xl sm:p-9"
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="mb-2 font-mono-tag text-xs text-signal">{project.category}</p>
            <h3 className="text-2xl font-medium text-ink">{project.title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-muted hover:text-ink"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <p className="mb-6 leading-relaxed text-muted">{project.description}</p>

        <div className="mb-6">
          <h4 className="mb-3 font-mono-tag text-xs uppercase tracking-wider text-muted">
            Key Features
          </h4>
          <ul className="space-y-2">
            {project.features.map((f) => (
              <li key={f} className="flex gap-2 text-sm text-ink/85">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6 grid gap-6 sm:grid-cols-2">
          <div>
            <h4 className="mb-2 font-mono-tag text-xs uppercase tracking-wider text-muted">
              Challenges
            </h4>
            <p className="text-sm leading-relaxed text-muted">{project.challenges}</p>
          </div>
          <div>
            <h4 className="mb-2 font-mono-tag text-xs uppercase tracking-wider text-muted">
              What I Learned
            </h4>
            <p className="text-sm leading-relaxed text-muted">{project.learned}</p>
          </div>
        </div>

        <div className="mb-7 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-line bg-surface px-3 py-1 font-mono-tag text-[11px] text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-signal"
            >
              Live Demo <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-signal hover:text-signal"
            >
              <FaGithub className="h-3.5 w-3.5" /> GitHub
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const [active, setActive] = React.useState<Project | null>(null);

  return (
    <section id="projects" className="scroll-mt-24 border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          tag="$ ls ./projects"
          title="Selected Projects"
          description="Product builds, automation pipelines, and coursework projects — tap any card for the full breakdown."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={i}
              onOpen={() => setActive(project)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}
