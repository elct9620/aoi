/**
 * AOI (蒼)
 *
 * The tool for fast bootstrap front-end environment.
 */

'use strict';

// Typescript Loader
let helper = require('../lib/helper');

module.exports = function(config, options) {

    config.module = config.module || {};
    config.module.loaders = config.module.loaders || [];
    config.resolve = config.resolve || [];
    config.resolve.extensions = config.resolve.extensions || [];

    config.module.loaders.push({
        test: /\.ts(x?)$/,
        loaders: ['ts-loader']
    });

    config.resolve.extensions.push('.ts');
    config.resolve.extensions.push('.tsx');

    return config;
};
