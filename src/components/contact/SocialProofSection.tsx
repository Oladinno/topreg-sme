"use client";

import TextReveal from "@/components/TextReveal";

export default function SocialProofSection() {
  return (
    <section className="bg-deep-black py-16 md:py-24 lg:py-section-gap">
      <div className="px-4 md:px-margin-edge max-w-container-max mx-auto text-center">
        <TextReveal
          as="p"
          text="GLOBAL NETWORK"
          className="font-label-caps text-label-caps text-secondary mb-8 justify-center"
          delay={100}
          stagger={40}
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center opacity-30 grayscale invert select-none">
          <span className="font-display-lg text-2xl sm:text-4xl md:text-headline-lg">VENTURE</span>
          <span className="font-display-lg text-2xl sm:text-4xl md:text-headline-lg">STRATEGY</span>
          <span className="font-display-lg text-2xl sm:text-4xl md:text-headline-lg">SCALE</span>
          <span className="font-display-lg text-2xl sm:text-4xl md:text-headline-lg">INNOVATE</span>
        </div>
      </div>
    </section>
  );
}
