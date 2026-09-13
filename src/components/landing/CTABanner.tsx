export default function CTABanner() {
  return (
    <section className="bg-[#111828] pt-16 sm:pt-20 pb-10 sm:pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Card with organic wave artwork */}
        <div className="relative rounded-[32px] sm:rounded-[40px] overflow-hidden px-6 py-14 sm:py-16 sm:px-12 text-center shadow-2xl bg-[#6E62EE]">
          {/* Organic wave background SVG */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none select-none"
            viewBox="0 0 900 400"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* Top-right soft organic wave */}
            <path
              d="M480,0 C560,110 680,165 900,120 L900,0 Z"
              fill="#7C71F4"
              opacity="0.8"
            />
            <path
              d="M650,0 C720,70 805,100 900,75 L900,0 Z"
              fill="#8B81F8"
              opacity="0.55"
            />

            {/* Bottom-left deep organic wave */}
            <path
              d="M0,190 C130,210 220,295 270,400 L0,400 Z"
              fill="#5B4DDE"
              opacity="0.75"
            />
            <path
              d="M0,275 C75,290 135,340 175,400 L0,400 Z"
              fill="#5042D3"
              opacity="0.6"
            />

            {/* Flowing center wave ribbon */}
            <path
              d="M370,0 C410,130 475,260 610,400 L730,400 C610,250 535,120 490,0 Z"
              fill="#786DF3"
              opacity="0.4"
            />
            <path
              d="M200,400 C295,280 370,160 450,0 L395,0 C320,145 245,270 145,400 Z"
              fill="#5E50DF"
              opacity="0.4"
            />
          </svg>

          {/* Content */}
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-[38px] font-bold text-white mb-3.5 tracking-tight leading-tight">
              Don&apos;t build on assumptions.
            </h2>
            <p className="text-white/90 text-[14.5px] sm:text-[15.5px] leading-relaxed mb-8 max-w-[580px] mx-auto font-normal">
              Put your idea to the test with AI-powered questions and real human insights, so you can uncover genuine demand, understand your audience, and make confident decisions before you build.
            </p>
            <div>
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center bg-white text-[#111827] font-medium text-[15px] px-8 py-3 rounded-xl shadow-sm hover:bg-[#F9FAFB] active:scale-[0.98] transition-all duration-150"
              >
                Join waitlist
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

