import { Hero } from "./hero";

export const Main = () => {
  return (
    <main className="h-screen">
      <div id="home"></div>
      <Hero />
      <div id="about"></div>
      <div id="contact"></div>
    </main>
  );
};