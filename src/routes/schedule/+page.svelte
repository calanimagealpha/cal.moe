<script>
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>CAA - Showings Schedule</title>
	<link rel="stylesheet" type="text/css" href="/assets/style/asset-style.css" />
</svelte:head>

<video autoplay muted loop id="myVideo">
	<source src="/assets/video/2020.mp4" type="video/mp4" />
</video>

<div id="wrapper">
	<div id="header">
		<div id="navbar">
			<div id="menu-header">
				<ul id="menu">
					<li class="menu-item"><a href="/">Home</a></li>
					<li class="menu-item"><a href="/officers/">Officers</a></li>
					<li class="menu-item current-page"><a href="#">Showings</a></li>
					<li class="menu-item"><a href="/konshuu/">Konshuu</a></li>
					<li class="menu-item"><a href="/contact/">Contact Us</a></li>
				</ul>
			</div>
		</div>
	</div>

	<div class="wrapper">
		<div class="sep" />

		<h1 align="center">Events</h1>
		<div style="text-align: center;">
			<!-- Google Calendar -->
			<iframe
				src="https://calendar.google.com/calendar/embed?src=berkeley.edu_gh9tekbigrrlqf9248qhgdik2k%40group.calendar.google.com&ctz=America%2FLos_Angeles"
				style="border: 0"
				width="800"
				height="600"
				frameborder="0"
				scrolling="no"
			/><br /><br /><br />
			<!--End Google Calendar-->
		</div>
	</div>

	<div id="main">
		<!-- Current -->
		<h1>Spring 2021</h1>
		<table class="schedule">
			<tbody />
		</table>
		<!-- <div class="sep"></div> -->
		<div class="archive" />
		<!-- Current -->

		<h2>Archived Schedules</h2>
		<div class="sep" />

		<div class="archive" style="display:none">
			semester
			<input
				class="spoilerbutton"
				type="button"
				value="Show"
				onclick="this.value=this.value=='Show'?'Hide':'Show';"
			/>
			<div class="spoiler">
				<div>
					<table class="schedule" />
					<table class="schedule">
						<thead>
							<tr class="m-header">
								<th colspan="2">Marathon</th>
							</tr>
						</thead>
						<tbody>
							<tr class="table-header">
								<th class="time">Time</th>
								<th class="series">Series</th>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
		<div class="archive">
			Fall 2018
			<input
				class="spoilerbutton"
				type="button"
				value="Show"
				onclick="this.value=this.value=='Show'?'Hide':'Show';"
			/>
			<div class="spoiler">
				<div>
					<table class="schedule">
						<tbody>
							<tr class="table-header">
								<th class="series">Series</th>
								<th class="date">Date</th>
								<th class="location">Location</th>
							</tr>
							<tr class="table-entry">
								<td>Little Witch Academia</td>
								<td>September 19</td>
								<td>Wheeler 222</td>
							</tr>
							<tr class="table-entry">
								<td>Flavors of Youth</td>
								<td>October 3</td>
								<td>Wheeler 222</td>
							</tr>
							<tr class="table-entry">
								<td>Paprika</td>
								<td>October 17</td>
								<td>Wheeler 222</td>
							</tr>
							<tr class="table-entry">
								<td>Soul Eater</td>
								<td>October 31</td>
								<td>Wheeler 222</td>
							</tr>
							<tr class="table-entry">
								<td>Spice and Wolf</td>
								<td>November 14</td>
								<td>Wheeler 222</td>
							</tr>
							<tr class="table-entry">
								<td>Revue Starlight</td>
								<td>November 28</td>
								<td>Wheeler 222</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
		<div class="archive">
			Spring 2018
			<input
				class="spoilerbutton"
				type="button"
				value="Show"
				onclick="this.value=this.value=='Show'?'Hide':'Show';"
			/>
			<div class="spoiler">
				<div>
					<table class="schedule">
						<tbody>
							<tr class="table-header">
								<th class="series">Series</th>
								<th class="date">Date</th>
								<th class="location">Location</th>
							</tr>
							<tr class="table-entry">
								<td>Pop Team Epic</td>
								<td>February 7</td>
								<td>Barrows 166</td>
							</tr>
							<tr class="table-entry">
								<td>Yuru Camp</td>
								<td>February 7</td>
								<td>Barrows 166</td>
							</tr>
							<tr class="table-entry">
								<td>Violet Evergarden</td>
								<td>February 14</td>
								<td>Barrows 166</td>
							</tr>
							<tr class="table-entry">
								<td>Koi wa Ameagari</td>
								<td>February 14</td>
								<td>Barrows 166</td>
							</tr>
							<tr class="table-entry">
								<td>Ramen Daisuki Koizumi-san</td>
								<td>February 21</td>
								<td>Barrows 166</td>
							</tr>
							<tr class="table-entry">
								<td>Hakata Tonkotsu Ramens</td>
								<td>Febraury 21</td>
								<td>Barrows 166</td>
							</tr>
							<tr class="table-entry">
								<td>Inuyashiki</td>
								<td>February 28</td>
								<td>Barrows 166</td>
							</tr>
							<tr class="table-entry">
								<td>Kokkuku</td>
								<td>February 28</td>
								<td>Barrows 166</td>
							</tr>
							<tr class="table-entry">
								<td>Fate/EXTRA Last Encore</td>
								<td>March 7</td>
								<td>Barrows 166</td>
							</tr>
							<tr class="table-entry">
								<td>Emiya-san Chi no Kyou no Gohan (13 min)</td>
								<td>March 7</td>
								<td>Barrows 166</td>
							</tr>
							<tr class="table-entry">
								<td>Takunomi (15 min)</td>
								<td>March 14</td>
								<td>Barrows 166</td>
							</tr>
							<tr class="table-entry">
								<td>Osake wa Fuufu ni Natte kara (3 min)</td>
								<td>March 14</td>
								<td>Barrows 166</td>
							</tr>
							<tr class="table-entry">
								<td>Sanrio Danshi</td>
								<td>March 21</td>
								<td>Barrows 166</td>
							</tr>
							<tr class="table-entry">
								<td>IDOLiSH7</td>
								<td>March 21</td>
								<td>Barrows 166</td>
							</tr>
							<tr class="table-entry">
								<td>Thunderbolt Fantasy</td>
								<td>April 4</td>
								<td>Barrows 166</td>
							</tr>
							<tr class="table-entry">
								<td>Pingu in the City</td>
								<td>April 4</td>
								<td>Barrows 166</td>
							</tr>
							<tr class="table-entry">
								<td>Gakuen Babysitters</td>
								<td>April 11</td>
								<td>Barrows 166</td>
							</tr>
							<tr class="table-entry">
								<td>Miiraa no Kaikata</td>
								<td>April 11</td>
								<td>Barrows 166</td>
							</tr>
							<tr class="table-entry">
								<td>A Place Furthur Than the Universe</td>
								<td>April 18</td>
								<td>Barrows 166</td>
							</tr>
							<tr class="table-entry">
								<td>Cardcaptor Sakura: Clear Card</td>
								<td>April 18</td>
								<td>Barrows 166</td>
							</tr>
							<tr class="table-entry">
								<td>Darling in the FranXX</td>
								<td>April 25</td>
								<td>Barrows 166</td>
							</tr>
							<tr class="table-entry">
								<td>Gundam Iron-Blooded Orphans</td>
								<td>April 25</td>
								<td>Barrows 166</td>
							</tr>
							<tr class="table-entry">
								<td>Comic Girls</td>
								<td>April 29</td>
								<td>Barrows 60</td>
							</tr>
							<tr class="table-entry">
								<td>Piano no Mori</td>
								<td>April 29</td>
								<td>Barrows 60</td>
							</tr>
							<tr class="table-entry">
								<td>Uma Musume</td>
								<td>April 29</td>
								<td>Barrows 60</td>
							</tr>
							<tr class="table-entry">
								<td>Mahou Shoujo Ore</td>
								<td>April 29</td>
								<td>Barrows 60</td>
							</tr>
							<tr class="table-entry">
								<td>Wotaku ni Koi wa Muzukashii</td>
								<td>April 29</td>
								<td>Barrows 60</td>
							</tr>
							<tr class="table-entry">
								<td>Caligula</td>
								<td>April 29</td>
								<td>Barrows 60</td>
							</tr>
							<tr class="table-entry">
								<td>Devils Line</td>
								<td>April 29</td>
								<td>Barrows 60</td>
							</tr>
							<tr class="table-entry">
								<td>Persona 5</td>
								<td>April 29</td>
								<td>Barrows 60</td>
							</tr>
							<tr class="table-entry">
								<td>Golden Kamui</td>
								<td>April 29</td>
								<td>Barrows 60</td>
							</tr>
							<tr class="table-entry">
								<td>Saredo Tsumibito wa Ryuu to Odoru</td>
								<td>April 29</td>
								<td>Barrows 60</td>
							</tr>
							<tr class="table-entry">
								<td>Hinamatsuri</td>
								<td>April 29</td>
								<td>Barrows 60</td>
							</tr>
							<tr class="table-entry">
								<td>Megalo Box</td>
								<td>April 29</td>
								<td>Barrows 60</td>
							</tr>
							<tr class="table-entry">
								<td>MOVIE: The Night is Short, Walk on Girl</td>
								<td>April 29</td>
								<td>Barrows 60</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
		<div class="archive">
			Fall 2017
			<input
				class="spoilerbutton"
				type="button"
				value="Show"
				onclick="this.value=this.value=='Show'?'Hide':'Show';"
			/>
			<div class="spoiler">
				<div>
					<table class="schedule">
						<tbody>
							<tr class="table-header">
								<th class="series">Series</th>
								<th class="date">Date</th>
								<th class="location">Location</th>
							</tr>
							<tr class="table-entry">
								<td>My Youth Romantic Comedy Is Wrong, As I Expected; Season 1</td>
								<td>September 17</td>
								<td>Barrows 166</td>
							</tr>
							<tr class="table-entry">
								<td>Tsurezure Children</td>
								<td>September 17</td>
								<td>Barrows 166</td>
							</tr>
							<tr class="table-entry">
								<td>Sangatsu no Lion</td>
								<td>October 1</td>
								<td>Barrows 166</td>
							</tr>
							<tr class="table-entry">
								<td>Kekkai Sensen</td>
								<td>October 1</td>
								<td>Barrows 166</td>
							</tr>
							<tr class="table-entry">
								<td>Kino's Journey</td>
								<td>October 1</td>
								<td>Barrows 166</td>
							</tr>
							<tr class="table-entry">
								<td>Osomatsu-san</td>
								<td>October 1</td>
								<td>Barrows 166</td>
							</tr>
							<tr class="table-entry">
								<td>Mahoutsukai no Yome (The Ancient Magus' Bride)</td>
								<td>October 15</td>
								<td>Barrows 166</td>
							</tr>
							<tr class="table-entry">
								<td>Juuni Taisen (Zodiac War)</td>
								<td>October 15</td>
								<td>Barrows 166</td>
							</tr>
							<tr class="table-entry">
								<td>Kino no Tabi (2017)</td>
								<td>October 15</td>
								<td>Barrows 166</td>
							</tr>
							<tr class="table-entry">
								<td>THE iDOLM@STER: SideM</td>
								<td>October 15</td>
								<td>Barrows 166</td>
							</tr>
							<tr class="table-entry">
								<td>Death Parade</td>
								<td>October 29</td>
								<td>Barrows 166</td>
							</tr>
							<tr class="table-entry">
								<td>Demi-chan wa Kataritai</td>
								<td>October 29</td>
								<td>Barrows 166</td>
							</tr>
							<tr class="table-entry">
								<td>Steins;Gate</td>
								<td>November 12</td>
								<td>Barrows 166</td>
							</tr>
							<tr class="table-entry">
								<td>Amagami SS</td>
								<td>November 12</td>
								<td>Barrows 166</td>
							</tr>
							<tr class="table-entry">
								<td>Acca 13-Ku Kansatsu-Ka</td>
								<td>December 2</td>
								<td>Barrows 140</td>
							</tr>
							<tr class="table-entry">
								<td>Blend S</td>
								<td>December 2</td>
								<td>Barrows 140</td>
							</tr>
							<tr class="table-entry">
								<td>Ballroom e Youkoso</td>
								<td>December 2</td>
								<td>Barrows 140</td>
							</tr>
							<tr class="table-entry">
								<td>Made in Abyss</td>
								<td>December 2</td>
								<td>Barrows 140</td>
							</tr>
							<tr class="table-entry">
								<td>Tsuki ga Kirei</td>
								<td>December 2</td>
								<td>Barrows 140</td>
							</tr>
							<tr class="table-entry">
								<td>Isekai Shokudou</td>
								<td>December 2</td>
								<td>Barrows 140</td>
							</tr>
							<tr class="table-entry">
								<td>Houseki no Kuni</td>
								<td>December 2</td>
								<td>Barrows 140</td>
							</tr>
							<tr class="table-entry">
								<td>Koe no Katachi</td>
								<td>December 2</td>
								<td>Barrows 140</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
		<div class="archive">
			Spring 2017
			<input
				class="spoilerbutton"
				type="button"
				value="Show"
				onclick="this.value=this.value=='Show'?'Hide':'Show';"
			/>
			<div class="spoiler">
				<div>
					<table class="schedule">
						<tbody>
							<tr class="table-header">
								<th class="series">Series</th>
								<th class="date">Date</th>
								<th class="location">Location</th>
							</tr>
							<tr class="table-entry">
								<td>Shingeki no Kyojin Season 2</td>
								<td>April 16</td>
								<td>Mad Monk</td>
							</tr>
							<tr class="table-entry">
								<td>Danshi Koukousei no Nichijou</td>
								<td>April 16</td>
								<td>Mad Monk</td>
							</tr>
							<tr class="table-entry">
								<td>JoJo’s Bizarre Adventure: Phantom Blood</td>
								<td>April 16</td>
								<td>Mad Monk</td>
							</tr>
						</tbody>
					</table>

					<table class="schedule">
						<thead>
							<tr class="m-header">
								<th colspan="2">Marathon</th>
							</tr>
						</thead>
						<tbody>
							<tr class="table-header">
								<th class="time">Time</th>
								<th class="series">Series</th>
							</tr>
							<tr class="table-entry">
								<td>10:00 AM - 10:50 AM</td>
								<td>Owari no Seraph</td>
							</tr>
							<tr class="table-entry">
								<td>10:50 AM - 11:40 AM</td>
								<td>Dragon Maid</td>
							</tr>
							<tr class="table-entry">
								<td>11:40 AM - 12:30 PM</td>
								<td>Little Witch Academia</td>
							</tr>
							<tr class="table-entry">
								<td>12:30 PM - 01:20 PM </td>
								<td>[Lunch]</td>
							</tr>
							<tr class="table-entry">
								<td>01:20 PM - 02:10 PM</td>
								<td>Sakura Quest</td>
							</tr>
							<tr class="table-entry">
								<td>02:10 PM - 03:00 PM</td>
								<td>Eccentric Family</td>
							</tr>
							<tr class="table-entry">
								<td>03:00 PM - 03:50 PM</td>
								<td>Gabriel Drop Out</td>
							</tr>
							<tr class="table-entry">
								<td>03:50 PM - 04:40 PM</td>
								<td>Alice to Zouroku</td>
							</tr>
							<tr class="table-entry">
								<td>04:40 PM - 05:30 PM</td>
								<td>youjo senki</td>
							</tr>
							<tr class="table-entry">
								<td>05:30 PM - 06:20 PM</td>
								<td>FLCL</td>
							</tr>
							<tr class="table-entry">
								<td>06:20 PM - 07:10 PM</td>
								<td>[Dinner]</td>
							</tr>
							<tr class="table-entry">
								<td>07:10 PM - 08:00 PM</td>
								<td>Shūmatsu Nani Shitemasu ka? Isogashii Desu ka? Sukutte Moratte Ii Desu ka?</td>
							</tr>
							<tr class="table-entry">
								<td>08:00 PM - 10:00 PM</td>
								<td>Boy and the Beast</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>

		<div class="archive">
			Spring 2016
			<input
				class="spoilerbutton"
				type="button"
				value="Show"
				onclick="this.value=this.value=='Show'?'Hide':'Show';"
			/>
			<div class="spoiler">
				<div>
					<table class="schedule">
						<tbody>
							<tr class="table-header">
								<th class="series">Series</th>
								<th class="date">Date</th>
								<th class="location">Location</th>
							</tr>
							<tr class="table-entry">
								<td>Osomatsu-san</td>
								<td>Feb 1</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?dwinelle" target="_blank"
										>251 Dwinelle</a
									></td
								>
							</tr>
							<tr class="table-entry">
								<td>Showing canceled tonight! Sorry!</td>
								<td>Feb 8</td>
								<td>): ):</td>
							</tr>
							<tr class="table-entry">
								<td>Young Black Jack</td>
								<td>Feb 22</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?evans" target="_blank"
										>9 Evans</a
									></td
								>
							</tr>
							<tr class="table-entry">
								<td>Dagashi Kashi</td>
								<td>Feb 29</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?evans" target="_blank"
										>9 Evans</a
									></td
								>
							</tr>
							<tr class="table-entry">
								<td>Erased</td>
								<td>Mar 7</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?evans" target="_blank"
										>9 Evans</a
									></td
								>
							</tr>
							<tr class="table-entry">
								<td>Saenai Heroine no Sodatekata</td>
								<td>Mar 14</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?evans" target="_blank"
										>9 Evans</a
									></td
								>
							</tr>
							<tr class="table-entry">
								<td>Ajin</td>
								<td>Mar 28</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?evans" target="_blank"
										>9 Evans</a
									></td
								>
							</tr>
							<tr class="table-entry">
								<td>Shouwa Genroku Rakugo Shinjuu</td>
								<td>Apr 4</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?evans" target="_blank"
										>9 Evans</a
									></td
								>
							</tr>
							<tr class="table-entry">
								<td>KonoSuba</td>
								<td>Apr 11</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?evans" target="_blank"
										>9 Evans</a
									></td
								>
							</tr>
							<tr class="table-entry">
								<td>Hai to Gensou no Grimgar</td>
								<td>Apr 18</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?evans" target="_blank"
										>9 Evans</a
									></td
								>
							</tr>
							<tr class="table-entry">
								<td>NouCome</td>
								<td>Apr 25</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?evans" target="_blank"
										>9 Evans</a
									></td
								>
							</tr>
							<tr>
								<td>Marathon</td>
								<td>April 30</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?wheeler" target="_blank"
										>Wheeler 20/30</a
									></td
								>
							</tr>
							<tr>
								<td>Himouto! Umaru-chan, Dimension W</td>
								<td>Weeklies</td>
							</tr>
						</tbody>
					</table>

					<table class="schedule">
						<thead>
							<tr class="m-header">
								<th colspan="2">Marathon</th>
							</tr>
						</thead>
						<tbody>
							<tr class="table-header">
								<th class="time">Time</th>
								<th class="series">Series</th>
							</tr>
							<tr>
								<td>10:00 AM – 10:50 AM</td>
								<td>Super Lovers</td>
							</tr>
							<tr>
								<td>11:00 AM – 11:50 AM</td>
								<td>Bungo Stray Dogs</td>
							</tr>
							<tr>
								<td>12:00 AM – 12:50 PM</td>
								<td>Himouto! Umaru-chan</td>
							</tr>
							<tr>
								<td>01:00 PM – 01:50 PM</td>
								<td>[Lunch Break] - Gaki no Tsukai</td>
							</tr>
							<tr>
								<td>02:00 PM – 02:50 PM</td>
								<td>Kumamiko</td>
							</tr>
							<tr>
								<td>03:00 PM – 03:50 PM</td>
								<td>Dimension W</td>
							</tr>
							<tr>
								<td>04:00 PM – 04:50 PM</td>
								<td>Koutetsujou no Kabaneri</td>
							</tr>
							<tr>
								<td>05:00 PM – 05:50 PM</td>
								<td>Wakakozake</td>
							</tr>
							<tr>
								<td>06:00 PM – 06:50 PM</td>
								<td>[Dinner Break]</td>
							</tr>
							<tr>
								<td>07:00 PM – 07:50 PM</td>
								<td>Sousei no Onmyouji</td>
							</tr>
							<tr>
								<td>08:00 PM – 10:00 PM</td>
								<td>Kokoro ga Sakebitagatterunda</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>

		<div class="archive">
			Fall 2015
			<input
				class="spoilerbutton"
				type="button"
				value="Show"
				onclick="this.value=this.value=='Show'?'Hide':'Show';"
			/>
			<div class="spoiler">
				<div>
					<table class="schedule">
						<tbody>
							<tr class="table-header">
								<th class="series">Series</th>
								<th class="date">Date</th>
								<th class="location">Location</th>
							</tr>
							<tr>
								<td>AnoHana: The Movie</td>
								<td>Sep 14</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?dwinelle" target="_blank"
										>Dwinelle 243</a
									></td
								>
							</tr>
							<tr>
								<td>Shokugeki no Soma</td>
								<td>Sep 21</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?dwinelle" target="_blank"
										>Dwinelle 243</a
									></td
								>
							</tr>
							<tr>
								<td>Charlotte</td>
								<td>Sep 28</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?dwinelle" target="_blank"
										>Dwinelle 243</a
									></td
								>
							</tr>
							<tr>
								<td>GATE</td>
								<td>Oct 5</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?dwinelle" target="_blank"
										>Dwinelle 243</a
									></td
								>
							</tr>
							<tr>
								<td>Ping Pong: The Animation</td>
								<td>Oct 12</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?dwinelle" target="_blank"
										>Dwinelle 243</a
									></td
								>
							</tr>
							<tr>
								<td>Rokka no Yuusha</td>
								<td>Oct 19</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?dwinelle" target="_blank"
										>Dwinelle 243</a
									></td
								>
							</tr>
							<tr>
								<td>Concrete Revolutio: Choujin Gensou</td>
								<td>Oct 26</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?dwinelle" target="_blank"
										>Dwinelle 243</a
									></td
								>
							</tr>
							<tr>
								<td>Shimoneta</td>
								<td>Nov 2</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?dwinelle" target="_blank"
										>Dwinelle 243</a
									></td
								>
							</tr>
							<tr>
								<td>One Punch Man</td>
								<td>Nov 9</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?dwinelle" target="_blank"
										>Dwinelle 243</a
									></td
								>
							</tr>
							<tr>
								<td>Game of Laplace</td>
								<td>Nov 16</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?dwinelle" target="_blank"
										>Dwinelle 243</a
									></td
								>
							</tr>
							<tr>
								<td>Subete ga F ni Naru</td>
								<td>Nov 23</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?dwinelle" target="_blank"
										>Dwinelle 243</a
									></td
								>
							</tr>
							<tr>
								<td>Shingeki! Kyojin Chuugakkou</td>
								<td>Nov 30</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?dwinelle" target="_blank"
										>Dwinelle 243</a
									></td
								>
							</tr>
							<tr>
								<td>Marathon</td>
								<td>Dec 6</td>
								<td
									><a
										href="   http://www.berkeley.edu/map/3dmap/3dmap.shtml?wheeler"
										target="_blank">Wheeler 110</a
									></td
								>
							</tr>
							<tr>
								<td>Gakkou Gurashi!, GANGSTA.</td>
								<td>Weeklies</td>
							</tr>
						</tbody>
					</table>
					<table class="schedule">
						<thead>
							<tr class="m-header">
								<th colspan="2">Marathon</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th class="time">Time</th>
								<th class="series">Series</th>
							</tr>

							<tr>
								<td>10:00 AM – 10:50 AM</td>
								<td>Monochrome Factor</td>
							</tr>
							<tr>
								<td>10:50 AM – 11:40 AM</td>
								<td>Serial Experiments Lain</td>
							</tr>
							<tr>
								<td>11:40 AM – 12:30 PM</td>
								<td>Monster</td>
							</tr>
							<tr>
								<td>12:30 PM – 01:20 PM</td>
								<td>[Lunch Break] - Baka to Test</td>
							</tr>
							<tr>
								<td>01:20 PM – 02:10 PM</td>
								<td>Mononoke</td>
							</tr>
							<tr>
								<td>02:10 PM – 03:00 PM</td>
								<td>Joshiraku</td>
							</tr>
							<tr>
								<td>03:00 PM – 03:50 PM</td>
								<td>Canaan</td>
							</tr>
							<tr>
								<td>03:50 PM – 04:40 PM</td>
								<td>Kekkai Sensen</td>
							</tr>
							<tr>
								<td>04:40 PM – 05:30 PM</td>
								<td>Nichijou</td>
							</tr>
							<tr>
								<td>05:30 PM – 06:20 PM</td>
								<td>Cardcaptor Sakura</td>
							</tr>
							<tr>
								<td>06:20 PM – 07:10 PM</td>
								<td>[Dinner Break] - Genshiken</td>
							</tr>
							<tr>
								<td>07:10 PM – 08:00 PM</td>
								<td>Kannagi</td>
							</tr>
							<tr>
								<td>08:00 PM – 10:00 PM</td>
								<td>Eve no Jikan</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>

		<div class="archive">
			Spring 2015
			<input
				class="spoilerbutton"
				type="button"
				value="Show"
				onclick="this.value=this.value=='Show'?'Hide':'Show';"
			/>
			<div class="spoiler">
				<div>
					<table class="schedule">
						<tbody>
							<tr class="table-header">
								<th class="series">Series</th>
								<th class="date">Date</th>
								<th class="location">Location</th>
							</tr>

							<tr class="table-entry">
								<td>Ansatsu Kyoushitsu</td>
								<td>Feb 2</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?wheeler" target="_blank"
										>Wheeler 122</a
									></td
								>
							</tr>
							<tr class="table-entry">
								<td>Saenai Heroine no Sodatekata</td>
								<td>Feb 9</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?dwinelle" target="_blank"
										>Dwinelle 243</a
									></td
								>
							</tr>
							<tr class="table-entry">
								<td>Binan Koukou Chikyuu Bouei-bu LOVE!</td>
								<td>Feb 23</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?dwinelle" target="_blank"
										>Dwinelle 243</a
									></td
								>
							</tr>
							<tr class="table-entry">
								<td>Eureka Seven</td>
								<td>Mar 2</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?dwinelle" target="_blank"
										>Dwinelle 243</a
									></td
								>
							</tr>
							<tr class="table-entry">
								<td>Koufuku Graffiti</td>
								<td>Mar 9</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?dwinelle" target="_blank"
										>Dwinelle 243</a
									></td
								>
							</tr>
							<tr class="table-entry">
								<td>The Rolling Girls</td>
								<td>Mar 16</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?dwinelle" target="_blank"
										>Dwinelle 243</a
									></td
								>
							</tr>
							<tr class="table-entry">
								<td>Inou Battle wa Nichijou-kei no Naka de</td>
								<td>Mar 30</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?dwinelle" target="_blank"
										>Dwinelle 243</a
									></td
								>
							</tr>
							<tr class="table-entry">
								<td>Junketsu no Maria</td>
								<td>Apr 6</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?dwinelle" target="_blank"
										>Dwinelle 243</a
									></td
								>
							</tr>
							<tr class="table-entry">
								<td>Ore, Twintails ni Narimasu.</td>
								<td>Apr 13</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?dwinelle" target="_blank"
										>Dwinelle 243</a
									></td
								>
							</tr>
							<tr class="table-entry">
								<td>Absolute Duo</td>
								<td>Apr 20</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?dwinelle" target="_blank"
										>Dwinelle 243</a
									></td
								>
							</tr>
							<tr class="table-entry">
								<td>Ghost Stories</td>
								<td>Apr 27</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?dwinelle" target="_blank"
										>Dwinelle 243</a
									></td
								>
							</tr>
							<tr class="table-entry">
								<td>Marathon</td>
								<td>May 2</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?wheeler" target="_blank"
										>Wheeler 130</a
									></td
								>
							</tr>
							<tr class="table-entry">
								<td>Death Parade, The iDOLM@STER Cinderella Girls</td>
								<td>Weeklies</td>
							</tr>
						</tbody>
					</table>
					<table class="schedule">
						<thead>
							<tr class="m-header">
								<th colspan="2">Marathon</th>
							</tr>
						</thead>
						<tbody
							><tr>
								<th class="time">Time</th>
								<th class="series">Series</th>
							</tr>

							<tr>
								<td>10:00 AM – 10:50 AM</td>
								<td>DRAMAtical Murder</td>
							</tr>
							<tr>
								<td>10:50 AM – 11:40 AM</td>
								<td>Katanagatari</td>
							</tr>
							<tr>
								<td>11:40 AM – 12:30 PM</td>
								<td>Owari no Seraph</td>
							</tr>
							<tr>
								<td>12:30 PM – 01:20 PM</td>
								<td>Lunch / Death Parade</td>
							</tr>
							<tr>
								<td>01:20 PM – 02:10 PM</td>
								<td>Hibike! Euphonium</td>
							</tr>
							<tr>
								<td>02:10 PM – 03:00 PM</td>
								<td>Samurai Flamenco</td>
							</tr>
							<tr>
								<td>03:00 PM – 03:50 PM</td>
								<td>Denpa Kyoushi</td>
							</tr>
							<tr>
								<td>03:50 PM – 04:40 PM</td>
								<td>Arslan Senki</td>
							</tr>
							<tr>
								<td>04:40 PM – 05:30 PM</td>
								<td>iDOLM@STER: Cinderella Girls</td>
							</tr>
							<tr>
								<td>05:30 PM – 06:20 PM</td>
								<td>Danmachi</td>
							</tr>
							<tr>
								<td>06:20 PM – 07:10 PM</td>
								<td>Dinner Break</td>
							</tr>
							<tr>
								<td>07:10 PM – 08:00 PM</td>
								<td>Ore Monogatari!!</td>
							</tr>
							<tr>
								<td>08:00 PM – 10:00 PM</td>
								<td>Expelled from Paradise</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>

		<div class="archive">
			Fall 2014
			<input
				class="spoilerbutton"
				type="button"
				value="Show"
				onclick="this.value=this.value=='Show'?'Hide':'Show';"
			/>
			<div class="spoiler">
				<div>
					<table class="schedule">
						<tbody
							><tr>
								<th class="series">Series</th>
								<th class="date">Date</th>

								<th class="location">Location</th>
							</tr>

							<tr>
								<td>Zankyou no Terror</td>
								<td>Sep 15</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?dwinelle" target="_blank"
										>Dwinelle 219</a
									></td
								>
							</tr>
							<tr>
								<td>Gekkan Shoujo Nozaki-kun</td>
								<td>Sep 22</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?dwinelle" target="_blank"
										>Dwinelle 219</a
									></td
								>
							</tr>
							<tr>
								<td>Tokyo Ghoul</td>
								<td>Sep 29</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?dwinelle" target="_blank"
										>Dwinelle 219</a
									></td
								>
							</tr>
							<tr>
								<td>Rokujouma no Shinryakusha!?</td>
								<td>Oct 6</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?dwinelle" target="_blank"
										>Dwinelle 219</a
									></td
								>
							</tr>
							<tr>
								<td>Thermae Romae</td>
								<td>Oct 13</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?dwinelle" target="_blank"
										>Dwinelle 219</a
									></td
								>
							</tr>
							<tr>
								<td>Fate/stay Night: Unlimited Blade Works</td>
								<td>Oct 20</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?dwinelle" target="_blank"
										>Dwinelle 219</a
									></td
								>
							</tr>
							<tr>
								<td>Amagi Brilliant Park</td>
								<td>Oct 27</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?dwinelle" target="_blank"
										>Dwinelle 219</a
									></td
								>
							</tr>
							<tr>
								<td>Grisaia no Kajitsu</td>
								<td>Nov 3</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?dwinelle" target="_blank"
										>Dwinelle 219</a
									></td
								>
							</tr>
							<tr>
								<td>Denki Gai no Honya-san</td>
								<td>Nov 10</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?dwinelle" target="_blank"
										>Dwinelle 205</a
									></td
								>
							</tr>
							<tr>
								<td>Shirobako</td>
								<td>Nov 17</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?dwinelle" target="_blank"
										>Dwinelle 205</a
									></td
								>
							</tr>
							<tr>
								<td>Gugure! Kokkuri-san</td>
								<td>Nov 24</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?dwinelle" target="_blank"
										>Dwinelle 205</a
									></td
								>
							</tr>
							<tr>
								<td>Shigatsu wa Kimi no Uso </td>
								<td>Dec 1</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?dwinelle" target="_blank"
										>Dwinelle 205</a
									></td
								>
							</tr>
							<tr>
								<td>Marathon</td>
								<td>Dec 6</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?barrows" target="_blank"
										>Barrows 126</a
									></td
								>
							</tr>
							<tr>
								<td>Aldnoah.Zero, Barakamon</td>
								<td>Weeklies</td>
							</tr>
						</tbody>
					</table>
					<table class="schedule">
						<thead>
							<tr class="m-header">
								<th colspan="2">Marathon</th>
							</tr>
						</thead>
						<tbody
							><tr>
								<th class="time">Time</th>
								<th class="series">Series</th>
							</tr>

							<tr>
								<td>10:00 AM – 10:50 AM</td>
								<td>Love Stage!!</td>
							</tr>
							<tr>
								<td>10:50 AM – 11:40 AM</td>
								<td>Girlfriend (Kari)</td>
							</tr>
							<tr>
								<td>11:40 AM – 12:30 PM</td>
								<td>Kiseijuu: Sei no Kakuritsu</td>
							</tr>
							<tr>
								<td>12:30 PM – 01:20 PM</td>
								<td>Lunch Break</td>
							</tr>
							<tr>
								<td>01:20 PM – 02:10 PM</td>
								<td>Hitsugi no Chaika</td>
							</tr>
							<tr>
								<td>02:10 PM – 03:00 PM</td>
								<td>Donten ni Warau</td>
							</tr>
							<tr>
								<td>03:00 PM – 03:50 PM</td>
								<td>Garo</td>
							</tr>
							<tr>
								<td>03:50 PM – 04:40 PM</td>
								<td>Gundam G no Reconguista</td>
							</tr>
							<tr>
								<td>04:40 PM – 05:30 PM</td>
								<td>Haikyuu!!</td>
							</tr>
							<tr>
								<td>05:30 PM – 06:20 PM</td>
								<td>Ghost in the Shell: Arise - Ghost Pain</td>
							</tr>
							<tr>
								<td>06:20 PM – 07:10 PM</td>
								<td>Dinner</td>
							</tr>
							<tr>
								<td>07:10 PM – 08:00 PM</td>
								<td>Gankutsuoh</td>
							</tr>
							<tr>
								<td>08:00 PM – 10:00 PM</td>
								<td>Expelled from Paradise</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>

		<div class="archive">
			Spring 2014
			<input
				class="spoilerbutton"
				type="button"
				value="Show"
				onclick="this.value=this.value=='Show'?'Hide':'Show';"
			/>
			<div class="spoiler">
				<div>
					<table class="schedule">
						<tbody
							><tr>
								<th class="series">Series</th>
								<th class="date">Date</th>
								<th class="location">Location</th>
							</tr>

							<tr>
								<td>Noragami</td>
								<td>Feb 3</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?barrows" target="_blank"
										>Barrows 126</a
									></td
								>
							</tr>
							<tr>
								<td>Wizard Barristers: Benmashi Cecil</td>
								<td>Feb 10</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?dwinelle" target="_blank"
										>Dwinelle 182</a
									></td
								>
							</tr>
							<tr>
								<td>Nisekoi</td>
								<td>Feb 24</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?dwinelle" target="_blank"
										>Dwinelle 182</a
									></td
								>
							</tr>
							<tr>
								<td>Nourin</td>
								<td>Mar 3</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?dwinelle" target="_blank"
										>Dwinelle 182</a
									></td
								>
							</tr>
							<tr>
								<td>Hamatora</td>
								<td>Mar 10</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?dwinelle" target="_blank"
										>Dwinelle 182</a
									></td
								>
							</tr>
							<tr>
								<td>Witch Craft Works</td>
								<td>Mar 17</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?dwinelle" target="_blank"
										>Dwinelle 182</a
									></td
								>
							</tr>
							<tr>
								<td>Nagi no Asukara</td>
								<td>Mar 31</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?dwinelle" target="_blank"
										>Dwinelle 182</a
									></td
								>
							</tr>
							<tr>
								<td>Tokyo Ravens</td>
								<td>Apr 7</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?dwinelle" target="_blank"
										>Dwinelle 182</a
									></td
								>
							</tr>
							<tr>
								<td>Sekai Seifuku: Bouryaku no Zvezda</td>
								<td>Apr 14</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?dwinelle" target="_blank"
										>Dwinelle 182</a
									></td
								>
							</tr>
							<tr>
								<td>Houzuki no Reitetsu</td>
								<td>Apr 21</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?dwinelle" target="_blank"
										>Dwinelle 182</a
									></td
								>
							</tr>
							<tr>
								<td>MEKAKUCITY ACTORS</td>
								<td>Apr 28</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?dwinelle" target="_blank"
										>Dwinelle 182</a
									></td
								>
							</tr>
							<tr>
								<td>Spring 2014 Marathon</td>
								<td>May 3</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?barrows" target="_blank"
										>Barrows 170</a
									></td
								>
							</tr>
							<tr>
								<td>Aoki Hagane no Arpeggio: Ars Nova, Outbreak Company</td>
								<td>Weeklies</td>
							</tr>
						</tbody>
					</table>
					<table class="schedule">
						<thead>
							<tr class="m-header">
								<th colspan="2">Marathon</th>
							</tr>
						</thead>
						<tbody>
							<tr class="table-header">
								<th class="time">Time</th>
								<th class="series">Series</th>
							</tr>
							<tr>
								<td>10:00 AM – 10:50 AM</td>
								<td>Kamigami no Asobi</td>
							</tr>
							<tr>
								<td>10:50 AM – 11:40 AM</td>
								<td>Wake Up Girls</td>
							</tr>
							<tr>
								<td>11:40 AM – 12:30 PM</td>
								<td>Captain Earth</td>
							</tr>
							<tr>
								<td>12:30 PM – 01:20 PM</td>
								<td>Lunch Break</td>
							</tr>
							<tr>
								<td>01:20 PM – 02:10 PM</td>
								<td>Mikakunin no Shinkoukei</td>
							</tr>
							<tr>
								<td>02:10 PM – 03:00 PM</td>
								<td>Ars Nova (ep 12), Outbreak Company (ep 12)</td>
							</tr>
							<tr>
								<td>03:00 PM – 03:50 PM</td>
								<td>Ryuugajou Nanana no Maizoukin</td>
							</tr>
							<tr>
								<td>03:50 PM – 04:40 PM</td>
								<td>Saint Young Men</td>
							</tr>
							<tr>
								<td>04:40 PM – 05:30 PM</td>
								<td>Tatami Galaxy</td>
							</tr>
							<tr>
								<td>05:30 PM – 06:20 PM</td>
								<td>Space Dandy</td>
							</tr>
							<tr>
								<td>06:20 PM – 07:10 PM</td>
								<td>Dinner Break</td>
							</tr>
							<tr>
								<td>07:10 PM – 08:00 PM</td>
								<td>No Game No Life</td>
							</tr>
							<tr>
								<td>08:00 PM – 10:00 PM</td>
								<td>Mahou Shoujo Madoka?Magica Movie 3: Hangyaku no Monogatari</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>

		<div class="archive">
			Fall 2013
			<input
				class="spoilerbutton"
				type="button"
				value="Show"
				onclick="this.value=this.value=='Show'?'Hide':'Show';"
			/>
			<div class="spoiler">
				<div>
					<table class="schedule">
						<tbody
							><tr>
								<th class="series">Series</th>
								<th class="date">Date</th>
								<th class="location">Location</th>
							</tr>

							<tr>
								<td>Kotonoha no Niwa</td>
								<td>Sep 9</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?vlsb" target="_blank"
										>VLSB 2060</a
									></td
								>
							</tr>
							<tr>
								<td>Free!</td>
								<td>Sep 16</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?vlsb" target="_blank"
										>VLSB 2060</a
									></td
								>
							</tr>
							<tr>
								<td>Kami-sama no Inai Nichiyoubi</td>
								<td>Sep 23</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?moffitt" target="_blank"
										>Moffitt 103</a
									></td
								>
							</tr>
							<tr>
								<td>Danganronpa: The Animation</td>
								<td>Oct 7</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?moffitt" target="_blank"
										>Moffitt 103</a
									></td
								>
							</tr>
							<tr>
								<td>Eden of the East</td>
								<td>Oct 14</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?moffitt" target="_blank"
										>Moffitt 103</a
									></td
								>
							</tr>
							<tr>
								<td>Watashi ga Motenai no wa Dou Kangaetemo Omaera ga Warui!</td>
								<td>Oct 21</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?moffitt" target="_blank"
										>Moffitt 103</a
									></td
								>
							</tr>
							<tr>
								<td>Another</td>
								<td>Oct 28</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?moffitt" target="_blank"
										>Moffitt 103</a
									></td
								>
							</tr>
							<tr>
								<td>Kyoukai no Kanata</td>
								<td>Nov 4</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?moffitt" target="_blank"
										>Moffitt 103</a
									></td
								>
							</tr>
							<tr>
								<td>Kill la Kill</td>
								<td>Nov 18</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?moffitt" target="_blank"
										>Moffitt 103</a
									></td
								>
							</tr>
							<tr>
								<td>Log Horizon</td>
								<td>Nov 25</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?moffitt" target="_blank"
										>Moffitt 103</a
									></td
								>
							</tr>
							<tr>
								<td>Galilei Donna</td>
								<td>Dec 2</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?moffitt" target="_blank"
										>Moffitt 103</a
									></td
								>
							</tr>
							<tr>
								<td>Fall Marathon</td>
								<td>Dec 7</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?dwinelle" target="_blank"
										>Dwinelle 219</a
									></td
								>
							</tr>
							<tr>
								<td>Genshiken Nidaime, Suisei no Gargantia</td>
								<td>Weeklies</td>
							</tr>
						</tbody>
					</table>
					<table class="schedule">
						<thead>
							<tr class="m-header">
								<th colspan="2">Marathon</th>
							</tr>
						</thead>
						<tbody>
							<tr class="table-header">
								<th class="time">Time</th>
								<th class="series">Series</th>
							</tr>
							<tr>
								<td>10:00 AM – 10:50 AM</td>
								<td>Makai Ouji: Devils and Realist</td>
							</tr>
							<tr>
								<td>10:50 AM – 11:40 AM</td>
								<td>Servant x Service</td>
							</tr>
							<tr>
								<td>11:40 AM – 12:30 PM</td>
								<td>Non Non Biyori</td>
							</tr>
							<tr>
								<td>12:30 PM – 01:20 PM</td>
								<td>Lunch Break</td>
							</tr>
							<tr>
								<td>01:20 PM – 02:10 PM</td>
								<td>Yowamushi Pedal</td>
							</tr>
							<tr>
								<td>02:10 PM – 03:00 PM</td>
								<td>Hunter x Hunter</td>
							</tr>
							<tr>
								<td>03:00 PM – 03:50 PM</td>
								<td>Outbreak Company</td>
							</tr>
							<tr>
								<td>03:50 PM – 04:40 PM</td>
								<td>Genshiken Nidaime</td>
							</tr>
							<tr>
								<td>04:40 PM – 05:30 PM</td>
								<td>Suisei no Gargantia</td>
							</tr>
							<tr>
								<td>05:30 PM – 06:20 PM</td>
								<td>Silver Spoon</td>
							</tr>
							<tr>
								<td>06:20 PM – 07:10 PM</td>
								<td>Dinner Break</td>
							</tr>
							<tr>
								<td>07:10 PM – 08:00 PM</td>
								<td>Gundam Unicorn</td>
							</tr>
							<tr>
								<td>08:00 PM – 10:00 PM</td>
								<td>Eve no Jikan</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>

		<div class="archive">
			Spring 2013
			<input
				class="spoilerbutton"
				type="button"
				value="Show"
				onclick="this.value=this.value=='Show'?'Hide':'Show';"
			/>
			<div class="spoiler">
				<div>
					<table class="schedule">
						<tbody
							><tr>
								<th class="series">Series</th>
								<th class="date">Date</th>
								<th class="location">Location</th>
							</tr>

							<tr>
								<td>From the New World</td>
								<td>Jan 28</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?barrows" target="_blank"
										>Barrows 155</a
									></td
								>
							</tr>
							<tr>
								<td>Girls und Panzer</td>
								<td>Feb 4</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?barrows" target="_blank"
										>Barrows 20</a
									></td
								>
							</tr>
							<tr>
								<td>Tamako Market</td>
								<td>Feb 11</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?moffitt" target="_blank"
										>Moffitt 101</a
									></td
								>
							</tr>
							<tr>
								<td>Psycho-Pass</td>
								<td>Feb 25</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?moffitt" target="_blank"
										>Moffitt 102</a
									></td
								>
							</tr>
							<tr>
								<td>Kotoura-san</td>
								<td>Mar 4</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?moffitt" target="_blank"
										>Moffitt 101</a
									></td
								>
							</tr>
							<tr>
								<td>Vividred Operation</td>
								<td>Mar 11</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?moffitt" target="_blank"
										>Moffitt 101</a
									></td
								>
							</tr>
							<tr>
								<td>Ore no Kanojo to Osananajimi ga Shuraba Sugiru</td>
								<td>Mar 18</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?barrows" target="_blank"
										>Barrows 56</a
									></td
								>
							</tr>
							<tr>
								<td>Musashi Gundoh</td>
								<td>Apr 1</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?moffitt" target="_blank"
										>Moffitt 101</a
									></td
								>
							</tr>
							<tr>
								<td>Zetsuen No Tempest</td>
								<td>Apr 8</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?barrows" target="_blank"
										>Barrows 170</a
									></td
								>
							</tr>
							<tr>
								<td>Sakura-sou no Pet na Kanojo</td>
								<td>Apr 15</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?moffitt" target="_blank"
										>Moffitt 101</a
									></td
								>
							</tr>
							<tr>
								<td>Mondaiji-tachi ga Isekai Kara Kuru Sou Desu yo?</td>
								<td>Apr 22</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?moffitt" target="_blank"
										>Moffitt 101</a
									></td
								>
							</tr>
							<tr>
								<td>Cuticle Detective Inaba</td>
								<td>Apr 29</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?moffitt" target="_blank"
										>Moffitt 102</a
									></td
								>
							</tr>
							<tr>
								<td>Marathon</td>
								<td>May 4</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?moffitt" target="_blank"
										>Moffitt 102</a
									></td
								>
							</tr>
							<tr>
								<td>Maoyuu Maou Yuusha, Sasami-san@Ganbaranai</td>
								<td>Weeklies</td>
							</tr>
						</tbody>
					</table>
					<table class="schedule">
						<thead>
							<tr class="m-header">
								<th colspan="2">Marathon</th>
							</tr>
						</thead>
						<tbody>
							<tr class="table-header">
								<th class="time">Time</th>
								<th class="series">Series</th>
							</tr>
							<tr>
								<td>10:00 AM – 10:50 AM</td>
								<td>Karneval</td>
							</tr>
							<tr>
								<td>10:50 AM – 11:40 AM</td>
								<td>Red Data Girl</td>
							</tr>
							<tr>
								<td>11:40 AM – 12:30 PM</td>
								<td>Yuyushiki</td>
							</tr>
							<tr>
								<td>12:30 PM – 01:20 PM</td>
								<td>Lunch break</td>
							</tr>
							<tr>
								<td>01:20 PM – 02:10 PM</td>
								<td>Hataraku Maou-sama</td>
							</tr>
							<tr>
								<td>02:10 PM – 03:00 PM</td>
								<td>Valvrave the Liberator</td>
							</tr>
							<tr>
								<td>03:00 PM – 03:50 PM</td>
								<td>Love Live!</td>
							</tr>
							<tr>
								<td>03:50 PM – 04:40 PM</td>
								<td>Shingeki no Kyojin</td>
							</tr>
							<tr>
								<td>04:40 PM – 05:30 PM</td>
								<td>Hentai Ouji to Warawanai Neko</td>
							</tr>
							<tr>
								<td>05:30 PM – 06:20 PM</td>
								<td>Suisei no Garugantia</td>
							</tr>
							<tr>
								<td>06:20 PM – 07:10 PM</td>
								<td>Dinner break</td>
							</tr>
							<tr>
								<td>07:10 PM – 08:00 PM</td>
								<td>Yahari Ore no Seishun Rabu Kome wa Machigatteiru.</td>
							</tr>
							<tr>
								<td>08:00 PM – 10:00 PM</td>
								<td>Ookami Kodomo no Ame to Yuki</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>

		<div class="archive">
			Fall 2012
			<input
				class="spoilerbutton"
				type="button"
				value="Show"
				onclick="this.value=this.value=='Show'?'Hide':'Show';"
			/>
			<div class="spoiler">
				<div>
					<table class="schedule">
						<tbody
							><tr>
								<th class="series">Series</th>
								<th class="date">Date</th>
								<th class="location">Location</th>
							</tr>

							<tr>
								<td>The Princess and the Pilot</td>
								<td>Aug 27</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?evans" target="_blank"
										>Evans 60</a
									></td
								>
							</tr>
							<tr>
								<td>Medaka Box</td>
								<td>Sep 10</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?evans" target="_blank"
										>Evans 60</a
									></td
								>
							</tr>
							<tr>
								<td>Sword Art Online</td>
								<td>Sep 17</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?barrows" target="_blank"
										>Barrows 126</a
									></td
								>
							</tr>
							<tr>
								<td>Binbougami ga!</td>
								<td>Sep 24</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?giannini" target="_blank"
										>Giannini 141</a
									></td
								>
							</tr>
							<tr>
								<td>Space Brothers</td>
								<td>Oct 1</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?barrows" target="_blank"
										>Barrows 126</a
									></td
								>
							</tr>
							<tr>
								<td>Acchi Kocchi</td>
								<td>Oct 8</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?giannini" target="_blank"
										>Giannini 141</a
									></td
								>
							</tr>
							<tr>
								<td>Kids on the Slope</td>
								<td>Oct 15</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?giannini" target="_blank"
										>Giannini 141</a
									></td
								>
							</tr>
							<tr>
								<td>Joshiraku</td>
								<td>Oct 22</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?wheeler" target="_blank"
										>Wheeler 110</a
									></td
								>
							</tr>
							<tr>
								<td>Tsuritama</td>
								<td>Oct 29</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?wheeler" target="_blank"
										>Wheeler 110</a
									></td
								>
							</tr>
							<tr>
								<td>Love, Elections &amp; Chocolate</td>
								<td>Nov 5</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?evans" target="_blank"
										>Evans 60</a
									></td
								>
							</tr>
							<tr>
								<td>Jormungand</td>
								<td>Nov 19</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?wheeler" target="_blank"
										>Wheeler 123</a
									></td
								>
							</tr>
							<tr>
								<td>Hyouka</td>
								<td>Nov 26</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?genetics" target="_blank"
										>GPB 103</a
									></td
								>
							</tr>
							<tr>
								<td>Marathon</td>
								<td>Dec 1</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?barrows" target="_blank"
										>Barrows 126</a
									></td
								>
							</tr>
							<tr>
								<td>Jinrui wa Suitaishimashita, Kokoro Connect</td>
								<td>Weeklies</td>
							</tr>
						</tbody>
					</table>
					<table class="schedule">
						<thead>
							<tr class="m-header">
								<th colspan="2">Marathon</th>
							</tr>
						</thead>
						<tbody>
							<tr class="table-header">
								<th class="time">Time</th>
								<th class="series">Series</th>
							</tr>
							<tr>
								<td>10:00 AM – 10:50 AM</td>
								<td>K</td>
							</tr>
							<tr>
								<td>10:50 AM – 11:40 AM</td>
								<td>Robotics;Notes</td>
							</tr>
							<tr>
								<td>11:40 AM – 12:30 PM</td>
								<td>Suki-tte Ii na yo</td>
							</tr>
							<tr>
								<td>12:30 PM – 01:30 PM</td>
								<td>Lunch</td>
							</tr>
							<tr>
								<td>01:30 PM – 02:20 PM</td>
								<td>Jinrui wa Suitaishimashita and Kokoro Connect</td>
							</tr>
							<tr>
								<td>02:20 PM – 03:10 PM</td>
								<td>Psycho-Pass</td>
							</tr>
							<tr>
								<td>03:10 PM – 04:00 PM</td>
								<td>Magi</td>
							</tr>
							<tr>
								<td>04:00 PM – 04:50 PM</td>
								<td>Girls und Panzer</td>
							</tr>
							<tr>
								<td>04:50 PM – 05:40 PM</td>
								<td>Blast of Tempest</td>
							</tr>
							<tr>
								<td>05:40 PM – 06:30 PM</td>
								<td>Tonari no Kaibutsu-kun</td>
							</tr>
							<tr>
								<td>06:30 PM – 07:30 PM</td>
								<td>Dinner</td>
							</tr>
							<tr>
								<td>07:30 PM – 08:20 PM</td>
								<td>JoJo's Bizarre Adventure</td>
							</tr>
							<tr>
								<td>08:20 PM – 10:00 PM</td>
								<td>Chuunibyou Demo Koi ga Shitai!</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>

		<div class="archive">
			Spring 2012
			<input
				class="spoilerbutton"
				type="button"
				value="Show"
				onclick="this.value=this.value=='Show'?'Hide':'Show';"
			/>
			<div class="spoiler">
				<div>
					<table class="schedule">
						<tbody
							><tr>
								<th class="series">Series</th>
								<th class="date">Date</th>
								<th class="location">Location</th>
							</tr>

							<tr>
								<td>Colorful</td>
								<td>Jan 30</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?barrows" target="_blank"
										>Barrows 50</a
									></td
								>
							</tr>
							<tr>
								<td>Kill Me Baby</td>
								<td>Feb 6</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?wurster" target="_blank"
										>Wurster 102</a
									></td
								>
							</tr>
							<tr>
								<td>Ano Natsu de Matteru</td>
								<td>Feb 13</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?mulford" target="_blank"
										>Mulford 159</a
									></td
								>
							</tr>
							<tr>
								<td>Inu × Boku SS</td>
								<td>Feb 27</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?vlsb" target="_blank"
										>VLSB 2060</a
									></td
								>
							</tr>
							<tr>
								<td>Another</td>
								<td>Mar 5</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?barrows" target="_blank"
										>Barrows 118</a
									></td
								>
							</tr>
							<tr>
								<td>Aquarion EVOL</td>
								<td>Mar 12</td>
								<td
									><a
										href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?etcheverry"
										target="_blank">Etcheverry 3108</a
									></td
								>
							</tr>
							<tr>
								<td>Senki Zesshou Symphogear</td>
								<td>Mar 19</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?vlsb" target="_blank"
										>VLSB 2040</a
									></td
								>
							</tr>
							<tr>
								<td>Rinne no Lagrange</td>
								<td>Apr 2</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?barrows" target="_blank"
										>Barrows 166</a
									></td
								>
							</tr>
							<tr>
								<td>Area no Kishi</td>
								<td>Apr 9</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?barrows" target="_blank"
										>Barrows 166</a
									></td
								>
							</tr>
							<tr>
								<td>Mouretsu Pirates</td>
								<td>Apr 16</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?moffitt" target="_blank"
										>Moffitt 101</a
									></td
								>
							</tr>
							<tr>
								<td>Brave 10</td>
								<td>Apr 23</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?barrows" target="_blank"
										>Barrows 122</a
									></td
								>
							</tr>
							<tr>
								<td>Marathon</td>
								<td>Apr 29</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?moffitt" target="_blank"
										>Moffitt 101</a
									></td
								>
							</tr>
							<tr>
								<td>Daily Lives of High School Boys, Papa no Iu Koto wo Kikinasai!</td>
								<td>Weeklies</td>
							</tr>
						</tbody>
					</table>
					<table class="schedule">
						<thead>
							<tr class="m-header">
								<th colspan="2">Marathon</th>
							</tr>
						</thead>
						<tbody>
							<tr class="table-header">
								<th class="time">Time</th>
								<th class="series">Series</th>
							</tr>
							<tr>
								<td>10:00 AM – 10:50 AM</td>
								<td>Hiiro no Kakera</td>
							</tr>
							<tr>
								<td>10:50 AM – 11:40 AM</td>
								<td>Tasogare Otome x Amnesia</td>
							</tr>
							<tr>
								<td>11:40 AM – 12:30 PM</td>
								<td>Polar Bear Café</td>
							</tr>
							<tr>
								<td>12:30 PM – 01:30 PM</td>
								<td>Lunch, with food!</td>
							</tr>
							<tr>
								<td>01:30 PM – 02:20 PM</td>
								<td>Weeklies</td>
							</tr>
							<tr>
								<td>02:20 PM – 03:10 PM</td>
								<td>Kuroko's Basketball</td>
							</tr>
							<tr>
								<td>03:10 PM – 04:00 PM</td>
								<td>Haiyore! Nyaruko-san</td>
							</tr>
							<tr>
								<td>04:00 PM – 04:50 PM</td>
								<td>Upotte!!</td>
							</tr>
							<tr>
								<td>04:50 PM – 05:40 PM</td>
								<td>Jormungand</td>
							</tr>
							<tr>
								<td>05:40 PM – 06:30 PM</td>
								<td>Sankarea</td>
							</tr>
							<tr>
								<td>06:30 PM – 07:30 PM</td>
								<td>Dinner break (raffle in the last 10 minutes)</td>
							</tr>
							<tr>
								<td>07:30 PM – 08:20 PM</td>
								<td>Accel World</td>
							</tr>
							<tr>
								<td>08:20 PM – 10:00 PM</td>
								<td>Hoshi wo Ou Kodomo</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>

		<div class="archive">
			Fall 2011
			<input
				class="spoilerbutton"
				type="button"
				value="Show"
				onclick="this.value=this.value=='Show'?'Hide':'Show';"
			/>
			<div class="spoiler">
				<div>
					<table class="schedule">
						<tbody
							><tr>
								<th class="series">Series</th>
								<th class="date">Date</th>
								<th class="location">Location</th>
							</tr>

							<tr>
								<td>Redline</td>
								<td>Aug 29</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?vlsb" target="_blank"
										>VLSB 2060</a
									></td
								>
							</tr>
							<tr>
								<td>Mawaru Penguin Drum</td>
								<td>Sep 12</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?dwinelle" target="_blank"
										>Dwinelle 243</a
									></td
								>
							</tr>
							<tr>
								<td>Hanasaku Iroha</td>
								<td>Sep 19</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?morgan" target="_blank"
										>Morgan 101</a
									></td
								>
							</tr>
							<tr>
								<td>Kamisama Dolls</td>
								<td>Sep 26</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?dwinelle" target="_blank"
										>Dwinelle 160</a
									></td
								>
							</tr>
							<tr>
								<td>Hyouge Mono</td>
								<td>Oct 3</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?vlsb" target="_blank"
										>VLSB 2060</a
									></td
								>
							</tr>
							<tr>
								<td>The Mystic Archives of Dantalian</td>
								<td>Oct 10</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?evans" target="_blank"
										>Evans 60</a
									></td
								>
							</tr>
							<tr>
								<td>Usagi Drop</td>
								<td>Oct 17</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?vlsb" target="_blank"
										>VLSB 2060</a
									></td
								>
							</tr>
							<tr>
								<td>The IDOLM@STER</td>
								<td>Oct 24</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?vlsb" target="_blank"
										>VLSB 2060</a
									></td
								>
							</tr>
							<tr>
								<td>C³</td>
								<td>Oct 31</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?evans" target="_blank"
										>Evans 60</a
									></td
								>
							</tr>
							<tr>
								<td>Mobile Suit Gundam AGE</td>
								<td>Nov 7</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?barrows" target="_blank"
										>Barrows 166</a
									></td
								>
							</tr>
							<tr>
								<td>Phi Brain</td>
								<td>Nov 14</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?barrows" target="_blank"
										>Barrows 155</a
									></td
								>
							</tr>
							<tr>
								<td>Mirai Nikki</td>
								<td>Nov 21</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?mulford" target="_blank"
										>Mulford 159</a
									></td
								>
							</tr>
							<tr>
								<td>Kyoukai Senjou no Horizon</td>
								<td>Nov 28</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?morgan" target="_blank"
										>Morgan 101</a
									></td
								>
							</tr>
							<tr>
								<td>Marathon</td>
								<td>Dec 3</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?moffitt" target="_blank"
										>Moffitt 101</a
									></td
								>
							</tr>
							<tr>
								<td
									>Ano Hi Mita Hana no Namae o Bokutachi wa Mada Shiranai, Boku wa Tomodachi ga
									Sukunai, Denpa Onna to Seishun Otoko</td
								>
								<td>Weeklies</td>
							</tr>
						</tbody>
					</table>
					<table class="schedule">
						<thead>
							<tr class="m-header">
								<th colspan="2">Marathon</th>
							</tr>
						</thead>
						<tbody>
							<tr class="table-header">
								<th class="time">Time</th>
								<th class="series">Series</th>
							</tr>
							<tr>
								<td>10:00 AM – 10:50 AM</td>
								<td>Kimi to Boku</td>
							</tr>
							<tr>
								<td>10:50 AM – 11:40 AM</td>
								<td>Maji de Watashi ni Koi Shinasai!!</td>
							</tr>
							<tr>
								<td>11:40 AM – 12:30 PM</td>
								<td>Mayo Chiki!</td>
							</tr>
							<tr>
								<td>12:30 PM – 01:30 PM</td>
								<td>Lunch + food and raffle</td>
							</tr>
							<tr>
								<td>01:30 PM – 02:20 PM</td>
								<td>No. 6</td>
							</tr>
							<tr>
								<td>02:20 PM – 03:10 PM</td>
								<td>Persona 4</td>
							</tr>
							<tr>
								<td>03:10 PM – 04:00 PM</td>
								<td>Uta no Prince-sama -- Maji Love 1000%</td>
							</tr>
							<tr>
								<td>04:00 PM – 04:50 PM</td>
								<td>Un-Go</td>
							</tr>
							<tr>
								<td>04:50 PM – 05:40 PM</td>
								<td>Ikoko Meiro no Croisee</td>
							</tr>
							<tr>
								<td>05:40 PM – 06:30 PM</td>
								<td>Ben-To</td>
							</tr>
							<tr>
								<td>06:30 PM – 07:30 PM</td>
								<td>Dinner</td>
							</tr>
							<tr>
								<td>07:30 PM – 08:20 PM</td>
								<td>Kami-sama no Memo-chou</td>
							</tr>
							<tr>
								<td>08:20 PM – 09:10 PM</td>
								<td>Ro-Kyu-Bu!</td>
							</tr>
							<tr>
								<td>09:10 PM – 10:00 PM</td>
								<td>Guilty Crown</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>

		<div class="archive">
			Spring 2011
			<input
				class="spoilerbutton"
				type="button"
				value="Show"
				onclick="this.value=this.value=='Show'?'Hide':'Show';"
			/>
			<div class="spoiler">
				<div>
					<table class="schedule">
						<tbody
							><tr>
								<th class="series">Series</th>
								<th class="date">Date</th>
								<th class="location">Location</th>
							</tr>

							<tr>
								<td>Shinryaku! Ika Musume</td>
								<td>Jan 24</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?barrows" target="_blank"
										>Barrows 166</a
									></td
								>
							</tr>
							<tr>
								<td>Yakumo</td>
								<td>Jan 31</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?vlsb" target="_blank"
										>VLSB 2040</a
									></td
								>
							</tr>
							<tr>
								<td>Beelzebub</td>
								<td>Feb 7</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?wurster" target="_blank"
										>Wurster 102</a
									></td
								>
							</tr>
							<tr>
								<td>Dragon Crisis!</td>
								<td>Feb 14</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?evans" target="_blank"
										>Evans 60</a
									></td
								>
							</tr>
							<tr>
								<td>Level E</td>
								<td>Feb 28</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?evans" target="_blank"
										>Evans 60</a
									></td
								>
							</tr>
							<tr>
								<td>Gosick</td>
								<td>Mar 7</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?evans" target="_blank"
										>Evans 60</a
									></td
								>
							</tr>
							<tr>
								<td>Kore wa Zombie Desu ka?</td>
								<td>Mar 14</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?evans" target="_blank"
										>Evans 60</a
									></td
								>
							</tr>
							<tr>
								<td>Tamayura &amp; Megane na Kanojo</td>
								<td>Mar 28</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?wurster" target="_blank"
										>Wurster 102</a
									></td
								>
							</tr>
							<tr>
								<td>Yumekui Merry</td>
								<td>Apr 4</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?evans" target="_blank"
										>Evans 60</a
									></td
								>
							</tr>
							<tr>
								<td>Suite PreCure</td>
								<td>Apr 11</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?evans" target="_blank"
										>Evans 60</a
									></td
								>
							</tr>
							<tr>
								<td>Break Blade films #1 and #2</td>
								<td>Apr 18</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?vlsb" target="_blank"
										>VLSB 2060</a
									></td
								>
							</tr>
							<tr>
								<td>Rainbow Gate</td>
								<td>Apr 25</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?vlsb" target="_blank"
										>VLSB 2060</a
									></td
								>
							</tr>
							<tr>
								<td>Marathon</td>
								<td>Apr 30</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?morgan" target="_blank"
										>Morgan 101</a
									></td
								>
							</tr>
							<tr>
								<td>Mahou Shoujo Madoka Magika, Wandering Son</td>
								<td>Weeklies</td>
							</tr>
						</tbody>
					</table>
					<table class="schedule">
						<thead>
							<tr class="m-header">
								<th colspan="2">Marathon</th>
							</tr>
						</thead>
						<tbody>
							<tr class="table-header">
								<th class="time">Time</th>
								<th class="series">Series</th>
							</tr>
							<tr>
								<td>10:00 AM – 10:50 AM</td>
								<td>Hidan no Aria</td>
							</tr>
							<tr>
								<td>10:50 AM – 11:40 AM</td>
								<td>Ano Hi Mita Hana no Namae o Bokutachi wa Mada Shiranai</td>
							</tr>
							<tr>
								<td>11:40 AM – 12:30 PM</td>
								<td>Dog Days</td>
							</tr>
							<tr>
								<td>12:30 PM – 01:20 PM</td>
								<td>Lunch break</td>
							</tr>
							<tr>
								<td>01:20 PM – 02:10 PM</td>
								<td>Dororon Enma-kun MeeraMera</td>
							</tr>
							<tr>
								<td>02:10 PM – 03:00 PM</td>
								<td>Steins;Gate</td>
							</tr>
							<tr>
								<td>03:00 PM – 03:50 PM</td>
								<td>Nichijou</td>
							</tr>
							<tr>
								<td>03:50 PM – 04:40 PM</td>
								<td>Hanasaku Iroha</td>
							</tr>
							<tr>
								<td>04:40 PM – 05:30 PM</td>
								<td>Deadman Wonderland</td>
							</tr>
							<tr>
								<td>05:30 PM – 06:20 PM</td>
								<td>Tiger &amp; Bunny</td>
							</tr>
							<tr>
								<td>06:20 PM – 07:10 PM</td>
								<td>Dinner break</td>
							</tr>
							<tr>
								<td>07:10 PM – 08:00 PM</td>
								<td>Denpa Onna to Seishun Otoko</td>
							</tr>
							<tr>
								<td>08:00 PM – 10:00 PM</td>
								<td>Welcome to the Space Show</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>

		<div class="archive">
			Fall 2010
			<input
				class="spoilerbutton"
				type="button"
				value="Show"
				onclick="this.value=this.value=='Show'?'Hide':'Show';"
			/>
			<div class="spoiler">
				<div>
					<table class="schedule">
						<tbody
							><tr>
								<th class="series">Series</th>
								<th class="date">Date</th>
								<th class="location">Location</th>
							</tr>

							<tr>
								<td>Giant Killing</td>
								<td>Aug 30</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?vlsb" target="_blank"
										>VLSB 2060</a
									></td
								>
							</tr>
							<tr>
								<td>Cat Shit One and Black Rock Shooter</td>
								<td>Sep 13</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?mulford" target="_blank"
										>Mulford 159</a
									></td
								>
							</tr>
							<tr>
								<td>Angel Beats</td>
								<td>Sep 20</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?vlsb" target="_blank"
										>VLSB 2040</a
									></td
								>
							</tr>
							<tr>
								<td>Amagami SS</td>
								<td>Sep 27</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?evans" target="_blank"
										>Evans 60</a
									></td
								>
							</tr>
							<tr>
								<td>Senkou no Night Raid</td>
								<td>Oct 4</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?giannini" target="_blank"
										>Giannini 141</a
									></td
								>
							</tr>
							<tr>
								<td>Hakuoki</td>
								<td>Oct 11</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?vlsb" target="_blank"
										>VLSB 2040</a
									></td
								>
							</tr>
							<tr>
								<td>Gag Manga Biyori</td>
								<td>Oct 18</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?barrows" target="_blank"
										>Barrows 126</a
									></td
								>
							</tr>
							<tr>
								<td>Occult Academy</td>
								<td>Oct 25</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?vlsb" target="_blank"
										>VLSB 2040</a
									></td
								>
							</tr>
							<tr>
								<td>Bakuman</td>
								<td>Nov 1</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?vlsb" target="_blank"
										>VLSB 2060</a
									></td
								>
							</tr>
							<tr>
								<td>Soredemo Machi wa Mawatteiru</td>
								<td>Nov 8</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?wheeler" target="_blank"
										>Wheeler 220</a
									></td
								>
							</tr>
							<tr>
								<td>Star Driver</td>
								<td>Nov 15</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?vlsb" target="_blank"
										>VLSB 2050</a
									></td
								>
							</tr>
							<tr>
								<td>Otome Youkai Zakuro</td>
								<td>Nov 22</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?evans" target="_blank"
										>Evans 60</a
									></td
								>
							</tr>
							<tr>
								<td>The World God Only Knows</td>
								<td>Nov 29</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?vlsb" target="_blank"
										>VLSB 2060</a
									></td
								>
							</tr>
							<tr>
								<td>Marathon</td>
								<td>Dec 5</td>
								<td
									><a href="http://www.berkeley.edu/map/3dmap/3dmap.shtml?moffitt" target="_blank"
										>Moffitt 101</a
									></td
								>
							</tr>
							<tr>
								<td>Arakawa Under the Bridge, Working!!</td>
								<td>Weeklies</td>
							</tr>
						</tbody>
					</table>
					<table class="schedule">
						<thead>
							<tr class="m-header">
								<th colspan="2">Marathon</th>
							</tr>
						</thead>
						<tbody>
							<tr class="table-header">
								<th class="time">Time</th>
								<th class="series">Series</th>
							</tr>
							<tr>
								<td>10:00 AM – 10:50 AM</td>
								<td>Harutoki 3 OVA</td>
							</tr>
							<tr>
								<td>10:50 AM – 11:40 AM</td>
								<td>Togainu no Chi</td>
							</tr>
							<tr>
								<td>11:40 AM – 12:30 PM</td>
								<td>Shinryaku! Ika Musume</td>
							</tr>
							<tr>
								<td>12:30 PM – 01:20 PM</td>
								<td>Lunch Break</td>
							</tr>
							<tr>
								<td>01:20 PM – 02:10 PM</td>
								<td>MM!</td>
							</tr>
							<tr>
								<td>02:10 PM – 03:00 PM</td>
								<td>Seitokai no Yakuindomo</td>
							</tr>
							<tr>
								<td>03:00 PM – 03:50 PM</td>
								<td>Tamayura</td>
							</tr>
							<tr>
								<td>03:50 PM – 04:40 PM</td>
								<td>Milky Holmes</td>
							</tr>
							<tr>
								<td>04:40 PM – 05:30 PM</td>
								<td>Psychic Detective Yakumo</td>
							</tr>
							<tr>
								<td>05:30 PM – 06:20 PM</td>
								<td>Ore no Imouto ga Konna ni Kawaii Wake ga Nai</td>
							</tr>
							<tr>
								<td>06:20 PM – 07:10 PM</td>
								<td>Dinner Break</td>
							</tr>
							<tr>
								<td>07:10 PM – 08:00 PM</td>
								<td>Kuragehime</td>
							</tr>
							<tr>
								<td>08:00 PM – 10:00 PM</td>
								<td>Bungaku Shoujo (Movie)</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>

		<div class="archive" style="display:none">
			semester
			<input
				class="spoilerbutton"
				type="button"
				value="Show"
				onclick="this.value=this.value=='Show'?'Hide':'Show';"
			/>
			<div class="spoiler">
				<div>
					<table class="schedule" />
					<table class="schedule">
						<thead>
							<tr class="m-header">
								<th colspan="2">Marathon</th>
							</tr>
						</thead>
						<tbody>
							<tr class="table-header">
								<th class="time">Time</th>
								<th class="series">Series</th>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
	<div id="footer">&copy; 2021 Cal Animage Alpha. All Rights Reserved.</div>
</div>
