// named imports
import { BanknotesIcon, BellAlertIcon, CircleStackIcon, CogIcon, CreditCardIcon, HomeIcon, UserCircleIcon } from '@heroicons/react/24/solid'

// default imports
import NavLink from '../NavLink'
import Image from 'next/image'

const sideBarLinks = [
  {
    name: 'Dashboard',
    path: '/',
    icon: <HomeIcon />,
  },
  {
    name: 'Payments',
    path: '/payments',
    icon: <BanknotesIcon />,
  },
  {
    name: 'My Cards',
    path: '/cards',
    icon: <CreditCardIcon />,
  },
  {
    name: 'Investments',
    path: '/investments',
    icon: <CircleStackIcon />,
  },
  {
    name: 'Profile',
    path: '/profile',
    icon: <UserCircleIcon />,
  },
]

const sideBarLinks2 = [
  {
    name: 'Settings',
    path: '/settings',
    icon: <CogIcon />,
  }
]

const SideBar = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <h2 className='font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#94a8d2] via-sky-300 to-[#f9a7ba] text-3xl underline my-4 mt-5 text-center'>FinVisor.</h2>

      <div className='flex flex-col mx-8 space-y-2 mt-10'>
        <NavLink sideBarLinks={sideBarLinks} />
        <div className='absolute bottom-7'>
          <div className='flex items-center space-x-5'>
            <Image
              height={40}
              width={40}
              alt='profile picture'
              className='h-10 w-10 rounded-full hover:cursor-pointer'
              src='https://writestylesonline.com/wp-content/uploads/2021/02/Michele-Round-Circle-2020.png'
            />
            <div className='space-y-2'>
              <p className='text-gray-200 text-left border-b border-sky-400 w-1/2'>Jenna Smith</p>
              <p className='text-white font-semibold text-left'>jennasmith@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar
