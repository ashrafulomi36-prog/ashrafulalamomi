"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowRight, FileDown } from "lucide-react";
import { personal } from "@/data/portfolio";
import { MagneticButton } from "@/components/MagneticButton";

const HeroCanvas = dynamic(
  () => import("@/components/HeroCanvas").then((m) => m.HeroCanvas),
  { ssr: false }
);

function RoleCycler() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % personal.roles.length);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-flex h-[1.3em] min-w-[13ch] items-center overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={personal.roles[index]}
          initial={{ y: "60%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-60%", opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-0 whitespace-nowrap text-signal"
        >
          {personal.roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24"
    >
      <HeroCanvas />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-paper" />

      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3 py-1 font-mono-tag text-xs text-muted backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-signal" />
          status: open to AI / ML / Software Engineer roles
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
          className="text-balance text-4xl font-medium leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl"
        >
          {personal.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="mt-5 max-w-2xl text-balance text-lg leading-relaxed text-muted sm:text-xl"
        >
          <RoleCycler />           building products, automation, and doing research.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-4 max-w-xl text-balance text-sm text-muted/80"
        >
          {personal.position}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton href="#projects">
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </MagneticButton>
          <MagneticButton href={personal.resumeUrl} download variant="outline">
            Download Resume
            <FileDown className="h-4 w-4" />
          </MagneticButton>
          <MagneticButton href="#contact" variant="outline">
            Contact Me
          </MagneticButton>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-signal"
      >
        <ArrowDown className="h-5 w-5" />
      </motion.a>
    </section>
  );
}
