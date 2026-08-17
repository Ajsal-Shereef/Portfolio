"use client";

import { SectionShell } from "./section-shell";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <SectionShell id="skills">
      <div className="container space-y-8">
        <div>
          <p className="section-title">Technical Skills</p>
          <h2 className="section-heading">
            From foundational maths to production systems.
          </h2>
          <p className="section-subtitle">
            A toolkit that spans algorithm design, large-scale learning systems,
            cloud deployment, and practical inference on real hardware.
          </p>
        </div>

        {/* Row 1: Core Languages + Generative AI */}
        <div className="grid gap-5 md:grid-cols-3">
          <div className="glass-panel p-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
              Core Languages
            </p>
            <div className="flex flex-wrap gap-1.5 text-xs text-stone-200">
              {skills.coreLanguages.map((lang) => (
                <span
                  key={lang}
                  className="rounded-full bg-stone-900/80 px-3 py-1"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-panel p-5 md:col-span-2">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
              {skills.generativeAI.title}
            </p>
            <div className="mb-2 flex flex-wrap gap-1.5 text-xs text-stone-200">
              {skills.generativeAI.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-stone-900/80 px-3 py-1"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-2 text-[11px] text-stone-400">
              Frameworks: {skills.generativeAI.frameworks.join(", ")}
            </p>
          </div>
        </div>

        {/* Row 2: MLOps & Cloud (full width — the biggest addition) */}
        <div className="glass-panel border-amber-700/30 bg-gradient-to-br from-stone-900/80 to-stone-900/50 p-5">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
            {skills.mlopsCloud.title}
          </p>
          <div className="flex flex-wrap gap-1.5 text-xs text-stone-200">
            {skills.mlopsCloud.items.map((item) => (
              <span
                key={item}
                className="rounded-full bg-stone-900/80 px-3 py-1"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Row 3: CV, RL, Tools & Foundations */}
        <div className="grid gap-5 md:grid-cols-3">
          <div className="glass-panel p-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
              {skills.computerVision.title}
            </p>
            <ul className="space-y-1 text-xs text-stone-200">
              {skills.computerVision.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="glass-panel p-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
              {skills.reinforcementLearning.title}
            </p>
            <ul className="space-y-1 text-xs text-stone-200">
              {skills.reinforcementLearning.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="glass-panel p-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
              {skills.toolsFoundations.title}
            </p>
            <ul className="space-y-1 text-xs text-stone-200">
              {skills.toolsFoundations.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
