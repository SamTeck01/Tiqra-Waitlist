import Image from "next/image";
import Link from "next/link";

const avatars = ["/landing/avatar-1.png", "/landing/avatar-2.png", "/landing/avatar-3.png", "/landing/avatar-4.png"];

function InsightsCard({ className = "" }: { className?: string }) {
  return (
    <div className={`w-[318px] rounded-2xl bg-white p-4 shadow-[0_4px_32px_rgba(0,0,0,0.08)] ${className}`}>
      <div className="flex items-center gap-2">
        <Image src="/landing/icon-sparkles.svg" alt="" width={24} height={24} />
        <p className="text-[24px] font-medium leading-[29px] tracking-[-0.5px] text-[#111827]">AI Insights</p>
      </div>
      <p className="mt-3 text-[16px] leading-[19px] tracking-[-0.3px] text-[#6B7280]">
        Strong demand detected for your idea in the target Market
      </p>
      <div className="mt-3 flex items-center justify-between">
        <span className="rounded-lg bg-[#ECFDF5] px-2.5 py-2.5 text-[12px] font-medium leading-[14px] tracking-[-0.1px] text-[#16A34A]">
          High Potentials
        </span>
        <Image src="/landing/icon-trend.svg" alt="" width={24} height={24} />
      </div>
    </div>
  );
}

function FindingsCard({ className = "" }: { className?: string }) {
  return (
    <div className={`w-[299px] rounded-2xl bg-white p-4 shadow-[0_4px_32px_rgba(0,0,0,0.08)] ${className}`}>
      <p className="text-[24px] font-medium leading-[29px] tracking-[-0.5px] text-[#111827]">Top findings</p>
      <p className="mt-2 text-[16px] leading-[19px] tracking-[-0.3px] text-[#6B7280]">
        76% of the respondents struggle with the current solution
      </p>
      <div className="mt-3 flex -space-x-4">
        {avatars.map((src) => (
          <Image key={src} src={src} alt="" width={40} height={40} className="h-10 w-10 rounded-full" />
        ))}
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E0E7FF] text-[16px] leading-[19px] tracking-[-0.3px] text-[#4F46E5]">
          +20
        </span>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#E0E7FF] lg:h-[848px]">
      {/* Texture + glow, per Figma fills */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url(/landing/hero-texture.png)" }}
      />
      <div className="pointer-events-none absolute -top-[77px] left-[68%] h-[601px] w-[557px] rounded-full bg-[#4F46E5]/30 blur-[150px]" />

      <div className="relative mx-auto flex max-w-[1440px] flex-col items-center px-4 pt-[140px] md:pt-[218px]">
        <h1 className="text-center text-[36px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#111827] sm:text-[48px] lg:text-[60px] lg:leading-[72px] lg:tracking-[-1.2px]">
          <span className="font-sora text-[#4F46E5]">Validate</span> your idea before building it
        </h1>
        <p className="mt-4 max-w-[653px] text-center text-[16px] leading-[22px] tracking-[0.4px] text-[#6B7280] md:text-[18px]">
          AI-powered validation using real human insights, helping you make smarter decisions with confidence.
        </p>
        <Link
          href="/waitlist"
          className="mt-8 inline-flex h-[54px] w-full max-w-[313px] items-center justify-center rounded-xl bg-[#4F46E5] text-[18px] font-medium leading-[22px] tracking-[-0.4px] text-[#FEFEFE] shadow-[0_4px_32px_rgba(0,0,0,0.16)] transition-colors hover:bg-[#4338CA]"
        >
          Join waitlist
        </Link>

        {/* Mobile / tablet: dashboard + cards stacked */}
        <div className="mt-12 w-full max-w-[879px] lg:hidden">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <InsightsCard className="max-w-full" />
            <FindingsCard className="max-w-full" />
          </div>
          <div className="mt-8 h-[180px] overflow-hidden sm:h-[260px]">
            <Image src="/landing/dashboard.png" alt="Tiqra founder dashboard" width={1758} height={818} className="w-full rounded-t-[32px]" />
          </div>
        </div>
      </div>

      {/* Desktop: absolute layout matching the 1440 frame */}
      <div className="absolute inset-x-0 top-0 mx-auto hidden h-[848px] max-w-[1440px] lg:block">
        <Image
          src="/landing/dashboard.png"
          alt="Tiqra founder dashboard"
          width={1758}
          height={818}
          priority
          className="absolute left-[19.44%] top-[575px] w-[61.04%] max-w-[879px] rounded-t-[48px] border-[12px] border-white/20"
        />
        <InsightsCard className="absolute left-[2.64%] top-[538px]" />
        <FindingsCard className="absolute right-[3.82%] top-[669px]" />
      </div>
    </section>
  );
}
