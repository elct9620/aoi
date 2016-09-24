
This my personal front-end bootstrap tool inspired by [egoist/tooling](https://github.com/egoist/tooling/).

**WARNING**: This tool will changed when I using new environment, so it didn't always using webpack or other tools.

## Install

Install `aoi` is very simple via NPM ( node > 4.0 )

> $ npm install aoi -g

## Roadmap

- [x] SCSS support (default)
- [x] Typescript support (default)
- [x] Source Map when using `watch` mode
- [x] Project config file `aoi.js` support
- [ ] ReactJS bootstrap template support
- [x] `watch` command support
- [x] `serve` command support
- [ ] ESLint check support
- [ ] Jest Test Framework support

## Commands

This tools support many command to help front-end workflow.

### Build

> $ aoi build [options]

Generate optimized assets file (.js and .css)

### Watch

> $ aoi watch [options]

Keep watching file change, and regenerate file.

### Server

> $ aoi serve [options]

Start webpack development server with live-reload feature.

### Stats

> $ aoi stats [options]

Output Webpack analytics json for debug performance.
