"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { hero } from "@/lib/data";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Publications", href: "#publications" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-lg">
      <nav className="container flex h-16 items-center justify-between gap-4">
        <Link href="#hero" className="group flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-sky-500 to-cyan-400 text-xs font-semibold text-slate-950">
            AS
          </div>
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm font-semibold text-slate-100">
              Ajsal Shereef
            </span>
            <span className="text-[11px] text-slate-400">
              AI & ML • Ph.D. Candidate
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-5 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-medium text-slate-300/80 transition hover:text-sky-400"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={hero.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-slate-700/80 bg-slate-900/60 p-1.5 text-slate-300 transition hover:border-sky-500/80 hover:text-sky-400"
          >
            <Github size={16} />
          </Link>
          <Link
            href={hero.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-slate-700/80 bg-slate-900/60 p-1.5 text-slate-300 transition hover:border-sky-500/80 hover:text-sky-400"
          >
            <Linkedin size={16} />
          </Link>
          <Link
            href={`mailto:${hero.email}`}
            aria-label="Email"
            className="hidden rounded-full border border-slate-700/80 bg-slate-900/60 p-1.5 text-slate-300 transition hover:border-sky-500/80 hover:text-sky-400 md:inline-flex"
          >
            <Mail size={16} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
