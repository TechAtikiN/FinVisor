'use client'
// named imports
import { usePathname } from 'next/navigation'

// default imports
import Link from 'next/link'

interface Props {
  sideBarLinks: SideBarLinks[]
}

const NavLink = ({ sideBarLinks }: Props) => {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <>
      {sideBarLinks.map((link) => {
        return (
          <Link
            className={`flex ${pathname === link.path ? 'text-white bg-[#191825]' : 'text-gray-400'} px-4 py-3 rounded-l-full hover:text-white items-center space-x-4 text-lg font-semibold`}
            href={link.path}
          >
            <p className='h-6 w-6'>{link.icon}</p>
            <p>{link.name}</p>
          </Link>
        )
      })}
    </>
  )
}

export default NavLink
