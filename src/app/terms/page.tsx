import type { Metadata } from "next";
import { DisplayHeading, Section, Tag } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${site.name}.`,
};

export default function TermsPage() {
  return (
    <Section theme="dark" className="pt-32 pb-24 md:pt-48 md:pb-32">
      <div className="wrap max-w-4xl">
        <Tag>Legal</Tag>
        <DisplayHeading lines={["Terms of", "service"]} className="mt-6" />

        <div className="mt-12 space-y-8 text-stone font-normal leading-relaxed">
          <section className="space-y-4">
            <h2 className="display text-2xl text-fg">Acceptance of Terms</h2>
            <p>
              By accessing or using the website operated by Bay1 Consulting Group (&quot;Bay1&quot;), you agree to be bound by these Terms of Service. If you do not agree, please do not use this site.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="display text-2xl text-fg">Use of Site</h2>
            <p>
              This website is provided for informational purposes regarding our AI training, AI strategy, and web development services. You agree to use the site only for lawful purposes and in a manner that does not infringe upon the rights of others.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="display text-2xl text-fg">Intellectual Property</h2>
            <p>
              All content on this site, including text, graphics, logos, and code, is the property of Bay1 Consulting Group or its licensors and is protected by intellectual property laws.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="display text-2xl text-fg">Disclaimer & Limitation of Liability</h2>
            <p>
              This website is provided &quot;as is&quot; without warranties of any kind, express or implied. Bay1 Consulting Group shall not be liable for any indirect, incidental, or consequential damages arising from your use of this site.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="display text-2xl text-fg">Governing Law</h2>
            <p>
              These terms are governed by and construed in accordance with the laws of the State of New Jersey, without regard to its conflict of law principles.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="display text-2xl text-fg">Contact</h2>
            <p>
              For inquiries regarding these terms, please contact us at{" "}
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
