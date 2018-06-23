# palette-search

Find the closest color in a theme for any given color.

If you're like me, you have a color theme for your app or product. If you're even more like me, you sometimes find cool colors that aren't in that theme. Using palette-search you can easily search your theme to find the most similar color!

[![npm](https://img.shields.io/npm/v/palette-search.svg?style=flat-square)](https://www.npmjs.com/package/palette-search)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/palette-search.svg?style=flat-square)](<[![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/palette-search)>)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/dcowen91/palette-search/blob/master/LICENSE)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Usage

```
// theme.json
{
	"red": "#FF000",
	"maroon": "#800000",
	"dark-maroon": "#660000",
	"pink-maroon": "#984C58"
}

npx palette-search #9E3333 theme.json
```

## TODOS

- 🦄 Rewrite in ts or add typings
