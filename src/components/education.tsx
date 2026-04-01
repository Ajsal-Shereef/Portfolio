"use client";

import { SectionShell } from "./section-shell";
import { education } from "@/lib/data";

export function Education() {
  return (
    <SectionShell id="education">
      <div className="container space-y-8">
        <div>
          <p className="section-title">Education</p>
          <h2 className="section-heading">
            Deep foundations in mathematics and learning.
          </h2>
          <p className="section-subtitle">
            Formal training that connects rigorous theory with practical machine
            learning systems.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {education.map((item) => (
            <div key={item.degree} className="glass-panel p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
                {item.institution}
              </p>
              <h3 className="mt-1 text-sm font-semibold text-stone-100 md:text-base">
                {item.degree}
              </h3>
              <p className="mt-1 text-xs text-stone-400">{item.period}</p>
              {item.thesis && (
                <p className="mt-3 text-xs text-stone-300">
                  <span className="font-semibold text-stone-200">Thesis:</span>{" "}
                  {item.thesis}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
