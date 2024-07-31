import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '../../../prisma/client'; // Ścieżka do klienta Prisma
import bcrypt from 'bcryptjs';

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
          // Upewnij się, że zwracany obiekt jest zgodny z typem `User`
          return {
            id: user.id, // Użyj `number`, jak w modelu
            email: user.email,
            role: user.role // Dodaj rolę
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
    async session({ session, token }) {
      // `token` jest używany, aby wypełnić dane sesji
      console.log('Session callback:', { session, token });
      if (token) {
        session.user = {
          id: token.id as string, // Zamień `id` na string
          email: token.email as string,
          role: token.role as string // Dodaj rolę do sesji
        };
      }
      return session;
    },
    async jwt({ token, user }) {
      // Jeżeli użytkownik jest logowany, dodaj jego dane do tokenu
      console.log('JWT callback:', { token, user });
      if (user) {
        token.id = user.id.toString();
        token.email = user.email;
        token.role = user.role;
      }
      return token;
    }
  },
  session: {
    strategy: "jwt", // Używaj strategii JWT dla sesji
  },
});