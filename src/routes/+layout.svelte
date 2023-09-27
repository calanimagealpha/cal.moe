<script lang=ts>
    import Footer from '$lib/footer.svelte'
    import Navbar from '$lib/navbar.svelte'
    import '../app.css'
    export let data: PageData
</script>


<slot />
<Footer />