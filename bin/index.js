#!/usr/bin/env node
'use strict';

/**
 * AOI (蒼)
 *
 * The tool for fast bootstrap front-end environment.
 */

let program = require('commander');
let process = require('process');
let pkg = require('../package.json');

let watchCommand = require('../commands/watch');
let buildCommand = require('../commands/build');

program
    .version(pkg.version);

program
    .command('build')
    .description('Generate static assets')
    .option('-e, --entry [entry]', 'The entry file, defaule is src/index.js')
    .option('-o, --output [output]', 'Output filename, default is bundle.js')
    .option('-d, --dest [dest]', 'Generated file destination, default is ./build')
    .option('-so, --style-output [styleOutput]', 'The extract style file dest, default is style.css')
    .option('-p, --public [publicPath]', 'Public path, defaut is ./')
    .action(buildCommand);

program
    .command('watch')
    .description('Watch the working directory and build assets in realtime')
    .option('-s, --serve [port]', 'Run built-in web server with specify port')
    .option('-e, --entry [entry]', 'The entry file, defaule is src/index.js')
    .option('-o, --output [output]', 'Output filename, default is bundle.js')
    .option('-d, --dest [dest]', 'Generated file destination, default is ./build')
    .option('-so, --style-output [styleOutput]', 'The extract style file dest, default is style.css')
    .option('-p, --public [publicPath]', 'Public path, defaut is ./')
    .action(watchCommand);

program.parse(process.argv);


