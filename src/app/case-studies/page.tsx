'use client';

import Section from '@/components/Section';
import Card from '@/components/Card';
import { caseStudies } from '@/data/case-studies';
import FadeIn from '@/components/FadeIn';

export default function CaseStudies() {
  return (
    <div className="flex flex-col relative overflow-hidden min-h-screen">
      {/* Ambient Background blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] right-[5%] w-[45%] h-[45%] bg-primary/10 rounded-full blur-[160px] opacity-30" />
        <div className="absolute bottom-[15%] left-[5%] w-[45%] h-[45%] bg-accent/10 rounded-full blur-[160px] opacity-30" />
      </div>

      <Section className="pt-40 md:pt-56 bg-transparent">
        <div className="max-w-5xl">
          <FadeIn direction="none">
             <div className="flex items-center gap-4 mb-10">
              <span className="w-16 h-[1px] bg-primary/60"></span>
              <span className="text-[12px] font-mono font-bold tracking-[0.5em] uppercase text-primary/80">Our Impact</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-white mb-10 leading-[0.85]">
              Case <span className="text-accent italic">Studies</span>.
            </h1>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-2xl md:text-3xl text-white/90 font-light leading-relaxed max-w-3xl">
              Real problems, technical solutions, and measurable business outcomes. Proving performance through data.
            </p>
          </FadeIn>
        </div>
      </Section>

      <Section className="pt-12 bg-transparent">
        <div className="space-y-16">
          {caseStudies.map((cs, index) => (
            <FadeIn key={cs.id} delay={index * 0.1}>
              <div id={cs.id} className="scroll-mt-32">
                <Card noDefaultPadding className="glass group border-white/10 p-0 overflow-visible">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                    <div className="lg:col-span-4 p-8 md:p-12">
                      <span className="text-[11px] font-mono font-bold tracking-[0.3em] uppercase text-accent mb-6 block">PROJECT {index + 1} / {cs.category}</span>
                      <h2 className="text-4xl font-bold text-white mb-10 leading-tight group-hover:text-primary transition-colors duration-500 tracking-tight">{cs.title}</h2>
                      <div className="flex flex-wrap gap-3">
                        {cs.tools.map(tool => (
                          <span key={tool} className="px-4 py-2 bg-white/5 border border-white/10 text-[11px] font-mono font-bold rounded-full uppercase tracking-widest text-white/40">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="lg:col-span-5 lg:border-l border-white/10 p-8 md:p-12">
                      <div className="mb-12">
                        <h3 className="text-[11px] font-mono font-bold uppercase text-white/30 mb-6 tracking-[0.3em]">The Problem</h3>
                        <p className="text-xl text-white/80 leading-relaxed font-light">{cs.problem}</p>
                      </div>
                      <div>
                        <h3 className="text-[11px] font-mono font-bold uppercase text-white/30 mb-6 tracking-[0.3em]">The Solution</h3>
                        <p className="text-xl text-white/80 leading-relaxed font-light">{cs.solution}</p>
                      </div>
                    </div>
                    <div className="lg:col-span-3 bg-white/[0.03] border-t lg:border-t-0 lg:border-l border-white/10 text-white p-8 md:p-12 flex flex-col justify-center group-hover:bg-primary/5 group-hover:border-primary/20 transition-all duration-700">
                      <h3 className="text-[11px] font-mono font-bold uppercase text-primary mb-10 tracking-[0.3em]">Key Results</h3>
                      <ul className="space-y-8">
                      {cs.results.map((result, index) => (
                        <li key={index} className="flex items-start">
                          <span className="material-symbols-outlined text-secondary mr-5 text-2xl">verified</span>
                          <span className="text-lg font-medium text-white/90 leading-tight">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>
    </div>
  );
}
