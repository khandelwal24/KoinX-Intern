import React from 'react'
import { FaExclamationCircle } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa6";
import Card from './Card';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';

const Sentiments = () => {
  return (
    <div className='w-full bg-gray-100 my-6 p-2.5 rounded-lg overflow-hidden'>
        <div className='px-1 leading-[20px]'>
            <h4 className='font-semibold text-2xl'>Sentiments</h4>
            <p className='text-gray-700 font-semibold text-[18.91px] my-5'> Key Events <FaExclamationCircle className='inline text-lg font-bold'/> </p>
            

            {/* ////Crousal aayega.. yaha  */}
            <div className='grid w-full relative inset-0 md:grid-cols-2 grid-cols-1 gap-5 my-4 '>

      {/* Blue Card */}
      <Card
        title="Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt."
        description="Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim."
        icon="📄"
        color="bg-blue-500"
      />

      {/* Green Card */}
      <Card
        title="Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt."
        description="Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi in a adipiscing metus quis del."
        icon="📈"
        color="bg-green-500"
      />

     
      <IoIosArrowDropright className='text-3xl hidden md:block font-bold absolute right-2 top-[45%] hover:cursor-pointer hover:scale-125 duration-200 ease-in-out transition-all'/>

            </div>
            
            
            <p className='text-gray-700 font-semibold text-[18.91px] my-2'> Analyst Estimates <FaExclamationCircle className='inline text-lg font-bold'/> </p>

            <div className='flex items-center gap-7 overflow-hidden'>
                    
                <img className="rounded-full w-[120px] py-[25.25px] px-[27.48px] h-[116px] text-center text-3xl text-green-600 bg-green-200" src={null} alt="76%"/>
                  
                <div className='w-full'>
                    
                    <p className='flex gap-2 items-center mb-4' mb-4>
                    <lable>Buy</lable>
                    <div className="bg-green-400 h-2.5 rounded-full" style={{width:'76%'}}></div>
                    <lable>76%</lable>
                    </p>

                    <p className='flex gap-2 items-center mb-4' mb-4>
                    <lable>Hold</lable>
                    <div className="bg-gray-400 h-2.5 rounded-full" style={{width:'8%'}}></div>
                    <lable>8%</lable>
                    </p>

                    <p className='flex gap-2 items-center mb-4' mb-4>
                    <label>Sell</label>
                    <div className="bg-red-500 h-2.5 rounded-full" style={{width:'16%'}}></div>
                    <lable>16%</lable>
                    </p>
                </div>
               
            </div>



        </div>      
    </div>
  )
}

export default Sentiments
