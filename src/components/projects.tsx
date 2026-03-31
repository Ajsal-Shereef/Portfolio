"use client";

import { SectionShell } from "./section-shell";
import { projects } from "@/lib/data";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
  return (
    <SectionShell id="projects">
      <div className="container space-y-8">
        <div>
          <p className="section-title">Projects</p>
          <h2 className="section-heading">
            Implementing adaptive and transferable RL systems.
          </h2>
          <p className="section-subtitle">
            Selected research codebases that operationalise ideas in dynamic
            policy fusion and imagination-based knowledge transfer.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <div key={project.title} className="glass-panel flex flex-col p-5">
              <h3 className="text-sm font-semibold text-slate-100 md:text-base">
                {project.title}
              </h3>
              <p className="mt-2 text-xs text-slate-300 md:text-sm">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-xs">
                {project.github ? (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-slate-700/80 bg-slate-950/60 px-3 py-1.5 font-medium text-sky-400 hover:border-sky-500/80 hover:text-sky-300"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight size={14} />
                  </Link>
                ) : null}
                {project.paper ? (
                  <Link
                    href={project.paper}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-slate-700/80 bg-slate-950/60 px-3 py-1.5 font-medium text-sky-400 hover:border-sky-500/80 hover:text-sky-300"
                  >
                    <span>Paper</span>
                    <ArrowUpRight size={14} />
                  </Link>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

