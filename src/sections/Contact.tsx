"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { personal } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";
import { MagneticButton } from "@/components/MagneticButton";

export function Contact() {
  const [status, setStatus] = React.useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <section id="contact" className="scroll-mt-24 border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          tag="$ ./contact --me"
          title="Let's build something"
          description="Open to AI/ML engineering, software engineering, and research-assistant roles — or just a good technical conversation."
        />

        <div className="grid gap-10 md:grid-cols-5 md:gap-16">
          <div className="md:col-span-2">
            <ul className="space-y-5">
              <li className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 shrink-0 text-signal" />
                <a href={personal.socials.email} className="text-ink hover:text-signal">
                  {personal.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 shrink-0 text-signal" />
                <span className="text-ink">{personal.location}</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <FaGithub className="h-4 w-4 shrink-0 text-signal" />
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-ink hover:text-signal"
                >
                  GitHub
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <FaLinkedin className="h-4 w-4 shrink-0 text-signal" />
                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-ink hover:text-signal"
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <FaYoutube className="h-4 w-4 shrink-0 text-signal" />
                <a
                  href={personal.socials.youtube}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-ink hover:text-signal"
                >
                  YouTube
                </a>
              </li>
            </ul>

            <div className="mt-8">
              <MagneticButton href={personal.resumeUrl} download variant="outline">
                Download Resume
              </MagneticButton>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="md:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="name" className="mb-2 block text-xs text-muted">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-signal"
                  placeholder="Your name"
                />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="email" className="mb-2 block text-xs text-muted">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-signal"
                  placeholder="you@example.com"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-2 block text-xs text-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-none rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-signal"
                  placeholder="What are you looking to build?"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-signal"
            >
              Send Message
              <Send className="h-3.5 w-3.5" />
            </button>
            {status === "sent" && (
              <p className="mt-3 text-xs text-signal">
                Opening your email client — thanks for reaching out.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
