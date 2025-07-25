import PortfolioWebsite from "@/public/PortfolioWebsite.png";
import CustomAuthentication from "@/public/CustomAuthentication.png";
import TrueFeedback from "@/public/TrueFeedback.png";
import SensorWatchImage from "@/public/SensorWatchImage.png";
import itemManager from "@/public/itemManager.png";
import { title } from "process";

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
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
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
    imageUrl: SensorWatchImage,
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
    imageUrl: TrueFeedback,
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
    imageUrl: PortfolioWebsite,
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
    imageUrl: itemManager,
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
    imageUrl: CustomAuthentication,
    githubUrl: "https://github.com/Nishant-kaushik-2004/Custom-Auth-Project",
    liveLink: "",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Tailwind",
  "Bootstrap",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Next.js",
  "Auth.js",
  "Framer Motion",
  "Shadcn",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git",
  "Vercel",
  "C",
  "Java",
  "Data Structure And Algorithms",
] as const;
