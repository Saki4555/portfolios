import MyContainer from "../shared/MyContainer";

import portrait from "../../assets/portrait.png";
const About = () => {
  return (
    <MyContainer>
      <div className="flex font-kanit items-center gap-5 h-screen snap-end">
        <div className="w-2/4">
          <div className="w-full flex items-center gap-2 justify-between border rounded-lg h-64 shadow-lg p-4">
            <div className="w-1/5">
              <img src={portrait} alt="" className="w-full object-cover" />
            </div>
            <div className="h-full bg-indigo-600 w-[1px]"> </div>
            <div className="w-3/5">
              <p>
                I am interested in system design and other web technologies.
              </p>
            </div>
          </div>
        </div>

        <div className="w-2/4 p-2 space-y-4">
          <h4 className="text-indigo-950 text-lg font-semibold">About Me</h4>
          <h1 className="text-5xl font-bold text-gray-800">Web Designer and Developer</h1>
          <p className="">
            As a MERN stack developer, I specialize in building dynamic and
            responsive web applications using MongoDB, Express.js, React.js, and
            Node.js. With a passion for clean code and modern development
            practices, I craft elegant solutions that deliver exceptional user
            experiences. Leveraging my expertise across the full stack, I
            seamlessly integrate front-end and back-end components to create
            scalable and high-performance applications. Driven by a
            problem-solving mindset and a commitment to continuous learning, I
            strive to push the boundaries of web development with each project.
          </p>
        </div>
      </div>
    </MyContainer>
  );
};

export default About;
