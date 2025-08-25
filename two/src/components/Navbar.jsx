import { NAV_ITEMS } from "../constants";
import { useState } from "react";
import { ComponentsContainer, Socials } from "./shared";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <div className="sticky top-0 z-50">
      <ComponentsContainer>
        <nav className="backdrop-blur-lg py-5 border border-neutral-500/10 flex text items-center justify-between text-sm">
          <div>
            <h1>ASM</h1>
          </div>

          <ul className="hidden lg:flex gap-8 tracking-wide">
            {NAV_ITEMS.map((navItem) => (
              <li key={navItem.label}>
                <a href={navItem.href}>{navItem.label}</a>
              </li>
            ))}
          </ul>
          <Socials></Socials>

          {/* mobile view----------- */}
          <div className="lg:hidden">
            <button
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
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

            {isOpen && (
              <div className="absolute right-0 mt-2 w-full border-gray-200 shadow-lg transition-all">
                <ul className="flex flex-col rounded-lg gap-5 bg-slate-950/90 tracking-wide justify-center py-6">
                  {NAV_ITEMS.map((navItem) => (
                    <li
                      className="border-b border-b-neutral-300/5 w-full text-center"
                      key={navItem.label}
                      onClick={() => setIsOpen(false)}
                    >
                      <a href={navItem.href}>{navItem.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </nav>
      </ComponentsContainer>
    </div>
  );
};

export default Navbar;
