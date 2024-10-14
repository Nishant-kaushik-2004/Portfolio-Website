"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "../lib/data";
import { useSectionInView } from "../lib/hooks";
import { motion, spring } from "framer-motion";
export default function Skills() {
  const { ref } = useSectionInView("Skills");
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (idx: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * idx,
      },
    }),
  };
  return (
    <section
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      id="skills"
      ref={ref}
    >
      <SectionHeading>Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, idx) => (
          <motion.li
            className="bg-white border border-black/[0.1] rounded-xl px-4 py-1 sm:px-5 sm:py-3 dark:bg-white/10  dark:text-white/80"
            key={idx}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={idx}
          >
            <span>{skill}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
