import Image from "next/image";

interface HowItWorksCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
}

export default function HowItWorksCard({
  id,
  title,
  description,
  image,
}: HowItWorksCardProps) {
  return (
    <div className="group relative h-[500px] rounded-3xl overflow-hidden w-full">
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black group-hover:to-black/80 transition-colors duration-500" />

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-between">
        {/* Number */}
        <span className="text-6xl font-light text-white/90 tracking-tighter">
          {id}
        </span>

        {/* Text */}
        <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
          <h3 className="text-3xl font-bold text-white mb-3">{title}</h3>
          <p className="text-white/70 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
            {description}
          </p>
        </div>
      </div>

      {/* Border Glow Effect */}
      <div className="absolute inset-0 border border-white/10 rounded-3xl group-hover:border-white/30 transition-colors duration-500" />
    </div>
  );
}
