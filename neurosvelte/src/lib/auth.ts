// src/lib/stores/auth.ts
import { writable } from 'svelte/store';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '$lib/firebase';

export const user = writable<User | null>(null);

onAuthStateChanged(auth, (currentUser) => {
  user.set(currentUser);
});
