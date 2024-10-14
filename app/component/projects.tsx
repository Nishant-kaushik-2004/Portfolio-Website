"use client";
import React from "react";
import { projectsData } from "../lib/data";
import SectionHeading from "./section-heading";
import Project from "./project";
import { useSectionInView } from "../lib/hooks";

function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <section id="projects" className="scroll-mt-28 mb-28" ref={ref}>
      <SectionHeading>My projects</SectionHeading>
      <div className="">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default Projects;
