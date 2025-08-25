import MyContainer from "../shared/MyContainer";

const Navbar = () => {
  return (
    <div className="w-full fixed top-0 bg-white z-10 overflow-hidden">
      {" "}
      <MyContainer>
        <div className="flex py-5 font-kanit items-center justify-between">
          {/* logo and name */}
          <div>asm</div>
          <ul className="flex gap-10">
            <li className="text-gray-800">Home</li>
            <li className="text-gray-800">About Me</li>
            <li className="text-gray-800">Services</li>
            <li className="text-gray-800">Works</li>
            <li className="text-gray-800">Contact</li>
          </ul>
          {/* dark mode button */}
          <div>hello</div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Navbar;
