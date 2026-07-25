"use client";

import React from "react";

const PARTNERS = [
  { name: "CAC Nigeria", badge: "📜 Corporate Affairs Commission", category: "Legal Entity", image: "/cac%20logo.jpg" },
  { name: "FIRS Tax", badge: "🏛️ Federal Inland Revenue", category: "TIN Setup", image: "/firs%20logo.png" },
];

function PartnerCard({ p }: { p: (typeof PARTNERS)[number] }) {
  return (
    <div className="inline-flex items-center gap-3 bg-white/[0.03] border border-white/[0.08] hover:border-secondary/40 rounded-xl px-5 py-3 transition-colors shrink-0">
      {p.image ? (
        <img
          src={p.image}
          alt={p.name}
          className="h-8 w-auto object-contain"
        />
      ) : (
        <span className="text-lg">{p.badge.split(" ")[0]}</span>
      )}
      <div className="flex flex-col border-l border-white/10 pl-2.5">
        <span className="text-sm font-bold text-off-white">{p.name}</span>
        <span className="text-[9px] font-mono text-off-white/40 uppercase">{p.category}</span>
      </div>
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <section className="bg-deep-black border-y border-white/10 py-8 overflow-hidden">
      <div className="max-w-container-max mx-auto px-4 mb-4 text-center">
        <p className="text-[10px] font-mono font-bold tracking-[0.2em] text-off-white/40 uppercase">
          Trusted Regulatory Partners & Financial Infrastructure
        </p>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-6 whitespace-nowrap animate-marquee hover:[animation-play-state:paused] py-2 shrink-0">
          {PARTNERS.concat(PARTNERS).map((p, idx) => (
            <PartnerCard key={idx} p={p} />
          ))}
        </div>

        {/* Duplicate track for seamless infinite scroll */}
        <div aria-hidden="true" className="flex gap-6 whitespace-nowrap animate-marquee hover:[animation-play-state:paused] py-2 shrink-0">
          {PARTNERS.concat(PARTNERS).map((p, idx) => (
            <PartnerCard key={`dup-${idx}`} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
