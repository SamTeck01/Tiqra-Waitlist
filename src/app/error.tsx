"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FEFEFE] px-4 text-center">
      <h2 className="text-2xl font-bold text-[#111827] mb-2">Something went wrong!</h2>
      <p className="text-[#6B7280] text-sm mb-6">An unexpected error occurred.</p>
      <button
        onClick={() => reset()}
        className="inline-flex items-center px-6 py-2.5 rounded-full bg-brand-primary text-white font-medium hover:bg-brand-secondary transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
