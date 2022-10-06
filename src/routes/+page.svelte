<script>
	import { base } from '$app/paths';
	import Background from '$lib/main/Background.svelte';
	import Navbar from '$lib/main/Navbar.svelte';
	import Event from '$lib/main/Event.svelte';
</script>

<svelte:head>
	<title>Cal Animage Alpha</title>
</svelte:head>

<div class="flex flex-col h-full w-full">
	<Navbar />
	<Background poster="{base}/assets/image/railgun.webp" src="{base}/assets/video/2021.mp4" />
	<div class="flex flex-col relative x-0 y-0 w-full h-screen bg-black/50 text-white">
		<div class="flex flex-col my-auto">
			<p class="text-4xl md:text-6xl my-10 text-center whitespace-pre">
				<span>UC Berkeley's</span><span class="before:content-['\A'] lg:before:content-['_']"
					>Anime Club</span
				>
			</p>

			<div class="flex flex-row text-center mx-auto my-10">
				<Event name="Showings" day="Fridays" time="8 PM PST" />
				<Event name="Socials" day="Tuesdays" time="8 PM PST" />
			</div>
		</div>
	</div>
	<div class="body bg-white">
		<img
			class="visual md:ml-40"
			src="{base}/assets/image/annie-banner.webp"
			alt="About CAA visual"
		/>
		<div id="about" class="paragraph">
			<h2
				class="border-lb-4 border-lb-light pl-2 mb-4"
			>
				About CAA
			</h2>
			<p class="text-sm">
				Cal Animage Alpha has been UC Berkeley's anime club since 1989. We hold a game night and a
				social every Thursday. We also have other events. All of these functions are open to the
				general public for free!
			</p>
			<details class="group">
				<summary
					class="flex border-lb-4 border-lb-light pl-2 mb-4"
				>
					<h2>A History of CAA by Rodney Romasata</h2>
					<button class="ml-auto group-open:rotate-180 pointer-events-none">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M19.5 8.25l-7.5 7.5-7.5-7.5"
							/>
						</svg>
					</button>
				</summary>
				<div class="text-sm">
					<p>
						Cal Animage Alpha ("CAA") is the flagship chapter of a loosely organized international
						conglomeration of anime clubs all of which share the name "Cal Animage" (often, but not
						always, followed by the Greek letter denoting their entrance and acceptance into the
						group). Originally just a group of friends (with a VCR) CAA met in any number of various
						rooms on the University of California, Berkeley campus; Cal Animage was formally
						established by Mike Tatsugawa in January 1989.
					</p>
					<p>
						While the debate is still on as to "who is the oldest anime club," CAA has the
						distinction and claim to fame of once being "the largest anime club outside of Japan."
						In 1994 (the peak of the club's popularity), the club's membership topped out at 329
						(although there is some confusion as to the exact number since some didn't pay for
						membership that year!).
					</p>
					<p>
						Many past officers both from CAA and other Cal Animage chapters have gone on to further
						spread anime. The Society for the Promotion of Japanese Animation (SPJA) [was] headed by
						Mike Tatsugawa and runs the annual Anime Expo. Other previous officers have moved on
						into the anime industry, both domestic and abroad. One in particular has worked on both
						sides of the Pacific Ocean and has written the liner notes for the AnimEigo release of
						the Macross DVD.
					</p>
					<p>
						With the release of domestic anime, CAA has slowed down quite a bit. Membership has been
						fairly constant around 100. The main focus of the biweekly Sunday showings has been
						towards those titles that would have little chance of being released in America, yet
						popular enough to hold an audience's attention. A rather tall order, but the club is
						persisting.
					</p>
				</div>
			</details>
		</div>
	</div>
	<div class="body bg-slate-500 text-white">
		<div id="events" class="paragraph">
			<h2
				class="border-lb-4 border-lb-dark pl-2 mb-2"
			>
				Events
			</h2>
			<h3 class="text-xl font-bold mx-auto">Weeklies</h3>
			<p>
				All showings and game nights held by Cal Animage Alpha are open to the general public for
				free. Anyone interested in anime, manga, and Japanese anime culture is invited to attend
				these events.
			</p>
			<p>
				We're always open to fun event ideas or new games to play during game nights! Have an idea
				or a suggestion? Share it with an <a href="/officers">officer</a>!
			</p>
			<h3 class="text-xl font-bold mx-auto">Specials</h3>
			<p>
				Anime Destiny is our annual anime convention, held right here on campus! For more
				information, visit our <a href="http://www.calanimedestiny.com" target="_blank">website</a>.
			</p>
		</div>
		<img
			class="visual"
			src="{base}/assets/image/cal-banner.webp"
			alt="Events visual"
		/>
	</div>
	<div class="body bg-white">
		<img class="visual" src="{base}/assets/image/annie-beach.webp" alt="Konshuu visual" />
        <div id="konshuu" class="paragraph">
            <h2 class="border-lb-4 border-lb-light pl-2 mb-2">Konshuu</h2>
            <p>
                Konshuu is Cal Animage Alpha's weekly newsletter, featuring articles and fanworks from both
                guests and current officers. Each issue includes an overview of the series that will be
                shown/read during weekly meetings, information about future events, and an assortment of
                articles on anime culture. The latest issue is available for free at each weekly showing, or
                you can <a href="/konshuu">read it online</a>!
            </p>
            <p>
                Guest submissions are always welcome! To contribute, visit <a
                    href="http://j.mp/konsub"
                    target="_blank">j.mp/konsub</a
                >
            </p>
            <p>
                If you're interested in becoming a regular contributor to the newsletter, please contact the
                current head — Athena Chen — about working in the Konshuu department
            </p>
        </div>
	</div>
	<div class="body bg-slate-500 text-white">
		<div id="membership" class="paragraph">
            <h2 class="border-lb-4 border-lb-dark pl-2 mb-2">Join Us</h2>
            <p>
                New Cal student? Interested in joining Cal Animage Alpha? Join our <a
                    href="https://www.facebook.com/calanimagealpha"
                    target="_blank">Facebook group</a
                >, like our page, and introduce yourself!
            </p>
            <p>Also, come to game nights and all our events to meet our officers!</p>
		</div>
		<img class="visual" src="{base}/assets/image/cal-beach.webp" alt="Join Us visual" />
	</div>
</div>

<style>
	.border-lb-4 {
		@apply border-l-4 border-b-4
	}

	.border-lb-light {
		@apply border-l-gray-200 border-b-gray-500
	}

	.border-lb-dark {
		@apply border-l-gray-400 border-b-gray-200
	}

	.visual {
		@apply max-w-[25vw] w-auto max-h-[30vh] h-auto my-auto object-contain
	}

	.body {
		@apply relative flex flex-row p-8 justify-center space-x-16
	}

	.paragraph {
		@apply flex flex-col my-auto max-w-2xl space-y-2
	}

	.paragraph h2 {
		@apply text-xl md:text-3xl font-bold
	}

	.paragraph p {
		@apply text-xs md:text-lg
	}

	.paragraph a {
		@apply underline
	}
</style>