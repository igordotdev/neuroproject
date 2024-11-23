<script lang="ts">
    import type { PageData } from './$types';
    import { Button } from '$lib/components/ui/button';
    import { signInWithEmailAndPassword } from 'firebase/auth';
    import { auth } from '$lib/firebase';
    import { goto } from '$app/navigation';

    export let data: PageData;

    let email = '';
    let password = '';
    let errorMessage = '';

    async function login(event: Event) {
        event.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            goto('/dashboard');
        } catch (error) {
            console.error(error);
            errorMessage = 'Incorrect email or password';
        }
    }
</script>

<main>
    <section id="login" class="min-h-screen flex items-center justify-center">
        <div class="text-center">
            <h1 class="text-5xl font-bold text-white">Welcome!</h1>
            <p class="mt-4 text-xl text-white">
                Log in to your account to access NeuroCo.
            </p>
            <form on:submit={login} class="">
                <div class="flex flex-col space-y-6 py-10">
                    <input type="email" id="email" name="email" class="h-8 bg-white rounded-xl border-white text-black focus:outline-none focus:border-orange-700" placeholder="Login" bind:value={email} required>
                    <input type="password" id="password" name="password" class="h-8 bg-white rounded-xl border-b-2 border-white text-black focus:outline-none focus:border-orange-700" placeholder="Password" bind:value={password} required>
                    {#if errorMessage}
                        <p class="text-red-500">{errorMessage}</p> <!-- Display error message -->
                    {/if}
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-2">
                            <input type="checkbox" id="remember" name="remember" class="text-orange-700">
                            <label for="remember" class="text-white">Remember me</label>
                        </div>
                        <a href="/forgot-password" class="text-white hover:underline">Forgot password?</a>
                    </div>
                    <Button type="submit" variant="default" class="bg-orange-700 hover:bg-orange-900 duration-200">Log in</Button>
                </div>
            </form>
        </div>
    </section>
</main>