"use client";

import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "../lib/hooks";

function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-36 sm:scroll-mt-52"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a 3rd-year B.Tech student at IIIT kalyani(W.B), pursuing my degree
        in Electronics and communication(ECE) with a strong interest in
        <span className="font-medium italic"> coding</span>. I’m passionate about creating seamless, efficient, and user-friendly solutions. My core stack is{" "}
        <span className="font-medium">
          React, Next.js, Node.js,express.js and MongoDB
        </span>
        . I am also familiar with TypeScript.
        <span className="italic"> My favorite part of programming</span> is the
        problem-solving aspect. I love the feeling of finally figuring out
        a solution to a problem I am always looking to learn new technologies. I
        am currently looking for a{" "}
        <span className=" underline">Internship</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing and
        watching cricket. I also enjoy{" "}
        <span className="font-medium">exploring and learning new things</span>.
      </p>
    </motion.section>
  );
}

export default About;
