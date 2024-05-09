import React from "react";
import { IoMdClose } from "react-icons/io";
import ItemCart from "./ItemCart";

const Cart = () => {
  return (
    <div className="fixed top-0 right-0 lg:w-[20vw] md:w-[40vw] w-full h-full bg-white p-4 ">
      <div className="flex items-center justify-between my-3">
        <span className="text-xl font-bold text-gray-800">My Order</span>
        <IoMdClose className="p-0.5 text-2xl font-bold text-gray-600 border-2 border-gray-600 rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer" />
      </div>

      <ItemCart />
      <ItemCart />
      <ItemCart />
      <ItemCart />

      <div className="absolute bottom-0 ">
        <h3 className="font-semibold text-gray-800">Items : </h3>
        <h3 className="font-semibold text-gray-800">Total Amount : </h3>
        <hr className="lg:w-[18vw] md:w-[37vw] sm:w-[95vw] w-[90vw] my-3" />
        <button className="lg:w-[18vw] md:w-[37vw] sm:w-[95vw] w-[90vw] mb-4 px-2 py-1 text-white bg-green-500 rounded hover:shadow-md hover:shadow-green-400">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
