import { Mark } from "../Logo";
import { site } from "@/lib/site";

export default function Founder() {
  return (
    <section id="founder" className="py-[clamp(72px,9vw,140px)]">
      <div className="wrap founder grid grid-cols-1 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-[clamp(24px,4vw,64px)] items-center">
        <div
          className="photo rv aspect-[4/5] max-w-full rounded-[10px] bg-navy grid place-items-center text-steel-lt text-[0.85rem] relative overflow-hidden"
          aria-label="Placeholder for Francis's photo"
        >
          <Mark className="w-[42%] h-auto text-ember" />
          <small className="absolute bottom-[14px] left-[16px]">
            Francis&apos;s photo goes here
          </small>
        </div>

        <div className="rv [animation-delay:70ms]">
          <div className="label">Founder</div>
          <blockquote className="text-[length:var(--h2)] font-semibold tracking-[-0.035em] leading-[1.05] mt-4 m-0 text-balance">
            Small businesses deserve{" "}
            <em className="not-italic text-ember">the same tools</em> the big firms use.
          </blockquote>
          <p className="text-steel mt-[22px] max-w-[34rem] text-[1.05rem] leading-relaxed">
            {site.founder} started {site.name} in Bayonne to bring practical AI and well-built websites to the businesses that keep a town running. Every project is scoped, built and supported by him directly.
          </p>
        </div>
      </div>
    </section>
  );
}
