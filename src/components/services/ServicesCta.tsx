import SectionReveal from "@/components/SectionReveal";

export default function ServicesCta() {
  return (
    <SectionReveal className="asym-grid pb-section-gap max-w-container-max mx-auto px-margin-edge">
      <div className="col-span-12 lg:col-span-10 lg:col-start-2 text-center py-24 bg-primary text-off-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <h2 className="font-display-lg text-display-lg mb-12 relative z-10">
          Scale your vision into a{" "}
          <span className="text-secondary underline decoration-4 underline-offset-8">
            Legacy
          </span>
          .
        </h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center relative z-10">
          <button className="bg-off-white text-primary px-12 py-5 font-headline-lg text-body-lg hover:bg-secondary hover:text-off-white transition-all active:scale-95">
            Consult with our Experts
          </button>
          <a
            className="font-label-caps text-label-caps border-b border-off-white pb-1 hover:text-secondary hover:border-secondary transition-all"
            href="mailto:hello@topregsme.com.ng"
          >
            BOOK A WALKTHROUGH
          </a>
        </div>
      </div>
    </SectionReveal>
  );
}
