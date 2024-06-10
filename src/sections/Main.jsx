import FadeInSection from "../components/FadeIn";
import { About } from "./about";
import { Contact } from "./contact";
import { Hero } from "./hero";
import { Projects } from "./projects";

export const Main = () => {
  return (
    <main>
      <Hero />
      {[About, Projects, Contact].map((Section, index) => (
        <FadeInSection key={index}>
          <Section />
        </FadeInSection>
      ))}
    </main>
  );
};
