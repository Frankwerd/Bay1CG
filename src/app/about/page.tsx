import type { Metadata } from "next";
import { ButtonLink, DisplayHeading, Section, Tag } from "@/components/ui";
import { education, experience } from "@/data/experience";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name} and founder ${site.founder}.`,
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Intro */}
      <Section theme="dark" className="pt-32 pb-16 md:pt-48 md:pb-24">
        <div className="wrap grid gap-12 md:grid-cols-12">
          <div className="md:col-span-8">
            <Tag>Operator led</Tag>
            <DisplayHeading lines={["Engineering studio", "founded in NJ"]} className="mt-6" />
            <div className="fade-up mt-8 space-y-6 text-lg text-stone max-w-2xl">
              <p>
                Bay1 Consulting Group is an engineering studio led by {site.founder}. We train teams, plan where AI fits, and build the websites and software that run it.
              </p>
              <p>
                We do not sell abstract roadmaps or high-level deck presentations. We work alongside operators to eliminate repetitive manual work and ship resilient technical infrastructure.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Experience Timeline */}
      <Section theme="light" className="py-24 md:py-32 border-t border-line">
        <div className="wrap grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Tag tone="plain">Background</Tag>
            <DisplayHeading lines={["Track", "record"]} className="mt-6" />
            <p className="fade-up mt-6 text-ash">
              A history of execution across marketing leadership, AI model evaluation, venture capital, and grant portfolios.
            </p>
          </div>

          <div className="md:col-span-8">
            <h3 className="label text-fg mb-8">Experience</h3>
            <div className="space-y-8 border-t border-bone-2 pt-8">
              {experience.map((item, i) => (
                <div key={i} className="border-b border-bone-2 pb-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="display text-xl text-fg">{item.role}</h4>
                    <span className="label text-ash">{item.period}</span>
                  </div>
                  <p className="label text-signal-deep mt-1">{item.company}</p>
                  <p className="mt-3 text-ash">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Education */}
      <Section theme="dark" className="py-24 md:py-32 border-t border-line">
        <div className="wrap grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Tag>Education</Tag>
            <DisplayHeading lines={["Academic", "foundation"]} className="mt-6" />
          </div>

          <div className="md:col-span-8 space-y-8">
            <div className="border-t border-line pt-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h4 className="display text-2xl text-fg">{education.school}</h4>
                <span className="label text-stone">{education.year}</span>
              </div>
              <p className="text-lg text-stone mt-2">{education.degree}</p>

              <div className="mt-8">
                <p className="label text-fg mb-4">Certifications</p>
                <ul className="space-y-2">
                  {education.certs.map((cert, i) => (
                    <li key={i} className="text-stone">
                      — {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-8">
              <ButtonLink href="/contact" variant="solid">
                Get in touch
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
