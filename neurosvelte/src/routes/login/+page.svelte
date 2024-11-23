<script lang="ts">
    import type { PageData } from './$types';
    import { Button } from '$lib/components/ui/button';
    let { data }: { data: PageData } = $props();
</script>

<main>
    <section id="login" class="min-h-screen flex items-center justify-center">
        <div class="text-center">
            <h1 class="text-5xl font-bold text-white">Welcome!</h1>
            <p class="mt-4 text-xl text-white">
                Log in to your account to access NeuroCo.
            </p>
            <form class="">
                <div class="flex flex-col space-y-6 py-10">
                    <input type="email" id="email" name="login" class="h-8 bg-white rounded-xl border-white text-white focus:outline-none focus:border-orange-700" placeholder="Login" required>
                    <input type="password" id="password" name="password" class="h-8 bg-white rounded-xl border-b-2 border-white text-white focus:outline-none focus:border-orange-700" placeholder="Password" required>
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