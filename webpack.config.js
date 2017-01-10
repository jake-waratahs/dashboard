var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var bower_dir = path.join(__dirname, 'bower_components')

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
                    presets: ['es2015', 'react', 'stage-2'],
                    plugins: ['transform-decorators-legacy']
                },
                recursive: true, 
                include: [path.join(__dirname, 'src')]
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /.(png|jpg|jpeg)$/,
                loader: 'url-loader?limit=4098'
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=\.]+)?$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
        ),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    resolve: {
        alias: {
            'semantic-ui': bower_dir + '/semantic/dist'
        }
    },
    devtool: 'source-map'
}