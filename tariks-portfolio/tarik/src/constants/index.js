


import react from '../assets/skills/react.png';
import tailwind from '../assets/skills/tailwind.png';
import nodejs from '../assets/skills/nodejs.png';
import nextjs from '../assets/skills/nextjs.png';
import mongodb from '../assets/skills/mongodb.png';
import mysql from '../assets/skills/mysql.png';
import js from '../assets/skills/js.png';
import git from '../assets/skills/git.png';
import github from '../assets/skills/github.png';
import html5 from '../assets/skills/html5.png';
import cplusplus from '../assets/skills/cplusplus.png';
import firebase from '../assets/skills/firebase.png';


import project1 from '../assets/projects/project-1.png'
import project2 from '../assets/projects/project-2.png'
import project3 from '../assets/projects/project-3.png'

export const skills = [
  {
    name: "React",
    icon: react,
    glowColor: "shadow-[0_0_30px_10px_#61dafb44]", // React light blue
    midGradient: "bg-[#61dafb]",
  },
  {
    name: "Tailwind",
    icon: tailwind,
    glowColor: "shadow-[0_0_30px_10px_#06b6d444]", // Tailwind cyan
    midGradient: "bg-[#06b6d4]",
  },
  {
    name: "Node.js",
    icon: nodejs,
    glowColor: "shadow-[0_0_30px_10px_#83cd2944]", // Node.js green
    midGradient: "bg-[#83cd29]",
  },
  {
    name: "Next.js",
    icon: nextjs,
    glowColor: "shadow-[0_0_30px_10px_#ffffff44]", // Next.js white/gray
    midGradient: "bg-[#ffffff]",
  },
  {
    name: "MongoDB",
    icon: mongodb,
    glowColor: "shadow-[0_0_30px_10px_#47a24844]", // MongoDB green
    midGradient: "bg-[#47a248]",
  },
  {
    name: "MySQL",
    icon: mysql,
    glowColor: "shadow-[0_0_30px_10px_#00758f44]", // MySQL blue
    midGradient: "bg-[#00758f]",
  },
  {
    name: "JavaScript",
    icon: js,
    glowColor: "shadow-[0_0_30px_10px_#f7df1e44]", // JavaScript yellow
    midGradient: "bg-[#f7df1e]",
  },
  {
    name: "Git",
    icon: git,
    glowColor: "shadow-[0_0_30px_10px_#f0503244]", // Git orange
    midGradient: "bg-[#f05032]",
  },
  {
    name: "GitHub",
    icon: github,
    glowColor: "shadow-[0_0_30px_10px_#6e768166]", // GitHub dark gray
    midGradient: "bg-[#24292e]",
  },
  {
    name: "HTML5",
    icon: html5,
    glowColor: "shadow-[0_0_30px_10px_#e34c2644]", // HTML5 orange
    midGradient: "bg-[#e34c26]",
  },
  {
    name: "C++",
    icon: cplusplus,
    glowColor: "shadow-[0_0_30px_10px_#004482aa]", // C++ blue
    midGradient: "bg-[#004482]",
  },
  {
    name: "Firebase",
    icon: firebase,
    glowColor: "shadow-[0_0_30px_10px_#ffca2844]", // Firebase yellow/orange
    midGradient: "bg-[#ffca28]",
  },
];





export const projects = [
  {
    title: "Ferris Restaurant",
    description: "An online food ordering platform with user and admin dashboards for Browse, ordering, profile management, and menu administration.",
    image: project1,
    techStack: ["React", "Tailwind CSS", "Firebase", "React Router DOM", "React Query", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/Saki4555/Ferris-Restaurant",
    live: "https://ferris-restaurant.vercel.app",
  },
  {
    title: "TMT Group",
    description: "A multi-part web platform for TMT Group, featuring an engineering services site and a full-stack travel booking system with user authentication and admin capabilities for managing deals.",
    image: project2,
    techStack: ["React", "Tailwind CSS", "Express.js", "MongoDB", "Mongoose", "Firebase", "JWT", "TanStack Query", "React Router"],
    github: "https://github.com/Saki4555/tmt-engineering-and-landing-page",
    live: "https://tmt-group.vercel.app",
  },
  {
    title: "Jewelry Shop",
    description: "A full-stack jewelry e-commerce platform featuring user authentication, Browse detailed listings, managing user's own items, and a shopping cart for authenticated users..",
    image: project3,
    techStack: ["React", "Tailwind CSS", "DaisyUI", "Firebase", "React Router DOM", "Express.js", "MongoDB"],
    github: "https://github.com/Saki4555/Simple-Jewelry-Shop",
    live: "https://simple-jewelry-shop.web.app",
  },
];
