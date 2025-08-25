import item from "../../assets/item.png";
import MyContainer from "../shared/MyContainer";

const Works = () => {
  return (
    <div className="py-40 h-screen snap-end overflow-y-scroll">
      <MyContainer>
        {" "}
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-indigo-600 font-bold">PORTFOLIO</h1>
          <h1 className="text-3xl">Works & Projects</h1>
          <p className="w-1/2 text-center text-gray-400">
            I help designers, small agencies and businesses bring their ideas to
            life. Powered by Figma, VS Code and coffee, I turn your requirements
            into a well-designed websites
          </p>
        </div>
        <div className="p-5 sm:p-0 flex flex-wrap justify-between">
          <div className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
            <img src={item} />
          </div>

          <div className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
            <img src={item} />
          </div>

          <div className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
            <img src={item} />
          </div>

          <div className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
            <img src={item} />
          </div>
          <div className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
            <img src={item} />
          </div>

          <div className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
            <img src={item} />
          </div>

          <div className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
            <img src={item} />
          </div>

          <div className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
            <img src={item} />
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Works;
