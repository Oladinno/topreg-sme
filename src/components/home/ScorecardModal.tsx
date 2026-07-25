"use client";

import React, { useState } from "react";

interface ScorecardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ScorecardModal({ isOpen, onClose }: ScorecardModalProps) {
  const [step, setStep] = useState(1);
  const [stage, setStage] = useState("Idea / Pre-launch");
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "CAC Name Reservation & Registration",
    "FIRS Corporate Tax ID (TIN)",
  ]);
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      setSelectedServices(selectedServices.filter((s) => s !== srv));
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setStep(4); // Result step
      }, 900);
    }
  };

  const resetAndClose = () => {
    setStep(1);
    setBusinessName("");
    setEmail("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-xl bg-deep-black border border-white/15 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden text-off-white">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase text-off-white/70 tracking-wider">
              CAC & Business Readiness Scorecard
            </span>
          </div>
          <button
            onClick={resetAndClose}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-off-white/60 hover:text-off-white transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 md:p-8">
          {/* Progress Bar */}
          {step <= 3 && (
            <div className="mb-6">
              <div className="flex justify-between text-[11px] font-mono text-off-white/50 mb-2">
                <span>Step {step} of 3</span>
                <span>{step === 1 ? "33%" : step === 2 ? "66%" : "99%"} Complete</span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-secondary transition-all duration-500 ease-out"
                  style={{ width: `${step === 1 ? 33 : step === 2 ? 66 : 100}%` }}
                />
              </div>
            </div>
          )}

          {/* STEP 1: Business Stage */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-off-white">What stage is your business currently in?</h3>
              <p className="text-xs text-off-white/70">Select the option that best describes your entity today.</p>

              <div className="space-y-2.5 pt-2">
                {[
                  { title: "Idea / Pre-launch", desc: "You have a business concept and need full incorporation." },
                  { title: "Existing Business (Unregistered)", desc: "Currently operating and ready to formalize with CAC." },
                  { title: "Business Name looking to upgrade to LTD", desc: "Upgrading from Enterprise/BN to Limited Liability." },
                ].map((item) => (
                  <button
                    key={item.title}
                    onClick={() => setStage(item.title)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      stage === item.title
                        ? "border-secondary bg-secondary/15 shadow-[0_0_15px_rgba(183,21,19,0.3)]"
                        : "border-white/10 bg-white/[0.02] hover:border-white/20"
                    }`}
                  >
                    <p className="text-sm font-bold text-off-white">{item.title}</p>
                    <p className="text-xs text-off-white/60 mt-1">{item.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Required Services */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-off-white">Select your required launch components</h3>
              <p className="text-xs text-off-white/70">Choose all services you need TopReg to handle for you.</p>

              <div className="space-y-2.5 pt-2">
                {[
                  "CAC Name Reservation & Registration",
                  "FIRS Corporate Tax ID (TIN)",
                  "Professional Brand Suite (Logo & Domain)",
                  "Corporate Bank Account Opening (Providus/Zenith)",
                  "Business Landing Page & Email Setup",
                ].map((srv) => {
                  const isChecked = selectedServices.includes(srv);
                  return (
                    <button
                      key={srv}
                      onClick={() => toggleService(srv)}
                      className={`w-full text-left px-4 py-3 rounded-xl border flex items-center justify-between transition-all ${
                        isChecked
                          ? "border-secondary bg-secondary/10 text-off-white font-bold"
                          : "border-white/10 bg-white/[0.02] text-off-white/70"
                      }`}
                    >
                      <span className="text-xs">{srv}</span>
                      <span
                        className={`w-5 h-5 rounded flex items-center justify-center text-xs font-bold border ${
                          isChecked ? "bg-secondary border-secondary text-off-white" : "border-white/20"
                        }`}
                      >
                        {isChecked ? "✓" : ""}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 3: Business Name Check & Email */}
          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-off-white">Instant Name Eligibility Check</h3>
              <p className="text-xs text-off-white/70">Enter your proposed company name to run a preliminary check.</p>

              <div className="space-y-3 pt-2">
                <div>
                  <label className="block text-xs font-mono text-off-white/60 mb-1.5 uppercase">
                    Proposed Business Name
                  </label>
                  <input
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="e.g. Apex Global Synergy LTD"
                    className="w-full bg-white/[0.04] border border-white/15 rounded-xl px-4 py-3 text-sm text-off-white focus:outline-none focus:border-secondary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-off-white/60 mb-1.5 uppercase">
                    Email / WhatsApp Number
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. founder@apexglobal.com"
                    className="w-full bg-white/[0.04] border border-white/15 rounded-xl px-4 py-3 text-sm text-off-white focus:outline-none focus:border-secondary"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Result Screen */}
          {step === 4 && (
            <div className="text-center py-4 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto text-2xl font-black shadow-[0_0_25px_rgba(52,211,153,0.4)]">
                ✓
              </div>

              <div>
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-1">
                  SCORE: 98% LAUNCH READINESS
                </span>
                <h3 className="text-2xl font-extrabold text-off-white">
                  "{businessName || "Your Proposed Entity"}" is High Priority
                </h3>
                <p className="text-xs text-off-white/70 mt-2 max-w-md mx-auto">
                  Your selected services ({selectedServices.length} items) are eligible for fast-track CAC processing with an estimated timeline of 3 to 5 business days.
                </p>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4 text-left space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-off-white/60">Selected Plan:</span>
                  <span className="text-secondary font-bold">TopReg SME All-in-One Suite</span>
                </div>
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-off-white/60">CAC RC Approval:</span>
                  <span className="text-emerald-400 font-bold">Fast-Track Guaranteed</span>
                </div>
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-off-white/60">TIN & Bank Link:</span>
                  <span className="text-off-white font-bold">Included</span>
                </div>
              </div>

              <button
                onClick={resetAndClose}
                className="w-full bg-secondary hover:bg-secondary/90 text-off-white font-bold py-3.5 rounded-xl transition-all shadow-[0_10px_25px_rgba(183,21,19,0.5)]"
              >
                Proceed with Fast-Track Application
              </button>
            </div>
          )}

          {/* Action Buttons Footer */}
          {step <= 3 && (
            <div className="flex items-center justify-between pt-6 mt-6 border-t border-white/10">
              {step > 1 ? (
                <button
                  onClick={() => setStep(step - 1)}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold text-off-white/60 hover:text-off-white bg-white/5 hover:bg-white/10 transition-colors"
                >
                  ← Back
                </button>
              ) : (
                <div />
              )}

              <button
                onClick={handleNext}
                disabled={isSubmitting || (step === 3 && !businessName)}
                className="bg-secondary hover:bg-secondary/90 disabled:opacity-50 text-off-white font-bold px-6 py-2.5 rounded-xl text-xs transition-all shadow-[0_0_15px_rgba(183,21,19,0.4)] flex items-center gap-2"
              >
                {isSubmitting ? "Generating Score..." : step === 3 ? "View Result →" : "Next Step →"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
