'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface Item {
  item: {
    path: string
    title: string
  }
}

const NavLink = ({ item }: Item) => {
  const pathname = usePathname()

  return (
    <Link
      href={item.path}
      className={`${
        pathname === item.path
          ? 'bg-white text-black rounded-full'
          : 'font-normal text-slate-200 hover:text-white duration-200'
      } px-4 py-2`}
    >
      {item.title}
    </Link>
  )
}

export default NavLink
