import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../data/FoodData.js'

const FoodItem = () => {
  return (
    <div className='mt-10 mb-5 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-items-center gap-4 lg:mx-8 md:mx-4 sm:mx-2'>
      {
        FoodData.map((item) => {
          return <FoodCard key={item.id} id={item.id} image={item.img} name={item.name} price={item.price} desc={item.desc} category={item.category} rating={item.rating}/>
        })
      }
    </div>
  )
}

export default FoodItem