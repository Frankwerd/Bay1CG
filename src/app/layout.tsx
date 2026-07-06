import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Bay1 Consulting Group | Enterprise Systems & AI Strategy",
  description: "Advanced systems automation, operational efficiency, and scalable technical architecture for the modern enterprise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
        />
      </head>
      <body
        className={`${inter.variable} font-inter antialiased min-h-screen flex flex-col bg-background text-foreground`}
      >
        <Navbar />
        <main className="flex-grow pt-24">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
