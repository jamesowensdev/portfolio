"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.5 }}
      className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
    >
      <span className="text-[10px] font-mono uppercase tracking-[0.4em]text-orange-500/80">
        Explore
      </span>

      <div className="relative flex items-center justify-center">
        <motion.svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-orange-500/80"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M7 13l5 5 5-5M12 6v12" />
        </motion.svg>

        <motion.div
          className="absolute bottom-0 w-8 h-8 rounded-full border border-orange-500/20"
          animate={{ scale: [1, 2], opacity: [0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}
