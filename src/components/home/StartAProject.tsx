"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { ButtonLink } from "../ui";

export default function StartAProject() {
  const [copyLabel, setCopyLabel] = useState("Copy email");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(site.email).then(
      () => {
        setCopyLabel("Copied");
        setTimeout(() => setCopyLabel("Copy email"), 1400);
      },
      () => {
        setCopyLabel("Copied");
        setTimeout(() => setCopyLabel("Copy email"), 1400);
      },
    );
  };

  return (
    <section id="start" className="cta bg-navy text-[#F7F7F4] py-[clamp(72px,9vw,140px)]">
      <div className="wrap grid gap-[28px]">
        <div className="label rv text-steel-lt">Start a project</div>
        <h2 className="rv text-[length:var(--h1)] max-w-[14ch] font-semibold leading-[1.02] tracking-[-0.035em]">
          Have a project in mind? Let&apos;s talk.
        </h2>
        <div className="mail rv flex flex-wrap gap-[12px] items-center">
          <code id="email" className="font-semibold text-[length:var(--lead)] select-all text-white py-[10px]">
            {site.email}
          </code>
          <button
            type="button"
            onClick={handleCopyEmail}
            className="copy text-[#F7F7F4] border-[1.5px] border-[#A9B6C6]/45 bg-none rounded-[6px] px-3 py-[7px] font-semibold text-[0.82rem] cursor-pointer active:scale-95 transition-transform"
          >
            {copyLabel}
          </button>
        </div>
        <div className="rv mt-4">
          <ButtonLink href="/contact" variant="ember">
            Start a project
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
