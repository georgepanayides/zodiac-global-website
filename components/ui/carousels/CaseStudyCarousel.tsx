"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { HiHeart, HiEye, HiShare, HiUserGroup, HiCursorClick } from "react-icons/hi";

interface Stat {
  value: string;
  label: string;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  description: string;
  image: string; // URL to image
  stats: Stat[];
}

interface CaseStudyCarouselProps {
  items: CaseStudyItem[];
}

export default function CaseStudyCarousel({ items }: CaseStudyCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [items.length, activeIndex]);

  return (
    <div className="flex flex-col gap-6">
      <div className="relative w-full h-[80vh] min-h-[600px] overflow-hidden rounded-3xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={items[activeIndex].image}
              alt={items[activeIndex].title}
              fill
              className="object-cover"
              priority
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </div>

          {/* Content Container */}
          <div className="relative h-full container mx-auto px-6 py-12 flex flex-col justify-end pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
              
              {/* Left Side: Text Content */}
              <div className="space-y-6 max-w-2xl">
                <motion.h2 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-5xl md:text-7xl font-bold text-white leading-tight"
                >
                  {items[activeIndex].title}
                </motion.h2>
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-lg md:text-xl text-white/90 leading-relaxed"
                >
                  {items[activeIndex].description}
                </motion.p>
              </div>

              {/* Right Side: Stats Grid - Dark Glass Cards */}
              <div className="flex justify-end w-full lg:w-auto">
                <div className="grid grid-cols-2 gap-4 w-full max-w-lg">
                  {items[activeIndex].stats.map((stat, idx) => {
                    const l = stat.label.toLowerCase();
                    const Icon = (l.includes('view') || l.includes('reach') || l.includes('impression')) ? HiEye :
                                 (l.includes('share')) ? HiShare :
                                 (l.includes('follow') || l.includes('community')) ? HiUserGroup :
                                 (l.includes('click') || l.includes('ctr')) ? HiCursorClick : HiHeart;

                    return (
                      <motion.div
                        key={idx}
                        initial={{ 
                          opacity: 0,
                          filter: "blur(8px)",
                          y: 10
                        }}
                        animate={{ 
                          opacity: 1,
                          filter: "blur(0px)",
                          y: 0
                        }}
                        transition={{ 
                          delay: 0.6 + (idx * 0.12),
                          duration: 1.4,
                          ease: [0.2, 0.8, 0.2, 1]
                        }}
                        whileHover={{ y: -5, backgroundColor: "rgba(0,0,0,0.6)" }}
                        className="group bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col items-start justify-between min-h-[140px] transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-black/20"
                      >
                        <div className="w-full flex justify-between items-start mb-4">
                          <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                            <Icon className="text-2xl text-white/80 group-hover:text-white transition-colors" />
                          </div>
                          <motion.div 
                            initial={{ width: 0 }}
                            whileHover={{ width: "100%" }}
                            className="h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          />
                        </div>
                        
                        <div>
                          <h3 className="text-3xl md:text-4xl font-bold text-white mb-1 tracking-tight">
                            {stat.value}
                          </h3>
                          <p className="text-xs font-medium uppercase tracking-widest text-white/50 group-hover:text-white/80 transition-colors">
                            {stat.label}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      </div>

      {/* Bottom Navigation Bars */}
      <div className="w-full px-1">
        <div className="grid grid-cols-4 gap-4">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className="group relative h-6 w-full bg-cream/10 rounded-lg overflow-hidden cursor-pointer"
            >
              {idx === activeIndex && (
                <motion.div
                  className="absolute inset-y-0 left-0 bg-zodiac"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, ease: "linear" }}
                />
              )}
              <div
                className={`absolute inset-y-0 left-0 bg-zodiac/40 transition-all duration-300 ${
                  idx !== activeIndex ? "w-0 group-hover:w-full" : "w-0"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
