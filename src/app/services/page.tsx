import type { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import LegalBrandSection from "@/components/services/LegalBrandSection";
import SystemsGrowthSection from "@/components/services/SystemsGrowthSection";
import ServicesCta from "@/components/services/ServicesCta";

export const metadata: Metadata = {
  title: "World-Class Solutions | TopReg SME",
  description:
    "Driving Nigeria's SME growth through legal, systems, and growth strategy.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <LegalBrandSection />
      <SystemsGrowthSection />
      <ServicesCta />
    </>
  );
}
