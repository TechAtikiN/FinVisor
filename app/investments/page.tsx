'use client'
// named imports
import { useState } from 'react'
import { ArrowTrendingUpIcon } from '@heroicons/react/24/solid'
import { InvestmentAreaChart } from '@/components'

const Investments = () => {
  const [selectedDuration, setSelectedDuration] = useState('1w')


  return (
    <div className='m-5'>
      <div className='p-5 col-span-2 w-full rounded-lg bg-[#262631]'>
        <div className='flex justify-between'>
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
        <InvestmentAreaChart />
      </div>
    </div>
  )
}

export default Investments
