"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface KioskProps {
  id: string;
  x: number;
  y: number;
  title: string;
  icon: LucideIcon;
  onClick: (id: string, x: number, y: number) => void;
  isActive: boolean;
}

export function Kiosk({ id, x, y, title, icon: Icon, onClick, isActive }: KioskProps) {
  return (
    <div
      className="absolute z-30"
      style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onClick(id, x, y + 60)}
        className={`flex flex-col items-center justify-center gap-2 group focus:outline-none`}
      >
        <div
          className={`relative flex items-center justify-center w-16 h-16 rounded-2xl border shadow-xl backdrop-blur-md transition-colors ${
            isActive ? "bg-indigo-500/30 border-indigo-400" : "bg-black/40 border-white/20 hover:bg-black/60"
          }`}
        >
          {isActive && (
            <div className="absolute inset-0 rounded-2xl shadow-[0_0_30px_rgba(99,102,241,0.6)] pointer-events-none" />
          )}
          <Icon className={`w-8 h-8 ${isActive ? "text-indigo-300" : "text-gray-300"}`} />
        </div>
        <span className="px-3 py-1 text-xs font-semibold tracking-wider text-white bg-black/80 rounded-full border border-white/10 whitespace-nowrap shadow-lg">
          {title}
        </span>
      </motion.button>
    </div>
  );
}
