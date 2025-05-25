import React from "react";
import {
  IoBagHandleOutline,
  IoFastFoodOutline,
  IoSearch,
} from "react-icons/io5";

const Nav = () => {
  return (
    <div className="w-full h-[100px] flex justify-between px-5 md:px-8">
      <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl">
        <IoFastFoodOutline className="w-[30px] h-[30px] text-green-500" />
      </div>

      <form className="w-[45%] md:w-[60%] h-[60%] bg-white flex items-center px-5 gap-5 rounded-md shadow-xl">
        <IoSearch className="w-[25px] h-[25px] text-green-500" />
        <input
          type="text"
          placeholder="Search Items..."
          className="w-full h-full outline-none text-[15px] md:text-xl"
        />
      </form>

      <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative">
        <IoBagHandleOutline className="w-[30px] h-[30px] text-green-500" />
        <span className="absolute top-1 right-2 text-green-500 font-semibold text-[15px]">
          1
        </span>
      </div>
    </div>
  );
};

export default Nav;
