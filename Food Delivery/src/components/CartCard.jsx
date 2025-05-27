import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { DecrementQty, IncrementQty, RemoveItem } from "../redux/cartSlice";
import { toast } from "react-toastify";

const CartCard = ({ name, id, price, image, qty }) => {
  let dispatch = useDispatch();
  return (
    <div
      key={id}
      className="w-full h-28 lg:h-36 p-1 mt-3 flex justify-between shadow-2xl border-2 border-green-100 rounded-xl"
    >
      <div className="w-[70%] lg:w-[80%] h-full flex gap-3 lg:gap-7">
        <div className="w-[45%] lg:w-[20%] h-full overflow-hidden rounded-lg">
          <img src={image} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="w-[40%] h-full flex flex-col relative overflow-hidden">
          <div className="text-lg text-gray-600 font-semibold">{name}</div>
          <div className="w-[90px] h-[40px] flex rounded-lg overflow-hidden shadow-lg border-2 text-xl absolute bottom-2">
            <button
              className="w-[30%] h-full bg-white flex justify-center items-center"
              onClick={() => (qty > 1 ? dispatch(DecrementQty(id)) : null)}
            >
              -
            </button>
            <span className="w-[40%] h-full bg-slate-200 flex justify-center items-center">
              {qty}
            </span>
            <button
              className="w-[30%] h-full bg-white flex justify-center items-center"
              onClick={() => dispatch(IncrementQty(id))}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-end gap-4 pr-2 lg:pr-12">
        <span className="text-[16px] font-semibold text-slate-700">
          Rs {price}/-
        </span>
        <span
          className="cursor-pointer hover:scale-110 transition-transform duration-300"
          onClick={() => {
            dispatch(RemoveItem(id));
            toast.error(`${name} is removed from cart`);
          }}
        >
          <RiDeleteBinLine className="w-6 h-6 text-red-600" />
        </span>
      </div>
    </div>
  );
};

export default CartCard;
