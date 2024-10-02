<script lang="ts">
    import Logo from '$lib/logo.svelte'
    import { fade } from 'svelte/transition'
    import type { User } from './api/discord'

    let scrollY: number = 0
    let menuOpened = false
    export let user: User | undefined = undefined
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
            <li><a href="https://issuu.com/konshuu-caa" class="transition-colors hover:text-yellow-400">Konshuu</a></li>
            <li><a href="/animedestiny" class="transition-colors hover:text-yellow-400">Anime Destiny</a></li>
            <li><a href="https://discord.com/invite/Xp4MUjG" class="transition-colors hover:text-yellow-400">Discord</a></li>
            <li>
                {#if user}
                    <img
                        src="https://cdn.discordapp.com/avatars/{user.id}/{user.avatar}.webp"
                        alt="avatar of {user.username}"
                        class="h-12 w-12 rounded-full"
                    />
                {:else}
                    <a href="/login" class="transition-colors hover:text-yellow-400">Login</a>
                {/if}
            </li>
        </ul>
        <button class="flex items-center justify-center p-4 lg:hidden" on:click={() => (menuOpened = !menuOpened)}>
            {#if user}
                <img
                    src="https://cdn.discordapp.com/avatars/{user.id}/{user.avatar}.webp"
                    alt="avatar of {user.username}"
                    class="h-12 w-12 rounded-full"
                />
            {:else}
                <span class="material-icons-round">menu</span>
            {/if}
        </button>
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
                <a href="https://issuu.com/konshuu-caa" class="flex items-center p-8"> Konshuu </a>
            </li>
            <li>
                <a href="/animedestiny" class="flex items-center p-8"> Anime Destiny </a>
            </li>
            <li>
                <a href="https://discord.com/invite/Xp4MUjG" class="flex items-center p-8"> Discord </a>
            </li>
            <li>
                {#if user}
                    <a href="/logout" class="flex items-center p-8">Logout</a>
                {:else}
                    <a href="/login" class="flex items-center p-8">Login</a>
                {/if}
            </li>
        </ul>
    </div>
{/if}
