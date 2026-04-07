import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ajsal-shereef.vercel.app";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ajsal Shereef Palattuparambil | AI & ML",
    template: "%s | Ajsal Shereef",
  },
  description:
    "Portfolio of Ajsal Shereef Palattuparambil, Ph.D. candidate in Reinforcement Learning and Machine Learning Engineer focused on Generative AI, RAG systems, and Computer Vision.",
  keywords: [
    "Ajsal Shereef",
    "Reinforcement Learning Researcher",
    "Machine Learning Engineer",
    "Generative AI",
    "RAG",
    "Computer Vision",
    "PhD AI Australia",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ajsal Shereef Palattuparambil | AI & ML Portfolio",
    description:
      "Reinforcement Learning, Generative AI, and Computer Vision projects, publications, and experience.",
    url: siteUrl,
    siteName: "Ajsal Shereef Portfolio",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Ajsal Shereef Palattuparambil - AI & ML Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajsal Shereef | AI & ML Portfolio",
    description:
      "Ph.D. candidate and ML engineer working on RL, GenAI, and Computer Vision.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} min-h-screen bg-gradient-to-b from-stone-950 via-stone-950 to-stone-900 text-foreground`}
      >
        <div className="relative min-h-screen">
          <div className="pointer-events-none fixed inset-0 -z-10 opacity-50">
            <div className="absolute -top-40 left-0 h-80 w-80 rounded-full bg-amber-600/15 blur-3xl" />
            <div className="absolute top-40 right-0 h-80 w-80 rounded-full bg-orange-700/10 blur-3xl" />
          </div>
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
