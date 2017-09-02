'use strict';

const BbPromise = require('bluebird');
const webpack = require('webpack');

module.exports = {
  wpwatch() {
    this.serverless.cli.log('Watching with Webpack...');

    const compiler = webpack(this.webpackConfig);
    
    compiler.watch({}, (err, stats) => {
      const watchOptions = stats.compilation.compiler.options.stats;
      
      if (err) {
        throw err;
      }

      if (watchOptions) {
        console.log(stats.toString(watchOptions));   // eslint-disable-line no-console
      }
    });

    return BbPromise.resolve();
  },
};
