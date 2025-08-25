// import { RiReactjsLine } from "react-icons/ri";
// import { SiMongodb, SiTailwindcss, SiExpress } from "react-icons/si";
import autoCad from "../assets/tools/autocad-150.jpg";
import estimationTools from "../assets/tools/pst-150.jpg";
import sbf from "../assets/tools/sbf-150.jpg";
import msOffice from "../assets/tools/mso-150.jpg";
import { motion } from "motion/react";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pt-20 pb-14">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.7 }}
        className="my-14 pb-3 text-center text-4xl"
      >
        Tools & Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        animate={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.7 }}
        className="grid grid-cols-2 lg:grid-cols-4 justify-center items-center gap-5 px-14 lg:gap-10 lg:px-56"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="relative group transition-all duration-300"
        >
          <img
            src={autoCad}
            className="object-cover object-center rounded-2xl"
            alt=""
          />
          <div className="absolute bottom-0 w-full px-3 py-2 rounded-lg bg-black opacity-0 group-hover:opacity-100 text-center transition-opacity duration-300 ease-in">
            <p className="text-xs">AutoCAD</p>
          </div>
        </motion.div>

        <motion.div
          variants={iconVariants(1)}
          initial="initial"
          animate="animate"
          className="relative group transition-all duration-300"
        >
          <img
            src={estimationTools}
            className="rounded-2xl object-cover object-center"
            alt=""
          />
          <div className="absolute bottom-0 w-full px-3 py-2 rounded-lg bg-black opacity-0 group-hover:opacity-100 text-center transition-opacity duration-300 ease-in">
            <p className="text-xs">Project estimation tools</p>
          </div>
        </motion.div>

        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="relative group transition-all duration-300"
        >
          <img
            src={sbf}
            className="rounded-2xl object-cover object-center"
            alt=""
          />

          <div className="absolute bottom-0 w-full px-3 py-2 rounded-lg bg-black opacity-0 group-hover:opacity-100 text-center transition-opacity duration-300 ease-in">
            <p className="text-xs">Steel Binding & Fabrication</p>
          </div>
        </motion.div>

        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="relative group transition-all duration-300"
        >
          <img
            src={msOffice}
            className="rounded-2xl object-cover object-center"
            alt=""
          />

          <div className="absolute bottom-0 w-full px-3 py-2 rounded-lg bg-black opacity-0 group-hover:opacity-100 text-center transition-opacity duration-300 ease-in">
            <p className="text-xs">Microsoft Office</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
