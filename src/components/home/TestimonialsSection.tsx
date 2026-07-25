"use client";

import React, { useRef, useEffect, useState } from "react";

const STATS = [
  { value: "500+", label: "Businesses Launched" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "3–5 Days", label: "CAC Processing" },
  { value: "₦0", label: "Hidden Fees, Ever" },
  { value: "12+", label: "Industries Served" },
  { value: "100%", label: "Legal Compliance Rate" },
];

const TESTIMONIALS = [
  {
    quote: "TopReg handled everything — name reservation, CAC incorporation, TIN, and even my Providus account — in 4 days. I was blown away. My business felt real the moment the RC number landed in my inbox.",
    name: "Chidinma Okonkwo",
    business: "Lumina Skincare Ltd",
    role: "Founder & CEO",
    service: "Full Suite",
    stars: 5,
    initials: "CO",
    color: "bg-secondary",
  },
  {
    quote: "I had been stalling my registration for 2 years because the process looked complicated. TopReg made it embarrassingly simple. Three calls, a few documents, and my company was legally incorporated.",
    name: "Emeka Nwosu",
    business: "Nwosu & Partners Advisory",
    role: "Managing Partner",
    service: "CAC + TIN",
    stars: 5,
    initials: "EN",
    color: "bg-emerald-700",
  },
  {
    quote: "The brand identity package they delivered was nothing short of premium. Logo, colour system, domain, professional email — it all came together and gave my consultancy a look that commands respect.",
    name: "Adaeze Uchenna",
    business: "Uchenna Legal Consults",
    role: "Principal Consultant",
    service: "Brand Suite",
    stars: 5,
    initials: "AU",
    color: "bg-blue-800",
  },
  {
    quote: "As a first-generation entrepreneur, I had zero knowledge of what CAC or FIRS even meant. TopReg not only did it for me, they explained every step. I felt informed, not just served.",
    name: "Tolu Adeyemi",
    business: "FreshFarm Organics Ltd",
    role: "Founder",
    service: "Full Suite",
    stars: 5,
    initials: "TA",
    color: "bg-amber-700",
  },
  {
    quote: "We needed our corporate account live before a major product launch. TopReg coordinated with Zenith Bank and had our account funded and operational in under a week. That saved our launch timeline.",
    name: "Kelechi Eze",
    business: "Eze Tech Solutions Ltd",
    role: "CTO & Co-Founder",
    service: "CAC + Banking",
    stars: 5,
    initials: "KE",
    color: "bg-purple-800",
  },
  {
    quote: "My FIRS TIN was stuck for weeks with another agent. TopReg took it over, resolved the issue, and cleared my tax profile in 48 hours. Their follow-through is extraordinary.",
    name: "Ngozi Ikechukwu",
    business: "Ikechukwu Fashion House",
    role: "Creative Director",
    service: "TIN Rescue",
    stars: 5,
    initials: "NI",
    color: "bg-rose-800",
  },
  {
    quote: "I chose TopReg after comparing 6 different registration services. Their pricing was transparent, the timeline was realistic, and they actually delivered ahead of schedule. No stories.",
    name: "Babatunde Fashola",
    business: "Fashola Properties Ltd",
    role: "Managing Director",
    service: "Full Suite",
    stars: 5,
    initials: "BF",
    color: "bg-teal-700",
  },
  {
    quote: "The dashboard they gave me to track my registration status in real-time was unexpected. I could see exactly where my CAC application was at any point. Total transparency.",
    name: "Amara Obiora",
    business: "Obiora Media Agency",
    role: "CEO",
    service: "CAC + Brand",
    stars: 5,
    initials: "AO",
    color: "bg-indigo-700",
  },
];

// Split testimonials into 3 columns for masonry layout
const COL_A = [TESTIMONIALS[0], TESTIMONIALS[3], TESTIMONIALS[6]];
const COL_B = [TESTIMONIALS[1], TESTIMONIALS[4], TESTIMONIALS[7]];
const COL_C = [TESTIMONIALS[2], TESTIMONIALS[5]];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#E8BD0E">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({
  t,
  delay = 0,
}: {
  t: (typeof TESTIMONIALS)[0];
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="bg-white/[0.03] border border-white/[0.08] hover:border-white/20 rounded-2xl p-6 transition-colors duration-300 group">
        {/* Stars */}
        <StarRating count={t.stars} />

        {/* Quote */}
        <p className="text-sm text-off-white/85 leading-relaxed mt-4 mb-5 italic">
          &ldquo;{t.quote}&rdquo;
        </p>

        {/* Footer */}
        <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
          <div
            className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-xs font-black text-white shrink-0`}
          >
            {t.initials}
          </div>
          <div className="min-w-0">
            <p className="text-xs font-bold text-off-white truncate">{t.name}</p>
            <p className="text-[10px] text-off-white/50 truncate">{t.business}</p>
          </div>
          <div className="ml-auto shrink-0">
            <span className="text-[9px] font-mono font-bold bg-secondary/20 text-secondary border border-secondary/30 px-2 py-0.5 rounded">
              {t.service}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="relative bg-deep-black text-off-white py-24 border-t border-white/10 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(183,21,19,0.05)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-container-max mx-auto px-4 md:px-margin-edge relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block font-label-caps text-label-caps text-secondary bg-off-white px-3.5 py-1 mb-4 font-bold tracking-widest uppercase">
            SOCIAL PROOF
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-off-white tracking-tight mb-4">
            Real Founders. Real Results.
          </h2>
          <p className="text-off-white/70 text-base max-w-xl mx-auto">
            Hear directly from the Nigerian entrepreneurs who trusted TopReg to bring their businesses to life.
          </p>
        </div>

        {/* Live Stats Strip */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-px bg-white/[0.06] rounded-2xl overflow-hidden mb-16 border border-white/[0.08]">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="bg-deep-black px-4 py-5 text-center hover:bg-white/[0.03] transition-colors"
            >
              <p className="text-xl md:text-2xl font-black text-secondary mb-1">{s.value}</p>
              <p className="text-[10px] font-mono text-off-white/50 uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Masonry Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Column A — slides up */}
          <div className="space-y-5">
            {COL_A.map((t, i) => (
              <TestimonialCard key={t.name} t={t} delay={i * 100} />
            ))}
          </div>

          {/* Column B — slides up with extra delay for stagger */}
          <div className="space-y-5">
            {COL_B.map((t, i) => (
              <TestimonialCard key={t.name} t={t} delay={150 + i * 100} />
            ))}
          </div>

          {/* Column C — slides up with most delay */}
          <div className="space-y-5 hidden lg:block">
            {COL_C.map((t, i) => (
              <TestimonialCard key={t.name} t={t} delay={300 + i * 100} />
            ))}
          </div>
        </div>

        {/* Bottom CTA nudge */}
        <div className="mt-16 text-center">
          <p className="text-off-white/50 text-sm">
            Join{" "}
            <span className="text-secondary font-bold">500+ businesses</span>{" "}
            already launched through TopReg.
          </p>
        </div>
      </div>
    </section>
  );
}
