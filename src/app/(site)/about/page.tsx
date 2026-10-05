import type { Metadata } from "next";
import { education, experience } from "@/data/experience";
import { site } from "@/lib/site";
import { ButtonLink } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Francis John Libutti and Bay1 Consulting Group in Bayonne, NJ.",
};

export default function AboutPage() {
  return (
    <main id="top" className="pt-0">
      {/* Header Band */}
      <section className="bg-navy text-[#F7F7F4] py-16 md:py-24">
        <div className="wrap">
          <div className="label text-steel-lt">About</div>
          <h1 className="text-[length:var(--h1)] mt-4 max-w-[16ch] font-semibold leading-[1.02] tracking-[-0.035em]">
            {site.founder}
          </h1>
          <p className="text-[length:var(--lead)] text-steel-lt mt-6 max-w-[38rem] leading-relaxed">
            Founder of {site.name}, based in {site.location}. Building websites and practical AI systems for small businesses.
          </p>
        </div>
      </section>

      {/* Story / Mission */}
      <section className="py-[clamp(60px,8vw,120px)] border-b border-mist">
        <div className="wrap grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <h2 className="text-[length:var(--h2)] font-semibold tracking-[-0.035em] leading-[1.05]">
              Small businesses deserve <em className="not-italic text-ember">the same caliber of tools</em> as big firms.
            </h2>
          </div>
          <div className="md:col-span-7 space-y-6 text-steel text-[1.05rem] leading-relaxed">
            <p>
              Francis John Libutti started {site.name} in Bayonne to bring high-quality web design and practical AI automation to local businesses.
            </p>
            <p>
              Instead of passing work to overseas agencies or hiding behind bloated project management layers, every site and tool is scoped, engineered, and supported directly by Francis.
            </p>
            <p>
              Whether it&apos;s redesigning a contractor&apos;s website or building an automated quote system, the focus is always on outcomes: saving hours and booking more jobs.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="bg-off py-[clamp(60px,8vw,120px)] border-b border-mist">
        <div className="wrap">
          <div className="label text-steel mb-8">Work Experience</div>

          <div className="space-y-8">
            {experience.map((role) => (
              <div
                key={`${role.company}-${role.period}`}
                className="p-6 rounded-[10px] bg-paper border border-mist grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline"
              >
                <div className="md:col-span-4">
                  <h3 className="font-semibold text-[1.1rem] text-ink">{role.company}</h3>
                  <p className="text-steel text-sm">{role.role}</p>
                </div>
                <div className="md:col-span-2 text-steel text-sm font-medium">
                  {role.period}
                </div>
                <div className="md:col-span-6 text-steel text-sm leading-relaxed">
                  {role.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-[clamp(60px,8vw,120px)] border-b border-mist">
        <div className="wrap">
          <div className="label text-steel mb-8">Education & Certifications</div>

          <div className="p-8 rounded-[10px] bg-paper border border-mist">
            <h3 className="text-[length:var(--h3)] font-semibold">{education.school}</h3>
            <p className="text-steel mt-1 font-medium">{education.degree} ({education.year})</p>

            <div className="mt-6 pt-6 border-t border-mist">
              <span className="text-xs font-semibold text-steel uppercase tracking-wider block mb-3">
                Professional Certifications
              </span>
              <div className="flex flex-wrap gap-3">
                {education.certs.map((cert) => (
                  <span key={cert} className="px-3 py-1.5 rounded-full bg-off border border-mist text-steel text-sm font-medium">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-[#F7F7F4] py-16 md:py-24">
        <div className="wrap flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <div className="label text-steel-lt">Get in touch</div>
            <h2 className="text-[length:var(--h2)] mt-2 font-semibold tracking-[-0.035em]">
              Ready to work together?
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
