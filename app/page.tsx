import Image from "next/image";
import Link from "next/link";
import Ticker from "@/components/motion/Ticker";
import VideoCard from "@/components/ui/cards/VideoCard";

export default function Home() {
  // Video paths
  const videos = [
    "/videos/zodiac-short-video-1.mp4",
    "/videos/zodiac-short-video-2.mp4",
    "/videos/zodiac-short-video-3.mp4",
    "/videos/zodiac-short-video-4.mp4",
    "/videos/zodiac-short-video-5.mp4",
  ];

  // Create 6 columns with different videos and directions
  const columns = [
    { videos: [...videos, ...videos.slice(0, 1)], direction: "up" as const, duration: 65 },
    { videos: [...videos, ...videos.slice(0, 1)], direction: "down" as const, duration: 65 },
    { videos: [...videos, ...videos.slice(0, 1)], direction: "up" as const, duration: 65 },
    { videos: [...videos, ...videos.slice(0, 1)], direction: "down" as const, duration: 65 },
    { videos: [...videos, ...videos.slice(0, 1)], direction: "up" as const, duration: 65 },
    { videos: [...videos, ...videos.slice(0, 1)], direction: "down" as const, duration: 65 },
  ];

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-zodiac overflow-hidden">
      {/* Animated Video Background */}
      <div className="absolute inset-0 flex gap-4">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="flex-1 rotate-2">
            <Ticker direction={column.direction} duration={column.duration} className="h-screen">
              {column.videos.map((video, videoIndex) => (
                <VideoCard
                  key={`${columnIndex}-${videoIndex}`}
                  videoSrc={video}
                  className="w-full h-[400px]"
                />
              ))}
            </Ticker>
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 w-full h-full"/>
      
      <main className="flex flex-col items-center justify-center px-8 z-10">
        {/* Logo and Text Section */}
        <div className="flex items-center gap-8 mb-12">
          
          {/* Text */}
          <div>
            <div className="flex w-full items-center justify-end gap-12">
              {/* Logo */}
              <div className="flex-shrink-0 h-42 w-42">
                <Image
                src={"/logo/zodiacgloballogo.png"}
                width={600}
                height={500}
                alt="Zodiac Global Logo"
                />
              </div>
              <h1 className="text-[10rem] font-semibold text-cream leading-none text-right">
                zodiac
              </h1>
            </div>
            <h2 className="text-[10rem] font-semibold text-cream leading-none text-right">
              global group
            </h2>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-6">
          <Link href="/talent-management" className="px-12 py-4 bg-cream text-black text-3xl font-normal rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
            Talent Management
          </Link>
          <Link href="/influencer-marketing" className="px-12 py-4 bg-cream text-black text-3xl font-normal rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
            Influencer Marketing
          </Link>
        </div>
      </main>
    </div>
  );
}
