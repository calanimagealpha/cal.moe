<script lang="ts">
    import Navbar from '$lib/navbar.svelte'
    import Footer from '$lib/footer.svelte'
    import { onMount } from 'svelte'

    let scrollY = 1
    let innerHeight = 1

    onMount(() => {
        document.documentElement.style.setProperty('--bg-opacity', '0.75')
    })
</script>

<svelte:window bind:scrollY bind:innerHeight />

<div class="hero overflow-clip text-white">
    <Navbar />
    <header class="my-8">
        <section
            class="pl-8 text-3xl font-bold md:w-3/5 md:pl-16 md:text-6xl/tight lg:mx-auto lg:w-full lg:max-w-7xl lg:text-7xl/tight"
        >
            <p class="pb-4">
                A place for <br />
                <span class="text-pink-400">anime,</span>
                <span class="text-emerald-400">manga,</span>
                <br />
                <span class="text-cyan-400">game</span> lovers
                <br />
                at <span class="text-yellow-400">UC&nbsp;Berkeley&nbsp;🐻</span>
            </p>
        </section>
        <div
            class="relative left-1/2 mb-[-16rem] h-60 w-[50%] bg-about-anime-destiny bg-cover bg-center md:left-[20rem] md:mb-[-24rem] md:h-96 md:w-[calc(100%-20rem)] lg:left-[calc((100vw-80rem)/2+20rem)] lg:w-[calc(100%-(100vw-80rem)/2-20rem)]"
        />
    </header>
    <main class="max-w-7xl lg:mx-auto">
        <section>
            <nav class="lg:px-auto relative pl-8 text-lg font-bold leading-[2.5] underline md:pl-16">
                <ul><a href="#who">Who&nbsp;Are&nbsp;We</a></ul>
                <ul><a href="#what">What&nbsp;We&nbsp;Do</a></ul>
                <ul><a href="#join">How&nbsp;to&nbsp;get&nbsp;involved</a></ul>
            </nav>
        </section>
        <section id="who" class="max-w-7xl space-y-8 pt-32 md:pt-80">
            <h1 class="mx-auto max-w-lg max-w-lg px-8 text-2xl lg:max-w-2xl lg:text-4xl">
                CAA is a community where anime, manga and game lovers unite.
            </h1>
            <p class="bg-white p-8 leading-relaxed text-black md:ml-auto md:mr-16 md:max-w-xl md:rounded">
                <span class="mb-4 block text-sm font-semibold tracking-wider text-yellow-400">ABOUT</span>
                Cal Animage Alpha is the flagship chapter of a loosely organized international conglomeration of anime clubs
                all of which share the name "Cal Animage".
                <br />
                <br />
                Originally just a group of friends CAA met in any number of various rooms on the Berkeley campus; Cal Animage
                was formally established by Mike Tatsugawa in January 1989.
                <br />
                <br />
                While the debate is still on as to "who is the oldest anime club," CAA has the distinction and claim to fame
                of once being "the largest anime club outside of Japan."
                <br />
                <br />
                Many past officers both from CAA and other Cal Animage chapters have gone on to further spread anime. The
                Society for the Promotion of Japanese Animation (SPJA) was headed by Mike Tatsugawa and runs the annual Anime
                Expo. Other previous officers have moved on into the anime industry, both domestic and abroad.
                <br />
                One in particular has worked on both sides of the Pacific Ocean and has written the liner notes for the AnimEigo
                release of the Macross DVD.
                <br />
                <br />
                With the release of domestic anime, CAA has slowed down quite a bit. Membership has been fairly constant
                around 100. The main focus of the biweekly Sunday showings has been towards those titles that would have
                little chance of being released in America, yet popular enough to hold an audience's attention. A rather
                tall order, but the club is persisting.
            </p>
        </section>
    </main>
    <Footer />
</div>
