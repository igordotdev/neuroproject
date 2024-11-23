
import { writable } from 'svelte/store';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '$lib/firebase';

export const user = writable(null);

onAuthStateChanged(auth, (currentUser) => {
  user.set(currentUser);
});