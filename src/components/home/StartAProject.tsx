"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { ButtonLink } from "../ui";

export default function StartAProject() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(site.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    });
  };

  return (
    <section id="contact" className="relative bg-ember text-ember-ink py-[clamp(72px,10vw,140px)] overflow-hidden">
      {/* Background Watermark Text */}
      <div className="absolute right-[-2vw] bottom-[-4vw] text-[length:var(--mega)] font-black text-navy/10 select-none pointer-events-none whitespace-nowrap uppercase tracking-tighter leading-none">
        BAY1CG
      </div>

      <div className="wrap relative z-10 grid gap-8 max-w-4xl">
        <div className="inline-flex items-center gap-2 bg-navy/10 border border-navy/15 text-navy-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider w-fit">
          <span className="w-2 h-2 rounded-full bg-navy animate-pulse" />
          START A PROJECT
        </div>

        <h2 className="text-[length:var(--mega)] font-black text-navy leading-[0.98] tracking-tight text-balance">
          Let&apos;s build <span className="i font-normal">something good.</span>
        </h2>

        <p className="text-navy-2/90 text-lg sm:text-xl font-medium max-w-2xl leading-relaxed">
          Tell us about your project, your timeline, or what&apos;s bugging you about your current site. Francis replies personally within one business day.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <ButtonLink
            href={`mailto:${site.email}?subject=Project%20Inquiry%20-%20Bay1%20Consulting%20Group`}
            className="bg-navy text-paper hover:bg-navy-2 px-8 py-4 rounded-full font-bold text-base shadow-lg transition-all"
          >
            Send Francis an email &rarr;
          </ButtonLink>

          <button
            type="button"
            onClick={handleCopyEmail}
            className="bg-paper/30 hover:bg-paper/50 border border-navy/20 text-navy font-mono text-sm px-4 py-3 rounded-full cursor-pointer transition-colors flex items-center gap-2"
          >
            <span>{site.email}</span>
            <span className="text-xs bg-navy/10 px-2 py-0.5 rounded-full font-sans font-bold">
              {copied ? "Copied!" : "Copy"}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
