"use client";

import { SectionShell } from "./section-shell";
import { teaching, conferences } from "@/lib/data";
import { MapPin } from "lucide-react";

const categoryLabels: Record<string, string> = {
  teaching: "Teaching",
  service: "Academic Service",
  conference: "Conference",
};

const categoryColors: Record<string, string> = {
  teaching: "text-amber-400/90",
  service: "text-sky-400/90",
  conference: "text-emerald-400/90",
};

export function Teaching() {
  return (
    <SectionShell id="teaching">
      <div className="container space-y-8">
        <div>
          <p className="section-title">Teaching, Service & Engagement</p>
          <h2 className="section-heading">
            Mentoring, reviewing, and community leadership.
          </h2>
          <p className="section-subtitle">
            Teaching delivery, peer review for top-tier venues, technical
            committee service, and active participation in international
            conferences and symposia.
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
                  <h3 className="text-sm font-semibold text-stone-100 md:text-base">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-xs text-stone-400">
                    {item.institution}
                  </p>
                </div>
                <div
                  className={`mt-1 rounded-full bg-stone-900/80 px-3 py-1 text-[11px] ${categoryColors[item.category]}`}
                >
                  {categoryLabels[item.category]}
                </div>
              </div>
              <p className="mt-3 text-xs text-stone-300 md:text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Conference Attendance */}
        <div className="glass-panel p-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
            Conference & Symposium Attendance
          </p>
          <ul className="space-y-2">
            {conferences.map((conf) => (
              <li
                key={conf}
                className="flex items-start gap-2 text-xs text-stone-300 md:text-sm"
              >
                <MapPin
                  size={14}
                  className="mt-0.5 shrink-0 text-stone-500"
                />
                <span>{conf}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionShell>
  );
}
