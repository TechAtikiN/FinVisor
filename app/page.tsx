// named imports
import { AreaChart, DashboardTags, RecentTransactions, UpcomingBills } from '@/components'
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
export default function Home() {
  return (
    <div>
      <div className='flex'>
        {/* money flow */}
        <div className='p-4 rounded-lg bg-[#262631] w-3/5 m-5'>
          <p className='text-xl text-left font-semibold'>Money Flow</p>
          <div className='flex justify-end w-3/4 -mt-5 space-x-10 items-center'>
            <select className='p-1 font-semibold rounded-lg hover:red-100 text-black focus:outline-none' name='duration' id='duration'>
              <option value='monthly'>Monthly</option>
              <option value='6months'>6 Months</option>
              <option value='yearly'>Yearly</option>
            </select>
          </div>

          <AreaChart />
        </div>

        <DashboardTags />
      </div>

      <div className='flex w-full'>
        <RecentTransactions />

        <UpcomingBills />

        {/* quick tranfer */}
        <div className='m-5 mt-2 w-1/2 flex justify-start bg-[#262631] rounded-lg p-4'>
          <div className='flex flex-col w-full justify-center space-y-4'>
            <p className='text-xl text-left font-semibold'>Quick Transfer</p>
            <div className='flex flex-col space-y-2'>
              <label className='pay-label' htmlFor=''>Enter Receipient Name</label>
              <input className='pay-input' type='text' />
            </div>

            <div className='flex flex-col space-y-2'>
              <label className='pay-label' htmlFor=''>Enter Receipient Account Number</label>
              <input className='pay-input' type='text' />
            </div>

            <div className='flex space-x-2 items-center space-y-2'>
              <label className='pay-label' htmlFor=''>Enter Amount</label>
              <input className='pay-input' type='text' />
              <button className='px-3 py-2 flex justify-center items-center rounded-lg text-white font-semibold bg-sky-400 w-40 animate-pulse'>Send<ArrowUpRightIcon className='h-4 text-white font-extrabold w-4' /></button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
