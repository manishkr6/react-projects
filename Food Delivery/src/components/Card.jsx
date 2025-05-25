import React from "react";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";

const Card = ({ name, image, id, price, type }) => {
  return (
    <div key={id} className="w-[240px] h-[300px] bg-white p-3 rounded-md flex flex-col gap-3 shadow-lg hover:scale-95 transition-all duration-300">
      <div className="w-full h-[60%] overflow-hidden rounded-md">
        <img src={image} alt="" className="object-cover h-full w-full" />
      </div>
      <div className="text-xl font-semibold">{name}</div>
      <div className="w-full flex justify-between items-center">
        <div className="text-lg font-semibold text-green-700">Rs {price}/-</div>
        <div
          className={`flex justify-center items-center gap-2 ${
            type === "veg" ? "text-green-700" : "text-red-700"
          } `}
        >
          {type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />}
          <span>{type}</span>
        </div>
      </div>
      <button className="w-full p-2 text-gray-700 bg-green-300 rounded-md font-semibold hover:scale-95 transition-transform duration-300">
        Add to dish
      </button>
    </div>
  );
};

export default Card;
