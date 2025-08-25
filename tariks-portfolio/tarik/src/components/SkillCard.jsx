
// export default SkillCard;


"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const SkillCard = ({ icon, name, glowColor, midGradient, index }) => {
  return (
    <div className="group border border-white/10 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 p-4 rounded-lg bg-[#0e0e0e] relative cursor-pointer flex items-center justify-center transition-all duration-500">
      <div
        className={`absolute inset-0 rounded-xl
          transition-all duration-[3000ms] group-hover:duration-200 ease-out
          opacity-0 group-hover:opacity-100 pointer-events-none
          ${glowColor}
        `}
      ></div>
      <div className={`absolute top-1/2 left-1/2 w-1/4 h-1/4 blur-2xl -translate-x-1/2 -translate-y-1/2 rounded-full ${midGradient}`}></div>

      {icon && (
        <motion.div
          className="z-10 w-full h-full flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{once: true}}
          transition={{
            duration: 0.3,
            delay: index * 0.05,
            ease: "easeOut"
          }}
        >
          <Image src={icon} alt={name} className=" object-contain" />
        </motion.div>
      )}
    </div>
  );
};

export default SkillCard;
