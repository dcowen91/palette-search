#!/usr/bin/env node

const { paletteSearch } = require("./index");
const fs = require("fs");

const inputColor = process.argv[2];
const inputFile = process.argv[3];

const palette = JSON.parse(fs.readFileSync(inputFile));

console.log(paletteSearch(inputColor, palette));