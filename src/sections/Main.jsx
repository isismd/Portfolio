import FadeInSection from "../components/FadeIn";
import { About } from "./about";
import { Contact } from "./contact";
import { Hero } from "./hero";
import { Projects } from "./projects";
import { Skills } from "./skills";

export const Main = () => {
  return (
    <main>
      <Hero />
      {[About, Skills, Projects, Contact].map((Section, index) => (
        <FadeInSection key={index}>
          <Section />
        </FadeInSection>
      ))}
    </main>
  );
};
