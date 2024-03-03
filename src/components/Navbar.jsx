import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='bg-gray-900 h-[64px] flex justify-center items-center'>
     <div className='flex justify-center items-center text-white gap-[79px]'>
     <input className="bg-search w-[258px] h-[37px] rounded-sm" type="text" name="username" />
        <ul className='flex justify-center items-center gap-[126px]'>
        <li>Categories</li>
        <li>Website Builders</li>
        <li>Today's deals</li>
        </ul>
     </div>
        
    </div>
  )
}

export default Navbar