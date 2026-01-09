import Link from "next/link";
import FadeIn from "@/components/motion/FadeIn";
import { BLOG_POSTS } from "@/lib/blog-data";

export default function ArticlesPage() {
  return (
    <main className="bg-black min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <section className="mb-24 text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter">
              LATEST <span className="text-white/40">INSIGHTS</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
              Trends, strategies, and stories from the forefront of the creator economy.
            </p>
          </FadeIn>
        </section>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {BLOG_POSTS.map((post, idx) => (
            <FadeIn key={post.id} delay={idx * 0.1}>
              <Link href={`/articles/${post.id}`} className="group block cursor-pointer">
                <div className="relative aspect-[16/9] overflow-hidden mb-6 bg-white/5 rounded-sm">
                   {/* Date Badge */}
                   <div className="absolute top-4 left-4 z-30">
                     <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-black/50 backdrop-blur-md rounded-full text-white border border-white/10">
                        {post.category}
                     </span>
                   </div>

                  <div className="absolute inset-0 bg-zodiac/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  {/* Placeholder for real image */}
                  <div className={`w-full h-full bg-zodiac-800 transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0 relative`}>
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
                  </div>
                  
                  {/* Hover Overlay Info - Arrow Button */}
                  <div className="absolute bottom-0 right-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20 flex justify-end">
                      <span className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center bg-white/10 backdrop-blur-md text-white">
                        ↗
                      </span>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-6">
                    <div className="flex justify-between items-start mb-3">
                         <span className="text-white/40 text-xs font-mono uppercase tracking-wider">
                            {post.date}
                         </span>
                         <span className="text-white/40 text-xs font-mono uppercase tracking-wider">
                            {post.readTime}
                         </span>
                    </div>

                    <h2 className="text-2xl text-white font-medium mb-3 group-hover:text-cream-100 transition-colors leading-tight">
                      {post.title}
                    </h2>
                    
                    <p className="text-white/50 text-sm leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </main>
  );
}
