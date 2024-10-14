import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import PortfolioWebsite from "@/public/PortfolioWebsite.png";
import CustomAuthentication from "@/public/CustomAuthentication.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Anonymous Feedback Messaging Website",
    description:
      "Developed a secure web app using NextJs14,Tailwind CSS, and MongoDB with NextAuth.js for user authentication.Integrated AI-powered message suggestions and built a interactive dashboard using Shadcn for users to manage,view,and delete anonymous messages, and toggle message receiving on/oﬀ.Deployed on Vercel(for frontend) and MongoDB Atlas(database) for seamless cloud scalability.",
    tags: [
      "Next.js 14",
      "Tailwind CSS",
      "TypeScript",
      "MongoDB",
      "NextAuth.js",
      "AI API",
      "Shadcn",
      "ZOD",
    ],
    imageUrl: corpcommentImg,
  },
  {
    title: "Responsive Developer Portfolio Website ",
    description:
      "Built a fully responsive portfolio Website using Next.js with advanced animations powered by Framer Motion. Integrated React.Email & Resend for seamless email functionality, showcasing a modern UI design optimized for performance and user experience with light and dark mode support. Deployed for fast, scalable access across all devices.",
    tags: [
      "Next.js 14",
      "Tailwind CSS",
      "TypeScript",
      "Framer Motion",
      "React.Email & Resend",
    ],
    imageUrl: PortfolioWebsite,
  },
  {
    title: "Custom Authentication System",
    description:
      "Built a secure full-stack user authentication system with Next.js, TypeScript, MongoDB, and JWT for token-based Authentication. Features include user registration(signup), login, and profile dashboard. Integrated email verification using Mailtrap and React-email to enhance security.",
    tags: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "JWT",
      "React-Email",
      "Tailwind CSS",
    ],
    imageUrl: CustomAuthentication,
  },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "Redux",
  "MongoDB",
  "Express",
  "Framer Motion",
  "Java Programming",
  "Data Structure And Algorithms",
  "C Programming",
] as const;
