import React, { useContext, useState } from "react";
import Nav from "../components/Nav";
import Categories from "../Category";
import Card from "../components/Card";
import { food_items } from "../assets/food";
import { dataContext } from "../context/UserContext";

const Home = () => {
  let { cate, setCate, input } = useContext(dataContext);

  const filter = (Categories) => {
    if (Categories === "All") {
      setCate(food_items);
    } else {
      const newList = food_items.filter(
        (item) => item.food_category === Categories
      );
      setCate(newList);
    }
  };

  return (
    <div className="bg-slate-200 w-full min-h-screen p-3">
      <Nav />

      {!input ? (
        <div className="flex flex-wrap justify-center items-center gap-5 w-full">
          {Categories.map((item) => {
            return (
              <div
                className="w-[100px] h-[100px] bg-white flex items-center justify-center flex-col rounded-md gap-2 text-sm font-semibold tracking-wider shadow-md cursor-pointer text-green-800 hover:scale-110 hover:bg-green-100 transition-all duration-300"
                onClick={() => filter(item.name)}
              >
                {item.icon}
                {item.name}
              </div>
            );
          })}
        </div>
      ) : null}

      <div className="w-full flex flex-wrap gap-5 px-5 justify-center items-center mt-7 mb-7">
        {cate.map((item) => (
          <Card
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            id={item.id}
            type={item.food_type}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
