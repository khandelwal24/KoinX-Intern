import React from 'react'
import '../App.css'
import { FaExclamationCircle } from "react-icons/fa";

const Performance = () => {
  return (
    <div className='w-full bg-gray-100 my-6 p-2.5 rounded-lg overflow-hidden'>
    <div className='px-1'>
        <h5 className='font-semibold text-2xl mb-4'>Performance</h5>
        
        <div className='w-full my-3 overflow-hidden'>
                    
                    <p className='flex justify-around gap-2 items-center mb-4' mb-4>
                    <lable>Today's Low <br/> 46,930.22  </lable>
                    <div className="bg-gradient-to-r from-[#FF4949] via-[#FC870A] && [#FFAF11] to-[#11EB68] h-2.5 rounded-full" style={{width:'70%'}}></div>
                    <lable>Todays's High <br/> 49,343.83 </lable>
                    </p>

                    <p className='flex justify-around gap-2 items-center mb-4' mb-4>
                    <lable>52W Low <br/> 16,930.22  </lable>
                    <div className="bg-gradient-to-r from-[#FF4949] via-[#FC870A] && [#FFAF11] to-[#11EB68] h-2.5 rounded-full" style={{width:'70%'}}></div>
                    <lable>52W High <br/> 49,743.83 </lable>
                    </p>
           
        </div>

        <p className='text-[18.91px] font-semibold mb-4'>Fundamentals <FaExclamationCircle className='inline text-lg font-bold'/></p>

        <div className='w-full grid lg:grid-cols-2 grid-cols-1 lg:gap-10'>
            
            <div>
            <p className='p-3 border-b flex justify-between border-gray-400'>
                <span className='perfo'>Bitcoin Price</span>
                <span>$16,185</span>
            </p>
            <p className='p-3 border-b flex justify-between border-gray-400'>
                <span className='perfo'>24h Low / 24h High</span>
                <span>$16,382.07 / $16,874.12</span>
            </p>
            <p className='p-3 border-b flex justify-between border-gray-400'>
                <span className='perfo'>7d Low / 7d High</span>
                <span>$16,382.07 / $16,874.12</span>
            </p>
            <p className='p-3 border-b flex justify-between border-gray-400'>
                <span className='perfo'>Trading Volume</span>
                <span>$23,249,202,782</span>
            </p>
            <p className='p-3 border-b flex justify-between border-gray-400'>
                <span className='perfo'>Market Cap Rank</span>
                <span>#1</span>
            </p>

            </div>

            
            <div>
            <p className='p-3 border-b flex justify-between border-gray-400'>
                <span className='perfo'>Market Cap</span>
                <span>$323,507,290,047</span>
            </p>
            <p className='p-3 border-b flex justify-between border-gray-400'>
                <span className='perfo'>Market Cap Dominance</span>
                <span>38.343%</span>
            </p>
            <p className='p-3 border-b flex justify-between border-gray-400'>
                <span className='perfo'>Volume / Market Cap</span>
                <span>0.0718</span>
            </p>
            <p className='p-3 border-b flex justify-between border-gray-400'>
                <span className='perfo'>All-Time High</span>
                <span>$69,044.77 <span className='text-red-600'>-75.6%</span>
                </span>
            </p>
            <p className='p-3 border-b flex justify-between border-gray-400'>
                <span className='perfo'>All-Time Low</span>
                <span>$67.81 <span className='text-green-600'>24729.1%</span> </span>
            </p>

            </div>

            
        </div>

    </div>
    </div>
  )
}

export default Performance
