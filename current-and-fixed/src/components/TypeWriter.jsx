"use client";

import { TypewriterEffectSmooth } from "./ui/typewriter-effect";


export function TypeWriter() {
  const words = [
    {
      text: "Full",
    },
   
    {
      text: "Stack",
    },
    {
      text: "Software",
    },
    {
      text: "Engineer",
    }
  ];
  return (
    
     
     
    
   <div className="flex justify-center"> <TypewriterEffectSmooth words={words} /></div>
  );
}
