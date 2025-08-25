// import { PROJECTS } from "../constants";

import ProjectSlider from "./carousel/ProjectSlider";
import { motion } from "motion/react";
const Project = () => {
  return (
    <div id="work" className="border-b border-neutral-900 pt-10 pb-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.7 }}
        className="my-20 text-4xl text-center"
      >
        Work
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.7,
        }}
        className="flex justify-center lg:px-16"
      >
        <ProjectSlider></ProjectSlider>
      </motion.div>
    </div>
  );
};

export default Project;
