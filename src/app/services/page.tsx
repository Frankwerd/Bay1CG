'use client';

import Section from '@/components/Section';
import Card from '@/components/Card';
import { services } from '@/data/services';
import FadeIn from '@/components/FadeIn';

export default function Services() {
  return (
    <div className="flex flex-col relative overflow-hidden min-h-screen">
       {/* Ambient Background blobs */}
       <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[5%] left-[5%] w-[45%] h-[45%] bg-primary/10 rounded-full blur-[160px] opacity-40 animate-pulse" />
        <div className="absolute bottom-[5%] right-[5%] w-[45%] h-[45%] bg-secondary/10 rounded-full blur-[160px] opacity-40" />
      </div>

      <Section className="pt-40 md:pt-56 bg-transparent">
        <div className="max-w-5xl">
          <FadeIn direction="none">
            <div className="flex items-center gap-4 mb-10">
              <span className="w-16 h-[1px] bg-primary/60"></span>
              <span className="text-[12px] font-mono font-bold tracking-[0.5em] uppercase text-primary/80">Capabilities</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-white mb-10 leading-[0.85]">
              Superior <span className="text-secondary italic">Systems</span>.
            </h1>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-2xl md:text-3xl text-white/90 font-light leading-relaxed max-w-3xl">
              We provide the technical precision and operational depth required for modern business scale. Engineered for maximum sovereignty.
            </p>
          </FadeIn>
        </div>
      </Section>

      <Section className="pt-12 bg-transparent">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
          {services.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.1} className="h-full">
              <Card id={service.id} noDefaultPadding className="flex flex-col xl:flex-row gap-8 md:gap-10 items-start h-full glass group p-6 md:p-10">
                <div className="bg-primary/15 p-6 rounded-2xl shrink-0 group-hover:bg-primary/25 transition-all duration-700 border border-white/10 group-hover:neon-glow-primary">
                  <span className="material-symbols-outlined text-5xl text-primary">{service.icon}</span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-3xl font-bold mb-6 text-white group-hover:text-primary transition-colors duration-500 tracking-tight">{service.title}</h3>
                  <p className="text-lg text-white/70 mb-10 leading-relaxed font-light group-hover:text-white/90 transition-colors duration-500">{service.description}</p>

                  <div className="mb-10">
                    <span className="text-[11px] font-mono font-bold uppercase text-white/40 block mb-6 tracking-[0.3em]">Outcomes Delivered</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                      {service.outcomes.map(outcome => (
                        <div key={outcome} className="text-[14px] md:text-[15px] font-medium text-white/90 flex items-center">
                          <span className="shrink-0 w-2 h-2 bg-secondary rounded-full mr-4 shadow-[0_0_12px_rgba(0,240,255,0.8)]"></span>
                          {outcome}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase text-white/40 block mb-6 tracking-[0.3em]">Technical Stack</span>
                    <div className="flex flex-wrap gap-3">
                      {service.tools.map(tool => (
                        <span key={tool} className="px-4 py-2 bg-white/5 text-[11px] font-mono font-bold rounded-full uppercase tracking-widest text-white/50 border border-white/5 group-hover:border-white/10 group-hover:text-white/70 transition-all">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>
    </div>
  );
}
