"use client";

import { motion } from "motion/react";

export default function LegalShield() {
  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none">
      <svg className="w-[80%] h-[80%]" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        <defs>
            <linearGradient id="scan-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="#E4E2DD" stopOpacity="0.5" />
                <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <clipPath id="shield-clip">
                 <path d="M50 5 L90 20 V45 C90 70 50 95 50 95 C50 95 10 70 10 45 V20 L50 5 Z" />
            </clipPath>
        </defs>

        {/* Shield Outline */}
        <motion.path
            d="M50 5 L90 20 V45 C90 70 50 95 50 95 C50 95 10 70 10 45 V20 L50 5 Z"
            fill="none"
            stroke="#E4E2DD"
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {/* Scanning Beam */}
        <motion.rect
            x="0"
            y="0"
            width="100"
            height="20"
            fill="url(#scan-gradient)"
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: [0, 100, 0], opacity: [0, 0.5, 0] }}
            transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                delay: 1
            }}
            clipPath="url(#shield-clip)"
        />

        {/* Central Lock Icon */}
        <motion.g
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
        >
            <rect x="42" y="48" width="16" height="12" rx="2" fill="#E4E2DD" opacity="0.8" />
            <path d="M45 48 V42 A5 5 0 0 1 55 42 V48" stroke="#E4E2DD" strokeWidth="1.5" fill="none" />
        </motion.g>
      </svg>
    </div>
  );
}
