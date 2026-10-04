import type { Metadata } from "next";
import { ButtonLink, DisplayHeading, Section, Tag } from "@/components/ui";
import { services } from "@/data/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: "AI training, AI strategy, and web development for growing businesses.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Intro Header */}
      <Section theme="dark" className="pt-32 pb-16 md:pt-48 md:pb-24">
        <div className="wrap">
          <Tag>What we do</Tag>
          <DisplayHeading lines={["Clear services", "real outcomes"]} className="mt-6" />
          <p className="fade-up mt-8 max-w-2xl text-lg md:text-xl text-stone">
            We don&apos;t sell generic consulting or endless slide decks. We train your people, map your workflows, and build the software that keeps work moving.
          </p>
        </div>
      </Section>

      {/* Service Blocks */}
      {services.map((service, index) => {
        const isDark = index % 2 === 0;
        return (
          <Section
            key={service.id}
            id={service.id}
            theme={isDark ? "dark" : "light"}
            className="py-24 md:py-32 border-t border-line"
          >
            <div className="wrap grid gap-12 md:grid-cols-12">
              <div className="md:col-span-5">
                <Tag tone={isDark ? "signal" : "plain"}>
                  {service.index} / {service.title}
                </Tag>
                <DisplayHeading lines={service.heading} className="mt-6" />
                <p className={`fade-up mt-6 text-lg ${isDark ? "text-stone" : "text-ash"}`}>
                  {service.summary}
                </p>
                <div className="fade-up mt-8">
                  <p className="label text-fg">Who it&apos;s for</p>
                  <p className={`mt-2 ${isDark ? "text-stone" : "text-ash"}`}>{service.forWho}</p>
                </div>
              </div>

              <div className="md:col-span-7 flex flex-col justify-between">
                <div>
                  <p className="label text-fg">Deliverables</p>
                  <ol className="mt-6 space-y-4">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className={`flex gap-4 ${isDark ? "text-stone" : "text-ash"}`}>
                        <span className={`label ${isDark ? "text-signal" : "text-signal-deep"}`}>
                          0{i + 1}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="mt-12 pt-8 border-t border-line">
                  <ButtonLink href="/contact" variant="solid">
                    Book {service.title}
                  </ButtonLink>
                </div>
              </div>
            </div>
          </Section>
        );
      })}

      {/* CTA Section */}
      <Section theme="dark" className="py-24 md:py-32 border-t border-line">
        <div className="wrap max-w-3xl">
          <Tag>Next steps</Tag>
          <DisplayHeading lines={["Not sure which", "you need?"]} className="mt-6" />
          <p className="fade-up mt-6 text-lg text-stone">
            We start every engagement with a short conversation. Tell us where the time goes in your team and we&apos;ll tell you which track makes sense.
          </p>
          <div className="fade-up mt-8 flex flex-wrap items-center gap-6">
            <ButtonLink href="/contact" variant="solid">
              Book a call
            </ButtonLink>
            <a
              href={`mailto:${site.email}`}
              className="label text-stone transition-colors hover:text-signal"
            >
              {site.email}
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
