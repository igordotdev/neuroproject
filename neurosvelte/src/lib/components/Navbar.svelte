<!-- src/components/Navbar.svelte -->
<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  const navigationLinks = [
    // Removed existing links
  ];

  let isMobileMenuOpen = false;

  // Close the mobile menu when the route changes (optional, if using a router)
  // onMount(() => {
  //   // Add your route change listener here
  // });
</script>

<nav class="bg-transparent h-6">
  <div class="max-w-screen-xl mx-auto px-4 py-2 flex items-center justify-between">
    <!-- Logo -->
    <a href="/" class="text-xl font-bold text-white">NeuroCo</a>
    <div class="hidden md:flex space-x-4">
      <Button href="/contact" variant="default" class="bg-transparent hover:underline hover:bg-transparent duration-200">Contact</Button>
      <Button href="/login" variant="secondary" class="hover:bg-gray-200 transition-colors duration-200">Login</Button>
    </div>
  </div>
</nav>
