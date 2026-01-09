"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { HiPlay } from "react-icons/hi2";
import { cn } from "@/lib/utils";

interface Stat {
  value: string;
  label: string;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  description: string;
  image: string;
  video?: string;
  stats: Stat[];
}

interface CaseStudyCarouselProps {
  items: CaseStudyItem[];
}

export default function CaseStudyCarousel({ items }: CaseStudyCarouselProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [progress, setProgress] = useState<number[]>(new Array(items.length).fill(0));
  const [isPaused, setIsPaused] = useState(false);

  const handleVideoUpdate = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
        const currentProgress = (video.currentTime / video.duration) * 100;
        setProgress(prev => {
            const newProgress = [...prev];
            newProgress[index] = currentProgress;
            return newProgress;
        });
        
        if (currentProgress >= 99) {
           video.currentTime = 0;
           video.play();
        }
    }
  };

  const handleItemClick = (index: number) => {
    if (activeIndex === index) {
      setIsPaused(!isPaused);
    } else {
      setActiveIndex(index);
      setIsPaused(false);
    }
  };

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === activeIndex) {
          video.muted = false; 
          if (isPaused) {
            video.pause();
          } else {
            video.play().catch(() => {});
          }
        } else {
          video.pause();
          video.currentTime = 0; 
        }
      }
    });
  }, [activeIndex, isPaused]);

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Container: Vertical on Mobile (Tall), Horizontal on Desktop */}
      <div className="flex flex-col md:flex-row gap-4 h-[1200px] md:h-[600px] w-full items-stretch">
        {items.map((item, index) => {
          const isActive = index === activeIndex;
          const viewsStat = item.stats.find(s => s.label.toLowerCase().includes("views")) || item.stats[0];

          return (
            <motion.div
              key={item.id}
              layout
              onClick={() => handleItemClick(index)}
              className={cn(
                "relative cursor-pointer group transition-all duration-500 ease-in-out flex flex-col",
                isActive ? "flex-[5] md:flex-[2] border-white/40" : "flex-[1] border-white/10",
                // Mobile: Ensure inactive items are small strips, active is large
                !isActive && "min-h-[60px] md:min-h-0 md:min-w-[60px]"
              )}
              style={{ willChange: "flex-grow" }} 
            >
              {/* Card Box */}
              <div
                className={cn(
                  "relative rounded-2xl overflow-hidden flex-1 min-h-0 border border-white/10",
                  isActive ? "border-white/40" : "border-white/10"
                )}
              >
                {/* Background Video/Image */}
                <div className="absolute inset-0 bg-zinc-900">
                  {item.video ? (
                    <video
                      ref={(el) => {
                        videoRefs.current[index] = el;
                      }}
                      src={item.video}
                      className="w-full h-full object-cover"
                      muted
                      loop={false}
                      playsInline
                      onTimeUpdate={() => handleVideoUpdate(index)}
                    />
                  ) : (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover opacity-60"
                    />
                  )}
                  {/* Overlay Gradient */}
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent transition-opacity duration-300",
                      isActive ? "opacity-80" : "opacity-60 hover:opacity-70"
                    )}
                  />
                </div>

                {/* Inactive State: Play Overlay */}
                {!isActive && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 pointer-events-none px-6">
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                      <HiPlay className="w-6 h-6 text-white ml-1" />
                    </div>
                    <p className="md:hidden text-white/60 text-sm font-medium tracking-widest uppercase text-center line-clamp-2">
                      {item.title}
                    </p>
                  </div>
                )}

                {/* Inactive State: Vertical Text (Desktop) */}
                {!isActive && (
                  <div className="absolute inset-0 hidden md:flex flex-col items-center justify-end pb-8 pointer-events-none">
                    <p className="vertical-text text-white/50 text-sm font-medium tracking-widest uppercase truncate w-6 writing-mode-vertical">
                      <span className="block rotate-180" style={{ writingMode: "vertical-rl" }}>
                        {item.title}
                      </span>
                    </p>
                  </div>
                )}

                {/* Active State Content */}
                <AnimatePresence mode="wait">
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: 0.2 }}
                      className="absolute inset-0 p-6 flex flex-col justify-end pointer-events-none"
                    >
                      {/* Status Indicator (Top Right) */}
                      <div className="absolute top-6 right-6 pointer-events-auto">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                          {isPaused ? (
                            <HiPlay className="w-4 h-4 text-white ml-0.5" />
                          ) : (
                            <span className="animate-pulse w-3 h-3 bg-red-500 rounded-full" />
                          )}
                        </div>
                      </div>

                      <div className="space-y-4 bg-cream/20 backdrop-blur-sm rounded-xl p-3">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-cream leading-tight mb-2">
                            {item.title}
                          </h3>
                        </div>

                        {/* Views Stat - Featured */}
                        {viewsStat && (
                          <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-bold text-cream tracking-tighter">
                              {viewsStat.value}
                            </span>
                            <span className="text-sm font-regular text-cream tracking-widest uppercase">
                              {viewsStat.label}
                            </span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile: Progress Bar Under Each Card (Outside the box) */}
              <div className="md:hidden px-1 pt-2">
                <div className="h-1.5 rounded-full overflow-hidden bg-white/10">
                  <motion.div
                    className="h-full bg-zodiac"
                    initial={{ width: 0 }}
                    animate={{ width: activeIndex === index ? `${progress[index]}%` : "0%" }}
                    transition={{ ease: "linear", duration: 0.3 }}
                  />
                </div>
              </div>

          </motion.div>
          );
        })}
      </div>

      {/* Progress Bars (Bottom) */}
        <div className="hidden md:flex gap-2 w-full px-1">
        {items.map((_, i) => (
            <div 
                key={i} 
                className={cn(
                    "h-2 rounded-full overflow-hidden bg-white/10 transition-all duration-500 ease-in-out mr-1",
                    activeIndex === i ? "flex-[2]" : "flex-[1]"
                )}
            >
                 <motion.div 
                    className="h-full bg-zodiac"
                    initial={{ width: 0 }}
                    animate={{ 
                        width: activeIndex === i ? `${progress[i]}%` : "0%"
                    }}
                    transition={{ ease: "linear", duration: 0.3 }}
                 />
            </div>
        ))}
      </div>
    </div>
  );
}
