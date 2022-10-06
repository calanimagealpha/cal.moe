<script lang="ts">
    export let poster: string;
    export let src: string
</script>

<video class="w-screen h-screen object-cover fixed x-0 y-0 bg-black/50" {poster} muted autoplay loop>
    <source {src} />
</video>