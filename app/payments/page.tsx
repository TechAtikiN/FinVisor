'use client'
// named imports
import { useState } from 'react'
import { transactions } from '@/utils/dashboardData'

const Payments = () => {
  const [transactionType, setTransactionType] = useState('All')
  return (
    <div>
      <div>
        <div className='flex space-x-3 border-b border-gray-700'>
          <p onClick={() => setTransactionType('All')} className={`text-xl font-semibold px-4 py-3 hover:text-gray-400 hover:cursor-pointer ${transactionType === 'All' ? 'bg-gray-800' : null}`}>All</p>
          <p onClick={() => setTransactionType('Upcoming')} className={`text-xl font-semibold px-4 py-3 hover:text-gray-400 hover:cursor-pointer ${transactionType === 'Upcoming' ? 'bg-gray-800' : null}`}>Upcoming</p>
          <p onClick={() => setTransactionType('Failed')} className={`text-xl font-semibold px-4 py-3 hover:text-gray-400 hover:cursor-pointer ${transactionType === 'Failed' ? 'bg-gray-800' : null}`}>Failed</p>
        </div>

        <table className='w-3/4 mt-10 border-2 border-gray-800 m-5 mx-14'>
          <thead className='bg-gray-800'>
            <tr className='rounded-2xl'>
              <th className='text-gray-300 font-semibold py-4 px-5'>Transaction ID</th>
              <th className='text-gray-300 font-semibold py-4 px-5'>Name</th>
              <th className='text-gray-300 font-semibold py-4 px-5'>Date</th>
              <th className='text-gray-300 font-semibold py-4 px-5'>Amount</th>
              <th className='text-gray-300 font-semibold py-4 px-5'>Status</th>
              <th className='text-gray-300 font-semibold py-4 px-5'>Payment Method</th>
            </tr>
          </thead>
          <tbody className='h-[300px] overflow-y-scroll'>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className='hover:bg-gray-800 hover:cursor-pointer'>
                <td className='border-b border-gray-700 text-lg text-gray-400 font-semibold py-2 px-x text-center'>{transaction.id}</td>
                <td className='border-b border-gray-700 text-lg text-gray-200 font-semibold py-2 px-x text-center'>{transaction.name}</td>
                <td className='border-b border-gray-700 text-lg text-gray-400 font-semibold py-2 px-x text-center'>{transaction.date}<p className='text-gray-400 text-sm'>{transaction.time}</p></td>
                <td className='border-b border-gray-700 text-lg text-gray-300 font-bold py-2 px-x text-center'>{transaction.value}</td>
                <td className={`border-b border-gray-700 ${transaction.status === 'Success' ? 'text-green-500' : 'text-red-500'} text-lg text-gray-400 font-semibold py-2 px-x text-center`}>{transaction.status}</td>
                <td className='border-b border-gray-700 text-lg text-gray-300 font-semibold py-2 px-x text-center'>{transaction.paymentMethod}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Payments
