import { cases } from "@/data/work";

export default function FeaturedClient() {
  const luminous = cases.find((c) => c.id === "luminous") || cases[0];

  return (
    <section id="work" className="bg-off py-[clamp(72px,9vw,140px)]">
      <div className="wrap case grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-[clamp(24px,4vw,64px)] items-end">
        <div className="rv">
          <div className="label">Featured client</div>
          <h2 className="text-[var(--h2)] mt-4 font-semibold leading-[1.02] tracking-[-0.035em]">
            Luminous Electric has a website that{" "}
            <em className="not-italic text-ember">stays fresh every week.</em>
          </h2>
          <p className="text-steel text-[var(--lead)] leading-[1.5] mt-[20px] max-w-[36rem]">
            {luminous.summary}
          </p>
        </div>

        <div className="rv [animation-delay:70ms]">
          <div className="facts grid border-t-[1.5px] border-navy">
            {luminous.facts?.map((fact) => (
              <div
                key={fact.label}
                className="fact grid grid-cols-[auto_minmax(0,1fr)] gap-4 py-[18px] border-b border-mist items-baseline"
              >
                <b className="text-[var(--h3)] tracking-[-0.03em] min-w-[3.2ch] font-semibold">{fact.label}</b>
                <span className="text-steel">{fact.text}</span>
              </div>
            ))}
          </div>
          <p className="tagnote text-[0.8rem] text-steel mt-[14px]">
            {luminous.note || "Results figures to be added once confirmed with the client."}
          </p>
        </div>
      </div>
    </section>
  );
}
