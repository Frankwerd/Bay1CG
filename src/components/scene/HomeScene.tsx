"use client";

import dynamic from "next/dynamic";

// WebGL never renders on the server; the page reads fine before the scene arrives.
const Scene = dynamic(() => import("./Scene"), { ssr: false });

export default function HomeScene() {
  return <Scene />;
}
