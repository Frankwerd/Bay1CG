import { site } from "@/lib/site";

export default function Founder() {
  return (
    <section id="hi" className="py-[clamp(72px,9vw,140px)] bg-off overflow-hidden">
      <div className="wrap grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[340px_1fr] gap-[clamp(32px,5vw,72px)] items-center">
        {/* Tilted Polaroid Frame */}
        <div className="relative group justify-self-center md:justify-self-start">
          {/* Top Tape */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-28 h-7 bg-[#E8E3D5]/80 shadow-xs -rotate-2 z-10 pointer-events-none" />

          <div className="bg-paper p-4 pb-6 rounded-xs shadow-xl rotate-[-2.5deg] group-hover:rotate-0 transition-transform duration-300 w-[280px] sm:w-[300px]">
            <div className="aspect-[4/5] bg-navy rounded-xs relative overflow-hidden flex flex-col items-center justify-center p-6 text-center">
              <span className="text-ember font-bold text-2xl tracking-wide mb-1">
                BAY1CG
              </span>
              <span className="text-mist text-xs tracking-wider uppercase">
                Bayonne, NJ
              </span>
              <span className="absolute bottom-3 right-3 text-mist/30 text-[10px]">
                EST. 2024
              </span>
            </div>
            <div className="mt-4 text-center">
              <p className="hand text-navy text-2xl font-bold leading-tight">
                Francis John Libutti
              </p>
              <p className="text-steel text-xs font-mono uppercase tracking-wider mt-0.5">
                Founder & Lead Engineer
              </p>
            </div>
          </div>
        </div>

        {/* Bio Content */}
        <div>
          <div className="label">WHO RUNS THIS</div>
          <h2 className="text-[length:var(--h2)] font-extrabold text-navy leading-[1.05] tracking-tight mt-3 mb-6">
            Small businesses deserve the <span className="i">same leverage</span> as enterprise software teams.
          </h2>

          <div className="space-y-4 text-steel text-[1.05rem] leading-relaxed max-w-2xl">
            <p>
              I&apos;m Francis. I started {site.name} right here in Bayonne, New Jersey.
            </p>
            <p>
              When you hire us, you don&apos;t get passed off to an account manager, a junior dev, or a third-party agency offshore. I personally design, code, and deploy every project we build.
            </p>
            <p>
              We focus on fast, conversion-driven websites and custom AI automations that actually save you time and bring in new local business.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-mist/40 flex flex-wrap gap-2">
            <span className="text-xs text-steel font-medium uppercase tracking-wider mr-2 self-center">
              Industries served:
            </span>
            {["Contractors", "Law Firms", "Medical", "Local Services", "Retail"].map((ind) => (
              <span
                key={ind}
                className="bg-paper border border-mist text-navy text-xs font-semibold px-3 py-1 rounded-full"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
