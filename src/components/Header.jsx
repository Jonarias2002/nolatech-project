import React from 'react'
import { IoCaretForwardCircleOutline, IoRadio } from "react-icons/io5";
import Title from './Title';

function Header() {
  return (
    <div className=' bg-green-600 text-white'>
      <header className="container mx-auto">
        <div className='flex justify-center'>
            <div className="flex bg-red-500 text-2xl py-2 px-5">
              Live
              <IoRadio className='ml-3 mt-1' width={20} />
            </div>
            <span className='text-xl my-2 mx-3'> Lorem ipsu dolor sit amet </span>
            <div  className="flex bg-green-700 text-2xl py-2 px-5"> 
            Join Now
            <IoCaretForwardCircleOutline className='ml-3 mt-1' width={20} />
            </div>
        </div>
    </header>
    </div>
  )
}

export default Header