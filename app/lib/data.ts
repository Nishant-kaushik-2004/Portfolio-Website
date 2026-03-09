import PortfolioWebsite from "@/public/PortfolioWebsite.png";
import CustomAuthentication from "@/public/CustomAuthentication.png";
import TrueFeedback from "@/public/TrueFeedback.png";
import SensorWatchImage from "@/public/SensorWatchImage.png";
import itemManager from "@/public/itemManager.png";
import DevTinderImageLight from "@/public/devTinderImageLight.png";
import DevTinderImageDark from "@/public/devTinderImageDark.png";
import React from "react";
import { FaReact } from "react-icons/fa";

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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Developer Intern",
    location: "Fyris",
    description:
      "Contributed to a production-grade web application using Next.js, TypeScript, and PostgreSQL. Improved page load performance by ~25% using SSR/CSR strategies, integrated REST APIs, and developed real-world features while collaborating with the engineering team in a live codebase.",
    icon: React.createElement(FaReact),
    date: "Sep 2025 - Nov 2025",
  },
] as const;

export const projectsData = [
  {
    title: "DevTinder - Developer Matching Platform",
    description:
      "Built a full-stack developer matching platform inspired by Tinder where users can discover developers for networking, send match requests, and chat in real-time. Implemented swipe-based discovery with intelligent pagination and prefetching for smooth UX. Developed secure authentication using JWT cookies and protected routes with role-based authorization. Integrated Socket.io for real-time messaging with sub-150ms latency. Designed scalable REST APIs with Node.js, Express, and MongoDB, handling match requests, chat rooms, and notifications efficiently. Deployed production backend on AWS EC2 with Nginx reverse proxy and HTTPS, while hosting the frontend on Vercel.",
    tags: [
      "React",
      "TypeScript",
      "Socket.io",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Vite",
      "Tailwind CSS",
      "JWT Authentication",
      "AWS EC2",
      "Nginx",
    ],
    images: {
      light: DevTinderImageLight,
      dark: DevTinderImageDark,
    },
    githubUrl: "https://github.com/Nishant-kaushik-2004/Dev-Tinder",
    liveLink: "https://devtinder.vercel.app",
  },
  {
    title: "SensorWatch - Real-Time IoT Monitoring",
    description:
      "Engineered a real-time IoT dashboard using Next.js and MongoDB to process 1000+ daily sensor readings from ESP8266 NodeMCU devices. Integrated ThingSpeak for live temperature, humidity, and rain sensor data with instant alerts on threshold breaches, reducing response time by 40%. Enabled user authentication with NextAuth.js and dual OAuth providers, supporting 50+ users. Added historical data export in CSV, JSON, and XML formats with date-range filtering for detailed analysis.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "ThingSpeak API",
      "NextAuth.js",
      "Framer Motion",
      "CSV/JSON/XML Export",
    ],
    images: {
      light: SensorWatchImage,
      dark: SensorWatchImage,
    },
    githubUrl:
      "https://github.com/Nishant-kaushik-2004/Home_Automation_Project",
    liveLink: "https://home-automation-project.vercel.app",
  },
  {
    title: "Mystery Messaging Website",
    description:
      "Built a secure, full-stack web app enabling users to receive anonymous feedback messages with complete control. Integrated NextAuth.js for authentication, OpenAI API for AI-powered message suggestions, and an elegant dashboard UI with Shadcn for managing, viewing, deleting messages, and toggling message reception.               Deployed on Vercel (frontend) and MongoDB Atlas (cloud database) for seamless performance and scalability.",
    tags: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "NextAuth.js",
      "OpenAI API",
      "Shadcn",
      "ZOD",
    ],
    images: {
      light: TrueFeedback,
      dark: TrueFeedback,
    },
    githubUrl: "https://github.com/Nishant-kaushik-2004/Mystery-Message",
    liveLink: "https://mystery-messaging.vercel.app/",
  },
  {
    title: "Responsive Developer Portfolio Website",
    description:
      "Crafted a fully responsive and performance-optimized portfolio using Next.js 14, TypeScript, and Tailwind CSS. Integrated Framer Motion for smooth animations and React.Email with Resend for real-time contact form functionality. Features include light/dark mode, modern UI design, and seamless deployment for cross-device accessibility.",
    tags: [
      "Next.js 14",
      "Tailwind CSS",
      "TypeScript",
      "Framer Motion",
      "React.Email",
      "Resend",
      "Dark Mode",
      "Responsive Design",
      "vercel",
    ],
    images: {
      light: PortfolioWebsite,
      dark: PortfolioWebsite,
    },
    githubUrl: "https://github.com/Nishant-kaushik-2004/Portfolio-Website",
    liveLink: "https://portfolio-website-drab-kappa-27.vercel.app/",
  },
  {
    title: "ItemManager",
    description:
      "A full-stack web application to add, view, and explore items with descriptions and images. The frontend, built with React and Vite, offers a clean, responsive UI, intuitive forms, toast-based feedback, and item displays with image carousels. The backend, powered by Node.js, Express, and MongoDB, handles secure item insertion with validation and duplicate checks. Deployed on Render, the app uses environment-based API configuration for seamless client-server integration.",
    tags: [
      "Full-Stack",
      "React",
      "Responsive Design",
      "Node.js",
      "MongoDB",
      "Express",
      "Vite",
      "Axios",
      "Tailwind CSS",
      "Mongoose",
      "Render",
      "REST API",
    ],
    images: {
      light: itemManager,
      dark: itemManager,
    },
    githubUrl: "https://github.com/Nishant-kaushik-2004/itemManager",
    liveLink: "https://item-manager-frontend.onrender.com/",
  },
  {
    title: "Custom Authentication System",
    description:
      "Developed a secure full-stack authentication system using Next.js, TypeScript, MongoDB, and JWT for robust token-based login and session management. Implemented user registration, login, and protected profile dashboard with email verification via Mailtrap and React.Email for enhanced security and reliability.",
    tags: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "JWT",
      "React.Email",
      "Tailwind CSS",
      "Mailtrap",
    ],
    images: {
      light: CustomAuthentication,
      dark: CustomAuthentication,
    },
    githubUrl: "https://github.com/Nishant-kaushik-2004/Custom-Auth-Project",
    liveLink: "",
  },
] as const;

export const skillsData = [
  // Core Languages
  "JavaScript",
  "TypeScript",
  "C",
  "Python",
  "Java",

  // Frontend
  "React",
  "Next.js",
  "Redux",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Bootstrap",
  "Framer Motion",
  "Shadcn UI",

  // Backend
  "Node.js",
  "Express.js",

  // Databases
  "MongoDB",
  "PostgreSQL",

  // Authentication & Security
  "JWT Authentication",
  "OAuth",
  "Auth.js",

  // Cloud / DevOps
  "AWS EC2",
  "Vercel",
  "Git",

  // CS Fundamentals
  "Data Structures & Algorithms",
] as const;
