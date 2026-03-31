"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowDownToLine, FileDown, Mail } from "lucide-react";
import { hero } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="hero"
      className="section-padding flex items-center justify-center pb-10 pt-24 md:pt-28"
    >
      <div className="container grid gap-10 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-6"
        >
          <span className="badge-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Available for collaborations
          </span>

          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
            {hero.name}
          </h1>

          <p className="text-base font-medium text-sky-400 sm:text-lg">
            {hero.tagline}
          </p>

          <p className="max-w-xl text-sm text-slate-400 sm:text-base">
            I design, build, and deploy intelligent systems that connect
            Reinforcement Learning, Generative AI, and Computer Vision—grounded
            in rigorous mathematics and focused on real-world impact.
          </p>

          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
            <span className="rounded-full border border-slate-700/80 bg-slate-900/60 px-3 py-1">
              Based in {hero.location}
            </span>
            <span className="rounded-full border border-slate-700/80 bg-slate-900/60 px-3 py-1">
              AI • RL • Generative Models
            </span>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="#publications"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-5 py-2.5 text-sm font-medium text-slate-950 shadow-lg shadow-sky-500/30 transition hover:shadow-sky-500/50"
            >
              <ArrowDownToLine size={16} />
              View Publications
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-950/60 px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:border-sky-500/80 hover:text-sky-300"
            >
              <Mail size={16} />
              Contact Me
            </Link>

            <a
              href="/Ajsal_Shereef_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-950/40 px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:border-sky-500/80 hover:text-sky-300"
            >
              <FileDown size={16} />
              Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="glass-panel relative overflow-hidden p-6"
        >
          <div className="mb-4 flex items-center gap-3 rounded-xl border border-slate-800/80 bg-slate-950/50 p-2.5">
            <div className="relative h-16 w-16 overflow-hidden rounded-lg border border-slate-700/80">
              <Image
                src="/IMG_4965.jpg"
                alt="Ajsal Shereef profile photo"
                fill
                sizes="64px"
                className="object-cover"
                priority
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-100">
                Ajsal Shereef
              </p>
              <p className="text-xs text-slate-400">Ph.D. Candidate · AI & ML</p>
            </div>
          </div>
          <div className="mb-4 flex items-center justify-between gap-2 text-xs text-slate-400">
            <span className="font-medium text-slate-200">AI Focus Map</span>
            <span className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] uppercase tracking-wide text-sky-400/90">
              RL • GenAI • CV
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="space-y-2 rounded-xl bg-slate-900/60 p-3">
              <p className="text-[11px] font-medium text-slate-300">
                Reinforcement Learning
              </p>
              <p className="text-[11px] text-slate-400">
                Adaptive agents, policy optimisation, and user-aligned
                behaviours.
              </p>
              <div className="mt-2 h-1.5 w-full rounded-full bg-slate-800">
                <div className="h-1.5 w-[86%] rounded-full bg-gradient-to-r from-sky-400 to-cyan-300" />
              </div>
            </div>
            <div className="space-y-2 rounded-xl bg-slate-900/60 p-3">
              <p className="text-[11px] font-medium text-slate-300">
                Generative AI
              </p>
              <p className="text-[11px] text-slate-400">
                LLM tooling, RAG, and QLORA-tuned models for real workflows.
              </p>
              <div className="mt-2 h-1.5 w-full rounded-full bg-slate-800">
                <div className="h-1.5 w-[82%] rounded-full bg-gradient-to-r from-sky-400 to-indigo-300" />
              </div>
            </div>
            <div className="col-span-2 space-y-2 rounded-xl bg-slate-900/60 p-3">
              <p className="text-[11px] font-medium text-slate-300">
                Computer Vision on Edge
              </p>
              <p className="text-[11px] text-slate-400">
                Segmentation, glare correction, and efficient models for
                constrained devices.
              </p>
              <div className="mt-2 flex gap-2 text-[10px] text-slate-400">
                <span className="rounded-full bg-slate-800/80 px-2 py-0.5">
                  Quantization
                </span>
                <span className="rounded-full bg-slate-800/80 px-2 py-0.5">
                  On-device benchmarking
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
