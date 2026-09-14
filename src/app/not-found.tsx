import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FEFEFE] px-4 text-center">
      <div className="w-16 h-16 rounded-2xl bg-[#EDE9FE] flex items-center justify-center mb-4">
        <span className="text-2xl font-bold text-brand-primary">404</span>
      </div>
      <h1 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-2">
        Page Not Found
      </h1>
      <p className="text-[#6B7280] text-sm sm:text-base max-w-md mb-8">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center bg-brand-primary text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-brand-secondary transition-all"
      >
        Back to Home
      </Link>
    </div>
  );
}
