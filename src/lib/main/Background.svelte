<script lang="ts">
    export let poster: string;
    export let src: string
</script>

<video class="w-screen h-screen object-cover absolute x-0 y-0" {poster} muted autoplay loop>
    <source {src} />
</video>