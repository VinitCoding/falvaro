import React from "react";
import { IoIosStar } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

const FoodCard = ({ id, image, name, price, desc, category, rating, handleToast }) => {
  const dispatch = useDispatch();
  return (
    <div className="mb-3">
      <div className="lg:w-[300px] md:w-[250px] sm:w-[250px] w-auto h-[290px] bg-white border-[0.5px] shadow p-3 items-center rounded mx-3 hover:shadow-lg cursor-pointer">
        <img src={image} alt="cart image" className="h-[140px] mx-auto" />
        {/* Title and Price */}
        <div className="flex justify-between items-center mt-1.5">
          <h3 className="font-bold text-gray-600">{name}</h3>
          <span className="font-bold text-green-500">₹ {price}</span>
        </div>

        {/* Info */}
        <p className="mt-2 text-sm">{desc.slice(0, 60)}...</p>

        {/* Ratings and Add to cart option */}
        <div className="flex items-center justify-between mt-3">
          <p className="flex items-center">
            <IoIosStar className="text-yellow-400" /> {rating}
          </p>
          <button
            className="px-2 py-1 text-white bg-green-500 rounded hover:shadow-md hover:shadow-green-400"
            onClick={() => {
              dispatch(addToCart({ id, name, price, image, qty: 1 }));
              handleToast(name);
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
