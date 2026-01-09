"use client";

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
  const animationClass =
    direction === "left" ? "zodiac-marquee" : "zodiac-marquee zodiac-marquee--reverse";

  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className={`inline-flex w-max will-change-transform ${animationClass}`}
        style={{
          // Used by the CSS animation in globals.css
          ["--zodiac-marquee-duration" as any]: `${duration}s`,
        }}
      >
        {/* Duplicate once: translateX(-50%) cycles seamlessly */}
        <div className="flex gap-8 shrink-0 pr-8">{children}</div>
        <div className="flex gap-8 shrink-0 pr-8" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
