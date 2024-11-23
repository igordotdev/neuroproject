<!-- src/routes/(protected)/+layout.svelte -->
<script>
  import { user } from '$lib/stores/auth';
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
	import Navbar from '$lib/components/Navbar.svelte';
	import { onDestroy } from 'svelte';

  let unsubscribe;

  onMount(() => {
    unsubscribe = user.subscribe((currentUser) => {
      if (!currentUser) {
        goto('/login');
      }
    });
  });

  // Clean up the subscription when the component is destroyed
  onDestroy(() => {
    if (unsubscribe) unsubscribe();
  });
</script>


{#if $user}
  <slot />
{/if}
