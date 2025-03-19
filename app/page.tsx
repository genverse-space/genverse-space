import Image from "next/image";
import { HeroHeader } from "./components/Header";
import HeroSection from "./components/HeroPage";
import Features from "./components/Features";
import StandOut from "./components/StandOut";
import WhatItDoes from "./components/WhatItDoes";
import GetStarted from "./components/GetStarted";
import FutureSection from "./components/FutureSection";
import FooterSection from "./components/Footer";

export default function Home() {
  return (
    <main>
      <HeroHeader />
      <HeroSection />
      <Features />
      <WhatItDoes />
      <StandOut />
      <FutureSection />
      <GetStarted />
      <FooterSection />
    </main>
  );
}
