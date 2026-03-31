import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ajsal Shereef Palattuparambil | AI & ML",
  description:
    "Portfolio of Ajsal Shereef Palattuparambil – Ph.D. Candidate in Reinforcement Learning and Machine Learning Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-foreground`}
      >
        <div className="relative min-h-screen">
          <div className="pointer-events-none fixed inset-0 -z-10 opacity-60">
            <div className="absolute -top-40 left-0 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />
            <div className="absolute top-40 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
