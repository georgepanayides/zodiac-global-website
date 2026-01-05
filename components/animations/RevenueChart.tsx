"use client";

import { motion } from "motion/react";

export default function RevenueChart() {
  return (
    <div className="absolute inset-0 flex items-end justify-end p-8 opacity-30 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none">
      <div className="flex items-end gap-2 h-3/4 w-full justify-end">
        {[35, 55, 45, 70, 60, 90, 80, 100].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ 
              duration: 1.2, 
              delay: i * 0.1, 
              ease: [0.22, 1, 0.36, 1] 
            }}
            className="w-full max-w-[12%] bg-gradient-to-t from-zodiac-900/0 via-zodiac-600 to-cream-100/80 rounded-t-sm"
          />
        ))}
      </div>
    </div>
  );
}
