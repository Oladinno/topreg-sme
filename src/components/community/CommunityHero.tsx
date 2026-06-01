"use client";

import TextReveal from "@/components/TextReveal";

export default function CommunityHero() {
  return (
    <section className="py-section-gap px-margin-edge max-w-container-max mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div className="md:col-span-8">
          <span className="font-label-caps text-label-caps text-secondary mb-4 block animate-fade-in">
            IMAGINATION INTO REALITY
          </span>
          
          <TextReveal
            as="h1"
            text="Brought To Life."
            className="font-display-xl text-display-xl-mobile md:text-display-xl leading-none mb-gutter text-primary"
            delay={100}
            stagger={60}
          />
        </div>
        <div className="md:col-span-4 flex flex-col justify-end">
          <TextReveal
            as="p"
            text="TopReg SME serves as the foundational architect for Nigeria's most ambitious entrepreneurs, fostering over 1,000 thriving businesses annually."
            className="font-body-lg text-body-lg text-on-surface-variant mb-6 border-l-2 border-primary pl-6"
            delay={400}
            stagger={20}
          />
        </div>
      </div>
    </section>
  );
}
