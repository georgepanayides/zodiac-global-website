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
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Hero Text */}
      <div className="absolute inset-0 flex items-center justify-center z-10 text-center">
        <h1 className="text-cream text-[8rem] md:text-[10rem] lg:text-[12rem] font-bold leading-none tracking-tight">
          Talent
          <br />
          Management
        </h1>
      </div>
    </section>
  );
}
