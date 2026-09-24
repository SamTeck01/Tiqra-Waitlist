import Image from "next/image";

type Feature = {
  title: string;
  body: string;
  image: string;
  // Visual height (px) and text inset, per Figma
  visualH: number;
  textX: number;
  imageW: number;
};

const features: Feature[] = [
  {
    title: "AI-Powered Question Generation",
    body: "Tiqra automatically creates targeted validation questions based on your idea, problem, and target audience.",
    image: "/landing/feature-questions.png",
    visualH: 240,
    imageW: 840,
    textX: 24,
  },
  {
    title: "Live Validation Tracking",
    body: "Monitor responses, completion rates, campaign progress, and emerging signals while your validation is active.",
    image: "/landing/feature-tracking.png",
    visualH: 240,
    imageW: 840,
    textX: 24,
  },
  {
    title: "Real Human Validation",
    body: "Reach relevant respondents and collect genuine opinions, experiences, and preferences about your idea.",
    image: "/landing/feature-human.png",
    visualH: 240,
    imageW: 840,
    textX: 24,
  },
  {
    title: "Go, Pivot or Kill",
    body: "Get a clear recommendation based on your validation data, helping you decide whether to move forward, make changes, or rethink the idea.",
    image: "/landing/feature-verdict.png",
    visualH: 232,
    imageW: 1376,
    textX: 14,
  },
  {
    title: "AI-Powered Insights",
    body: "Tiqra analyzes your responses to uncover demand, pain points, willingness to pay, objections, and important patterns.",
    image: "/landing/feature-insights.png",
    visualH: 232,
    imageW: 1184,
    textX: 52,
  },
];

function FeatureCard({ f }: { f: Feature }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-white pb-6">
      <div className="relative w-full overflow-hidden" style={{ height: f.visualH }}>
        <Image
          src={f.image}
          alt=""
          width={f.imageW}
          height={f.visualH * 2}
          className="absolute left-1/2 top-0 h-full w-auto max-w-none -translate-x-1/2"
        />
      </div>
      <div className="mt-2" style={{ paddingLeft: f.textX, paddingRight: f.textX }}>
        <h3 className="text-[20px] font-medium leading-[24px] tracking-[0.4px] text-[#111827]">{f.title}</h3>
        <p className="mt-2 text-[16px] leading-[22px] tracking-[0.3px] text-[#6B7280]">{f.body}</p>
      </div>
    </article>
  );
}

export default function FeaturesSection() {
  return (
    <section id="features" className="scroll-mt-8 bg-[#F8F9FC] px-4 py-16 md:px-[70px] md:py-[82px]">
      <div className="mx-auto max-w-[781px] text-center">
        <h2 className="text-[28px] font-semibold leading-[40px] tracking-[-1px] text-[#111827] md:text-[32px] md:leading-[48px]">
          Everything you need to validate with confidence.
        </h2>
        <p className="mt-3 text-[16px] leading-[25px] tracking-[-0.4px] text-[#6B7280] md:text-[18px]">
          From AI-powered questions to real human insights, Tiqra helps you turn uncertainty into informed decisions.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-[1300px] gap-5 md:mt-16 md:grid-cols-2 lg:grid-cols-12">
        {features.slice(0, 3).map((f, i) => (
          <div key={f.title} className={`lg:col-span-4 ${i === 2 ? "md:col-span-2" : ""}`}>
            <FeatureCard f={f} />
          </div>
        ))}
        <div className="grid gap-5 md:col-span-2 lg:col-span-12 lg:grid-cols-[688fr_592fr]">
          {features.slice(3).map((f) => (
            <FeatureCard key={f.title} f={f} />
          ))}
        </div>
      </div>
    </section>
  );
}
