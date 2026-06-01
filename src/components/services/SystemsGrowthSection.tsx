"use client";

import SectionReveal from "@/components/SectionReveal";
import InteractiveCanvas from "@/components/InteractiveCanvas";
import TextReveal from "@/components/TextReveal";

export default function SystemsGrowthSection() {
  return (
    <SectionReveal className="asym-grid mb-section-gap max-w-container-max mx-auto px-margin-edge">
      {/* Interactive Systems Block */}
      <InteractiveCanvas
        magneticStrength={0.06}
        warpStrength={6}
        scaleOnHover={1.02}
        cursorText="ENGINE"
        className="col-span-12 lg:col-span-4 h-full"
      >
        <div className="bg-deep-black text-off-white p-12 flex flex-col justify-between group h-full cursor-none">
          <div>
            <span className="material-symbols-outlined text-tertiary-fixed text-4xl mb-6 block animate-fade-in">
              settings_input_component
            </span>
            <TextReveal
              as="h3"
              text="Systems"
              className="font-headline-lg text-headline-lg mb-4 text-off-white"
              delay={100}
              stagger={40}
            />
            <TextReveal
              as="p"
              text="Operation & Structure optimization. We build the engine that runs your business while you sleep."
              className="text-cool-gray font-body-md"
              delay={200}
              stagger={20}
            />
          </div>
          <div className="mt-12">
            <span className="font-label-caps text-label-caps border-b border-tertiary-fixed pb-2 group-hover:text-tertiary-fixed transition-colors">
              03 - INFRASTRUCTURE
            </span>
          </div>
        </div>
      </InteractiveCanvas>

      <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {/* Interactive Growth Block */}
        <InteractiveCanvas
          magneticStrength={0.08}
          warpStrength={8}
          scaleOnHover={1.03}
          cursorText="STRATEGY"
          className="h-full"
        >
          <div className="bg-surface-container-low p-12 border-l-4 border-secondary flex flex-col justify-between h-full cursor-none">
            <div>
              <TextReveal
                as="h3"
                text="Growth"
                className="font-headline-lg text-headline-lg mb-4 text-primary"
                delay={100}
                stagger={40}
              />
              <TextReveal
                as="p"
                text="Marketing and Lead Generation. We don't just find leads; we find high-intent buyers for your SME."
                className="text-on-surface-variant font-body-md mb-8"
                delay={200}
                stagger={20}
              />
            </div>
            <button
              className="w-fit border-2 border-primary px-8 py-4 font-label-caps text-label-caps hover:bg-primary hover:text-off-white transition-all cursor-none mt-auto"
              data-cursor-text="SESSION"
            >
              STRATEGY SESSION
            </button>
          </div>
        </InteractiveCanvas>

        {/* Interactive Products Block */}
        <InteractiveCanvas
          magneticStrength={0.08}
          warpStrength={8}
          scaleOnHover={1.03}
          cursorText="ASSETS"
          className="h-full"
        >
          <div className="bg-surface-variant p-12 flex flex-col justify-between h-full cursor-none">
            <div>
              <TextReveal
                as="h3"
                text="Products"
                className="font-headline-lg text-headline-lg mb-4 text-primary"
                delay={100}
                stagger={40}
              />
              <TextReveal
                as="p"
                text="HR Forms, Employment Templates, and Operational Playbooks for the modern Nigerian SME."
                className="text-on-surface-variant font-body-md"
                delay={200}
                stagger={20}
              />
            </div>
            <div className="flex flex-wrap gap-2 mt-8 mt-auto">
              <span className="bg-primary text-off-white px-3 py-1 font-label-caps text-[10px]">
                TEMPLATES
              </span>
              <span className="bg-primary text-off-white px-3 py-1 font-label-caps text-[10px]">
                RESOURCES
              </span>
            </div>
          </div>
        </InteractiveCanvas>
      </div>
    </SectionReveal>
  );
}
