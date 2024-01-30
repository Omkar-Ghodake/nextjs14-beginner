import { connectToMongo } from '@/db/connectToDb'
import { Post } from '@/models/PostSchema'
import { NextResponse } from 'next/server'

export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    connectToMongo()
    const post = await Post.findOne({ slug: params.id })

    return NextResponse.json({ success: true, post })
  } catch (error) {
    console.error(error)
    throw new Error('Failed to fetch Post')
  }
}
