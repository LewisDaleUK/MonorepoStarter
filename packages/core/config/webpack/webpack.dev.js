const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(
  common,
  {
    devServer: {
      contentBase: './dist',
      historyApiFallback: true,
      hot: true,
    },
    mode: 'development',
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],
  },
);
