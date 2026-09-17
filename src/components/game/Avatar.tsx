"use client";

import { motion } from "framer-motion";
import { Bot } from "lucide-react";

interface AvatarProps {
  x: number;
  y: number;
}

export function Avatar({ x, y }: AvatarProps) {
  return (
    <motion.div
      initial={{ left: x, top: y }}
      animate={{ left: x, top: y }}
      transition={{ type: "spring", stiffness: 80, damping: 15 }}
      className="absolute z-40 flex items-center justify-center w-12 h-12 bg-indigo-500 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.8)] border-2 border-white"
      style={{
        transform: "translate(-50%, -50%)",
      }}
    >
      <Bot className="w-6 h-6 text-white" />
    </motion.div>
  );
}
