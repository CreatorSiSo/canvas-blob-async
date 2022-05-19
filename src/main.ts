import "./style.css";
import QRCodeStyling from "qr-code-styling";

const labelLink = "https://co2unt.com/de/zertifikate/IX101-68049-56377";

const qrcode = new QRCodeStyling({
	data: labelLink,
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

// Preview
{
	const previewElement = document.getElementById("preview") as HTMLDivElement;
	qrcode.append(previewElement);
}

// Downloading
{
	const downloadSVGButton = document.getElementById(
		"download-svg"
	) as HTMLButtonElement;

	downloadSVGButton.addEventListener("click", (_) =>
		qrcode.download({ name: "IX101-68049-56377", extension: "svg" })
	);

	// const downloadPDFButton = document.getElementById(
	// 	"download-pdf"
	// ) as HTMLButtonElement;

	// downloadPDFButton.addEventListener("click", (_) =>
	// 	qrcode.download({ name: "IX101-68049-56377", extension: "svg" })
	// );
}
