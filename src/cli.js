#!/usr/bin/env node

const { paletteSearch } = require('./index');
const fs = require('fs');

const invalidArgLength = () => process.argv.length != 4;

const invalidColorArg = () => process.argv[2].length != 7;

function tryParseThemeJson(fileName) {
	try {
		return JSON.parse(fs.readFileSync(fileName));
	} catch (e) {
		return;
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

if (invalidArgLength() || invalidColorArg()) {
	printUsage();
} else {
	const inputColor = process.argv[2];
	const theme = tryParseThemeJson(process.argv[3]);

	theme ? console.log(paletteSearch(inputColor, theme)) : printUsage();
}
