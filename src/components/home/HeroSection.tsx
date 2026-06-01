"use client";

import Image from "next/image";
import ParallaxElement from "@/components/ParallaxElement";
import TextReveal from "@/components/TextReveal";

export default function HeroSection() {
  return (
    <section className="relative h-[95vh] min-h-[700px] w-full flex items-center overflow-hidden bg-deep-black">
      {/* Parallax Background Video & Image Fallback */}
      <ParallaxElement speed={-0.25} className="absolute inset-0 w-full h-[120%] -top-[10%] z-0">
        <div className="relative w-full h-full">
          {/* Loop Video Backdrop for Corporate Pulse */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover grayscale-[30%] brightness-[0.4]"
            poster="https://lh3.googleusercontent.com/aida-public/AB6AXuBVRL_2BHgs0qKNaBzI2pMDF-ibAD3x8CEdqiUXcYJFStA4NA3dRoig7vDImbYSa6au26MaH2nHF-7MoGjBHe8XVyvPg6_g3gOGdzt2i4tWKWUR7TtiSa77cN-fP3f834QiclqewS-KdghFNjuL8j8o8kFJwf0lhhlYr20U_zo28yAtFPrfjoztbT1JJ-cLne5UZ91iC_w8TM8nhiL38618UQcnwzSg0h-DPevupaNO-IDLMovqx8E1TAkg7f7LWc3ZSwtqibOFWs1b"
          >
            <source
              src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3ccee5d36c97c365313a525f0a07db99f&profile_id=139&oauth2_token_id=57447761"
              type="video/mp4"
            />
            {/* Fallback image */}
            <Image
              alt="TopReg SME Hero"
              className="object-cover grayscale-[20%] brightness-[0.8]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVRL_2BHgs0qKNaBzI2pMDF-ibAD3x8CEdqiUXcYJFStA4NA3dRoig7vDImbYSa6au26MaH2nHF-7MoGjBHe8XVyvPg6_g3gOGdzt2i4tWKWUR7TtiSa77cN-fP3f834QiclqewS-KdghFNjuL8j8o8kFJwf0lhhlYr20U_zo28yAtFPrfjoztbT1JJ-cLne5UZ91iC_w8TM8nhiL38618UQcnwzSg0h-DPevupaNO-IDLMovqx8E1TAkg7f7LWc3ZSwtqibOFWs1b"
              fill
              sizes="100vw"
              priority
            />
          </video>
          <div className="absolute inset-0 hero-gradient-overlay" />
        </div>
      </ParallaxElement>

      <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-edge">
        <div className="max-w-4xl">
          <span className="inline-block font-label-caps text-label-caps text-secondary bg-off-white px-3 py-1 mb-8 animate-fade-in">
            HEY ENTREPRENEURS!
          </span>

          <TextReveal
            as="h1"
            text="Bringing Your Business From Idea & Imagination, Into Reality."
            className="font-display-xl text-display-xl text-off-white mb-8 tracking-tighter"
            delay={100}
            stagger={50}
          />

          <TextReveal
            as="p"
            text="While guiding you by the hand through LEGAL — LAUNCH — BRAND & STRUCTURE. We don't just advise; we architect your growth."
            className="font-body-lg text-body-lg text-off-white/80 max-w-2xl mb-12 border-l-2 border-secondary pl-6"
            delay={600}
            stagger={30}
          />

          <div className="flex flex-col sm:flex-row gap-gutter">
            <button
              className="bg-off-white text-primary px-10 py-5 font-headline-lg text-body-lg font-bold hover:bg-secondary hover:text-off-white transition-all duration-300 flex items-center group cursor-none"
              data-cursor-text="LAUNCH"
            >
              Launch My Business
              <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
            <button
              className="border-2 border-off-white text-off-white px-10 py-5 font-headline-lg text-body-lg font-bold hover:bg-off-white hover:text-primary transition-all duration-300 cursor-none"
              data-cursor-text="GROW"
            >
              Grow My Business
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
