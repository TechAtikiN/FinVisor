'use client'
// named imports
import { useState } from 'react'
import { ArrowTrendingUpIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/solid'
import { DiversificationChart, InvestmentAreaChart, News } from '@/components'
import { investingOptions } from '@/utils/dashboardData'

const Investments = () => {
  const [selectedDuration, setSelectedDuration] = useState('1w')

  return (
    <div className='m-5 grid grid-cols-3'>
      <div className='p-5 col-span-3 w-full rounded-lg bg-[#262631]'>
        <div className='flex justify-between'>
          {/* top section of chart with filters  */}
          <div className=''>
            <p className='text-xl text-left font-semibold text-gray-400'>Total Invested Value</p>
            <div className='flex items-center space-x-3 mt-2'>
              <p className='text-3xl font-semibold'>$12330.50</p>
              <p className='text-green-500 flex'><ArrowTrendingUpIcon className='h-6 w-6 mr-1' /> +15.43%</p>
            </div>
          </div>
          <div className=''>
            <button onClick={() => setSelectedDuration('1w')} className={`investment-chart-btn ${selectedDuration === '1w' ? 'bg-gray-700 opacity-90' : null}`}>1w</button>
            <button onClick={() => setSelectedDuration('1m')} className={`investment-chart-btn ${selectedDuration === '1m' ? 'bg-gray-700 opacity-90' : null}`}>1m</button>
            <button onClick={() => setSelectedDuration('6m')} className={`investment-chart-btn ${selectedDuration === '6m' ? 'bg-gray-700 opacity-90' : null}`}>6m</button>
            <button onClick={() => setSelectedDuration('1y')} className={`investment-chart-btn ${selectedDuration === '1y' ? 'bg-gray-700 opacity-90' : null}`}>1y</button>
            <button onClick={() => setSelectedDuration('All')} className={`investment-chart-btn ${selectedDuration === 'All' ? 'bg-gray-700 opacity-90' : null}`}>All</button>
          </div>
        </div>
        {/* chart */}
        <InvestmentAreaChart />
      </div>
      <div className='w-full h-[440px] mt-4 bg-[#262631] rounded-lg p-4'>
        <p className='text-xl text-left font-semibold pb-3 mt-2'>Diversification of Investments</p>
        <DiversificationChart />
      </div>

      <div className='m-5 grid grid-cols-2 w-full h-full'>
        {investingOptions.map((option, index) => (
          <div key={index} className='p-7 rounded-lg bg-[#262631] w-56 h-52'>
            <div className='flex justify-between'>
              <p className='p-1 bg-[#FFC6D3] rounded-lg text-black h-8 w-8'>{option.icon}</p>
              <EllipsisHorizontalIcon className='h-8 hover:cursor-pointer w-8' />
            </div>
            <p className='mt-3 text-gray-300 font-semibold text-xl'>{option.name}</p>

            <div className='flex justify-between items-center'>
              <p className='mt-3 text-gray-100 font-bold text-2xl bottom-1'>{option.value}</p>
            </div>
            <p className={`mt-3 text-gray-400 ${option.percent.includes('+') ? 'text-green-400' : 'text-red-400'} font-semibold text-md bottom-1`}>{option.percent}<span className='text-gray-300 text-lg'> / month</span></p>
          </div>
        ))}
      </div>
      <News />
    </div>
  )
}

export default Investments
