"use client";

import SectionReveal from "@/components/SectionReveal";
import TextReveal from "@/components/TextReveal";

export default function MissionSection() {
  return (
    <SectionReveal className="py-16 md:py-24 lg:py-section-gap px-4 md:px-margin-edge max-w-container-max mx-auto">
      <div className="asymmetric-grid gap-gutter">
        <div className="col-span-12 md:col-span-5 mb-12 md:mb-0">
          <TextReveal
            as="h2"
            text="OUR MISSION"
            className="font-headline-lg text-headline-lg text-primary uppercase tracking-tight"
            delay={100}
            stagger={60}
          />
          <div className="w-24 h-2 bg-secondary mt-4 animate-fade-in" style={{ animationDelay: "400ms" }} />
        </div>
        <div className="col-span-12 md:col-span-7">
          <TextReveal
            as="p"
            text="We bridge the gap between creative vision and corporate stability."
            className="font-display-lg text-[32px] leading-tight text-primary mb-8 font-semibold"
            delay={200}
            stagger={30}
          />
          <TextReveal
            as="p"
            text="TopReg SME is a high-authority business scaling agency. We prioritize clarity, prestige, and tactical excellence to transform startups into market leaders. Through a meticulous approach to systems and legal frameworks, we ensure your business is built on granite, not sand."
            className="font-body-lg text-body-lg text-on-surface-variant mb-12"
            delay={400}
            stagger={15}
          />
          <div className="flex gap-4 flex-wrap">
            <span
              className="px-4 py-2 border-2 border-primary font-label-caps text-label-caps cursor-none hover:bg-primary hover:text-off-white transition-all"
              data-cursor-text="LAW"
            >
              LEGAL
            </span>
            <span
              className="px-4 py-2 border-2 border-primary font-label-caps text-label-caps cursor-none hover:bg-primary hover:text-off-white transition-all"
              data-cursor-text="OPS"
            >
              SYSTEMS
            </span>
            <span
              className="px-4 py-2 border-2 border-primary font-label-caps text-label-caps cursor-none hover:bg-primary hover:text-off-white transition-all"
              data-cursor-text="SCALE"
            >
              GROWTH
            </span>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
