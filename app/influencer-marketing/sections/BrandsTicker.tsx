import Image from "next/image";
import HorizontalTicker from "@/components/motion/HorizontalTicker";

export default function BrandsTicker() {
  const brands = [
    "/images/brands/zodiac-brands-1.png",
    "/images/brands/zodiac-brands-2.png",
    "/images/brands/zodiac-brands-3.png",
    "/images/brands/zodiac-brands-4.png",
    "/images/brands/zodiac-brands-5.png",
    "/images/brands/zodiac-brands-6.png",
  ];

  return (
    <section className="w-full py-16 overflow-hidden">
      <HorizontalTicker direction="left" duration={30} className="w-full">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="relative w-48 h-24 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300"
          >
            <Image
              src={brand}
              alt={`Brand ${index + 1}`}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </HorizontalTicker>
    </section>
  );
}
