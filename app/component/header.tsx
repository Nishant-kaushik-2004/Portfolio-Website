"use client";
import React from "react";
import { motion } from "framer-motion";
import { links } from "../lib/data";
import Link from "next/link";
import "@/app/globals.css";
import { useActiveSectionContext } from "@/context/activeSectionContext";
export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <header className="z-[999] relative">
      <motion.div
        className="flex h-[4.5rem] w-full bg-white fixed top-0  left-1/2  rounded-none border border-white border-opacity-40 bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[30rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav
        className="flex fixed h-12 top-[0.15rem] left-1/2
    -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 "
      >
        <ul className="flex gap-y-1 w-[22rem] items-center justify-center flex-wrap text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5 ">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="h-3/4 flex items-center justify-center relative"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={link.hash}
                className={` flex w-full items-center justify-center p-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300 ${
                  activeSection === link.name &&
                  "text-gray-950 dark:text-[#d1d5db]"
                }`}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {activeSection === link.name && (
                  <motion.span
                    className="bg-gray-100 absolute rounded-full inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
