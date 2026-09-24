const items = [
  {
    n: "01",
    title: "Make decisions with real evidence.",
    body: "Instead of relying on assumptions, guesswork, or feedback from friends and family, Tiqra helps you gather meaningful signals from the people your idea is actually built for.",
    // number offset (px) within the 343px-tall group, per Figma
    numberTop: 0,
    cardH: 193,
    card: "bg-[#F8F9FC]",
    number: "text-[#6B7280]",
  },
  {
    n: "02",
    title: "Ask smarter questions.",
    body: "Tiqra's AI generates targeted questions designed around your idea, problem, and audience—so you can focus on the insights that matter.",
    numberTop: 27,
    cardH: 148,
    card: "bg-[#E0E7FF]",
    number: "text-[#6B7280]/60",
  },
  {
    n: "03",
    title: "Turn feedback into clarity.",
    titleMaxW: 224,
    body: "Tiqra analyzes your responses to uncover demand, pain points, willingness to pay, objections, and important patterns. Use the evidence to understand whether you should GO, PIVOT, or KILL your idea.",
    numberTop: 0,
    cardH: 193,
    card: "bg-white",
    number: "text-[#6B7280]",
  },
  {
    n: "04",
    title: "Reach the right people.",
    body: "Get feedback from relevant respondents who can share genuine experiences, preferences, concerns, and opinions about your idea.",
    numberTop: 51,
    cardH: 148,
    card: "bg-[#E0E7FF]",
    number: "text-[#6B7280]/60",
  },
];

export default function BuildWithEvidence() {
  return (
    <section id="about" className="scroll-mt-8 bg-white px-4 py-16 md:px-[70px] md:py-[82px]">
      <div className="mx-auto max-w-[726px] text-center">
        <h2 className="text-[28px] font-semibold leading-[40px] tracking-[-1px] text-[#111827] md:text-[32px] md:leading-[48px]">
          Build with evidence, not assumptions.
        </h2>
        <p className="mt-3 text-[16px] leading-[25px] tracking-[-0.4px] text-[#6B7280] md:text-[18px]">
          Tiqra combines AI-powered validation with real human insights to help you understand your audience and make
          confident decisions before investing in your idea.
        </p>
      </div>

      <div className="mx-auto mt-[34px] grid max-w-[1300px] gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <div key={it.n} className="relative lg:h-[343px]">
            <span
              aria-hidden
              className={`block text-center text-[120px] font-semibold leading-[180px] tracking-[3.6px] lg:absolute lg:inset-x-0 lg:text-[180px] lg:leading-[270px] ${it.number}`}
              style={{ top: it.numberTop }}
            >
              {it.n}
            </span>
            <div
              className={`relative z-10 -mt-[72px] rounded-3xl px-3 py-4 text-center lg:absolute lg:inset-x-0 lg:bottom-0 lg:mt-0 lg:h-[var(--h)] ${it.card}`}
              style={{ ["--h" as string]: `${it.cardH}px` }}
            >
              <h3 style={{ maxWidth: "titleMaxW" in it ? it.titleMaxW : undefined }} className="mx-auto text-[20px] font-medium leading-[24px] tracking-[-0.4px] text-[#111827]">{it.title}</h3>
              <p className="mt-2 text-[14px] leading-[21px] tracking-[0.3px] text-[#6B7280]">{it.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
