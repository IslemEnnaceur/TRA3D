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
        <InteractiveDemo />
      </AnimatedSection>
      <AnimatedSection>
        <Features />
      </AnimatedSection>
      <AnimatedSection>
        <ContentSection />
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
