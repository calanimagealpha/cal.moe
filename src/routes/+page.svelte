<script lang="ts">
    import Navbar from '$lib/navbar.svelte'
    import Footer from '$lib/footer.svelte'
    import 'material-icons/iconfont/material-icons.css'
    import { beforeUpdate, onMount } from 'svelte'
    import { onDeviceOrientation, onPointermove } from '$lib/background'
    import { fade } from 'svelte/transition'

    let scrollY: number = 0
    let innerHeight: number = 1

    let loaded = false

    let divWidth = 1
    let divHeight = 1

    beforeUpdate(() => {
        document.documentElement.style.setProperty('--bg-opacity', `${0.25 + 0.5 * Math.min(scrollY / innerHeight, 1)}`)
    })

    onMount(() => {
        const loadCheck = setInterval(() => {
            if (document.readyState === 'loading') return
            loaded = true
            clearInterval(loadCheck)
        }, 100)
    })
</script>

<svelte:head>
    <title>Cal Animage Alpha</title>
    <link rel="preload" as="image" href="/assets/image/events.webp" />
    <link rel="preload" as="image" href="/assets/image/konshuu.webp" />
</svelte:head>

<svelte:window bind:scrollY bind:innerHeight on:deviceorientation={onDeviceOrientation} />

{#if !loaded}
    <div
        transition:fade
        class="flex items-center justify-center fixed x-0 y-0 z-50 text-6xl text-white w-full h-full bg-neutral-800"
    />
{/if}
<div
    class="flex flex-col text-white hero"
    bind:clientWidth={divWidth}
    bind:clientHeight={divHeight}
    on:pointermove={(e) => onPointermove(e, divWidth, divHeight)}
>
    <Navbar />
    <header class="min-h-screen">
        <div class="flex flex-col w-full items-center my-[20vh] md:my-[20vh] lg:my-[25vh]">
            <div>
                {#if !loaded}
                    <p transition:fade class="absolute z-[55] text-5xl leading-none md:text-7xl lg:text-8xl font-black">
                        Cal <br class="lg:hidden" /><span>Ani</span><span>ma</span><span>ge</span>
                        <br class="lg:hidden" />Alpha
                    </p>
                {/if}
                <p class="text-5xl leading-none md:text-7xl lg:text-8xl font-black">
                    Cal <br class="lg:hidden" /><span class="text-pink-400">Ani</span><span class="text-emerald-400"
                        >ma</span
                    ><span class="text-cyan-400">ge</span>
                    <br class="lg:hidden" />Alpha
                </p>
                <div class="flex justify-between">
                    <div class="text-xl leading-none md:text-4xl font-light text-gray-400">
                        <p><span class="text-white">Ani</span>me</p>
                        <p><span class="text-white">Ma</span>nga</p>
                        <p><span class="text-white">Ga</span>me</p>
                    </div>
                    <p class="text-xs md:text-base">...since 1989!</p>
                </div>
            </div>
        </div>
        <div class="flex flex-col items-center">
            <p class="text-xs md:text-md font-bold mb-2">EXPLORE CAA</p>
            <span class="material-icons-round -m-2 origin-center animate-pulse">keyboard_arrow_down</span>
            <span class="material-icons-round -m-2 origin-center animate-pulse [animation-delay:250ms]"
                >keyboard_arrow_down</span
            >
            <span class="material-icons-round -m-2 origin-center animate-pulse [animation-delay:500ms]"
                >keyboard_arrow_down</span
            >
        </div>
    </header>
    <main class="mx-auto xl:w-[80rem]">
        <section>
            <p class="text-2xl lg:text-4xl tracking-tight leading-tight my-16 px-8 md:px-[33%]">
                Cal Animage Alpha is UC Berkeley's anime club since <span
                    class="text-transparent bg-clip-text bg-gradient-to-br from-pink-400 via-purple-400 to-cyan-400"
                    >1989</span
                >.
            </p>
        </section>
        <section class="flex justify-end ml-8 md:ml-0 my-16 md:pr-8">
            <div class="max-w-md p-8 lg:p-16 bg-white text-black rounded-tl-lg rounded-bl-lg md:rounded-lg">
                <h1 class="mb-4 text-sm font-semibold tracking-wider text-yellow-400">SAY HELLO!</h1>
                <p>
                    We hold a game night and a social event every <span
                        class="font-bold underline decoration-2 decoration-yellow-400">Tuesday</span
                    >
                    and <span class="font-bold underline decoration-2 decoration-yellow-400">Thursday</span>. We also
                    have other events. All of these events are open to the general public for free!
                </p>
            </div>
        </section>
        <section class="grid grid-cols-1 md:grid-cols-2 px-8 md:px-16 gap-x-8 mt-64 mb-32">
            <div class="basis-1/2 order-last md:order-first pr-0 md:pr-[33%]">
                <caption class="mb-1 font-bold tracking-wider text-caption whitespace-nowrap">01 Events</caption>
                <div class="border-t border-t-pink-400">
                    <h1 class="my-8 text-6xl lg:text-8xl font-bold text-pink-400">Events&nbsp;for Everyone</h1>
                    <p class="lg:text-lg tracking-tight leading-relaxed my-8">
                        Trivia Nights, Jeopardy, Drawing Workshops, Karaoke and more! Come join us, they are open to
                        everyone.
                    </p>
                    <button
                        class="flex items-center px-3 lg:px-6 py-2 lg:py-4 my-16 border-2 border-pink-400 text-pink-400 transition-all duration-500 delay-100 hover:bg-pink-400 hover:text-white text-sm rounded-full font-bold"
                        >Upcoming Events<span class="material-icons-round pl-2">arrow_right_alt</span></button
                    >
                </div>
            </div>
            <div class="basis-1/2 pr-0 md:pr-[10%] order-first md:order-last mb-8 md:mb-0">
                <img
                    class="aspect-square md:aspect-auto w-full h-full object-cover overflow-hidden rounded-xl"
                    src="/assets/image/events.webp"
                    alt="Events"
                />
            </div>
        </section>
        <section class="grid grid-cols-1 md:grid-cols-2 px-8 md:px-16 gap-x-8 mt-32 mb-32">
            <div class="basis-1/2 pr-0 md:pr-[33%] mb-8 md:mb-0">
                <img
                    class="aspect-square md:aspect-auto w-full h-full object-cover overflow-hidden rounded-xl"
                    src="/assets/image/konshuu.webp"
                    alt="Konshuu"
                />
            </div>
            <div class="basis-1/2 pr-0 md:pr-[33%]">
                <caption class="mb-1 font-bold tracking-wider text-caption whitespace-nowrap">02 Konshuu</caption>
                <div class="border-t border-t-emerald-400">
                    <h1 class="my-8 text-6xl lg:text-8xl font-bold text-emerald-400">Anime Magazine</h1>
                    <p class="lg:text-lg tracking-tight leading-relaxed my-8">
                        Konshuu, Cal Animage Alpha's magazine featuring articles and illustrations on anime culture,
                        from both guests and current officers.
                    </p>
                    <button
                        class="flex items-center px-3 lg:px-6 py-2 lg:py-4 my-16 border-2 border-emerald-400 text-emerald-400 transition-all duration-500 delay-100 hover:bg-emerald-400 hover:text-white text-sm rounded-full font-bold"
                        >Read Konshuu<span class="material-icons-round pl-2">arrow_right_alt</span></button
                    >
                </div>
            </div>
        </section>
        <section class="grid grid-cols-1 md:grid-cols-2 px-8 md:px-16 gap-x-8 mt-32 mb-32">
            <div class="basis-1/2">
                <caption class="mb-1 font-bold tracking-wider text-caption whitespace-nowrap">03 Join Us</caption>
                <div class="border-t border-t-cyan-400">
                    <h1 class="my-8 text-6xl lg:text-8xl font-bold text-cyan-400">Get Involved</h1>
                    <p class="pr-[40%] lg:text-lg tracking-tight leading-relaxed my-8">
                        New Cal student? Interested in joining Cal Animage Alpha? Join our Discord server and introduce
                        yourself!
                    </p>
                    <a
                        href="/discord"
                        class="w-fit flex items-center px-3 lg:px-6 py-2 lg:py-4 my-16 border-2 border-cyan-400 text-cyan-400 transition-all duration-500 delay-100 hover:bg-cyan-400 hover:text-white text-sm rounded-full font-bold"
                        >Join Discord<span class="material-icons-round pl-2">arrow_right_alt</span></a
                    >
                </div>
            </div>
        </section>
    </main>
    <Footer />
</div>

<style>
</style>
