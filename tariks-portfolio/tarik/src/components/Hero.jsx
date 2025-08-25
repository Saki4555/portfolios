"use client";
import React from "react";
import { motion } from "motion/react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

import { TypeWriter } from "./TypeWriter";

export function Hero() {
  return (
    <BackgroundBeamsWithCollision>
      <div id="/" className="relative mx-auto  my-10 flex max-w-7xl flex-col items-center justify-center">
        <div className="px-4 py-10 md:py-20">
          <h1 className="relative z-10 mx-auto max-w-5xl text-center text-4xl font-bold  md:text-5xl lg:text-6xl text-slate-300">
            {"Hi, I'm Tariqul Islam".split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <TypeWriter />
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 1,
            }}
            className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <a href="#projects" className="w-60 text-center transform rounded-lg  px-6 py-2 font-medium text-slate-100 transition-all duration-300 hover:-translate-y-0.5 bg-[#7f5af0]/50 hover:bg-[#9273f7]/70 shadow-[0_0_10px_rgba(127,90,240,0.4)]">
              View Projects
            </a>
            <a href="#contact" className="w-60 text-center transform rounded-lg border border-[#7f5af0]/50  px-6 py-2 font-medium  transition-all duration-300 hover:-translate-y-0.5 text-[#7f5af0] bg-[#16161a] hover:bg-[#0e0e10] shadow-[0_0_10px_rgba(127,90,240,0.4)]">
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
