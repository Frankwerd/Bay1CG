"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";
import { ButtonLink } from "../ui";

const rotWords = [
  "book\u00A0more\u00A0jobs.",
  "win\u00A0more\u00A0quotes.",
  "answer\u00A0every\u00A0lead.",
  "look\u00A0as\u00A0good\u00A0as\u00A0your\u00A0work.",
];

export default function Hero() {
  const [rotIdx, setRotIdx] = useState(0);
  const [rotOut, setRotOut] = useState<number | null>(null);
  const [playing, setPlaying] = useState(true);
  const bridgeRef = useRef<SVGSVGElement | null>(null);
  const trussRef = useRef<SVGGElement | null>(null);
  const hangersRef = useRef<SVGGElement | null>(null);

  // Rotating words effect
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = setInterval(() => {
      setRotOut(() => rotIdx);
      setRotIdx((prev) => (prev + 1) % rotWords.length);
      const timer = setTimeout(() => {
        setRotOut(null);
      }, 600);
      return () => clearTimeout(timer);
    }, 2600);

    return () => clearInterval(interval);
  }, [rotIdx]);

  // Build bridge dynamic geometry (truss and hangers)
  useEffect(() => {
    if (!trussRef.current || !hangersRef.current) return;

    const q = (t: number, a: number, b: number, c: number) =>
      (1 - t) * (1 - t) * a + 2 * t * (1 - t) * b + t * t * c;
    const outer = (t: number) => [q(t, 118, 600, 1082), q(t, 214, -86, 214)];
    const inner = (t: number) => [q(t, 150, 600, 1050), q(t, 214, -30, 214)];

    let d = "";
    for (let i = 1; i < 24; i++) {
      const t = i / 24;
      const [x1, y1] = outer(t);
      const [x2, y2] = inner(i % 2 ? t + 1 / 48 : t - 1 / 48);
      d += `M${x1.toFixed(1)} ${y1.toFixed(1)}L${x2.toFixed(1)} ${y2.toFixed(1)}`;
    }
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", d);
    path.setAttribute("class", "truss-path");
    trussRef.current.replaceChildren(path);

    hangersRef.current.replaceChildren();
    let k = 0;
    for (let i = 3; i <= 21; i++) {
      const [x, y] = inner(i / 24);
      if (y > 176) continue;
      const l = document.createElementNS("http://www.w3.org/2000/svg", "line");
      l.setAttribute("x1", x.toFixed(1));
      l.setAttribute("x2", x.toFixed(1));
      l.setAttribute("y1", y.toFixed(1));
      l.setAttribute("y2", "178");
      l.setAttribute("class", "hanger");
      l.setAttribute("stroke-width", "1.2");
      l.style.setProperty("--i", String(k++));
      hangersRef.current.appendChild(l);
    }
  }, []);

  // Parallax on scroll
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const svg = bridgeRef.current;
    if (!svg) return;

    const onScroll = () => {
      const y = Math.min(window.scrollY, 400);
      svg.style.transform = `translateY(${(-y * 0.06).toFixed(1)}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleReplay = () => {
    setPlaying(false);
    requestAnimationFrame(() => {
      setPlaying(true);
    });
  };

  return (
    <section className="bg-navy text-[#F7F7F4] overflow-hidden pt-12 pb-0 md:pt-20">
      <div className="wrap">
        <div className="label text-steel-lt">Web design and development · {site.location}</div>
        <h1 className="text-[var(--h1)] mt-[22px] max-w-[15ch] font-semibold leading-[1.02] tracking-[-0.035em]">
          Websites that{" "}
          <span className="block relative h-[1.06em] overflow-hidden text-ember" aria-live="polite">
            {rotWords.map((word, idx) => {
              const isOn = idx === rotIdx;
              const isOut = idx === rotOut;
              return (
                <span
                  key={word}
                  className={`absolute left-0 top-0 whitespace-nowrap transition-transform duration-700 ease-[var(--spring)] transition-opacity duration-300 ${
                    isOn
                      ? "translate-y-0 opacity-100"
                      : isOut
                      ? "-translate-y-[110%] opacity-0"
                      : "translate-y-[110%] opacity-0"
                  }`}
                >
                  {word}
                </span>
              );
            })}
          </span>
        </h1>
        <p className="text-[var(--lead)] text-steel-lt max-w-[38rem] mt-[24px] leading-[1.5]">
          {site.name}{" "}designs and builds fast, good-looking websites for small businesses, and adds practical AI tools when they&apos;ll save you time. You work directly with the person building it.
        </p>
        <div className="flex flex-wrap gap-3 mt-[32px]">
          <ButtonLink href="/contact" variant="ember">
            Start a project
          </ButtonLink>
          <ButtonLink href="#work" variant="line">
            See the work
          </ButtonLink>
        </div>

        {/* Bridge SVG */}
        <div className="mt-[clamp(36px,6vw,72px)]">
          <svg
            ref={bridgeRef}
            className={`bridge block w-full h-auto ${playing ? "play" : ""}`}
            viewBox="0 0 1200 260"
            role="img"
            aria-label="Line drawing of a steel arch bridge over the water"
          >
            <rect className="water fill-navy-2" x="0" y="236" width="1200" height="24" />
            <rect className="pier fill-[#2B3F5E]" x="96" y="210" width="44" height="40" />
            <rect className="pier fill-[#2B3F5E]" x="1060" y="210" width="44" height="40" />
            <path
              className="arch fill-none stroke-[#8EA2B9] stroke-[4]"
              d="M118 214 Q600 -86 1082 214"
              style={{ ["--len" as string]: 1300 }}
            />
            <path
              className="arch fill-none stroke-[#8EA2B9] stroke-[1.6]"
              d="M150 214 Q600 -30 1050 214"
              style={{ ["--len" as string]: 1150 }}
            />
            <g className="truss fill-none stroke-[#6F849C] stroke-[1.1]" ref={trussRef} />
            <g className="hangers stroke-[#6F849C]" ref={hangersRef} />
            <g>
              <rect className="deck deck-l fill-[#F7F7F4]" x="40" y="178" width="561" height="7" />
              <rect className="deck deck-r fill-[#F7F7F4]" x="599" y="178" width="561" height="7" />
              <rect className="glow fill-ember" x="40" y="185" width="1120" height="2.5" />
            </g>
          </svg>
          <button
            onClick={handleReplay}
            className="replay bg-none border-0 color-steel-lt font-medium text-[0.8rem] cursor-pointer py-2 mt-[6px] hover:text-white transition-colors"
            type="button"
          >
            Replay the build
          </button>
        </div>
      </div>

      <style jsx global>{`
        .bridge .arch {
          stroke-linecap: round;
        }
        .bridge .hanger {
          transform-box: fill-box;
          transform-origin: top;
        }
        .play .arch {
          stroke-dasharray: var(--len);
          stroke-dashoffset: var(--len);
          animation: draw 1.6s cubic-bezier(0.22, 1, 0.36, 1) 0.2s forwards;
        }
        .play .truss {
          opacity: 0;
          animation: fade 0.6s ease 1.3s forwards;
        }
        .play .hanger {
          transform: scaleY(0);
          animation: drop 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          animation-delay: calc(1.35s + var(--i) * 45ms);
        }
        .play .deck-l {
          transform: translateX(-102%);
          animation: slide 0.95s cubic-bezier(0.34, 1.56, 0.64, 1) 1.9s forwards;
        }
        .play .deck-r {
          transform: translateX(102%);
          animation: slide 0.95s cubic-bezier(0.34, 1.56, 0.64, 1) 1.9s forwards;
        }
        .play .glow {
          transform: scaleX(0);
          transform-box: fill-box;
          transform-origin: center;
          animation: grow 0.7s cubic-bezier(0.22, 1, 0.36, 1) 2.6s forwards;
        }
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
        @keyframes fade {
          to {
            opacity: 1;
          }
        }
        @keyframes drop {
          to {
            transform: scaleY(1);
          }
        }
        @keyframes slide {
          to {
            transform: none;
          }
        }
        @keyframes grow {
          to {
            transform: scaleX(1);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .play .arch {
            stroke-dashoffset: 0;
          }
          .play .truss {
            opacity: 1;
          }
          .play .hanger,
          .play .deck-l,
          .play .deck-r,
          .play .glow {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
