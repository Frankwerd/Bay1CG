import Hero from "@/components/home/Hero";
import LogoStorySection from "@/components/home/LogoStorySection";
import WhatWeBuild from "@/components/home/WhatWeBuild";
import FeaturedClient from "@/components/home/FeaturedClient";
import Demo from "@/components/home/Demo";
import WhoWeWorkWith from "@/components/home/WhoWeWorkWith";
import Founder from "@/components/home/Founder";
import StartAProject from "@/components/home/StartAProject";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <LogoStorySection />
      <WhatWeBuild />
      <FeaturedClient />
      <Demo />
      <WhoWeWorkWith />
      <Founder />
      <StartAProject />
    </main>
  );
}
