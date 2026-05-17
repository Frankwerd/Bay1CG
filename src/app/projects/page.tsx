'use client';

import Section from '@/components/Section';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import FadeIn from '@/components/FadeIn';

export default function Projects() {
  return (
    <div className="flex flex-col relative overflow-hidden min-h-screen">
      {/* Ambient Background blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[25%] left-[20%] w-[45%] h-[45%] bg-secondary/10 rounded-full blur-[160px] opacity-30" />
        <div className="absolute bottom-[25%] right-[20%] w-[45%] h-[45%] bg-primary/10 rounded-full blur-[160px] opacity-30" />
      </div>

      <Section className="pt-40 md:pt-56 bg-transparent">
        <div className="max-w-5xl">
          <FadeIn direction="none">
            <div className="flex items-center gap-4 mb-10">
              <span className="w-16 h-[1px] bg-primary/60"></span>
              <span className="text-[12px] font-mono font-bold tracking-[0.5em] uppercase text-primary/80">Portfolio</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-white mb-10 leading-[0.85]">
              Technical <span className="text-secondary italic">Builds</span>.
            </h1>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-2xl md:text-3xl text-white/90 font-light leading-relaxed max-w-3xl">
              A curated selection of systems, tools, and platforms engineered for efficiency and scale.
            </p>
          </FadeIn>
        </div>
      </Section>

      <Section className="pt-12 bg-transparent">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.1}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </Section>
    </div>
  );
}
