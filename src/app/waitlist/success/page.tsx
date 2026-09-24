import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "You're on the list! – Tiqra",
};

export default function WaitlistSuccessPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-4 py-16">
      <div className="flex w-full max-w-[776px] flex-col items-center text-center">
        <Image src="/landing/success-check.png" alt="" width={172} height={172} priority />
        <h1 className="mt-4 text-[32px] font-bold leading-[48px] tracking-[-1.5px] text-[#111827] md:text-[40px] md:leading-[60px] md:tracking-[-2px]">
          You&apos;re on the list!
        </h1>
        <p className="mt-3 max-w-[728px] text-[16px] leading-[25px] tracking-[0.4px] text-[#6B7280] md:text-[18px] md:leading-[27px]">
          Thank you for joining Tiqra. You&apos;re now one step closer to testing your ideas, getting real human insights,
          and making smarter decisions before you build.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex h-[54px] w-full max-w-[582px] items-center justify-center rounded-xl bg-[#4F46E5] text-[18px] font-medium leading-[22px] tracking-[-0.4px] text-white transition-colors hover:bg-[#4338CA]"
        >
          Back to Tiqra
        </Link>
      </div>
    </main>
  );
}
