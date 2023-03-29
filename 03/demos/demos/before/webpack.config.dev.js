const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    mode : 'development',
    target : 'web',

    entry: [
        'webpack-hot-middleware/client',
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        stats : 'minimal',
        overlay : true,
        historyApiFallback : true,
        disableHostCheck : true,
        headers : { 'Access-Control-Allow-Origin' : '*' },
        https : false

    },
};