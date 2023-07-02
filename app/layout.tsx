// named imports
import { AppBar, SideBar } from '@/components/globals'

// default imports
import './globals.css'

export const metadata = {
  title: 'Finvisor',
  description: 'App for managing your finances',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='text-white'>
        <div className='grid grid-cols-10 '>
          <div className='col-span-2 bg-gradient-to-br from-[#3A4F7A] via-sky-200 to-[#FFC6D3]'>
            <SideBar />
          </div>
          {/* bg-[#191825] */}
          <div className='col-span-8 bg-[#000000] '>
            <AppBar />
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
