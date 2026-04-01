"use client";

import { SectionShell } from "./section-shell";
import { publications } from "@/lib/data";

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
            and language-conditioned reinforcement learning.
          </p>
        </div>

        <div className="glass-panel divide-y divide-stone-800/80 p-5">
          {publications.map((pub) => (
            <div key={pub} className="py-3 first:pt-0 last:pb-0">
              <p className="text-sm text-stone-100">{pub}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
