import { connectToMongo } from '@/db/connectToDb'
import { Post } from '@/models/PostSchema'
import { NextResponse } from 'next/server'

export const GET = async (req: Request) => {
  try {
    connectToMongo()

    const allPosts = await Post.find({})

    return NextResponse.json({ success: true, allPosts })
  } catch (error) {
    console.error(error)
    throw new Error('Failed to fetch Posts')
  }
}
