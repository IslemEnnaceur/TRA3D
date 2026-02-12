import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import HeroSection from "@/components/hero-section";
import TrustBanner from "@/components/trust-banner";
import ProblemSolution from "@/components/sections/problem-solution";
import HowItWorks from "@/components/sections/how-it-works";
import InteractiveDemo from "@/components/sections/interactive-demo";
import Features from "@/components/features-1";
import ContentSection from "@/components/content-1";
import PricingPreview from "@/components/sections/pricing-preview";
import FAQSection from "@/components/sections/faq-section";
import TrustSignals from "@/components/sections/trust-signals";
import CallToAction from "@/components/call-to-action";
import FooterSection from "@/components/footer";
import AnimatedSection from "@/components/animated-section";
import EmailCapture from "@/components/email-capture";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Index" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `https://tra-3d.vercel.app/${locale}`,
      languages: {
        en: "https://tra-3d.vercel.app/en",
        fr: "https://tra-3d.vercel.app/fr",
        ar: "https://tra-3d.vercel.app/ar",
        "x-default": "https://tra-3d.vercel.app/en",
      },
    },

  };
}

export default function Home() {
  return (
    <>
      <TrustBanner />
      <HeroSection />
      <AnimatedSection>
        <ProblemSolution />
      </AnimatedSection>
      <AnimatedSection>
        <HowItWorks />
      </AnimatedSection>
      <AnimatedSection>
        <ContentSection />
      </AnimatedSection>

      <AnimatedSection>
        <InteractiveDemo />
      </AnimatedSection>
      <AnimatedSection>
        <Features />
      </AnimatedSection>
      <AnimatedSection>
        <PricingPreview />
      </AnimatedSection>
      <AnimatedSection>
        <FAQSection />
      </AnimatedSection>
      <AnimatedSection>
        <TrustSignals />
      </AnimatedSection>
      <CallToAction />
      <FooterSection />
      <EmailCapture />
    </>
  );
}
