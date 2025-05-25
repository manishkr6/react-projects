import React, { createContext, useState } from "react";
import { food_items } from "../assets/food";

export const dataContext = createContext();

const UserContext = ({ children }) => {
  const [cate, setCate] = useState(food_items);
  let [input, setInput] = useState("");
  let data = {
    input,
    setInput,
    cate,
    setCate,
  };
  return (
    <div>
      <dataContext.Provider value={data}>{children}</dataContext.Provider>
    </div>
  );
};

export default UserContext;
