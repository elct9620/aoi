/**
 * AOI (蒼)
 *
 * The tool for fast bootstrap front-end environment.
 */

'use strict';

let helper = require('../lib/helper');
let process = require('process');

let WebpackDevServer = require('webpack-dev-server');

let watchConfig = require('../config/webpack.watch');
let sassConfig = require('../config/webpack.sass');

module.exports = function(options) {
    let config = helper.applyConfig([
        helper.bundleConfig,
        helper.resolveConfig,
        helper.hotReplacmentConfig,
        watchConfig,
        sassConfig,
        helper.getJavascriptLoader(options.jsLoader)
        helper.getTemplateEngine(options.template)
    ], options);

    let dest = options.dest || "build";
    let port = options.port || "8080";
    let publicPath = options.publicPath || "";
    let contentBase = options.contentBase || dest;

    let compiler = helper.getCompiler(config);
    let server = new WebpackDevServer(compiler, {
        contentBase: contentBase,
        hot: true,
        publicPath: publicPath,
        filename: "bundle.js",
        lazy: false,
        stats: { color: true, chunks: false }
    });
    server.listen(port);
};
