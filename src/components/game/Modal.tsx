"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  onCVDownload?: () => void;
}

export function Modal({ isOpen, onClose, title, children, onCVDownload }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 pointer-events-none">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto"
            onClick={onClose}
          />
          
          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden bg-zinc-950/90 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl pointer-events-auto flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-white/10 bg-zinc-900/50">
              <h2 className="text-2xl font-bold text-white tracking-tight">
                {title}
              </h2>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 transition-colors rounded-full hover:text-white hover:bg-white/10"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Body Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar" style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(255,255,255,0.2) transparent" }}>
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
