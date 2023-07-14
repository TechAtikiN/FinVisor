import { PencilSquareIcon } from "@heroicons/react/24/solid"
import Image from "next/image"

const Profile = () => {
  return (
    <div className='m-5'>
      <div className='p-5 col-span-3 w-3/4 rounded-lg bg-[#262631]'>
        <div className='flex items-center space-x-6'>
          <Image
            alt='profile picture'
            height={100}
            width={100}
            className='h-24 w-24 rounded-full hover:cursor-pointer'
            src='https://writestylesonline.com/wp-content/uploads/2021/02/Michele-Round-Circle-2020.png'
          />
          <div className=''>
            <p className='text-3xl font-semibold text-sky-500'>Jenna Smith</p>
            <p className='text-xl text-gray-300 font-bold'>Data Analyst</p>
            <p className=' text-xl font-semibold text-gray-400'>Senior Analyst, United States of America</p>
          </div>
          <button className='flex items-center space-x-3 absolute right-1/4 -mt-10 border border-gray-200 rounded-full px-3 py-2'><span className='text-xl font-semibold'>Edit</span> <PencilSquareIcon className='h-7 w-7' /></button>
        </div>
      </div>

      {/* personal info */}
      <div className='p-5 col-span-3 w-3/4 h-[370px] rounded-lg mt-5 bg-[#262631]'>
        <div className='flex justify-between'>
          <p className='text-2xl font-semibold text-gray-300'>Personal Information</p>
          <button className='flex items-center space-x-3 mr-16 border border-gray-200 rounded-full px-3 py-2'><span className='text-xl font-semibold'>Edit</span> <PencilSquareIcon className='h-7 w-7' /></button>
        </div>
        <div className='grid grid-cols-2 gap-x-6 gap-y-5'>
          <div className='flex flex-col space-y-1'>
            <p className='profile-label'>First Name</p>
            <p className='profile-data'>Jenna</p>
          </div>

          <div className='flex flex-col space-y-1'>
            <p className='profile-label'>Last Name</p>
            <p className='profile-data'>Smith</p>
          </div>

          <div className='flex flex-col space-y-1'>
            <p className='profile-label'>Email Address</p>
            <p className='profile-data'>jennasmith@gmail.com</p>
          </div>

          <div className='flex flex-col space-y-1'>
            <p className='profile-label'>Phone No.</p>
            <p className='profile-data'>+91 9898787679</p>
          </div>

          <div className='flex flex-col space-y-1'>
            <p className='profile-label'>Bio</p>
            <p className='profile-data'>Senior Analyst</p>
          </div>
        </div>
      </div>

      {/* address */}
      <div className='p-5 col-span-3 w-3/4 h-[300px] rounded-lg mt-5 bg-[#262631]'>
        <div className='flex justify-between'>
          <p className='text-2xl font-semibold text-gray-300'>Address</p>
          <button className='flex items-center space-x-3 mr-16 border border-gray-200 rounded-full px-3 py-2'><span className='text-xl font-semibold'>Edit</span> <PencilSquareIcon className='h-7 w-7' /></button>
        </div>
        <div className='grid grid-cols-2 gap-x-6 gap-y-5'>
          <div className='flex flex-col space-y-1'>
            <p className='profile-label'>Country</p>
            <p className='profile-data'>United States of America</p>
          </div>

          <div className='flex flex-col space-y-1'>
            <p className='profile-label'>City/ State</p>
            <p className='profile-data'>NYC, New York</p>
          </div>

          <div className='flex flex-col space-y-1'>
            <p className='profile-label'>Postal Code</p>
            <p className='profile-data'>897722</p>
          </div>

          <div className='flex flex-col space-y-1'>
            <p className='profile-label'>Tax ID</p>
            <p className='profile-data'>AA242442424</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
