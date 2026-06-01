"use client";

import TextReveal from "@/components/TextReveal";

export default function AuthorityBanner() {
  return (
    <section className="bg-surface-container py-16 md:py-32 px-4 md:px-margin-edge">
      <div className="max-w-container-max mx-auto flex flex-col lg:flex-row justify-between items-center gap-12 text-center lg:text-left">
        <TextReveal
          as="h2"
          text="Nigeria's Leading Authority in SME Structuring."
          className="font-display-lg text-3xl sm:text-5xl lg:text-display-lg max-w-2xl justify-center lg:justify-start"
          delay={100}
          stagger={30}
        />
        <div className="space-y-4 flex flex-col items-center lg:items-start select-none">
          <div 
            className="flex items-center gap-4 cursor-none w-fit"
            data-cursor-text="PARTNER"
          >
            <span
              className="material-symbols-outlined text-secondary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              verified
            </span>
            <span className="font-label-caps text-label-caps text-primary">
              CERTIFIED PARTNERS
            </span>
          </div>
          <div 
            className="flex items-center gap-4 cursor-none w-fit"
            data-cursor-text="GAVEL"
          >
            <span
              className="material-symbols-outlined text-secondary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              gavel
            </span>
            <span className="font-label-caps text-label-caps text-primary">
              LEGAL COMPLIANCE GUARANTEED
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
