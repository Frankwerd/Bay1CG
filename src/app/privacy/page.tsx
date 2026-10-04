import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${site.name}.`,
};

export default function PrivacyPage() {
  return (
    <main id="top" className="pt-0">
      <section className="bg-navy text-[#F7F7F4] py-16 md:py-24">
        <div className="wrap">
          <div className="label text-steel-lt">Legal</div>
          <h1 className="text-[var(--h1)] mt-4 max-w-[16ch] font-semibold leading-[1.02] tracking-[-0.035em]">
            Privacy Policy
          </h1>
        </div>
      </section>

      <section className="py-[clamp(60px,8vw,120px)]">
        <div className="wrap max-w-4xl space-y-8 text-steel leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-[var(--h3)] text-ink font-semibold">Overview</h2>
            <p>
              {site.name} (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect and process information when you visit our website.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-[var(--h3)] text-ink font-semibold">Analytics</h2>
            <p>
              We use Vercel Analytics to monitor aggregate website usage and performance. Vercel Analytics is cookieless and collects anonymized metrics such as page views and browser types without tracking individual visitors across sites.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-[var(--h3)] text-ink font-semibold">Information You Provide</h2>
            <p>
              When you send us an email or submit our contact form, we receive the details you provide (such as your name, email address, company name, and message contents). We use this information solely to respond to your inquiry and discuss potential engagements.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-[var(--h3)] text-ink font-semibold">Data Sharing & Security</h2>
            <p>
              We do not sell, rent, or trade your personal data. We maintain technical and organizational measures to safeguard any information you send us.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-[var(--h3)] text-ink font-semibold">Contact</h2>
            <p>
              If you have questions about this privacy policy, please contact us by email at{" "}
              <a href={`mailto:${site.email}`} className="text-ember hover:underline font-semibold">
                {site.email}
              </a>
              .
            </p>
          </div>

          <p className="text-sm text-steel pt-8 border-t border-mist">
            Effective Date: October 2026
          </p>
        </div>
      </section>
    </main>
  );
}
