import Link from "next/link";
import FadeIn from "@/components/motion/FadeIn";
import AnimatedButton from "@/components/ui/buttons/AnimatedButton";

export default function NotFound() {
  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-900/30 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-900/30 rounded-full blur-[120px] mix-blend-screen animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 text-center px-6">
        <FadeIn direction="none">
          <h1 className="text-[12rem] md:text-[16rem] font-bold text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent leading-none select-none">
            404
          </h1>
        </FadeIn>

        <div className="relative -mt-12 md:-mt-20">
          <FadeIn delay={0.2}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Lost in the void?
            </h2>
            <p className="text-white/60 text-lg max-w-md mx-auto mb-10 font-light">
              The page you are looking for has drifted into deep space. Let&apos;s get you back on course.
            </p>

            <Link href="/" className="inline-block group">
              <AnimatedButton
                className="px-8 py-4 bg-white text-black rounded-full font-bold text-sm tracking-wide uppercase hover:bg-gray-100 transition-colors relative overflow-hidden"
              >
                <span className="relative z-10">Return Home</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </AnimatedButton>
            </Link>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
