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
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
            presets: [require.resolve('babel-preset-es2015')]
        }
    });

    config.resolve.extensions.push('.jsx');

    return config;
};
