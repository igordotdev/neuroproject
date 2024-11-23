<!-- src/routes/(protected)/dashboard/+page.svelte -->
<script lang="ts">
import { user } from '$lib/stores/auth';
import type { User } from 'firebase/auth';

// Declare currentUser with the type User | null
let currentUser: User | null = null;

// Reactive assignment to update currentUser whenever $user changes
$: currentUser = $user;
</script>

{#if currentUser}
{#if currentUser.email === 'student@student.com'}
    <!-- Student-specific content -->
    <h1>Welcome Student!</h1>
    <p>This is the student dashboard.</p>
{:else if currentUser.email === 'teacher@teacher.com'}
    <!-- Teacher-specific content -->
    <h1>Welcome Teacher!</h1>
    <p>This is the teacher dashboard.</p>
{:else}
    <!-- Default or error content -->
    <p>Access denied.</p>
{/if}
{:else}
<!-- Loading or redirecting -->
<p>Loading...</p>
{/if}
  