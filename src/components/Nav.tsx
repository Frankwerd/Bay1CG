"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";
import { Wordmark } from "./Logo";
import { ButtonLink } from "./ui";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) window.__lenis?.stop();
    else window.__lenis?.start();
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-[#1C1F5E]/95 backdrop-blur-sm border-b border-white/10">
      <div className="wrap flex h-[68px] items-center justify-between gap-4">
        <Link
          href="/"
          aria-label="Bay1 Consulting Group home"
          className="relative z-10"
          onClick={() => setOpen(false)}
        >
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-7 text-[0.92rem] text-steel-lt md:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname.startsWith(item.href) ? "page" : undefined}
              className="transition-colors hover:text-white aria-[current=page]:text-white"
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink href="/contact" variant="ember" className="!h-10 !px-4 !text-[0.88rem]">
            Start a project
          </ButtonLink>
        </nav>

        <button
          type="button"
          className="label relative z-10 h-10 text-steel-lt md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-0 bg-navy pt-24 text-[#F7F7F4] md:hidden z-40"
      >
        <nav className="wrap flex flex-col gap-6" aria-label="Mobile">
          {[...nav, { href: "/contact", label: "Start a project" }].map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-baseline gap-4 text-[2rem] font-semibold tracking-tight"
              onClick={() => setOpen(false)}
            >
              <span className="text-sm font-semibold text-ember">0{i + 1}</span>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
