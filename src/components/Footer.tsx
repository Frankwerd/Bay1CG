import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 pt-24 pb-12 px-6 md:px-12 bg-background relative overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24 max-w-7xl mx-auto relative z-10">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold tracking-tighter text-white mb-8">
            Bay<span className="text-primary">1</span> <span className="text-white/40 font-light">Consulting Group</span>
          </h2>
          <p className="text-white/50 max-w-sm font-light leading-relaxed">
            Architecting the future of enterprise operations through advanced systems automation, technical strategy, and bespoke software infrastructure.
          </p>
        </div>
        <div>
          <h3 className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase mb-8 text-white/30">Quick Links</h3>
          <ul className="space-y-4 text-[13px] font-medium">
            <li><Link href="/about" className="text-white/60 hover:text-primary transition-colors">About</Link></li>
            <li><Link href="/services" className="text-white/60 hover:text-primary transition-colors">Services</Link></li>
            <li><Link href="/case-studies" className="text-white/60 hover:text-primary transition-colors">Case Studies</Link></li>
            <li><Link href="/projects" className="text-white/60 hover:text-primary transition-colors">Projects</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase mb-8 text-white/30">Connect</h3>
          <ul className="space-y-4 text-[13px] font-medium">
            <li><Link href="/contact" className="text-white/60 hover:text-primary transition-colors">Contact Us</Link></li>
            <li><Link href="/privacy" className="text-white/60 hover:text-primary transition-colors">Privacy Policy</Link></li>
            <li className="flex space-x-4 pt-4">
               <span className="material-symbols-outlined text-white/40 cursor-pointer hover:text-primary transition-colors">alternate_email</span>
               <span className="material-symbols-outlined text-white/40 cursor-pointer hover:text-primary transition-colors">share</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-white/20 max-w-7xl mx-auto w-full relative z-10">
        <p>© 2026 Bay1 Consulting Group. All rights reserved.</p>
        <p className="mt-4 md:mt-0 text-primary/40">Architecting Resilience</p>
      </div>
    </footer>
  );
};

export default Footer;
