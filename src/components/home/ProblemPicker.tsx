"use client";

import { useState } from "react";
import { problemsList, ProblemSolution } from "@/data/problems";

export default function ProblemPicker() {
  const [activeKey, setActiveKey] = useState<string>(problemsList[0].key);
  const [pop, setPop] = useState(false);

  const activeProblem: ProblemSolution =
    problemsList.find((p) => p.key === activeKey) || problemsList[0];

  const handleSelect = (key: string) => {
    if (key === activeKey) return;
    setActiveKey(key);
    setPop(true);
    setTimeout(() => setPop(false), 600);
  };

  return (
    <section id="fix" className="py-[clamp(80px,10vw,150px)]">
      <div className="wrap">
        <div className="sec-head rv mb-[clamp(36px,5vw,64px)] grid max-w-[48rem] gap-4">
          <div className="label">What we build</div>
          <h2 className="text-[length:var(--h2)] font-semibold leading-[0.98] tracking-[-0.04em]">
            What&apos;s bugging you about <em className="i font-serif italic font-normal">your website?</em>
          </h2>
          <p className="text-[length:var(--lead)] text-steel leading-[1.5]">
            Pick one. We&apos;ll tell you exactly what we&apos;d do about it.
          </p>
        </div>

        <div className="picker grid grid-cols-1 items-start gap-[clamp(20px,3vw,40px)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          {/* Problem selector buttons */}
          <div className="probs grid gap-2.5">
            {problemsList.map((prob) => {
              const isSelected = prob.key === activeKey;
              return (
                <button
                  key={prob.key}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => handleSelect(prob.key)}
                  className={`prob flex items-center gap-[14px] rounded-[14px] border-[1.5px] p-[18px_20px] text-[clamp(1.05rem,1rem+0.4vw,1.3rem)] font-semibold tracking-[-0.02em] cursor-pointer text-left transition-all duration-500 ease-[var(--spring)] ${
                    isSelected
                      ? "bg-navy border-navy text-white translate-x-[10px] -rotate-[0.6deg]"
                      : "border-mist bg-paper text-navy hover:border-steel-lt hover:translate-x-[6px]"
                  }`}
                >
                  <span className="em w-[1.1em] text-center font-serif italic text-[1.6em] leading-none text-ember">
                    *
                  </span>
                  <span>{prob.buttonLabel}</span>
                </button>
              );
            })}
          </div>

          {/* Answer panel */}
          <div
            id="answer"
            className={`answer relative min-h-[340px] rounded-[18px] bg-navy p-[clamp(24px,3vw,40px)] text-[#F7F7F4] ${
              pop ? "pop" : ""
            }`}
          >
            <span className="tag inline-block rounded-full bg-ember px-[10px] py-[5px] text-[0.78rem] font-bold tracking-[0.06em] uppercase text-navy">
              {activeProblem.tag}
            </span>

            <h3 className="mt-4 text-[clamp(1.6rem,1.2rem+1.6vw,2.6rem)] font-semibold leading-[1.02]">
              {activeProblem.headline}
            </h3>

            <p className="mt-3 max-w-[34rem] text-steel-lt leading-[1.6]">
              {activeProblem.paragraph}
            </p>

            <ul className="mt-5 grid gap-2 list-none p-0">
              {activeProblem.points.map((pt, idx) => (
                <li
                  key={idx}
                  className="relative pl-[22px] text-[#F7F7F4] leading-[1.5]"
                >
                  <span
                    className="absolute left-0 top-[0.62em] h-[3px] w-[10px] rounded-[2px] bg-ember"
                    aria-hidden="true"
                  />
                  {pt}
                </li>
              ))}
            </ul>

            <span className="hand absolute right-[22px] bottom-[16px] -rotate-4 text-[1.4rem]">
              {activeProblem.note}
            </span>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes pop {
          from {
            transform: scale(0.96) rotate(0.6deg);
            opacity: 0.4;
          }
          to {
            transform: none;
            opacity: 1;
          }
        }
        .answer.pop {
          animation: pop 0.6s var(--spring);
        }
      `}</style>
    </section>
  );
}
