<script lang="ts">
	import { base } from '$app/paths';
	import officers from './officers.json';
	import OfficerList from './officer-list.svelte';
</script>

<svelte:head>
	<title>CAA - Officers</title>
	<link href="{base}/assets/style/asset-style.css" rel="stylesheet" type="text/css" />
</svelte:head>

<video autoplay muted loop class="fixed right-0 bottom-0 -z-10 min-h-full min-w-full object-cover">
	<source src="{base}/assets/video/2020.mp4" type="video/mp4" />
</video>

<div id="wrapper">
	<div id="header">
		<div id="navbar">
			<div id="menu-header">
				<ul id="menu">
					<li class="menu-item"><a href="{base}/">Home</a></li>
					<li class="menu-item current-page"><a href="#">Officers</a></li>
					<li class="menu-item"><a href="{base}/schedule/">Showings</a></li>
					<li class="menu-item"><a href="{base}/konshuu/">Konshuu</a></li>
					<li class="menu-item"><a href="{base}/contact/">Contact Us</a></li>
				</ul>
			</div>
		</div>
	</div>

	<div id="main">
		<h1>CAA Officers</h1>

		{#each Object.entries(officers) as [department, _officers]}
			<OfficerList {department} officers={_officers} />
		{/each}
	</div>

	<div id="footer">&copy; 2021 Cal Animage Alpha. All Rights Reserved.</div>
</div>
