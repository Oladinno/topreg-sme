"use client";

import { useState } from "react";
import HeroSection from "@/components/home/HeroSection";
import LogoMarquee from "@/components/home/LogoMarquee";
import MissionSection from "@/components/home/MissionSection";
import RoadJourney from "@/components/home/RoadJourney";
import ServicesGrid from "@/components/home/ServicesGrid";
import PortfolioSection from "@/components/home/PortfolioSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import TrustSection from "@/components/home/TrustSection";
import FinalCta from "@/components/home/FinalCta";
import ScorecardModal from "@/components/home/ScorecardModal";

export default function HomePage() {
  const [isScorecardOpen, setIsScorecardOpen] = useState(false);

  return (
    <>
      <HeroSection onOpenScorecard={() => setIsScorecardOpen(true)} />
      <LogoMarquee />
      <MissionSection />
      <RoadJourney />
      <ServicesGrid />
      <PortfolioSection />
      <TestimonialsSection />
      <TrustSection />
      <FinalCta />

      <ScorecardModal
        isOpen={isScorecardOpen}
        onClose={() => setIsScorecardOpen(false)}
      />
    </>
  );
}
