import Image from "next/image";
import Link from "next/link";
import Ticker from "@/components/motion/Ticker";
import VideoCard from "@/components/ui/cards/VideoCard";
import { CDN_VIDEOS } from "@/lib/constants";
import { IoMegaphoneOutline, IoPeopleOutline } from "react-icons/io5";

export default function Home() {
  const baseVideos = CDN_VIDEOS;

  const getColumnVideos = (columnIndex: number, count: number) => {
    if (baseVideos.length === 0) return [];

    const start = (columnIndex * 3) % baseVideos.length;
    return Array.from({ length: count }, (_, i) => baseVideos[(start + i) % baseVideos.length]);
  };

  // Create 6 columns with different videos and directions
  const columns = Array.from({ length: 6 }, (_, columnIndex) => ({
    videos: getColumnVideos(columnIndex, 16),
    direction: (columnIndex % 2 === 0 ? "up" : "down") as "up" | "down",
    duration: 60 + (columnIndex % 3) * 6,
  }));

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-zodiac overflow-hidden">
      {/* Animated Video Background */}
      <div className="absolute inset-0 flex gap-4">
        {columns.map((column, columnIndex) => (
          <div 
            key={columnIndex} 
            className={`flex-1 rotate-2 ${columnIndex > 2 ? 'hidden md:block' : ''}`}
          >
            <Ticker direction={column.direction} duration={column.duration} className="h-screen">
              {column.videos.map((video, videoIndex) => (
                <VideoCard
                  key={`${columnIndex}-${videoIndex}`}
                  videoSrc={video}
                  className="w-full md:h-[400px] h-42"
                />
              ))}
            </Ticker>
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 w-full h-full"/>
      
      <main className="flex flex-col items-center justify-center px-4 md:px-8 z-10 w-full max-w-5xl mx-auto">
        {/* Logo and Text Section */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-8 md:mb-12 w-full justify-center">
          
          {/* Text */}
          <div className="w-full text-center md:text-right">
            <div className="flex flex-col md:flex-row w-full items-center justify-center md:justify-end gap-4 md:gap-12">
              {/* Logo */}
              <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 relative">
                <Image
                src={"/logo/zodiacgloballogo.png"}
                fill
                className="object-contain"
                alt="Zodiac Global Logo"
                priority
                sizes="(min-width: 768px) 128px, 96px"
                />
              </div>
              <h1 className="text-6xl md:text-[8rem] lg:text-[10rem] font-semibold text-cream leading-[0.8] text-center md:text-right tracking-tighter">
                zodiac
              </h1>
            </div>
            <h2 className="text-6xl md:text-[8rem] lg:text-[10rem] font-semibold text-cream leading-[0.8] text-center md:text-right tracking-tighter mt-2 md:mt-0">
              global group
            </h2>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 w-full md:w-auto px-4">
          <Link href="/talent-management" className="group flex items-center justify-between md:justify-start gap-4 w-full md:w-auto p-1">
            <div className="flex-1 md:flex-initial px-6 py-4 md:px-10 md:py-5 bg-cream/75 backdrop-blur-xs border border-white/20 rounded-xl hover:bg-cream transition-all duration-300">
              <span className="inline-flex items-center gap-3 text-lg md:text-2xl font-bold tracking-tight text-zodiac uppercase whitespace-nowrap">
                <IoPeopleOutline className="w-5 h-5 md:w-6 md:h-6" aria-hidden />
                <span>Talent Management</span>
              </span>
            </div>
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-md group-hover:bg-cream group-hover:text-black group-hover:rotate-45 transition-all duration-300 text-cream shrink-0">
               <span className="text-xl md:text-2xl">↗</span>
            </div>
          </Link>

          <Link href="/influencer-marketing" className="group flex items-center justify-between md:justify-start gap-4 w-full md:w-auto p-1">
            <div className="flex-1 md:flex-initial px-6 py-4 md:px-10 md:py-5 bg-cream/75 backdrop-blur-xs border border-white/20 rounded-xl hover:bg-cream transition-all duration-300">
              <span className="inline-flex items-center gap-3 text-lg md:text-2xl font-bold tracking-tight text-zodiac uppercase whitespace-nowrap">
                <IoMegaphoneOutline className="w-5 h-5 md:w-6 md:h-6" aria-hidden />
                <span>Influencer Marketing</span>
              </span>
            </div>
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center bg-cream/25 backdrop-blur-md group-hover:bg-cream group-hover:text-black group-hover:rotate-45 transition-all duration-300 text-cream shrink-0">
               <span className="text-xl md:text-2xl">↗</span>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
