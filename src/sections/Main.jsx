import { About } from "./about";
import { Hero } from "./hero";

export const Main = () => {
  return (
    <main className="h-screen">
      <div id="home"></div>
      <Hero />
      <div id="about"></div>
      <About />
      <div id="contact"></div>
    </main>
  );
};