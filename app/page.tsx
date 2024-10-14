import Intro from "@/app/component/intro";
import SectionDivider from "./component/sectionDivider";
import About from "./component/about";
import Projects from "./component/projects";
import Skills from "./component/skills";
import Contact from "./component/contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro></Intro>
      <SectionDivider></SectionDivider>
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
    </main>
  );
}
