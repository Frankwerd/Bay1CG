'use client';

import Section from '@/components/Section';
import Button from '@/components/Button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import FadeIn from '@/components/FadeIn';
import AnimatedText from '@/components/AnimatedText';
import BentoGrid from '@/components/BentoGrid';
import ParallaxImage from '@/components/ParallaxImage';
import GrowthCard from '@/components/GrowthCard';
import { services } from '@/data/services';

export default function About() {
  const experiences = [
    {
      company: "SGLab Inc.",
      role: "USA Marketing Lead",
      period: "Jul 2025 – Apr 2026",
      description: "3× promoted in 6 months. Developed 2 production AI systems, 5-module ERP, Shopify migration, and HubSpot CRM from scratch.",
      keyAchievement: "5-module ERP built end-to-end; 3× promoted in 6 months"
    },
    {
      company: "Elpis Labs",
      role: "Business Development Analyst",
      period: "Jul 2025 – Sep 2025",
      description: "Guided international startups on US market-entry through government-backed accelerator.",
      keyAchievement: "Strategic market-entry guidance for international startups"
    },
    {
      company: "CareerSuite.Ai",
      role: "Founder & Full Stack Engineer",
      period: "Feb 2025 – Sep 2025",
      description: "Led end-to-end development of a full-stack AI-powered job application toolkit.",
      keyAchievement: "95% reduction in manual data entry; 7 releases shipped on-time"
    },
    {
      company: "Circle of Rainbow Sisters",
      role: "Lead Grant Funding Specialist & PM",
      period: "Dec 2023 – Apr 2025",
      description: "Secured $50K+ in new funding; managed $2M+ across 30+ agencies. Achieved 20% error reduction.",
      keyAchievement: "$50K+ secured; $2M+ portfolio managed; 100% on-time rate"
    },
    {
      company: "Bay1 Consulting Group",
      role: "Founder & Lead Consultant",
      period: "Jun 2022 – Dec 2023",
      description: "Achieved 87% CTR increase and 80% engagement lift on email campaigns. Managed $2M+ grant portfolios. Built Node.js + React + Tailwind CSS client sites.",
      keyAchievement: "87% CTR increase & 80% engagement lift"
    },
    {
      company: "Starta VC",
      role: "Early-Stage Investment Associate",
      period: "Feb 2022 – Aug 2022",
      description: "Advised 19% of overseas portfolio. Delivered merger recommendation for 2 companies. Built Tableau dashboards for 10+ ventures.",
      keyAchievement: "Advised 19% of portfolio; delivered merger recommendation"
    },
    {
      company: "PQMD",
      role: "Project Manager Intern",
      period: "May 2021 – Aug 2021",
      description: "Led 5-member Agile team. Produced ESG/CSR report across 43 global partners. Built JIRA + Tableau dashboards revealing 27% KPI gap.",
      keyAchievement: "Revealed 27% KPI gap via custom JIRA/Tableau dashboards"
    }
  ];

  const education = [
    {
      institution: "Rutgers University–New Brunswick",
      degree: "Bachelor of Arts, Business/Managerial Economics",
      period: "Dec 2024",
      honors: "HSF Scholar & Mentor, EOF Alumnus, NSF I-Corps Fellow (Cohorts 9 & 10), Aresty RURJ Peer Reviewer, FirstGenU Fellow (Morgan Stanley / America Needs You), Teamsters Local 360 Scholarship, National Honor Society"
    }
  ];

  return (
    <div className="flex flex-col relative overflow-hidden">
       {/* Background Decoration */}
       <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[40%] h-[40%] bg-secondary/5 rounded-full blur-[120px]" />
      </div>

      <Section className="pt-32 md:pt-48 pb-12 bg-transparent">
        <div className="max-w-4xl">
          <FadeIn direction="none">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-12 h-[1px] bg-primary"></span>
              <span className="text-[11px] font-mono font-bold tracking-[0.4em] uppercase text-primary">Our Story</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <AnimatedText
              text="Operator-Led Execution."
              className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-8 leading-[0.9]"
            />
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed mb-12">
              Bay1 Consulting Group is a technical powerhouse specializing in systems architecture, automation, and operational scale. We bridge the gap between complex business challenges and elegant technical solutions.
            </p>
          </FadeIn>
        </div>
      </Section>

      <Section dark={false} className="relative overflow-hidden bg-white/[0.02] border-y border-white/5 py-16 md:py-24">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none">
          <motion.div
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 right-20 w-64 h-64 bg-primary blur-3xl rounded-full"
          />
        </div>

        <div className="flex flex-col gap-16 relative z-10">
          <div className="max-w-3xl">
            <FadeIn>
              <h2 className="text-4xl font-bold mb-8 text-white">The Bay1 Approach</h2>
              <div className="space-y-6">
                <p className="text-lg text-white/70 leading-relaxed font-light">
                  Founded by <span className="text-primary font-bold">Francis John Libutti</span>, an innovative product developer and systems architect with a proven record of designing end-to-end enterprise solutions.
                </p>
                <p className="text-lg text-white/70 leading-relaxed font-light">
                  We specialize in building robust automation workflows and scalable applications that reduce operational friction. Our background combines deep business intelligence with advanced technical execution.
                </p>
              </div>
            </FadeIn>
          </div>

          <BentoGrid services={services.slice(3, 6)} />
        </div>
      </Section>

      <Section className="bg-transparent py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <FadeIn>
              <h2 className="text-3xl font-bold text-white mb-12 flex items-center">
                <span className="material-symbols-outlined mr-4 text-primary">work</span> Professional Experience
              </h2>
            </FadeIn>
            <div className="space-y-2">
              {experiences.map((exp, i) => (
                <FadeIn key={exp.company} delay={i * 0.1}>
                  <GrowthCard
                    index={i}
                    period={exp.period}
                    role={exp.role}
                    company={exp.company}
                    description={exp.description}
                    keyAchievement={exp.keyAchievement}
                  />
                </FadeIn>
              ))}
            </div>
          </div>
          <div>
            <FadeIn>
              <h2 className="text-3xl font-bold text-white mb-12 flex items-center">
                <span className="material-symbols-outlined mr-4 text-secondary">school</span> Education & Honors
              </h2>
            </FadeIn>
            <div className="space-y-12">
              {education.map((edu, i) => (
                <FadeIn key={edu.institution} delay={i * 0.1}>
                  <div className="glass p-10 rounded-2xl">
                    <span className="text-[10px] font-mono font-bold text-secondary mb-3 block uppercase tracking-[0.2em]">{edu.period}</span>
                    <h3 className="text-xl font-bold text-white mb-2">{edu.institution}</h3>
                    <p className="text-white/70 mb-8 font-light">{edu.degree}</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.honors.split(', ').map(honor => (
                        <span key={honor} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider text-white/40">
                          {honor}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
              <FadeIn delay={0.3}>
                <div className="p-10 border border-dashed border-white/10 rounded-2xl">
                  <h3 className="text-lg font-bold text-white mb-6">Certifications</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center text-[13px] text-white/70 font-medium">
                      <span className="material-symbols-outlined text-primary mr-4 text-lg">verified</span>
                      Google Data Analytics Professional
                    </li>
                    <li className="flex items-center text-[13px] text-white/70 font-medium">
                      <span className="material-symbols-outlined text-primary mr-4 text-lg">verified</span>
                      Google Project Management Professional
                    </li>
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-white/[0.02] border-t border-white/5 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
            <ParallaxImage
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
              alt="Team at work"
              className="w-full h-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700 rounded-2xl"
              strength={30}
            />
            <div className="absolute -top-10 -right-10 w-48 aspect-square hidden md:block">
              <ParallaxImage
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400"
                alt="Collaboration"
                className="w-full h-full rounded-2xl border border-white/10"
                strength={-50}
                rotate={5}
              />
            </div>
          </div>
          <div className="text-center lg:text-left">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">Building the operational backbone of modern enterprises.</h2>
              <p className="text-white/60 mb-12 max-w-xl mx-auto lg:mx-0 font-light text-lg">
                We focus on building real systems, not just providing fluff. From automation to AI, we execute on the technical depth required to scale.
              </p>
              <Link href="/contact">
                <Button variant="primary" className="px-12 py-4">Work With Us</Button>
              </Link>
            </FadeIn>
          </div>
        </div>
      </Section>
    </div>
  );
}
