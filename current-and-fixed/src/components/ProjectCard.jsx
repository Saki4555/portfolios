// components/ProjectCard.jsx
"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

const ProjectCard = ({
  title,
  idx,
  description,
  image,
 
  techStack,
  github,
  live,
}) => {
  console.log({ idx });
  return (
    <motion.div
      className="bg-sky-300/10 backdrop-blur-lg text-white w-full rounded-lg overflow-hidden shadow-2xl border border-sky-800/10 lg:hover:scale-95 group transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="flex flex-col md:flex-row">
        {/* Left column - Image */}
        <div className="md:w-1/3 p-6 flex items-center">
          <motion.div className="relative w-full aspect-square md:max-w-60 overflow-hidden">
            {image && (
              <Image
                src={image}
                alt={title}
                fill
                className="rounded-lg object-cover transition duration-500 group-hover:scale-105 shadow-lg"
                sizes="(max-width: 768px) 100vw, 240px"
              />
            )}
          </motion.div>
        </div>

        {/* Right column - Content */}
        <div className="md:w-2/3 p-8 flex flex-col">
          <div>
            <motion.h2
              className="text-2xl md:text-3xl font-bold mb-2 text-slate-100"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 0.5, delay: 0.1 },
              }}
              viewport={{ once: true }}
            >
              {title}
            </motion.h2>

            <motion.p
              className="text-slate-300 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 0.5, delay: 0.2 },
              }}
              viewport={{ once: true }}
            >
              {description}
            </motion.p>

            {/* Tech stack */}
            <motion.div
              className="flex flex-wrap gap-2 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 0.5, delay: 0.3 },
              }}
              viewport={{ once: true }}
            >
              {techStack?.map((tech, index) => (
                <motion.span
                  key={index}
                  className="px-3 py-1 bg-[#7f5af0]/20 text-sm text-purple-100 rounded-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.3, delay: 0.1 * index },
                  }}
                  viewport={{ once: true }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Buttons */}
          <motion.div
            className="flex  flex-row gap-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.4 },
            }}
            viewport={{ once: true }}
          >
            <motion.a
              href={github}
              target="_blank"
              className="transform text-center rounded-lg border border-[#7f5af0]/50 px-8 py-2 font-medium text-sm transition-all duration-300 hover:-translate-y-0.5 text-[#7f5af0] bg-[#16161a] hover:bg-[#0e0e10] shadow-[0_0_10px_rgba(127,90,240,0.4)]"
            >
              Github
            </motion.a>
            <motion.a
              href={live}
              target="_blank"
              className="transform  text-center rounded-lg px-8 py-2 font-medium text-slate-100 transition-all text-sm duration-300 hover:-translate-y-0.5 bg-[#7f5af0]/50 hover:bg-[#9273f7]/70 shadow-[0_0_10px_rgba(127,90,240,0.4)]"
            >
              Live
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
