"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { projectsData } from "../lib/data";
import { ExternalLink } from "lucide-react";
import { FaGithubSquare } from "react-icons/fa";
import { useTheme } from "@/context/theme-context";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  images,
  githubUrl,
  liveLink,
}: ProjectProps) {
  const projectsRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: projectsRef,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 0.9], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const { theme } = useTheme();

  return (
    <motion.div
      ref={projectsRef}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="mb-3 sm:mb-20 last:mb-0 group relative z-10"
    >
      <section className="bg-gray-100 rounded-lg max-w-[65rem] border border-black/5 overflow-hidden relative sm:group-even:pl-1 hover:bg-gray-200 transition dark:bg-gray-900/60 dark:hover:bg-black/30 dark:text-white">
        <div className="px-3 pt-4 pb-7 h-full w-full sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[52%] flex flex-col sm:group-even:ml-[45%]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>

          {/* Project Links */}
          <div className="flex items-center gap-3 mt-4">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800/90 text-white rounded-lg hover:bg-gray-700/90 transition-colors text-sm font-medium dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                <FaGithubSquare size={16} />
                <span>Code</span>
              </a>
            )}
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors text-sm font-medium"
              >
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          {/* Tags */}
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
          src={theme === "light" ? images.dark : images.light}
          alt="Projects that i worked on"
          quality={95}
          className="hidden sm:block absolute top-8 -right-24 w-[20.25rem] sm:w-[36rem] rounded-t-lg shadow-2xl group-even:-left-28 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-1 group-hover:scale-[1.04] group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-1 transition"
        />
      </section>
    </motion.div>
  );
}

{
  /* <motion.div
      ref={projectsRef}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="mb-3 sm:mb-20 last:mb-0 group"
    >
      <section className="bg-gray-100 rounded-lg max-w-[55rem] border border-black/5 overflow-hidden relative   sm:group-even:pl-1  hover:bg-gray-200 transition dark:bg-white/10 dark:hover:bg-white/20 dark:text-white">
        <div className="px-3 pt-4 pb-7 h-full w-full sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[55%] flex flex-col sm:group-odd:mr-[10rem] sm:group-even:ml-[22rem]">
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
          className="hidden sm:block absolute top-8 -right-24 w-[20.25rem] sm:w-[28.25rem] rounded-t-lg shadow-2xl  group-even:-left-28 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-1 group-hover:scale-[1.04] group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-1 transition"
        ></Image>
      </section>
    </motion.div> */
}
