<script lang="ts">
	export let poster: string;
	export let src: string;
</script>

<video
	class="x-0 y-0 fixed -z-50 h-screen w-screen bg-black/50 object-cover"
	{poster}
	muted
	autoplay
	playsinline
	loop
>
	<source {src} />
</video>
