import { Link } from "react-router-dom";

const StudioCard = () => {
  return (
    <Link
      to=""
      className="bg-gray-100/50 hover:translate-y-[-2px] transition-all duration-300 ease-in-out hover:shadow-lg rounded-md shadow-md overflow-hidden"
    >
      <div className="w-full h-[200px]">
        <img
          src="https://th-i.thgim.com/public/incoming/5milt3/article66310542.ece/alternates/FREE_1200/IMG_5248.JPG"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <p>Hello World</p>
      </div>
    </Link>
  );
};

export default StudioCard;
