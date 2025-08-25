// "use client";

// import React from "react";
// import SkillCard from "./SkillCard";
// import { skills } from "@/constants";

// const SkillsSection = () => {
//   return (
//     <section className="py-16  max-w-5xl mx-auto bg-black text-white">
//       <h2 className="text-3xl font-bold mb-8 text-center">Technologies</h2>
//       <div className="flex items-center justify-center">
//         <div className="grid  grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 ">
//           {skills.map((skill) => (
//             <SkillCard
//               key={skill.name}
//               icon={skill.icon}
//               name={skill.name}
//               glowColor={skill.glowColor}
//             />
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// };

// export default SkillsSection;

"use client";

import React from "react";
import SkillCard from "./SkillCard";
import { skills } from "@/constants";
import { motion } from "framer-motion";

const SkillsSection = () => {
  return (
    <div
     
      className="bg-gradient-to-br flex items-center min-h-screen py-16  from-purple-950/20 via-sky-950/30 to-gray-900/50"
    >
      <section  id="skills" className=" max-w-5xl mx-auto px-5 text-slate-300">
        <h2 className="text-3xl  md:text-4xl mb-12 tracking-wide font-bold  text-center">
          Skills
        </h2>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-5 sm:gap-11">
            {skills.map((skill, index) => (
              <SkillCard
                key={skill.name}
                icon={skill.icon}
                name={skill.name}
                glowColor={skill.glowColor}
                midGradient={skill.midGradient}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsSection;
