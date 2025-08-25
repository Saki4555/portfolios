import { PROJECTS } from "../constants";
import { ComponentsContainer } from "./shared";

const Project = () => {
  return (
    <ComponentsContainer>
    <div className="border border-neutral-900/50 pb-4">
    <h2 className="my-20 text-4xl text-center">Projects</h2>
    
    {PROJECTS.map((project, index) => (
      <div key={index} className="pb-12 flex flex-wrap justify-center">
        <div className="w-full lg:w-1/4 ">
          <img
            src={project.image}
            width={150}
            height={150}
            alt={project.title}
            className="mb-6 rounded"
          />
        </div>
        <div className="w-full max-w-xl lg:w-3/4">
          <h6 className="mb-2 font-semibold">{project.title} - </h6>
          <p className="mb-4 text-neutral-400">{project.description}</p>
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500"
            >
              {tech}
            </span>
          ))}
          {/* live site button ----------- */}
          <div className="space-x-5 pt-4">
            <a
              href="#_"
              className="relative inline-flex items-center px-12 py-1 overflow-hidden text-lg font-medium text-slate-400 border-2 border-slate-600 rounded-full hover:text-slate-200 group hover:bg-gray-50"
            >
              <span className="absolute left-0 block w-full h-0 transition-all bg-slate-950 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="relative text-sm">Github</span>
            </a>
            <a
              href="#_"
              className="relative inline-flex items-center px-12 py-1 overflow-hidden text-lg font-medium text-slate-400 border-2 border-slate-600 rounded-full hover:text-slate-200 group hover:bg-gray-50"
            >
              <span className="absolute left-0 block w-full h-0 transition-all bg-slate-950 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="relative text-sm">Live Site</span>
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
  </ComponentsContainer>
  );
};

export default Project;
