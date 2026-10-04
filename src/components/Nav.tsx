"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";
import { Wordmark } from "./Logo";
import { ButtonLink, cx } from "./ui";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) window.__lenis?.stop();
    else window.__lenis?.start();
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={cx(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500",
        scrolled && !open ? "border-rule bg-bg" : "border-transparent",
      )}
    >
      <div className="wrap flex h-16 items-center justify-between md:h-20">
        <Link
          href="/"
          aria-label="Bay1 Consulting Group, home"
          className="relative z-10"
          onClick={() => setOpen(false)}
        >
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname.startsWith(item.href) ? "page" : undefined}
              className="label text-[12px] transition-colors hover:text-signal aria-[current=page]:text-signal"
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink href="/contact" className="h-10 px-5">
            Book a call
          </ButtonLink>
        </nav>

        <button
          type="button"
          className="label relative z-10 h-10 md:hidden"
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
        className="fixed inset-0 bg-carbon pt-24 text-bone md:hidden"
      >
        <nav className="wrap flex flex-col gap-6" aria-label="Mobile">
          {[...nav, { href: "/contact", label: "Contact" }].map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="display flex items-baseline gap-4 text-[12vw]"
              onClick={() => setOpen(false)}
            >
              <span className="label text-stone">0{i + 1}</span>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
