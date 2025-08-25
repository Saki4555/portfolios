"use client";

import Image from "next/image";
import profile from "../assets/profile/profile.jpg";
import { motion } from "motion/react";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandX,
} from "@tabler/icons-react";

export default function AboutMe() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const socialIconVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
    hover: { scale: 1.1, y: -3, transition: { duration: 0.2 } },
  };

  return (
    <div className="lg:h-screen bg-gradient-to-br from-purple-950/20 via-sky-950/30 to-gray-900/50 py-12 flex items-center justify-center">
      <motion.div
        id="about"
        className="flex flex-col md:flex-row gap-14 pt-16 pb-16 md:items-center md:justify-center rounded-lg max-w-5xl px-5 mx-auto shadow-md overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Image section */}
        <motion.div
          className="relative w-3/4 md:w-1/3   h-[412px] "
          variants={imageVariants}
        >
          <Image
            src={profile}
            alt="Profile"
            className="w-full h-full  object-cover rounded-lg"
          />
        </motion.div>

        {/* Content section */}
        <div className="w-full md:w-2/3 ">
          <motion.div className="mb-6" variants={itemVariants}>
            <motion.h2
              className="text-3xl md:text-4xl mb-4 tracking-wider text-slate-300 font-bold"
              variants={itemVariants}
            >
              About Me
            </motion.h2>
            <motion.p
              className="text-[#7f5af0] text-lg font-medium"
              variants={itemVariants}
            >
              Tariqul Islam - Developer
            </motion.p>
          </motion.div>

          <motion.div className="space-y-4 mb-8" variants={itemVariants}>
            <motion.p
              className="text-slate-300/70 text-justify"
              variants={itemVariants}
            >
              I'm a MERN Stack Developer with a background in Computer Science
              and Engineering. I love building web apps and solving problems.
              Skilled in React, Express.js, Firebase,  MongoDB and other modern web tools, I'm eager to
              work on exciting projects and keep learning.
            </motion.p>
          </motion.div>

          {/* socials */}
          <motion.div className="flex gap-4" variants={itemVariants}>
            <motion.a
              href="https://www.linkedin.com/in/md-tariqul-islam-05221a25a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              className="cursor-pointer"
              variants={socialIconVariants}
              whileHover="hover"
            >
              <IconBrandLinkedin className="w-8 h-8 text-slate-300 hover:text-[#7f5af0]" />
            </motion.a>
            <motion.a
              href="https://github.com/Tarik0011"
              target="_blank"
              variants={socialIconVariants}
              whileHover="hover"
            >
              <IconBrandGithub className="w-8 h-8 text-slate-300 hover:text-[#7f5af0]" />
            </motion.a>
            <motion.a
              href="https://web.facebook.com/tarikul.islam.168639"
              target="_blank"
              variants={socialIconVariants}
              whileHover="hover"
            >
              <IconBrandFacebook className="w-8 h-8 text-slate-300 hover:text-[#7f5af0]" />
            </motion.a>
            <motion.a
              href=""
              target="_blank"
              className="hidden"
              variants={socialIconVariants}
              whileHover="hover"
            >
              <IconBrandInstagram className="w-8 h-8 text-slate-300 hover:text-[#7f5af0]" />
            </motion.a>
            <motion.a
              href=""
              target="_blank"
              className="hidden"
              variants={socialIconVariants}
              whileHover="hover"
            >
              <IconBrandX className="w-8 h-8 text-slate-300" />
            </motion.a>
          </motion.div>

          {/* View Resume button */}
          <motion.div className="mt-6" variants={itemVariants}>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 hidden py-2 transform cursor-pointer rounded-lg font-medium text-slate-100 transition-all duration-300 bg-[#7f5af0]/50 hover:bg-[#9273f7]/70 shadow-[0_0_10px_rgba(127,90,240,0.4)]"
              whileHover={{
                y: -5,
                boxShadow: "0 0 15px rgba(127,90,240,0.6)",
                transition: { duration: 0.2 },
              }}
            >
              View Resume
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
