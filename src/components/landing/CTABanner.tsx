import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="bg-[#111827] px-4 pt-16 md:pt-[82px]">
      <div
        className="relative mx-auto max-w-[846px] overflow-hidden rounded-[32px] bg-[#4F46E5] px-6 py-12 text-center md:rounded-[48px] md:px-[70px] md:py-[70px]"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url(/landing/cta-texture.png)" }}
        />
        <div className="relative">
          <h2 className="text-[30px] font-bold leading-[1.3] tracking-[-1.5px] text-white md:text-[40px] md:leading-[60px] md:tracking-[-2px]">
            Don’t build on assumptions.
          </h2>
          <p className="mx-auto mt-3 max-w-[715px] text-[16px] leading-[26px] tracking-[0.4px] text-white md:text-[20px] md:leading-[30px]">
            Put your idea to the test with AI-powered questions and real human insights, so you can uncover genuine
            demand, understand your audience, and make confident decisions before you build.
          </p>
          <Link
            href="/waitlist"
            className="mx-auto mt-8 inline-flex h-[54px] w-full max-w-[313px] items-center justify-center rounded-xl bg-white text-[18px] font-medium leading-[22px] tracking-[-0.4px] text-[#4F46E5] shadow-[0_4px_32px_rgba(0,0,0,0.16)] transition-colors hover:bg-[#EEF2FF]"
          >
            Join waitlist
          </Link>
        </div>
      </div>
    </section>
  );
}
