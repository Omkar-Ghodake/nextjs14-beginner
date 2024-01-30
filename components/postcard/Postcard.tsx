import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  userId: number
  slug: number
  title: string
  body: string
}

const PostCard = ({ slug, title, body }: Props) => {
  return (
    <div className='flex flex-col justify-between gap-[20px] mb-[40px]'>
      <div className='top flex'>
        <div className='relative w-[90%] h-[300px]'>
          <Image
            src={
              'https://images.pexels.com/photos/18154838/pexels-photo-18154838/free-photo-of-spring.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            }
            alt=''
            fill
            className='object-cover'
          />
        </div>
        <span className='w-[10%] text-[12px] rotate-[270deg]'>01.01.2024</span>
      </div>

      <div className='bottom'>
        <h1 className='text-[24px] mb-[20px]'>{title}</h1>
        <p className='mb-[20px] font-light text-gray-500'>{body}</p>
        <Link
          href={`/blogs/${slug}`}
          className='hover:text-slate-200 hover:underline duration-100'
        >
          Read More
        </Link>
      </div>
    </div>
  )
}

export default PostCard
