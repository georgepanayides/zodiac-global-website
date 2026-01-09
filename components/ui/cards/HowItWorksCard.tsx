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
    <div
      tabIndex={0}
      className="group relative w-full mt-12 focus:outline-none focus-visible:outline-none"
    >
      {/* Number - Tucked behind */}
      <div className="absolute -top-18 left-8 z-0 transition-transform duration-500 group-hover:-translate-y-15 group-focus-within:-translate-y-15 group-active:-translate-y-15">
        <span className="text-9xl font-bold text-white/10 select-none font-sans">
          {id}
        </span>
      </div>

      {/* Card Container */}
      <div className="relative z-10 h-[500px] rounded-3xl overflow-hidden w-full bg-zinc-900">
        {/* Background Image */}
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110 group-focus-within:scale-110 group-active:scale-110 opacity-60 group-hover:opacity-40 group-focus-within:opacity-40 group-active:opacity-40"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90" />

        {/* Content */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end">
          <div className="relative z-20">
            <h3 className="text-3xl font-bold text-white mb-0 group-hover:mb-4 group-focus-within:mb-4 group-active:mb-4 transition-all duration-500">
              {title}
            </h3>
            
            {/* Description Wrapper for Height Animation */}
            <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr] group-active:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
              <div className="overflow-hidden">
                <p className="text-white/70 text-sm leading-relaxed opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 group-active:opacity-100 transition-opacity duration-500 delay-75">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Border Glow Effect */}
        <div className="absolute inset-0 border border-white/10 rounded-3xl group-hover:border-white/30 group-focus-within:border-white/30 group-active:border-white/30 transition-colors duration-500 pointer-events-none" />
      </div>
    </div>
  );
}
