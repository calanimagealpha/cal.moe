<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import { type Issue, loadPdf, renderPage } from '$lib/konshuu';
	import type { PDFDocumentProxy } from 'pdfjs-dist/types/src/display/api';

	let pdfs: Issue[] = [];
	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;

	let currentIssue: Issue | undefined;

	let pdf: PDFDocumentProxy;
	let page: number;

	async function prev() {
		page -= 1;
		await renderPage(ctx, pdf, page);
	}

	async function next() {
		page += 1;
		await renderPage(ctx, pdf, page);
	}

	$: currentIssue && load(currentIssue);

	async function load(issue: Issue) {
		pdf = await loadPdf(issue);
		page = 1;

		await renderPage(ctx, pdf, page);
	}

	onMount(async () => {
		ctx = canvas.getContext('2d')!!;

		const res = await fetch(`${base}/assets/konshuu/index.php`);

		pdfs = await res.json();
		pdfs.sort((a, b) => {
			return (
				+b.volume - +a.volume || (isNaN(+b.issue) ? 1 : isNaN(+a.issue) ? -1 : +b.issue - +a.issue)
			);
		});

		currentIssue = pdfs[0];
	});
</script>

<svelte:head>
	<title>CAA - Konshuu</title>
</svelte:head>

<nav
	class="sticky top-0 flex flex-col md:flex-row w-full space-y-2 md:space-y-0 md:items-center md:justify-between bg-black p-4 text-white"
>
	{#if currentIssue}
		<a href={base} class="text-3xl">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="h-6 w-6 inline-block align-[-4px]"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
			</svg>
			Konshuu!
		</a>
		<div class="group">
			<p class="text-xl h-full md:text-2xl">
				Volume {currentIssue.volume} Issue {currentIssue.issue}
			</p>
			<div
				class="absolute left-0 md:left-auto md:right-0 hidden max-h-80 w-80 flex-col divide-y overflow-y-auto bg-black/90 text-xl group-hover:flex"
			>
				{#each pdfs as { volume, issue }}
					<button on:click={async () => await load({ volume: volume, issue: issue })} class="p-4"
						>Volume {volume} {!isNaN(+issue) ? `Issue ${issue}` : 'Anthology'}</button
					>
				{/each}
			</div>
		</div>
	{:else}
		<p class="flex-grow">Loading</p>
	{/if}
</nav>
<div class="flex min-h-screen w-full items-center justify-center">
	<canvas class="w-full" bind:this={canvas} />
	<button
		class:invisible={page <= 1}
		class="fixed left-0 top-1/2 mx-4 rounded-full p-2 hover:bg-gray-400/50"
		on:click={prev}
		><svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="h-6 w-6"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
		</svg>
	</button>
	<button
		class:invisible={page >= pdf?.numPages}
		class="fixed right-0 top-1/2 mx-4 rounded-full p-2 hover:bg-gray-400/50"
		on:click={next}
		><svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="h-6 w-6"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
		</svg>
	</button>
</div>
