
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '../../../prisma/client'; 
import bcrypt from 'bcryptjs';

import NextAuth from 'next-auth';


interface CustomToken {
  id: number;
  email: string;
  role: string;
}

interface CustomSession {
  user: {
    id: number;
    email: string;
    role: string;
  };
}

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (user && await bcrypt.compare(credentials.password, user.password)) {
          
          return {
            id: user.id, 
            email: user.email,
            role: user.role 
          };
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async session({ session, token }:{session:any,token:any}) {
      
      console.log('Session callback:', { session, token });
      if (token) {
        session.user = {
          id: token.id as number, 
          email: token.email as string,
          role: token.role as string 
        };
      }
      return session;
    },
    async jwt({ token, user }:{token:any,user:any}) {
  
      console.log('JWT callback:', { token, user });
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.role = user.role;
      }
      return token;
    }
  },
  session: {
    strategy: "jwt", 
  },
});

