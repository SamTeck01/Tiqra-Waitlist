import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import HowItWorks from "@/components/landing/HowItWorks";
import FeaturesSection from "@/components/landing/FeaturesSection";
import BuildWithEvidence from "@/components/landing/BuildWithEvidence";
import CTABanner from "@/components/landing/CTABanner";
import Footer from "@/components/landing/Footer";

export const metadata = {
  title: "Tiqra – Validate your idea before building it",
  description:
    "AI-powered validation using real human insights, helping you make smarter decisions without the guesswork. Join 200+ founders on Tiqra.",
};

export default function LandingPage() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorks />
        <FeaturesSection />
        <BuildWithEvidence />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
