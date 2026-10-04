import { services } from "@/data/services";

export default function WhatWeBuild() {
  const webDev = services[0];
  const aiAddons = services[1];

  return (
    <section id="build" className="py-[clamp(72px,9vw,140px)]">
      <div className="wrap">
        <div className="sec-head rv grid gap-4 max-w-[46rem] mb-[clamp(36px,5vw,64px)]">
          <div className="label">What we build</div>
          <h2 className="text-[var(--h2)] font-semibold leading-[1.02] tracking-[-0.035em]">
            Websites first. AI when it earns its keep.
          </h2>
        </div>

        <div className="builds grid grid-cols-1 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] gap-[clamp(20px,3vw,40px)]">
          {/* Primary service: Web design and development */}
          <div className="build rv">
            <div className="bar h-[4px] w-[56px] bg-ember rounded-sm mb-5" />
            <h3 className="text-[clamp(1.6rem,1.2rem+1.4vw,2.4rem)] font-semibold tracking-[-0.035em] leading-[1.02]">
              {webDev.title}
            </h3>
            <p className="text-steel mt-3 max-w-[34rem]">
              {webDev.summary}
            </p>
            <ul className="list-none m-0 mt-6 p-0 border-t border-mist">
              {webDev.items.map((item) => (
                <li key={item.title} className="flex justify-between gap-4 py-[14px] border-b border-mist">
                  <span className="font-semibold">{item.title}</span>
                  <span className="text-steel text-[0.9rem] text-right">{item.note}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Secondary service: AI add-ons */}
          <div className="build rv [animation-delay:70ms]">
            <div className="bar h-[4px] w-[56px] bg-navy rounded-sm mb-5" />
            <h3 className="text-[var(--h3)] font-semibold tracking-[-0.035em] leading-[1.02]">
              {aiAddons.title}
            </h3>
            <p className="text-steel mt-3 max-w-[34rem]">
              {aiAddons.summary}
            </p>
            <ul className="list-none m-0 mt-6 p-0 border-t border-mist">
              {aiAddons.items.map((item) => (
                <li key={item.title} className="flex justify-between gap-4 py-[14px] border-b border-mist">
                  <span className="font-semibold">{item.title}</span>
                  <span className="text-steel text-[0.9rem] text-right">{item.note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
