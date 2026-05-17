'use client';

import Link from 'next/link';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import { useRef } from 'react';
import Section from '@/components/Section';
import MetricsBar from '@/components/MetricsBar';
import Button from '@/components/Button';
import ProjectCard from '@/components/ProjectCard';
import FadeIn from '@/components/FadeIn';
import AnimatedText from '@/components/AnimatedText';
import BentoGrid from '@/components/BentoGrid';
import Marquee from '@/components/Marquee';
import TerminalMockup from '@/components/TerminalMockup';
import ParallaxImage from '@/components/ParallaxImage';
import { services } from '@/data/services';
import { projects } from '@/data/projects';

export default function Home() {
  return (
    <div className="flex flex-col relative overflow-hidden bg-background">
      {/* Background Animation blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,90,0,0.1),transparent_70%)]" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-[100px] opacity-20"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -80, 0],
            y: [0, -60, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-[30%] -right-[15%] w-[70%] h-[70%] bg-secondary/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
             opacity: [0.05, 0.15, 0.05],
             scale: [0.8, 1.1, 0.8]
          }}
          transition={{
             duration: 20,
             repeat: Infinity,
             ease: "linear"
          }}
          className="absolute bottom-[10%] left-[20%] w-[50%] h-[50%] bg-accent/5 rounded-full blur-[100px]"
        />
        {/* Subtle Noise Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay pointer-events-none" />
      </div>

      {/* Hero Section */}
      <Section className="pt-32 md:pt-56 pb-24 relative overflow-visible bg-transparent">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 hidden xl:block pr-12">
          <FadeIn delay={1} direction="left" className="relative h-full w-full">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/40 to-secondary/40 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <ParallaxImage
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
                alt="Bay1 Systems Architecture"
                className="aspect-[3/4] rounded-3xl grayscale brightness-110 hover:grayscale-0 transition-all duration-1000 ease-premium shadow-2xl border border-white/5"
                strength={60}
              />
            </div>

            <div className="absolute -bottom-16 -left-24 w-64 aspect-square z-10 group hidden 2xl:block">
               <div className="absolute -inset-2 bg-primary/40 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <ParallaxImage
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400"
                alt="Automation Hardware"
                className="w-full h-full rounded-2xl object-cover border border-white/10 shadow-2xl"
                strength={-80}
              />
            </div>
          </FadeIn>
        </div>

        <div className="max-w-5xl relative z-10">
          <FadeIn direction="none" duration={1.2}>
            <div className="flex items-center gap-4 mb-10">
              <span className="w-16 h-[1px] bg-primary/60"></span>
              <span className="text-[12px] font-mono font-bold tracking-[0.5em] uppercase text-primary/80">Autonomous Infrastructure</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.2} duration={1.2}>
            <AnimatedText
              text="Architecting the Future of High-Performance."
              highlight="High-Performance"
              className="text-5xl sm:text-7xl md:text-9xl font-bold tracking-tighter text-white mb-12 leading-[0.85]"
            />
          </FadeIn>
          <FadeIn delay={0.4} duration={1.2}>
            <p className="text-lg sm:text-xl md:text-3xl text-white/80 font-light max-w-3xl leading-relaxed mb-20">
              Bay1 Consulting Group designs and builds the <span className="text-white font-medium">sovereign technical infrastructure</span> that powers modern enterprise operations and disruptive startups.
            </p>
          </FadeIn>
          <FadeIn delay={0.6} duration={1.2}>
            <div className="flex flex-col sm:flex-row gap-8">
              <Link href="/contact">
                <Button variant="primary" className="w-full sm:w-auto px-12 py-5 text-base tracking-widest uppercase font-bold">Initialize Project</Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" className="w-full sm:w-auto px-12 py-5 text-base tracking-widest uppercase font-bold text-white border-white/20 hover:border-white/40 bg-white/5">Our Services</Button>
              </Link>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={1.2} duration={1.5} direction="none">
          <div className="mt-32 pt-16 border-t border-white/5">
            <MetricsBar />
          </div>
        </FadeIn>
      </Section>

      {/* Services Preview */}
      <Section className="bg-white/[0.03] border-y border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40%] h-full bg-secondary/5 blur-[120px] rounded-full opacity-30 -translate-y-1/2" />

        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12 relative z-10">
          <div className="max-w-3xl">
            <span className="text-[11px] font-mono font-bold tracking-[0.5em] uppercase text-secondary/80 mb-8 block">Capabilities</span>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white leading-[0.9]">
              Sovereign Execution <br /><span className="text-white/30 italic">Across Every System.</span>
            </h2>
          </div>
          <Link href="/services">
            <Button variant="secondary" className="mb-4 px-10 py-4 text-sm uppercase tracking-widest font-bold">Full Spectrum</Button>
          </Link>
        </div>

        <BentoGrid services={services.slice(0, 5)} />
      </Section>

      <div className="py-20 border-b border-white/5 bg-white/[0.02]">
        <Marquee
          items={["Autonomous Systems", "Systems Architecture", "AI Orchestration", "Enterprise PM", "Full-Stack Dev", "Edge Intelligence"]}
        />
      </div>

      {/* Technical Showcase */}
      <Section className="bg-transparent relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="order-2 lg:order-1 relative group">
             <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-40 transition-all duration-1000"></div>
            <FadeIn direction="right">
              <TerminalMockup />
            </FadeIn>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-[11px] font-mono font-bold tracking-[0.5em] uppercase text-primary/80 mb-8 block">Technical Core</span>
            <h2 className="text-6xl font-bold tracking-tighter text-white mb-12 leading-[0.9]">
              Automation First. <br /><span className="text-white/30 italic">Always Sovereign.</span>
            </h2>
            <p className="text-xl text-white/70 mb-16 leading-relaxed font-light">
              We eliminate technical friction. Our systems are engineered to self-optimize, ensuring that operational complexity never interrupts the pursuit of performance.
            </p>
            <ul className="space-y-8 mb-16">
              {[
                "Neural Operational Orchestration",
                "Sub-second Data Synthesis",
                "Autonomous Workflow Auditing",
                "Predictive System Resilience"
              ].map(item => (
                <li key={item} className="flex items-center text-lg text-white/90 font-light group cursor-default">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-6 group-hover:bg-primary/20 transition-all">
                    <span className="material-symbols-outlined text-primary text-xl group-hover:scale-125 transition-transform">bolt</span>
                  </div>
                  <span className="group-hover:text-white transition-colors tracking-tight">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/services">
              <Button variant="outline" className="px-12 py-5 text-white border-white/20 hover:border-white/40 bg-white/5 uppercase tracking-widest font-bold">Technical Stack</Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Featured Projects */}
      <Section className="bg-white/[0.02] border-t border-white/5 relative">
        <div className="absolute bottom-0 left-0 w-[30%] h-1/2 bg-primary/5 blur-[100px] rounded-full opacity-20" />

        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12 relative z-10">
          <div className="max-w-3xl">
            <span className="text-[11px] font-mono font-bold tracking-[0.5em] uppercase text-accent/80 mb-8 block">Portfolio</span>
            <h2 className="text-6xl md:text-7xl font-bold tracking-tighter text-white leading-[0.9]">
              The Architecture <br /><span className="text-white/30 italic">of Results.</span>
            </h2>
          </div>
          <Link href="/projects">
            <Button variant="outline" className="px-12 py-5 text-white border-white/20 hover:border-white/40 bg-white/5 uppercase tracking-widest font-bold">Project Archive</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
          {projects.slice(0, 3).map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.1}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}

function CTASection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const background = useMotionTemplate`
    radial-gradient(
      800px circle at ${springX}px ${springY}px,
      rgba(255, 90, 0, 0.25),
      transparent 80%
    )
  `;

  return (
    <Section className="text-center py-64 relative overflow-hidden bg-transparent">
      <motion.div
        onMouseMove={handleMouseMove}
        className="absolute inset-0 z-0"
        style={{ background }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,90,0,0.1),transparent_70%)] opacity-40 animate-pulse pointer-events-none" />

      <FadeIn>
        <div className="max-w-5xl mx-auto relative z-10 px-6">
          <h2 className="text-7xl md:text-9xl font-bold tracking-tighter text-white mb-12 leading-[0.85]">Ready to architect <br />the unreasonable?</h2>
          <p className="text-2xl md:text-3xl text-white/70 font-light mb-20 max-w-3xl mx-auto leading-relaxed">
            Whether you need operational scale or specialized AI architecture, our team is ready to architect your next phase.
          </p>
          <div>
            <Link href="/contact">
              <Button variant="primary" className="px-20 py-8 text-lg tracking-[0.3em] uppercase font-black neon-glow-primary">Let&apos;s Get Started</Button>
            </Link>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
