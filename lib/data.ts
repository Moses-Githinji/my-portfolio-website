import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/mechlocator.png";
import rmtdevImg from "@/public/kejayangu.png";
import wordanalyticsImg from "@/public/mechlocator_admin.png";
import crmdashImg from "@/public/home-page-view.png";

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
    title: "YouTube Bootcamp",
    location: "Nairobi, KE(Virtual)",
    description:
      "I completed the course after a few months of studying. I immediately got a job as a web developer <WordPress> for Kiambu Water & Sanitation Company.",
    icon: React.createElement(LuGraduationCap),
    date: "Jan 2022 - September 2022",
  },
  {
    title: "Front-End Developer",
    location: "Nyeri, KE",
    description: "I worked on improving my software development skills..",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Nairobi, KE",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "August 2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Mechanic Locator",
    description:
      "I have been working as the core app developer for this app. Mechanic Locator is about connecting motorists with reputable and certified garages and mechanics in the country.",
    tags: ["React Naitve", "MongoDB", "Google Maps"],
    link: "",
    imageUrl: corpcommentImg,
  },
  {
    title: "KejaYangu",
    description:
      "This is a real estate website application built with the aim of helping people find suitable rentals of real estate for purchase.",
    tags: ["React", "TypeScript", "Next.js", "MongoDB"],
    link: "",
    imageUrl: rmtdevImg,
  },
  {
    title: "Mechanic Locator Admin Panel",
    description:
      "An admin board to track the performance of the Mechanic Locator app.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind"],
    link: "",
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Refine.dev CRM",
    description:
      "A CRM dashboard with upcoming events, chart showing company's wins and losses, a kanban tasks CRUD view for managing tasks.",
    tags: ["React", "Next.js", "Refine.dev", "Ant Design"],
    link: "https://admin-board-psi.vercel.app/",
    imageUrl: crmdashImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "React Native",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "Framer Motion",
] as const;
