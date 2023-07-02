import { AreaChart } from "@/components";

export default function Home() {
  return (
    <div className='p-4 rounded-lg  bg-[#262631] w-3/5 m-5'>
      <p className='text-xl text-left font-semibold'>Money Flow</p>

      {/* filters */}
      <div className='flex justify-end w-3/4 space-x-10 items-center'>
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
  )
}
