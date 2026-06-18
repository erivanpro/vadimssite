// Import necessary modules
import { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { getMessages } from "next-intl/server"; // Removing the locale-based logic
import { NextIntlClientProvider } from "next-intl";
import CookieWindow from "../components/CookieWindow/CookieWindow";
import PageTransition from "../components/motion/PageTransition";

const modernist = localFont({
  src: "../fonts/Sk-Modernist-Regular.otf",
  display: "swap",
  variable: "--font-modernist",
});

export const metadata: Metadata = {
  title: "Limitless",
  description: "Louer une voiture",
  icons: {
    icon: "/favicon.ico", // Path relative to the public folder
  },
};

// Define Props type
type Props = {
  children: React.ReactNode;
};

// Async function for RootLayout
export default async function RootLayout({
  children,
}: Readonly<Props>) {
  // Fetch messages for the default language (you can set this to a static locale)
  let messages;
  try {
    messages = await getMessages(); // Default messages
  } catch (error) {
    console.error("Failed to load messages", error);
    return <p>Error loading content</p>; // Show an error message if messages can't be loaded
  }

  // Set a default direction (e.g., left-to-right as default)
  const direction = "ltr";

  return (
    <html lang="en" dir={direction}>
      <head>
        {/* Add favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta
          name="google-site-verification"
          content="6sbsxa7mlHIjTAh5Nd94xpw8-H4fJ9qARSscnmx9fEE"
        />
      </head>
      <body className={`${modernist.variable} antialiased`}>
        {/* Provide messages to the app via NextIntlClientProvider */}
        <NextIntlClientProvider messages={messages}>
          <PageTransition>{children}</PageTransition>
          <CookieWindow />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
