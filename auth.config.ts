import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

import { LoginSchema } from './schemas';
import { getUserByEmail } from './data/user';
import bycrpt from 'bcryptjs';
import Google from 'next-auth/providers/google';
import Github from 'next-auth/providers/github';

export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Credentials({
      async authorize(credentials) {
        const validateFields = LoginSchema.safeParse(credentials);

        if (validateFields.success) {
          const { email, password } = validateFields.data;

          const user = await getUserByEmail(email);
          if (!user || !user.password) return null;

          const passwordsMuch = await bycrpt.compare(password, user.password);
          if (passwordsMuch) return user;
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
