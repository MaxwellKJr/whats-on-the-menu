import React, {FC} from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar: FC = () => {
  return (
  <nav className='bg-red-200 w-full h-16'>
      <div className='flex lg:flex-row justify-between items-center mx-auto w-4/5 h-full'>
        <Link href="/" className="text-2xl font-semibold">
          What's On The Menu?
        </Link>

        <ul className='flex flex-col sm:flex-row justify-evenly items-center'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/restaurants'>Restaurants</Link>
          </li>
        </ul>
        <div className='block sm:hidden'>
          <FontAwesomeIcon icon={faBars} />  
        </div>
      </div>
  </nav>
  )
}

export default Navbar
