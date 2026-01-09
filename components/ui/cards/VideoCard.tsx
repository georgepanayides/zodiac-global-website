"use client";

import { useEffect, useRef, useState } from "react";

interface VideoCardProps {
  videoSrc: string;
  poster?: string;
  className?: string;
}

export default function VideoCard({ videoSrc, poster, className = "" }: VideoCardProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const element = wrapperRef.current;
    if (!element || shouldLoad) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        // Start loading slightly before it enters the viewport so it plays smoothly.
        rootMargin: "300px 0px",
        threshold: 0.01,
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [shouldLoad]);

  return (
    <div
      ref={wrapperRef}
      className={`relative w-full max-w-sm overflow-hidden rounded-2xl bg-black shadow-lg ${className}`}
    >
      {shouldLoad ? (
        <video
          className="h-full w-full object-cover"
          src={videoSrc}
          poster={poster}
          preload="metadata"
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <div
          className="h-full w-full"
          aria-hidden
          style={
            poster
              ? { backgroundImage: `url(${poster})`, backgroundSize: "cover", backgroundPosition: "center" }
              : undefined
          }
        />
      )}
      
      {/* Optional overlay for interactions */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none" />
    </div>
  );
}