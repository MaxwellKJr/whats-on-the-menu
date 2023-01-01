import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
  <nav className='bg-red-200 w-full h-16'>
      <div className='flex lg:flex-row justify-between items-center mx-auto w-4/5 h-full'>
        <Link href="/" className="text-2xl font-semibold">
          What's On The Menu?
        </Link>

        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
        </ul>
      </div>
  </nav>
  )
}

export default Navbar
