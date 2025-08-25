import { HERO_CONTENT } from "../constants";
import profilePic from '../assets/blur-bg.png';

import { ComponentsContainer } from "./shared";
import { FaArrowDown } from "react-icons/fa";


const Hero = () => {
  return (
    <ComponentsContainer>
      {" "}
      <div id="home" className="border-b  pt-10 border-neutral-900 pb-4 lg:mb-36">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
              <h1 className="pb-16 text-6xl font-thin tracking-tight lg:text-6xl lg:mt-16">
                ASM Saki
              </h1>
              <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-4xl tracking-tight">
                Full Stack Developer
              </span>
              <p className="max-w-xl my-2 font-light tracking-tighter text-justify">
                {HERO_CONTENT}
              </p>
            </div>
            
            <FaArrowDown  className="text-lg opacity-70 animate-pulse"/>
          </div>
          <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex h-full justify-center items-center">
              <img className="rounded-lg w-64 h-64 object-cover object-center" src={profilePic} alt="Profile-pic" />
            </div>
          </div>
        </div>
      </div>
    </ComponentsContainer>
  );
};

export default Hero;
