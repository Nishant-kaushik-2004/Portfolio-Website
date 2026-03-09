"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/app/lib/data";
import { useSectionInView } from "@/app/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  // This is giving a hydration mismatch error because window.matchMedia is not available during server-side rendering so initially false but then becomes true on the client side, so gives a hydration mismatch. To avoid this, we can just use the mobile animation for all screen sizes since it works well atleast for now but after I add more experiences then I can move vertical line to middle and use desktop animation.
  // const isMobile =
  //   typeof window !== "undefined" &&
  //   window.matchMedia("(max-width: 640px)").matches;

  const mobileAnimation = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  // const desktopAnimation = {
  //   hidden: { opacity: 0, x: 80 },
  //   visible: { opacity: 1, x: 0 },
  // };

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 px-4"
    >
      <SectionHeading>My Experience</SectionHeading>

      <div className="relative max-w-3xl mx-auto mt-12">
        {/* vertical timeline line */}
        <div className="absolute left-6 top-0 h-full w-[3px] bg-gray-300 dark:bg-white/25" />

        <div className="space-y-12">
          {experiencesData.map((item, index) => (
            <motion.div
              key={index}
              // variants={isMobile ? mobileAnimation : desktopAnimation}
              variants={mobileAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative pl-16 md:pl-20"
            >
              {/* icon circle */}
              <div className="absolute left-6 top-5 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-white shadow-md ring-4  dark:bg-slate-800 ring-white/10">
                <span className="text-xl text-blue-500">{item.icon}</span>
              </div>

              {/* card */}
              <div className="rounded-xl border border-gray-200 bg-white/80 p-6 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-slate-900/70">
                {/* arrow */}
                <div className="absolute z-10 -translate-x-full -ml-6 top-8 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[12px] border-r-white/90 dark:border-r-gray-700/80" />

                {/* date */}
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {item.date}
                </p>

                {/* title */}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>

                {/* company */}
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3">
                  {item.location}
                </p>

                {/* description */}
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Using react-vertical-timeline-component caused some issues with animations and responsiveness, so I implemented a custom timeline layout using Tailwind CSS and Framer Motion for smooth animations when each experience card enters the viewport.

// "use client";
// import React from "react";
// import SectionHeading from "./section-heading";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";
// import { experiencesData } from "@/app/lib/data";
// import { useSectionInView } from "@/app/lib/hooks";
// import { useTheme } from "@/context/theme-context";
// import { useInView } from "react-intersection-observer";

// type ExperienceItem = (typeof experiencesData)[number];

// function ExperienceTimelineItem({
//   item,
//   theme,
// }: {
//   item: ExperienceItem;
//   theme: string;
// }) {
//   // Dedicated per-card observer using useInView to trigger animation when the card enters the viewport
//   const { ref: itemRef, inView } = useInView({
//     threshold: 0.2,
//     rootMargin: "0px 0px -40px 0px",
//     triggerOnce: true,
//   });

//   return (
//     <VerticalTimelineElement
//       contentStyle={{
//         background:
//           theme === "light" ? "rgba(255,255,255,0.9)" : "rgba(30,41,59,0.6)",
//         backdropFilter: "blur(10px)",
//         boxShadow:
//           theme === "light"
//             ? "0 10px 30px rgba(0,0,0,0.08)"
//             : "0 10px 30px rgba(0,0,0,0.6)",
//         border:
//           theme === "light"
//             ? "1px solid rgba(0,0,0,0.05)"
//             : "1px solid rgba(255,255,255,0.08)",
//         borderRadius: "16px",
//         padding: "1.6rem 2rem",
//       }}
//       contentArrowStyle={{
//         borderRight:
//           theme === "light"
//             ? "0.4rem solid rgba(255,255,255,0.9)"
//             : "0.4rem solid rgba(30,41,59,0.6)",
//       }}
//       date={item.date}
//       icon={item.icon}
//       iconStyle={{
//         background: theme === "light" ? "white" : "rgba(30,41,59,0.9)",
//         boxShadow: "0 0 0 4px rgba(255,255,255,0.1)",
//         color: "#61dafb",
//         fontSize: "1.4rem",
//       }}
//       visible={inView}
//     >
//       <div className="space-y-3">
//         <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
//           {item.title}
//         </h3>

//         <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
//           {item.location}
//         </p>

//         <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
//           {item.description}
//         </p>
//       </div>
//     </VerticalTimelineElement>
//   );
// }

// export default function Experience() {
//   const { ref } = useSectionInView("Experience");
//   const { theme } = useTheme();

//   return (
//     <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
//       <SectionHeading>My experience</SectionHeading>
//       <VerticalTimeline lineColor="">
//         {experiencesData.map((item, index) => (
//           <React.Fragment key={index}>
//             <ExperienceTimelineItem item={item} theme={theme} />
//           </React.Fragment>
//         ))}
//       </VerticalTimeline>
//     </section>
//   );
// }
