"use client";

import Image from "next/image";
import TextReveal from "@/components/TextReveal";
import InteractiveCanvas from "@/components/InteractiveCanvas";

export default function ServicesHero() {
  return (
    <section className="asym-grid pt-24 pb-section-gap max-w-container-max mx-auto px-margin-edge">
      <div className="col-span-12 lg:col-span-9">
        <p className="font-label-caps text-label-caps text-secondary mb-4 animate-fade-in">
          DRIVING GROWTH SINCE 2024
        </p>
        
        <TextReveal
          as="h1"
          text="World-Class Solutions for SME Growth."
          className="font-display-xl text-display-xl text-primary leading-tight mb-8"
          delay={100}
          stagger={40}
        />

        <TextReveal
          as="p"
          text="“Driving Nigeria's SME growth, by fostering 1000 businesses and startups annually” through meticulous strategy and execution."
          className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl"
          delay={500}
          stagger={20}
        />
      </div>
      
      <div className="hidden lg:flex col-span-3 items-end justify-end">
        <InteractiveCanvas
          magneticStrength={0.15}
          warpStrength={15}
          scaleOnHover={1.05}
          cursorText="SYMBOL"
          className="w-full"
        >
          <div className="w-full h-64 bg-surface-container-high border border-black/10 flex items-center justify-center p-8 overflow-hidden cursor-none">
            <Image
              alt="TopReg Strategic Symbol"
              className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsyKiIq-Y7-6LqQfU6JF5q8mGMUEpB-9pDjjh7L97opOhJy7nqS5v_O9G6LJJHdfvJ_mHuww5GnPJ0O8HkhBDHD851hWS75duf-26ULMFr2CcBmR8TDEVOXkhGrtawfiL8N85ayJAOXaFEofusMujWYqm3i6CtytEqENQs1OXXqYIcK9UeyceiPGQ47RroL_HffV7LQIIPdmbSSYIJdOx_iUWY5toRGwZ_3eKrwdzti5LNaccujAnr4o8d9gzyADkSI4gKvfeSH0Q0"
              width={200}
              height={200}
            />
          </div>
        </InteractiveCanvas>
      </div>
    </section>
  );
}
