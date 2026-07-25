"use client";

import React, { useState, useRef, useEffect } from "react";

const CATEGORIES = ["All", "Full Suite", "Legal", "Brand", "Launch"] as const;
type Category = (typeof CATEGORIES)[number];

interface PortfolioItem {
  id: string;
  business: string;
  industry: string;
  founder: string;
  tagline: string;
  outcome: string;
  services: string[];
  category: Category;
  accentColor: string;
  bgColor: string;
  icon: string;
  rcNumber?: string;
  timeline: string;
}

const PORTFOLIO: PortfolioItem[] = [
  {
    id: "lumina",
    business: "Lumina Skincare Ltd",
    industry: "Beauty & Personal Care",
    founder: "Chidinma Okonkwo",
    tagline: "Clean beauty. Proudly Nigerian.",
    outcome: "CAC incorporated, full brand identity delivered, and Providus corporate account opened in 4 business days.",
    services: ["CAC Registration", "Brand Identity", "Corporate Banking"],
    category: "Full Suite",
    accentColor: "#b71513",
    bgColor: "from-rose-950/80",
    icon: "✨",
    rcNumber: "RC-192084",
    timeline: "4 Days",
  },
  {
    id: "techcraft",
    business: "TechCraft Solutions Ltd",
    industry: "Software Development",
    founder: "Kelechi Eze",
    tagline: "Building Africa's digital infrastructure.",
    outcome: "CAC name reservation and full LTD incorporation completed. FIRS TIN linked to corporate bank within 5 days.",
    services: ["CAC Registration", "FIRS TIN", "Corporate Banking"],
    category: "Legal",
    accentColor: "#3B82F6",
    bgColor: "from-blue-950/80",
    icon: "⚙️",
    rcNumber: "RC-284571",
    timeline: "5 Days",
  },
  {
    id: "freshfarm",
    business: "FreshFarm Organics Ltd",
    industry: "Agriculture & Food",
    founder: "Tolu Adeyemi",
    tagline: "Farm-to-table, certified and legal.",
    outcome: "Full business structure designed from zero: CAC, NAFDAC-ready documentation, brand suite, and custom landing page.",
    services: ["CAC Registration", "Brand Identity", "Website Launch"],
    category: "Full Suite",
    accentColor: "#10B981",
    bgColor: "from-emerald-950/80",
    icon: "🌿",
    rcNumber: "RC-301249",
    timeline: "6 Days",
  },
  {
    id: "fashola",
    business: "Fashola Properties Ltd",
    industry: "Real Estate",
    founder: "Babatunde Fashola",
    tagline: "Luxury real estate, built on a legal foundation.",
    outcome: "Upgraded from Business Name to fully incorporated LTD company with corporate seal, TIN, and Zenith Bank account.",
    services: ["BN → LTD Upgrade", "FIRS TIN", "Corporate Banking"],
    category: "Legal",
    accentColor: "#8B5CF6",
    bgColor: "from-purple-950/80",
    icon: "🏛️",
    rcNumber: "RC-410882",
    timeline: "7 Days",
  },
  {
    id: "obiora",
    business: "Obiora Media Agency",
    industry: "Marketing & Media",
    founder: "Amara Obiora",
    tagline: "Nigerian stories told beautifully.",
    outcome: "Premium brand identity suite — logo, style guide, custom domain, and professional email — deployed in 3 days.",
    services: ["Brand Identity", "Domain & Email", "Logo Design"],
    category: "Brand",
    accentColor: "#F59E0B",
    bgColor: "from-amber-950/80",
    icon: "🎬",
    timeline: "3 Days",
  },
  {
    id: "uchenna",
    business: "Uchenna Legal Consults",
    industry: "Professional Services",
    founder: "Adaeze Uchenna",
    tagline: "Legal excellence, formalised.",
    outcome: "Full corporate identity and website deployed for a law consultancy. CAC and Law Firm compliance documentation handled end-to-end.",
    services: ["CAC Registration", "Brand Identity", "Website Launch"],
    category: "Full Suite",
    accentColor: "#EC4899",
    bgColor: "from-pink-950/80",
    icon: "⚖️",
    rcNumber: "RC-518734",
    timeline: "5 Days",
  },
];

function PortfolioCard({ item, visible }: { item: PortfolioItem; visible: boolean }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`transition-all duration-500 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className="relative w-full"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          height: "280px",
        }}
      >
        {/* FRONT FACE */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} to-deep-black border border-white/[0.08] rounded-2xl overflow-hidden`}
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Top accent line */}
          <div className="h-1 w-full" style={{ background: item.accentColor }} />

          <div className="p-6 h-full flex flex-col justify-between">
            {/* Icon + RC badge */}
            <div className="flex items-start justify-between">
              <span className="text-3xl">{item.icon}</span>
              {item.rcNumber && (
                <span className="text-[9px] font-mono font-bold text-off-white/50 bg-white/5 px-2 py-1 rounded">
                  {item.rcNumber}
                </span>
              )}
            </div>

            <div>
              <p className="text-[10px] font-mono font-bold uppercase tracking-widest mb-1" style={{ color: item.accentColor }}>
                {item.industry}
              </p>
              <h3 className="text-xl font-black text-off-white mb-1">{item.business}</h3>
              <p className="text-xs text-off-white/60 italic mb-4">"{item.tagline}"</p>

              {/* Service tags */}
              <div className="flex flex-wrap gap-1.5">
                {item.services.map((s) => (
                  <span
                    key={s}
                    className="text-[9px] font-mono font-bold px-2 py-0.5 rounded border text-off-white/70 border-white/10 bg-white/[0.03]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Hover hint */}
            <p className="text-[10px] text-off-white/30 font-mono mt-2">Hover to see outcome →</p>
          </div>
        </div>

        {/* BACK FACE — Outcome */}
        <div
          className="absolute inset-0 bg-deep-black border rounded-2xl overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            borderColor: item.accentColor + "55",
          }}
        >
          {/* Top accent line */}
          <div className="h-1 w-full" style={{ background: item.accentColor }} />

          <div className="p-6 h-full flex flex-col justify-between">
            <div>
              <p className="text-[10px] font-mono font-bold uppercase tracking-widest mb-3" style={{ color: item.accentColor }}>
                ✓ OUTCOME
              </p>
              <p className="text-sm text-off-white/90 leading-relaxed mb-5">
                {item.outcome}
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-mono border-t border-white/10 pt-3">
                <span className="text-off-white/50">Founder</span>
                <span className="text-off-white font-bold">{item.founder}</span>
              </div>
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-off-white/50">Timeline</span>
                <span className="font-bold" style={{ color: item.accentColor }}>{item.timeline}</span>
              </div>
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-off-white/50">Package</span>
                <span className="text-off-white font-bold">{item.category}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioSection() {
  const [active, setActive] = useState<Category>("All");
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const filtered = active === "All"
    ? PORTFOLIO
    : PORTFOLIO.filter((p) => p.category === active);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-deep-black text-off-white py-24 border-t border-white/10 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(183,21,19,0.07)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-container-max mx-auto px-4 md:px-margin-edge relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block font-label-caps text-label-caps text-secondary bg-off-white px-3.5 py-1 mb-4 font-bold tracking-widest uppercase">
            SUCCESS STORIES
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-off-white tracking-tight mb-4">
            Businesses We've Brought To Life.
          </h2>
          <p className="text-off-white/70 text-base max-w-xl mx-auto">
            Every business below started exactly where you are. Browse real outcomes from founders across Nigeria.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold border transition-all duration-300 ${
                active === cat
                  ? "bg-secondary border-secondary text-off-white shadow-[0_0_14px_rgba(183,21,19,0.5)]"
                  : "border-white/15 text-off-white/60 hover:border-white/30 hover:text-off-white bg-white/[0.02]"
              }`}
            >
              {cat}
              {cat !== "All" && (
                <span className="ml-1.5 opacity-60">
                  ({PORTFOLIO.filter((p) => p.category === cat).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, i) => (
            <PortfolioCard
              key={item.id}
              item={item}
              visible={visible}
            />
          ))}
        </div>

        {/* Pull Quote */}
        <div className="mt-20 border-l-4 border-secondary pl-8 max-w-2xl mx-auto">
          <p className="text-2xl font-extrabold text-off-white/90 italic leading-snug">
            "Every business below started exactly where you are. The only difference? They took the first step."
          </p>
          <p className="text-xs font-mono text-secondary mt-3 font-bold tracking-widest uppercase">
            — TopReg SME Team
          </p>
        </div>
      </div>
    </section>
  );
}
