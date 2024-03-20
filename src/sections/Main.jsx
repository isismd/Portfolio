import { About } from "./about";
import { Hero } from "./hero";
import { Projects } from "./projects";
import { Skills } from "./skills";

export const Main = () => {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
    </main>
  );
};