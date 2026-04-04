import AiChatApp from "@/public/images/Ai-Chat-App.png";
import ZegocloudApp from "@/public/images/Zegocloud.png";
import NewsPortal from "@/public/images/NewsPortal.png";
import FullStackBlogApp from "@/public/images/Full-Stack-Blog-App.png";
import FurnitureApp from "@/public/images/PantoFurniture.png";
import WebAgencyApp from "@/public/images/WebAgency.png";

export const NavLinks = [
  {
    id: 1,
    url: "#",
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
    title: "AI Chat App",
    description:
      "The website is a simple AI chatbot application that allows users to send messages and receive AI-generated responses in real time. It has a clean, minimal interface, runs directly in the browser, and is mainly used for learning, testing, or showcasing AI integration in web development.",
    technologies: [
      "Next.js",
      "TypeScript",
      "OpenRouter",
      "Tailwind CSS",
      "Shadcn/UI",
      "Clerk",
    ],
    image: AiChatApp,
    liveUrl: "https://ai-chat-app-six-chi.vercel.app/",
    githubUrl: "https://github.com/samimOsman754/AI-Chat-App",
  },
  {
    id: 2,
    title: "ZEGOCLOUD Video Call App",
    description:
      "The ZEGOCLOUD Video Call App is a real-time video communication application built with Next.js and TypeScript. It leverages the ZEGOCLOUD SDK to provide high-quality video calling features, including one-on-one and group calls. The app features a user-friendly interface styled with Tailwind CSS, allowing users to easily connect and communicate.",
    technologies: ["Next.js", "TypeScript", "ZEGOCLOUD", "Tailwind CSS"],
    image: ZegocloudApp,
    liveUrl: "https://zegocloud-video-app.vercel.app/",
    githubUrl: "https://github.com/samimOsman754/zegocloud_video_app",
  },
  {
    id: 3,
    title: "Next.js-news-portal",
    description:
      "The Next.js News Portal is a modern web application built with Next.js and TypeScript. It’s designed to display news articles dynamically, likely using API data. The project features a clean, responsive layout and includes components for listing news, viewing details, and managing routes with Next.js features like static generation or server-side rendering. It’s hosted on Vercel, making it a good example of a fast, SEO-friendly news website built with modern web technologies.",
    technologies: ["Next.js", "TypeScript", "API", "Shadcn/UI", "Tailwind CSS"],
    image: NewsPortal,
    liveUrl: "https://next-js-news-portal-three.vercel.app/",
    githubUrl: "https://github.com/samimOsman754/Next.js-news-portal",
  },
  {
    id: 4,
    title: "Full-Stack Blog App",
    description:
      "Full Stack Blog App is a web application built with Next.js and TypeScript that allows users to create, view, and manage blog posts. It combines both the frontend and backend in a single project, featuring modern development tools like Tailwind CSS, PostCSS, and ESLint. The app is designed for scalability and deployed on Vercel for smooth performance and easy updates.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "API",
      "Clerk",
    ],
    image: FullStackBlogApp,
    liveUrl: "https://full-stack-blog-app-olive.vercel.app/",
    githubUrl: "https://github.com/samimOsman754/full-stack-blog-app",
  },
  {
    id: 5,
    title: "Web Code Agency",
    description:
      "Web Code Agency is a modern and visually engaging landing page designed for a fictional digital agency or freelance development team. Built using React and Tailwind CSS, the project showcases a clean, responsive, and mobile-friendly interface with smooth animations and structured sections.",
    technologies: ["JavaScript", "React", "Tailwind CSS"],
    image: WebAgencyApp,
    liveUrl: "https://web-code-agency-one.vercel.app/",
    githubUrl: "https://github.com/samimOsman754/web-code-agency",
  },
  {
    id: 6,
    title: "Furniture App",
    description:
      "This is a modern, responsive e-commerce web application for a furniture store built using React.js. The site showcases a clean and minimal design that highlights various furniture products with intuitive navigation and user-friendly interactions.",
    technologies: ["JavaScript", "React", "Tailwind CSS"],
    image: FurnitureApp,
    liveUrl: "https://furniture-site-react.vercel.app/",
    githubUrl:
      "https://github.com/samimOsman754/furniture-site-react/tree/main",
  },
];

export const ContactInfo = {
  phone: "+8801637657587",
  email: "samimosman812@gmail.com",
  address: "Noakhli, Bangladesh",
  title: "Get in Touch",
  description:
    "Let's have a conversation about how I can help move your project forward.",
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
