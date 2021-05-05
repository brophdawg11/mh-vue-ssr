const webpack = require('webpack');
const { merge } = require('webpack-merge');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');

const baseConfig = require('./webpack.base.config');

module.exports = merge(baseConfig, {
    name: 'server',
    entry: './src/entry-server.js',
    output: {
        filename: 'server-bundle.js',
        libraryTarget: 'commonjs2',
    },
    target: 'node',
    externals: (context, request, callback) => /^\w.*$/i.test(request) ?
        callback(null, `commonjs ${request}`) :
        callback(),
    plugins: [
        new webpack.DefinePlugin({ 'process.env.VUE_ENV': '"server"' }),
        new VueSSRServerPlugin(),
    ],
});
