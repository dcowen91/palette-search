var distance = require('euclidean-distance');

const invalidHex = hex => !new RegExp(`^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$`).test(hex);

const invalidHexError = badHex => 'invalid hex color provided: ' + badHex;

function buildRgb(hexString) {
	return [
		parseInt(hexString.substring(0, 2), 16),
		parseInt(hexString.substring(2, 4), 16),
		parseInt(hexString.substring(2, 4), 16)
	];
}

function paletteSearch(inputColor, palette) {
	if (invalidHex(inputColor)) {
		return invalidHexError(inputColor);
	}

	const inputHex = inputColor.replace('#', '');
	const inputRgb = buildRgb(inputHex);

	let shortest = -1;
	let result = 'no colors found in given json file';

	for (const colorName in palette) {
		const colorHex = palette[colorName];
		if (!invalidHex(colorHex)) {
			const hexString = colorHex.replace('#', '');
			currentRgb = buildRgb(hexString);

			const diff = distance(inputRgb, currentRgb);
			if (shortest < 0 || diff < shortest) {
				result = colorName;
				shortest = diff;
			}
		}
	}

	return result;
}

module.exports = { paletteSearch };
