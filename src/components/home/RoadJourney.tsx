"use client";

import React, { useRef, useState, useEffect } from "react";

interface Checkpoint {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  desc: string;
  progressThreshold: number;
  align: "left" | "right";
  advisor?: {
    name: string;
    role: string;
    avatar: string;
  };
  envFloat: {
    title: string;
    badge: string;
    desc: string;
  };
}

const CHECKPOINTS: Checkpoint[] = [
  {
    id: "spark",
    step: "01",
    title: "The Idea Spark",
    subtitle: "Concept & Blueprint",
    desc: "Transform your business vision from imagination into a clear legal and operational launch plan.",
    progressThreshold: 0.12,
    align: "right",
    envFloat: {
      title: "Business Concept Approved",
      badge: "💡 Vision",
      desc: "Structure & Strategy Mapped",
    },
  },
  {
    id: "cac",
    step: "02",
    title: "CAC Legal Registration",
    subtitle: "Corporate Affairs Commission",
    desc: "Full company name reservation, incorporation filing, and official RC number issuance.",
    progressThreshold: 0.32,
    align: "left",
    advisor: {
      name: "Barrister Amaka",
      role: "Legal Compliance Lead",
      avatar: "👩‍⚖️",
    },
    envFloat: {
      title: "RC-192084 Certificate",
      badge: "📜 Official CAC",
      desc: "Company Registered & Legal",
    },
  },
  {
    id: "brand",
    step: "03",
    title: "Brand Identity Suite",
    subtitle: "Visual & Digital Assets",
    desc: "Crafting your premium logo, corporate style guide, domain name, and official email suite.",
    progressThreshold: 0.52,
    align: "right",
    envFloat: {
      title: "Brand Identity Package",
      badge: "🎨 Design",
      desc: "Logo & Style Suite Generated",
    },
  },
  {
    id: "structure",
    step: "04",
    title: "TIN & Corporate Banking",
    subtitle: "Tax & Financial Foundation",
    desc: "FIRS Tax Identification Number setup and corporate bank account activation.",
    progressThreshold: 0.72,
    align: "left",
    advisor: {
      name: "Tunde",
      role: "Tax & Banking Specialist",
      avatar: "👨‍💼",
    },
    envFloat: {
      title: "FIRS Corporate TIN",
      badge: "🏛️ Financials",
      desc: "Providus Account Active",
    },
  },
  {
    id: "launch",
    step: "05",
    title: "Market Launch",
    subtitle: "Go-To-Market Execution",
    desc: "Deploying your high-converting business website and accepting your first customer payments.",
    progressThreshold: 0.9,
    align: "right",
    envFloat: {
      title: "Website Live & Ready",
      badge: "🚀 Operations",
      desc: "Open for Customer Growth",
    },
  },
];

export default function RoadJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [carPos, setCarPos] = useState({ x: 200, y: 40, angle: 90 });
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !pathRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Check if journey section is in viewport
      const inView = rect.top < viewportHeight && rect.bottom > 0;
      setIsInView(inView);

      // Calculate progress (0 to 1) relative to viewport center
      const totalDist = rect.height - viewportHeight * 0.4;
      const currentDist = viewportHeight * 0.5 - rect.top;
      const progress = Math.max(0, Math.min(1, currentDist / totalDist));
      setScrollProgress(progress);

      const pathLength = pathRef.current.getTotalLength();
      const currentLength = progress * pathLength;
      const point = pathRef.current.getPointAtLength(currentLength);

      const delta = 4;
      const aheadLength = Math.min(pathLength, currentLength + delta);
      const aheadPoint = pathRef.current.getPointAtLength(aheadLength);

      const angle = Math.atan2(aheadPoint.y - point.y, aheadPoint.x - point.x) * (180 / Math.PI);
      setCarPos({ x: point.x, y: point.y, angle });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const jumpToMilestone = (idx: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const milestonePercentage = CHECKPOINTS[idx].progressThreshold;
    const targetScrollY = window.scrollY + rect.top + rect.height * milestonePercentage - window.innerHeight * 0.3;
    window.scrollTo({ top: targetScrollY, behavior: "smooth" });
  };

  return (
    <section className="relative bg-deep-black text-off-white py-24 overflow-hidden border-t border-white/10">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(183,21,19,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-container-max mx-auto px-4 md:px-margin-edge relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="inline-block font-label-caps text-label-caps text-secondary bg-off-white px-3.5 py-1 mb-4 font-bold tracking-widest uppercase">
            THE LAUNCH JOURNEY
          </span>
          <h2 className="font-display-xl text-3xl sm:text-5xl font-extrabold text-off-white tracking-tight mb-4">
            From Idea to Operating Empire.
          </h2>
          <p className="font-body-lg text-body-lg text-off-white/70">
            Watch your business transform as TopReg powers through each critical milestone.
          </p>
        </div>

        {/* Desktop Interactive Road Journey (Hidden on Mobile) */}
        <div ref={containerRef} className="hidden md:block relative w-full max-w-5xl mx-auto min-h-[1600px]">
          {/* SVG Road Path Overlay */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
            <svg className="w-full h-full" viewBox="0 0 400 1600" preserveAspectRatio="none">
              <defs>
                <linearGradient id="roadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(255,255,241,0.15)" />
                  <stop offset="50%" stopColor="#b71513" />
                  <stop offset="100%" stopColor="rgba(52,211,153,0.8)" />
                </linearGradient>
                <radialGradient id="headlightGlow" cx="0%" cy="50%" r="100%">
                  <stop offset="0%" stopColor="#FFFFF1" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#FFFFF1" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Road Track Background Line */}
              <path
                d="M 200,40 C 200,180 340,180 340,320 C 340,460 60,460 60,640 C 60,820 340,820 340,960 C 340,1100 60,1100 60,1280 C 60,1420 200,1420 200,1560"
                fill="none"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="12"
                strokeLinecap="round"
              />

              {/* Road Dash Line */}
              <path
                d="M 200,40 C 200,180 340,180 340,320 C 340,460 60,460 60,640 C 60,820 340,820 340,960 C 340,1100 60,1100 60,1280 C 60,1420 200,1420 200,1560"
                fill="none"
                stroke="url(#roadGradient)"
                strokeWidth="4"
                strokeDasharray="8 8"
                strokeLinecap="round"
              />

              {/* Interactive Path Reference for Math */}
              <path
                ref={pathRef}
                d="M 200,40 C 200,180 340,180 340,320 C 340,460 60,460 60,640 C 60,820 340,820 340,960 C 340,1100 60,1100 60,1280 C 60,1420 200,1420 200,1560"
                fill="none"
                stroke="transparent"
              />

              {/* Dynamic Vehicle Driving on Path */}
              <g transform={`translate(${carPos.x}, ${carPos.y}) rotate(${carPos.angle})`}>
                {/* Vehicle Glow */}
                <circle cx="0" cy="0" r="24" fill="#b71513" opacity="0.4" filter="blur(8px)" />

                {/* Car Body */}
                <path
                  d="M-14,-7 C-14,-7 -4,-9 4,-9 C12,-9 16,-5 18,-3 L22,0 C23,1 24,3 24,5 V7 C24,9 23,10 21,10 H-12 C-14,10 -16,8 -16,6 V-5 C-16,-6 -15,-7 -14,-7 Z"
                  fill="#b71513"
                  stroke="#FFFFF1"
                  strokeWidth="1.5"
                />
                {/* Windshield */}
                <path d="M2,-7 L10,-7 L14,-3 L2,-3 Z" fill="#0A0A0C" opacity="0.9" />
                {/* Headlight beam */}
                <path d="M22,-2 L40,-12 L40,8 L22,2 Z" fill="url(#headlightGlow)" opacity="0.7" />
                {/* Wheels */}
                <circle cx="-8" cy="8" r="3" fill="#0A0A0C" stroke="#FFFFF1" strokeWidth="1" />
                <circle cx="12" cy="8" r="3" fill="#0A0A0C" stroke="#FFFFF1" strokeWidth="1" />
              </g>
            </svg>
          </div>

          {/* Checkpoints & Environmental Elements Grid */}
          <div className="relative z-20 space-y-48 pt-12">
            {CHECKPOINTS.map((cp) => {
              const isCompleted = scrollProgress >= cp.progressThreshold;

              return (
                <div key={cp.id} className="grid grid-cols-12 items-center gap-8 relative min-h-[160px]">
                  {/* Left Column (Content or Env Float) */}
                  <div className="col-span-5 text-right">
                    {cp.align === "left" ? (
                      /* Main Content Left */
                      <div
                        className={`transition-all duration-700 ${
                          isCompleted ? "opacity-100 translate-x-0" : "opacity-40 -translate-x-6"
                        }`}
                      >
                        {/* Advisor Touchpoint Badge */}
                        {cp.advisor && (
                          <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/10 rounded-full px-3 py-1 mb-2">
                            <span className="text-xs">{cp.advisor.avatar}</span>
                            <span className="text-[10px] font-mono text-off-white/80">
                              {cp.advisor.name} · <span className="text-secondary">{cp.advisor.role}</span>
                            </span>
                          </div>
                        )}

                        <span className="text-xs font-mono font-bold text-secondary tracking-widest uppercase mb-1 block">
                          MILESTONE {cp.step}
                        </span>
                        <h3 className="text-2xl font-black text-off-white mb-2">{cp.title}</h3>
                        <p className="text-xs font-mono text-off-white/60 mb-2">{cp.subtitle}</p>
                        <p className="text-sm text-off-white/80 leading-relaxed max-w-sm ml-auto">{cp.desc}</p>
                      </div>
                    ) : (
                      /* Environmental Float Left */
                      <div
                        className={`transition-all duration-700 ease-out transform ${
                          isCompleted
                            ? "opacity-100 translate-y-0 scale-100"
                            : "opacity-0 translate-y-8 scale-90"
                        }`}
                      >
                        <div className="inline-block bg-deep-black/90 backdrop-blur-xl border border-white/15 rounded-2xl p-4 shadow-[0_15px_35px_rgba(0,0,0,0.6)] text-left">
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-secondary/20 text-secondary border border-secondary/30">
                              {cp.envFloat.badge}
                            </span>
                            <span className="text-[10px] font-mono text-emerald-400 font-bold">✓ UNLOCKED</span>
                          </div>
                          <p className="text-xs font-extrabold text-off-white">{cp.envFloat.title}</p>
                          <p className="text-[11px] text-off-white/60 mt-0.5">{cp.envFloat.desc}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Center Column (Checkpoint Indicator Ring) */}
                  <div className="col-span-2 flex justify-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                        isCompleted
                          ? "bg-secondary border-secondary text-off-white shadow-[0_0_20px_rgba(183,21,19,0.7)] scale-110"
                          : "bg-deep-black border-white/20 text-off-white/40"
                      }`}
                    >
                      {isCompleted ? (
                        <span className="text-base font-black animate-bounce">✓</span>
                      ) : (
                        <span className="text-xs font-mono font-bold">{cp.step}</span>
                      )}
                    </div>
                  </div>

                  {/* Right Column (Content or Env Float) */}
                  <div className="col-span-5 text-left">
                    {cp.align === "right" ? (
                      /* Main Content Right */
                      <div
                        className={`transition-all duration-700 ${
                          isCompleted ? "opacity-100 translate-x-0" : "opacity-40 translate-x-6"
                        }`}
                      >
                        {/* Advisor Touchpoint Badge */}
                        {cp.advisor && (
                          <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/10 rounded-full px-3 py-1 mb-2">
                            <span className="text-xs">{cp.advisor.avatar}</span>
                            <span className="text-[10px] font-mono text-off-white/80">
                              {cp.advisor.name} · <span className="text-secondary">{cp.advisor.role}</span>
                            </span>
                          </div>
                        )}

                        <span className="text-xs font-mono font-bold text-secondary tracking-widest uppercase mb-1 block">
                          MILESTONE {cp.step}
                        </span>
                        <h3 className="text-2xl font-black text-off-white mb-2">{cp.title}</h3>
                        <p className="text-xs font-mono text-off-white/60 mb-2">{cp.subtitle}</p>
                        <p className="text-sm text-off-white/80 leading-relaxed max-w-sm">{cp.desc}</p>
                      </div>
                    ) : (
                      /* Environmental Float Right */
                      <div
                        className={`transition-all duration-700 ease-out transform ${
                          isCompleted
                            ? "opacity-100 translate-y-0 scale-100"
                            : "opacity-0 translate-y-8 scale-90"
                        }`}
                      >
                        <div className="inline-block bg-deep-black/90 backdrop-blur-xl border border-white/15 rounded-2xl p-4 shadow-[0_15px_35px_rgba(0,0,0,0.6)] text-left">
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-secondary/20 text-secondary border border-secondary/30">
                              {cp.envFloat.badge}
                            </span>
                            <span className="text-[10px] font-mono text-emerald-400 font-bold">✓ UNLOCKED</span>
                          </div>
                          <p className="text-xs font-extrabold text-off-white">{cp.envFloat.title}</p>
                          <p className="text-[11px] text-off-white/60 mt-0.5">{cp.envFloat.desc}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Fallback Timeline (Shown on Mobile Viewports) */}
        <div className="block md:hidden relative pl-6 border-l-2 border-white/10 space-y-12">
          {CHECKPOINTS.map((cp) => {
            const isCompleted = scrollProgress >= cp.progressThreshold;

            return (
              <div key={cp.id} className="relative">
                {/* Node marker */}
                <div
                  className={`absolute -left-[31px] top-0 w-6 h-6 rounded-full flex items-center justify-center border-2 text-[10px] font-bold transition-all ${
                    isCompleted
                      ? "bg-secondary border-secondary text-off-white shadow-[0_0_12px_rgba(183,21,19,0.8)]"
                      : "bg-deep-black border-white/20 text-off-white/40"
                  }`}
                >
                  {isCompleted ? "✓" : cp.step}
                </div>

                {/* Content */}
                <div>
                  {cp.advisor && (
                    <div className="inline-flex items-center gap-1.5 bg-white/5 px-2.5 py-0.5 rounded-full text-[9px] font-mono text-off-white/70 mb-1.5">
                      <span>{cp.advisor.avatar}</span>
                      <span>{cp.advisor.name}</span>
                    </div>
                  )}

                  <span className="text-[10px] font-mono font-bold text-secondary tracking-widest uppercase mb-1 block">
                    MILESTONE {cp.step}
                  </span>
                  <h3 className="text-xl font-bold text-off-white mb-1">{cp.title}</h3>
                  <p className="text-[11px] font-mono text-off-white/60 mb-2">{cp.subtitle}</p>
                  <p className="text-xs text-off-white/80 leading-relaxed mb-4">{cp.desc}</p>

                  {/* Environmental Badge Mobile */}
                  <div
                    className={`bg-white/[0.03] border border-white/10 rounded-xl p-3 transition-all ${
                      isCompleted ? "border-secondary/40 bg-secondary/10" : "opacity-60"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[9px] font-mono font-bold text-secondary">{cp.envFloat.badge}</span>
                      {isCompleted && <span className="text-[9px] font-mono text-emerald-400 font-bold">✓ UNLOCKED</span>}
                    </div>
                    <p className="text-xs font-bold text-off-white">{cp.envFloat.title}</p>
                    <p className="text-[10px] text-off-white/60 mt-0.5">{cp.envFloat.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating Wayfinding Journey HUD (Anchored Bottom-Left) */}
      <div
        className={`fixed bottom-6 left-6 z-40 transition-all duration-500 transform ${
          isInView ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-8 pointer-events-none"
        }`}
      >
        <div className="bg-deep-black/90 backdrop-blur-xl border border-white/20 rounded-2xl p-3.5 shadow-[0_20px_45px_rgba(0,0,0,0.8)] flex items-center gap-4 text-off-white">
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between gap-3 text-[10px] font-mono">
              <span className="text-secondary font-bold tracking-wider">ROADWAY HUD</span>
              <span className="text-off-white/70 font-bold">{Math.round(scrollProgress * 100)}%</span>
            </div>
            {/* Progress fill bar */}
            <div className="w-28 h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-secondary transition-all duration-200"
                style={{ width: `${scrollProgress * 100}%` }}
              />
            </div>
          </div>

          {/* Jump Dots to Milestones */}
          <div className="flex items-center gap-1.5 border-l border-white/15 pl-3">
            {CHECKPOINTS.map((cp, idx) => {
              const isActive = scrollProgress >= cp.progressThreshold;
              return (
                <button
                  key={cp.id}
                  onClick={() => jumpToMilestone(idx)}
                  className={`w-3 h-3 rounded-full transition-all flex items-center justify-center text-[8px] font-bold ${
                    isActive ? "bg-secondary text-off-white scale-110 shadow-[0_0_8px_rgba(183,21,19,0.8)]" : "bg-white/20 hover:bg-white/40 text-transparent"
                  }`}
                  title={`Jump to Milestone ${cp.step}: ${cp.title}`}
                >
                  {isActive ? "✓" : ""}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

