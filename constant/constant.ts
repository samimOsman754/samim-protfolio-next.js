import NewsPortal from "@/public/images/NewsPortal.png";
import FullStackBlogApp from "@/public/images/Full-Stack-Blog-App.png";
import FurnitureApp from "@/public/images/PantoFurniture.png";
import WebAgencyApp from "@/public/images/WebAgency.png";

export const NavLinks = [
  {
    id: 1,
    url: "#home",
    label: "Home",
  },
  {
    id: 2,
    url: "#services",
    label: "Services",
  },
  {
    id: 3,
    url: "#resume",
    label: "Resume",
  },
  {
    id: 4,
    url: "#projects",
    label: "Projects",
  },
  {
    id: 5,
    url: "#skills",
    label: "Skills",
  },
  {
    id: 6,
    url: "#testimonials",
    label: "Testimonials",
  },
  {
    id: 7,
    url: "#contact",
    label: "Contact",
  },
];

export const ProjectsData = [
  {
    id: 1,
    title: "Next.js-news-portal",
    description:
      "The Next.js News Portal is a modern web application built with Next.js and TypeScript. It’s designed to display news articles dynamically, likely using API data. The project features a clean, responsive layout and includes components for listing news, viewing details, and managing routes with Next.js features like static generation or server-side rendering. It’s hosted on Vercel, making it a good example of a fast, SEO-friendly news website built with modern web technologies.",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "API",
      "Shadcn/UI",
      "Tailwind CSS",
    ],
    image: NewsPortal,
    liveUrl: "https://next-js-news-portal-three.vercel.app/",
    githubUrl: "https://github.com/samimOsman754/Next.js-news-portal",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates. Users can create projects, assign tasks, set deadlines, and track progress.",
    technologies: [
      "Next.js",
      "Firebase",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    image: FullStackBlogApp,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description:
      "Analytics dashboard for social media metrics. Displays real-time engagement data, follower growth, and post performance across multiple platforms.",
    technologies: [
      "Next.js",
      "Chart.js",
      "API Integration",
      "React",
      "Tailwind CSS",
    ],
    image: WebAgencyApp,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Weather Forecast App",
    description:
      "A weather application with real-time forecasts, interactive maps, and weather alerts. Provides 7-day forecasts and detailed weather information.",
    technologies: ["Next.js", "Weather API", "Mapbox", "React", "Tailwind CSS"],
    image: FurnitureApp,
    liveUrl: "#",
    githubUrl: "#",
  },
];

export const ContactInfo = {
  phone: "+8801637657587",
  email: "samimosman812@gmail.com",
  address: "Noakhli, Bangladesh",
  title: "Get in Touch",
  description: "Let's have a conversation about how I can help move your project forward.",
};

export const SocialLinks = [
  {
    id: 1,
    name: "Facebook",
    url: "https://www.facebook.com/Samimosman2001",
    icon: "FaFacebook",
    hoverColor: "hover:bg-blue-800",
  },
  {
    id: 2,
    name: "Instagram",
    url: "https://www.instagram.com/_samim__osman_/",
    icon: "FaInstagram",
    hoverColor: "hover:bg-pink-700",
  },
  {
    id: 3,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/samim-osman-/",
    icon: "FaLinkedinIn",
    hoverColor: "hover:bg-blue-500",
  },
  {
    id: 4,
    name: "GitHub",
    url: "https://github.com/samimOsman754",
    icon: "FaGithub",
    hoverColor: "hover:bg-gray-700",
  },
];
