import Image from "next/image";
import Link from "next/link";
import Ticker from "@/components/motion/Ticker";
import VideoCard from "@/components/ui/cards/VideoCard";

export default function Home() {
  // Video paths
  const allVideos = [
    "/videos/SnapInsta.to_AQNvn5_RWdOJvK1m2cbuIB56uk7dXvg_2xq5w5w6HuT6fUOkUm6keo80B8Kk3Q9Ox_-0_1HbjFAS5gb-QYgQiqKyqieZaZdsTS-_Q2c.mp4",
    "/videos/SnapInsta.to_AQOlJmHo5WHvklpBrxqx4Ju7vZTt6v-lmqspQ8qNMQ5fGb5naAkB_pj405Kji-k5ZXqbX3rUXqkB9kzTPP62udcDoRIUUkNNj4wdM0Q.mp4",
    "/videos/SnapInsta.to_AQPljAyUl8vbBITOW4fOJEyxMxGGZAOES2EAgT0Y5jwsokoqIDQdJCVc4DWZFuZlo8PgoxYgWh7A0D4ZZ-i6OCxDrwFujdxRugu3pJ0.mp4",
    "/videos/SnapTikZ.App_7515732061341125910_hd.mp4",
    "/videos/ssstik.io_@leahlouvaine_1754284735770.mp4",
    "/videos/ssstik.io_1756449918293.mp4",
    "/videos/zodiac-short-video-1.mp4",
    "/videos/zodiac-short-video-2.mp4",
    "/videos/zodiac-short-video-3.mp4",
    "/videos/zodiac-short-video-4.mp4",
    "/videos/zodiac-short-video-5.mp4",
  ];

  // Helper to shuffle array (removed to avoid impure function error)
  
  // Create 6 columns with different videos and directions
  const columns = [
    { 
      videos: [allVideos[0], allVideos[5], allVideos[2], allVideos[8], allVideos[1], allVideos[9], allVideos[3], allVideos[7], allVideos[10], allVideos[4], allVideos[6]], 
      direction: "up" as const, 
      duration: 65 
    },
    { 
      videos: [allVideos[5], allVideos[2], allVideos[8], allVideos[1], allVideos[9], allVideos[3], allVideos[7], allVideos[0], allVideos[10], allVideos[4], allVideos[6]], 
      direction: "down" as const, 
      duration: 75 
    },
    { 
      videos: [allVideos[10], allVideos[4], allVideos[1], allVideos[6], allVideos[2], allVideos[8], allVideos[5], allVideos[9], allVideos[0], allVideos[3], allVideos[7]], 
      direction: "up" as const, 
      duration: 60 
    },
    { 
      videos: [allVideos[3], allVideos[9], allVideos[5], allVideos[0], allVideos[7], allVideos[1], allVideos[4], allVideos[10], allVideos[6], allVideos[8], allVideos[2]], 
      direction: "down" as const, 
      duration: 70 
    },
    { 
      videos: [allVideos[8], allVideos[0], allVideos[6], allVideos[4], allVideos[10], allVideos[5], allVideos[2], allVideos[7], allVideos[1], allVideos[9], allVideos[3]], 
      direction: "up" as const, 
      duration: 68 
    },
    { 
      videos: [allVideos[1], allVideos[7], allVideos[3], allVideos[9], allVideos[0], allVideos[6], allVideos[8], allVideos[2], allVideos[5], allVideos[10], allVideos[4]], 
      direction: "down" as const, 
      duration: 62 
    },
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
