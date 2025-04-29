<script lang="ts">
    import Logo from '$lib/logo.svelte'
    import { fade } from 'svelte/transition'

    let scrollY: number = 0
    let menuOpened = false
</script>

<svelte:window bind:scrollY />

<nav class:bg-white={scrollY > 0} class="sticky top-0 z-10 h-24 w-full p-4 transition-all">
    <div
        class:text-black={scrollY > 0 || menuOpened}
        class="translation-all z-10 flex h-full items-center justify-between"
    >
        <a href="/"><Logo /></a>
        <ul class="mr-8 hidden h-full items-center space-x-4 text-sm font-semibold tracking-wider lg:flex">
            <li><a href="/about" class="transition-colors hover:text-yellow-400">About</a></li>
            <li><a href="/events" class="transition-colors hover:text-yellow-400">Events</a></li>
            <li><a href="/officers" class="transition-colors hover:text-yellow-400">Officers</a></li>
            <li><a href="https://issuu.com/konshuu-caa" class="transition-colors hover:text-yellow-400">Konshuu</a></li>
            <li><a href="https://animedestiny.cal.moe/" class="transition-colors hover:text-yellow-400">Anime Destiny 2024</a></li>
            <li><a href="https://discord.com/invite/Xp4MUjG" class="transition-colors hover:text-yellow-400">Discord</a></li>
        </ul>
    </div>
</nav>
{#if menuOpened}
    <div
        transition:fade={{ duration: 150 }}
        class="fixed top-0 z-0 h-full w-full bg-white pt-24 text-black transition-opacity"
    >
        <ul class="border-t text-2xl font-medium">
            <li>
                <a href="/about" class="flex items-center p-8"> About </a>
            </li>
            <li>
                <a href="/events" class="flex items-center p-8"> Events </a>
            </li>
            <li>
                <a href="/officers" class="flex items-center p-8"> Officers </a>
            </li>
            <li>
                <a href="https://issuu.com/konshuu-caa" class="flex items-center p-8"> Konshuu </a>
            </li>
            <li>
                <a href="https://animedestiny.cal.moe/" class="flex items-center p-8"> Anime Destiny 2024 </a>
            </li>
            <li>
                <a href="https://discord.com/invite/Xp4MUjG" class="flex items-center p-8"> Discord </a>
            </li>
        </ul>
    </div>
{/if}
