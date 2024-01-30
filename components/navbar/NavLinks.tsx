import React from 'react'
import NavLink from './NavLink'
import { handleLogout } from '@/lib/data'
import { Session } from 'next-auth'

const NavLinks = async ({ session }: { session: Session | null }) => {
  const navLinks = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'About',
      path: '/about',
    },
    {
      title: 'Contact',
      path: '/contact',
    },
    {
      title: 'Blogs',
      path: '/blogs',
    },
  ]

  let isAdmin = false

  return (
    <div className='flex justify-between items-center gap-10'>
      {navLinks.map((navLink) => {
        return <NavLink key={navLink.path} item={navLink} />
      })}

      {session ? (
        <>
          {isAdmin && <NavLink item={{ title: 'Admin', path: '/admin' }} />}
          <form action={handleLogout}>
            <button className='bg-white text-black px-4 py-2 rounded-sm border border-white hover:bg-black hover:text-white duration-100'>
              Logout
            </button>
          </form>
        </>
      ) : (
        !session && (
          <>
            <NavLink item={{ title: 'Login', path: '/login' }} />
            <NavLink item={{ title: 'Register', path: '/register' }} />
          </>
        )
      )}
    </div>
  )
}

export default NavLinks
