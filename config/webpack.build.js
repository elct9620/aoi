/**
 * AOI (蒼)
 *
 * The tool for fast bootstrap front-end environment.
 */

'use strict';

// Build config, with optimize
let helper = require('../lib/helper');
let webpack = require('webpack');

module.exports = function(config, options) {

    config.plugins = config.plugins || [];

    config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }));
    config.plugins.push(new webpack.optimize.DedupePlugin());

    return config;
};
