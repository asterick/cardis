const path = require("path");
const webpack = require("webpack");
const fs = require("fs");

module.exports = {
    target: "electron-renderer",
    performance: { hints: false },
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, './bundle'),
        filename: '[name].js',
    },
    entry: {
        renderer: './renderer/electron.jsx'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [ { loader: 'babel-loader' } ],
            },
            {
                test: /\.(sc|sa|c)ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(woff|woff2)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: 'fonts/[hash].[ext]',
                        limit: 5000,
                        mimetype: 'application/font-woff'
                    }
                }
            }, {
                test: /\.(ttf|eot|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[hash].[ext]'
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css'],
    }
}
