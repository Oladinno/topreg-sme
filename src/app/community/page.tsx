import type { Metadata } from "next";
import CommunityHero from "@/components/community/CommunityHero";
import GallerySection from "@/components/community/GallerySection";
import CaseStudyOne from "@/components/community/CaseStudyOne";
import AuthorityBanner from "@/components/community/AuthorityBanner";
import CaseStudyTwo from "@/components/community/CaseStudyTwo";
import CommunityCta from "@/components/community/CommunityCta";

export const metadata: Metadata = {
  title: "Success Stories | TopReg SME",
  description:
    "Brought To Life. TopReg SME serves as the foundational architect for Nigeria's most ambitious entrepreneurs.",
};

export default function CommunityPage() {
  return (
    <>
      <CommunityHero />
      <GallerySection />
      <CaseStudyOne />
      <AuthorityBanner />
      <CaseStudyTwo />
      <CommunityCta />
    </>
  );
}
