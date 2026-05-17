'use client';

import Section from '@/components/Section';
import Button from '@/components/Button';
import Card from '@/components/Card';
import FadeIn from '@/components/FadeIn';

export default function Contact() {
  return (
    <div className="flex flex-col relative overflow-hidden">
      {/* Background Decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[10%] w-[40%] h-[40%] bg-secondary/5 rounded-full blur-[120px]" />
      </div>

      <Section className="pt-48 bg-transparent">
        <div className="max-w-4xl">
          <FadeIn direction="none">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-12 h-[1px] bg-primary"></span>
              <span className="text-[11px] font-mono font-bold tracking-[0.4em] uppercase text-primary">Get in Touch</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-8 leading-[0.9]">
              Let&apos;s <span className="text-secondary italic">Build</span>.
            </h1>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed max-w-2xl">
              Ready to architect your next operational phase? Tell us about your project.
            </p>
          </FadeIn>
        </div>
      </Section>

      <Section className="pt-0 pb-48 bg-transparent">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeIn className="h-full">
            <Card className="p-12 h-full glass group border-white/10">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label htmlFor="name" className="text-[10px] font-mono font-bold uppercase text-white/30 tracking-[0.2em]">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-white/20"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="email" className="text-[10px] font-mono font-bold uppercase text-white/30 tracking-[0.2em]">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-white/20"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label htmlFor="intent" className="text-[10px] font-mono font-bold uppercase text-white/30 tracking-[0.2em]">What are you trying to build or fix?</label>
                  <textarea
                    id="intent"
                    rows={6}
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none placeholder:text-white/20"
                    placeholder="Tell us about your operational bottlenecks or your vision for a new system..."
                  ></textarea>
                </div>
                <Button type="submit" variant="primary" className="w-full py-5 text-base tracking-widest uppercase font-bold">
                  Send Message
                </Button>
              </form>
            </Card>
          </FadeIn>

          <div className="flex flex-col justify-center">
            <div className="space-y-16">
              <FadeIn delay={0.1}>
                <div>
                  <h3 className="text-[11px] font-mono font-bold uppercase text-primary mb-6 tracking-[0.3em]">Global Operations</h3>
                  <p className="text-3xl font-bold text-white leading-tight tracking-tight">
                    Based in Bayonne, NJ. <br /><span className="text-white/40 font-light">Executing globally across US, EU, and Africa.</span>
                  </p>
                </div>
              </FadeIn>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <FadeIn delay={0.2}>
                  <div>
                    <h4 className="text-[10px] font-mono font-bold uppercase text-white/30 mb-4 tracking-[0.2em]">Email Us</h4>
                    <p className="text-xl font-bold text-white hover:text-primary transition-colors cursor-pointer">hello@bay1consulting.com</p>
                  </div>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <div>
                    <h4 className="text-[10px] font-mono font-bold uppercase text-white/30 mb-4 tracking-[0.2em]">Social</h4>
                    <p className="text-xl font-bold text-white hover:text-primary transition-colors cursor-pointer">LinkedIn / Twitter</p>
                  </div>
                </FadeIn>
              </div>

              <FadeIn delay={0.4}>
                <div className="p-10 bg-secondary/5 rounded-2xl border border-secondary/20">
                  <h4 className="text-secondary font-bold mb-4 tracking-tight flex items-center">
                    <span className="material-symbols-outlined mr-2">analytics</span>
                    Audit Requests
                  </h4>
                  <p className="text-[15px] text-white/60 leading-relaxed font-light">
                    For enterprises looking for a full stack audit, please specify &quot;Audit&quot; in your message. We typically respond within 24 hours.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
