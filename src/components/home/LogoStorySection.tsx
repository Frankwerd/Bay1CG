"use client";

import dynamic from "next/dynamic";

const LogoStory = dynamic(() => import("@/components/scene/LogoStory"), {
  ssr: false,
});

export default function LogoStorySection() {
  return <LogoStory />;
}
