const path = require("path");
const webpack = require("webpack");
const fs = require("fs");

const config = {
    performance: { hints: false },
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, './bundle'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [ { loader: 'babel-loader' } ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
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

const desktop_main = Object.assign({
    entry: {
        main: './src/desktop.js'
    },
    target: "electron-main"
}, config);

const desktop_render = Object.assign({
    entry: {
        renderer: './src/electron.jsx'
    },
    target: "electron-renderer"
}, config);

module.exports = [desktop_main, desktop_render];
