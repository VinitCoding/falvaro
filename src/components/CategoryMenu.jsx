import React from 'react'

const CategoryMenu = () => {
  return (
    <div className='mx-3 mt-5'>
        <h3 className='text-xl font-semibold'>Find the best food</h3>
        <div className='flex gap-4 my-5 overflow-x-scroll lg:overflow-x-hidden '>
            <button className='px-3 py-2 font-semibold transition-all duration-75 ease-in-out bg-gray-300 rounded cursor-pointer hover:bg-green-500 hover:text-white'>All</button>
            <button className='px-3 py-2 font-semibold transition-all duration-75 ease-in-out bg-gray-300 rounded cursor-pointer hover:bg-green-500 hover:text-white'>Breakfast</button>
            <button className='px-3 py-2 font-semibold transition-all duration-75 ease-in-out bg-gray-300 rounded cursor-pointer hover:bg-green-500 hover:text-white'>Lunch</button>
            <button className='px-3 py-2 font-semibold transition-all duration-75 ease-in-out bg-gray-300 rounded cursor-pointer hover:bg-green-500 hover:text-white'>Dinner</button>
            <button className='px-3 py-2 font-semibold transition-all duration-75 ease-in-out bg-gray-300 rounded cursor-pointer hover:bg-green-500 hover:text-white'>Snacks</button>
        </div>
    </div>
  )
}

export default CategoryMenu