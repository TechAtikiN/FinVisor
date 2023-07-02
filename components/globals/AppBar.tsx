import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid"

const AppBar = () => {
  return (
    <div className='flex text-gray-300 justify-between p-4 items-center border-b-[1px] border-gray-800'>
      <p className='text-2xl font-bold'>Hello, <span className='text-sky-400'>Jenna!</span></p>
      <div className='flex items-center justify-end space-x-5'>
        <input type='text' placeholder='Search' className='bg-[#262631] focus:outline-none px-4 w-96 py-3 text-white font-bold rounded-2xl' />
        <img
          className='h-10 w-10 rounded-full hover:cursor-pointer'
          src='https://writestylesonline.com/wp-content/uploads/2021/02/Michele-Round-Circle-2020.png'
        />
        <ArrowRightOnRectangleIcon className='h-10 w-10 hover:cursor-pointer text-red-500 p-1 rounded-full bg-white' />

      </div>
    </div>
  )
}

export default AppBar
