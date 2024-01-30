import { auth } from '@/lib/auth'
import { handleGithubLogin, handleUserLogin } from '@/lib/data'
import { Session } from 'next-auth'
import Link from 'next/link'
import React from 'react'

const Login = async () => {
  const session: Session | null = await auth()

  return (
    <div>
      {session ? (
        <div>
          <Link href={'/'} className='bg-white text-black p-2'>
            Go to Homepage
          </Link>
        </div>
      ) : (
        <div>
          <form
            action={handleUserLogin}
            className='flex flex-col w-1/3 mx-auto gap-5 text-black'
          >
            <input
              type='text'
              placeholder='Enter Email'
              name='email'
              required
            />
            <input
              type='password'
              placeholder='Enter Password'
              name='password'
              required
            />
            <button className='bg-white text-black p-1'>Login</button>
          </form>

          <form action={handleGithubLogin}>
            <button className='bg-white text-black p-1'>
              Login with Github
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default Login
