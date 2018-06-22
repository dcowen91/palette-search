
var distance = require('euclidean-distance')

function buildRgb(hexString) {
	return [parseInt(hexString.substring(0, 2), 16), parseInt(hexString.substring(2, 4), 16), parseInt(hexString.substring(2, 4), 16)]
}

function paletteSearch(inputColor, palette) {
	// const inputColor= "#d10202";
	// const palette = {
	// 	"red-rich": "#a80202",
	// 	"red-dark": "#d10909"
	// }

	const inputHex = inputColor.replace("#", "");
	const inputRgb = buildRgb(inputHex);

	let shortest = -1;
	let result = "";

	for( const colorName in palette) {
		const hexString = palette[colorName].replace("#", "");
		currentRgb = buildRgb(hexString);

		const diff = distance(inputRgb, currentRgb);
		if (shortest < 0 || diff < shortest) {
			result = colorName;
			shortest = diff;
		}
	}

	return result;
	// return {name: result, hex: palette[result]};
}

module.exports = {paletteSearch}