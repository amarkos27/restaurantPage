const { merge } = require('webpack-merge');
const common = require('webpack.common.js');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimizer: ['...', new CssMinimizerPlugin()],
  },
};
