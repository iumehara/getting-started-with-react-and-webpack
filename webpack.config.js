var path = require("path");
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    output: {
        path: __dirname + '/dist',
        filename: 'index_bundle.js'
    },
    plugins: [new HtmlWebpackPlugin({template: 'index.html'})]
};
