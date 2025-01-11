import React from 'react'
import { useState } from 'react';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { Carousel } from "flowbite-react";


const SparklineCard = ({SparklineImgLink,symbol,logo,price}) => {
   
  return (

    <div className='w-full overflow-hidden p-2.5 border border-gray-400 rounded-lg'>
        <div className='flex gap-2 items-center justify-start'>
            <img className='h-10 w-10 rounded-full' src={logo}/>
            <p>{symbol}</p>
        </div>
        <p className='text-xl font-semibold truncate'>${price}</p>
        <img src={SparklineImgLink}/> 
    </div>

  )
}

export default SparklineCard









