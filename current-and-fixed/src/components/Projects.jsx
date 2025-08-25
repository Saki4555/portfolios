import { projects } from "@/constants";
import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
   <div className="bg-gradient-to-br py-20  from-purple-950/20 via-sky-950/30 to-gray-900/50">
     <div  id="projects" className="space-y-8   max-w-5xl mx-auto px-5">
     <h2 className="text-3xl text-center  md:text-4xl mb-10 tracking-wider text-slate-300 font-bold ">
          Projects
        </h2>
      {projects.map((project, idx) => (
        <ProjectCard
          key={idx + 1}
          idx={idx}
          title={project.title}
          description={project.description}
          image={project.image}
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
