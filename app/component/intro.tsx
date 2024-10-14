"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import { HiDownload } from "react-icons/hi";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "../lib/hooks";
import { useActiveSectionContext } from "@/context/activeSectionContext";

function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setTimeOfLastClick, setActiveSection } = useActiveSectionContext();
  return (
    <section
      className="mb-28 max-w-[50rem] text-center sm:mb-0 2xl:max-w-[57rem] scroll-mt-[100rem]"
      id="home"
      ref={ref}
    >
      <div className="flex justify-center items-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={
                "/portfolio profile picture.jpeg"
              }
              alt="Resume holder image"
              width="192"
              height="192"
              priority={true}
              className="h-24 w-24 border-[0.35rem] rounded-full border-white object-cover shadow-xl bg-yellow-700"
            ></Image>
          </motion.div>
          <motion.span
            className="text-4xl absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.p
        className="text-xl mb-10 mt-4 font-medium !leading-[1.5] sm:text-2xl xl:text-3xl 2xl:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Nishant.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with expertise
        in building <span className=" italic">dynamic</span>,{" "}
        <span className="italic">high-performance</span> and{" "}
        <span className="italic">responsive</span> web applications. I
        specialize in <span className="font-bold">MERN</span> stack development
        and have additional experience with <span className="font-bold">Next.js</span>. I
        enjoy building <span className="italic">sites</span>.
      </motion.p>
      <motion.div
        className="flex justify-center items-center flex-col sm:flex-row
      gap-2 px-4 sm:text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-4 py-2  flex items-center gap-2 rounded-full w-max sm:px-7 sm:py-4 outline-none focus:scale-110  hover:scale-105 hover:bg-gray-950 active:scale-100 transition"
          onClick={() => {
            setTimeOfLastClick(Date.now);
            setActiveSection("Contact");
          }}
        >
          Contact me here{" "}
          <HiArrowNarrowRight className="opacity-70 group-hover:translate-x-1 transition  " />
        </Link>
        <a
          className="group bg-white px-4 py-2  flex items-center gap-2 rounded-full w-max sm:px-7 sm:py-4 hover:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 "
          href="/Nishant_Kaushik_Resume.pdf"
          download
        >
          Download CV
          <HiDownload className="opacity-60 group-hover:translate-y-0.5 transition" />
        </a>
        <a
          className="bg-white p-4 sm:p-4 flex items-center rounded-full w-max text-gray-700 text-[1.20rem] hover:scale-[1.20] transition cursor-pointer border border-black/10 hover:text-gray-950 dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/nishant-kaushik-769899272/"
          target="_blank"
        >
          <AiFillLinkedin />
        </a>
        <a
          className="bg-white p-3 sm:p-4 flex items-center rounded-full w-max text-gray-700
        text-[1.20rem] transition cursor-pointer border border-black/10 hover:text-gray-950 hover:scale-[1.15] dark:bg-white/10 dark:text-white/60 "
          href="https://github.com/Nishant-kaushik-2004"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}

export default Intro;
