'use client'
import { BarChart, CardComponent, DoughnutChart } from '@/components'
import { PlusIcon, PuzzlePieceIcon, RectangleStackIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const recentTransactions = [
  {
    id: 1,
    name: 'Amazon Shopping',
    amount: '-200',
    date: '12/06/2023',
    icon: <ShoppingBagIcon />
  },
  {
    id: 1,
    name: 'Xbox One',
    amount: '-400',
    date: '01/07/2023',
    icon: <PuzzlePieceIcon />
  },
  {
    id: 1,
    name: 'Stationary',
    amount: '-60',
    date: '5/07/2023',
    icon: <RectangleStackIcon />
  },
]

const Cards = () => {
  const [selectedState, setSelectedState] = useState<'Income' | 'Expense'>('Income')
  const [selectedDuration, setSelectedDuration] = useState<string>('Month')

  return (
    <div className='grid grid-cols-8 h-screen'>
      {/* left section */}
      <div className='col-span-3 p-4 border-r-[2px] border-gray-800'>

        {/* heading  */}
        <p className='text-xl text-left font-semibold'>View Your Cards</p>
        <p className='text-gray-500 text-sm font-semibold'>Summary about your active cards</p>

        {/* cards */}
        <CardComponent />

        {/* bottom details */}
        <div className='relative top-[280px]'>
          <button className='flex justify-center border-2 mx-8 w-[413px] hover:bg-opacity-50 bg-slate-900 rounded-2xl border-gray-700 border-dashed px-4 py-3 items-center space-x-3'>
            <PlusIcon className='h-6 w-6' />
            <p className='text-gray-200 text-xl font-semibold'>Add Card</p>
          </button>
          {/* recent transactions */}
          <div className='mt-7'>
            <p className='text-xl text-left font-semibold'>Recent Transactions</p>
            <div className='space-y-4 mt-4'>
              {recentTransactions.map((transaction) => (
                <div className='flex justify-between items-center mt-3 mx-8 border-b-[1px] border-slate-700 hover:bg-gray-800 p-2 rounded-lg hover:cursor-pointer'>
                  <div className='flex items-center space-x-3'>
                    <div className='h-8 w-8 rounded-full  flex justify-center items-center'>
                      {transaction.icon}
                    </div>
                    <div>
                      <p className='text-gray-200 text-lg font-semibold'>{transaction.name}</p>
                      <p className='text-gray-500 text-sm font-semibold'>{transaction.date}</p>
                    </div>
                  </div>
                  <p className='text-gray-200 text-lg font-semibold'>{transaction.amount}USD</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* right section */}
      <div className='col-span-5 bg-[#161616] p-3'>
        <p className='text-xl text-left font-semibold'>Summary</p>
        <p className='text-lg text-left font-semibold mt-2 text-gray-400'>Credit Limit: <span className='text-gray-200 text-lg'> $15000</span></p>

        {/* filters */}
        <div className='flex justify-between mt-3 mx-5'>
          <div className='flex space-x-4'>
            <button className={`cards-btn ${selectedState === 'Income' ? 'text-white border-b-2 border-gray-700 rounded-lg' : 'text-gray-500'}`} onClick={() => setSelectedState('Income')}>Income</button>
            <button className={`cards-btn ${selectedState === 'Expense' ? 'text-white border-b-2 border-gray-700 rounded-lg' : 'text-gray-500'}`} onClick={() => setSelectedState('Expense')}>Expense</button>
          </div>
          <div className='flex space-x-10 items-center'>
            <select onChange={(e) => setSelectedDuration(e.target.value)} className='p-1 font-semibold text-lg rounded-lg hover:red-100 bg-slate-700 text-white focus:outline-none' name='duration' id='duration'>
              <option value='Month'>Month</option>
              <option value='Week'>Week</option>
              <option value='Year'>Year</option>
            </select>
          </div>
        </div>

        <p className='text-5xl text-center mt-7 font-bold'><span className=' text-gray-500'>$</span>1978.45</p>
        <p className='text-center text-lg font-semibold mt-3 text-gray-500'>{selectedState === 'Income' ? 'Earned' : 'Spent'} this {selectedDuration}</p>

        {/* Doughnut chart */}
        <div className='mt-10'>
          <DoughnutChart />
        </div>

        {/* Bar Chart */}
        <div className='mt-10 mx-5'>
          <p className='text-xl text-left font-semibold mb-4'>{selectedDuration}ly {selectedState}</p>
          <BarChart />
        </div>
      </div>
    </div>
  )
}

export default Cards
