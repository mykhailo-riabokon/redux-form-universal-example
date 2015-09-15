/**
 * Created by mikhail on 15.09.15.
 */
var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    './src/client/index'
  ],
  output: {
    path: path.join(__dirname, 'assets', 'scripts'),
    filename: 'app.js'
  },
  progress: true,
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: [
          path.resolve(__dirname, 'src', 'client')
        ]
      }
    ]
  }
};
