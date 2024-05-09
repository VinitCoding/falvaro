import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import ItemCart from "./ItemCart";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  const [cart, setCart] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart);
  console.log(cartItems);

  return (
    <>
      <div
        className={`fixed top-0 right-0 lg:w-[20vw] md:w-[40vw] w-full h-full bg-white p-4 ${cart ? "translate-x-0 " : "translate-x-full"
          } transition-all duration-500 z-50`}
      >
        <div className="flex items-center justify-between my-3">
          <span className="text-xl font-bold text-gray-800">My Order</span>
          <IoMdClose className="p-0.5 text-2xl font-bold text-gray-600 border-2 border-gray-600 rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer" onClick={() => setCart(!cart)} />
        </div>

        {
          cartItems.length > 0 ?
          cartItems.map((food) => (
            <ItemCart key={food.id} id={food.id} name={food.name} price={food.price} img={food.image} qty={food.qty}/>
          )) : (<h2 className="mt-10 text-2xl font-semibold text-center">Your Cart is Empty</h2>)
        }


        <div className="absolute bottom-0 ">
          <h3 className="font-semibold text-gray-800">Items : </h3>
          <h3 className="font-semibold text-gray-800">Total Amount : </h3>
          <hr className="lg:w-[18vw] md:w-[37vw] sm:w-[95vw] w-[90vw] my-3" />
          <button className="lg:w-[18vw] md:w-[37vw] sm:w-[95vw] w-[90vw] mb-4 px-2 py-1 text-white bg-green-500 rounded hover:shadow-md hover:shadow-green-400">
            Checkout
          </button>
        </div>

      </div>
      <FaShoppingCart onClick={() => setCart(!cart)} className="fixed p-3 text-5xl bg-white rounded-md shadow-md bottom-4 right-4 hover:cursor-pointer" />
    </>
  );
};

export default Cart;
