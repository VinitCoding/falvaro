import React, { useEffect, useState } from 'react'
import FoodData from '../data/FoodData.js'
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../redux/slices/categorySlice.jsx';

const CategoryMenu = () => {
  const dispatch = useDispatch()
  const [categories, setCategories] = useState([]);
  const selectedCategory = useSelector((state) => state.category.category)

  const listUniqueCategory = () => {
    
    const uniqueCategories =  [... new Set(FoodData.map((food) => food.category))]
    setCategories(uniqueCategories)
    console.log(categories);
  }

  useEffect(() => {
    listUniqueCategory();
    
  }, [])

  return (
    <div className='mx-3 mt-5'>
        <h3 className='text-xl font-semibold'>Find the best food</h3>
      <div className='flex gap-4 my-5 overflow-x-scroll lg:overflow-x-hidden '>
        <button onClick={() => dispatch(setCategory('All'))} className={`px-3 py-2 font-semibold transition-all duration-75 ease-in-out bg-gray-300 rounded cursor-pointer hover:bg-green-500 hover:text-white ${selectedCategory === 'All' && 'bg-green-500 text-white'}` }>All</button>
        {
          categories.map((category, index) => (
            <button onClick={() => dispatch(setCategory(category))} className={`px-3 py-2 font-semibold transition-all duration-75 ease-in-out bg-gray-300 rounded cursor-pointer hover:bg-green-500 hover:text-white ${selectedCategory === category && 'bg-green-500 text-white'}` } key={index}>{category}</button>
          )
          )
        }
        </div>
    </div>
  )
}

export default CategoryMenu