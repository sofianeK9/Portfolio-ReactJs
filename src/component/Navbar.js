import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className='bg-white shadow-lg flex py-4 justify-between items-center px-20'>
                <p className='text-xl font-bold'>Dev SK</p>
                <ul className='flex space-x-8'>
                    <li className='hover:bg-red-500 py-2 px-4 cursor-pointer hover:text-white'>Home</li>
                    <li className='hover:bg-red-500 py-2 px-4 cursor-pointer hover:text-white'>About me</li>
                    <li className='hover:bg-red-500 py-2 px-4 cursor-pointer hover:text-white'>My Projects</li>
                    <li className='hover:bg-red-500 py-2 px-4 cursor-pointer hover:text-white'>Contact Me</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar