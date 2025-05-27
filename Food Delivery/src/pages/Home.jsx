import React, { useContext, useState } from "react";
import Nav from "../components/Nav";
import Categories from "../Category";
import Card from "../components/Card";
import { food_items } from "../assets/food";
import { dataContext } from "../context/UserContext";
import { RxCross2 } from "react-icons/rx";
import CartCard from "../components/CartCard";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Home = () => {
  let { cate, setCate, input, showCart, setShowCart } = useContext(dataContext);

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

  let items = useSelector((state) => state.cart);

  let subtotal = items.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
  console.log(subtotal);
  let deliveryFee = 20;
  let taxes = (subtotal * 0.5) / 100;
  let total = Math.floor(subtotal + deliveryFee + taxes);

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
        {cate.length > 1 ? (
          cate.map((item) => (
            <Card
              name={item.food_name}
              image={item.food_image}
              price={item.price}
              id={item.id}
              type={item.food_type}
            />
          ))
        ) : (
          <div className="text-2xl font-bold tracking-wider text-gray-500 flex items-center justify-center w-full h-full">
            No Items Found
          </div>
        )}
      </div>

      <div
        className={`w-full md:w-10/12 h-full fixed flex flex-col items-center top-0 right-0 bg-white shadow-xl p-6 transition-all duration-600 overflow-y-auto ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="w-full flex justify-between items-center">
          <span className="text-2xl font-semibold text-gray-600">
            Order Items
          </span>
          <span className="text-2xl cursor-pointer">
            <RxCross2
              className="transform rotate-90 transition-transform duration-300 hover:rotate-180"
              onClick={() => setShowCart(false)}
            />
          </span>
        </header>
        {items.length > 0 ? (
          <>
            <div className="w-full flex flex-col gap-3 mt-5">
              {items.map((item) => (
                <CartCard
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  id={item.id}
                  qty={item.qty}
                />
              ))}
            </div>
            <div className="w-full border-t-4 border-b-4 border-gray-400 mt-9 flex flex-col gap-2 p-8">
              <div className="w-full flex justify-between items-center">
                <span className="text-xl text-gray-600 font-semibold">
                  Subtotal
                </span>
                <span className="text-gray-600 text-md font-semibold">
                  Rs {subtotal}/-
                </span>
              </div>
              <div className="w-full flex justify-between items-center">
                <span className="text-xl text-gray-600 font-semibold">
                  Delivery Fee
                </span>
                <span className="text-gray-600 text-md font-semibold">
                  Rs {deliveryFee}/-
                </span>
              </div>
              <div className="w-full flex justify-between items-center">
                <span className="text-xl text-gray-600 font-semibold">
                  Taxes
                </span>
                <span className="text-gray-600 text-md font-semibold">
                  Rs {taxes}/-
                </span>
              </div>
            </div>
            <div className="w-full border-gray-400 px-8 py-4 flex justify-between items-center">
              <div className="w-full flex justify-between items-center">
                <span className="text-xl text-gray-600 font-semibold">
                  Total
                </span>
                <span className="text-gray-600 text-xl font-semibold">
                  Rs {total}/-
                </span>
              </div>
            </div>
            <button
              className="w-1/2 p-2 mt-7 text-gray-700 bg-green-300 rounded-md font-semibold hover:scale-95 transition-transform duration-300"
              onClick={() => {
                toast.success("Order Placed Successfully!!");
              }}
            >
              Place order
            </button>
          </>
        ) : (
          <div className=" text-4xl font-bold tracking-wider text-gray-500 flex items-center justify-center w-full h-full">
            Empty Cart
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
