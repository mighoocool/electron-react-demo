const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const config = require('./app/config/config.dev')

const extractStyle = new ExtractTextPlugin('./app/dist/style.css')
const html = new HtmlWebpackPlugin({template:'./app/renderer/index.html'})

module.exports = {
    target:'electron-renderer',
    devtool: 'source-map',
    entry:'./app/renderer/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'app/dist')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                include: /(app|antd)/,
                use:extractStyle.extract({use:[{loader:'css-loader'},{loader:'style-loader'}]})
            },
            {
                test:/\.less$/,
                exclude: /(node_modules|bower_components)/,
                use:extractStyle.extract({use:[{loader:'css-loader'},{loader:'less-loader'}]})
            },
            {
                test:/\.js$/,
                include: /renderer/,
                use:'babel-loader'
            }
        ]
    },
    plugins:[
        html,
        extractStyle,
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"',
            ctx:'"http://dev.bqj.cn"'
        }),
    ],
    devServer: {
        port:config.port
    }
}