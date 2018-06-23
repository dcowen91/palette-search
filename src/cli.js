#!/usr/bin/env node

const { paletteSearch } = require('./index');
const fs = require('fs');

// Validate input params
if (process.argv.length != 4) {
	printUsage();
}
// Validate input color
else if (process.argv[2].length < 6 || process.argv[2].length > 7) {
	printUsage();
} else {
	const inputColor = process.argv[2];
	const inputFile = process.argv[3];

	try {
		const palette = JSON.parse(fs.readFileSync(inputFile));
		console.log(paletteSearch(inputColor, palette));
	} catch (e) {
		printUsage();
	}
}

function printUsage() {
	const output = [
		'Usage:',
		'\tpalette-search <color> <theme.json>',
		'\t<color>: a hex color i.e. #3B5C78',
		"\t<theme.json>: a JSON file containing a list of named colors i.e. {'red': '#FF0000'}"
	];
	console.log(output.join('\n'));
}
