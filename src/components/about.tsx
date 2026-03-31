"use client";

import { SectionShell } from "./section-shell";
import { about } from "@/lib/data";

export function About() {
  return (
    <SectionShell id="about">
      <div className="container grid gap-8 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        <div>
          <p className="section-title">About</p>
          <h2 className="section-heading">
            Bridging theory, models, and deployment.
          </h2>
          <p className="section-subtitle">{about}</p>
        </div>
        <div className="glass-panel p-5 text-sm text-slate-300">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
            Focus Areas
          </p>
          <ul className="space-y-2 text-xs md:text-sm">
            <li>
              • Reinforcement Learning for adaptive, user-aligned
              decision-making.
            </li>
            <li>
              • Generative AI systems with RAG pipelines and tool-using agents.
            </li>
            <li>
              • Computer Vision models tailored for medical and edge settings.
            </li>
            <li>• Robust evaluation, benchmarking, and mathematical grounding.</li>
          </ul>
        </div>
      </div>
    </SectionShell>
  );
}
