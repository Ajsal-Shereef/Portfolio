"use client";

import { SectionShell } from "./section-shell";
import { hero } from "@/lib/data";
import { Mail, Phone, Send } from "lucide-react";

export function Contact() {
  return (
    <SectionShell id="contact">
      <div className="container grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <div>
          <p className="section-title">Contact</p>
          <h2 className="section-heading">
            Let&apos;s talk about intelligent systems.
          </h2>
          <p className="section-subtitle">
            Whether it&apos;s adaptive RL agents, generative AI workflows, or
            computer vision on edge devices, I&apos;m happy to discuss
            collaborations, research, or applied projects.
          </p>

          <div className="mt-6 space-y-3 text-sm text-slate-200">
            <a
              href={`mailto:${hero.email}`}
              className="flex items-center gap-2 text-slate-300 transition hover:text-sky-400"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/80">
                <Mail size={16} />
              </span>
              <span>{hero.email}</span>
            </a>
            <a
              href={`tel:${hero.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-slate-300 transition hover:text-sky-400"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/80">
                <Phone size={16} />
              </span>
              <span>{hero.phone}</span>
            </a>
          </div>
        </div>

        <div className="glass-panel p-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
            Quick message
          </p>
          <form
            className="space-y-3 text-sm"
            action={`mailto:${hero.email}`}
            method="post"
            encType="text/plain"
          >
            <div className="space-y-1.5">
              <label className="text-xs text-slate-300" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                className="w-full rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2 text-xs text-slate-100 outline-none ring-sky-500/40 placeholder:text-slate-500 focus:border-sky-500 focus:ring-1"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs text-slate-300" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2 text-xs text-slate-100 outline-none ring-sky-500/40 placeholder:text-slate-500 focus:border-sky-500 focus:ring-1"
                placeholder="you@example.com"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs text-slate-300" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2 text-xs text-slate-100 outline-none ring-sky-500/40 placeholder:text-slate-500 focus:border-sky-500 focus:ring-1"
                placeholder="What would you like to discuss?"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-4 py-2.5 text-xs font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:shadow-sky-500/50"
            >
              <Send size={14} />
              Send via email
            </button>
            <p className="pt-1 text-[11px] text-slate-500">
              This opens your default mail client with your message pre-filled.
            </p>
          </form>
        </div>
      </div>
    </SectionShell>
  );
}
