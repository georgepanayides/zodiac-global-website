import Image from "next/image";

export default function HeroSectionAlt() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Grid Layout */}
      <div className="absolute inset-0 flex gap-4 p-6">
        {/* Left Image - 70% width */}
        <div className="relative w-[70%] h-full">
          <Image
            src="/images/HQB06728.jpg"
            alt="Hero Left"
            fill
            className="object-cover rounded-xl"
            priority
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40 rounded-xl" />
          
          {/* Hero Text */}
          <div className="absolute inset-0 flex items-end justify-start z-10 p-12">
            <h1 className="text-white text-[10rem] font-bold leading-none tracking-tight">
              Influencer
              <br />
              Marketing
            </h1>
          </div>
        </div>

        {/* Right Column - 30% width with 2 stacked images */}
        <div className="relative w-[30%] h-full flex flex-col gap-4">
          <div className="relative w-full h-1/2">
            <Image
              src="/images/HQB06762.jpg"
              alt="Hero Right Top"
              fill
              className="object-cover rounded-xl"
            />
          </div>
          <div className="relative w-full h-1/2">
            <Image
              src="/images/HQB06855.jpg"
              alt="Hero Right Bottom"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
