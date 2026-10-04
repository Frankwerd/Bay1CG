import type { Metadata } from "next";
import { ButtonLink, DisplayHeading, Section, Tag } from "@/components/ui";
import { cases } from "@/data/work";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work & Builds",
  description: "Case studies and open-source builds from Bay1 Consulting Group.",
};

export default function WorkPage() {
  return (
    <>
      {/* Intro Header */}
      <Section theme="dark" className="pt-32 pb-16 md:pt-48 md:pb-24">
        <div className="wrap">
          <Tag>Selected work</Tag>
          <DisplayHeading lines={["Systems built", "results delivered"]} className="mt-6" />
          <p className="fade-up mt-8 max-w-2xl text-lg md:text-xl text-stone">
            Detailed breakdowns of production AI automation, model evaluation work, and open-source software built for real businesses and developers.
          </p>
        </div>
      </Section>

      {/* Case Studies */}
      {cases.map((caseStudy, index) => {
        const isDark = index % 2 === 0;
        return (
          <Section
            key={caseStudy.id}
            id={caseStudy.id}
            theme={isDark ? "dark" : "light"}
            className="py-24 md:py-32 border-t border-line"
          >
            <div className="wrap grid gap-12 md:grid-cols-12">
              <div className="md:col-span-5">
                <Tag tone={isDark ? "signal" : "plain"}>{caseStudy.client}</Tag>
                <DisplayHeading lines={caseStudy.heading} className="mt-6" />
                <p className={`fade-up mt-2 label ${isDark ? "text-stone" : "text-ash"}`}>
                  {caseStudy.sector}
                </p>
                <p className={`fade-up mt-6 text-lg ${isDark ? "text-stone" : "text-ash"}`}>
                  {caseStudy.summary}
                </p>

                <div className="fade-up mt-8">
                  <p className="label text-fg">Services provided</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {caseStudy.services.map((s) => (
                      <span
                        key={s}
                        className={`label border px-2 py-1 ${
                          isDark ? "border-line text-stone" : "border-bone-2 text-ash"
                        }`}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="fade-up mt-8">
                  <p className="label text-fg">Stack</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {caseStudy.stack.map((item) => (
                      <span
                        key={item}
                        className={`label border px-2 py-1 ${
                          isDark ? "border-line text-stone" : "border-bone-2 text-ash"
                        }`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="md:col-span-7 space-y-10">
                <div className="fade-up">
                  <p className="label text-fg">The Problem</p>
                  <p className={`mt-3 ${isDark ? "text-stone" : "text-ash"}`}>{caseStudy.problem}</p>
                </div>

                <div className="fade-up">
                  <p className="label text-fg">Approach</p>
                  <ol className="mt-4 space-y-3">
                    {caseStudy.approach.map((step, i) => (
                      <li key={i} className={`flex gap-4 ${isDark ? "text-stone" : "text-ash"}`}>
                        <span className={`label ${isDark ? "text-signal" : "text-signal-deep"}`}>
                          0{i + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="fade-up">
                  <p className="label text-fg">Outcomes</p>
                  <ul className="mt-3 space-y-2">
                    {caseStudy.outcomes.map((outcome, i) => (
                      <li key={i} className={isDark ? "text-stone" : "text-ash"}>
                        — {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Section>
        );
      })}

      {/* Full Builds Index */}
      <Section theme="dark" className="py-24 md:py-32 border-t border-line">
        <div className="wrap">
          <Tag>Builds index</Tag>
          <DisplayHeading lines={["Open source", "and tools"]} className="mt-6" />
          <p className="fade-up mt-6 max-w-2xl text-lg text-stone">
            Standalone automation tools, API bridges, and AI packages written and maintained by Bay1.
          </p>

          <div className="fade-up mt-12 border-t border-line">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col md:flex-row md:items-center justify-between border-b border-line py-6 gap-4"
              >
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-normal text-fg transition-colors group-hover:text-signal">
                      {project.title}
                    </h3>
                    <span className="label text-stone">{project.category}</span>
                  </div>
                  <p className="mt-2 text-stone">{project.description}</p>
                  <p className="label text-stone mt-3">{project.techStack.join(" · ")}</p>
                </div>
                {project.link && (
                  <div className="shrink-0">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="label inline-flex items-center gap-2 text-fg hover:text-signal transition-colors"
                    >
                      GitHub →
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="fade-up mt-16">
            <ButtonLink href="/contact" variant="solid">
              Discuss a custom build
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
