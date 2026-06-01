"use client";

import SectionReveal from "@/components/SectionReveal";
import TextReveal from "@/components/TextReveal";

export default function FinalCta() {
  return (
    <SectionReveal className="py-16 md:py-24 lg:py-section-gap px-4 md:px-margin-edge text-center max-w-container-max mx-auto">
      <div className="max-w-4xl mx-auto border-2 border-primary p-8 sm:p-12 md:p-20 relative">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-surface px-8 py-2">
          <span className="font-label-caps text-label-caps text-primary tracking-[0.3em] animate-fade-in">
            THE NEXT STEP
          </span>
        </div>
        
        <TextReveal
          as="h2"
          text="Your business transformation begins with a single decision."
          className="font-display-lg text-3xl sm:text-5xl lg:text-display-lg text-primary mb-12 tracking-tight justify-center"
          delay={100}
          stagger={30}
        />

        <div className="flex flex-col sm:flex-row justify-center gap-gutter">
          <button
            className="bg-primary text-off-white px-12 py-6 font-headline-lg text-body-lg font-bold hover:bg-secondary transition-all cursor-none"
            data-cursor-text="LAUNCH"
          >
            Launch Now
          </button>
          <button
            className="border-2 border-primary text-primary px-12 py-6 font-headline-lg text-body-lg font-bold hover:bg-primary hover:text-off-white transition-all cursor-none"
            data-cursor-text="TALK"
          >
            Book Consultation
          </button>
        </div>
      </div>
    </SectionReveal>
  );
}
