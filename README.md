AOI (蒼)[![bitHound Overall Score](https://www.bithound.io/github/elct9620/aoi/badges/score.svg)](https://www.bithound.io/github/elct9620/aoi)
=======

This my personal front-end bootstrap tool inspired by [egoist/tooling](https://github.com/egoist/tooling/).

**WARNING**: This tool will changed when I using new environment, so it didn't always using webpack or other tools.

## Install

Install `aoi` is very simple via NPM ( node > 4.0 )

> $ npm install aoi -g

## Roadmap

- [x] SCSS support (default)
- [x] Typescript support (default)
- [x] Source Map when using `watch` mode
- [ ] Project config file `.aoi.js` or `.aoi.json`
- [ ] ReactJS support (optional)
- [ ] `watch` command work correctly
- [ ] `watch` command support with built-in server

## Commands

This tools support many command to help front-end workflow.

### Build

> $ aoi build [options]

Generate optimized assets file (.js and .css)

### Watch

> $ aoi watch [options]

Keep watching file change, and regenerate file.
