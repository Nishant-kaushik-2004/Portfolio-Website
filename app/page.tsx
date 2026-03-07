import Intro from "@/app/component/intro";
import SectionDivider from "./component/sectionDivider";
import About from "./component/about";
import Projects from "./component/projects";
import Skills from "./component/skills";
import Contact from "./component/contact";
import Particle3DUniverse from "./component/Particle3DUniverse";
import "./globals.css";
import Experience from "./component/experiences";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Particle3DUniverse />
      <Intro></Intro>
      <SectionDivider></SectionDivider>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
    </main>
  );
}
