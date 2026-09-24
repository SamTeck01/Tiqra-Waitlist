"use client";

import { useState } from "react";
import Image from "next/image";

type Audience = "founders" | "earners";

type Step = {
  title: string;
  body: string;
  icon: string;
  // Positions (px) inside the 1440 x 791 desktop stage, taken from Figma
  text: { x: number; y: number; w: number };
};

// Stage geometry shared by both audiences
const STAGE_W = 1440;
const STAGE_H = 791;
const ICONS = [
  { x: 225, y: 517 },
  { x: 693, y: 351 },
  { x: 1131, y: 33 },
];
const NUMBERS = [
  { x: 359, y: 531 },
  { x: 847, y: 348 },
  { x: 1245, y: 56 },
];

const steps: Record<Audience, Step[]> = {
  founders: [
    {
      title: "Submit your Idea",
      body: "Tell Tiqra about your idea, the problem you're solving, your target audience, and the solution you have in mind.",
      icon: "/landing/icon-idea.svg",
      text: { x: 114, y: 597, w: 326 },
    },
    {
      title: "Validate with real people",
      body: "Tiqra uses AI to generate targeted validation questions based on your idea and audience.",
      icon: "/landing/icon-people.svg",
      text: { x: 619, y: 441, w: 326 },
    },
    {
      title: "Get Insights & Decide",
      body: "Tiqra analyzes the responses to get clear, actionable insights that help you decide whether to GO, PIVOT, or KILL your idea.",
      icon: "/landing/icon-chart.svg",
      text: { x: 1034, y: 149, w: 351 },
    },
  ],
  earners: [
    {
      title: "Find a Survey",
      body: "Browse available validation surveys based on your profile and interests. See the estimated time, reward, and basic requirements before you start.",
      icon: "/landing/icon-search.svg",
      text: { x: 174, y: 596, w: 387 },
    },
    {
      title: "Share Your Feedback",
      body: "Complete surveys by answering questions about your experiences, preferences, and opinions. Tiqra uses response-quality checks to ensure genuine feedback is rewarded.",
      icon: "/landing/icon-chat.svg",
      text: { x: 640, y: 434, w: 449 },
    },
    {
      title: "Earn & Withdraw",
      body: "Once your response is successfully verified, your reward is added to your Tiqra wallet. Track your earnings and withdraw your available balance securely.",
      icon: "/landing/icon-wallet.svg",
      text: { x: 1056, y: 138, w: 351 },
    },
  ],
};

const px = (v: number) => `${(v / STAGE_W) * 100}%`;
const py = (v: number) => `${(v / STAGE_H) * 100}%`;

export default function HowItWorks() {
  const [audience, setAudience] = useState<Audience>("founders");
  const current = steps[audience];

  return (
    <section id="how-it-works" className="scroll-mt-8 bg-[#FEFEFE] pt-16 pb-16 md:pt-[82px] xl:pb-0">
      <div className="mx-auto max-w-[781px] px-4 text-center">
        <h2 className="text-[28px] font-semibold leading-[40px] tracking-[-1px] text-[#111827] md:text-[32px] md:leading-[48px]">
          How TIQRA works
        </h2>
        <p className="mt-3 text-[16px] leading-[25px] tracking-[-0.4px] text-[#6B7280] md:text-[18px]">
          Turn your idea into a clear, evidence-based decision by combining AI-powered validation with real feedback
          from the people who matter most.
        </p>

        <div role="tablist" className="mx-auto mt-8 flex w-full max-w-[386px] rounded-full bg-[#EDE9FE] p-1">
          {(["founders", "earners"] as const).map((a) => (
            <button
              key={a}
              role="tab"
              aria-selected={audience === a}
              onClick={() => setAudience(a)}
              className={`h-[49px] flex-1 rounded-full text-[18px] leading-[25px] tracking-[-0.4px] capitalize transition-colors ${
                audience === a ? "bg-[#4F46E5] text-[#FEFEFE]" : "text-[#94A3B8] hover:text-[#6B7280]"
              }`}
            >
              {a}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop: curved journey */}
      <div className="relative mx-auto hidden aspect-[1440/791] max-w-[1440px] xl:block">
        <Image
          src="/landing/curve.svg"
          alt=""
          width={1274}
          height={588}
          className="absolute"
          style={{ left: px(41), top: py(15), width: px(1274) }}
        />
        {NUMBERS.map((n, i) => (
          <span
            key={i}
            aria-hidden
            className="absolute font-sora text-[120px] font-semibold leading-[151px] text-[#66736C]/10"
            style={{ left: px(n.x), top: py(n.y) }}
          >
            {i + 1}
          </span>
        ))}
        {current.map((s, i) => (
          <div key={s.title}>
            <Image
              src={s.icon}
              alt=""
              width={60}
              height={60}
              className="absolute h-[60px] w-[60px] rounded-full"
              style={{ left: px(ICONS[i].x), top: py(ICONS[i].y) }}
            />
            <div className="absolute" style={{ left: px(s.text.x), top: py(s.text.y), width: px(s.text.w) }}>
              <h3 className="text-[24px] font-medium leading-[29px] tracking-[-0.5px] text-[#111827]">{s.title}</h3>
              <p className="mt-2 text-[18px] leading-[25px] tracking-[-0.4px] text-[#94A3B8]">{s.body}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile / tablet: vertical timeline */}
      <ol className="mx-auto mt-10 max-w-[560px] px-4 xl:hidden">
        {current.map((s, i) => (
          <li key={s.title} className="relative flex gap-5 pb-10 last:pb-0">
            {i < current.length - 1 && (
              <span aria-hidden className="absolute left-[29px] top-[60px] h-[calc(100%-60px)] w-[3px] rounded-full bg-[#4F46E5]" />
            )}
            <Image
              src={s.icon}
              alt=""
              width={60}
              height={60}
              className="h-[60px] w-[60px] shrink-0 rounded-full shadow-[0_4px_32px_rgba(0,0,0,0.12)]"
            />
            <div className="relative pt-2">
              <span aria-hidden className="absolute -top-4 right-0 font-sora text-[80px] font-semibold leading-none text-[#66736C]/10">
                {i + 1}
              </span>
              <h3 className="text-[20px] font-medium leading-[29px] tracking-[-0.5px] text-[#111827] md:text-[24px]">{s.title}</h3>
              <p className="mt-2 text-[16px] leading-[25px] tracking-[-0.4px] text-[#94A3B8] md:text-[18px]">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
