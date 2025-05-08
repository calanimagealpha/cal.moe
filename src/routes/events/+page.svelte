<script lang="ts">
    import Navbar from '$lib/navbar.svelte'
    import Footer from '$lib/footer.svelte'
    import { onMount } from 'svelte'
    import { fade } from 'svelte/transition'

    let scrollY = 1;
    let innerHeight = 1;
    let loaded = false;
    let nextEvent: { name: string; date: string; room: string; description: string } | null = null;

    onMount(async () => {
        const loadCheck = setInterval(() => {
            if (document.readyState === 'loading') return
            loaded = true
            clearInterval(loadCheck)
        }, 100);

        try {
            const response = await fetch('/api/events.json');
            const events = await response.json();
            if (events.length > 0) {
                nextEvent = events[0]; // Assume first event is the next upcoming
            }
        } catch (error) {
            console.error('Failed to load events:', error);
        }
    })
</script>


{#if !loaded}
    <div
        transition:fade
        class="x-0 y-0 fixed z-50 flex h-full w-full items-center justify-center bg-neutral-800 text-6xl text-white"
    />
{/if}

<svelte:window bind:scrollY bind:innerHeight />

<div class="hero overflow-clip text-white">
    <Navbar />
    <header class="my-8">
        <section class="pl-8 text-3xl font-bold md:w-3/5 md:pl-16 md:text-6xl lg:mx-auto lg:w-full lg:max-w-7xl lg:text-7xl">
            <p class="pb-4">Events</p>
        </section>
    </header>
    
    <main class="mx-auto max-w-7xl p-8 text-white">
        <!-- Event Description Section -->
        <section class="mb-12">
            <h2 class="text-4xl font-bold">About</h2>
            <p class="mt-4 text-lg">We generally hold weekly anime showings on Tuesdays and social activities on Thursdays. Occasionally we also host larger events, like Anime Destiny and the the CAA Art Mart, or go on club outings. Join us for fun discussions, games, and community bonding!</p>
        </section>
        
        <!-- Upcoming Event Section -->
        <section class="mb-12 p-6 bg-zinc-200 rounded-lg shadow-md text-black">
            <h2 class="text-3xl font-bold pb-2">Next Upcoming Event:</h2>
            {#if nextEvent}
                <div class="mt-4 text-lg">
                    <p class="text-2xl font-bold pb-2">{nextEvent.name}</p>
                    <p><strong>Date:</strong> {nextEvent.date}</p>
                    <p><strong>Time:</strong> {nextEvent.time}</p>
                    <p><strong>Location:</strong> {nextEvent.location}</p>
                    <p class="mt-2">{nextEvent.description}</p>
                </div>
            {:else}
                <p class="mt-4 text-lg">No upcoming events found.</p>
            {/if}
        </section>
        
        <!-- Google Calendar Embed -->
        <section class="mb-12">
            <h2 class="text-3xl font-bold">Event Calendar</h2>
            <iframe
                class="mt-4 w-full h-[600px] border-0"
                src="https://calendar.google.com/calendar/embed?src=c_9c8420f291a30bc204033d90832c4e054144f53f37a70966e76f36d3f6058388%40group.calendar.google.com&ctz=America%2FLos_Angeles"
                title="embed caa calendar"
                allowfullscreen>
            </iframe>
        </section>

        <!-- Horizontal Line -->
        <hr class="my-12 border-t-2 border-gray-400">

        <!-- Major Events Section -->
        <section class="mb-12">
            <h2 class="text-4xl font-bold mb-6">Major Events</h2>

            <!-- Anime Destiny -->
            <div class="mb-6 p-6 bg-zinc-200 rounded-lg shadow-md text-black">
                <h3 class="text-2xl font-bold">Anime Destiny</h3>
                <p class="mt-2">
                    Anime Destiny is our annual anime convention held at UC Berkeley, featuring panels, artists, vendors, and performances.
                    Join us for an exciting day celebrating anime culture! You can learn more by visiting our <a href="https://animedestiny.cal.moe" class="text-blue-400 font-semibold underline transition-colors duration-300 ease-in-out hover:text-blue-300">main AD site.</a>
                </p>
            </div>

            <!-- Art Mart -->
            <div class="mb-6 p-6 bg-zinc-200 rounded-lg shadow-md text-black">
                <h3 class="text-2xl font-bold">CAA Art Mart</h3>
                <p class="mt-2">
                    The CAA Art Mart is an artist alley-style event held on Upper Sproul where student and local artists sell their artwork and merchandise.
                    It's a great opportunity to support small creators and find unique anime-themed goods! Admission is free for this event!
                </p>
            </div>

            <!-- Maid Cafe -->
            <div class="mb-6 p-6 bg-zinc-200 rounded-lg shadow-md text-black">
                <h3 class="text-2xl font-bold">Maid Cafe</h3>
                <p class="mt-2">
                    Each year we host a maid cafe experience in collaboration with a local shop. Experience a charming and fun maid cafe event run by our club members! 
                    Enjoy themed performances, delicious treats, and a welcoming atmosphere.
                </p>
            </div>
        </section>
    </main>
</div>