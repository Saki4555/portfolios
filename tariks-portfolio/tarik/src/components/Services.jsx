"use client";

import { motion } from "motion/react";
import {
  IconDeviceDesktopCode,
  IconDeviceMobileCode,
  IconLayoutDashboard,
  IconLayoutCollage,
  IconServer,
} from "@tabler/icons-react";

import { GlowingEffect } from "./ui/glowing-effect";
import { Meteors } from "./ui/meteors";

export function Services() {
  return (
    <div className="bg-gradient-to-br min-h-screen py-16  from-purple-950/20 via-sky-950/30 to-gray-900/50">
      <div id="services" className="max-w-5xl mx-auto px-10 ">
        <h2 className="text-3xl text-slate-300  md:text-4xl mb-10 tracking-wide font-bold  text-center">
          Services
        </h2>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <GridItem
            number="01"
            idx={1}
            icon={
              <IconDeviceDesktopCode className="h-4 w-4 text-neutral-300" />
            }
            title="Web Development"
            description="Custom, responsive, and high-performance websites built with modern technologies."
          />

          <GridItem
            number="02"
            idx={2}
            icon={<IconDeviceMobileCode className="h-4 w-4 text-neutral-300" />}
            title="App Development"
            description="Cross-platform mobile apps designed for usability, performance, and scalability."
          />

          <GridItem
            number="03"
            idx={3}
            icon={<IconLayoutDashboard className="h-4 w-4  text-neutral-300" />}
            title="Landing Page Design"
            description="High-converting landing pages tailored to your brand and marketing goals."
          />
          <GridItem
            number="04"
            idx={4}
            icon={
              // Choose a suitable icon component for portfolio design, e.g., IconIdBadge2 or IconPalette
              <IconLayoutCollage className="h-4 w-4 text-neutral-300" />
            }
            title="Portfolio Design"
            description="Craft a compelling online portfolio to effectively showcase your projects and expertise."
          />
          <GridItem
            number="05"
            idx={5}
            icon={
              // Choose a suitable icon component for SaaS, e.g., IconCloud, IconServer, IconSettings
              <IconServer className="h-4 w-4 text-neutral-300" />
            }
            title="SaaS Development"
            description="Build and deploy scalable, cloud-based software applications delivered as a service."
          />
        </ul>
      </div>
    </div>
  );
}

// const GridItem = ({ icon, title, description, number }) => {
//   return (
//     <li className="min-h-[14rem] list-none relative lg:hover:scale-105 transition-all duration-300">
//       <div className="relative h-full rounded-2xl  p-2 md:rounded-3xl md:p-3">
//         <GlowingEffect
//           spread={40}
//           glow={true}
//           disabled={false}
//           proximity={64}
//           inactiveZone={0.01}
//         />

//         <div className="border-0.75  bg-gradient-to-br #201b16 from-[#201b15]   to-[#170d16]  relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 shadow-[0px_0px_27px_0px_#2D2D2D]">
//           {/* Number in top-right */}
//           <div className="absolute right-6 top-6 text-sm font-semibold text-neutral-400">
//             {number}
//           </div>

//           <div className="relative flex flex-1 flex-col justify-between gap-3">
//             <div className="w-fit rounded-lg border border-gray-600 p-2">
//               {icon}
//             </div>
//             <div className="space-y-3">
//               <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance  md:text-2xl/[1.875rem] text-slate-100">
//                 {title}
//               </h3>
//               <h2 className="font-sans text-sm/[1.125rem]  md:text-base/[1.375rem] text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
//                 {description}
//               </h2>
//             </div>
//           </div>
//           <Meteors number={9} />
//         </div>
//       </div>
//     </li>
//   );
// };

const GridItem = ({ icon, title, description, number, idx }) => {
  return (
    <motion.li
      className="min-h-[14rem] list-none relative lg:hover:scale-105 transition-all duration-300"
      initial={{ opacity: 0, y: 5 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 0.1 * idx, ease: "easeOut" },
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="relative h-full rounded-2xl p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />

        <motion.div className="border-0.75 bg-sky-300/15 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 shadow-[0px_0px_27px_0px_#2D2D2D]">
          <motion.div
            className="absolute right-6 top-6 text-sm font-semibold text-neutral-400"
            initial={{ opacity: 0, x: 10 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, delay: 0.1 * idx + 0.2 },
            }}
            viewport={{ once: true }}
          >
            {number}
          </motion.div>

          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <motion.div
              className="w-fit rounded-lg border border-gray-600 p-2"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: 0.1 * idx + 0.2,
                },
              }}
              viewport={{ once: true }}
            >
              {icon}
            </motion.div>
            <div className="space-y-3">
              <motion.h3
                className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance md:text-2xl/[1.875rem] text-slate-100"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.1 * idx + 0.2 },
                }}
                viewport={{ once: true }}
              >
                {title}
              </motion.h3>
              <motion.h2
                className="font-sans text-sm/[1.125rem] md:text-base/[1.375rem] text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.1 * idx + 0.2 },
                }}
                viewport={{ once: true }}
              >
                {description}
              </motion.h2>
            </div>
          </div>
          <Meteors number={9} />
        </motion.div>
      </div>
    </motion.li>
  );
};

export default GridItem;
