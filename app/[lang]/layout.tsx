import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { notFound } from "next/navigation";

import { LanguageProvider } from "../language-provider";
import { getDictionary } from "../lib/dictionaries";
import { isLocale, locales, resolveLocale } from "../lib/locales";
import "../globals.css";

const skModernist = localFont({
  src: "../fonts/Sk-Modernist-Regular.otf",
  variable: "--font-sk-modernist",
  display: "swap",
  weight: "400",
  style: "normal",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type LocaleLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{
    lang: string;
  }>;
}>;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = resolveLocale(lang);
  const dictionary = getDictionary(locale);

  return {
    title: dictionary.metadata.home.title,
    description: dictionary.metadata.home.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        es: "/es",
        fr: "/fr",
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const dictionary = getDictionary(lang);

  return (
    <html
      lang={lang}
      className={`${skModernist.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <LanguageProvider
          common={dictionary.common}
          copy={dictionary.language}
          locale={lang}
        >
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
