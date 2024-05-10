import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearch } from '../redux/slices/searchSlice'



const Navbar = () => {
    const dispatch = useDispatch()
    return (
        <nav className='flex flex-col justify-between gap-6 p-4 lg:flex-row lg:items-center'>
            {/* Time and Logo */}
            <div>
                <h3 className='text-xl font-bold text-gray-600'>{new Date().toUTCString().slice(0, 16)}</h3>
                <h1 className='text-2xl font-bold'>Flavoro Foods</h1>
            </div>

            {/* Search Input */}
            <div>
                <input onChange={(e) => dispatch(setSearch(e.target.value))} type="search" name='search' placeholder='Search here...' autoComplete='off' className='p-2 focus:outline-none border-[1px] border-gray-400 text-sm rounded-md w-full lg:w-[25vw]'/>
            </div>
        </nav>
    )
}

export default Navbar