import Link from 'next/link'
import React from 'react'
import NavLinks from './NavLinks'
import { auth } from '@/lib/auth'
import { Session } from 'next-auth'

const Navbar = async () => {
  let session: Session | null = await auth()
  console.log('🚀 ~ Navbar ~ user:', session?.user)

  return (
    <nav className='flex justify-between items-center px-7 py-5'>
      <Link href={'/'} className='logo text-2xl w-1/5'>
        Logo
      </Link>

      <div className=''>{<NavLinks session={session} />}</div>
    </nav>
  )
}

export default Navbar
