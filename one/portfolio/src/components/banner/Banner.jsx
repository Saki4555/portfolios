import man from "../../assets/man.png";
import MyContainer from "../shared/MyContainer";

const Banner = () => {
  return (
    <>
     

      <MyContainer>
        <div className="font-kanit bg-green-100  bg-opacity-30 lg:overflow-hidden lg:flex gap-5 items-center justify-center h-screen pt-[44px] snap-end">
          <div className="w-full lg:w-1/2 space-y-4">
            <p className="font-semibold">
              Hi I am <br /> ASM Saki
            </p>

            <div className="text-5xl font-bold">
              <p>Mern Stack </p>
              <p className="text-center">Developer</p>
            </div>
            <p className="text-sm">
              MERN Stack Developer | Crafting seamless web experiences with
              expertise in MongoDB, Express, React, and Node.js.
            </p>
            <button className="px-4 py-2 rounded-lg bg-indigo-950 text-white">
              Hire Me
            </button>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <img src={man} alt="person" className="object-cover w-96 h-96" />
              <div className="absolute top-28 left-16 right-0 opacity-75 w-80 h-80 rounded-full -z-10 bg-indigo-950"></div>
            </div>
          </div>
        </div>
      </MyContainer>
    </>
  );
};

export default Banner;
