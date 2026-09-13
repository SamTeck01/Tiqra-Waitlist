"use client";

import { useState } from "react";

interface StepData {
  number: string;
  title: string;
  description: string;
}

const foundersSteps: StepData[] = [
  {
    number: "1",
    title: "Submit your Idea",
    description:
      "Tell Tiqra about your idea, the problem you're solving, your target audience, and the solution you have in mind.",
  },
  {
    number: "2",
    title: "Validate with real people",
    description:
      "Tiqra uses AI to generate targeted validation questions based on your idea and audience.",
  },
  {
    number: "3",
    title: "Get Insights & Decide",
    description:
      "Tiqra analyzes the responses to get clear, actionable insights that help you decide whether to GO, PIVOT, or KILL your idea.",
  },
];

const earnersSteps: StepData[] = [
  {
    number: "1",
    title: "Browse validation tasks",
    description:
      "Find questions and survey tasks from startup founders that match your background, skills, and industry.",
  },
  {
    number: "2",
    title: "Share authentic feedback",
    description:
      "Answer thoughtful questions with genuine honesty and context to help founders make better product decisions.",
  },
  {
    number: "3",
    title: "Earn guaranteed rewards",
    description:
      "Receive prompt payouts for every completed validation, transferred securely straight to your wallet.",
  },
];

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState<"founders" | "earners">("founders");
  const steps = activeTab === "founders" ? foundersSteps : earnersSteps;

  return (
    <section id="how-it-works" className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-3xl sm:text-[34px] font-semibold text-[#111827] mb-3 tracking-tight">
            How TIQRA works
          </h2>
          <p className="text-[#6B7280] text-[15px] sm:text-base leading-relaxed max-w-[560px] mx-auto font-normal">
            Turn your idea into a clear, evidence-based decision by combining AI-powered validation with real
            feedback from the people who matter most.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <div className="inline-flex p-1 rounded-full bg-[#EDE9FE]/70 border border-[#E4DCFD]">
            <button
              type="button"
              onClick={() => setActiveTab("founders")}
              className={`px-8 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === "founders"
                  ? "bg-[#4F46E5] text-white shadow-sm"
                  : "text-[#7B799A] hover:text-[#4F46E5]"
              }`}
            >
              Founders
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("earners")}
              className={`px-8 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === "earners"
                  ? "bg-[#4F46E5] text-white shadow-sm"
                  : "text-[#7B799A] hover:text-[#4F46E5]"
              }`}
            >
              Earners
            </button>
          </div>
        </div>

        {/* Desktop Landscape Journey Curve (matches image exactly) */}
        <div className="hidden lg:block relative w-full overflow-x-auto pb-2">
          {/* S-Curve SVG and Badges */}
          <div className="relative w-[1080px] h-[540px] mx-auto">
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 1080 540"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Curve ambient purple drop shadow */}
                <filter id="curve-shadow" x="-5%" y="-15%" width="120%" height="150%">
                  <feDropShadow
                    dx="0"
                    dy="12"
                    stdDeviation="14"
                    floodColor="#4F46E5"
                    floodOpacity="0.30"
                  />
                </filter>
                {/* Node circular badge soft shadow */}
                <filter id="node-shadow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow
                    dx="0"
                    dy="4"
                    stdDeviation="6"
                    floodColor="#0F172A"
                    floodOpacity="0.10"
                  />
                </filter>
              </defs>

              {/* Exact Purple Journey S-Curve */}
              <path
                d="M 68 332 C 80.8 340.3, 119.7 371.0, 145 382 C 170.3 393.0, 193.3 402.8, 220 398 C 246.7 393.2, 277.5 372.0, 305 353 C 332.5 334.0, 360.0 297.7, 385 284 C 410.0 270.3, 430.5 272.0, 455 271 C 479.5 270.0, 507.0 279.0, 532 278 C 557.0 277.0, 579.5 281.2, 605 265 C 630.5 248.8, 658.3 210.2, 685 181 C 711.7 151.8, 739.5 112.3, 765 90 C 790.5 67.7, 816.3 56.2, 838 47 C 859.7 37.8, 880.5 36.8, 895 35 C 909.5 33.2, 920.0 35.8, 925 36"
                stroke="#4F46E5"
                strokeWidth="6.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#curve-shadow)"
              />

              {/* Node 1: Lightbulb Badge */}
              <g transform="translate(220, 398)">
                <circle cx="0" cy="0" r="18" fill="white" filter="url(#node-shadow)" />
                <g transform="translate(-10, -10)">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18h6" />
                    <path d="M10 22h4" />
                    <path d="M15 13c.7-.7 1.4-1.6 1.8-2.6.4-1 .4-2.1.1-3.1-.3-1-.9-1.9-1.8-2.5-.9-.6-2-.9-3.1-.9s-2.2.3-3.1.9c-.9.6-1.5 1.5-1.8 2.5-.3 1-.3 2.1.1 3.1.4 1 1.1 1.9 1.8 2.6.5.5.9 1.2 1 2h4c.1-.8.5-1.5 1-2z" />
                    {/* Small light rays */}
                    <path d="M19 5l1.5-1.5" />
                    <path d="M21 10h2" />
                    <path d="M19 15l1.5 1.5" />
                  </svg>
                </g>
              </g>

              {/* Node 2: Audience / Verified User Badge */}
              <g transform="translate(532, 278)">
                <circle cx="0" cy="0" r="18" fill="white" filter="url(#node-shadow)" />
                <g transform="translate(-10, -10)">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    {/* Corner focus brackets */}
                    <path d="M4 8V5h3" />
                    <path d="M17 5h3v3" />
                    <path d="M4 16v3h3" />
                    <path d="M17 19h3v-3" />
                    {/* User profile inside */}
                    <circle cx="12" cy="10" r="2.8" />
                    <path d="M7.5 17c.4-2.2 2.2-3.5 4.5-3.5s4.1 1.3 4.5 3.5" />
                  </svg>
                </g>
              </g>

              {/* Node 3: Analytics / Insights Chart Badge */}
              <g transform="translate(838, 47)">
                <circle cx="0" cy="0" r="18" fill="white" filter="url(#node-shadow)" />
                <g transform="translate(-10, -10)">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    {/* 3 Rounded Bars */}
                    <rect x="5.5" y="13" width="2.8" height="7.5" rx="1.4" />
                    <rect x="10.6" y="15" width="2.8" height="5.5" rx="1.4" />
                    <rect x="15.7" y="11" width="2.8" height="9.5" rx="1.4" />
                    {/* Line Chart with connected dots above */}
                    <circle cx="6.9" cy="8" r="1.4" fill="#4F46E5" />
                    <circle cx="12" cy="10" r="1.4" fill="#4F46E5" />
                    <circle cx="17.1" cy="6" r="1.4" fill="#4F46E5" />
                    <polyline points="6.9 8, 12 10, 17.1 6" stroke="#4F46E5" strokeWidth="1.5" />
                  </svg>
                </g>
              </g>
            </svg>

            {/* Step 1 Text Block & Watermark 1 */}
            <div
              className="absolute"
              style={{ left: "9%", top: "432px", width: "250px" }}
            >
              <div className="relative">
                <div className="relative z-10 pr-10">
                  <h3 className="text-[17px] font-semibold text-[#111827] mb-2 tracking-tight">
                    {steps[0].title}
                  </h3>
                  <p className="text-[13px] text-[#6B7280] leading-relaxed font-normal">
                    {steps[0].description}
                  </p>
                </div>
                <span
                  className="absolute -top-3 right-0 text-[95px] font-bold text-[#EDEFF4] select-none pointer-events-none leading-none z-0 tracking-tighter"
                  aria-hidden="true"
                >
                  {steps[0].number}
                </span>
              </div>
            </div>

            {/* Step 2 Text Block & Watermark 2 */}
            <div
              className="absolute"
              style={{ left: "42%", top: "316px", width: "250px" }}
            >
              <div className="relative">
                <div className="relative z-10 pr-10">
                  <h3 className="text-[17px] font-semibold text-[#111827] mb-2 tracking-tight">
                    {steps[1].title}
                  </h3>
                  <p className="text-[13px] text-[#6B7280] leading-relaxed font-normal">
                    {steps[1].description}
                  </p>
                </div>
                <span
                  className="absolute -top-3 right-0 text-[95px] font-bold text-[#EDEFF4] select-none pointer-events-none leading-none z-0 tracking-tighter"
                  aria-hidden="true"
                >
                  {steps[1].number}
                </span>
              </div>
            </div>

            {/* Step 3 Text Block & Watermark 3 */}
            <div
              className="absolute"
              style={{ left: "73%", top: "115px", width: "260px" }}
            >
              <div className="relative">
                <div className="relative z-10 pr-10">
                  <h3 className="text-[17px] font-semibold text-[#111827] mb-2 tracking-tight">
                    {steps[2].title}
                  </h3>
                  <p className="text-[13px] text-[#6B7280] leading-relaxed font-normal">
                    {steps[2].description}
                  </p>
                </div>
                <span
                  className="absolute -top-3 right-0 text-[95px] font-bold text-[#EDEFF4] select-none pointer-events-none leading-none z-0 tracking-tighter"
                  aria-hidden="true"
                >
                  {steps[2].number}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Flow (< lg screens) */}
        <div className="block lg:hidden max-w-lg mx-auto relative px-4">
          {/* Vertical connecting line */}
          <div className="absolute left-[39px] top-6 bottom-16 w-1 bg-gradient-to-b from-[#4F46E5] via-[#4F46E5] to-[#7C3AED] rounded-full shadow-[0_0_12px_rgba(79,70,229,0.35)]" />

          <div className="space-y-12">
            {steps.map((step, idx) => (
              <div key={step.number} className="relative flex items-start gap-5">
                {/* Node icon */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-white border border-[#E5E7EB] shadow-[0_4px_12px_rgba(15,23,42,0.08)] flex items-center justify-center">
                  {idx === 0 && (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18h6" />
                      <path d="M10 22h4" />
                      <path d="M15 13c.7-.7 1.4-1.6 1.8-2.6.4-1 .4-2.1.1-3.1-.3-1-.9-1.9-1.8-2.5-.9-.6-2-.9-3.1-.9s-2.2.3-3.1.9c-.9.6-1.5 1.5-1.8 2.5-.3 1-.3 2.1.1 3.1.4 1 1.1 1.9 1.8 2.6.5.5.9 1.2 1 2h4c.1-.8.5-1.5 1-2z" />
                      <path d="M19 5l1.5-1.5" />
                      <path d="M21 10h2" />
                      <path d="M19 15l1.5 1.5" />
                    </svg>
                  )}
                  {idx === 1 && (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 8V5h3" />
                      <path d="M17 5h3v3" />
                      <path d="M4 16v3h3" />
                      <path d="M17 19h3v-3" />
                      <circle cx="12" cy="10" r="2.8" />
                      <path d="M7.5 17c.4-2.2 2.2-3.5 4.5-3.5s4.1 1.3 4.5 3.5" />
                    </svg>
                  )}
                  {idx === 2 && (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="5.5" y="13" width="2.8" height="7.5" rx="1.4" />
                      <rect x="10.6" y="15" width="2.8" height="5.5" rx="1.4" />
                      <rect x="15.7" y="11" width="2.8" height="9.5" rx="1.4" />
                      <circle cx="6.9" cy="8" r="1.4" fill="#4F46E5" />
                      <circle cx="12" cy="10" r="1.4" fill="#4F46E5" />
                      <circle cx="17.1" cy="6" r="1.4" fill="#4F46E5" />
                      <polyline points="6.9 8, 12 10, 17.1 6" stroke="#4F46E5" strokeWidth="1.5" />
                    </svg>
                  )}
                </div>

                {/* Content with watermark */}
                <div className="relative flex-1 pt-1">
                  <div className="relative z-10 pr-12">
                    <h3 className="text-lg font-semibold text-[#111827] mb-1.5 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#6B7280] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <span
                    className="absolute -top-3 right-0 text-[80px] font-bold text-[#EEF0F5] select-none pointer-events-none leading-none z-0 tracking-tighter"
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

