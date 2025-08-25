const SkillCard = ({ item }) => {

  const percentage = item?.percentage;
 
  return (
    <>
      <div className="relative group">
        <div className="bg-gray-200 group-hover:block transition-all rounded-md absolute -bottom-10 right-4 w-32 z-10 px-4 py-2 hidden space-y-1">
          <p>{item?.percentage}%</p>
          <div className="w-full h-2 bg-white border overflow-hidden border-black rounded-full">
            <div style={{width: `${percentage}%`}} className="h-2 bg-indigo-950"></div>
          </div>
        </div>
        <img
          src={item?.img}
          alt="skill"
          className="w-32 h-32 object-cover object-center hover:scale-110 transition-all"
        />
      </div>
    </>
  );
};

export default SkillCard;
