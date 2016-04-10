/**
 * AOI (蒼)
 *
 * The tool for fast bootstrap front-end environment.
 */

'use strict';

// Path Helper
let process = require('process');
let path = require('path');
let webpack = require('webpack');

function cwd(directory) {
    if(!directory) {
        return process.cwd();
    }
    return process.cwd() + '/' + directory;
}

function dir(directory) {
    if(!directory) {
        return path.dirname(__dirname);
    }

    return path.dirname(__dirname) + '/' + directory;
}

function getCompiler(config) {
    return webpack(config);
}

function resolveConfig(config, options) {

    config = config || {};

    config.resolve = {
        extensions: ['', '.js', '.css', '.json'],
        root: [
            cwd(),
            cwd('node_modules'),
            dir('node_modules')
        ]
    };

    config.resolveLoader = {
        root: [
            cwd('node_modules'),
            dir('node_modules')
        ]
    };

    return config;
}

function bundleConfig(config, options) {
    config = config || {};

    let entry = options.entry || "src/index";
    let output = options.output || "bundle.js";
    let dest = cwd(options.dest || "build");
    let publicPath = options.publicPath || "./";

    config.entry = entry;
    config.output = {
        path: dest,
        filename: output,
        publicPath: publicPath
    };

    config.plugins = config.plugins || [];

    return config;
}

function applyConfig(configs, options) {
    var i = 0,
        config = {};

    options = options || {};

    if(!configs) { return config; }
    if(!(configs instanceof Array)) {
        configs = [configs];
    }

    for(i = 0; i < configs.length; i++) {
        config = configs[i].call(null, config, options);
    }

    return config;
}

module.exports = {
    cwd: cwd,
    dir: dir,
    resolveConfig: resolveConfig,
    bundleConfig: bundleConfig,
    applyConfig: applyConfig,
    getCompiler: getCompiler
};

