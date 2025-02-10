import Hero from "./components/Hero";
import World from "./components/World";
import Dancers from "./components/Dancers";
import HowToJoin from "./components/HowToJoin";
import WhatIs from "./components/WhatIs";

export default function Home() {
  return (
    <main>
      <Hero />
      <World />
      <WhatIs />
      <HowToJoin />
      <Dancers />
    </main>
  );
}
