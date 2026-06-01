"use client";

import InteractiveCanvas from "@/components/InteractiveCanvas";
import TextReveal from "@/components/TextReveal";

const services = [
  {
    num: "01",
    title: "Legal & Compliance",
    description:
      "Incorporation, IP protection, and structural legality to safeguard your empire.",
    cursorText: "LEGAL",
  },
  {
    num: "02",
    title: "Business Systems",
    description:
      "Automating the mundane. We build the architecture that lets you scale without friction.",
    cursorText: "SYSTEMS",
  },
  {
    num: "03",
    title: "Growth Strategy",
    description:
      "Aggressive scaling tactics rooted in data and psychological market positioning.",
    cursorText: "GROWTH",
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-surface-container py-16 md:py-24 lg:py-section-gap px-4 md:px-margin-edge">
      <div className="max-w-container-max mx-auto">
        <div className="flex justify-between items-end mb-24">
          <div>
            <span className="font-label-caps text-label-caps text-secondary block mb-2">
              CORE PILLARS
            </span>
            <TextReveal
              as="h2"
              text="Strategic Excellence."
              className="font-display-lg text-3xl sm:text-5xl lg:text-display-lg text-primary tracking-tighter"
              delay={100}
              stagger={40}
            />
          </div>
          <div className="hidden md:block max-w-sm text-right">
            <p className="font-body-md text-on-surface-variant">
              A modular approach to scaling, designed to integrate seamlessly
              into your current operations.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {services.map((service) => (
            <InteractiveCanvas
              key={service.num}
              magneticStrength={0.08}
              warpStrength={8}
              scaleOnHover={1.03}
              cursorText={service.cursorText}
              className="h-full"
            >
              <div className="bg-surface-container-lowest p-12 border-t-4 border-primary group hover:bg-deep-black transition-colors duration-500 h-full flex flex-col justify-between cursor-none">
                <div>
                  <span className="font-display-lg text-headline-lg text-primary/10 group-hover:text-off-white/10 transition-colors">
                    {service.num}
                  </span>
                  <h3 className="font-headline-lg text-headline-lg text-primary group-hover:text-off-white mt-4 mb-6 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-on-surface-variant group-hover:text-cool-gray mb-8 transition-colors">
                    {service.description}
                  </p>
                </div>
                <a
                  className="font-label-caps text-label-caps text-primary group-hover:text-secondary flex items-center transition-colors mt-auto"
                  href="#"
                >
                  LEARN MORE{" "}
                  <span className="material-symbols-outlined ml-2">east</span>
                </a>
              </div>
            </InteractiveCanvas>
          ))}
        </div>
      </div>
    </section>
  );
}
