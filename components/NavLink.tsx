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
            className={`flex ${pathname === link.path ? 'text-black border-l-4 border-[#000000]' : 'border-l-4 border-transparent text-gray-700'} border-l-4 hover:border-gray-500 px-4 py-3 hover:text-black items-center space-x-4 text-xl font-semibold`}
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
