import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111828] text-white pt-10 sm:pt-14 pb-10 relative overflow-hidden">
      {/* Giant TIQRA Watermark in background */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none select-none flex items-end justify-center overflow-hidden z-0"
        aria-hidden="true"
      >
        <svg
          className="w-full max-w-7xl h-auto translate-y-[22%] opacity-100"
          viewBox="0 0 1000 240"
          fill="#222838"
        >
          <text
            x="50%"
            y="82%"
            textAnchor="middle"
            fontSize="230"
            fontWeight="900"
            letterSpacing="0.06em"
            fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          >
            TIQRA
          </text>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Main Grid: Left brand + Right columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 sm:pb-16 items-start">
          {/* Brand Info (Left side) */}
          <div className="lg:col-span-5">
            <span className="text-white font-bold text-[20px] tracking-wide block">
              TIQRA
            </span>
            <p className="text-[#8E9CAE] text-[13.5px] mt-2 font-normal">
              Validate ideas. Make smarter decisions.
            </p>
          </div>

          {/* Right Columns: Product, Company, Legal */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-6">
            {/* Product */}
            <div>
              <h4 className="text-[15px] font-medium text-white mb-4">Product</h4>
              <ul className="space-y-3">
                {[
                  { name: "How it works", href: "#how-it-works" },
                  { name: "Features", href: "#features" },
                  { name: "About Us", href: "#about-us" },
                ].map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-[13.5px] text-[#8E9CAE] hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-[15px] font-medium text-white mb-4">Company</h4>
              <ul className="space-y-3">
                {[
                  { name: "About TIQRA", href: "#about-us" },
                  { name: "Contact Us", href: "#contact" },
                  { name: "Career", href: "#career" },
                ].map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-[13.5px] text-[#8E9CAE] hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-[15px] font-medium text-white mb-4">Legal</h4>
              <ul className="space-y-3">
                {[
                  { name: "Privacy Policy", href: "#privacy" },
                  { name: "Term of Service", href: "#terms" },
                ].map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-[13.5px] text-[#8E9CAE] hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Horizontal Divider Line */}
        <div className="border-t border-[#1E293B]" />

        {/* Bottom bar: Copyright & Socials */}
        <div className="pt-6 flex flex-row items-center justify-between gap-4">
          <p className="text-[#64748B] text-xs sm:text-[13px]">
            © 2026 Tiqra. All rights reserved.
          </p>

          <div className="flex items-center gap-2.5">
            {/* X (formerly Twitter) */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (formerly Twitter)"
              className="w-7 h-7 rounded-[5px] bg-[#1E2330] border border-white/10 flex items-center justify-center text-white/90 hover:text-white hover:bg-[#252c3d] transition-colors"
            >
              <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.258 5.63 5.906-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-7 h-7 rounded-[5px] bg-[#0A66C2] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
            >
              <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

