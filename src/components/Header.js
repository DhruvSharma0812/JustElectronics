import React from 'react'
import Logo from './Logo'
import { GrSearch } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='h-16 shadow-md bg-white'>
      <div className="h-full container mx-auto flex justify-between items-center px-4">
        <Link to="/">
          <div className='k'>
            <Logo />
          </div>
        </Link>

        <div className='flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-5'>
          <input className='w-full outline-none ' type="text" placeholder='Search Product Here....' />
          <div className='text-lg min-w-[50px] h-8 text-white bg-red-600 flex items-center justify-center rounded-r-full'>
            <GrSearch />
          </div>
        </div>

        <div className='flex items-center gap-7'>
          <div className='text-3xl cursor-pointer'>
            <FaUserCircle />
          </div>

          <div className='text-2xl cursor-pointer relative gap-1'>
            <span><FaShoppingCart /></span>
            <div className='bg-red-600 text-white w-5 h-5 flex items-center justify-center absolute -top-2 -right-3 rounded-full'>
              <p className='text-sm'> 0 </p>
            </div>
          </div>

          <Link to="/login" >
          <div>
            <button className='px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700'>Login</button>
          </div>
          </Link>

        </div>
      </div>
    </header>
  )
}

export default Header
