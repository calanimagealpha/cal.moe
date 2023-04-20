<script lang="ts">
    import Navbar from '$lib/navbar.svelte'
    import Footer from '$lib/footer.svelte'
    import { onMount } from 'svelte'

    let scrollY = 1
    let innerHeight = 1

    onMount(() => {
        document.documentElement.style.setProperty('--bg-opacity', '0.75')
    })
</script>

<svelte:window bind:scrollY bind:innerHeight />

<div class="hero text-white">
    <Navbar />
    <header class="max-w-7xl px-8 md:px-16 lg:mx-auto my-8">
        <section class="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider leading-tight md:w-3/5">
            <p class="pb-4 text-transparent bg-clip-text bg-gradient-to-br from-pink-400 via-purple-400 to-cyan-400">
                A place for anime, manga, game lovers at UC Berkeley.
            </p>
        </section>
    </header>
    <main class="p-8" />
    <Footer />
</div>
