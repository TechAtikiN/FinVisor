// named imports
import { AreaChart } from '@/components'
import { tags } from '@/utils/dashboardData'
import { EllipsisHorizontalCircleIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/solid'
export default function Home() {
  return (
    <div className='flex'>
      <div className='p-4 rounded-lg bg-[#262631] w-3/5 m-5'>
        <p className='text-xl text-left font-semibold'>Money Flow</p>

        {/* filters */}
        <div className='flex justify-end w-3/4 -mt-5 space-x-10 items-center'>
          <select className='p-1 font-semibold rounded-lg hover:red-100 text-black focus:outline-none' name='filterType' id='filterType'>
            <option value='expense'>Expense</option>
            <option value='income'>Income</option>
          </select>
          <select className='p-1 font-semibold rounded-lg hover:red-100 text-black focus:outline-none' name='duration' id='duration'>
            <option value='monthly'>Monthly</option>
            <option value='6months'>6 Months</option>
            <option value='yearly'>Yearly</option>
          </select>
        </div>

        {/* chart */}
        <AreaChart />
      </div>
      <div className='m-5 grid grid-cols-2 gap-x-8 gap-y-8'>
        {tags.map((tag, index) => (
          <div className='p-4 rounded-lg bg-[#262631] w-56'>
            <div className='flex justify-between'>
              <p className='p-1 bg-[#FFC6D3] rounded-lg text-black h-8 w-8'>{tag.icon}</p>
              <EllipsisHorizontalIcon className='h-8 w-8' />
            </div>
            <p className='mt-3 text-gray-300 font-semibold text-xl'>{tag.name}</p>

            <div className='flex justify-between items-center'>
              <p className='mt-3 text-gray-100 font-bold text-2xl bottom-1'>{tag.value}</p>
              <p className={`mt-3 text-gray-400 ${tag.percent.includes('+') ? 'text-green-400' : 'text-red-400'} font-semibold text-md bottom-1`}>{tag.percent}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
