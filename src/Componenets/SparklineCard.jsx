import React from 'react'
import { useState } from 'react';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { Carousel } from "flowbite-react";
import { FaCaretDown, FaCaretUp } from 'react-icons/fa6';


const SparklineCard = ({SparklineImgLink,symbol,logo,price,priceChange}) => {
   
  return (

    <div className='w-full overflow-hidden p-2.5 border border-gray-400 rounded-lg'>
        <div className='flex gap-2 items-center justify-start'>
            <img className='h-10 w-10 rounded-full' src={logo}/>
            <p>{symbol}</p>
           {Math.ceil(priceChange) < 0 ?
           <span className='truncate text-sm bg-red-400 px-2 py-0.5 rounded-md'>
           <FaCaretDown className='text-sm inline '/>
           {(priceChange)%100}%
          </span> :
          <span className='truncate text-sm bg-green-400 px-2 py-0.5 rounded-md'>
           <FaCaretUp className='text-sm inline '/>
           {(priceChange)%100}%
          </span>  }
        </div>
        <p className='text-lg font-semibold truncate'>${price}</p>
        <img className='justify-self-center' src={SparklineImgLink}/> 
    </div>

  )
}

export default SparklineCard









