interface VideoCardProps {
  videoSrc: string;
  poster?: string;
  className?: string;
}

export default function VideoCard({ videoSrc, poster, className = "" }: VideoCardProps) {
  return (
    <div className={`relative w-full max-w-sm overflow-hidden rounded-2xl bg-black shadow-lg ${className}`}>
      {/* Video */}
      <video
        className="h-full w-full object-cover"
        src={videoSrc}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
      />
      
      {/* Optional overlay for interactions */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none" />
    </div>
  );
}