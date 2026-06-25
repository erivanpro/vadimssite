import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const skModernist = localFont({
  src: "./fonts/Sk-Modernist-Regular.otf",
  variable: "--font-sk-modernist",
  display: "swap",
  weight: "400",
  style: "normal",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marbella Private Experience | House Yacht Car",
  description:
    "A connected luxury experience across the private House, Yacht, and chauffeur Car service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${skModernist.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
