"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import FadeIn from "@/components/motion/FadeIn";

const talentData = [
  {
    id: 1,
    name: "Alex Rivera",
    category: "Lifestyle & Fashion",
    image: "/images/HQB06728.jpg",
    followers: "2.4M",
    handle: "@arivera"
  },
  {
    id: 2,
    name: "Sarah Chen",
    category: "Tech & Gaming",
    image: "/images/HQB06762.jpg",
    followers: "1.8M",
    handle: "@sarahc_tech"
  },
  {
    id: 3,
    name: "Marcus Johnson",
    category: "Fitness & Health",
    image: "/images/HQB06855.jpg",
    followers: "3.2M",
    handle: "@mj_fitness"
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    category: "Travel & Adventure",
    image: "/images/HQB06873.jpg",
    followers: "1.5M",
    handle: "@elena_roams"
  },
  {
    id: 5,
    name: "David Kim",
    category: "Food & Culinary",
    image: "/images/HQB06728.jpg",
    followers: "900K",
    handle: "@chefdavid"
  },
  {
    id: 6,
    name: "Jessica Wilde",
    category: "Beauty & Wellness",
    image: "/images/HQB06762.jpg",
    followers: "4.1M",
    handle: "@jessicawilde"
  },
  {
    id: 7,
    name: "Tom Baker",
    category: "Sports & Commentary",
    image: "/images/HQB06855.jpg",
    followers: "1.2M",
    handle: "@tombaker_sports"
  },
  {
    id: 8,
    name: "Maya Patel",
    category: "Art & Design",
    image: "/images/HQB06873.jpg",
    followers: "850K",
    handle: "@mayadesigns"
  },
  {
    id: 9,
    name: "Lucas Silva",
    category: "Music & Entertainment",
    image: "/images/HQB06728.jpg",
    followers: "5.5M",
    handle: "@lucas_beats"
  }
];

export default function RosterGrid() {
  const [activeRegion, setActiveRegion] = useState("All");
  const regions = ["All", "UK", "UAE"];

  return (
    <section className="py-20 bg-black relative">
      <div className="container mx-auto px-6">
        <FadeIn>
          {/* Region Tabs */}
          <div className="flex justify-center mb-12">
            <div className="p-1 bg-white/5 rounded-full border border-white/10 inline-flex relative">
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => setActiveRegion(region)}
                  className={`px-8 py-3 rounded-full text-sm font-medium tracking-wider uppercase transition-all duration-300 relative z-10 ${
                    activeRegion === region ? "text-white" : "text-white/60 hover:text-white"
                  }`}
                >
                  {region}
                  {activeRegion === region && (
                    <motion.div
                      layoutId="activeRegion"
                      className="absolute inset-0 bg-zodiac-900 rounded-full -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-4 mb-16 justify-center">
            {["All", "Lifestyle", "Fashion", "Tech", "Beauty", "Travel", "Fitness"].map((filter, i) => (
              <button 
                key={filter}
                className={`px-6 py-2 rounded-full border text-sm tracking-wider uppercase transition-all duration-300 ${
                  i === 0 
                    ? "bg-white text-black border-white" 
                    : "bg-transparent text-white/60 border-white/10 hover:border-white/40 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {talentData.map((talent, index) => (
            <FadeIn key={talent.id} delay={index * 0.05}>
              <Link href={`/talent-roster/${talent.name.toLowerCase().replace(/\s+/g, '-')}`} className="group block cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-white/5 rounded-sm">
                  <div className="absolute inset-0 bg-zodiac/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <Image
                    src={talent.image}
                    alt={talent.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                  
                  {/* Hover Overlay Info */}
                  <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
                    <div className="flex justify-between items-center text-white">
                      <span className="text-sm font-medium tracking-wider uppercase">View Profile</span>
                      <span className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center bg-white/10 backdrop-blur-md">
                        ↗
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-start border-t border-white/10 pt-4">
                  <div>
                    <h3 className="text-2xl text-white font-medium mb-1 group-hover:text-cream transition-colors">
                      {talent.name}
                    </h3>
                    <p className="text-white/50 text-sm uppercase tracking-wider mb-1">
                      {talent.category}
                    </p>
                    <p className="text-white/30 text-xs font-mono">
                      {talent.handle}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="block text-white/80 font-mono text-sm">
                      {talent.followers}
                    </span>
                    <span className="text-white/30 text-xs uppercase">Followers</span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
