"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { projectsData } from "../lib/data";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const projectsRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: projectsRef,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 0.9], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={projectsRef}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="mb-3 sm:mb-8 last:mb-0 group"
    >
      <section className="bg-gray-100 rounded-lg max-w-[42rem] border border-black/5 overflow-hidden relative   sm:group-even:pl-1  hover:bg-gray-200 transition dark:bg-white/10 dark:hover:bg-white/20 dark:text-white">
        <div className="px-3 pt-4 pb-7 h-full w-full sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[55%] flex flex-col sm:group-odd:mr-[10rem] sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">{description}</p>
          <ul className="flex flex-wrap mt-4 gap-2">
            {tags.map((tag, index) => (
              <li
                className="bg-black/70 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt="Projects that i worked on"
          quality={95}
          className="hidden sm:block absolute top-8 -right-40 w-[20.25rem] sm:w-[28.25rem] rounded-t-lg shadow-2xl   group-even:-left-40 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-1 group-hover:scale-[1.04] group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-1 transition"
        ></Image>
      </section>
    </motion.div>
  );
}
