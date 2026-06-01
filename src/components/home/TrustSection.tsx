"use client";

import Image from "next/image";
import SectionReveal from "@/components/SectionReveal";
import InteractiveCanvas from "@/components/InteractiveCanvas";
import TextReveal from "@/components/TextReveal";

export default function TrustSection() {
  return (
    <SectionReveal className="py-16 md:py-24 lg:py-section-gap px-4 md:px-margin-edge bg-deep-black text-off-white">
      <div className="max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-section-gap items-center">
          <div>
            <TextReveal
              as="h2"
              text="Join Our Community Of Entrepreneurs, Whose Businesses We've Brought To Life."
              className="font-display-lg text-3xl sm:text-5xl lg:text-display-lg mb-12 tracking-tighter"
              delay={100}
              stagger={30}
            />
            <div className="space-y-12">
              <div 
                className="flex items-start gap-6 border-b border-off-white/10 pb-8 hover:translate-x-4 transition-transform duration-300 cursor-none"
                data-cursor-text="TRUST"
              >
                <span className="material-symbols-outlined text-secondary text-4xl">
                  verified
                </span>
                <div>
                  <h4 className="font-headline-lg text-body-lg font-bold mb-2">
                    Verified Success
                  </h4>
                  <p className="text-cool-gray">
                    Over 500+ successful incorporations and structural
                    transformations in the last year alone.
                  </p>
                </div>
              </div>
              <div 
                className="flex items-start gap-6 border-b border-off-white/10 pb-8 hover:translate-x-4 transition-transform duration-300 cursor-none"
                data-cursor-text="GROWTH"
              >
                <span className="material-symbols-outlined text-secondary text-4xl">
                  group
                </span>
                <div>
                  <h4 className="font-headline-lg text-body-lg font-bold mb-2">
                    Active Network
                  </h4>
                  <p className="text-cool-gray">
                    Exclusive access to a network of high-performing
                    entrepreneurs and industry legal experts.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
            
            {/* Wrap the image inside InteractiveCanvas so it tilts, bends and zooms dynamically */}
            <InteractiveCanvas
              magneticStrength={0.12}
              warpStrength={12}
              scaleOnHover={1.04}
              cursorText="VIEW"
              className="relative z-10 w-full shadow-2xl rounded-sm overflow-hidden"
            >
              <Image
                alt="Success Stories and Certifications"
                className="w-full grayscale hover:grayscale-0 transition-all duration-700 cursor-none"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLt0XHAbCb7JWAOeAiQujGTWliF6vGdXGQAmtCNhmXfGY4xt24N0dh0EGYBi9CKYCSTAzvurb7-tn1VwpWTHz2NcgEeFyeTdynDdhOzXBvbHsa33_ms34sQKtkf6HTdQTWLWm0eeiUFKT43zuGdzB7MIWRYpZwLeYrX5I31Vh50mP4dUG2_5YKJmQqDcSZTPGbamPIZ0jbIECnilhd9SQkl4p0YD70YZwh9REFNl5-vsXXRft81n4lPRLCzxdtmIhsLY8dSv7daABz"
                width={600}
                height={400}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </InteractiveCanvas>
            
            <div className="absolute -bottom-6 -right-6 bg-secondary p-8 z-20 hidden md:block">
              <p className="font-display-lg text-display-lg leading-none m-0">
                98%
              </p>
              <p className="font-label-caps text-label-caps uppercase mt-2">
                Client Success Rate
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
