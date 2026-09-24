"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const roles = [
  { value: "founder", label: "Founder" },
  { value: "earner", label: "Earner" },
];

const interests = [
  { value: "validate", label: "Validate my business ideas" },
  { value: "earn", label: "Earn by sharing my opinions" },
  { value: "both", label: "Both" },
];

const labelCls = "block text-[16px] leading-[19px] tracking-[-0.3px] text-[#111827]";
const inputCls =
  "mt-1 h-[49px] w-full rounded-xl bg-white px-3 text-[14px] leading-[17px] tracking-[-0.1px] text-[#111827] outline-none ring-1 ring-transparent placeholder:text-[#6B7280] focus:ring-[#4F46E5]";

function RadioGroup({
  name,
  legend,
  options,
  value,
  onChange,
}: {
  name: string;
  legend: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <fieldset>
      <legend className={labelCls}>{legend}</legend>
      <div className="mt-1 flex flex-col gap-3 rounded-xl bg-white p-3 py-4">
        {options.map((o) => (
          <label key={o.value} className="flex w-fit cursor-pointer items-center gap-3">
            <input
              type="radio"
              name={name}
              value={o.value}
              checked={value === o.value}
              onChange={() => onChange(o.value)}
              className="peer sr-only"
              required
            />
            <span className="flex h-[25px] w-[25px] items-center justify-center rounded-full border border-[#F1F5F9] peer-checked:border-[#4F46E5] peer-focus-visible:ring-2 peer-focus-visible:ring-[#4F46E5]/40">
              <span className={`h-[13px] w-[13px] rounded-full ${value === o.value ? "bg-[#4F46E5]" : ""}`} />
            </span>
            <span className="text-[16px] leading-[19px] tracking-[-0.3px] text-[#111827]">{o.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default function WaitlistForm() {
  const router = useRouter();
  const [role, setRole] = useState("");
  const [interest, setInterest] = useState("");
  const [status, setStatus] = useState<"idle" | "loading">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (!role || !interest) {
      setError("Please choose how you're joining and what interests you.");
      return;
    }
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: fd.get("firstName"),
          lastName: fd.get("lastName"),
          email: fd.get("email"),
          role,
          interest,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Something went wrong. Please try again.");
      router.push("/waitlist/success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("idle");
    }
  }

  return (
    <div className="mx-auto w-full max-w-[691px] rounded-[32px] bg-[#F8F9FC] px-5 py-8 md:px-14 md:py-14">
      <h1 className="text-[26px] font-semibold leading-[36px] tracking-[-1px] text-[#111827] md:text-[32px] md:leading-[48px]">
        Be among the first to experience Tiqra.
      </h1>
      <p className="mt-2 text-[16px] leading-[19px] tracking-[-0.3px] text-[#6B7280]">
        Get early access to a smarter way to test your ideas, gather real human insights, and make confident decisions
        before you build.
      </p>

      <form onSubmit={onSubmit} className="mt-12">
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="firstName" className={labelCls}>First Name</label>
            <input id="firstName" name="firstName" required autoComplete="given-name" placeholder="Enter your first name" className={inputCls} />
          </div>
          <div>
            <label htmlFor="lastName" className={labelCls}>Last Name</label>
            <input id="lastName" name="lastName" required autoComplete="family-name" placeholder="Enter your last name" className={inputCls} />
          </div>
          <div>
            <label htmlFor="email" className={labelCls}>Email Address</label>
            <input id="email" name="email" type="email" required autoComplete="email" placeholder="Enter your email address" className={inputCls} />
          </div>
          <RadioGroup name="role" legend="I’m joining as:" options={roles} value={role} onChange={setRole} />
          <RadioGroup name="interest" legend="What are you most interested in?" options={interests} value={interest} onChange={setInterest} />
        </div>

        {error && (
          <p role="alert" className="mt-4 text-[14px] text-[#DC2626]">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="mt-8 flex h-[54px] w-full items-center justify-center rounded-xl bg-[#4F46E5] text-[18px] font-medium leading-[22px] tracking-[-0.4px] text-white transition-colors hover:bg-[#4338CA] disabled:opacity-70"
        >
          {status === "loading" ? "Joining…" : "Join waitlist"}
        </button>
        <p className="mt-3 text-[12px] font-medium leading-[14px] tracking-[-0.1px] text-[#6B7280]">
          By joining the waitlist, you agree to receive updates about Tiqra. We won’t spam you.
        </p>
      </form>
    </div>
  );
}
