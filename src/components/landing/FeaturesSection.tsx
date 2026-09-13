"use client";

import Image from "next/image";

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-[#F8F9FD] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-[36px] font-semibold text-[#111827] mb-3 tracking-tight">
            Everything you need to validate with confidence.
          </h2>
          <p className="text-[#6B7280] text-[15px] sm:text-base leading-relaxed max-w-[600px] mx-auto font-normal">
            From AI-powered questions to real human insights, Tiqra helps you turn uncertainty into informed
            decisions.
          </p>
        </div>

        {/* Top Row: 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: AI-Powered Question Generation */}
          <div className="bg-white rounded-[24px] p-6 sm:p-7 border border-[#EDF0F7] shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between">
            {/* Visual Preview */}
            <div className="h-[190px] flex items-center justify-center relative overflow-hidden mb-6">
              {/* Subtle background document skeleton */}
              <div className="w-[210px] h-[140px] bg-gray-50/60 rounded-xl border border-gray-100/80 p-4 space-y-2.5 shadow-sm">
                <div className="w-16 h-2 bg-gray-200/50 rounded-full" />
                <div className="w-full h-1.5 bg-gray-200/30 rounded-full" />
                <div className="w-5/6 h-1.5 bg-gray-200/30 rounded-full" />
                <div className="w-4/6 h-1.5 bg-gray-200/30 rounded-full" />
                <div className="w-3/4 h-1.5 bg-gray-200/30 rounded-full" />
              </div>

              {/* Floating tilted question card */}
              <div className="absolute bg-white rounded-2xl p-4 shadow-[0_10px_28px_rgba(0,0,0,0.08)] border border-gray-100/90 w-[240px] transform -rotate-[4deg] transition-transform duration-300 hover:rotate-0">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-medium text-[#8C95A6]">Problem Validation</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#5B4DF0"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                    <path d="m15 5 4 4" />
                  </svg>
                </div>
                <p className="text-[12.5px] font-medium text-[#111827] leading-snug">
                  How often do you have difficulty finding quality Handmade products from local artisans
                </p>
              </div>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-[17px] font-semibold text-[#111827] mb-2 tracking-tight">
                AI-Powered Question Generation
              </h3>
              <p className="text-[13px] text-[#6B7280] leading-relaxed font-normal">
                Tiqra automatically creates targeted validation questions based on your idea, problem, and target
                audience.
              </p>
            </div>
          </div>

          {/* Card 2: Live Validation Tracking */}
          <div className="bg-white rounded-[24px] p-6 sm:p-7 border border-[#EDF0F7] shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between">
            {/* Visual Preview */}
            <div className="h-[190px] flex items-center justify-center relative overflow-hidden mb-6">
              {/* Subtle background document skeleton */}
              <div className="w-[210px] h-[140px] bg-gray-50/60 rounded-xl border border-gray-100/80 p-4 space-y-2.5 shadow-sm">
                <div className="w-16 h-2 bg-gray-200/50 rounded-full" />
                <div className="w-full h-1.5 bg-gray-200/30 rounded-full" />
                <div className="w-5/6 h-1.5 bg-gray-200/30 rounded-full" />
                <div className="w-4/6 h-1.5 bg-gray-200/30 rounded-full" />
              </div>

              {/* Floating Badge 1: Top Right */}
              <div className="absolute top-4 right-2 bg-white rounded-2xl px-4 py-3 shadow-[0_10px_26px_rgba(0,0,0,0.08)] border border-gray-100/90 w-[185px] transform rotate-[3deg]">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#16A34A] shrink-0" />
                  <span className="text-[11.5px] font-semibold text-[#111827]">Strong Interest Detected</span>
                </div>
                <p className="text-[10.5px] text-[#6B7280] leading-tight">
                  Interest in the solution is trending upward.
                </p>
              </div>

              {/* Floating Badge 2: Bottom Left */}
              <div className="absolute bottom-4 left-2 bg-white rounded-2xl px-4 py-3 shadow-[0_10px_26px_rgba(0,0,0,0.08)] border border-gray-100/90 w-[175px] transform -rotate-[4deg]">
                <p className="text-[11px] font-semibold text-[#111827] mb-1">Audience</p>
                <p className="text-[10.5px] text-[#6B7280] leading-tight">
                  72% of responses match your target audience
                </p>
              </div>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-[17px] font-semibold text-[#111827] mb-2 tracking-tight">
                Live Validation Tracking
              </h3>
              <p className="text-[13px] text-[#6B7280] leading-relaxed font-normal">
                Monitor responses, completion rates, campaign progress, and emerging signals while your validation
                is active.
              </p>
            </div>
          </div>

          {/* Card 3: Real Human Validation */}
          <div className="bg-white rounded-[24px] p-6 sm:p-7 border border-[#EDF0F7] shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between">
            {/* Visual Preview */}
            <div className="h-[190px] flex items-center justify-center relative overflow-hidden mb-6">
              {/* Back card (faint/behind) */}
              <div className="absolute top-5 bg-white/90 rounded-2xl p-3 shadow-[0_6px_20px_rgba(0,0,0,0.05)] border border-gray-100 w-[240px] transform -rotate-[3deg] opacity-75">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="relative w-7 h-7 rounded-full overflow-hidden bg-red-100 shrink-0">
                    <Image
                      src="/avatar-1.png"
                      alt="Haleemah Abdulazeez"
                      fill
                      sizes="28px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-[#111827] leading-tight">Haleemah Abdulazeez</p>
                    <p className="text-[9.5px] text-[#9CA3AF]">Earner</p>
                  </div>
                  <span className="text-[9.5px] text-[#9CA3AF] ml-auto">12mins ago</span>
                </div>
                <p className="text-[11px] text-[#6B7280] truncate leading-tight">
                  &ldquo;I would love a platform where trusted ...&rdquo;
                </p>
              </div>

              {/* Front card */}
              <div className="absolute bottom-5 bg-white rounded-2xl p-3.5 shadow-[0_10px_28px_rgba(0,0,0,0.08)] border border-gray-100/90 w-[245px] transform rotate-[2deg] transition-transform duration-300 hover:rotate-0">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden bg-blue-100 shrink-0">
                    <Image
                      src="/avatar-2.png"
                      alt="Haleemah Abdulazeez"
                      fill
                      sizes="32px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold text-[#111827] leading-tight">Haleemah Abdulazeez</p>
                    <p className="text-[10px] text-[#9CA3AF]">Earner</p>
                  </div>
                  <span className="text-[10px] text-[#9CA3AF] ml-auto">12mins ago</span>
                </div>
                <p className="text-[11.5px] text-[#374151] leading-snug">
                  &ldquo;I would use it if the prices are competitive.&rdquo;
                </p>
              </div>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-[17px] font-semibold text-[#111827] mb-2 tracking-tight">
                Real Human Validation
              </h3>
              <p className="text-[13px] text-[#6B7280] leading-relaxed font-normal">
                Reach relevant respondents and collect genuine opinions, experiences, and preferences about your
                idea.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Row: 2 Asymmetrical Cards (7 cols : 5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
          {/* Card 4: Go, Pivot or Kill (Wider - 7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-[24px] p-6 sm:p-7 border border-[#EDF0F7] shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between">
            {/* Visual Preview: 3 Fanned Score Cards */}
            <div className="h-[210px] flex items-center justify-center relative overflow-hidden mb-6 px-2">
              <div className="flex items-center justify-center -space-x-4 sm:-space-x-6 w-full">
                {/* Left Card: PIVOT */}
                <div className="w-[155px] sm:w-[170px] bg-[#FFF8EE] rounded-2xl p-3 sm:p-3.5 border border-[#FED7AA]/60 transform -rotate-[7deg] shrink-0 shadow-sm z-0">
                  <p className="text-[11px] font-bold text-[#D97706] truncate">PIVOT – Potential With Ch...</p>
                  <p className="text-[10.5px] font-semibold text-[#1F2937] mt-1">Validation Score: 61 / 100</p>
                  <p className="text-[9px] text-[#78716C] leading-snug mt-1 line-clamp-4">
                    Your idea addresses a real problem, but validation reveals concerns around pricing and the
                    proposed solution. There is potential, but changes may be needed.
                  </p>
                </div>

                {/* Middle Card: GO (Front & Center) */}
                <div className="w-[175px] sm:w-[195px] bg-[#F0FDF4] rounded-2xl p-3.5 sm:p-4 border border-[#BBF7D0] shadow-[0_12px_32px_rgba(0,0,0,0.09)] z-20 shrink-0 transform hover:scale-105 transition-transform duration-300">
                  <p className="text-[12.5px] font-bold text-[#16A34A]">Go - Strong potential</p>
                  <p className="text-[11.5px] font-semibold text-[#111827] mt-1">Validation Score: 82/100</p>
                  <p className="text-[9.5px] text-[#4B5563] leading-relaxed mt-1.5">
                    Your idea shows strong validation signals. Most respondents experience the problem, are
                    interested in your solution, and show willingness to pay.
                  </p>
                </div>

                {/* Right Card: KILL */}
                <div className="w-[155px] sm:w-[170px] bg-[#FFF1F2] rounded-2xl p-3 sm:p-3.5 border border-[#FECDD3] transform rotate-[7deg] shrink-0 shadow-sm z-10">
                  <p className="text-[11px] font-bold text-[#E11D48]">KILL – Weak Validation</p>
                  <p className="text-[10.5px] font-semibold text-[#1F2937] mt-1">Validation Score: 28 / 100</p>
                  <p className="text-[9px] text-[#9F1239]/80 leading-snug mt-1 line-clamp-4">
                    Validation shows limited demand for your idea. Most respondents don&apos;t consider the problem
                    significant enough, and purchase intent is low.
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-[17px] font-semibold text-[#111827] mb-2 tracking-tight">
                Go, Pivot or Kill
              </h3>
              <p className="text-[13px] text-[#6B7280] leading-relaxed font-normal">
                Get a clear recommendation based on your validation data, helping you decide whether to move
                forward, make changes, or rethink the idea.
              </p>
            </div>
          </div>

          {/* Card 5: AI-Powered Insights (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-[24px] p-6 sm:p-7 border border-[#EDF0F7] shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between">
            {/* Visual Preview */}
            <div className="h-[210px] flex items-center justify-center relative overflow-hidden mb-6">
              {/* Subtle background document skeleton */}
              <div className="w-[220px] h-[140px] bg-gray-50/60 rounded-xl border border-gray-100/80 p-4 space-y-2.5 shadow-sm">
                <div className="w-16 h-2 bg-gray-200/50 rounded-full" />
                <div className="w-full h-1.5 bg-gray-200/30 rounded-full" />
                <div className="w-5/6 h-1.5 bg-gray-200/30 rounded-full" />
                <div className="w-4/6 h-1.5 bg-gray-200/30 rounded-full" />
              </div>

              {/* Floating Badge 1: Top Right */}
              <div className="absolute top-4 right-3 sm:right-6 bg-white rounded-2xl px-4 py-3 shadow-[0_10px_26px_rgba(0,0,0,0.08)] border border-gray-100/90 w-[185px] transform rotate-[4deg]">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#16A34A] shrink-0" />
                  <span className="text-[11.5px] font-semibold text-[#111827]">Strong Interest Detected</span>
                </div>
                <p className="text-[10.5px] text-[#6B7280] leading-tight">
                  Interest in the solution is trending upward.
                </p>
              </div>

              {/* Floating Badge 2: Bottom Left */}
              <div className="absolute bottom-4 left-3 sm:left-6 bg-white rounded-2xl px-4 py-3 shadow-[0_10px_26px_rgba(0,0,0,0.08)] border border-gray-100/90 w-[175px] transform -rotate-[4deg]">
                <p className="text-[11px] font-semibold text-[#111827] mb-1">Audience</p>
                <p className="text-[10.5px] text-[#6B7280] leading-tight">
                  72% of responses match your target audience
                </p>
              </div>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-[17px] font-semibold text-[#111827] mb-2 tracking-tight">
                AI-Powered Insights
              </h3>
              <p className="text-[13px] text-[#6B7280] leading-relaxed font-normal">
                Tiqra analyzes your responses to uncover demand, pain points, willingness to pay, objections, and
                important patterns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

