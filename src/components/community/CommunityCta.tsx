"use client";

import SectionReveal from "@/components/SectionReveal";
import TextReveal from "@/components/TextReveal";

export default function CommunityCta() {
  return (
    <SectionReveal className="bg-deep-black text-off-white py-16 md:py-24 lg:py-section-gap px-4 md:px-margin-edge text-center overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="grid grid-cols-12 h-full w-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-off-white h-full" />
          ))}
        </div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <TextReveal
          as="h2"
          text="Ready to Begin?"
          className="font-display-xl text-4xl sm:text-6xl lg:text-display-xl mb-gutter justify-center"
          delay={100}
          stagger={40}
        />
        
        <TextReveal
          as="p"
          text="Join the ranks of Nigeria's most successful SMEs. We turn your legal complexities into competitive advantages."
          className="font-body-lg text-body-lg mb-12 text-cool-gray max-w-2xl mx-auto justify-center"
          delay={300}
          stagger={15}
        />
        
        <div className="flex flex-col sm:flex-row gap-gutter justify-center items-center px-4 w-full max-w-lg mx-auto">
          <button 
            className="w-full sm:w-auto bg-off-white text-primary px-12 py-5 font-headline-lg font-extrabold uppercase tracking-tight hover:bg-secondary hover:text-white transition-all transform active:scale-95 cursor-none"
            data-cursor-text="LAUNCH"
          >
            Start Incorporation
          </button>
          <button 
            className="w-full sm:w-auto border-2 border-off-white text-off-white px-12 py-5 font-headline-lg font-extrabold uppercase tracking-tight hover:bg-off-white hover:text-primary transition-all cursor-none"
            data-cursor-text="TALK"
          >
            Talk to a Strategist
          </button>
        </div>
      </div>
    </SectionReveal>
  );
}
