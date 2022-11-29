<script lang="ts">
	export let name: string;
	export let day: string;
	export let time: string;
</script>

<div class="mx-2 flex-none basis-32 rounded-md border-4 p-2 md:mx-6 md:basis-60 md:p-4">
	<p class="text-2xl font-bold md:text-5xl">{name}</p>
	<p class="text-lg md:text-3xl">{day}</p>
	<p class="text-lg md:text-3xl">{time}</p>
</div>
