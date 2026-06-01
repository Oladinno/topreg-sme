import HeroSection from "@/components/home/HeroSection";
import MissionSection from "@/components/home/MissionSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import TrustSection from "@/components/home/TrustSection";
import FinalCta from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <ServicesGrid />
      <TrustSection />
      <FinalCta />
    </>
  );
}
