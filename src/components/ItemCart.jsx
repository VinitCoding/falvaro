import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const ItemCart = () => {
  return (
    <div className="flex gap-2 p-2 mb-3 rounded shadow-md">
      <MdDelete
        className="absolute right-7 hover:cursor-pointer"
        title="Remove from the cart"
      />
      <img
        src="https://w7.pngwing.com/pngs/21/55/png-transparent-pepperoni-pizza-margarita-pizza-margherita-italian-cuisine-tomato-pizza-food-cheese-recipe-thumbnail.png"
        alt=""
        className="w-[50px] h-[50px]"
      />

      <div className="leading-5">
        <h2 className="font-bold text-gray-600">Onion Pizza</h2>
        <div className="flex items-center">
          <span className="text-green-500">₹ 120</span>
          <div className="absolute flex gap-2 right-7">
            <AiOutlinePlus className="p-1 text-xl text-gray-600 transition-all duration-75 ease-in-out border-2 border-gray-600 rounded cursor-pointer hover:text-white hover:bg-green-500 hover:border-none" />
            <span>1</span>
            <AiOutlineMinus className="p-1 text-xl text-gray-600 transition-all duration-75 ease-in-out border-2 border-gray-600 rounded cursor-pointer hover:text-white hover:bg-green-500 hover:border-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
