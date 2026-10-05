"use client";

import { useEffect } from "react";
import markup from "./markup";

const THREE_URL = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";

function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const s = document.createElement("script");
    s.src = src;
    s.async = false;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(s);
  });
}

/**
 * The home page, rendered from the approved prototype as-is: markup is server-rendered so the page reads
 * before any script runs, then three.js and the prototype's own script bring it to life.
 */
export default function FunHome() {
  useEffect(() => {
    let cancelled = false;
    (async () => {
      if (!(window as unknown as { THREE?: unknown }).THREE) await loadScript(THREE_URL);
      if (!cancelled) await loadScript("/fun/home.js");
    })().catch(() => {
      // The page stays fully readable without its animations.
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-css-tags -- the ported prototype stylesheet is a static file */}
      <link rel="stylesheet" href="/fun/home.css" precedence="default" />
      <div dangerouslySetInnerHTML={{ __html: markup }} />
    </>
  );
}
