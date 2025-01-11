import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
  } from 'chart.js';
  
  // Register necessary chart elements
  ChartJS.register(ArcElement, Tooltip, Legend);

const Tokenomics = () => {
    
    const data = {
        // labels: ['Crowdsale investors', 'Foundation'],
        datasets: [
          {
            data: [80, 20], // Values for the pie chart
            backgroundColor: ['#2563eb', '#f59e0b'], // Blue and orange
            borderWidth: 0,
          },
        ],
      };
    
      const options = {
        plugins: {
          legend: {
            position: 'right',
            labels: {
              font: {
                family: 'sans-serif',
                size: 14,
              },
            },
          },
        },
        maintainAspectRatio: false,
      };

  return (
    <div className='w-full my-6 bg-gray-100 p-2.5 rounded-lg hidden md:block'>
    <div className='px-1 leading-[20px]'>
    <h1 className="text-2xl font-semibold mb-4">Tokenomics</h1>
    <p className='my-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea dolore debitis voluptatibus nesciunt officia aut quaerat earum voluptatum magni delectus dolorum repellendus fugit laboriosam, natus ex sint deserunt autem nostrum.</p>




<div className='flex items-center gap-5'>
    
    <div className="w-1/3"> 
    <Doughnut data={data} options={options} />  
    </div>

    <div className="flex flex-col space-y-2">
            
            <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-blue-600"></div>
                <span className="text-gray-700">Crowdsale investors: 80%</span>
            </div>
            
            <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-orange-500"></div>
                <span className="text-gray-700">Foundation: 20%</span>
            </div>

    </div>

</div>

<p className='my-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia nam recusandae dolor, vel reiciendis doloribus alias perspiciatis repellendus velit ex tempore magni tenetur nemo provident iste aliquam eius quae eligendi!</p>

    




    </div>
    </div>
  )
}

export default Tokenomics
