<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import { Button } from '$lib/components/ui/button';
	import * as Card from "$lib/components/ui/card";
</script>


<main class="py-8 px-4">
  <!-- Hero Section -->
  <section id="hero" class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-5xl font-bold text-white">Neurodiversity made easy</h1>
      <p class="mt-4 text-xl text-white">
        Introducing NeuroCo - world’s first platform to help and manage neurodivergent students.
      </p>
      <Button href="#more" variant="default" class="mt-6 bg-orange-700 hover:bg-orange-900 duration-200">Learn More</Button>
    </div>
  </section>
  <section id="more" class="py-16">
		<div class="flex flex-col px-52">
			<h1 class="text-5xl font-bold text-white">Relationships that bloom</h1>
			<p class="mt-4 text-xl text-white">
				Discover how NeuroCo uses latest technology to ensure aligned goals and clear communication.
			</p>
		</div>
		<div class="w-1/3 mx-auto py-10">
			<Card.Root class="bg-zinc-900 border-transparent mb-4">
				<Card.Header class="text-white text-2xl text-center">
					<Card.Title> Data collection and case analysis </Card.Title>
				</Card.Header>
				<Card.Content>
						<p class="text-white text-center">
							NeuroCo gathers information about students and creates their digital profile. Data is safely stored using end-to-end encryption.
						</p>
				</Card.Content>
			</Card.Root>
			<Card.Root class="bg-zinc-900 border-transparent mb-4">
				<Card.Header class="text-white text-2xl text-center">
					<Card.Title> Personalized guidance and support </Card.Title>
				</Card.Header>
				<Card.Content>
						<p class="text-white text-center">
							Using Vertex AI, we created most innovative AI model that bases on extensive research to provide best practices and support.
						</p>
				</Card.Content>
			</Card.Root>
			<Card.Root class="bg-zinc-900 border-transparent">
				<Card.Header class="text-white text-2xl text-center">
					<Card.Title> Personalized guidance and support </Card.Title>
				</Card.Header>
				<Card.Content>
						<p class="text-white text-center">
							Using Vertex AI, we created most innovative AI model that bases on extensive research to provide best practices and support.
						</p>
				</Card.Content>
			</Card.Root>
			<div class="flex justify-center">
				<Button href="/contact" variant="default" class="mt-6 bg-orange-700 hover:bg-orange-900 duration-200 ">Contact Us</Button>
			</div>
		</div>
  </section>
</main>