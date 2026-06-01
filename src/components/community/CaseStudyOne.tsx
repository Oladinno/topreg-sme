"use client";

import Image from "next/image";
import SectionReveal from "@/components/SectionReveal";
import InteractiveCanvas from "@/components/InteractiveCanvas";
import TextReveal from "@/components/TextReveal";

export default function CaseStudyOne() {
  return (
    <SectionReveal className="py-section-gap px-margin-edge max-w-container-max mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
        <div className="md:col-span-5 relative">
          <div className="absolute -top-10 -left-10 text-[120px] font-display-xl text-surface-variant opacity-50 z-0 select-none">
            01
          </div>
          <div className="relative z-10 border border-primary p-2">
            <InteractiveCanvas
              magneticStrength={0.1}
              warpStrength={10}
              scaleOnHover={1.03}
              cursorText="FOUNDER"
              className="w-full h-[700px] overflow-hidden"
            >
              <Image
                className="w-full h-full object-cover grayscale transition-all duration-500 cursor-none"
                alt="Female tech founder portrait"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRm4GQa9GwUyydMz0zT6twbUH0DmtJDx2ie-rtraasmGNDLwPJol-jvX6HOPmw0JjBcJ7T7alOxE_gbOQcD-R9YMvpDAvXu5HVPrWIcsaRJ7DUtoWYysj7m28aNB56NmMvUF-_EeZf4IQOHOAEVMOprb4Gltc_u8rZRACdDoc9YU2-320X7UDIQ3VcSIYhYdvaYBQ4sm8vDINldOy48r-RQYITmkNHZysQpCz2B6d2qsURQA6_xqU7T2jXESNvqKD9VYtcVzGKs650"
                width={600}
                height={700}
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </InteractiveCanvas>
          </div>
        </div>
        <div className="md:col-span-6 md:col-start-7 pt-12">
          <div className="mb-12">
            <div className="inline-block bg-primary text-off-white px-3 py-1 font-label-caps text-[10px] mb-6 animate-fade-in">
              TECH INCORPORATION
            </div>
            
            <TextReveal
              as="h3"
              text="The Silicon Lagoon Initiative"
              className="font-display-lg text-display-lg leading-tight mb-gutter"
              delay={100}
              stagger={40}
            />

            <blockquote className="font-headline-lg text-headline-lg italic mb-12 relative pl-10">
              <span className="text-secondary text-6xl absolute left-0 -top-6 select-none">
                &ldquo;
              </span>
              <TextReveal
                as="span"
                text="TopReg didn't just register our company; they legitimized our vision in a way that made investors take us seriously from day one."
                className="italic"
                delay={300}
                stagger={20}
              />
            </blockquote>
          </div>
          <div className="grid grid-cols-2 gap-gutter border-t border-primary/10 pt-12">
            <div>
              <p className="font-label-caps text-label-caps text-cool-gray mb-2">
                TIMELINE
              </p>
              <p className="font-body-lg text-body-lg font-bold">
                7 Working Days
              </p>
            </div>
            <div>
              <p className="font-label-caps text-label-caps text-cool-gray mb-2">
                OUTCOME
              </p>
              <p className="font-body-lg text-body-lg font-bold">
                Series A Ready
              </p>
            </div>
          </div>
          <a
            className="mt-12 inline-flex items-center gap-4 font-label-caps text-label-caps group border-b-2 border-transparent hover:border-secondary transition-all py-2 cursor-none"
            href="#"
            data-cursor-text="READ"
          >
            READ FULL CASE STUDY
            <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </SectionReveal>
  );
}
