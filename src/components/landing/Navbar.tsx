"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "How Its Works", href: "/#how-it-works" },
  { label: "Features", href: "/#features" },
  { label: "About Us", href: "/#about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 px-4 pt-4 md:px-[70px] md:pt-9">
      <nav className="relative mx-auto flex h-16 max-w-[1300px] items-center justify-between rounded-full bg-white/50 pl-6 pr-2 shadow-[0_4px_24px_rgba(17,24,39,0.04)] backdrop-blur-xl md:h-[78px] md:pr-3">
        <Link href="/" aria-label="Tiqra home" className="shrink-0">
          <Image src="/landing/logo.png" alt="Tiqra" width={80} height={35} priority className="h-[30px] w-auto md:h-[35px]" />
        </Link>

        <div className="hidden items-center gap-[96px] md:flex">
          <ul className="flex items-center gap-4">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="block px-2.5 py-2.5 text-[16px] font-medium leading-[19px] tracking-[-0.3px] text-[#6B7280] transition-colors hover:text-[#111827]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <Link
            href="/waitlist"
            className="inline-flex h-[54px] w-[217px] items-center justify-center rounded-full bg-[#4F46E5] text-[18px] font-medium leading-[22px] tracking-[-0.4px] text-[#FEFEFE] transition-colors hover:bg-[#4338CA]"
          >
            Join waitlist
          </Link>
        </div>

        <button
          className="rounded-full p-3 text-[#111827] md:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>

        {menuOpen && (
          <div className="absolute inset-x-0 top-full mt-2 flex flex-col gap-1 rounded-3xl bg-white p-4 shadow-[0_4px_32px_rgba(0,0,0,0.08)] md:hidden">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-3 text-[16px] font-medium text-[#6B7280] hover:bg-[#F8F9FC]"
              >
                {l.label}
              </a>
            ))}
            <Link
              href="/waitlist"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex h-[50px] items-center justify-center rounded-full bg-[#4F46E5] text-[16px] font-medium text-white"
            >
              Join waitlist
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
