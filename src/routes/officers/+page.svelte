<svelte:head>
    <title>CAA - Officers</title>
    <link href="/assets/style/asset-style.css" rel="stylesheet" type="text/css" />
</svelte:head>

<script lang="ts">
    import officers from './officers.json';
    import OfficerList from "./officer-list.svelte";
</script>

<video autoplay muted loop class="fixed right-0 bottom-0 min-w-full min-h-full -z-10 object-cover">
    <source src="/assets/video/2020.mp4" type="video/mp4">
</video>

<div id="wrapper">

    <div id="header">
        <div id="navbar">
            <div id="menu-header">
                <ul id="menu">
                    <li class="menu-item"><a href="/">Home</a></li>
                    <li class="menu-item current-page"><a href="#">Officers</a></li>
                    <li class="menu-item"><a href="/schedule/">Showings</a></li>
                    <li class="menu-item"><a href="/konshuu/">Konshuu</a></li>
                    <li class="menu-item"><a href="/contact/">Contact Us</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div id="main">
        <h1>CAA Officers</h1>

        {#each Object.entries(officers) as [department, _officers]}
            <OfficerList department={department} officers={_officers}/>
        {/each}
    </div>

    <div id="footer">
        &copy; 2021 Cal Animage Alpha. All Rights Reserved.
    </div>

</div>