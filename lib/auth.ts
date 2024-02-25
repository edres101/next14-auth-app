import { auth } from '@/auth';
import React from 'react';

export async function currentUser() {
  const session = await auth();
  return session?.user;
}

export async function currentRole() {
  const session = await auth();
  return session?.user.role;
}
