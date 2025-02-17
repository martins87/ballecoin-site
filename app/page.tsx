import Hero from "./components/Hero";
// import HeroGalaxy from "./components/Hero/HeroGalaxay";
import World from "./components/World";
import WhatSection from "./components/WhatSection";
import WhySection from "./components/WhySection";
import HowSection from "./components/HowSection";
import Roadmap from "./components/Roadmap";
// import Dancers from "./components/Dancers";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <HeroGalaxy /> */}
      <World />
      <WhatSection />
      <WhySection />
      <HowSection />
      <Roadmap />
      {/* <Dancers /> */}
    </main>
  );
}
