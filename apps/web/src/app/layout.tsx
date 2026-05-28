import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://avanzato.agency",
);

export const metadata: Metadata = {
  metadataBase: siteUrl,
  applicationName: "Avanzato",
  title: {
    default: "Avanzato | Premium Web Design and Development Agency",
    template: "%s | Avanzato",
  },
  description:
    "Avanzato builds fast, premium websites, landing pages, and full-stack apps for startups that need sharp design and reliable engineering.",
  keywords: [
    "Avanzato",
    "premium web agency",
    "Next.js development",
    "startup website design",
    "landing page design",
    "full-stack app development",
    "performance optimization",
  ],
  authors: [{ name: "Avanzato Agency" }],
  creator: "Avanzato Agency",
  publisher: "Avanzato Agency",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Avanzato | Premium Web Design and Development Agency",
    description:
      "Fast, polished websites and full-stack digital products for ambitious startups.",
    url: "/",
    siteName: "Avanzato",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Avanzato premium web design and development agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avanzato | Premium Web Design and Development Agency",
    description:
      "Fast, polished websites and full-stack digital products for ambitious startups.",
    images: ["/opengraph-image"],
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
