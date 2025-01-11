import React, { useEffect, useState, useRef } from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import axios from 'axios';
import logo from '/side.png'
import { FaArrowRightLong, FaCaretDown } from "react-icons/fa6";
import { FaCaretUp } from "react-icons/fa";
import About_Bitcoin from './About_Bitcoin.jsx';
import Sentiments from './Sentiments.jsx';
import Team from './Team.jsx';
import Tokenomics from './Tokenomics.jsx';
import Performance from './Performance.jsx';
import { ImSearch } from "react-icons/im";
import { toast, ToastContainer } from 'react-toastify';
// import 'dotenv/config'


const HeroSection = () => {
    
    const container = useRef();
    let [allcoin,setallcoin] = useState([]);
    let [Coin,setCoin] = useState('bitcoin');
    let [price,setprice] = useState([]);
    const[searchCoin, setSearchCoin] = useState('bitcoin');

    useEffect(
      () => {
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = `
          {
            "height":"620",
            "autosize": true,
            "symbol": "COINBASE:BTCUSD",
            "interval": "D",
            "timezone": "Etc/UTC",
            "theme": "light",
            "style": "1",
            "locale": "en",
            "allow_symbol_change": true,
            "calendar": false,
            "support_host": "https://www.tradingview.com"
          }`;
        container.current.appendChild(script);
      },
      [setCoin]
    );


   
      
      
    
   
    
    const Prices = {
        method: 'GET',
        url: `https://api.coingecko.com/api/v3/simple/price?ids=${Coin}&vs_currencies=usd%2Cinr&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true&precision=2`,
        headers: {accept: 'application/json', 'x-cg-api-key': import.meta.env.VITE_APIKEY}
      };


      useEffect(()=>{
        const fetchData = async()=>{
            const res = await axios.request(Prices).then(res=>setprice(res.data)).catch(err=>console.error(err));
        }

        fetchData();
        toast.success('Please wait while fetching API data')
        if(price === null) toast.error('No such coin exists please check the name');
        
    },[setCoin,Coin])
    

    console.log("Prices: ",price);
      

    const options = {
        method: 'GET',
        url: 'https://api.coingecko.com/api/v3/search/trending',
        headers: {accept: 'application/json', 'x-cg-api-key': import.meta.env.VITE_APIKEY}
    };

    useEffect(()=>{
        const fetchData = async()=>{
            const res = await axios.request(options)
            .then(res =>setallcoin(res.data.coins))
            .catch(err => console.error(err));
        }

        fetchData();
        
    },[]);
    
    console.log("All Trending coins",allcoin);

    



  return (
    <div className='w-[100%] py-5 mt-14'>
    <ToastContainer position='top-center' autoClose={1000} theme='dark'/>
    <div className='max-w-[1240px] mx-auto px-3'>
    
        <div className='mb-3'> CryptoCurrencies <MdKeyboardDoubleArrowRight className='inline' /> <span className='font-semibold'>Bitcoin</span></div>   
        
        {/* main graphs section... */}

        <div className='grid w-full md:grid-cols-[70%_auto] grid-cols-1 gap-5'>
         
<div>
            <div className='w-full bg-gray-200 h-fit rounded-lg p-2 font-semibold text-xl'>
           
                <div className='flex flex-col gap-2 my-4 px-2 relative'>
              
                <input defaultValue="bitcoin" onKeyDown={(e)=>e.key==='enter'} type='text' placeholder='Search any coin write everthing in (lowercase)' className='relative outline-none p-2 px-5 rounded-full' value={searchCoin} onChange={(e)=>setSearchCoin(e.target.value)} />
                <ImSearch onClick={()=>setCoin(searchCoin)} className='absolute hover:cursor-pointer right-4 top-3'/>
                <p className='uppercase text-lg font-bold'>{Coin}</p>
                
                <div className='flex flex-row items-start gap-5 my-3'>
                <div className='flex flex-col items-start gap-1'>
                <p className='text-black font-semibold text-2xl'>$ {price[Coin]?.usd}</p>
                <p className='text-black font-mono text-sm'>&#8377; {price[Coin]?.inr}</p>
                </div>

                                    {Math.ceil(price[Coin]?.usd_24h_change) < 0 ?
                                     <span className='truncate bg-red-400 px-2 py-0.5 rounded-md'>
                                     <FaCaretDown className='text-md inline '/>
                                     {(price[Coin]?.usd_24h_change)%100}%
                                    </span> :
                                    <span className='truncate bg-green-400 px-2 py-0.5 rounded-md'>
                                     <FaCaretUp className='text-md inline '/>
                                     {(price[Coin]?.usd_24h_change)%100}%
                                    </span>  }

                </div>
                </div>
         
            
            <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
            <div className="tradingview-widget-container__widget" style={{ height: "100%", width: "100%" }}></div>
            <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div>
            </div>

            


           

            </div>

            <Performance/>
            <Sentiments/>
            <About_Bitcoin/>
            <Tokenomics/>
            <Team/>
</div>


          
            <div className='w-full space-y-7 overflow-hidden'>
               
                <section className='card px-4 py-8 bg-[#0052FE] rounded-lg text-center text-white'>
                        <p className='font-bold text-2xl text-center'>Get Started with KoinX for FREE</p>
                        <p className='text-xs py-3 font-normal'>with our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports</p>
                        <img src={logo} className='justify-self-center'/>
                        <button className=' text-black font-semibold p-2.5 rounded-md bg-white mt-2'>Get Started for FREE <FaArrowRightLong className='inline text-lg font-thin'/></button>
                </section>

                <section className='card p-6 rounded-lg bg-gray-200'>
                    <h2 className='text-xl font-bold mb-2 '>Trending Coins (24hrs)</h2>
                    
                    <ul className='space-y-5'>
                        {allcoin?.slice(0,3)?.map((v,i)=>{
                            return(
                                <ul key={i}>
                                    <div className='flex gap-4 items-center justify-between'>
                                    
                                    <div className='flex gap-2 items-center'>
                                        <img src={v.item.small} className='h-5 w-5 rounded-full'/>
                                        {v.item.name}
                                    </div>

                                    {Math.ceil(v.item.data.price_change_percentage_24h.usd) < 0 ?
                                     <span className='truncate bg-red-400 px-2 py-0.5 rounded-md'>
                                     <FaCaretDown className='text-md inline '/>
                                     {Math.ceil(v.item.data.price_change_percentage_24h.usd)%10000}%
                                    </span>  :
                                    <span className='truncate bg-green-400 px-2 py-0.5 rounded-md'>
                                     <FaCaretUp className='text-md inline '/>
                                     {Math.ceil(v.item.data.price_change_percentage_24h.usd)%10000}%
                                    </span>  }

                                    </div>
                                </ul>
                            )
                        })}
                    </ul>
                </section>

            </div>

        </div>

    </div>
    </div>
  )
}

export default HeroSection

