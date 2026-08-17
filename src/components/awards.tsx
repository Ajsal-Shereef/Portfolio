"use client";

import { SectionShell } from "./section-shell";
import { awards } from "@/lib/data";
import { Trophy } from "lucide-react";

export function Awards() {
  return (
    <SectionShell id="awards">
      <div className="container space-y-6">
        <div>
          <p className="section-title">Awards & Scholarships</p>
          <h2 className="section-heading">
            Recognised for academic excellence.
          </h2>
          <p className="section-subtitle">
            Competitive scholarships and fellowships awarded for research
            potential and academic achievement.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {awards.map((award) => (
            <div
              key={award.title}
              className="glass-panel flex items-start gap-4 p-5"
            >
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-600/20 to-amber-500/10 text-amber-400">
                <Trophy size={20} />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-stone-100 md:text-base">
                  {award.title}
                </h3>
                <p className="mt-1 text-xs text-stone-400">
                  {award.institution}
                </p>
                <p className="mt-0.5 text-xs text-stone-500">{award.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
