var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HappyPack = require('happypack')
var path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    module: {
        loaders: [
            { 
                test: /\.js$/, 
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                },
                recursive: true, 
                include: [path.join(__dirname, 'src')]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}