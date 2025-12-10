"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface HorizontalTickerProps {
  children: ReactNode;
  duration?: number;
  direction?: "left" | "right";
  className?: string;
}

export default function HorizontalTicker({ 
  children, 
  duration = 40, 
  direction = "left",
  className = "" 
}: HorizontalTickerProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="flex"
        style={{
          x: direction === "left" ? "0%" : "-100%",
        }}
        animate={{
          x: direction === "left" ? "-100%" : "0%",
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        {/* Quadruple duplicate content for seamless loop */}
        <div className="flex gap-8 shrink-0 pr-8">{children}</div>
        <div className="flex gap-8 shrink-0 pr-8">{children}</div>
        <div className="flex gap-8 shrink-0 pr-8">{children}</div>
        <div className="flex gap-8 shrink-0 pr-8">{children}</div>
      </motion.div>
    </div>
  );
}
