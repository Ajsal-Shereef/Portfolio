"use client";

import { SectionShell } from "./section-shell";
import { teaching } from "@/lib/data";

export function Teaching() {
  return (
    <SectionShell id="teaching">
      <div className="container space-y-8">
        <div>
          <p className="section-title">Teaching & Engagement</p>
          <h2 className="section-heading">
            Mentoring and collaborative learning.
          </h2>
          <p className="section-subtitle">
            Experience supporting teaching delivery, QA sessions, and hands-on
            student engagement across university and community settings.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {teaching.map((item, idx) => (
            <div
              key={`${item.role}-${idx}`}
              className="glass-panel flex flex-col p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-sm font-semibold text-slate-100 md:text-base">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-xs text-slate-400">{item.institution}</p>
                </div>
                <div className="mt-1 rounded-full bg-slate-900/80 px-3 py-1 text-[11px] text-sky-400/90">
                  Teaching
                </div>
              </div>
              <p className="mt-3 text-xs text-slate-300 md:text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

