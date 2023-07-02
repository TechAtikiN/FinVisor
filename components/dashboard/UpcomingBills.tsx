import { upcomingBills } from '@/utils/dashboardData'

const UpcomingBills = () => {
  return (
    <div className='m-5 mt-2 w-1/2 bg-[#262631] rounded-lg p-4'>
      <p className='text-xl text-left font-semibold'>Upcoming Bills</p>
      <div className='h-[260px] overflow-x-hidden overflow-y-scroll'>
        {upcomingBills.map((transaction, index) => (
          <div className='flex justify-between items-start mt-5 border-b border-gray-700'>
            <div className='flex items-center space-x-4'>
              <div className='p-1 bg-gray-100 rounded-full text-black h-8 w-8' />
              <div>
                <p className='text-gray-300 font-semibold text-lg'>{transaction.name}</p>
                <p className='text-gray-400 text-sm mb-2'>Due Date: {transaction.date}</p>
              </div>
            </div>
            <p className={`font-semibold text-md text-white`}>{transaction.value}</p>
          </div>
        )
        )}
      </div>
    </div>
  )
}

export default UpcomingBills
