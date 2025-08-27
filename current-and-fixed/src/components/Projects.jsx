
'use client'
import { projects } from "@/constants";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { TabList } from "./TabList";

const Projects = () => {
  const [selectedTab, setSelectedTab] = useState("Fullstack");
  
  // Define tabs
  const tabs = ["Fullstack", "Landingpage", "Documentation"];
  
  // Get projects based on selected tab
  const getProjects = () => {
    // Return projects for the selected category
    return projects[selectedTab] || [];
  };

  const filteredProjects = getProjects();

  return (
   <div className="bg-gradient-to-br py-20  from-purple-950/20 via-sky-950/30 to-gray-900/50">
    <div  id="projects" className="space-y-8   max-w-5xl mx-auto px-5">
    <h2 className="text-3xl text-center  md:text-4xl mb-10 tracking-wider text-slate-300 font-bold ">
         Projects
       </h2>
       <div className="flex justify-center mb-8">
         <TabList tabs={tabs} onTabChange={setSelectedTab} />
       </div>
     {filteredProjects.map((project, idx) => (
       <ProjectCard
         key={idx + 1}
         idx={idx}
         title={project.title}
         description={project.description}
         image={project.image}
         width={project.width}
         height={project.height}
         techStack={project.techStack}
         github={project.github}
         live={project.live}
       />
     ))}
   </div>
  </div>
  );
};

export default Projects;
