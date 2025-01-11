import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SparklineCard from './SparklineCard';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { Carousel,Flowbite } from "flowbite-react";


const FotterSection = () => {

    const options = {
        method: 'GET',
        url: 'https://api.coingecko.com/api/v3/search/trending',
        headers: {accept: 'application/json', 'x-cg-api-key': import.meta.env.VITE_APIKEY }
    };

    const [coin,setcoin] = useState([]);

    useEffect(()=>{
        const fetchData = async()=>{
            const res = await axios.request(options).then(res=>setcoin(res.data.coins)).catch(err=>console.error(err));
        }

        fetchData();
    },[]);


    const [idx,setidx] = useState(0);
   
    const prev = () =>setidx((idx)=>(idx===0 ? coin.length-1 : idx-1))
    const next = () =>setidx((idx)=>(idx===coin.length-1 ? 0: idx+1))


console.log('Hey Brookes',coin);

  return (
    <div className='w-[100%] bg-gray-100 mt-6 py-5 overflow-hidden'>
    <div className='max-w-[1240px] mx-auto p-4'>
    <div className='px-1'>
    <h5 className='py-4 font-semibold text-2xl'>You may also Like</h5>

    
   
    <div className='grid relative inset-0 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 w-full gap-5 justify-center'>

        {coin?.slice(0,8)?.map((v,i)=>{
            return(
                <div key={i}>
                    <SparklineCard key={i} priceChange={v.item.data.price_change_percentage_24h.usd} price={v.item.data.price_btc} SparklineImgLink = {v.item.data.sparkline} logo={v.item.small} symbol={v.item.symbol}/>
                </div>
            )
        })}

        <IoIosArrowDroprightCircle onClick={next} className='hover:scale-150 duration-200 ease-in-out transition-all hover:cursor-pointer text-7xl bottom-[40%] right-0 absolute'/>
        <IoIosArrowDropleftCircle onClick={prev} className='hover:scale-150 duration-200 ease-in-out transition-all hover:cursor-pointer text-7xl bottom-[40%] left-0 absolute'/>

    </div>

   

    </div>
    </div>     
    </div>
  )
}

export default FotterSection
