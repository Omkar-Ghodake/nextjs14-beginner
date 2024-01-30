import PostCard from '@/components/postcard/Postcard'
import { addPost } from '@/lib/data'
import React from 'react'

// const getPosts = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//   if (!response.ok) {
//     throw new Error('Something went wrong!')
//   }
//   const data = await response.json()

//   return data
// }

const page = async () => {
  const getAllPosts = async () => {
    const res = await fetch('http://localhost:3000/api/posts')
    const posts = await res.json()
    if (posts.success) {
      return posts.allPosts
    }
  }

  const posts = await getAllPosts()

  return (
    <div className='flex flex-wrap'>
      <form action={addPost} className='text-black'>
        <input type='text' placeholder='title' name='title' />
        <input type='text' placeholder='description' name='description' />
        <input type='text' placeholder='userId' name='userId' />
        <input type='text' placeholder='slug' name='slug' />
        <button className='text-white'>Add Post</button>
      </form>
      {posts?.length > 0 &&
        posts?.map(
          (
            post: {
              userId: number
              slug: number
              title: string
              description: string
            },
            index: number
          ) => {
            return (
              <div key={index} className='w-1/3 mb-10 h-[70vh]'>
                <PostCard
                  userId={post.userId}
                  slug={post.slug}
                  title={post.title}
                  body={post.description}
                />
              </div>
            )
          }
        )}
    </div>
  )
}

export default page
