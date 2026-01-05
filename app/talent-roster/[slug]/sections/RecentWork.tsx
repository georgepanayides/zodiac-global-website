import Image from "next/image";
import FadeIn from "@/components/motion/FadeIn";

interface WorkItem {
  id: number;
  title: string;
  brand: string;
  image: string;
  type: "Video" | "Image" | "Campaign";
}

interface RecentWorkProps {
  work: WorkItem[];
}

export default function RecentWork({ work }: RecentWorkProps) {
  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 tracking-tight">
            Recent Work
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {work.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.1}>
              <div className="group cursor-pointer">
                <div className="relative aspect-video overflow-hidden rounded-sm mb-6 bg-white/5">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1 bg-black/50 backdrop-blur-md text-white/80 text-xs uppercase tracking-wider rounded-full border border-white/10">
                      {item.type}
                    </span>
                  </div>
                </div>
                
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-2xl text-white font-medium mb-1 group-hover:text-cream transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-white/50 text-sm uppercase tracking-wider">
                      {item.brand}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 group-hover:text-white group-hover:border-white transition-all">
                    ↗
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
