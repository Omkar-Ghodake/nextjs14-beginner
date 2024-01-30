'use client'
import { handleUserRegistrations } from '@/lib/data'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useFormState } from 'react-dom'

const RegisterForm = () => {
  const cons = () => {
    console.log('sdfhgjsdhflkshfjklsdfhjlk')
  }

  const [state, formAction] = useFormState(handleUserRegistrations, undefined)

  const router = useRouter()

  useEffect(() => {
    console.log('🚀 ~ RegisterForm ~ state:', state)

    state?.success && router.push('/login')
  }, [state?.success, router])

  return (
    <form
      action={formAction}
      className='flex flex-col w-1/3 mx-auto gap-5 text-black'
    >
      <input type='text' placeholder='Enter Name' name='username' required />
      <input type='text' placeholder='Enter Email' name='email' required />
      <input
        type='password'
        placeholder='Enter Password'
        name='password'
        required
      />
      <input
        type='password'
        placeholder='Enter Password Again'
        name='passwordRepeat'
        required
      />

      <button className='bg-white text-black p-1'>Register</button>

      <h2 className='text-3xl text-red-500'>
        {/* {console.log('The error is: ', state)} */}
      </h2>
    </form>
  )
}

export default RegisterForm
