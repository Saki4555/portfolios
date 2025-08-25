const Footer = () => {
  return (
    <div className="w-full bg-gray-800 snap-end">
      <div className="container mx-auto py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img className="w-8" src="./img/logo.png" alt="" />
          <span className="text-2xl font-bold text-white">Portwind.</span>
        </div>
        <span className="hidden md:block font-medium text-white">
          © 2022 Portwind. Design with ♥️ by Lama Dev.
        </span>
        <div className="flex gap-2">
          <img className="w-4 cursor-pointer" src="./img/facebook.png" alt="" />
          <img
            className="w-4 cursor-pointer"
            src="./img/instagram.png"
            alt=""
          />
          <img className="w-4 cursor-pointer" src="./img/twitter.png" alt="" />
          <img className="w-4 cursor-pointer" src="./img/linkedin.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
