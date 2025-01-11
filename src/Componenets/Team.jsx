import React from 'react'
import person1 from '/person1.png'
import person2 from '/Person2.png'
import person3 from '/Person3.png'


const Team = () => {
  return (
    <div className='w-full bg-gray-100 my-6 p-2.5 py-5 rounded-lg overflow-hidden'>
    <div className='px-1'>
        <h5 className='font-semibold text-2xl mb-4'>Team</h5>
        <p className='text-[16px] font-normal mb-4'>Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.</p>

        
        <div className='w-full grid grid-cols-1 gap-5 justify-center overflow-hidden'>

            <div className='card1 flex md:flex-row flex-col items-center justify-center md:gap-7 gap-4 p-2.5 bg-[#0082ff30] rounded-[7.5px]'>
          
            <div>
                <img className='justify-self-center md:w-full w-[60%] rounded-lg' src={person1}/>
                <p className='text-center text-gray-800 sm:text-[13px] font-bold text-sm my-2'>John Smith</p>
                <p className='text-center text-gray-800 sm:text-[10px] text-sm'>Desigination here</p>
            </div>

                <p>Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu</p>
            
            </div>
            
            <div className='card2 flex md:flex-row flex-col items-center justify-center md:gap-7 gap-4 p-2.5 bg-[#0082ff30] rounded-[7.5px]'>
          
            <div>
                <img className='rounded-lg justify-self-center md:w-full w-[60%]' src={person2}/>
                <p className='text-center text-gray-800 sm:text-[13px] font-bold text-sm my-2'>Elina Williams</p>
                <p className='text-center text-gray-800 sm:text-[10px] text-sm'>Desigination here</p>
            </div>

                <p>Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu</p>
            
            </div>

            <div className='card3 flex md:flex-row flex-col items-center justify-center md:gap-7 gap-4 p-2.5 bg-[#0082ff30] rounded-[7.5px]'>
          
            <div>
                <img className='rounded-lg justify-self-center md:w-full w-[60%]' src={person3}/>
                <p className='text-center text-gray-800 sm:text-[13px] font-bold text-sm my-2'>John Smith</p>
                <p className='text-center text-gray-800 sm:text-[10px] text-sm'>Desigination here</p>
            </div>

                <p>Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu</p>
            
            </div>

        </div>

    </div>
    </div>
  )
}

export default Team
