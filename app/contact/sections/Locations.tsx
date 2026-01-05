"use client";

import FadeIn from "@/components/motion/FadeIn";
import { motion } from "motion/react";
import { worldMapPath, worldMapViewBox } from "@/components/ui/maps/WorldMapPath";

const locations = [
  {
    name: "London",
    x: 478, // Approximate for 950 width
    y: 135, // Approximate for 620 height
    flag: "🇬🇧",
    address: ["123 Oxford Street", "London, W1D 1LP", "United Kingdom"],
  },
  {
    name: "Dubai",
    x: 625, // Approximate for 950 width
    y: 235, // Approximate for 620 height
    flag: "🇦🇪",
    address: ["Boulevard Plaza, Tower 1", "Downtown Dubai", "United Arab Emirates"],
  },
];

export default function Locations() {
  return (
    <section className="relative py-32 bg-black overflow-hidden border-t border-white/10">
      {/* SVG Dot Map Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
        <div className="w-full max-w-[1400px] aspect-[950/620] relative">
          <svg
            viewBox={worldMapViewBox}
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet"
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
              className="opacity-50"
            />

            {/* Location Markers on the Map */}
            {locations.map((loc) => (
              <g key={loc.name}>
                <circle
                  cx={loc.x}
                  cy={loc.y}
                  r="4"
                  className="fill-white animate-pulse"
                />
                <circle
                  cx={loc.x}
                  cy={loc.y}
                  r="12"
                  className="fill-white/10 animate-ping"
                />
              </g>
            ))}
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-20 tracking-tight">
            Global Presence
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {locations.map((loc, index) => (
            <FadeIn key={loc.name} delay={0.2 * (index + 1)}>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-2xl relative overflow-hidden group h-full"
              >
                <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity">
                  <span className="text-6xl grayscale group-hover:grayscale-0 transition-all duration-500">
                    {loc.flag}
                  </span>
                </div>
                <h3 className="text-3xl text-white font-bold mb-6">{loc.name}</h3>
                <div className="space-y-2 text-white/60 font-light text-lg">
                  {loc.address.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
                <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-white/40 text-sm uppercase tracking-wider">
                    Office Open
                  </span>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
