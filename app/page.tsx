import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <div className='flex items-center justify-between'>
      <div className='w-1/2 flex flex-col justify-between gap-10'>
        <h1 className='text-[4.5rem] leading-tight font-bold text-slate-200'>
          Creative Thoughts Agency
        </h1>

        <p className='text-xl text-slate-200'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ducimus
          obcaecati sunt necessitatibus aspernatur nisi maiores ipsam
        </p>

        <div className='text-sm flex justify-start items-center gap-5 w-1/2'>
          <button className='bg-blue-500 text-white hover:bg-blue-600 px-4 py-3 w-1/2 duration-150'>
            Learn More
          </button>
          <button className='bg-white text-black hover:bg-slate-100 px-4 py-3 w-1/2 duration-150'>
            Contact
          </button>
        </div>

        <div className='relative w-full h-[50px] grayscale'>
          <Image src={'/brands.png'} alt='' fill />
        </div>
      </div>

      <div className='relative h-[500px] w-1/2'>
        <Image src={'/hero.gif'} alt='' fill />
      </div>
    </div>
  )
}

export default Home
