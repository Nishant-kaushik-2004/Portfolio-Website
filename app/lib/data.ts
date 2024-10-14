import PortfolioWebsite from "@/public/PortfolioWebsite.png";
import CustomAuthentication from "@/public/CustomAuthentication.png";
import TrueFeedback from "@/public/TrueFeedback.png"

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
  {
    name: "Contact",
    hash: "#contact",
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
    imageUrl: TrueFeedback,
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
