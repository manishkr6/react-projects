import React, { useContext, useEffect } from "react";
import {
  IoBagHandleOutline,
  IoFastFoodOutline,
  IoSearch,
} from "react-icons/io5";
import { dataContext } from "../context/UserContext";
import { food_items } from "../assets/food";
import { useSelector } from "react-redux";

const Nav = () => {
  let { input, setInput, setCate, showCart, setShowCart } =
    useContext(dataContext);

  useEffect(() => {
    let newList = food_items.filter(
      (item) =>
        item.food_name.includes(input) ||
        item.food_name.toLowerCase().includes(input) ||
        item.food_type.toLowerCase().slice(0, 3).includes(input)
    );
    setCate(newList);
  }, [input]);

   let items = useSelector((state) => state.cart);
   console.log(items)

  return (
    <div className="w-full h-[100px] flex justify-between px-5 md:px-8">
      <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl">
        <IoFastFoodOutline className="w-[30px] h-[30px] text-green-500 hover:scale-90 transition-transform duration-300" />
      </div>

      <form
        className="w-[45%] md:w-[60%] h-[60%] bg-white flex items-center px-5 gap-5 rounded-md shadow-xl"
        onSubmit={(e) => e.preventDefault()}
      >
        <IoSearch className="w-[25px] h-[25px] text-green-500" />
        <input
          type="text"
          placeholder="Search Items..."
          className="w-full h-full outline-none text-[15px] md:text-xl"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>

      <div
        className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative cursor-pointer"
        onClick={() => {
          setShowCart(true);
        }}
      >
        <IoBagHandleOutline className="w-[30px] h-[30px] text-green-500" />
        <span className="absolute top-1 right-2 text-green-500 font-semibold text-[15px]">
          {items.length}
        </span>
      </div>
    </div>
  );
};

export default Nav;
