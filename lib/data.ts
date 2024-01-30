'use server'

import { connectToMongo } from '@/db/connectToDb'
import { Post } from '@/models/PostSchema'
import { revalidatePath } from 'next/cache'
import { signIn, signOut } from './auth'
import { User } from '@/models/UserSchema'
const CryptoJs = require('crypto-js')

const posts = [
  {
    userId: '67',
    slug: '9',
    title: 'aid club disappear volume donkey labor lungs mice ',
    description:
      'town dug moon length rule extra nuts construction below numeral hope paint organization dirty place lesson jump conversation hurt vertical finger differ direction round opinion tax letter bank drop office shown world evidence four division nails bite everyone in chief drove sail cook dry hospital bring blind among',
  },
  {
    userId: '78',
    slug: '60',
    title: 'sum happy road rocky grade lady book begun ',
    description:
      'corn come took page camp thumb fell he teacher total guard fine way till sudden labor down twice plenty handle finish verb travel behind special silent carry choose necessary fill needle more spend win acres article sold loose require middle honor iron soft interest live fallen shorter furniture',
  },
  {
    userId: '17',
    slug: '96',
    title: 'lamp young vote baby chamber tea page language ',
    description:
      'plus unit occasionally pictured good determine tin exactly push me stranger those train remove map present five gather judge many spider machinery that exact leaf tin must production social lady dirty real recall floating wear population product secret larger century wet probably fur general poem detail something return',
  },
  {
    userId: '84',
    slug: '94',
    title: 'thus rhythm pale board molecular rabbit nest could ',
    description:
      'dust appearance chain having yes mighty pick clothing individual brave seat ocean lying zero faster in bar forest half reach seldom leaf sugar related climate recent try does usually select fine roof belong blow ill discuss contain various general wonder struck appearance ready flow hair storm tip camp',
  },
  {
    userId: '12',
    slug: '65',
    title: 'case longer shall herd during larger offer progress ',
    description:
      'bottle basic principle material laid molecular warn spend bank date serve path generally sun stopped probably unit cowboy toward heard diagram pie open why keep can principal carbon chest fellow research rocket shells quietly purple somewhere thrown use able paint flag news forth establish adventure flow compass hair',
  },
  {
    userId: '50',
    slug: '85',
    title: 'process engineer zero scene letter strip satellites team ',
    description:
      'iron direction thou mass pot exclaimed adjective take recently height differ at movement serve home welcome guess eye sometime becoming shelter affect feed usually several pride will group kids dangerous movement money far inch supper call headed shaking third tried offer brush zero triangle proud gift stand policeman',
  },
]
const users = [
  {
    id: 1,
    name: 'Naruto Uzumaki',
  },
  {
    id: 2,
    name: 'Minato Namikaze',
  },
  {
    id: 3,
    name: 'Kushina Uzumaki',
  },
]

interface SinglePost {
  userId: number
  slug: number
  title: string
  description: string
}

export const addPost = async (formData: FormData) => {
  const { title, description, slug, userId } = Object.fromEntries(formData)

  try {
    await connectToMongo()

    const newPost = new Post({
      title,
      description,
      slug,
      userId,
    })

    await newPost.save()
    console.log('Saved to Database!')
    revalidatePath('/blogs')
  } catch (error) {
    console.log(error)
  }
}

export const getPosts = async (): Promise<SinglePost[] | {}> => {
  'use server'

  try {
    await connectToMongo()

    const allPosts = await Post.find({})

    return allPosts
  } catch (error) {
    return { error: 'Unable to fetch posts' }
  }
}

export const getPost = async (slug: string): Promise<SinglePost> => {
  await connectToMongo()

  const post = await Post.findOne({ slug })
  return post
}

interface User {
  id: number
  name: string
}

export const getUser = async (userId: number): Promise<User> => {
  return users[userId]
}

export const handleGithubLogin = async () => {
  'use server'

  await signIn('github')
}

export const handleLogout = async () => {
  'use server'

  await signOut()
}

export const handleUserRegistrations = async (
  previousState: any,
  formData: FormData
) => {
  'use server'

  try {
    connectToMongo()

    const { username, email, password, passwordRepeat } =
      Object.fromEntries(formData)
    if (password === passwordRepeat) {
      const existingUser = await User.findOne({ email })
      const existingUsername = await User.findOne({ username })
      if (existingUser) {
        return { error: 'User already exists!' }
      } else if (existingUsername) {
        return { error: 'Username already taken!' }
      } else {
        const encryptedPassword = CryptoJs.AES.encrypt(
          password,
          process.env.CRYPTOJS_SECRET
        ).toString()
        const newUser = new User({
          username,
          email,
          password: encryptedPassword,
        })

        await newUser.save()
        console.log('User Created Successfully!')
      }
    } else {
      return { error: 'Password does not match!' }
    }
  } catch (error) {
    return { error }
  }
}

export const handleUserLogin = async (formdata: FormData) => {
  const { email, password } = Object.fromEntries(formdata)

  try {
    const user = await User.findOne({ email })
    if (user) {
      const decryptedPassword = CryptoJs.AES.decrypt(
        user.password,
        process.env.CRYPTOJS_SECRET
      ).toString(CryptoJs.enc.Utf8)

      if (decryptedPassword === password) {
        await signIn('credentials', { email, password })
      } else {
        return { error: 'Invalid password!' }
      }
    } else {
      return { error: 'User not found!' }
    }
  } catch (error) {
    return { error }
  }
}
