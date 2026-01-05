import Image from "next/image";
import FadeIn from "@/components/motion/FadeIn";

interface ProfileHeroProps {
  name: string;
  handle: string;
  category: string;
  bio: string;
  image: string;
}

export default function ProfileHero({ name, handle, category, bio, image }: ProfileHeroProps) {
  return (
    <section className="relative min-h-[80vh] flex items-end pb-20 bg-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white/80 text-sm uppercase tracking-wider">
                {category}
              </span>
              <span className="text-white/60 font-mono">{handle}</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tighter mb-8 leading-none">
              {name}
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-2xl">
              {bio}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
