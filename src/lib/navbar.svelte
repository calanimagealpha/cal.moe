<script lang="ts">
    import Logo from '$lib/logo.svelte'
    import { fade } from 'svelte/transition'

    let scrollY: number = 0
    let menuOpened = false
    let aboutDropdownOpen = false
    
    // Timer for dropdown close delay
    let dropdownTimeout: NodeJS.Timeout
    
    function openDropdown() {
        clearTimeout(dropdownTimeout)
        aboutDropdownOpen = true
    }
    
    function closeDropdown() {
        dropdownTimeout = setTimeout(() => {
            aboutDropdownOpen = false
        }, 150) // Small delay to allow moving to dropdown
    }
</script>

<svelte:window bind:scrollY />

<nav class:bg-white={scrollY > 0} class="sticky top-0 z-20 h-24 w-full p-4 transition-all">
    <div
        class:text-black={scrollY > 0 || menuOpened}
        class="translation-all z-10 flex h-full items-center justify-between"
    >
        <a href="/"><Logo /></a>
        <ul class="mr-8 hidden h-full items-center space-x-4 text-sm font-semibold tracking-wider lg:flex">
            <li 
                class="relative h-full flex items-center"
                on:mouseenter={openDropdown}
                on:mouseleave={closeDropdown}
            >
                <a href="/" class="transition-colors hover:text-yellow-400 h-full flex items-center gap-1 relative z-30">
                    About
                    <span class="material-icons text-sm">{aboutDropdownOpen ? 'expand_less' : 'expand_more'}</span>
                </a>
                {#if aboutDropdownOpen}
                    <div 
                        class="dropdown-menu" 
                        transition:fade={{ duration: 150 }}
                        on:mouseenter={openDropdown}
                        on:mouseleave={closeDropdown}
                        style="pointer-events: auto;"
                    >
                        <a href="/#who-we-are" class="dropdown-item">About Us</a>
                        <a href="/officers" class="dropdown-item">Officers</a>
                    </div>
                {/if}
            </li>
            <li><a href="/events" class="transition-colors hover:text-yellow-400">Calendar</a></li>
            <li><a href="/#konshuu" class="transition-colors hover:text-yellow-400">Konshuu</a></li>
            <!-- <li><a href="/maidcafe" class="transition-colors hover:text-yellow-400">Maid Cafe 2025</a></li> -->
            <!-- <li><a href="https://animedestiny.cal.moe/" class="transition-colors hover:text-yellow-400">Anime Destiny 2024</a></li> -->
            <li><a href="/#get-involved" class="transition-colors hover:text-yellow-400">Discord</a></li>
        </ul>
    </div>
</nav>

<!-- Under Construction Indicator -->
<div class="under-construction-indicator">
    <span class="material-icons">construction</span>
</div>

{#if menuOpened}
    <div
        transition:fade={{ duration: 150 }}
        class="fixed top-0 z-10 h-full w-full bg-white pt-24 text-black transition-opacity"
    >
        <ul class="border-t text-2xl font-medium">
            <li>
                <a href="/#who-we-are" class="flex items-center p-8"> About Us </a>
            </li>
            <li>
                <a href="/officers" class="flex items-center p-8 pl-12 text-xl"> Officers </a>
            </li>
            <li>
                <a href="/events" class="flex items-center p-8"> Calendar </a>
            </li>
            <li>
                <a href="/#konshuu" class="flex items-center p-8"> Konshuu </a>
            </li>
            <!-- <li>
                <a href="https://animedestiny.cal.moe/" class="flex items-center p-8"> Anime Destiny 2024 </a>
            </li> -->
            <li>
                <!-- <a href="/maidcafe" class="flex items-center p-8">Maid Cafe 2025</a></li> -->
            <li>
                <a href="/#get-involved" class="flex items-center p-8"> Discord </a>
            </li>
        </ul>
    </div>
{/if}

<style>
    .dropdown-menu {
        position: absolute;
        top: 100%;
        left: 0;
        background: white;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        border-radius: 4px;
        min-width: 180px;
        overflow: hidden;
        margin-top: 0; 
        padding-top: 8px; 
        pointer-events: auto; 
        z-index: 40;
    }
    
    .dropdown-menu::before {
        content: '';
        position: absolute;
        top: -8px; 
        left: 0;
        width: 100%;
        height: 8px;
        background: transparent;
    }
    
    .dropdown-item {
        display: block;
        padding: 12px 20px;
        color: #1a1a2e;
        text-decoration: none;
        transition: background-color 0.2s ease, color 0.2s ease;
        font-size: 0.9rem;
    }
    
    .dropdown-item:hover {
        background-color: #f8f9fa;
        color: #ffd700;
    }
    
    /* UNDER CONSTRUCTION INDICATOR */
    .under-construction-indicator {
        position: fixed;
        bottom: 16px;
        right: 16px;
        z-index: 100;
        opacity: 0.6;
        transition: opacity 0.3s ease;
        background: rgba(255, 255, 255, 0.9);
        padding: 8px 12px;
        border-radius: 20px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
        gap: 6px;
    }
    
    .under-construction-indicator:hover {
        opacity: 1;
    }
    
    .under-construction-indicator .material-icons {
        font-size: 1.3rem;
        color: #FDB515;
        animation: gentleFloat 4s ease-in-out infinite;
    }
    
    @keyframes gentleFloat {
        0%, 100% { 
            transform: translateY(0) rotate(0deg);
        }
        33% { 
            transform: translateY(-3px) rotate(-10deg);
        }
        66% { 
            transform: translateY(-3px) rotate(10deg);
        }
    }
    
    /* Tooltip on hover */
    .under-construction-indicator::after {
        content: 'Site under construction ദ്ദി◝ ⩊ ◜.ᐟ';
        position: absolute;
        bottom: 100%;
        right: 0;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 6px 10px;
        border-radius: 4px;
        font-size: 0.75rem;
        white-space: nowrap;
        opacity: 0;
        transform: translateY(-5px);
        transition: opacity 0.2s ease, transform 0.2s ease;
        pointer-events: none;
        margin-bottom: 8px;
    }
    
    .under-construction-indicator:hover::after {
        opacity: 1;
        transform: translateY(-8px);
    }
    
    @media (max-width: 768px) {
        .under-construction-indicator {
            bottom: 12px;
            right: 12px;
            padding: 6px 10px;
        }
        
        .under-construction-indicator .material-icons {
            font-size: 1.1rem;
        }
    }
</style>