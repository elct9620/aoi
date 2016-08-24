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

    config.entry = config.entry.concat(glob.sync("**/*.html"));

    config.module.loaders.push({
        test: /\.htm(l?)$/,
        loaders: ["file?name=[path][name].html"]
    });

    return config;
}
