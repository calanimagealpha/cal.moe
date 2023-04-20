<script lang="ts">
    import Logo from '$lib/logo.svelte'
    import { fade } from 'svelte/transition'

    let scrollY: number = 0
    let menuOpened = false
</script>

<svelte:window bind:scrollY />

<nav class:bg-white={scrollY > 0} class="sticky top-0 z-10 w-full h-24 p-4 transition-all">
    <div
        class:text-black={scrollY > 0 || menuOpened}
        class="translation-all h-full flex justify-between items-center z-10"
    >
        <a href="/"><Logo /></a>
        <ul class="hidden lg:flex space-x-4 font-semibold tracking-wider text-sm mr-8">
            <li><a href="/about" class="transition-colors hover:text-yellow-400">About</a></li>
            <li><a href="/events" class="transition-colors hover:text-yellow-400">Events</a></li>
            <li><a href="/konshuu" class="transition-colors hover:text-yellow-400">Konshuu</a></li>
        </ul>
        <button class="lg:hidden p-4 flex items-center justify-center" on:click={() => (menuOpened = !menuOpened)}>
            <span class="material-icons-round">menu</span>
        </button>
    </div>
</nav>
{#if menuOpened}
    <div
        transition:fade={{ duration: 150 }}
        class="fixed top-0 z-0 w-full h-full pt-24 bg-white text-black transition-opacity"
    >
        <ul class="text-2xl font-medium border-t">
            <li>
                <a href="/about" class="flex items-center p-8"> About </a>
            </li>
            <li>
                <a href="/events" class="flex items-center p-8"> Events </a>
            </li>
            <li>
                <a href="/konshuu" class="flex items-center p-8"> Konshuu </a>
            </li>
        </ul>
    </div>
{/if}
