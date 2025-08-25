import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiTailwindcss, SiExpress } from "react-icons/si";
import { ComponentsContainer } from "./shared";

const Technologies = () => {
  return (
   <ComponentsContainer> <div className="border border-neutral-900/50 pb-24">
   <h1 className="my-20 text-center text-4xl">Technologies</h1>
   <div className="flex flex-wrap justify-center items-center gap-4">
     <div className="rounded-2xl border-4 border-neutral-900 p-4">
       <RiReactjsLine className="text-7xl text-cyan-400" />
     </div>
     <div className="rounded-2xl border-4 border-neutral-900 p-4">
       <SiTailwindcss className="text-7xl text-sky-500" />
     </div>
     <div className="rounded-2xl border-4 border-neutral-900 p-4">
       <SiMongodb className="text-7xl text-green-600" />
     </div>
     <div className="rounded-2xl border-4 border-neutral-900 p-4">
       <SiExpress className="text-7xl" />
     </div>
   </div>
 </div></ComponentsContainer>
  );
};

export default Technologies;
