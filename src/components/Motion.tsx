"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

/** Smooth scroll and spring reveals for elements entering the viewport below fold. */
export default function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.1 });
    window.__lenis = lenis;
    let id = 0;
    const raf = (t: number) => {
      lenis.raf(t);
      id = requestAnimationFrame(raf);
    };
    id = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
      window.__lenis = undefined;
    };
  }, []);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    window.__lenis?.scrollTo(0, { immediate: true });

    if (!("IntersectionObserver" in window)) return;

    const fold = window.innerHeight;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("go-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px 12% 0px" },
    );

    const targets = document.querySelectorAll(".rv");
    targets.forEach((el) => {
      if (el.getBoundingClientRect().top > fold) {
        io.observe(el);
      }
    });

    return () => {
      io.disconnect();
    };
  }, [pathname]);

  return null;
}
