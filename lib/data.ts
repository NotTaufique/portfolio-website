import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import project1 from "@/public/project1.png";
import project2 from "@/public/project2.png";
import project3 from "@/public/project3.png";
import { BsBrowserSafari } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Website Design and Development",
    // location: "Miami, FL",
    description:
      "Craft visually appealing, user-friendly websites tailored to meet your unique business needs.",
    icon: React.createElement(BsBrowserSafari),
    // date: "2019",
  },
  {
    title: "Website Maintenance and Support",
    // location: "Orlando, FL",
    description:
      "Ensure your website remains secure, up-to-date, and optimized for peak performance with our website maintenance and support services.",
    icon: React.createElement(BiSupport),
    // date: "2019 - 2021",
  },
  {
    title: "Digital Marketing",
    // location: "Houston, TX",
    description:
      "Elevate your online visibility and attract more customers with our comprehensive digital marketing strategies. From search engine optimization (SEO) and pay-per-click (PPC) advertising to social media marketing and content creation",
    icon: React.createElement(FaMoneyBillTrendUp),
    // date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Brainwave",
    description:
      "Modern UI/UX website. Its sleek design, seamless animations, and overall user experience set a high standard, serving as a future modern applications",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: project1,
  },
  {
    title: "Gericht",
    description: "Modern Restaurant Landing Page",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: project2,
  },
  {
    title: "HooBank",
    description: "Modern UI/UX Bank Landing Page",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: project3,
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
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
