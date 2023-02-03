import * as pdfjsLib from 'pdfjs-dist';
import { base } from '$app/paths';
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

export type Issue = {
	volume: string;
	issue: string;
};

export async function loadPdf(issue: Issue) {
	return await pdfjsLib.getDocument(`${base}/assets/konshuu/${issue.volume}/${issue.issue}.pdf`).promise;
}

export async function renderPage(
	ctx: CanvasRenderingContext2D,
	pdf: pdfjsLib.PDFDocumentProxy,
	pageNumber: number
) {
	const page = await pdf.getPage(pageNumber);

	const viewport = page.getViewport({ scale: 1.0 });
	const canvasWidth = +getComputedStyle(ctx.canvas).width.slice(0, -2);
	const scale = canvasWidth / viewport.width;

	const newViewport = viewport.clone({ scale: scale });

	ctx.canvas.width = newViewport.width;
	ctx.canvas.height = newViewport.height;

	await page.render({
		canvasContext: ctx,
		viewport: newViewport
	}).promise;
}
