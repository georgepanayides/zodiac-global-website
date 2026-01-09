"use client";

import FadeIn from "@/components/motion/FadeIn";
import { useState } from "react";
import { motion } from "motion/react";
import { worldMapPath, worldMapViewBox } from "@/components/ui/maps/WorldMapPath";

function parseViewBox(viewBox: string) {
  const parts = viewBox
    .trim()
    .split(/\s+/)
    .map((p) => Number(p));

  // Expected: "minX minY width height"
  if (parts.length === 4 && parts.every((n) => Number.isFinite(n))) {
    const [minX, minY, width, height] = parts;
    return { minX, minY, width, height };
  }

  // Safe fallback (matches our aspect wrapper)
  return { minX: 0, minY: 0, width: 950, height: 620 };
}

const locations = [
  {
    name: "London",
    x: 478, // Approximate for 950 width
    y: 135, // Approximate for 620 height
    address: ["c/o RPGCC, 40 Gracechurch Street, London, EC3V 0BT"],
    offsetClass: "translate-x-3 -translate-y-3",
  },
  {
    name: "Dubai",
    x: 625, // Approximate for 950 width
    y: 235, // Approximate for 620 height
    address: ["1306 Concord Tower Media City, Dubai"],
    offsetClass: "translate-x-3 -translate-y-3",
  },
];

export default function Locations() {
  const [openLocation, setOpenLocation] = useState<string | null>(null);
  const vb = parseViewBox(worldMapViewBox);

  return (
    <section className="relative py-32 bg-black overflow-hidden border-t border-white/10">
      <div className="container mx-auto px-6 relative z-10">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-10 tracking-tight">
            Global Presence
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mx-auto w-full max-w-[1400px]">
            <div className="relative w-full aspect-[950/620]">
              <svg
                viewBox={worldMapViewBox}
                className="w-full h-full"
                preserveAspectRatio="xMidYMid meet"
                aria-label="Zodiac Global locations map"
              >
                <defs>
                  <pattern
                    id="dotPattern"
                    x="0"
                    y="0"
                    width="8"
                    height="8"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="2" cy="2" r="1.5" className="fill-white" />
                  </pattern>
                  <mask id="mapMask">
                    <path d={worldMapPath} fill="white" />
                  </mask>
                </defs>

                {/* The Dot Map */}
                <rect
                  width="100%"
                  height="100%"
                  fill="url(#dotPattern)"
                  mask="url(#mapMask)"
                  className="opacity-35"
                />

                {/* Location Markers on the Map */}
                {locations.map((loc) => (
                  <g key={loc.name}>
                    <circle
                      cx={loc.x}
                      cy={loc.y}
                      r="4"
                      className="fill-zodiac-800"
                    />
                    <circle
                      cx={loc.x}
                      cy={loc.y}
                      r="10"
                      className="fill-white/10 animate-ping"
                      style={{ transformBox: "fill-box", transformOrigin: "center" }}
                    />
                    <circle
                      cx={loc.x}
                      cy={loc.y}
                      r="6"
                      className="fill-white/20 animate-pulse"
                      style={{ transformBox: "fill-box", transformOrigin: "center" }}
                    />
                  </g>
                ))}
              </svg>

              {/* Small location boxes anchored to dots */}
              {locations.map((loc, index) => (
                <motion.div
                  key={loc.name}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                  className="absolute pointer-events-auto"
                  style={{
                    left: `${((loc.x - vb.minX) / vb.width) * 100}%`,
                    top: `${((loc.y - vb.minY) / vb.height) * 100}%`,
                    zIndex: openLocation === loc.name ? 30 : 10,
                  }}
                >
                  <div className={loc.offsetClass}>
                    <motion.div whileHover={{ y: -4 }}>
                      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg md:rounded-xl px-3 py-2 md:px-4 md:py-3 inline-flex flex-col w-fit max-w-[75vw] md:block md:w-[220px] md:max-w-none">
                        {/* Desktop: always show name + address */}
                        <div className="hidden md:block">
                          <p className="text-white font-semibold leading-tight text-sm md:text-base">
                            {loc.name}
                          </p>
                          <div className="mt-1 space-y-1 text-white/60 font-light text-sm">
                            {loc.address.slice(0, 2).map((line, i) => (
                              <p key={i} className="leading-snug">
                                {line}
                              </p>
                            ))}
                          </div>
                        </div>

                        {/* Mobile: show country; tap to expand address */}
                        <div className="md:hidden">
                          <button
                            type="button"
                            onClick={() =>
                              setOpenLocation((prev) => (prev === loc.name ? null : loc.name))
                            }
                            aria-expanded={openLocation === loc.name}
                            className="text-left self-start"
                          >
                            <div className="flex items-center justify-between gap-3">
                              <p className="text-white font-semibold leading-tight text-sm">
                                {loc.name}
                              </p>
                              <span
                                className={
                                  "text-white/50 text-xs transition-transform " +
                                  (openLocation === loc.name ? "rotate-180" : "")
                                }
                                aria-hidden
                              >
                                ↓
                              </span>
                            </div>

                            {openLocation === loc.name ? (
                              <div className="mt-2 text-white/60 font-light text-[11px] space-y-0.5">
                                <p className="text-white/80 text-[11px] font-medium">{loc.address[2]}</p>
                                {loc.address.slice(0, 2).map((line, i) => (
                                  <p key={i} className="leading-snug">
                                    {line}
                                  </p>
                                ))}
                              </div>
                            ) : null}
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
