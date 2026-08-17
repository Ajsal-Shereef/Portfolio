"use client";

import { SectionShell } from "./section-shell";
import { experience } from "@/lib/data";

const tags = [
  "Edge CV • Medical Imaging • Mobile Deployment • TFLite",
  "Predictive Analytics • Marketplace Modelling",
  "Sports Analytics • Environmental Monitoring",
] as const;

export function Experience() {
  return (
    <SectionShell id="experience">
      <div className="container space-y-8">
        <div>
          <p className="section-title">Experience</p>
          <h2 className="section-heading">
            Shipping ML systems in production, not just prototypes.
          </h2>
          <p className="section-subtitle">
            A track record of building intelligent systems end-to-end — from
            proof-of-concept through production deployment — across computer
            vision, data science, and sports analytics.
          </p>
        </div>

        <ol className="space-y-0">
          {experience.map((item, idx) => (
            <li key={item.company} className="relative flex gap-4 pb-10 last:pb-0">
              <div className="flex w-8 shrink-0 flex-col items-center pt-1.5">
                <span
                  className="z-10 h-3 w-3 rounded-full border-2 border-stone-900 bg-amber-400/90 shadow-md shadow-amber-500/25"
                  aria-hidden
                />
                {idx < experience.length - 1 ? (
                  <div className="mt-1 w-px flex-1 min-h-[1.5rem] bg-stone-800/80" />
                ) : null}
              </div>
              <div className="min-w-0 flex-1 glass-panel p-4 md:p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-semibold text-stone-100 md:text-base">
                      {item.role}
                    </h3>
                    <p className="text-xs text-stone-400">{item.company}</p>
                  </div>
                  <span className="rounded-full bg-stone-900/80 px-3 py-1 text-[11px] text-stone-300">
                    {item.period}
                  </span>
                </div>
                <ul className="mt-3 space-y-2">
                  {item.bullets.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      className="flex gap-2 text-xs text-stone-300 md:text-sm"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber-500/70" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-stone-500">
                  {tags[idx]}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </SectionShell>
  );
}
