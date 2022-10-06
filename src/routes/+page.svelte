<script>
	import { base } from '$app/paths';
	import VideoBackground from '$lib/main/Background.svelte';
    import MainNavbar from '$lib/main/Navbar.svelte';
	import Event from '$lib/main/Event.svelte';
</script>

<svelte:head>
	<title>Cal Animage Alpha</title>
</svelte:head>

<VideoBackground poster="{base}/assets/image/railgun.webp" src="{base}/assets/video/2021.mp4" />
<div class="flex flex-col absolute x-0 y-0 w-full h-full bg-black/50 text-white">
	<MainNavbar />
	<div class="flex flex-col my-auto">
		<p class="text-4xl md:text-6xl my-10 text-center whitespace-pre"><span>UC Berkeley's</span><span class="before:content-['\A'] lg:before:content-['_']">Anime Club</span></p>

		<div class="flex flex-row text-center mx-auto my-10">
			<Event name="Showings" day="Fridays" time="8 PM PST"/>
			<Event name="Socials" day="Tuesdays" time="8 PM PST"/>
		</div>
	</div>
</div>