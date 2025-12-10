"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface TickerProps {
  children: ReactNode;
  duration?: number;
  direction?: "up" | "down";
  className?: string;
}

export default function Ticker({ 
  children, 
  duration = 40, 
  direction = "up",
  className = "" 
}: TickerProps) {
  // Render 3 copies to ensure content is always visible
  const content = (
    <>
      <div className="flex flex-col gap-4 shrink-0">{children}</div>
      <div className="flex flex-col gap-4 shrink-0">{children}</div>
      <div className="flex flex-col gap-4 shrink-0">{children}</div>
    </>
  );

  // For "up" direction: cycle from 0% to -66.66%
  // For "down" direction: cycle from -66.66% to 0%
  const animationDirection = direction === "up" ? ["0%", "-66.66%"] : ["-66.66%", "0%"];

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="flex flex-col gap-4"
        animate={{
          y: animationDirection,
        }}
        transition={{
          y: {
            repeat: Infinity,
            repeatType: "loop",
            duration: duration,
            ease: "linear",
          },
        }}
      >
        {content}
      </motion.div>
    </div>
  );
}
