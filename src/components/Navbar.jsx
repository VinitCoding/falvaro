import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex flex-col lg:flex-row p-4 justify-between lg:items-center gap-6'>
            {/* Time and Logo */}
            <div>
                <h3 className='text-xl text-gray-600 font-bold'>{new Date().toUTCString().slice(0, 16)}</h3>
                <h1 className='text-2xl font-bold'>Flavoro Foods</h1>
            </div>

            {/* Search Input */}
            <div>
                <input type="search" name='search' placeholder='Search here...' autoComplete='off' className='p-2 focus:outline-none border-[1px] border-gray-400 text-sm rounded-md w-full lg:w-[25vw]'/>
            </div>
        </nav>
    )
}

export default Navbar