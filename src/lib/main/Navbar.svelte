<script lang="ts">
    import { base } from '$app/paths';

    type Menu = {
        [key: string]: {
            href: string,
            submenu?: Menu
        }
    };

    const menus: Menu = {
        'About': {
            href: `${base}/#about`,
            submenu: {
                'Officers': { href: `${base}/officers/` },
                'Contact Us': { href: `${base}/contact/` }
            }
        },
        'Events': {
            href: `${base}/#events`,
            submenu: {
                'Anime Destiny': { href: 'http://www.calanimedestiny.com' },
                'Club Calendar': { href: `${base}/schedule/` }
            }
        },
        'Konshuu': {
            href: `${base}/#konshuu`,
            submenu: {
                'Read Online': { href: `${base}/konshuu/` },
                'Contribute': { href: 'http://j.mp/konsub' }
            }
        },
        'BLM': { href: `${base}/blm/` },
        'Join Us': {
            href: `${base}/#membership`,
            submenu: {
                'Discord': { href: 'https://discord.gg/Xp4MUjG' },
                'Mailing List': { href: `${base}/mail/` }
            }
        }
    };

    let opened = false;
</script>

<nav class="fixed top-0 z-50 w-full bg-gray-800/50 tracking-tight text-white">
    <div class="flex lg:hidden flex-row p-4">
        <div class="grow text-2xl sm:text-4xl my-auto">
            <a href={base}>Cal Animage Alpha</a>
        </div>
        <button type="button" on:click={() => opened = !opened} class="inline-flex items-center justify-center rounded-lg p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class:hidden={opened} class:block={!opened} class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <svg class:block={opened} class:hidden={!opened} class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
    </div>
    <div class="hidden lg:flex flex-row">
        <div class="grow text-4xl m-4">
            <a href={base}>Cal Animage Alpha</a>
        </div>

        <div class="flex text-2xl space-x-4 mr-4">
            {#each Object.entries(menus) as [name, menu]}
                <div class="group">
                    <button class="h-full">
                        <a class="text-center" href={menu.href}>{name}</a>
                    </button>

                    <div class="hidden absolute flex-col text-lg group-hover:flex">
                        {#each Object.entries(menu.submenu || {}) as [subname, submenu]}
                            <a href={submenu.href}>{subname}</a>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>
    </div>
    <div class:flex={opened} class:hidden={!opened} class="flex-col lg:hidden px-8 py-4 space-y-4 text-2xl">
        {#each Object.entries(menus) as [name, menu]}
            {#if menu.submenu}
                <details class="group">
                    <summary class="flex items-center">
                        <a href={menu.href}>{name}</a>
                        <button class="ml-auto group-open:rotate-180 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button>
                    </summary>
                    <div class="flex flex-col mx-4 text-lg">
                        {#each Object.entries(menu.submenu || {}) as [subname, submenu]}
                            <a href={submenu.href}>{subname}</a>
                        {/each}
                    </div>
                </details>
            {:else}
                <a href={menu.href}>{name}</a>
            {/if}
        {/each}
    </div>
</nav>