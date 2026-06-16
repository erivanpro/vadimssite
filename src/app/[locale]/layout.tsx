// Import necessary modules
import { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { getMessages } from "next-intl/server"; // Removing the locale-based logic
import { NextIntlClientProvider } from "next-intl";

// Load custom font
const myFont = localFont({ src: "./font/Poppins-SemiBold.ttf" });

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
    <html lang="en" dir={direction}> {/* Default to English */}
      <head>
        {/* Add favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${myFont.className} antialiased`}>
        {/* Provide messages to the app via NextIntlClientProvider */}
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}


