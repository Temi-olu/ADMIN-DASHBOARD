import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import { BsBrightnessHigh } from "react-icons/bs";
function Header() {
  return (
    <div className='bg-white h-18 w-full shadow-sm'> 
      <IoMenu size={20} className='relative left-5 top-7' />
      <div className='relative left-14 bottom-1'>
        <h1 className='font-bold'>Dashboard</h1>
        <p className='text-sm'>Welcome back, Temi! here's what's happening today</p>
      </div>
<div className='relative left-[800px] bottom-10 flex'>
 <CiSearch className='relative left-4 top-1' />
  <input type="text" placeholder='     search anything'
  className='border-2 rounded-sm'
  />
  <BsBrightnessHigh className='relative left-24 top-1' />
</div>


    </div>
  )
}

export default Header