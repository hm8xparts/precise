import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Precision Manufacturing for Medical Devices`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "ISO 13485 CNC machining",
    "medical device contract manufacturer",
    "orthopedic implant machining",
    "precision medical components",
    "titanium CNC machining",
    "PEEK machining",
    "Wire EDM medical",
    "Clifton NJ CNC",
    "surgical instrument manufacturing",
    "AS9102 FAI",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  robots: { index: true, follow: true },
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Precision Manufacturing for Medical Devices`,
    description: site.description,
    images: [
      {
        url: `${site.url}/api/og?title=${encodeURIComponent(
          "Precision Manufacturing for Medical Devices",
        )}`,
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Precision Manufacturing for Medical Devices`,
    description: site.description,
    images: [`${site.url}/api/og?title=Precision%20Manufacturing%20for%20Medical%20Devices`],
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    other: process.env.BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
  icons: {
    icon: "/icon",
    apple: "/apple-icon",
  },
  category: "Manufacturing",
};

export const viewport: Viewport = {
  themeColor: "#1B2C5C",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-precise-navy focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <NavBar />
        <main id="main" className="min-h-[60vh]">
          {children}
        </main>
        <Footer />
        {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
        <Analytics />
      </body>
    </html>
  );
}
