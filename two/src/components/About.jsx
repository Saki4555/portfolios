// import aboutImage from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { ComponentsContainer, Socials } from "./shared";
const About = () => {
  return (
    <ComponentsContainer>
      <div id="about" className="border relative  border-neutral-900/50 pb-4">
        <h1 className="my-20 text-center text-4xl">
          About <span className="text-neutral-500">Me</span>
        </h1>
        

        <div className="flex flex-wrap justify-center">
          {/* image---------------- */}
          {/* <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img src={aboutImage} className="rounded-2xl" alt="About-Image" />
          </div>
        </div> */}
          <div className="w-ful lg:w-1/2 z-50">
            <div className="flex justify-center lg:justify-start">
              <p className="my-2 max-w-xl py-6 text-justify tracking-tighter">
                {ABOUT_TEXT}
              </p>
            </div>
            <Socials about={true} />
          </div>
        </div>
      </div>

     
    </ComponentsContainer>
  );
};

export default About;
