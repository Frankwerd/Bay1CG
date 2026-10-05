import type { Metadata } from "next";
import { services } from "@/data/services";
import { ButtonLink } from "@/components/ui";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web design and development for small businesses, plus practical AI add-ons that save real time.",
};

export default function ServicesPage() {
  const webDev = services[0];
  const aiAddons = services[1];

  return (
    <main id="top" className="pt-0">
      {/* Page Header */}
      <section className="bg-navy text-[#F7F7F4] py-16 md:py-24">
        <div className="wrap">
          <div className="label text-steel-lt">Services</div>
          <h1 className="text-[length:var(--h1)] mt-4 max-w-[16ch] font-semibold leading-[1.02] tracking-[-0.035em]">
            Web design first. AI when it saves real time.
          </h1>
          <p className="text-[length:var(--lead)] text-steel-lt mt-6 max-w-[38rem] leading-relaxed">
            We build websites that look as good as your work and bring in new customers, then add custom AI tools when they simplify how your business runs.
          </p>
        </div>
      </section>

      {/* Web design and development (Primary) */}
      <section id="web-development" className="py-[clamp(60px,8vw,120px)] border-b border-mist">
        <div className="wrap">
          <div className="max-w-[46rem]">
            <div className="label text-ember font-semibold">Primary service</div>
            <h2 className="text-[length:var(--h2)] mt-3 font-semibold leading-[1.02] tracking-[-0.035em]">
              {webDev.title}
            </h2>
            <p className="text-steel text-[length:var(--lead)] mt-4 leading-relaxed">
              {webDev.summary}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {webDev.items.map((item) => (
              <div key={item.title} className="p-6 rounded-[10px] bg-off border border-mist">
                <h3 className="text-[length:var(--h3)] font-semibold tracking-tight">{item.title}</h3>
                <p className="text-steel mt-2 text-[0.95rem]">{item.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-[10px] bg-paper border border-mist">
            <h3 className="text-[length:var(--h3)] font-semibold">What&apos;s included in every web build</h3>
            <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-steel">
              <li className="flex gap-3 items-baseline">
                <span className="text-ember font-bold">—</span>
                <span>Fast, responsive design tuned for mobile and desktop</span>
              </li>
              <li className="flex gap-3 items-baseline">
                <span className="text-ember font-bold">—</span>
                <span>Clear copy focused on calls and quote requests</span>
              </li>
              <li className="flex gap-3 items-baseline">
                <span className="text-ember font-bold">—</span>
                <span>Contact and quote forms wired to your email or CRM</span>
              </li>
              <li className="flex gap-3 items-baseline">
                <span className="text-ember font-bold">—</span>
                <span>Search and social preview optimization</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* AI Add-ons (Secondary) */}
      <section id="ai-add-ons" className="bg-off py-[clamp(60px,8vw,120px)] border-b border-mist">
        <div className="wrap">
          <div className="max-w-[46rem]">
            <div className="label text-steel font-semibold">Secondary add-on</div>
            <h2 className="text-[length:var(--h2)] mt-3 font-semibold leading-[1.02] tracking-[-0.035em]">
              {aiAddons.title}
            </h2>
            <p className="text-steel text-[length:var(--lead)] mt-4 leading-relaxed">
              {aiAddons.summary}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {aiAddons.items.map((item) => (
              <div key={item.title} className="p-6 rounded-[10px] bg-paper border border-mist">
                <h3 className="text-[1.2rem] font-semibold tracking-tight">{item.title}</h3>
                <p className="text-steel mt-2 text-[0.95rem]">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy text-[#F7F7F4] py-16 md:py-24">
        <div className="wrap flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <div className="label text-steel-lt">Ready to start?</div>
            <h2 className="text-[length:var(--h2)] mt-2 font-semibold tracking-[-0.035em]">
              Let&apos;s build a website that works for you.
            </h2>
          </div>
          <ButtonLink href="/contact" variant="ember" className="shrink-0">
            Start a project
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}
