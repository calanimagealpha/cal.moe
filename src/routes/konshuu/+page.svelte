<svelte:head>
	<title>CAA - Konshuu</title>
	<link rel="stylesheet" type="text/css" href="/assets/style/asset-style.css" />
    <script type="text/javascript" src="/assets/js/pdfjs-dist/build/pdf.js"></script>
    <script defer type="text/javascript" src="/assets/js/konshuu.js?v=1.0.0"></script>
</svelte:head>

<div id="konshuu-header">
	<div id="konshuu-title">Konshuu!</div>
	<div id="konshuu-dropdown">
		<button id="konshuu-dropdown-button" />
		<div id="konshuu-dropdown-content">
			<!-- Add NEW Konshuu Here! !-->
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/55/10.pdf')">Volume 55 Issue 10</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/55/9.pdf')">Volume 55 Issue 9</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/55/8.pdf')">Volume 55 Issue 8</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/55/7.pdf')">Volume 55 Issue 7</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/55/6.pdf')">Volume 55 Issue 6</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/55/5.pdf')">Volume 55 Issue 5</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/55/4.pdf')">Volume 55 Issue 4</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/55/3.5.pdf')">Volume 55 Issue 3.5</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/55/anthology.pdf')">Volume 55 Anthology</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/55/3.pdf')">Volume 55 Issue 3</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/55/2.pdf')">Volume 55 Issue 2</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/55/1.pdf')">Volume 55 Issue 1</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/54/8.pdf')">Volume 54 Issue 8</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/54/7.pdf')">Volume 54 Issue 7</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/54/6.pdf')">Volume 54 Issue 6</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/54/5.5.pdf')">Volume 54 Issue 5.5</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/54/5.pdf')">Volume 54 Issue 5</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/54/4.pdf')">Volume 54 Issue 4</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/54/3.pdf')">Volume 54 Issue 3</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/54/2.pdf')">Volume 54 Issue 2</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/54/1.pdf')">Volume 54 Issue 1</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/53/7.pdf')">Volume 53 Issue 7</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/53/6.pdf')">Volume 53 Issue 6</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/53/5.pdf')">Volume 53 Issue 5</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/53/4.pdf')">Volume 53 Issue 4</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/53/3.pdf')">Volume 53 Issue 3</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/53/2.pdf')">Volume 53 Issue 2</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/53/1.pdf')">Volume 53 Issue 1</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/52/anthology.pdf')">Volume 52 Anthology</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/52/4.pdf')">Volume 52 Issue 4</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/52/3.pdf')">Volume 52 Issue 3</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/52/2.pdf')">Volume 52 Issue 2</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/52/1.pdf')">Volume 52 Issue 1</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/51/13.pdf')">Volume 51 Issue 13</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/51/12.pdf')">Volume 51 Issue 12</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/51/11.pdf')">Volume 51 Issue 11</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/51/10.pdf')">Volume 51 Issue 10</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/51/9.pdf')">Volume 51 Issue 9</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/51/8.pdf')">Volume 51 Issue 8</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/51/7.pdf')">Volume 51 Issue 7</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/51/6.pdf')">Volume 51 Issue 6</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/51/5.pdf')">Volume 51 Issue 5</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/51/4.pdf')">Volume 51 Issue 4</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/51/3.pdf')">Volume 51 Issue 3</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/51/2.pdf')">Volume 51 Issue 2</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/51/1.pdf')">Volume 51 Issue 1</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/50/10.pdf')">Volume 50 Issue 10</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/50/9.pdf')">Volume 50 Issue 9</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/50/8.pdf')">Volume 50 Issue 8</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/50/7.pdf')">Volume 50 Issue 7</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/50/6.pdf')">Volume 50 Issue 6</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/50/5.pdf')">Volume 50 Issue 5</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/50/4.pdf')">Volume 50 Issue 4</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/50/3.pdf')">Volume 50 Issue 3</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/50/2.pdf')">Volume 50 Issue 2</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/50/1.pdf')">Volume 50 Issue 1</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/50/anth.pdf')">Volume 49 Anthology</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/49/12.pdf')">Volume 49 Issue 12</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/49/11.pdf')">Volume 49 Issue 11</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/49/10.pdf')">Volume 49 Issue 10</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/49/9.pdf')">Volume 49 Issue 9</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/49/8.pdf')">Volume 49 Issue 8</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/49/7.pdf')">Volume 49 Issue 7</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/49/6.pdf')">Volume 49 Issue 6</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/49/5.pdf')">Volume 49 Issue 5</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/49/4.pdf')">Volume 49 Issue 4</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/49/3.pdf')">Volume 49 Issue 3</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/49/2.pdf')">Volume 49 Issue 2</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/49/1.pdf')">Volume 49 Issue 1</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/48/13.pdf')">Volume 48 Issue 13</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/48/12.pdf')">Volume 48 Issue 12</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/48/11.pdf')">Volume 48 Issue 11</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/48/10.pdf')">Volume 48 Issue 10</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/48/9.pdf')">Volume 48 Issue 9</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/48/8.pdf')">Volume 48 Issue 8</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/48/7.pdf')">Volume 48 Issue 7</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/48/6.pdf')">Volume 48 Issue 6</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/48/5.pdf')">Volume 48 Issue 5</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/48/4.pdf')">Volume 48 Issue 4</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/48/3.pdf')">Volume 48 Issue 3</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/48/2.pdf')">Volume 48 Issue 2</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/48/1.pdf')">Volume 48 Issue 1</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/47/anth.pdf')">Volume 47 Anthology</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/47/11.pdf')">Volume 47 Issue 11</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/47/10.pdf')">Volume 47 Issue 10</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/47/9.pdf')">Volume 47 Issue 9</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/47/8.pdf')">Volume 47 Issue 8</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/47/7.pdf')">Volume 47 Issue 7</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/47/6.pdf')">Volume 47 Issue 6</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/47/5.pdf')">Volume 47 Issue 5</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/47/4.pdf')">Volume 47 Issue 4</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/47/3.pdf')">Volume 47 Issue 3</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/47/2.pdf')">Volume 47 Issue 2</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/47/1.pdf')">Volume 47 Issue 1</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/46/12.pdf')">Volume 46 Issue 12</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/46/11.pdf')">Volume 46 Issue 11</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/46/10.pdf')">Volume 46 Issue 10</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/46/9.pdf')">Volume 46 Issue 9</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/46/8.pdf')">Volume 46 Issue 8</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/46/7.pdf')">Volume 46 Issue 7</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/46/6.pdf')">Volume 46 Issue 6</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/46/5.pdf')">Volume 46 Issue 5</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/46/4.pdf')">Volume 46 Issue 4</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/46/3.pdf')">Volume 46 Issue 3</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/46/2.pdf')">Volume 46 Issue 2</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/46/1.pdf')">Volume 46 Issue 1</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/45/6.pdf')">Volume 45 Issue 6</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/45/5.pdf')">Volume 45 Issue 5</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/45/4.pdf')">Volume 45 Issue 4</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/45/3.pdf')">Volume 45 Issue 3</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/45/2.pdf')">Volume 45 Issue 2</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/45/1.pdf')">Volume 45 Issue 1</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/44/8.pdf')">Volume 44 Issue 8</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/44/7.pdf')">Volume 44 Issue 7</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/44/6.pdf')">Volume 44 Issue 6</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/44/5.pdf')">Volume 44 Issue 5</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/44/4.pdf')">Volume 44 Issue 4</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/44/3.pdf')">Volume 44 Issue 3</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/44/2.pdf')">Volume 44 Issue 2</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/44/1.pdf')">Volume 44 Issue 1</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/43/12.pdf')">Volume 43 Issue 12</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/43/11.pdf')">Volume 43 Issue 11</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/43/10.pdf')">Volume 43 Issue 10</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/43/9.pdf')">Volume 43 Issue 9</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/43/8.pdf')">Volume 43 Issue 8</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/43/7.pdf')">Volume 43 Issue 7</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/43/6.pdf')">Volume 43 Issue 6</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/43/5.pdf')">Volume 43 Issue 5</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/43/4.pdf')">Volume 43 Issue 4</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/43/3.pdf')">Volume 43 Issue 3</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/43/2.pdf')">Volume 43 Issue 2</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/43/1.pdf')">Volume 43 Issue 1</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/42/13.pdf')">Volume 42 Issue 13</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/42/12.pdf')">Volume 42 Issue 12</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/42/11.pdf')">Volume 42 Issue 11</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/42/10.pdf')">Volume 42 Issue 10</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/42/9.pdf')">Volume 42 Issue 9</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/42/8.pdf')">Volume 42 Issue 8</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/42/7.pdf')">Volume 42 Issue 7</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/42/6.pdf')">Volume 42 Issue 6</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/42/5.pdf')">Volume 42 Issue 5</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/42/4.pdf')">Volume 42 Issue 4</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/42/3.pdf')">Volume 42 Issue 3</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/42/2.pdf')">Volume 42 Issue 2</button>
			<button onclick="renderPdf(this, '/assets/konshuu-pdf/42/1.pdf')">Volume 42 Issue 1</button>
		</div>
	</div>
	<div id="konshuu-return">
		<a href="../">Back to Main Site</a>
	</div>
</div>
<div id="konshuu-reader-left" onclick="prevPage()" />
<div id="konshuu-reader-right" onclick="nextPage()" />
<div id="konshuu-reader-webtoon" />
<div id="konshuu-reader">
	<canvas class="canvasclass" id="konshuu-reader-canvas" />
</div>

<button class="zoomin zbutton" type="button" onclick="zoomin()">+</button>
<button class="zoomout zbutton" type="button" onclick="zoomout()">-</button>
<button class="webtoonLayout zbutton" type="button" onclick="webtoonLayout()">wt</button>