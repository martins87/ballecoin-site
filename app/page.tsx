import Hero from "./components/Hero";
import World from "./components/World";
import WhatSection from "./components/WhatSection";
import WhySection from "./components/WhySection";
import HowSection from "./components/HowSection";
import Dancers from "./components/Dancers";

export default function Home() {
  return (
    <main>
      <Hero />
      <World />
      <WhatSection />
      <WhySection />
      <HowSection />
      <Dancers />
    </main>
  );
}
