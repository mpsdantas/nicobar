/**
 * Created by jeffersonmourak on 21/5/17.
 */
const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'dist/');
var APP_DIR = path.resolve(__dirname, 'core/');

var config = {
    entry: {
      "nicobar": ['babel-polyfill' ,APP_DIR + '/nicobar.js'],
      "nicobar.min": ['babel-polyfill' ,APP_DIR + '/nicobar.js'],
    },
    devtool: "source-map",
    output: {
        path: BUILD_DIR,
        filename: '[name].js'
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        include: /\.min\.js$/,
        minimize: true
      })
    ],
    module : {
        loaders : [
            {
                test : /\.js?/,
                include : APP_DIR,
                loader : 'babel-loader'
            }
        ]
    }
};

module.exports = config;
