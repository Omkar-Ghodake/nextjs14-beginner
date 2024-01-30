import { connectToMongo } from '@/db/connectToDb'
import { User } from '@/models/UserSchema'
import NextAuth from 'next-auth'
import Github from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
const CryptoJs = require('crypto-js')

const login = async (credentials: any) => {
  try {
    connectToMongo()

    const user = await User.findOne({ email: credentials.email })
    if (user) {
      const decryptedPassword = CryptoJs.AES.decrypt(
        user.password,
        process.env.CRYPTOJS_SECRET
      ).toString(CryptoJs.enc.Utf8)

      if (decryptedPassword === credentials.password) {
        return user
      } else {
        return { error: 'Invalid Credentials!' }
      }
    } else {
      return { error: 'Invalid Credentials!' }
    }
  } catch (error) {
    return { error: 'Failed to login!' }
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials): Promise<any> {
        try {
          const user = await login(credentials)
          return user
        } catch (error) {
          return null
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === 'github') {
        connectToMongo()
        try {
          const existingUser = await User.findOne({ email: user.email })

          if (!existingUser) {
            const newUser = new User({
              username: user.name,
              email: user.email,
              img: user.image,
            })

            await newUser.save()
          } else {
            throw new Error('User already exists!')
          }
        } catch (error) {
          console.log(error)
          return false
        }
      }
      return true
    },
  },
})
