<script lang="ts">
    import Navbar from '$lib/navbar.svelte';
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';

    let scrollY = 1;
    let innerHeight = 1;
    let loaded = false;
    let officersData = null;
    let activeTab = 0;

    const placeholderImage = "/officer_imgs/placeholder.png"; // Update with actual placeholder path

    async function fetchOfficers() {
        const response = await fetch('/json/officers.json'); // Adjust path if needed
        officersData = await response.json();
    }

    function getImageSrc(pic: string) {
        return pic.startsWith("officer_imgs/") ? `/${pic}` : placeholderImage;
    }

    onMount(async () => {
        await fetchOfficers();
        loaded = true;
    });
</script>

{#if !loaded}
    <div transition:fade class="fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-neutral-800 text-6xl text-white">
        Loading...
    </div>
{/if}

<svelte:window bind:scrollY bind:innerHeight />

<div class="hero overflow-clip text-white">
    <Navbar />
    <header class="my-8">
        <section class="pl-8 text-3xl font-bold md:w-3/5 md:pl-16 md:text-6xl lg:mx-auto lg:w-full lg:max-w-7xl lg:text-7xl">
            <p class="pb-4">Current Officers</p>
        </section>
    </header>

    {#if officersData}
        <div class="max-w-6xl mx-auto p-4">
            <!-- Tabs -->
            <div class="flex overflow-x-auto border-b border-gray-500">
                {#each officersData.departments as department, index}
                    <button
                        class="px-4 py-2 text-lg font-semibold border-b-2 transition-colors duration-200"
                        class:border-blue-500={activeTab === index}
                        class:text-blue-500={activeTab === index}
                        on:click={() => activeTab = index}
                    >
                        {department.name}
                    </button>
                {/each}
            </div>

            <!-- Officers Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {#each officersData.departments[activeTab].members as officer}
                    <div class="bg-white text-black rounded-lg shadow-md p-4 flex flex-col items-center">
                        <div class="w-32 h-32 overflow-hidden rounded-full bg-gray-200">
                            <img 
                                src="{getImageSrc(officer.website_picture)}" 
                                alt="{officer.name}" 
                                class="object-cover w-full h-full"
                            />
                        </div>
                        <h3 class="mt-3 text-xl font-bold">{officer.name}</h3>
                        <p class="text-sm text-gray-600">{officer.position}</p>
                        <p class="text-xs text-gray-500">Graduation: {officer.grad_date}</p>
                        {#if officer.personal_website}
                            <a href="{officer.personal_website}" target="_blank" class="mt-2 text-blue-600 hover:underline">
                                Personal Website
                            </a>
                        {/if}
                    </div>
                {/each}
            </div>
        </div>
    {/if}
</div>