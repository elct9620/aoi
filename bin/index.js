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

function sharedOptions(program) {
    program
        .option('-e, --entry [entry]', 'The entry file, defaule is src/index.js')
        .option('-o, --output [output]', 'Output filename, default is bundle.js')
        .option('-O, --style-output [styleOutput]', 'The extract style file dest, default is style.css')
        .option('-d, --dest [dest]', 'Destination of generated file, default is ./build')
        .option('-p, --public [publicPath]', 'Public path, defaut is ./');

    return program;
}

program
    .version(pkg.version);

sharedOptions(program.command('build'))
    .description('Generate static assets')
    .action(buildCommand);

sharedOptions(program.command('watch'))
    .description('Watch the working directory and build assets in realtime')
    .action(watchCommand);

program.parse(process.argv);


