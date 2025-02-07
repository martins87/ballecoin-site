import Hero from "./components/Hero";
import World from "./components/World";
import Talents from "./components/Talents";
import HowToJoin from "./components/HowToJoin";

export default function Home() {
  return (
    <main>
      <Hero />
      <World />
      <HowToJoin />
      <Talents />
    </main>
  );
}
