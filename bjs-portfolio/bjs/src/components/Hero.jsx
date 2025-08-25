import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/hero-pic-500.png";
import { useState } from "react";

import { motion } from "motion/react";

const herSectionVariants = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  const [isTranslated, setIsTranslated] = useState(false);
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-28">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={herSectionVariants(0)}
              initial="hidden"
              animate="visible"
              className="pb-12 text-4xl font-thin tracking-tight lg:text-6xl lg:mt-16"
            >
              Bijoy Shangkor Sarker
            </motion.h1>
            <motion.span
              variants={herSectionVariants(0.4)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-4xl tracking-tight"
            >
              Site Engineer
            </motion.span>
            <motion.p
              variants={herSectionVariants(0.8)}
              initial="hidden"
              animate="visible"
              className="max-w-xl my-2 font-light tracking-tighter"
            >
              {isTranslated ? HERO_CONTENT.ban : HERO_CONTENT.eng}
            </motion.p>
          </div>

          {/* translate button -------------------------------- */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.5 }}
            onClick={() => setIsTranslated(!isTranslated)}
            className="relative flex mt-1 items-center px-6 py-2 overflow-hidden font-medium transition-all bg-violet-700 rounded-md group"
          >
            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-violet-900 rounded group-hover:-mr-4 group-hover:-mt-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-violet-900 rounded group-hover:-ml-4 group-hover:-mb-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-violet-800 rounded-md group-hover:translate-x-0"></span>
            <span className="relative w-full text-[6px] lg:text-[10px] text-white transition-colors duration-200 ease-in-out group-hover:text-white">
              {isTranslated ? " Translate to English" : " Translate to Bengali"}
            </span>
          </motion.button>
        </div>
        <div className="w-full lg:w-1/2 lg:p-2">
          <div className="flex justify-center">
            <motion.img
              initial={{x:100, opacity: 0 }}
              animate={{ x:0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              src={profilePic}
              alt="Profile-pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
