import { useState } from "react";
import aboutImage from "../assets/about-enhanced-400.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "motion/react";
const About = () => {
  const [isTranslated, setIsTranslated] = useState(false);
  return (
    <div id="about" className="border-b border-neutral-900 pt-10 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.7 }}
        className="my-16 text-center text-4xl"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img
              src={aboutImage}
              className="rounded-2xl w-3/4 h-96 object-cover object-center"
              alt="About-Image"
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.7 }}
          className="w-ful lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">
              {isTranslated ? ABOUT_TEXT.ban : ABOUT_TEXT.eng}
            </p>
          </div>
          {/* translate button ------------------------------------ */}
          <button
            onClick={() => setIsTranslated(!isTranslated)}
            className="relative flex items-center px-6 py-2 overflow-hidden font-medium transition-all bg-violet-700 rounded-md group"
          >
            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-violet-900 rounded group-hover:-mr-4 group-hover:-mt-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-violet-900 rounded group-hover:-ml-4 group-hover:-mb-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-violet-800 rounded-md group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-[6px] lg:text-[10px] text-white transition-colors duration-200 ease-in-out group-hover:text-white">
              {isTranslated ? " Translate to English" : " Translate to Bengali"}
            </span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
