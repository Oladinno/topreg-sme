"use client";

import React, { useRef, useState, useEffect } from "react";

export default function HeroDashboardMockup() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 6, y: -9 });
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Stagger slightly so it feels premium and aligned with title text reveals
    const timer = setTimeout(() => setMounted(true), 400);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    // Get mouse position relative to card center
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    // Calculate rotation (-10 to 10 deg)
    const rX = (mouseY / (height / 2)) * -10;
    const rY = (mouseX / (width / 2)) * 12;

    setRotate({ x: 6 + rX, y: -9 + rY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 6, y: -9 });
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full max-w-xl mx-auto py-8 lg:py-10 px-6 lg:px-8 overflow-visible transition-all duration-1000 ${
        mounted ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-16 scale-95"
      }`}
      style={{ perspective: "1500px" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glow backdrop behind mockup */}
      <div className="absolute -inset-4 bg-secondary/15 blur-[120px] rounded-full opacity-70 pointer-events-none" />

      {/* 3D Wrapper */}
      <div
        className="relative w-full transition-transform duration-300 ease-out"
        style={{
          transform: `rotateY(${rotate.y}deg) rotateX(${rotate.x}deg)`,
          transformStyle: "preserve-3d",
          transition: isHovered ? "transform 0.08s ease-out" : "transform 0.5s ease-out",
        }}
      >
        {/* Shadow card behind for 3D depth */}
        <div
          className="absolute inset-0 rounded-2xl bg-black/50 border border-white/[0.03] pointer-events-none"
          style={{
            transform: "translateZ(-40px) translate(16px, 12px)",
          }}
        />

        {/* Main Dashboard Card */}
        <div
          className="relative bg-deep-black/95 backdrop-blur-3xl border border-white/[0.12] rounded-2xl overflow-hidden shadow-[0_40px_90px_rgba(0,0,0,0.85)]"
          style={{ transform: "translateZ(0px)" }}
        >
          {/* Grid background effect */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, #ffffff 0.8px, transparent 0.8px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Browser Chrome Header */}
          <div className="flex items-center gap-1.5 px-5 h-12 bg-white/[0.03] border-b border-white/[0.08]">
            <span className="w-3 h-3 rounded-full bg-[#FF5F57] opacity-90" />
            <span className="w-3 h-3 rounded-full bg-[#FEBC2E] opacity-90" />
            <span className="w-3 h-3 rounded-full bg-[#28C840] opacity-90" />
            <span className="ml-4 text-xs font-mono font-medium text-off-white/70 bg-white/[0.05] px-3.5 py-1 rounded-md tracking-wider">
              topreg.com/dashboard/launch-hub
            </span>
          </div>

          {/* Main Dashboard Content */}
          <div className="p-6 md:p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-off-white font-headline-lg text-xl font-bold tracking-tight">Launch Dashboard</h3>
                <p className="text-off-white/70 text-[12px] font-mono mt-1 font-semibold">TopReg Business ID: TR-894-SME</p>
              </div>
              <div className="flex items-center gap-1.5 bg-emerald-500/15 border border-emerald-500/30 rounded-full px-3.5 py-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                <span className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase font-mono">Setup Live</span>
              </div>
            </div>

            {/* TopReg Step Flow Timeline */}
            <div className="mb-8 bg-white/[0.03] border border-white/[0.06] p-4.5 rounded-xl">
              <p className="text-[10px] font-mono font-bold text-off-white/70 uppercase tracking-widest mb-3.5">Launch Roadmap</p>
              <div className="flex items-center justify-between relative px-2.5">
                {/* SVG Timeline Path */}
                <div className="absolute top-[14px] left-8 right-8 h-[2px] -z-10">
                  <svg className="w-full h-full overflow-visible">
                    {/* Track Line */}
                    <line x1="0%" y1="1" x2="100%" y2="1" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeLinecap="round" />
                    {/* Progress Line */}
                    <line
                      x1="0%"
                      y1="1"
                      x2="66%"
                      y2="1"
                      stroke="#b71513"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="transition-all duration-[2000ms] ease-in-out"
                      style={{
                        strokeDasharray: "400",
                        strokeDashoffset: mounted ? "0" : "400",
                      }}
                    />
                  </svg>
                </div>

                {[
                  { label: "1. Legal", status: "completed", desc: "CAC Approved" },
                  { label: "2. Brand", status: "completed", desc: "Logo & Style" },
                  { label: "3. Structure", status: "completed", desc: "TIN & Bank" },
                  { label: "4. Launch", status: "active", desc: "Website Live" },
                ].map((step, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border transition-colors ${
                        step.status === "completed"
                          ? "bg-secondary border-secondary text-off-white shadow-[0_0_12px_rgba(183,21,19,0.5)]"
                          : "bg-deep-black border-white/30 text-off-white/80"
                      } ${step.status === "active" ? "ring-2 ring-secondary/60 animate-pulse border-secondary text-secondary font-black" : ""}`}
                    >
                      {step.status === "completed" ? "✓" : idx + 1}
                    </div>
                    <span className="text-[11px] font-bold text-off-white/90 mt-2">{step.label.split(" ")[1]}</span>
                    <span className="text-[9px] font-semibold text-off-white/70 mt-0.5">{step.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { label: "Launch Progress", value: "92%", status: "On Track", color: "text-secondary" },
                { label: "Legal Status", value: "CAC Certified", status: "RC-192084", color: "text-off-white" },
                { label: "TIN Verification", value: "Success", status: "Linked to FIRS", color: "text-off-white" },
                { label: "Business Account", value: "Active", status: "Providus Bank", color: "text-off-white" },
              ].map((m, idx) => (
                <div key={idx} className="bg-white/[0.03] border border-white/[0.06] p-4.5 rounded-xl hover:border-white/[0.12] transition-colors">
                  <p className="text-[9px] font-mono font-bold text-off-white/60 uppercase tracking-widest mb-1.5">{m.label}</p>
                  <p className={`text-2xl font-black tracking-tight ${m.color}`}>{m.value}</p>
                  <p className="text-[11px] font-medium text-off-white/85 mt-1">{m.status}</p>
                </div>
              ))}
            </div>

            {/* Tasks checklist progress */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <p className="text-[10px] font-mono font-bold text-off-white/70 uppercase tracking-widest">Completed Actions</p>
                <span className="text-[11px] font-mono text-secondary font-black">5 of 6 done</span>
              </div>
              <div className="space-y-2">
                {[
                  { task: "Reserve and Register Company Name via CAC", completed: true },
                  { task: "Draft Memorandum of Association", completed: true },
                  { task: "Obtain Corporate TIN (FIRS)", completed: true },
                  { task: "Setup Custom Business Domain & Professional Email", completed: true },
                  { task: "Integrate Payment Gateway & Bank API", completed: true },
                  { task: "Deploy Professional Landing Page", completed: false },
                ].map((t, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white/[0.015] px-3.5 py-2.5 rounded-lg border border-white/[0.03]">
                    <span
                      className={`w-4 h-4 rounded flex items-center justify-center text-[10px] border transition-colors ${
                        t.completed
                          ? "bg-secondary/30 border-secondary text-secondary font-black"
                          : "border-white/30 text-transparent"
                      }`}
                    >
                      ✓
                    </span>
                    <span className={`text-xs font-medium ${t.completed ? "text-off-white/60 line-through" : "text-off-white"}`}>
                      {t.task}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3D Floating Chip A: Top Left */}
        <div
          className="absolute -top-3 left-2 pointer-events-none select-none transition-transform duration-300 ease-out"
          style={{
            transform: `translateZ(60px) translateX(${isHovered ? rotate.y * -0.8 : 0}px) translateY(${isHovered ? rotate.x * 0.8 : 0}px)`,
          }}
        >
          <div className="bg-deep-black/90 backdrop-blur-xl border border-white/[0.2] rounded-xl px-4 py-3 shadow-[0_20px_40px_rgba(0,0,0,0.6)] flex items-center gap-2.5">
            <span className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold">
              ✓
            </span>
            <div>
              <p className="text-[9px] font-mono font-bold text-off-white/60 uppercase tracking-wider">CAC Certificate</p>
              <p className="text-xs font-black text-off-white">RC Registration Issued</p>
            </div>
          </div>
        </div>

        {/* 3D Floating Chip B: Bottom Right */}
        <div
          className="absolute -bottom-3 right-2 pointer-events-none select-none transition-transform duration-300 ease-out"
          style={{
            transform: `translateZ(90px) translateX(${isHovered ? rotate.y * 1.0 : 0}px) translateY(${isHovered ? rotate.x * -1.0 : 0}px)`,
          }}
        >
          <div className="bg-secondary border border-white/[0.25] rounded-xl px-4 py-3 shadow-[0_20px_45px_rgba(183,21,19,0.5)] flex items-center gap-2.5">
            <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white text-xs animate-bounce">
              🚀
            </span>
            <div>
              <p className="text-[9px] font-mono font-bold text-white/70 uppercase tracking-wider">Launch Complete</p>
              <p className="text-xs font-black text-white">Business Website Live</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
