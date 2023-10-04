<script lang="ts">
    import Navbar from '$lib/navbar.svelte'
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
        class="x-0 y-0 fixed z-50 flex h-full w-full items-center justify-center bg-neutral-800 text-6xl text-white"
    />
{/if}
<div
    class="heroAD flex flex-col text-white"
    bind:clientWidth={divWidth}
    bind:clientHeight={divHeight}
    on:pointermove={(e) => onPointermove(e, divWidth, divHeight)}
>
    <Navbar />
    <header class=" ">
        <div class="my-[20vh] flex w-full flex-col items-center md:my-[20vh] lg:my-[25vh]">
            <div class="relative">
                <p class="absolute -top-12 text-sm font-bold md:-top-8 md:text-lg">Cal Animage Alpha presents...</p>
                {#if !loaded}
                    <p
                        transition:fade
                        class="absolute z-[55] mx-auto text-5xl font-black leading-none md:text-7xl lg:text-8xl"
                    >
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
                <p class="pt-8 text-xl font-black leading-none md:text-3xl lg:text-5xl">
                    <span class="hidden lg:inline">Saturday, </span>November 5th
                </p>
                <p class="text-sm font-black leading-tight md:text-xl lg:text-2xl">
                    at MLK Jr. Building, <br class="md:hidden" />UC Berkeley
                </p>
            </div>
        </div>
    </header>
    <main class="mx-auto xl:w-[80rem]">
        <!-- Saturday, November 12th! We'll be holding our convention in-person this year, at the MLK Jr. Building on UC
        Berkeley campus! There'll be performances, panels, games, activities, and more! If you'd like a table in our
        Artist Alley / Dealer's Hall, please fill out this form. More details on the event TBA! Join our Discord for
        more. Pre-sale tickets to the convention are available now, at a price of $15. Tickets will also be sold at the
        con for $18 each. To purchase your ticket(s), simply fill out this form. Browse our Artist Alley for quality
        fanmade products from our local artists! Come for keychains and prints of your favorite characters! Showcase
        your awesome costumes at our cosplay gathering at the convention! Enjoy fun and informative panels about various
        anime-related topics along with other exciting events! Anime Destiny is UC Berkeley's own annual anime
        convention, hosted by Cal Animage Alpha. It will be held on at the Martin Luther King Jr. Student Union on the
        south side of campus. We hope to bring together local fans and to provide an enjoyable, cozy experience for our
        attendees through fun events, interesting panels, and awesome merchandise! © 2014-2022 Anime Destiny and Cal
        Animage Alpha. All rights reserved. -->
    </main>
</div>

<style>
</style>
