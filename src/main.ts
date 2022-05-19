import "./style.css";
import QRCodeStyling from "qr-code-styling";
import { jsPDF } from "jspdf";
import "svg2pdf.js";

const id = "IX101-68049-56377";
const certificateLink = `https://123456.com/de/zertifikate/${id}`;

const qrcode = new QRCodeStyling({
	data: certificateLink,
	type: "svg",
	width: 300,
	height: 300,
	image: "/drop.svg",
	imageOptions: { hideBackgroundDots: true, margin: 8 },
	dotsOptions: { type: "dots", color: "#034470" },
	backgroundOptions: { color: "#ffffff00" },
	cornersSquareOptions: { type: "extra-rounded", color: "#034470" },
	cornersDotOptions: { type: "dot", color: "#034470" },
	qrOptions: {
		typeNumber: 0,
		mode: "Byte",
		errorCorrectionLevel: "H",
	},
});

const doc = new jsPDF({
	orientation: "landscape",
	unit: "cm",
	format: [16, 4.5],
});

// Preview
const preview = document.getElementById("preview") as HTMLImageElement;

preview.src = doc.output("bloburi").toString();

// Downloading
const downloadPDFButton = document.getElementById(
	"download-pdf"
) as HTMLButtonElement;

downloadPDFButton.addEventListener(
	"click",
	(_) => doc.save(`${id}.pdf`)
	// console.log(doc.output("dataurlstring", { filename: `${id}.pdf` }))
);
