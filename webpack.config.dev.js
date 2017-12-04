const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const extractStyle = new ExtractTextPlugin('./app/dist/style.css')
const html = new HtmlWebpackPlugin({template:'./app/src/index.html'})

module.exports = {
    target:'electron-renderer',
    devtool: 'source-map',
    entry:'./app/src/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'app/dist')
    },
    module:{
        rules:[
            {test:/\.css$/,exclude: /(node_modules|bower_components)/,use:extractStyle.extract(['css-loader'])},
            {test:/\.less$/,exclude: /(node_modules|bower_components)/,use:extractStyle.extract(['less-loader'])},
            {test:/\.js$/,exclude: /(node_modules|bower_components)/,use:'babel-loader'}
        ]
    },
    plugins:[
        html,
        extractStyle,
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"',
        }),
    ]
}