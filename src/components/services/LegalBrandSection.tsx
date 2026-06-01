"use client";

import Image from "next/image";
import SectionReveal from "@/components/SectionReveal";
import InteractiveCanvas from "@/components/InteractiveCanvas";
import TextReveal from "@/components/TextReveal";

export default function LegalBrandSection() {
  return (
    <SectionReveal className="asym-grid mb-16 md:mb-24 lg:mb-section-gap max-w-container-max mx-auto px-4 md:px-margin-edge">
      {/* Wrapped Image in InteractiveCanvas */}
      <InteractiveCanvas
        magneticStrength={0.1}
        warpStrength={10}
        scaleOnHover={1.03}
        cursorText="LAW"
        className="col-span-12 lg:col-span-5 relative h-[350px] sm:h-[450px] lg:h-[600px] overflow-hidden"
      >
        <Image
          alt="Corporate Legal and Compliance"
          className="object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700 cursor-none"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXB7EMWLc-uYB1CCJzM_XxlCcKcSUZQ-o4F1ZfauSf8Ja3IshAbm7aUgf6XNv3ntBp63YgUUfTO54YCa6qSO0RjOMTKadP_cVdxAfrqSN9L90gaKBlxWX86AhQsAcuKXJCeFxneUmEb8DzG1SD-QUHVUR1aZMcE3FzPbqZarBHB7kgj5XTsgTGZ2MDob5euYYrNkOxt2xjFXapLFpZbHxKNfvu8iZ4qsUj4gEs6l6xbOPh1rjiS8IWW75Rt3eDf9H9mxgKB4Kcyf0m"
          fill
          sizes="(max-width: 1024px) 100vw, 40vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-black/60 to-transparent flex items-end p-12 pointer-events-none">
          <span className="font-display-lg text-off-white opacity-20 absolute top-4 left-4">
            01
          </span>
        </div>
      </InteractiveCanvas>

      <div className="col-span-12 lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
        <div className="service-card-border pt-8 mb-16">
          <span className="inline-block border border-black px-3 py-1 font-label-caps text-label-caps mb-6 animate-fade-in">
            LEGAL
          </span>
          <TextReveal
            as="h2"
            text="Incorporation & Compliance"
            className="font-headline-lg text-headline-lg mb-6"
            delay={100}
            stagger={40}
          />
          <TextReveal
            as="p"
            text="Navigating the regulatory landscape of Nigeria shouldn't be your burden. We handle registration, tax IDs, and ongoing compliance so you focus on building."
            className="font-body-md text-body-md text-on-surface-variant mb-8"
            delay={300}
            stagger={15}
          />
          <ul className="space-y-4">
            <li 
              className="flex items-center gap-3 font-label-caps text-label-caps text-primary hover:translate-x-2 transition-transform cursor-none w-fit"
              data-cursor-text="GAVEL"
            >
              <span className="material-symbols-outlined text-secondary">
                gavel
              </span>{" "}
              Incorporation Documents
            </li>
            <li 
              className="flex items-center gap-3 font-label-caps text-label-caps text-primary hover:translate-x-2 transition-transform cursor-none w-fit"
              data-cursor-text="CHECK"
            >
              <span className="material-symbols-outlined text-secondary">
                verified_user
              </span>{" "}
              Annual Returns &amp; Filings
            </li>
          </ul>
        </div>
        
        <div className="service-card-border pt-8">
          <span className="inline-block border border-black px-3 py-1 font-label-caps text-label-caps mb-6 animate-fade-in">
            SET UP
          </span>
          <TextReveal
            as="h2"
            text="Branding & Web Design"
            className="font-headline-lg text-headline-lg mb-6"
            delay={100}
            stagger={40}
          />
          <TextReveal
            as="p"
            text="Identity is everything. We build digital-first brands and high-performance websites that convert casual visitors into loyal customers."
            className="font-body-md text-body-md text-on-surface-variant mb-8"
            delay={300}
            stagger={15}
          />
          <a
            className="font-label-caps text-label-caps text-primary underline underline-offset-8 flex items-center gap-2 group cursor-none w-fit"
            href="#"
            data-cursor-text="WORK"
          >
            VIEW PORTFOLIO{" "}
            <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
              trending_flat
            </span>
          </a>
        </div>
      </div>
    </SectionReveal>
  );
}
