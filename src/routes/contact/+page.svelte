<script>
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>CAA - Contact Us</title>
	<link rel="stylesheet" type="text/css" href="{base}/assets/style/asset-style.css" />
</svelte:head>

<video autoplay muted loop id="myVideo">
	<source src="{base}/assets/video/2020.mp4" type="video/mp4" />
</video>

<div id="wrapper">
	<div id="header">
		<div id="navbar">
			<div id="menu-header">
				<ul id="menu">
					<li class="menu-item"><a href="/">Home</a></li>
					<li class="menu-item"><a href="/officers">Officers</a></li>
					<li class="menu-item"><a href="/schedule/">Showings</a></li>
					<li class="menu-item"><a href="/konshuu/">Konshuu</a></li>
					<li class="menu-item current-page"><a href="/contact/">Contact Us</a></li>
				</ul>
			</div>
		</div>
	</div>

	<div id="main">
		<h1>Contact Us</h1>

		<table style="width:100%; text-align:center;">
			<tbody>
				<tr>
					<td>
						<h3>General Inquiries</h3>
					</td>
					<td>
						<a href="mailto:webmaster@calanimagealpha.com">webmaster@calanimagealpha.com</a>
					</td>
				</tr>
				<tr>
					<td>
						<h3>President: Hlley Halim</h3>
					</td>
					<td>
						<a href="mailto:rminjy@berkeley.edu">halley.halim@berkeley.edu</a>
					</td>
				</tr>
				<tr
					><td><h3>Vice President: Sebastian Estrada</h3></td><td
						><a href="mailto:tsehou26@berkeley.edu">sebastian34@berkeley.edu</a></td
					></tr
				>
				<tr
					><td><h3>Treasurer: Heaven Jones</h3></td><td
						><a href="mailto:maimai24@berkeley.edu">maimai24@berkeley.edu</a></td
					></tr
				>
				<tr
					><td><h3>Konshuu: Tony T.</h3></td><td
						><a href="mailto:mitchellmmmadayag@berkeley.edu">tsehou26@berkeley.edu</a></td
					></tr
				>
				<tr
					><td><h3>Video: Angel Mendez</h3></td><td
						><a href="mailto:erik.nelson.42@berkeley.edu">amendez1205@berkeley.edu</a></td
					></tr
				>
				<tr
					><td><h3>Events: Erica Kim</h3></td><td
						><a href="mailto:hayatgheibi@berkeley.edu">seoyeun3478@berkeley.edu</a></td
					></tr
				>
				<tr
					><td><h3>Publicity: Lionel Verano</h3></td><td
						><a href="mailto:aap2266@berkeley.edu">lionel.verano.iv@berkeley.edu</a></td
					></tr
				>
				<tr
					><td><h3>Anime Destiny: Jinn Lim</h3></td><td
						><a href="mailto:iahmed1@berkeley.edu">jinnlk@berkeley.edu</a></td
					></tr
				>
				<tr
					><td><h3>Technology: Minseok Son</h3></td><td
						><a href="mailto:kevmo@berkeley.edu">tom5079@berkeley.edu</a></td
					></tr
				>
			</tbody>
		</table>
	</div>

	<div id="footer">&copy; 2023 Cal Animage Alpha. All Rights Reserved.</div>
</div>
