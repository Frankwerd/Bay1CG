import { industries } from "@/data/industries";

export default function WhoWeWorkWith() {
  return (
    <section id="industries" className="bg-off py-[clamp(72px,9vw,140px)]">
      <div className="wrap">
        <div className="sec-head rv grid gap-4 max-w-[46rem] mb-[clamp(36px,5vw,64px)]">
          <div className="label">Who we work with</div>
          <h2 className="text-[var(--h2)] font-semibold leading-[1.02] tracking-[-0.035em]">
            Small businesses that run on word of mouth and a full calendar.
          </h2>
        </div>

        <div className="inds rv flex flex-wrap gap-[10px]">
          {industries.map((ind) => (
            <span
              key={ind}
              className="ind px-5 py-[14px] rounded-full bg-paper border-[1.5px] border-mist font-medium text-[1rem] transition-all duration-300 hover:-translate-y-[3px] hover:border-ember select-none"
            >
              {ind}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
