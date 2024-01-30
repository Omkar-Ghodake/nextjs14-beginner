import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <div className='flex justify-between'>
      <div className='relative h-[500px] w-1/2'>
        <Image src={'/contact.png'} alt='' className='' fill />
      </div>

      <div className='lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0'>
        <h2 className='text-gray-900 text-lg mb-1 font-medium title-font'>
          Feedback
        </h2>
        <p className='leading-relaxed mb-5 text-gray-500'>
          Post-ironic portland shabby chic echo park, banjo fashion axe
        </p>
        <div className='relative mb-4'>
          <label htmlFor='name' className='leading-7 text-sm text-gray-500'>
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            className='w-full bg-slate-800 rounded border border-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
          />
        </div>
        <div className='relative mb-4'>
          <label htmlFor='email' className='leading-7 text-sm text-gray-500'>
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            className='w-full bg-slate-800 rounded border border-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
          />
        </div>
        <div className='relative mb-4'>
          <label htmlFor='message' className='leading-7 text-sm text-gray-500'>
            Message
          </label>
          <textarea
            id='message'
            name='message'
            className='w-full bg-slate-800 rounded border border-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
          ></textarea>
        </div>
        <button className='bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
          Button
        </button>
        <p className='text-xs text-gray-500 mt-3'>
          Chicharrones blog helvetica normcore iceland tousled brook viral
          artisan.
        </p>
      </div>
    </div>
  )
}

export default Contact
