/**
 * AOI (蒼)
 *
 * The tool for fast bootstrap front-end environment.
 */

'use strict';

let helper = require('../lib/helper');
let process = require('process');

let watchConfig = require('../config/webpack.watch');
let sassConfig = require('../config/webpack.sass');
let typescriptConfig = require('../config/webpack.typescript');

module.exports = function(options) {
    let config = helper.applyConfig([
        helper.bundleConfig,
        helper.resolveConfig,
        sassConfig,
        typescriptConfig
    ], options);

    helper.getCompiler(config).run(function(err, stats) {
        if(err) {
            console.err(err);
        }  else {
            console.log(stats.toString({
                color: true,
                chunks: false
            }));
        }
    });
};
