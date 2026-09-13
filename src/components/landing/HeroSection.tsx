"use client";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center overflow-hidden pt-28 pb-0"
      style={{ backgroundColor: "#ECEAF8" }}
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(159,78,245,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(159,78,245,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col items-center w-full px-4">

        {/* Social proof pill */}
        <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-sm border border-white/60 rounded-full px-3 py-1.5 shadow-sm mb-7">
          {/* Avatar cluster – overlapping circles */}
          <div className="flex -space-x-2.5">
            {[
              { bg: "#C4B5FD", letter: "A" },
              { bg: "#A78BFA", letter: "S" },
              { bg: "#7C3AED", letter: "F" },
              { bg: "#9F4EF5", letter: "M" },
            ].map((av, i) => (
              <div
                key={i}
                className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white shrink-0"
                style={{ backgroundColor: av.bg }}
              >
                {av.letter}
              </div>
            ))}
          </div>
          <span className="text-xs font-medium text-[#374151]">Join 200+ founder</span>
        </div>

        {/* Headline */}
        <h1 className="text-center font-bold text-[38px] sm:text-[50px] md:text-[58px] lg:text-[64px] leading-[1.08] tracking-[-0.03em] text-[#1A1060] mb-5 whitespace-nowrap">
          <span className="text-[#3B27C1]">Validate</span> your idea before building it
        </h1>

        {/* Subheading */}
        <p className="text-center max-w-lg mx-auto text-[#6B7280] text-sm md:text-base leading-relaxed mb-8">
          AI-powered validation using real human insights, helping you make smarter
          decisions with confidence.
        </p>

        {/* CTA Button */}
        <a
          id="waitlist"
          href="#waitlist"
          className="inline-flex items-center justify-center bg-brand-primary text-white font-semibold text-base px-16 py-4 rounded-2xl hover:bg-brand-secondary transition-all duration-200 hover:shadow-[0_0_32px_rgba(159,78,245,0.45)] active:scale-[0.98] mb-12"
        >
          Join waitlist
        </a>

        {/* ── Dashboard mockup peek ── */}
        <div className="relative w-full max-w-5xl mx-auto">
          {/* Mockup wrapper with anchored floating cards */}
          <div className="relative mx-auto w-full max-w-[760px]">

            {/* Left floating card – AI Insights */}
            <div className="hidden md:flex absolute -left-[167px] -top-6 z-20 flex-col gap-2 w-[215px] bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.13)] p-4">
              <div className="flex items-center gap-2">
                {/* Sparkle icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-brand-primary shrink-0">
                  <path d="M12 2l2.09 6.26L20 10l-5.91 1.74L12 18l-2.09-6.26L4 10l5.91-1.74L12 2z" fill="currentColor" />
                </svg>
                <span className="text-sm font-bold text-[#111827]">AI Insights</span>
              </div>
              <p className="text-[11px] text-[#6B7280] leading-snug">
                Strong demand detected for your idea in the target Market
              </p>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#DCFCE7] text-[#16A34A] text-[11px] font-semibold w-fit">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                High Potentials
              </span>
            </div>

            {/* Centre – Dashboard card */}
            <div className="relative w-full bg-white rounded-t-2xl shadow-[0_-4px_60px_rgba(0,0,0,0.15)] overflow-hidden border border-[#E5E7EB] border-b-0 flex">

              {/* Left Sidebar - gray background */}
              <div className="hidden md:flex flex-col w-[170px] bg-[#F8F9FA] border-r border-[#E5E7EB] p-4 shrink-0">
                {/* Logo - violet */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-5 h-5 rounded-md bg-[#4F46E5] flex items-center justify-center shadow-xs">
                    <span className="text-white text-[10px] font-black">T</span>
                  </div>
                  <span className="text-sm font-bold text-[#4F46E5]">Tiqra</span>
                </div>

                {/* Navigation */}
                <div className="flex flex-col gap-1">
                  {/* Dashboard - selected with violet bg */}
                  <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-[#4F46E5] text-white text-[11px] font-medium shadow-sm">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                    <span>Dashboard</span>
                  </div>

                  {/* Ideas - unselected */}
                  <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-[#9CA3AF] hover:text-[#4B5563] text-[11px] font-medium cursor-pointer transition-colors">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5.76.76 1.23 1.52 1.41 2.5"/></svg>
                    <span>Ideas</span>
                  </div>

                  {/* Wallet - unselected */}
                  <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-[#9CA3AF] hover:text-[#4B5563] text-[11px] font-medium cursor-pointer transition-colors">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
                    <span>Wallet</span>
                  </div>

                  {/* Settings - unselected */}
                  <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-[#9CA3AF] hover:text-[#4B5563] text-[11px] font-medium cursor-pointer transition-colors">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                    <span>Settings</span>
                  </div>
                </div>
              </div>

              {/* Right side: Top bar + main content */}
              <div className="flex-1 flex flex-col min-w-0 bg-[#F8F9FC]">
                {/* App top bar */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-[#F3F4F6] bg-white">
                  {/* Search bar placeholder */}
                  <div className="flex items-center gap-2 bg-[#F8F9FC] border border-[#E5E7EB] rounded-full px-3 py-1.5 w-44">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                    <span className="text-[11px] text-[#9CA3AF]">Search</span>
                  </div>

                  {/* Right actions */}
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#F3F4F6] flex items-center justify-center">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-7 h-7 rounded-full bg-[#EDE9FE] flex items-center justify-center text-[10px] font-bold text-[#4F46E5]">H</div>
                      <div className="hidden sm:block">
                        <p className="text-[10px] font-semibold text-[#111827] leading-none">Haleemah Abdulazeez</p>
                        <p className="text-[9px] text-[#9CA3AF]">Founder</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main dashboard content */}
                <div className="flex-1 p-5">
                  <h2 className="text-base font-bold text-[#111827] mb-0.5">Dashboard</h2>
                  <p className="text-[10px] text-[#9CA3AF] mb-4">Turn your ideas into clear decisions using real user insights.</p>

                  {/* Stat cards */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      {
                        label: "Active ideas",
                        value: "18",
                        iconColor: "#4F46E5",
                        iconBg: "#ffffff",
                        statCardBg: "#4F46E5",
                        textColor: "#ffffff",
                        icon: (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                        ),
                      },
                      {
                        label: "Completed ideas",
                        value: "12",
                        iconColor: "#ffffff",
                        iconBg: "#4F46E5",
                        statCardBg: "#ffffff",
                        textColor: "#111827",
                        icon: (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                        ),
                      },
                      {
                        label: "Total spent",
                        value: "₦120,000.00",
                        iconColor: "#ffffff",
                        iconBg: "#4F46E5",
                        statCardBg: "#ffffff",
                        textColor: "#111827",
                        icon: (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
                        ),
                      },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-xl p-3 flex flex-col gap-2 border border-[#E5E7EB]/50"
                        style={{ backgroundColor: stat.statCardBg }}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] opacity-75" style={{ color: stat.textColor }}>{stat.label}</span>
                          <div
                            className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                            style={{ backgroundColor: stat.iconBg, color: stat.iconColor }}
                          >
                            {stat.icon}
                          </div>
                        </div>
                        <span className="text-lg font-bold" style={{ color: stat.textColor }}>{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right floating card – Top findings */}
            <div className="hidden md:flex absolute -right-[90px] top-6 z-20 flex-col gap-2 w-[210px] bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.13)] p-4 border border-[#F3F4F6]">
              <p className="text-sm font-bold text-[#111827]">Top findings</p>
              <p className="text-[11px] text-[#6B7280] leading-snug">
                76% of the respondents struggle with the current solution
              </p>
              {/* Avatars + count */}
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {["#9F4EF5", "#7C3AED", "#A855F7", "#6D28D9"].map((color, i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-full border-2 border-white shrink-0"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <span className="ml-2 text-[11px] font-semibold text-white bg-brand-primary rounded-full px-2 py-0.5">+20</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
