// named imports
import { AreaChart, DashboardTags, RecentTransactions, UpcomingBills } from '@/components'
import { tags } from '@/utils/dashboardData'
import { ArrowUpRightIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
export default function Home() {
  return (
    <>
      <div className='grid grid-cols-3 gap-x-5 gap-y-2 m-1'>

        {/* money flow */}
        <div className='p-5 col-span-2 w-full rounded-lg bg-[#262631] my-5 ml-5 mr-6'>
          <div className='flex justify-between items-center'>
            <p className='text-xl text-left font-semibold'>Money Flow</p>
            <div className='flex space-x-10 items-center'>
              <select className='p-1 font-semibold rounded-lg hover:red-100 text-black focus:outline-none' name='duration' id='duration'>
                <option value='monthly'>Monthly</option>
                <option value='6months'>6 Months</option>
                <option value='yearly'>Yearly</option>
              </select>
            </div>
          </div>
          <AreaChart />
        </div>

        <DashboardTags />

        <div className='col-span-2 flex'>
          <RecentTransactions />

          <UpcomingBills />
        </div>

        {/* quick tranfer */}
        <div className='mx-5 mt-2 justify-start bg-[#262631] rounded-lg p-4'>
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
              <input className='pay-input' type='text' placeholder='Enter Amount' />
              <button className='px-3 py-2 flex justify-center items-center rounded-lg text-white font-semibold bg-sky-400 w-40 animate-pulse'>Send<ArrowUpRightIcon className='h-4 text-white font-extrabold w-4' /></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
