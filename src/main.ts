import "./style.css";
import QRCodeStyling from "qr-code-styling";

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
const previewQrcode = document.getElementById("preview");
if (previewQrcode) {
	qrcode.append(previewQrcode);
}

// Downloading
const downloadSVGButton = document.getElementById(
	"download-svg"
) as HTMLButtonElement;

downloadSVGButton.addEventListener("click", (_) =>
	qrcode.download({ name: id, extension: "svg" })
);
