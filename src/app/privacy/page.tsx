import type { Metadata } from "next";
import { DisplayHeading, Section, Tag } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${site.name}.`,
};

export default function PrivacyPage() {
  return (
    <Section theme="dark" className="pt-32 pb-24 md:pt-48 md:pb-32">
      <div className="wrap max-w-4xl">
        <Tag>Legal</Tag>
        <DisplayHeading lines={["Privacy", "policy"]} className="mt-6" />

        <div className="mt-12 space-y-8 text-stone font-normal leading-relaxed">
          <section className="space-y-4">
            <h2 className="display text-2xl text-fg">Overview</h2>
            <p>
              Bay1 Consulting Group (&quot;Bay1&quot;, &quot;we&quot;, &quot;our&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect and process information when you visit our website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="display text-2xl text-fg">Analytics</h2>
            <p>
              We use Vercel Analytics to monitor aggregate website usage and performance. Vercel Analytics is cookieless and collects anonymized metrics such as page views and browser types without tracking individual visitors across sites.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="display text-2xl text-fg">Information You Provide</h2>
            <p>
              When you send us an email or submit our contact form, we receive the details you provide (such as your name, email address, company, and message contents). We use this information solely to respond to your inquiry and discuss potential engagements.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="display text-2xl text-fg">Data Sharing & Security</h2>
            <p>
              We do not sell, rent, or trade your personal data. We maintain technical and organizational measures to safeguard any information you send us.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="display text-2xl text-fg">Contact</h2>
            <p>
              If you have questions about this privacy policy, please contact us by email at{" "}
              <a href={`mailto:${site.email}`} className="text-fg hover:text-signal transition-colors">
                {site.email}
              </a>
              .
            </p>
          </section>

          <p className="label text-stone pt-8 border-t border-line">
            Effective Date: October 2026
          </p>
        </div>
      </div>
    </Section>
  );
}
