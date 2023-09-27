
<script lang="ts">
    import Navbar from '$lib/navbar.svelte'
    import Footer from '$lib/footer.svelte'
    import 'material-icons/iconfont/material-icons.css'
    import { beforeUpdate, onMount } from 'svelte'
    import { onDeviceOrientation, onPointermove } from '$lib/background'
    import { fade } from 'svelte/transition'
    import type { PageData } from './$types'

    let scrollY: number = 0
    let innerHeight: number = 1

    let loaded = false

    let divWidth = 1
    let divHeight = 1

    export let data: PageData

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
        class="x-0 y-0 fixed z-50 flex h-full w-full items-center justify-center bg-neutral-800 text-6xl text-white"
    />
{/if}
<div
    class="heroAD flex flex-col text-white"
    bind:clientWidth={divWidth}
    bind:clientHeight={divHeight}
    on:pointermove={(e) => onPointermove(e, divWidth, divHeight)}
>
    <Navbar user={data.user} />
    <header class=" ">
        <div class="my-[10vh] flex w-full flex-col items-center md:my-[10vh] lg:my-[12vh]">
            <div>
                {#if !loaded}
                    <p transition:fade class="absolute z-[55] text-5xl font-black leading-none md:text-7xl lg:text-8xl">
                        Anime <br class="lg:hidden" /><span>Des</span><span>ti</span><span>ny</span>
                        <br class="lg:hidden" />2023
                    </p>
                {/if}
                <p class="text-5xl font-black leading-none md:text-7xl lg:text-8xl">
                    Anime <br class="lg:hidden" /><span class="text-violet-600">Des</span><span class="text-indigo-400"
                        >ti</span
                    ><span class="text-blue-400">ny</span>
                    <br class="lg:hidden" />2023
                </p>
                <div class="flex justify-between">
                    <div class="text-xl font-light leading-none text-gray-400 md:text-4xl">
                        <p><span class="text-white">Des</span>me</p>
                        <p><span class="text-white">ti</span>nga</p>
                        <p><span class="text-white">ny</span>me</p>
                    </div>
                    <p class="text-xs md:text-base">...since 1989!</p>
                </div>
            </div>
        </div>
    </header>
    <main class="mx-auto xl:w-[80rem]">
        <section>
            <p class="my-16 px-8 text-2xl leading-tight tracking-tight md:px-[10%] lg:text-4xl">
                We'll be holding our convention in-person this year, at the MLK Jr. Building on UC Berkeley campus! There'll be performances, panels, games, activities, and more! If you'd like a table in our Artist Alley / Dealer's Hall, please fill out this form. <span
                    class="bg-gradient-to-br from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                    >1989</span
                >.
            </p>
        </section>
        <section class="my-16 ml-8 flex justify-end md:ml-0 md:pr-8">
            <div class="max-w-md rounded-bl-lg rounded-tl-lg bg-white p-8 text-black md:rounded-lg lg:p-16">
                <h1 class="mb-4 text-sm font-semibold tracking-wider text-yellow-400">SAY HELLO!</h1>
                <p>
                    We hold a game night and a social event every <span
                        class="font-bold underline decoration-yellow-400 decoration-2">Tuesday</span
                    >
                    and <span class="font-bold underline decoration-yellow-400 decoration-2">Thursday</span>. We also
                    have other events. All of these events are open to the general public for free!
                </p>
            </div>
        </section>
        <section class="mb-32 mt-64 grid grid-cols-1 gap-x-8 px-8 md:grid-cols-2 md:px-16">
            <div class="order-last basis-1/2 pr-0 md:order-first md:pr-[33%]">
                <caption class="mb-1 whitespace-nowrap text-caption font-bold tracking-wider">01 Events</caption>
                <div class="border-t border-t-pink-400">
                    <h1 class="my-8 text-6xl font-bold text-pink-400 lg:text-8xl">Events&nbsp;for Everyone</h1>
                    <p class="my-8 leading-relaxed tracking-tight lg:text-lg">
                        Trivia Nights, Jeopardy, Drawing Workshops, Karaoke and more! Come join us, they are open to
                        everyone.
                    </p>
                    <button
                        class="my-16 flex items-center rounded-full border-2 border-pink-400 px-3 py-2 text-sm font-bold text-pink-400 transition-all delay-100 duration-500 hover:bg-pink-400 hover:text-white lg:px-6 lg:py-4"
                        >Upcoming Events<span class="material-icons-round pl-2">arrow_right_alt</span></button
                    >
                </div>
            </div>
            <div class="order-first mb-8 basis-1/2 pr-0 md:order-last md:mb-0 md:pr-[10%]">
                <img
                    class="aspect-square h-full w-full overflow-hidden rounded-xl object-cover md:aspect-auto"
                    src="/assets/image/events.webp"
                    alt="Events"
                />
            </div>
        </section>
        <section class="mb-32 mt-32 grid grid-cols-1 gap-x-8 px-8 md:grid-cols-2 md:px-16">
            <div class="mb-8 basis-1/2 pr-0 md:mb-0 md:pr-[33%]">
                <img
                    class="aspect-square h-full w-full overflow-hidden rounded-xl object-cover md:aspect-auto"
                    src="/assets/image/konshuu.webp"
                    alt="Konshuu"
                />
            </div>
            <div class="basis-1/2 pr-0 md:pr-[33%]">
                <caption class="mb-1 whitespace-nowrap text-caption font-bold tracking-wider">02 Konshuu</caption>
                <div class="border-t border-t-emerald-400">
                    <h1 class="my-8 text-6xl font-bold text-emerald-400 lg:text-8xl">Anime Magazine</h1>
                    <p class="my-8 leading-relaxed tracking-tight lg:text-lg">
                        Konshuu, Cal Animage Alpha's magazine featuring articles and illustrations on anime culture,
                        from both guests and current officers.
                    </p>
                    <button
                        class="my-16 flex items-center rounded-full border-2 border-emerald-400 px-3 py-2 text-sm font-bold text-emerald-400 transition-all delay-100 duration-500 hover:bg-emerald-400 hover:text-white lg:px-6 lg:py-4"
                        >Read Konshuu<span class="material-icons-round pl-2">arrow_right_alt</span></button
                    >
                </div>
            </div>
        </section>
        <section class="mb-32 mt-32 grid grid-cols-1 gap-x-8 px-8 md:grid-cols-2 md:px-16">
            <div class="basis-1/2">
                <caption class="mb-1 whitespace-nowrap text-caption font-bold tracking-wider">03 Join Us</caption>
                <div class="border-t border-t-cyan-400">
                    <h1 class="my-8 text-6xl font-bold text-cyan-400 lg:text-8xl">Get Involved</h1>
                    <p class="my-8 pr-[40%] leading-relaxed tracking-tight lg:text-lg">
                        New Cal student? Interested in joining Cal Animage Alpha? Join our Discord server and introduce
                        yourself!
                    </p>
                    <a
                        href="/discord"
                        class="my-16 flex w-fit items-center rounded-full border-2 border-cyan-400 px-3 py-2 text-sm font-bold text-cyan-400 transition-all delay-100 duration-500 hover:bg-cyan-400 hover:text-white lg:px-6 lg:py-4"
                        >Join Discord<span class="material-icons-round pl-2">arrow_right_alt</span></a
                    >
                </div>
            </div>
        </section>
    </main>
</div>

<style>
</style>

Saturday, November 12th!
We'll be holding our convention in-person this year, at the MLK Jr. Building on UC Berkeley campus! There'll be performances, panels, games, activities, and more! If you'd like a table in our Artist Alley / Dealer's Hall, please fill out this form.

More details on the event TBA!
Join our Discord for more.
Pre-sale tickets to the convention are available now, at a price of $15. Tickets will also be sold at the con for $18 each. To purchase your ticket(s), simply fill out this form.
Browse our Artist Alley for quality fanmade products from our local artists! Come for keychains and prints of your favorite characters!
Showcase your awesome costumes at our cosplay gathering at the convention!
Enjoy fun and informative panels about various anime-related topics along with other exciting events!
Anime Destiny is UC Berkeley's own annual anime convention, hosted by Cal Animage Alpha. It will be held on at the Martin Luther King Jr. Student Union on the south side of campus. We hope to bring together local fans and to provide an enjoyable, cozy experience for our attendees through fun events, interesting panels, and awesome merchandise!
© 2014-2022 Anime Destiny and Cal Animage Alpha. All rights reserved.
