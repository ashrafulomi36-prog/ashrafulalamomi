import { personal } from "@/data/portfolio";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="font-mono-tag text-xs text-muted">
          © {year} {personal.name}. Built with Next.js, Tailwind CSS &amp; Three.js.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={personal.socials.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-signal"
          >
            <FaGithub className="h-4 w-4" />
          </a>
          <a
            href={personal.socials.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-signal"
          >
            <FaLinkedin className="h-4 w-4" />
          </a>
          <a
            href={personal.socials.youtube}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="YouTube"
            className="text-muted transition-colors hover:text-signal"
          >
            <FaYoutube className="h-4 w-4" />
          </a>
          <a
            href={personal.socials.email}
            aria-label="Email"
            className="text-muted transition-colors hover:text-signal"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
