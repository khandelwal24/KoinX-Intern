import React from 'react'
import card1 from '/Card1.jpeg'
import card2 from '/Card2.jpeg'
import { FaArrowRightLong } from "react-icons/fa6";

const About_Bitcoin = () => {
  return (
    <div className='w-full bg-gray-100 my-6 p-2.5 rounded-lg overflow-hidden'>
    <div className='px-1'>

    <p className='font-semibold text-2xl'>About Bitcoin</p>
    <h5 className='font-bold text-lg my-5'>What is Bitcoin? </h5>
    <p className='text-[16px] font-medium'>Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.</p>
    <hr className='h-[1px] bg-gray-400 text-black w-full my-3'/>

   <p className='font-bold text-lg mb-3'>Lorem ipsum dolor sit amet</p> 
   <p>
   Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.
   <br/>
   <br/>

   Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.
   
   <br/>
   <br/>
   
   Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
   </p>
  
    <hr className='h-[1px] bg-gray-400 text-black w-full my-3'/>

    <h6 className='text-2xl font-semibold '>Already Holding Bitcoin?</h6>
   
    <div className='2_cards grid lg:grid-cols-2 grid-cols-1 w-full my-4 gap-4 overflow-hidden'>
        
        <div className='card1 bg-gradient-to-r from-[#79F1A4] to-[#0E5CAD] gap-5 p-2.5 rounded-lg flex items-center'>
            <img src={card1} className='h-[128px] w-[128px] rounded-lg'/>
            <div>
            <p className='font-bold text-white text-xl mb-3'>Calculate your <br/> Profits</p>
            <button className='bg-white rounded-lg px-5 py-1.5 text-[14px]  font-semibold'>Check Now <FaArrowRightLong className='inline text-lg font-thin'/></button>
            </div>
        </div>

        <div className='card2 bg-gradient-to-r from-[#FF9865] to-[#EF3031] gap-5 p-2.5 rounded-lg flex items-center'>
            <img src={card2} className='h-[128px] w-[128px] rounded-lg'/>
            <div>
            <p className='font-bold text-white text-xl mb-3'>Calculate your tax liability</p>
            <button className='bg-white rounded-lg px-5 py-1.5 text-[14px]  font-semibold'>Check Now <FaArrowRightLong className='inline text-lg font-thin'/></button>
            </div>
        </div>

    </div>

    <hr className='h-[1px] bg-gray-400 text-black w-full my-3'/>

    <p className='hidden md:block'>Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui</p>


    </div>
    
    </div>
  )
}

export default About_Bitcoin
