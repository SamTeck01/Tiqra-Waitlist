"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col items-center justify-center bg-[#FEFEFE] px-4 text-center">
        <h2 className="text-2xl font-bold text-[#111827] mb-2">Something went wrong!</h2>
        <p className="text-[#6B7280] text-sm mb-6">An unexpected error occurred.</p>
        <button
          onClick={() => reset()}
          className="inline-flex items-center px-6 py-2.5 rounded-full bg-[#9F4EF5] text-white font-medium hover:bg-[#7C3AED] transition-colors"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
