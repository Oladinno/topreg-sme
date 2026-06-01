"use client";

import Image from "next/image";
import SectionReveal from "@/components/SectionReveal";
import InteractiveCanvas from "@/components/InteractiveCanvas";
import TextReveal from "@/components/TextReveal";

export default function CaseStudyTwo() {
  return (
    <SectionReveal className="py-section-gap px-margin-edge max-w-container-max mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        <div className="md:col-span-5 order-2 md:order-1">
          <div className="mb-8">
            <div className="inline-block border border-primary text-primary px-3 py-1 font-label-caps text-[10px] mb-6 animate-fade-in">
              AGRICULTURE &amp; GROWTH
            </div>
            
            <TextReveal
              as="h3"
              text="Harvesting Global Standards"
              className="font-display-lg text-display-lg leading-tight mb-gutter"
              delay={100}
              stagger={40}
            />

            <TextReveal
              as="p"
              text="Expanding from a local farm to a multi-state exporter required more than just land. It required a rigorous legal framework and trademarking that TopReg delivered with surgical precision."
              className="font-body-lg text-body-lg text-on-surface-variant mb-12"
              delay={300}
              stagger={20}
            />
          </div>
          
          <div className="flex gap-4 items-center">
            {/* Magnetic PLAY/WATCH Button */}
            <div 
              className="w-24 h-24 bg-primary flex flex-col items-center justify-center text-off-white rounded-full hover:bg-secondary transition-all duration-300 cursor-none transform hover:scale-110 active:scale-95"
              data-cursor-text="PLAY"
            >
              <span className="font-label-caps text-[10px] select-none">WATCH</span>
              <span className="material-symbols-outlined select-none">play_arrow</span>
            </div>
            <p className="font-body-md text-on-surface-variant flex items-center italic">
              &ldquo;How we scaled 400% in 18 months&rdquo;
            </p>
          </div>
        </div>
        
        <div className="md:col-span-6 md:col-start-7 order-1 md:order-2 relative">
          <div className="absolute -bottom-10 -right-10 text-[120px] font-display-xl text-surface-variant opacity-50 z-0 select-none">
            02
          </div>
          <div className="relative z-10">
            <InteractiveCanvas
              magneticStrength={0.12}
              warpStrength={12}
              scaleOnHover={1.04}
              cursorText="FARM"
              className="w-full h-[500px] overflow-hidden"
            >
              <Image
                className="w-full h-full object-cover cursor-none"
                alt="Modern agricultural facility"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDabbTsXk_fd5HlQ2Ocz-D6ATgF6c1cP5p8r0gA9gr2pMNFTikMHZ3JZzoTXoM4Cb_A5UJbWp0lz5NPHf5VKKVmv0mCQcekbQPLHsNcty7SDqaiigGW6eyW1PaeiOtDHIQvEw4wZjLvY91RB-TWfytLAmb-8hj0tZYH7fPhdrFKr9TEd69GrRlMN0ZaEl47UMTApO0ZtTxeSIHzKxsY7Hr1NkimxXWnWQGKG1bkQh-V0VbcE7HNdO-el4FDrKg3HLnSzXw874k5jnOT"
                width={600}
                height={500}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </InteractiveCanvas>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
