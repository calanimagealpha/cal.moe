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
    <header class="my-8">
        <section
            class="pl-8 text-3xl font-bold md:w-3/5 md:pl-16 md:text-6xl/tight lg:mx-auto lg:w-full lg:max-w-7xl lg:text-7xl/tight"
        >
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
        <div
            class="relative left-1/2 mb-[-16rem] h-60 w-[50%] bg-about-anime-destiny bg-cover bg-center md:left-[20rem] md:mb-[-24rem] md:h-96 md:w-[calc(100%-20rem)] lg:left-[calc((100vw-80rem)/2+20rem)] lg:w-[calc(100%-(100vw-80rem)/2-20rem)]"
        />
    </header>
    <main class="max-w-7xl lg:mx-auto">
        <section>
            <nav class="lg:px-auto relative pl-8 text-lg font-bold leading-[2.5] underline md:pl-16">
                <ul><a href="#who">Who&nbsp;Are&nbsp;We</a></ul>
                <ul><a href="#what">What&nbsp;We&nbsp;Do</a></ul>
                <ul><a href="#join">How&nbsp;to&nbsp;get&nbsp;involved</a></ul>
            </nav>
        </section>
    </main>
    <Footer />
</div>
