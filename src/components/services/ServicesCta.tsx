"use client";

import SectionReveal from "@/components/SectionReveal";
import TextReveal from "@/components/TextReveal";

export default function ServicesCta() {
  return (
    <SectionReveal className="asym-grid pb-16 md:pb-24 lg:pb-section-gap max-w-container-max mx-auto px-4 md:px-margin-edge">
      <div className="col-span-12 lg:col-span-10 lg:col-start-2 text-center py-16 md:py-24 bg-primary text-off-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        
        <TextReveal
          as="h2"
          text="Scale your vision into a Legacy."
          className="font-display-lg text-3xl sm:text-5xl lg:text-display-lg mb-12 relative z-10 justify-center px-4"
          delay={100}
          stagger={35}
        />

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center relative z-10 px-6">
          <button 
            className="w-full md:w-auto bg-off-white text-primary px-12 py-5 font-headline-lg text-body-lg hover:bg-secondary hover:text-off-white transition-all active:scale-95 cursor-none"
            data-cursor-text="TALK"
          >
            Consult with our Experts
          </button>
          <a
            className="font-label-caps text-label-caps border-b border-off-white pb-1 hover:text-secondary hover:border-secondary transition-all cursor-none"
            href="mailto:hello@topregsme.com.ng"
            data-cursor-text="MAIL"
          >
            BOOK A WALKTHROUGH
          </a>
        </div>
      </div>
    </SectionReveal>
  );
}
