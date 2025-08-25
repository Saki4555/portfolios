import { useState } from "react";
import { motion } from "motion/react";
// import logo from "../assets/logo.png";
// import { FaLinkedin, FaGithub, FaInstagram} from "react-icons/fa";
// import { FaXTwitter } from 'react-icons/fa6';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="px-3 sticky top-0 z-50 md:px-0 flex items-center justify-between mb-14 py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* <img src={logo}  alt="Logo" /> */}
        <motion.a
          whileTap={{ scale: 0.8 }}
          href="/"
          className="font-serif font-extrabold text-4xl"
        >
          B<span className="font-mono font-bold text-2xl">J</span>S
        </motion.a>
      </div>
      <div className="hidden lg:block">
        <div className="flex items-center justify-center gap-6">
          {/* <FaLinkedin />
                <FaGithub />
                <FaInstagram />
                <FaXTwitter /> */}

          <motion.a
            whileTap={{ scale: 0.8 }}
            href="#about"
            className="cursor-pointer hover:text-purple-300"
          >
            About
          </motion.a>
          <motion.a
            whileTap={{ scale: 0.8 }}
            href="#work"
            className="cursor-pointer hover:text-purple-300"
          >
            Work
          </motion.a>
          <motion.a
            whileTap={{ scale: 0.8 }}
            href="#contact"
            className="cursor-pointer hover:text-purple-300"
          >
            Contact
          </motion.a>
        </div>
      </div>

      {/* mobile view ----------------------------------------------- */}
      <div className="lg:hidden">
        {/* Hamburger Icon */}
        <button
          className="p-2 text-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12" // Cross icon
                  : "M4 6h16M4 12h16m-7 6h7" // Hamburger icon
              }
            />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute right-0 mt-2 w-full bg-slate-200 border border-gray-200 rounded-lg shadow-lg transition-all">
            <ul className="flex flex-col p-2">
              <li>
                <motion.a
                  whileTap={{ scale: 0.8 }}
                  href="#about"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </motion.a>
              </li>
              <li>
                <motion.a
                  whileTap={{ scale: 0.8 }}
                  href="#work"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  onClick={() => setIsOpen(false)}
                >
                  Work
                </motion.a>
              </li>
              <li>
                <motion.a
                  whileTap={{ scale: 0.8 }}
                  href="#contact"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </motion.a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
