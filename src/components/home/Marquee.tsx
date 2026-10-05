"use client";

export default function Marquee() {
  const words = [
    "Websites",
    "Booking forms",
    "Rebuilds",
    "Care plans",
    "AI add-ons",
    "Made in Bayonne",
  ];

  return (
    <div
      className="band relative z-10 my-10 -rotate-[1.6deg] scale-[1.03] overflow-hidden bg-ember color-navy border-y-[3px] border-navy select-none"
      aria-hidden="true"
    >
      <div className="track flex w-max animate-[marq_26s_linear_infinite]">
        {[0, 1].map((key) => (
          <div key={key} className="flex">
            {words.map((w) => (
              <span
                key={w}
                className="whitespace-nowrap py-3.5 text-[clamp(1.6rem,1.1rem+2.2vw,3.2rem)] font-semibold tracking-[-0.03em] text-navy"
              >
                {w}
                <i className="px-[0.5em] font-serif italic font-normal not-italic">
                  ✶
                </i>
              </span>
            ))}
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes marq {
          to {
            transform: translateX(-50%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .track {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
