import React from 'react'
import logo from '/KoinXLogo.svg'
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className='w-[100%] bg-[#DEDFE2] fixed top-0 z-10 backdrop-blur-md bg-opacity-20 shadow-lg'>
    <div className='max-w-[1240px] mx-auto px-3'>
        <div className='w-full flex justify-between items-center p-3'>
        <div><img className='w-[96px] h-[24px]' src={logo}/></div>
        <div className='space-x-4 font-semibold sm:block hidden'>
            <a href='#Crypto_Taxes' className='hover:text-blue-500'>Crypto Taxes</a>
            <a href='#Free_Tools' className='hover:text-blue-500'>Free Tools</a>
            <a href='#RC' className='hover:text-blue-500'>Resource Center</a>
            <button className='text-white bg-gradient-to-r from-[#2870EA] to to-[#1B4AEF] py-1.5 px-3 rounded-lg'>Get Started</button>
        </div>
       <IoMenu className='text-2xl font-semibold block sm:hidden' />
        </div>
    </div>  
    </div>
  )
}

export default Navbar
