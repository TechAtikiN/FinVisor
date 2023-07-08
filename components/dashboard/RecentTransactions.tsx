import { recentTransactions } from '@/utils/dashboardData'

const RecentTransactions = () => {
  return (
    <div className='ml-5 w-full h-[400px] mt-2 bg-[#262631] rounded-lg p-4'>
      <p className='text-xl text-left font-semibold pb-3'>Recent Transactions</p>
      <div className='h-[260px] overflow-x-hidden overflow-y-scroll'>
        {recentTransactions.map((transaction, index) => (
          <div className='flex justify-between items-start mt-5 border-b border-gray-700'>
            <div className='flex items-center space-x-4'>
              <div className='p-1 bg-gray-100 rounded-full text-black h-8 w-8' />
              <div>
                <p className='text-gray-300 font-semibold text-lg'>{transaction.name}</p>
                <p className='text-gray-400 text-xs mb-2'>{transaction.date} at {transaction.time}</p>
              </div>
            </div>
            <p className={`text-gray-400 ${transaction.value.includes('+') ? 'text-green-400' : 'text-red-400'} font-semibold text-md`}>{transaction.value}</p>
          </div>
        )
        )}
      </div>
    </div>
  )
}

export default RecentTransactions
