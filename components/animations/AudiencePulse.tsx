"use client";

import { motion } from "motion/react";

export default function AudiencePulse() {
  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none">
       <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          {/* Expanding Rings */}
          {[0, 1, 2].map((index) => (
            <motion.circle
              key={index}
              cx="50"
              cy="50"
              r="0"
              fill="none"
              stroke="#E4E2DD"
              strokeWidth="0.5"
              initial={{ r: 0, opacity: 0.8 }}
              animate={{ r: 70, opacity: 0 }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: index * 1,
                ease: "easeOut",
              }}
            />
          ))}
          {/* Central Dot */}
          <circle cx="50" cy="50" r="2" fill="#E4E2DD" className="opacity-50" />
       </svg>
    </div>
  );
}
