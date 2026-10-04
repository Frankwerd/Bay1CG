import HomeScene from "@/components/scene/HomeScene";
import { ButtonLink, DisplayHeading, Section, Tag } from "@/components/ui";
import { cases } from "@/data/work";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { site } from "@/lib/site";

const processSteps = [
  {
    num: "01",
    title: "Audit",
    desc: "We sit with your team and map where the hours go.",
  },
  {
    num: "02",
    title: "Plan",
    desc: "A ranked list of what to fix first, with costs and risks.",
  },
  {
    num: "03",
    title: "Build",
    desc: "Training, tools and sites, shipped in weeks.",
  },
  {
    num: "04",
    title: "Hand off",
    desc: "Docs, recordings and office hours so it sticks.",
  },
];

export default function Home() {
  const luminous = cases[0];
  const handshake = cases[1];
  const recentBuilds = projects.slice(0, 5);

  return (
    <>
      <HomeScene />

      {/* Stage 0: Hero */}
      <Section theme="dark" stage={0} className="flex min-h-screen items-center py-24 md:py-32">
        <div className="wrap grid gap-8 md:grid-cols-12">
          <div className="relative z-10 flex flex-col justify-center md:col-span-7">
            <div>
              <Tag>{site.name}</Tag>
            </div>
            <DisplayHeading as="h1" size="xl" lines={["AI that your", "team uses"]} className="mt-6" />
            <p className="fade-up mt-8 max-w-xl text-lg md:text-xl text-stone">{site.description}</p>
            <div className="fade-up mt-10 flex flex-wrap gap-4">
              <ButtonLink href="/contact" variant="solid">
                Book a call
              </ButtonLink>
              <ButtonLink href="/work" variant="line">
                See the work
              </ButtonLink>
            </div>
            <div className="fade-up mt-16 flex flex-wrap gap-6 border-t border-line pt-6 text-sm text-stone">
              <span className="label text-fg">AI training</span>
              <span className="label text-fg">AI strategy</span>
              <span className="label text-fg">Web development</span>
              <span className="label text-stone">{site.location}</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Stage 1: Problem Statement */}
      <Section theme="light" stage={1} className="flex min-h-screen items-center py-24 md:py-32">
        <div className="wrap grid gap-8 md:grid-cols-12">
          <div className="relative z-10 flex flex-col justify-center md:col-span-7">
            <Tag tone="plain">The gap</Tag>
            <DisplayHeading lines={["Too many tools", "not enough time"]} className="mt-6" />
            <p className="fade-up mt-8 max-w-xl text-xl md:text-2xl font-normal text-ash leading-relaxed">
              Most teams already pay for AI. Few have changed how they work. We fix the gap between the license and the result.
            </p>
          </div>
        </div>
      </Section>

      {/* Stage 2: Service 01 */}
      <Section theme="dark" stage={2} className="flex min-h-screen items-center py-24 md:py-32">
        <div className="wrap grid gap-8 md:grid-cols-12">
          <div className="relative z-10 flex flex-col justify-center md:col-span-7">
            <div>
              <Tag>01 / AI training</Tag>
            </div>
            <DisplayHeading lines={services[0].heading} className="mt-6" />
            <p className="fade-up mt-6 max-w-xl text-lg text-stone">{services[0].summary}</p>
            <div className="fade-up mt-8">
              <p className="label text-fg">Who it&apos;s for</p>
              <p className="mt-2 max-w-xl text-stone">{services[0].forWho}</p>
            </div>
            <div className="fade-up mt-8">
              <p className="label text-fg">Deliverables</p>
              <ol className="mt-4 space-y-3">
                {services[0].deliverables.map((item, i) => (
                  <li key={i} className="flex gap-4 text-stone">
                    <span className="label text-signal">0{i + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="fade-up mt-10">
              <ButtonLink href="/services#ai-training" variant="line">
                Learn about AI training
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      {/* Stage 3: Service 02 */}
      <Section theme="dark" stage={3} className="flex min-h-screen items-center py-24 md:py-32">
        <div className="wrap grid gap-8 md:grid-cols-12">
          <div className="relative z-10 flex flex-col justify-center md:col-span-7">
            <div>
              <Tag>02 / AI strategy</Tag>
            </div>
            <DisplayHeading lines={services[1].heading} className="mt-6" />
            <p className="fade-up mt-6 max-w-xl text-lg text-stone">{services[1].summary}</p>
            <div className="fade-up mt-8">
              <p className="label text-fg">Who it&apos;s for</p>
              <p className="mt-2 max-w-xl text-stone">{services[1].forWho}</p>
            </div>
            <div className="fade-up mt-8">
              <p className="label text-fg">Deliverables</p>
              <ol className="mt-4 space-y-3">
                {services[1].deliverables.map((item, i) => (
                  <li key={i} className="flex gap-4 text-stone">
                    <span className="label text-signal">0{i + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="fade-up mt-10">
              <ButtonLink href="/services#ai-strategy" variant="line">
                Learn about AI strategy
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      {/* Stage 4: Service 03 */}
      <Section theme="dark" stage={4} className="flex min-h-screen items-center py-24 md:py-32">
        <div className="wrap grid gap-8 md:grid-cols-12">
          <div className="relative z-10 flex flex-col justify-center md:col-span-7">
            <div>
              <Tag>03 / Web development</Tag>
            </div>
            <DisplayHeading lines={services[2].heading} className="mt-6" />
            <p className="fade-up mt-6 max-w-xl text-lg text-stone">{services[2].summary}</p>
            <div className="fade-up mt-8">
              <p className="label text-fg">Who it&apos;s for</p>
              <p className="mt-2 max-w-xl text-stone">{services[2].forWho}</p>
            </div>
            <div className="fade-up mt-8">
              <p className="label text-fg">Deliverables</p>
              <ol className="mt-4 space-y-3">
                {services[2].deliverables.map((item, i) => (
                  <li key={i} className="flex gap-4 text-stone">
                    <span className="label text-signal">0{i + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="fade-up mt-10">
              <ButtonLink href="/services#web-development" variant="line">
                Learn about Web development
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      {/* Stage 5: Featured Client */}
      <Section theme="light" stage={5} className="flex min-h-screen items-center py-24 md:py-32">
        <div className="wrap grid gap-8 md:grid-cols-12">
          <div className="relative z-10 flex flex-col justify-center md:col-span-7">
            <div>
              <Tag tone="plain">Featured client</Tag>
            </div>
            <DisplayHeading lines={luminous.heading} className="mt-6" />
            <p className="fade-up mt-2 label text-ash">{luminous.sector}</p>
            <p className="fade-up mt-6 max-w-xl text-lg text-ash">{luminous.summary}</p>

            <div className="fade-up mt-8">
              <p className="label text-fg">Approach</p>
              <ol className="mt-4 space-y-3">
                {luminous.approach.map((step, i) => (
                  <li key={i} className="flex gap-4 text-ash">
                    <span className="label text-signal-deep">0{i + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="fade-up mt-8">
              <p className="label text-fg">Stack</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {luminous.stack.map((item) => (
                  <span key={item} className="label border border-bone-2 px-2 py-1 text-ash">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="fade-up mt-8">
              <p className="label text-fg">Outcomes</p>
              <ul className="mt-3 space-y-2">
                {luminous.outcomes.map((outcome, i) => (
                  <li key={i} className="text-ash">
                    — {outcome}
                  </li>
                ))}
              </ul>
            </div>

            <div className="fade-up mt-10">
              <ButtonLink href="/work#luminous" variant="line">
                Read the case
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      {/* Stage 6: Proof & Recent Builds */}
      <Section theme="dark" stage={6} className="flex min-h-screen items-center py-24 md:py-32">
        <div className="wrap grid gap-12 md:grid-cols-12">
          <div className="relative z-10 flex flex-col justify-center md:col-span-7">
            <div>
              <Tag>Proof</Tag>
            </div>
            <DisplayHeading lines={handshake.heading} className="mt-6" />
            <p className="fade-up mt-2 label text-stone">{handshake.sector}</p>
            <p className="fade-up mt-6 max-w-xl text-lg text-stone">{handshake.summary}</p>
            <div className="fade-up mt-6">
              <ul className="space-y-2">
                {handshake.outcomes.map((outcome, i) => (
                  <li key={i} className="text-stone">
                    — {outcome}
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Builds Table */}
            <div className="fade-up mt-16">
              <h3 className="label text-fg mb-6">Recent builds</h3>
              <div className="border-t border-line">
                {recentBuilds.map((project) => (
                  <a
                    key={project.id}
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex flex-col sm:flex-row sm:items-center justify-between border-b border-line py-4 transition-colors"
                  >
                    <div>
                      <p className="font-normal text-fg transition-colors group-hover:text-signal">
                        {project.title}
                      </p>
                      <p className="text-sm text-stone">{project.description}</p>
                    </div>
                    <div className="mt-2 sm:mt-0 sm:text-right shrink-0">
                      <span className="label text-stone">{project.category}</span>
                      <p className="label text-stone mt-1">{project.techStack.join(" · ")}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Stage 7: Process */}
      <Section theme="light" stage={7} className="flex min-h-screen items-center py-24 md:py-32">
        <div className="wrap grid gap-8 md:grid-cols-12">
          <div className="relative z-10 flex flex-col justify-center md:col-span-7">
            <div>
              <Tag tone="plain">Process</Tag>
            </div>
            <DisplayHeading lines={["How we", "work"]} className="mt-6" />

            <div className="fade-up mt-12 space-y-8">
              {processSteps.map((step) => (
                <div key={step.num} className="border-b border-bone-2 pb-6">
                  <div className="flex items-baseline gap-4">
                    <span className="label text-signal-deep">{step.num}</span>
                    <h3 className="display text-2xl text-fg">{step.title}</h3>
                  </div>
                  <p className="mt-2 text-ash pl-10">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Stage 8: CTA */}
      <Section theme="dark" stage={8} className="flex min-h-screen items-center py-24 md:py-32">
        <div className="wrap grid gap-8 md:grid-cols-12">
          <div className="relative z-10 flex flex-col justify-center md:col-span-7">
            <div>
              <Tag>Get started</Tag>
            </div>
            <DisplayHeading lines={["Let's put AI", "to work"]} className="mt-6" />
            <p className="fade-up mt-8 max-w-xl text-xl text-stone">
              Tell us about your team, your tools, or the project you want off your plate.
            </p>

            <div className="fade-up mt-10 flex flex-wrap items-center gap-6">
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
        </div>
      </Section>
    </>
  );
}
