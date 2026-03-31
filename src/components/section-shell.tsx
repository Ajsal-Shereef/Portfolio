"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

type SectionShellProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export function SectionShell({
  id,
  className = "",
  children,
}: SectionShellProps) {
  return (
    <section id={id} className={`section-padding ${className}`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        variants={variants}
      >
        {children}
      </motion.div>
    </section>
  );
}
