import MyContainer from "../shared/MyContainer";
import SkillCard from "./SkillCard";

import { javascriptImg, reactImg, tailwindImg, firebaseImg } from "./index";

const Skills = () => {
  const items = [
    { img: javascriptImg, percentage: 20 },
    { img: reactImg, percentage: 60 },
    { img: tailwindImg, percentage: 70 },
    { img: firebaseImg, percentage: 40 },
  ];
  return (
    <MyContainer>
      
    
    <div className="h-screen snap-end relative bg-indigo-300 font-kanit overflow-hidden flex flex-col gap-24 justify-center items-center">
      <p className="absolute top-0">hello</p>
        <h2 className="text-center text-4xl font-semibold text-gray-800">
          What I have learned
        </h2>
        {/* <SkillCard javascriptImg={items[0]}></SkillCard> */}

        <div className="grid grid-cols-4 gap-16">
          {items.map((item) => (
            <SkillCard key={item} item={item}></SkillCard>
          ))}
        </div>
      </div>
   
    </MyContainer>
  );
};

export default Skills;
