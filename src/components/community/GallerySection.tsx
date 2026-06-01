"use client";

import Image from "next/image";
import InteractiveCanvas from "@/components/InteractiveCanvas";
import TextReveal from "@/components/TextReveal";

export default function GallerySection() {
  return (
    <section className="bg-deep-black py-24 overflow-hidden">
      <div className="px-margin-edge max-w-container-max mx-auto text-center mb-16">
        <TextReveal
          as="h2"
          text="Join Our Community"
          className="font-display-lg text-off-white mb-4 justify-center"
          delay={100}
          stagger={40}
        />
        <div className="h-1 w-24 bg-secondary mx-auto animate-fade-in" style={{ animationDelay: "300ms" }} />
      </div>
      
      {/* Interactive Collage Image Wrapper */}
      <div className="px-4 max-w-container-max mx-auto">
        <InteractiveCanvas
          magneticStrength={0.05}
          warpStrength={5}
          scaleOnHover={1.02}
          cursorText="EXPLORE"
          className="w-full h-[600px] overflow-hidden"
        >
          <Image
            alt="Success Stories Collage"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 cursor-none"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLt0XHAbCb7JWAOeAiQujGTWliF6vGdXGQAmtCNhmXfGY4xt24N0dh0EGYBi9CKYCSTAzvurb7-tn1VwpWTHz2NcgEeFyeTdynDdhOzXBvbHsa33_ms34sQKtkf6HTdQTWLWm0eeiUFKT43zuGdzB7MIWRYpZwLeYrX5I31Vh50mP4dUG2_5YKJmQqDcSZTPGbamPIZ0jbIECnilhd9SQkl4p0YD70YZwh9REFNl5-vsXXRft81n4lPRLCzxdtmIhsLY8dSv7daABz"
            width={1200}
            height={600}
            sizes="100vw"
          />
        </InteractiveCanvas>
      </div>

      <div className="mt-12 px-margin-edge max-w-container-max mx-auto">
        <div className="flex flex-wrap justify-between items-end gap-gutter">
          <div className="flex gap-12">
            <div>
              <p className="text-off-white font-display-lg text-[48px] leading-none animate-fade-in">
                1k+
              </p>
              <p className="text-cool-gray font-label-caps text-label-caps">
                VIGNETTES ANNUALLY
              </p>
            </div>
            <div>
              <p className="text-off-white font-display-lg text-[48px] leading-none animate-fade-in" style={{ animationDelay: "200ms" }}>
                36
              </p>
              <p className="text-cool-gray font-label-caps text-label-caps">
                STATES EMPOWERED
              </p>
            </div>
          </div>
          <TextReveal
            as="p"
            text="Our gallery reflects the relentless spirit of the Nigerian entrepreneur. Each certificate represents a legal reality born from a visionary dream."
            className="text-cool-gray font-body-md max-w-md"
            delay={200}
            stagger={20}
          />
        </div>
      </div>
    </section>
  );
}
