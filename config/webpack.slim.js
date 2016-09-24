/**
 * AOI (蒼)
 *
 * The tool for fast bootstrap front-end environment.
 */

'use strict';

// Build config, with optimize
let helper = require('../lib/helper');
let glob = require('glob')

module.exports = function(config, options) {

    config.entry = config.entry || [];
    config.module = config.module || {};
    config.module.loaders = config.module.loaders || [];
    config.plugins = config.plugins || [];

    config.module.loaders.push({
        test: /\.sl(i?)m$/,
        loaders: ["file?name=[path][name]", "slm"]
    });

    config.resolve.extensions.push('.slm');
    config.resolve.extensions.push('.slim');

    return config;
}
