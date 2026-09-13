const steps = [
  {
    number: "01",
    title: "Make decisions with real evidence.",
    description:
      "Instead of relying on assumptions, guesswork, or feedback from friends and family, Tiqra helps you gather meaningful signals from the people your idea is actually built for.",
  },
  {
    number: "02",
    title: "Ask smarter questions.",
    description:
      "Tiqra\u2019s AI generates targeted questions designed around your idea, problem, and audience\u2014so you can focus on the insights that matter.",
  },
  {
    number: "03",
    title: "Turn feedback into clarity.",
    description:
      "Tiqra analyzes your responses to uncover demand, pain points, willingness to pay, objections, and important patterns. Use the evidence to understand whether you should GO, PIVOT, or KILL your idea.",
  },
  {
    number: "04",
    title: "Reach the right people.",
    description:
      "Get feedback from relevant respondents who can share genuine experiences, preferences, concerns, and opinions about your idea.",
  },
];

export default function BuildWithEvidence() {
  return (
    <section id="about-us" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-[36px] font-semibold text-[#111827] mb-3 tracking-tight">
            Build with evidence, not assumptions.
          </h2>
          <p className="text-[#6B7280] text-[15px] sm:text-base leading-relaxed max-w-[640px] mx-auto font-normal">
            Tiqra combines AI-powered validation with real human insights to help you understand your
            audience and make confident decisions before investing in your idea.
          </p>
        </div>

        {/* 4 Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => {
            // Alternate card backgrounds: cards 1 & 3 are off-white, cards 2 & 4 are lavender
            const isLavender = i % 2 === 1;
            const cardBg = isLavender ? "bg-[#E1E7FF]" : "bg-[#F4F5F9]";

            return (
              <div
                key={step.number}
                className="relative flex flex-col"
              >
                {/* Big Arch Number (behind the card top) */}
                <div className="relative flex items-end justify-center h-[110px] overflow-hidden select-none pointer-events-none">
                  <span
                    className="text-[120px] font-black leading-none tracking-tighter text-[#D5D7DC]"
                    style={{ lineHeight: 0.85 }}
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>
                </div>

                {/* Card Body */}
                <div
                  className={`relative ${cardBg} rounded-b-[28px] rounded-t-[28px] -mt-6 px-6 pt-8 pb-7 flex-1 flex flex-col`}
                >
                  <h3 className="text-[16px] font-semibold text-[#111827] mb-2.5 leading-snug text-center">
                    {step.title}
                  </h3>
                  <p className="text-[13px] text-[#6B7280] leading-relaxed font-normal text-center">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

