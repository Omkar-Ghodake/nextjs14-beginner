import UserInfo from '@/components/userInfo/UserInfo'
import { getPost } from '@/lib/data'
import Image from 'next/image'
import { Suspense } from 'react'
// import dynamic from 'next/dynamic'

interface Props {
  params: { slug: string }
}

// const getPost = async (slug: string) => {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${slug}`,
//     { cache: 'no-store' }
//   )
//   if (!response.ok) {
//     throw new Error('Something went wrong!')
//   }
//   const data = await response.json()

//   return data
// }

const BlogPost = async ({ params }: Props) => {
  // const Temptest = dynamic(() => import('@/components/Temp'), { ssr: false })

  // const a = Math.random()
  // console.log(a)

  // console.log('params:', params)
  // console.log('searchParams:', searchParams.q!)

  const slug = params.slug

  const getPost = async () => {
    const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
      cache: 'no-store',
    })
    const data = await res.json()
    if (data.success) {
      return data.post
    }
  }

  const post = await getPost()

  return (
    <div className='flex gap-[100px]'>
      <div className='relative w-[90%] h-[calc(100vh-200px)]'>
        <Image
          src={
            'https://images.pexels.com/photos/18154838/pexels-photo-18154838/free-photo-of-spring.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          }
          alt=''
          fill
          className=''
        />
      </div>

      <div className='flex flex-col gap-5'>
        <h1 className='text-[3rem] font-semibold'>{post?.title}</h1>

        <div className='flex gap-5'>
          <div className='relative h-12 w-12 rounded-full'>
            <Image
              src={
                'https://images.pexels.com/photos/18154838/pexels-photo-18154838/free-photo-of-spring.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              }
              alt=''
              fill
              className='rounded-full'
            />
          </div>

          <Suspense fallback={<div>Loading...</div>}>
            <UserInfo userId={post?.userId} />
          </Suspense>

          <div className='flex flex-col'>
            <span className='text-gray-400'>Published</span>
            <span>01.01.2024</span>
          </div>
        </div>

        <p className='leading-tight'>{post?.description}</p>
      </div>

      {/* <div suppressHydrationWarning>{a}</div> */}
    </div>
  )
}

export default BlogPost
