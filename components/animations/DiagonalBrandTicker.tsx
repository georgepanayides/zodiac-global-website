"use client";

import { motion } from "motion/react";
import Image from "next/image";

const brands = [
  "/images/brands/zodiac-brands-1.png",
  "/images/brands/zodiac-brands-2.png",
  "/images/brands/zodiac-brands-3.png",
  "/images/brands/zodiac-brands-4.png",
  "/images/brands/zodiac-brands-5.png",
  "/images/brands/zodiac-brands-6.png",
];

export default function DiagonalBrandTicker() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none">
      <div className="absolute inset-0 -rotate-[30deg] scale-150 -translate-y-10 -translate-x-10">
        <div className="flex flex-col gap-6">
            {/* Row 1 */}
            <TickerRow duration={30} />
            {/* Row 2 */}
            <TickerRow duration={35} reverse />
            {/* Row 3 */}
            <TickerRow duration={28} />
             {/* Row 4 */}
             <TickerRow duration={32} reverse />
        </div>
      </div>
      {/* Gradient Overlay to fade edges and blend with card */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
    </div>
  );
}

function TickerRow({ duration, reverse = false }: { duration: number; reverse?: boolean }) {
  return (
    <div className="flex gap-6 overflow-hidden">
      <motion.div
        initial={{ x: reverse ? "-50%" : "0%" }}
        animate={{ x: reverse ? "0%" : "-50%" }}
        transition={{
          duration: duration,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex gap-6 min-w-max"
      >
        {/* Repeat logos enough times to cover the scroll area */}
        {[...brands, ...brands, ...brands, ...brands].map((src, i) => (
          <div key={i} className="relative w-20 h-10 grayscale brightness-[100] opacity-70">
            <Image
              src={src}
              alt="Brand Logo"
              fill
              className="object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
