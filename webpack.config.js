const path = require('path');

const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'development',
    devtool: false,
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
        }, {
            test: /\.css$/,
            use: [
                'vue-style-loader',
                {
                    loader: 'css-loader',
                    options: { esModule: false },
                },
            ],
        }],
    },
    plugins: [
        new VueLoaderPlugin(),
        new CopyPlugin({ patterns: [{ from: 'src/index.html' }] }),
    ],
};
