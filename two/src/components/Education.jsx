import { ComponentsContainer } from "./shared";
import { bsmrstuLogo } from "../assets";
const Education = () => {
  return (
    <ComponentsContainer>
      <h2 className="py-20 text-4xl text-center">Education</h2>
      <div className="flex gap-20 pb-20 items-center border border-neutral-900/50 px-32 justify-center">
        
          <img src={bsmrstuLogo} className="px-2 shadow-2xl rounded-xl" width={200} alt="" />
         
        

        <div className="space-y-2 py-10">
          <h3 className=" tracking-wide text-xl">
            Bachelor of science in Computer Science and Engineering
          </h3>
          <p className="">
            Bangabandhu Sheikh Mujibur Rahman Science and Technology University,
            Gopalganj
          </p>
          <p className="text-xs italic text-neutral-400"> February 2019 - June 2024</p>
          <p className="text-justify text-sm pt-2 text-neutral-300/80">
            {" "}
            I studied Computer Science andEngineering, gaining expertise in
            programming,algorithms, andsoftware development through
            hands-onprojects andcoursework.
          </p>
        </div>
        
      </div>
    </ComponentsContainer>
  );
};

export default Education;
