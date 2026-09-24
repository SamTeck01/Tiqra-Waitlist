import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import CTABanner from "@/components/landing/CTABanner";
import Footer from "@/components/landing/Footer";
import WaitlistForm from "@/components/waitlist/WaitlistForm";

export const metadata: Metadata = {
  title: "Join the waitlist – Tiqra",
  description: "Be among the first to experience Tiqra.",
};

export default function WaitlistPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FEFEFE]">
      <Navbar />
      <main className="px-4 pb-16 pt-[112px] md:pb-[117px] md:pt-[182px]">
        <WaitlistForm />
      </main>
      <CTABanner />
      <Footer />
    </div>
  );
}
