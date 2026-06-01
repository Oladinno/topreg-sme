"use client";

import { useEffect, useState } from "react";
import TextReveal from "@/components/TextReveal";

export default function ContactHero() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    function updateTime() {
      const now = new Date();
      const timeStr = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Africa/Lagos",
      });
      setCurrentTime(`${timeStr} WAT`);
    }
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-24 pb-12 px-4 md:px-margin-edge max-w-container-max mx-auto overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div className="md:col-span-8 flex flex-col justify-end">
          <span className="font-label-caps text-label-caps text-secondary mb-4 uppercase tracking-[0.2em] animate-fade-in">
            Contact Us
          </span>
          
          <TextReveal
            as="h1"
            text="Start Your Transformation."
            className="font-display-xl text-4xl sm:text-6xl lg:text-display-xl text-primary leading-tight max-w-3xl"
            delay={100}
            stagger={40}
          />
          
          <TextReveal
            as="p"
            text="Ready to bring your business from imagination into reality? Our team is here to guide you through legal structures, launch strategies, and sustainable growth."
            className="font-body-lg text-body-lg text-on-surface-variant mt-8 max-w-xl"
            delay={500}
            stagger={15}
          />
        </div>
        
        <div className="hidden md:flex md:col-span-4 justify-end items-start pt-12">
          <div className="border-l border-primary/10 pl-8 space-y-2 select-none cursor-none" data-cursor-text="LAGOS">
            <p className="font-label-caps text-label-caps text-cool-gray">
              TIMEZONE
            </p>
            <p className="font-body-md text-body-md text-primary">{currentTime}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
