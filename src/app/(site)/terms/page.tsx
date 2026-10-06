import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${site.name}.`,
};

export default function TermsPage() {
  return (
    <main id="top" className="pt-0">
      <section className="bg-navy text-[#F7F7F4] py-16 md:py-24">
        <div className="wrap">
          <div className="label text-steel-lt">Legal</div>
          <h1 className="text-[length:var(--h1)] mt-4 max-w-[16ch] font-semibold leading-[1.02] tracking-[-0.035em]">
            Terms of Service
          </h1>
        </div>
      </section>

      <section className="py-[clamp(60px,8vw,120px)]">
        <div className="wrap max-w-4xl space-y-8 text-steel leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-[length:var(--h3)] text-ink font-semibold">Acceptance of Terms</h2>
            <p>
              By accessing or using the website operated by {site.name}, you agree to be bound by these Terms of Service. If you do not agree, please do not use this site.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-[length:var(--h3)] text-ink font-semibold">Use of Site</h2>
            <p>
              This website is provided for informational purposes regarding our web design, development, and AI add-on services. You agree to use the site only for lawful purposes and in a manner that does not infringe upon the rights of others.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-[length:var(--h3)] text-ink font-semibold">Intellectual Property</h2>
            <p>
              All content on this site, including text, graphics, logos, and code, is the property of {site.name} or its licensors and is protected by intellectual property laws.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-[length:var(--h3)] text-ink font-semibold">Disclaimer & Limitation of Liability</h2>
            <p>
              This website is provided &quot;as is&quot; without warranties of any kind, express or implied. {site.name} shall not be liable for any indirect, incidental, or consequential damages arising from your use of this site.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-[length:var(--h3)] text-ink font-semibold">Governing Law</h2>
            <p>
              These terms are governed by and construed in accordance with the laws of the State of New Jersey, without regard to its conflict of law principles.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-[length:var(--h3)] text-ink font-semibold">Contact</h2>
            <p>
              For inquiries regarding these terms, please contact us at{" "}
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
