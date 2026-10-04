import type { Metadata } from "next";
import { cases } from "@/data/work";
import { projects } from "@/data/projects";
import { ButtonLink } from "@/components/ui";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Client case studies and recent builds by Bay1 Consulting Group.",
};

export default function WorkPage() {
  const luminous = cases.find((c) => c.id === "luminous") || cases[0];
  const careersuite = cases.find((c) => c.id === "careersuite") || cases[1];

  return (
    <main id="top" className="pt-0">
      {/* Header Band */}
      <section className="bg-navy text-[#F7F7F4] py-16 md:py-24">
        <div className="wrap">
          <div className="label text-steel-lt">Work</div>
          <h1 className="text-[var(--h1)] mt-4 max-w-[16ch] font-semibold leading-[1.02] tracking-[-0.035em]">
            Recent projects and client systems.
          </h1>
          <p className="text-[var(--lead)] text-steel-lt mt-6 max-w-[38rem] leading-relaxed">
            From electrician websites to custom AI application backends, here is what we&apos;ve built and how it runs.
          </p>
        </div>
      </section>

      {/* Case 1: Luminous Electric */}
      <section id="luminous" className="py-[clamp(60px,8vw,120px)] border-b border-mist">
        <div className="wrap grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <div className="label text-ember font-semibold">Featured case study</div>
            <h2 className="text-[var(--h2)] mt-3 font-semibold leading-[1.02] tracking-[-0.035em]">
              {luminous.title}
            </h2>
            <p className="text-steel text-[0.95rem] mt-2 font-medium">{luminous.sector}</p>
            <p className="text-steel text-[var(--lead)] mt-6 leading-relaxed">
              {luminous.summary}
            </p>

            <div className="mt-8">
              <h3 className="font-semibold text-[1.1rem]">Approach</h3>
              <ul className="mt-3 space-y-2 text-steel">
                {luminous.approach.map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-ember font-bold">{i + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold text-[1.1rem]">Tech Stack</h3>
              <div className="flex flex-wrap gap-2 mt-3">
                {luminous.stack.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full bg-off border border-mist text-steel text-sm font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-[10px] bg-off border border-mist">
            <div>
              <h3 className="text-[1.2rem] font-semibold mb-4">Client Facts</h3>
              <div className="space-y-4">
                {luminous.facts?.map((fact) => (
                  <div key={fact.label} className="border-b border-mist pb-3">
                    <b className="text-[1.3rem] text-ink block font-semibold">{fact.label}</b>
                    <span className="text-steel text-sm">{fact.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-steel text-[0.8rem] mt-6 italic">
              {luminous.note || "Results figures to be added once confirmed with the client."}
            </p>
          </div>
        </div>
      </section>

      {/* Case 2: CareerSuite.ai */}
      <section id="careersuite" className="bg-off py-[clamp(60px,8vw,120px)] border-b border-mist">
        <div className="wrap">
          <div className="max-w-[46rem]">
            <div className="label text-steel font-semibold">Product case study</div>
            <h2 className="text-[var(--h2)] mt-3 font-semibold leading-[1.02] tracking-[-0.035em]">
              {careersuite.title}
            </h2>
            <p className="text-steel text-[var(--lead)] mt-4 leading-relaxed">
              {careersuite.summary}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="p-6 rounded-[10px] bg-paper border border-mist">
              <h3 className="font-semibold text-[1.1rem] mb-3">Approach</h3>
              <ul className="space-y-2 text-steel">
                {careersuite.approach.map((step, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-ember font-bold">—</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-[10px] bg-paper border border-mist">
              <h3 className="font-semibold text-[1.1rem] mb-3">Outcomes</h3>
              <ul className="space-y-2 text-steel">
                {careersuite.outcomes.map((outcome, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-ember font-bold">—</span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source & Recent Builds Table */}
      <section id="builds" className="py-[clamp(60px,8vw,120px)]">
        <div className="wrap">
          <div className="sec-head mb-10">
            <div className="label text-steel">Open Source & Tools</div>
            <h2 className="text-[var(--h2)] font-semibold tracking-[-0.035em]">
              Recent builds and repositories
            </h2>
          </div>

          <div className="border-t border-mist divide-y divide-mist">
            {projects.map((project) => (
              <div key={project.id} className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                <div className="md:col-span-5">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-[1.1rem] hover:text-ember transition-colors inline-flex items-center gap-2"
                  >
                    {project.title}
                    <span className="text-xs font-normal text-steel">↗</span>
                  </a>
                  <p className="text-steel text-sm mt-1">{project.description}</p>
                </div>
                <div className="md:col-span-4">
                  <span className="text-steel text-xs font-medium uppercase tracking-wider block mb-1">
                    {project.category}
                  </span>
                  <p className="text-steel text-xs">{project.techStack.join(" · ")}</p>
                </div>
                <div className="md:col-span-3 md:text-right">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-semibold text-ember underline hover:text-ember-ink"
                    >
                      View on GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-[#F7F7F4] py-16 md:py-24">
        <div className="wrap flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <div className="label text-steel-lt">Have a project in mind?</div>
            <h2 className="text-[var(--h2)] mt-2 font-semibold tracking-[-0.035em]">
              Let&apos;s build something that lasts.
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
