'use server';

import { signOut } from '@/auth';

export const logout = async () => {
  // If your want to add some server sutff befor signing out
  await signOut();
};
