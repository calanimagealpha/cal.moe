<script lang="ts">
    import Navbar from '$lib/navbar.svelte'
    import Footer from '$lib/footer.svelte'
    import { onMount } from 'svelte'
    import { fade } from 'svelte/transition'

    let scrollY = 1
    let innerHeight = 1

    let loaded = false

    onMount(() => {
        const loadCheck = setInterval(() => {
            if (document.readyState === 'loading') return
            loaded = true
            clearInterval(loadCheck)
        }, 100)
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
        <section class="pl-8 text-3xl font-bold md:w-3/5 md:pl-16 md:text-6xl/tight lg:mx-auto lg:w-full lg:max-w-7xl lg:text-7xl/tight">
            <p class="pb-4">
                Events Page
                Work in Progress
            </p>

        </section>
    </header>
</div>
