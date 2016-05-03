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
let serveCommand = require('../commands/serve');

function sharedOptions(program) {
    program
        .option('-e, --entry [entry]', 'The entry file, defaule is src/index.js')
        .option('-o, --output [output]', 'Output filename, default is bundle.js')
        .option('-O, --style-output [styleOutput]', 'The extract style file dest, default is style.css')
        .option('-d, --dest [dest]', 'Destination folder of generated file, default is ./build')
        .option('-P, --public [publicPath]', 'Public path, defaut is ./')
        .option('-L, --jsLoader [loader]', 'Which javascript loader to use, babel or typescript, default is typescript')
        .option('-SL, --stylelint', 'Enable stylelint');

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

sharedOptions(program.command('serve'))
    .description('Create a development server with livereload feature')
    .option('-p, --port [port]', 'The serve port, default is 8080')
    .option('-b, --content-base [contentBase]', 'The server root, default is same as destination folder.')
    .action(serveCommand);

program.parse(process.argv);


