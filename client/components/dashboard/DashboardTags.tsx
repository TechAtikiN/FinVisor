// named imports
import { tags } from '@/utils/dashboardData'
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid'

const DashboardTags = () => {
  return (
    <div className='m-5 grid grid-cols-2 gap-x-6 gap-y-5'>
      {tags.map((tag, index) => (
        <div key={index} className='p-4 rounded-lg bg-[#262631] w-48'>
          <div className='flex justify-between'>
            <p className='p-1 bg-[#FFC6D3] rounded-lg text-black h-8 w-8'>{tag.icon}</p>
            <EllipsisHorizontalIcon className='h-8 hover:cursor-pointer w-8' />
          </div>
          <p className='mt-3 text-gray-300 font-semibold text-xl'>{tag.name}</p>

          <div className='flex justify-between items-center'>
            <p className='mt-3 text-gray-100 font-bold text-2xl bottom-1'>{tag.value}</p>
            <p className={`mt-3 text-gray-400 ${tag.percent.includes('+') ? 'text-green-400' : 'text-red-400'} font-semibold text-md bottom-1`}>{tag.percent}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default DashboardTags
