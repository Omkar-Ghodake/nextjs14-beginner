import { getUser } from '@/lib/data'
import React from 'react'

// const getUser = async (userId: number) => {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`,
//     { cache: 'no-store' }
//   )
//   if (!response.ok) {
//     throw new Error('Something went wrong!')
//   }
//   const data = await response.json()

//   return data
// }

const UserInfo = async ({ userId }: { userId: number }) => {
  const user = await getUser(userId > 2 ? 2 : userId)

  return (
    <div>
      <div className='flex flex-col'>
        <span className='text-gray-400'>Author</span>
        <span>{user?.name}</span>
      </div>
    </div>
  )
}

export default UserInfo
