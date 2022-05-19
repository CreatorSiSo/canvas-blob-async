import "./style.css";
import PDFDocument from "pdfkit";

const app = document.querySelector<HTMLDivElement>("#app")!;

async function getBlobFromCanvas(
	canvasElement: HTMLCanvasElement,
	mime = "image/jpeg",
	quality = 0.9
) {
	return new Promise<Blob>((resolve) => {
		canvasElement.toBlob(
			(blob) => (blob ? resolve(blob) : undefined),
			mime,
			quality
		);
	});
}

const canvas = document.querySelector("canvas")!;
const canvasWidth = canvas.width;
const ctx = canvas.getContext("2d");
if (ctx) {
	ctx.beginPath();
	ctx.moveTo(canvasWidth / 2, 0);
	ctx.lineTo(canvasWidth, canvasWidth);
	ctx.lineTo(0, canvasWidth);
	ctx.closePath();
	ctx.fillStyle = "yellow";
	ctx.fill();
}

const blob = await getBlobFromCanvas(canvas, "application/pdf");
console.log(blob, URL.createObjectURL(blob));

const blobAnchor = app.appendChild(document.createElement("a"));
blobAnchor.textContent = URL.createObjectURL(blob);
blobAnchor.href = URL.createObjectURL(blob);
blobAnchor.target = "_blank";

const doc = new PDFDocument();

console.log(doc);
