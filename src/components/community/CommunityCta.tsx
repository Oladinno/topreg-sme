import SectionReveal from "@/components/SectionReveal";

export default function CommunityCta() {
  return (
    <SectionReveal className="bg-deep-black text-off-white py-section-gap px-margin-edge text-center overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="grid grid-cols-12 h-full w-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-off-white h-full" />
          ))}
        </div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="font-display-xl text-display-xl-mobile md:text-display-xl mb-gutter">
          Ready to <span className="text-secondary italic">Begin?</span>
        </h2>
        <p className="font-body-lg text-body-lg mb-12 text-cool-gray">
          Join the ranks of Nigeria&apos;s most successful SMEs. We turn your
          legal complexities into competitive advantages.
        </p>
        <div className="flex flex-col md:flex-row gap-gutter justify-center items-center">
          <button className="bg-off-white text-primary px-12 py-5 font-headline-lg font-extrabold uppercase tracking-tight hover:bg-secondary hover:text-white transition-all transform active:scale-95">
            Start Incorporation
          </button>
          <button className="border-2 border-off-white text-off-white px-12 py-5 font-headline-lg font-extrabold uppercase tracking-tight hover:bg-off-white hover:text-primary transition-all">
            Talk to a Strategist
          </button>
        </div>
      </div>
    </SectionReveal>
  );
}
