"use client";

import { useRef, useEffect, useState } from "react";
import TextReveal from "@/components/TextReveal";
import HeroDashboardMockup from "./HeroDashboardMockup";

interface HeroSectionProps {
  onOpenScorecard?: () => void;
}

export default function HeroSection({ onOpenScorecard }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };
    const el = sectionRef.current;
    el?.addEventListener("mousemove", handleMouseMove);
    return () => el?.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[95vh] min-h-[700px] w-full flex items-center overflow-x-hidden bg-deep-black"
    >
      {/* ─── Background atmosphere ─── */}

      {/* Dot grid texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Mouse-tracking primary blob (follows cursor) */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none transition-transform duration-700 ease-out"
        style={{
          width: "600px",
          height: "500px",
          top: `${mousePos.y * 100}%`,
          left: `${mousePos.x * 100}%`,
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(ellipse, rgba(183,21,19,0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Static ambient blob — left accent */}
      <div
        aria-hidden="true"
        className="absolute left-[-10%] top-[10%] w-[480px] h-[480px] pointer-events-none animate-pulse-slow"
        style={{
          background: "radial-gradient(ellipse, rgba(183,21,19,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
          animationDuration: "8s",
        }}
      />

      {/* Static ambient blob — right accent */}
      <div
        aria-hidden="true"
        className="absolute right-[-5%] bottom-[5%] w-[400px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(255,241,241,0.04) 0%, transparent 70%)",
          filter: "blur(80px)",
          animation: "pulse 10s ease-in-out infinite alternate",
        }}
      />

      {/* Horizontal separator glow at bottom */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(183,21,19,0.3) 40%, rgba(183,21,19,0.3) 60%, transparent 100%)",
        }}
      />

      {/* ─── Page content ─── */}
      <div className="relative z-10 w-full max-w-container-max mx-auto px-4 md:px-margin-edge py-16 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Text Content */}
          <div className="w-full lg:w-1/2 shrink-0">
            <span className="inline-block font-label-caps text-label-caps text-secondary bg-off-white px-3 py-1 mb-8 animate-fade-in">
              HEY ENTREPRENEURS!
            </span>

            <TextReveal
              as="h1"
              text="Bringing Your Business From Idea & Imagination, Into Reality."
              className="font-display-xl text-4xl sm:text-6xl lg:text-display-xl text-off-white mb-8 tracking-tighter"
              delay={100}
              stagger={50}
            />

            <TextReveal
              as="p"
              text="While guiding you by the hand through LEGAL — LAUNCH — BRAND & STRUCTURE. We don't just advise; we architect your growth."
              className="font-body-lg text-body-lg text-off-white/80 max-w-2xl mb-12 border-l-2 border-secondary pl-6"
              delay={600}
              stagger={30}
            />

            <div className="flex flex-col sm:flex-row gap-gutter">
              <button
                className="bg-off-white text-primary px-10 py-5 font-headline-lg text-body-lg font-bold hover:bg-secondary hover:text-off-white transition-all duration-300 flex items-center group cursor-none"
                data-cursor-text="LAUNCH"
              >
                Launch My Business
                <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
              <button
                className="border-2 border-off-white text-off-white px-10 py-5 font-headline-lg text-body-lg font-bold hover:bg-off-white hover:text-primary transition-all duration-300 cursor-none"
                data-cursor-text="GROW"
              >
                Grow My Business
              </button>
            </div>

            {/* Interactive Scorecard Trigger */}
            <p className="mt-6 text-sm text-off-white/70">
              Not ready to launch?{" "}
              <button
                onClick={onOpenScorecard}
                className="font-bold text-secondary hover:underline cursor-pointer"
              >
                Take the free 60-second Business Readiness Scorecard →
              </button>
            </p>
          </div>

          {/* Right: Dashboard Mockup */}
          <div className="w-full lg:w-1/2 shrink-0 overflow-visible">
            <HeroDashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

