import type { Metadata, Viewport } from "next";
import { Instrument_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Motion from "@/components/Motion";
import { site } from "@/lib/site";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-instrument-sans",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Web design and development · Bayonne, NJ`,
    template: `%s | ${site.short}`,
  },
  description: site.description,
};

export const viewport: Viewport = {
  themeColor: "#0F1E33",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={instrumentSans.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js');",
          }}
        />
      </head>
      <body className="min-h-screen">
        <a
          href="#top"
          className="label sr-only z-[60] bg-ember p-3 text-navy focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <Nav />
        <Motion />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
