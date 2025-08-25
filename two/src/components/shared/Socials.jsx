import { githubIcon, linkedinIcon } from "../../assets/socials";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Socials = ({ about }) => {
  return (
    <div className="lg:flex gap-4 text-2xl text-neutral-300">
      
      {about ?  <>
          <img src={linkedinIcon} alt="linkedin" className="w-7 cursor-pointer hover:scale-105 bg-slate-300/85 rounded-lg" />
          <img src={githubIcon} alt="github" className="w-7 cursor-pointer hover:scale-105 bg-slate-300/85 rounded-lg" />
        </> : (<><FaLinkedin className="text-blue-600"/>
            <FaGithub /></>
       
      )}
    </div>
  );
};

export default Socials;
