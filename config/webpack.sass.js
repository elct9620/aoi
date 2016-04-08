/**
 * AOI (蒼)
 *
 * The tool for fast bootstrap front-end environment.
 */

'use strict'

// Sass Loader
let helper = require('../lib/helper')
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(config, options) {

    let output = options.styleOutput || "style.css"
    let extractCSS = new ExtractTextPlugin(output);

    config.module = config.module || {}
    config.module.loaders = config.module.loaders || []
    config.plugins = config.plugins || []

    config.module.loaders.push({
        test: /\.scss$/,
        loader: extractCSS.extract(["style-loader"], ["css", "sass"])
    })

    config.plugins.push(extractCSS)

    return config
}
