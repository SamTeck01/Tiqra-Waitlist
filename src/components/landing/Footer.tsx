import Image from "next/image";
import Link from "next/link";

const columns = [
  {
    title: "Product",
    width: "md:w-[109px]",
    links: [
      { label: "How it works", href: "/#how-it-works" },
      { label: "Features", href: "/#features" },
      { label: "About Us", href: "/#about" },
    ],
  },
  {
    title: "Company",
    width: "md:w-[125px]",
    links: [
      { label: "About TIQRA", href: "/#about" },
      { label: "Contact Us", href: "mailto:hello@tiqra.com" },
      { label: "Career", href: "#" },
    ],
  },
  {
    title: "Legal",
    width: "md:w-[129px]",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Term of Service", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#111827] px-4 pb-10 pt-16 md:px-[70px] md:pb-[70px]">
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-10px] -translate-x-1/2 select-none whitespace-nowrap font-sora text-[40vw] font-bold leading-none tracking-[8px] text-[#E0E7FF]/[0.08] xl:left-[38px] xl:translate-x-0 xl:text-[400px] xl:leading-[600px] xl:top-[-10px]"
      >
        TIQRA
      </span>

      <div className="relative mx-auto max-w-[1300px]">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="md:pt-[19px]">
            <p className="text-[32px] font-semibold leading-[48px] tracking-[0.6px] text-white">TIQRA</p>
            <p className="mt-2 text-[18px] leading-[22px] tracking-[0.4px] text-white/80">
              Validate ideas. Make smarter decisions.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:gap-[97px] md:pr-[13px]">
            {columns.map((c) => (
              <div key={c.title} className={`md:text-center ${c.width}`}>
                <p className="py-2.5 text-[24px] font-medium leading-[29px] tracking-[-0.5px] text-white">{c.title}</p>
                <ul className="mt-3 flex flex-col gap-2">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="block py-2.5 text-[16px] leading-[19px] tracking-[-0.3px] text-white/60 transition-colors hover:text-white"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
          <p className="text-[12px] font-medium leading-[14px] tracking-[-0.1px] text-white">
            © 2026 Tiqra. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="Tiqra on X">
              <Image src="/landing/x.png" alt="" width={32} height={32} className="rounded" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="Tiqra on LinkedIn">
              <Image src="/landing/linkedin.png" alt="" width={32} height={32} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
