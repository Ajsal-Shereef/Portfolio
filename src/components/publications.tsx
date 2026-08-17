"use client";

import { SectionShell } from "./section-shell";
import { publications } from "@/lib/data";

const statusColors: Record<string, string> = {
  Published:
    "bg-emerald-900/40 text-emerald-400 border-emerald-700/50",
  "Under Review":
    "bg-amber-900/40 text-amber-400 border-amber-700/50",
  Submitted:
    "bg-sky-900/40 text-sky-400 border-sky-700/50",
};

export function Publications() {
  return (
    <SectionShell id="publications">
      <div className="container space-y-6">
        <div>
          <p className="section-title">Research & Publications</p>
          <h2 className="section-heading">
            Towards adaptive and aligned RL agents.
          </h2>
          <p className="section-subtitle">
            Selected work spanning knowledge transfer, dynamic policy fusion,
            and language-conditioned reinforcement learning — published at
            top-tier venues including ECAI, NeurIPS, and HAI.
          </p>
        </div>

        <div className="glass-panel divide-y divide-stone-800/80 p-5">
          {publications.map((pub) => (
            <div
              key={pub.title}
              className="flex flex-col gap-2 py-4 first:pt-0 last:pb-0 md:flex-row md:items-start md:justify-between md:gap-4"
            >
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-stone-100">
                  {pub.title}
                </p>
                <p className="mt-1 text-xs text-stone-400">{pub.authors}</p>
                <p className="mt-0.5 text-xs text-stone-500">
                  {pub.venue}, {pub.year}
                </p>
              </div>
              <span
                className={`mt-1 inline-flex shrink-0 items-center rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider md:mt-0 ${statusColors[pub.status]}`}
              >
                {pub.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
