<script lang="ts">
    export let name: string;
    export let day: string;
    export let time: string;
</script>

<div class="basis-32 md:basis-60 flex-none rounded-md border-4 p-2 md:p-4 mx-2 md:mx-6">
    <p class="text-2xl md:text-5xl font-bold">{name}</p>
    <p class="text-lg md:text-3xl">{day}</p>
    <p class="text-lg md:text-3xl">{time}</p>
</div>