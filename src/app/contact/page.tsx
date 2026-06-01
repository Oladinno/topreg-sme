import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import SocialProofSection from "@/components/contact/SocialProofSection";

export const metadata: Metadata = {
  title: "Contact Us | TOP REG SME",
  description:
    "Start Your Transformation. Ready to bring your business from imagination into reality?",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="px-margin-edge max-w-container-max mx-auto mb-section-gap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start border-t border-primary/10 pt-16">
          <div className="lg:col-span-7 pr-0 lg:pr-12">
            <ContactForm />
          </div>
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>
        </div>
      </section>
      <SocialProofSection />
    </>
  );
}
