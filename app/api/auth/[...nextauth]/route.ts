import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';

import { addDancer, getDancerByEmail } from '@/app/lib/db';

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!;

const authOptions: NextAuthOptions = {

  session: {
    strategy: "jwt"
  },
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    })
  ],
  callbacks: {
    async signIn({ profile }) {
      if (!profile?.email) {
        throw new Error("No profile")
      }

      console.log("profile:", profile);
      
      // store user data to database
      /**
       * profile: {
          email: 'martinsda@gmail.com',
          name: 'Daniel Martins',
          picture: 'https://lh3.googleusercontent.com/a/ACg8ocJ-60qKKFgoJXfQyTtR9XV0tWM0Zt8_57_tyOqgAJ_92VDV4ECS=s96-c',
        }
       */
      
      // fetch user by email
      const userEmail = profile.email;
      const dancer = await getDancerByEmail(userEmail);
      if (dancer) {
        // se usuario existe no banco, faz nada
        console.log('dancer found:', dancer)
      } else {
        // se usuario nao existe no banco, registra no banco
        console.log('dancer not found:', dancer)
        await addDancer(
          profile.name!,
          profile.email,
        );
      }

      return true;
    }
  }
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
