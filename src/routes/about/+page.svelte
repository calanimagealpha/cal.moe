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

<div class="hero overflow-clip text-white">
    <Navbar />
    <div class="max-w-7xl lg:mx-auto">
        <header class="my-8 px-8 md:px-16">
            <section class="text-3xl font-bold md:w-3/5 md:text-6xl/tight lg:text-7xl/tight">
                <p class="pb-4">
                    A place for <br />
                    <span class="text-pink-400">anime,</span>
                    <span class="text-emerald-400">manga,</span>
                    <br />
                    <span class="text-cyan-400">game</span> lovers
                    <br />
                    at <span class="text-yellow-400">UC&nbsp;Berkeley&nbsp;🐻</span>
                </p>
            </section>
        </header>
        <main>
            <section class="flex flex-row">
                <nav class="lg:px-auto pl-8 text-lg font-bold leading-[2.5] underline md:pl-16">
                    <ul><a href="#who">Who&nbsp;Are&nbsp;We</a></ul>
                    <ul><a href="#what">What&nbsp;We&nbsp;Do</a></ul>
                    <ul><a href="#join">How&nbsp;to&nbsp;get&nbsp;involved</a></ul>
                </nav>
                <img
                    class="crisp-edges max-h-48 w-[75%] object-cover md:aspect-[16/9] md:max-h-none md:w-auto lg:translate-x-60"
                    src="/assets/image/about/anime_destiny.webp"
                    alt="banner"
                />
            </section>
        </main>
    </div>
    <main class="p-8" />
    <Footer />
</div>
