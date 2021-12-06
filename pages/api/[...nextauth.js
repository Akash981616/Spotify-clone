import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify"
import { LOGIN_URL } from "../../lib/spotify"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.NEXTAUTH_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXTAUTH_PUBLIC_CLIENT_SECRET,
      authorization:process.env.LOGIN_URL,

    }),
    // ...add more providers here
  ],
})