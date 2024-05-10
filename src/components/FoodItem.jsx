import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../data/FoodData.js'
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

const FoodItem = () => {
  const category = useSelector((state) => state.category.category)
  const handleSuccessToast = (name) => toast.success(`Added ${name}`)

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <div className='grid grid-cols-1 gap-4 mt-10 mb-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 place-items-center lg:mx-8 md:mx-4 sm:mx-2'>
        {
          FoodData.filter((food) => {
            if (category === 'All') {
              return food
            } else {
              return category === food.category
            }
          }).map((item) => (
            <FoodCard key={item.id} id={item.id} image={item.img} name={item.name} price={item.price} desc={item.desc} category={item.category} rating={item.rating} handleToast={handleSuccessToast} />
          ))
        }
        {/* {
          FoodData.map((item) => (<FoodCard key={item.id} id={item.id} image={item.img} name={item.name} price={item.price} desc={item.desc} category={item.category} rating={item.rating} handleToast={handleSuccessToast} />))
        } */}
      </div>
    </>
  )
}

export default FoodItem