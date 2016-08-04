'use strict'; // eslint-disable-line strict

const path = require('path');
const webpack = require('webpack');

module.exports = {
  cache: true,
  entry: {
    app: path.join(__dirname, './app/src/app.jsx'),
  },
  output: {
    path: __dirname,
    filename: './app/src/app.js',
  },
  resolve: {
    alias: {
      app: path.join(__dirname, './app'),
    },
    extensions: ['', '.js', 'scss'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'dev')},
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
      },
      {
        test: /\.scss/,
        loaders: ['style', 'css?modules', 'sass'],
      },
      {
        test: /\.png$/,
        loader: 'url-loader?limit=100000',
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader',
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000',
      },
    ],
  },
};
