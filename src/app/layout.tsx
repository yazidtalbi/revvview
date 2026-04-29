import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "revvview - Request-First UI Feedback",
  description: "Marketplace for website audits.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrumentSans.variable} font-sans antialiased`}>
      <body className="min-h-screen bg-background text-foreground flex flex-col">
        {children}
        <Footer />
      </body>
    </html>
  );
}
