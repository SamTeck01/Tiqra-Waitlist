"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      {/* Floating pill navbar */}
      <div className="w-full max-w-4xl bg-white/90 backdrop-blur-md border border-[#E5E7EB] rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] px-5 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/tiqra-logo.png"
            alt="Tiqra"
            width={84}
            height={36}
            className="h-7 sm:h-8 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-7">
          {["How Its Works", "Features", "About Us"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                className="text-sm font-medium text-[#374151] hover:text-brand-primary transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#waitlist"
          className="hidden md:inline-flex items-center bg-brand-primary text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-brand-secondary transition-all duration-200 hover:shadow-glow active:scale-[0.98] shrink-0"
        >
          Join waitlist
        </a>

        {/* Hamburger (mobile) */}
        <button
          className="md:hidden p-1.5 rounded-lg text-[#374151]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-4 right-4 mt-2 bg-white border border-[#E5E7EB] rounded-2xl shadow-lg px-5 py-4 flex flex-col gap-3">
          {["How Its Works", "Features", "About Us"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, "-")}`}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-[#374151] hover:text-brand-primary"
            >
              {item}
            </a>
          ))}
          <a
            href="#waitlist"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center bg-brand-primary text-white text-sm font-semibold px-5 py-2.5 rounded-full"
          >
            Join waitlist
          </a>
        </div>
      )}
    </header>
  );
}
