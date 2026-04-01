"use client";

import { hero } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-stone-800/80 bg-stone-950/80">
      <div className="container flex flex-col items-center justify-between gap-2 py-5 text-[11px] text-stone-500 md:flex-row">
        <p>
          © {new Date().getFullYear()} {hero.name}. All rights reserved.
        </p>
        <p className="text-[10px]">
          Built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and
          Lucide.
        </p>
      </div>
    </footer>
  );
}
