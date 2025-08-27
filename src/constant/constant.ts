import { IconType } from "react-icons";
import { DiJavascript1 } from "react-icons/di";
import { FaFigma, FaNodeJs, FaReact } from "react-icons/fa";
import { RiJavascriptLine, RiTailwindCssFill } from "react-icons/ri";
import { SiAdobephotoshop, SiMongodb, SiNextdotjs } from "react-icons/si";
import { TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";

export interface NavLink {
  id: number;
  url: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { id: 1, url: "hero", label: "Home" },
  { id: 2, url: "service", label: "Services" },
  { id: 3, url: "resume", label: "Resume" },
  { id: 4, url: "project", label: "Works" },
  { id: 5, url: "skill", label: "Skill" },
  // { id: 6, url: "testimonials", label: "Testimonials" },
  { id: 6, url: "contact", label: "Contact" },
];

export interface typeCardProps {
  title: string;
  description: string;
  icon: string;
}

export const dataCards: typeCardProps[] = [
  {
    title: "UI and UX",
    description:
      "Creating user-friendly interfaces with a focus on seamless interaction and engaging experiences.",
    icon: "cards/layer.png",
  },
  {
    title: "Web and Mobile App",
    description:
      "Building responsive web and mobile applications that deliver performance and scalability.",
    icon: "cards/app.png",
  },
  {
    title: "Design & Creative",
    description:
      "Transforming ideas into visual concepts through innovative and aesthetic design solutions.",
    icon: "cards/creative.png",
  },
  {
    title: "Development",
    description:
      "Implementing clean, efficient, and maintainable code to turn concepts into real-world products.",
    icon: "cards/coding.png",
  },
];

export interface typeResumeCardProps {
  role: string;
  Icon?: IconType;
  date?: string;
  description: string;
  img?: string;
}

export const dataExperience: typeResumeCardProps[] = [
  {
    role: "Full-Stack Developer",
    Icon: FaReact,
    description:
      "Developed and deployed full-stack web applications using ReactJS, Next.js, Node.js, and MongoDB. Enhanced UI/UX with TailwindCSS and Framer Motion.",
  },
  {
    role: "Front-End Developer",
    Icon: SiNextdotjs,
    description:
      "Designed modern user interfaces with ReactJS, Next.js, and TailwindCSS. Added smooth animations using Framer Motion. Collaborated with designers using Figma and Photoshop.",
  },
  {
    role: "Backend Developer",
    Icon: FaNodeJs,
    description:
      "Built RESTful APIs with Node.js and Express. Managed data with MongoDB. Integrated Redux Toolkit for real-time data synchronization.",
  },
];

export const dataMyEducation: typeResumeCardProps[] = [
  {
    date: "Jan 2020 - Dec 2025",
    img: "/LogoDH.png",
    role: "Information Technology",
    description:
      "Studied advanced information technology concepts, problem-solving techniques, and modern tools for professional software development.",
  },
  {
    date: "Jan 2022 - Dec 2023",
    img: "/MindX.png",
    role: "Full Stack Web Development",
    description:
      "Acquired solid skills in front-end and back-end development, database management, and building complete web applications",
  },
];

export interface projectType {
  title: string;
  description: string;
  image: string;
  link: string;
}

export const dataProjects: projectType[] = [
  {
    title: "Chat App",
    description:
      "Apps, Ux/Ui, Tailwindcss, React, Nodejs, Express, MongoDB, Redux Toolkit, Socket.io, Cloudinary",
    image: "/projects/ChatApp.png",
    link: "https://github.com/quannike68/Chatapp",
  },
  {
    title: "Task Manager",
    description:
      "Vite/React, Tailwindcss, Redux Toolkit, Nodejs, Express, MongoDB",
    image: "/projects/TaskManager.png",
    link: "https://github.com/quannike68/Task-manager",
  },
];

export interface skillType {
  id: number;
  name: string;
  icon: IconType;
}

export const dataSkills: skillType[] = [
  { id: 1, name: "JavaScript", icon: RiJavascriptLine },
  { id: 2, name: "TypeScript", icon: TbBrandTypescript },
  { id: 3, name: "React", icon: FaReact },
  { id: 4, name: "Next.js", icon: TbBrandNextjs },
  { id: 5, name: "Node.js", icon: DiJavascript1 },
  { id: 6, name: "Tailwind CSS", icon: RiTailwindCssFill },
  { id: 7, name: "Figma", icon: FaFigma },
  { id: 8, name: "Express.js", icon: FaNodeJs },
  { id: 9, name: "MongoDB", icon: SiMongodb },
  { id: 10, name: "Photoshop", icon: SiAdobephotoshop },
];
