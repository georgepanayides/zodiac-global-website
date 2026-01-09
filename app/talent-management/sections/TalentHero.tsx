import Image from "next/image";

export default function HeroSection() {
  const gridImages = [
    "/images/HQB06728.jpg",
    "/images/HQB06762.jpg",
    "/images/HQB06855.jpg",
    "/images/HQB06873.jpg",
  ];

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-0">
        {gridImages.map((image, index) => (
          <div key={index} className="relative w-full h-full">
            <Image
              src={image}
              alt={`Hero ${index + 1}`}
              fill
              className="object-cover"
              priority={index < 2}
            />
          </div>
        ))}
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent via-black/40 to-black pointer-events-none" />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Hero Text */}
      <div className="absolute inset-0 flex items-center justify-center z-10 text-center px-4">
        <h1 className="text-cream text-5xl md:text-[8rem] lg:text-[10rem] font-bold leading-[0.9] tracking-tight">
          360° Talent
          <br />
          Management
        </h1>
      </div>
    </section>
  );
}
