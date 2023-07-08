'use client'
// named imports
import { ArrowRightOnRectangleIcon, BellAlertIcon, CogIcon } from '@heroicons/react/24/solid'
import { usePathname } from 'next/navigation'
import path from 'path'
import { useEffect, useState } from 'react'

const AppBar = () => {
  const [currentTab, setCurrentTab] = useState('')
  let pathname = usePathname()

  useEffect(() => {
    pathname === '/' ? setCurrentTab('DASHBOARD') : setCurrentTab(pathname.split('/')[1].toUpperCase())
  }, [pathname])

  return (
    <div className='flex text-gray-300 justify-between p-4 items-center border-b-[1px] border-gray-800'>
      <p className='text-2xl font-bold'>{currentTab}</p>
      <div className='flex items-center justify-end space-x-5'>
        {/* <input type='text' placeholder='Search' className='bg-[#262631] focus:outline-none px-4 w-96 py-3 text-white font-bold rounded-2xl' /> */}
        <CogIcon className='h-10 w-10 hover:cursor-pointer text-sky-800 hover:text-sky-400 p-1 rounded-full bg-white' />
        <BellAlertIcon className='h-10 w-10 hover:cursor-pointer text-sky-800 hover:text-sky-400 p-1 rounded-full bg-white' />
        <ArrowRightOnRectangleIcon className='h-10 w-10 hover:cursor-pointer text-sky-800 hover:text-sky-500 p-1 rounded-full bg-white' />
      </div>
    </div>
  )
}

export default AppBar
