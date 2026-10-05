import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import FeaturedClient from "@/components/home/FeaturedClient";
import ProblemPicker from "@/components/home/ProblemPicker";
import LogoStorySection from "@/components/home/LogoStorySection";
import Demo from "@/components/home/Demo";
import Founder from "@/components/home/Founder";
import StartAProject from "@/components/home/StartAProject";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <Marquee />
      <FeaturedClient />
      <ProblemPicker />
      <LogoStorySection />
      <Demo />
      <Founder />
      <StartAProject />
    </main>
  );
}
