import { HeroHeader } from "./components/Header";
import HeroSection from "./components/HeroPage";
import Features from "./components/Features";
import StandOut from "./components/StandOut";
import WhatItDoes from "./components/WhatItDoes";
import GetStarted from "./components/GetStarted";
import FooterSection from "./components/Footer";
import FAQs from "./components/Faqs";
import RoadmapSection from "./components/Roadmap";

export default function Home() {
  return (
    <main>
      <HeroHeader />
      <HeroSection />
      <Features />
      <WhatItDoes />
      <StandOut />
      <RoadmapSection />
      <GetStarted />
      <FAQs />
      <FooterSection />
    </main>
  );
}
