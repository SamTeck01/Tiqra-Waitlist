import type { Metadata, Viewport } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });

export const metadata: Metadata = {
  title: "Tiqra – Validate your idea before building it",
  description:
    "AI-powered validation using real human insights, helping you make smarter decisions with confidence.",
  keywords: ["startup validation", "market research", "founder tools", "customer discovery"],
  icons: { icon: "/landing/logo.png" },
  openGraph: {
    title: "Tiqra – Validate your idea before building it",
    description:
      "AI-powered validation using real human insights, helping you make smarter decisions with confidence.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${sora.variable}`}>
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
