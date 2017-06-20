var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');

var path = require('path');
var fs = require('fs');
var pagesPath = path.resolve(__dirname, "./client/pages");
var pages = fs.readdirSync(pagesPath);

var entry = {};

pages.forEach(function (page) {
    if (page != '.DS_Store') {
        entry['sg-' + page] = "./client/pages/" + page + "/app." + page + ".js";
    }
});

var ENV = process.env.NODE_ENV;

var config = {
    entry: entry,

    output: {
        publicPath: __dirname,
        path: path.resolve(__dirname, "../dist"),
        filename: "[name].js",
        chunkFilename: "[name].js"
    },

    module: {
        loaders: [
            {
                test: /\.ejs$/, loader: 'ejs-loader?variable=data'
            }, {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};

config.resolve = {
    modulesDirectories: [
        path.resolve('./app/node_modules'),
        path.resolve('./node_modules')
    ]
};

if (ENV == 'production') {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
        new webpack.optimize.DedupePlugin()
    )
} else {
    config.devtool = 'source-map';
}
module.exports = config;