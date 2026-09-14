import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tiqra – Validate your idea before building it",
  description:
    "AI-powered validation using real human insights, helping you make smarter decisions without the guesswork. Join 200+ founders on Tiqra.",
  keywords: ["startup validation", "market research", "founder tools", "customer discovery"],
  openGraph: {
    title: "Tiqra – Validate your idea before building it",
    description:
      "AI-powered validation using real human insights, helping you make smarter decisions without the guesswork.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className={`antialiased ${GeistSans.className}`}>
        {children}
      </body>
    </html>
  );
}
