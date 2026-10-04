import type { Metadata, Viewport } from "next";
import { Martian_Mono, Schibsted_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Motion from "@/components/Motion";
import { site } from "@/lib/site";
import "./globals.css";

const martian = Martian_Mono({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-martian",
});

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-schibsted",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | AI training, AI strategy and web development`,
    template: `%s | ${site.short}`,
  },
  description: site.description,
};

export const viewport: Viewport = {
  themeColor: "#14110f",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" className={`${martian.variable} ${schibsted.variable}`} suppressHydrationWarning>
      <head>
        {/* Hide reveal targets before first paint so they animate in instead of flashing. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "matchMedia('(prefers-reduced-motion: reduce)').matches||document.documentElement.classList.add('js-motion')",
          }}
        />
      </head>
      <body className="min-h-screen">
        <a href="#main" className="label sr-only z-[60] bg-signal p-3 text-carbon focus:not-sr-only focus:fixed focus:top-3 focus:left-3">
          Skip to content
        </a>
        <Nav />
        <Motion />
        <main id="main">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
