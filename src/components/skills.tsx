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
            and practical deployment on real hardware.
          </p>
        </div>

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
              {skills.deployment.title}
            </p>
            <ul className="space-y-1 text-xs text-stone-200">
              {skills.deployment.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
              {skills.toolsFoundations.title}
            </p>
            <ul className="mt-1 space-y-1 text-xs text-stone-200">
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
