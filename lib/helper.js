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

let typescriptConfig = require('../config/webpack.typescript');
let babelConfig = require('../config/webpack.babel');

let htmlConfig = require('../config/webpack.html');
let slimConfig = require('../config/webpack.slim');

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

    config.entry = [entry];
    config.output = {
        path: dest,
        filename: output,
        publicPath: publicPath
    };

    config.plugins = config.plugins || [];

    return config;
}

function hotReplacmentConfig(config, options) {

    let port = options.port || "8080";

    config.plugins = config.plugins || [];

    config.entry.push("webpack/hot/dev-server");
    config.entry.push("webpack-dev-server/client?http://localhost:" + port +"/");
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
    config.plugins.push(new webpack.NoErrorsPlugin());

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

    try {
        config = require(cwd() + '/aoi.js').call(null, config, options);
    } catch (e) {
        // WARNGIN: No custom config for aoi
    }

    return config;
}

function getJavascriptLoader(loader) {
    loader = loader || 'typescript';

    switch(loader) {
        case 'babel':
         return babelConfig;
       default:
         return typescriptConfig;
    }
}

function getTemplateEngine(engine) {
   engine = engine || false;

    switch(engine) {
        case 'slim':
           return slimConfig;
        default:
           return htmlConfig;
    }
}

module.exports = {
    cwd: cwd,
    dir: dir,
    resolveConfig: resolveConfig,
    bundleConfig: bundleConfig,
    applyConfig: applyConfig,
    getCompiler: getCompiler,
    hotReplacmentConfig: hotReplacmentConfig,
    getJavascriptLoader: getJavascriptLoader,
    getTemplateEngine: getTemplateEngine
};

