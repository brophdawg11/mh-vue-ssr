const webpack = require('webpack');
const { merge } = require('webpack-merge');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');

const baseConfig = require('./webpack.base.config');

module.exports = merge(baseConfig, {
    name: 'client',
    entry: {
        main: './src/entry-client.js',
    },
    plugins: [
        new webpack.DefinePlugin({ 'process.env.VUE_ENV': '"client"' }),
        new VueSSRClientPlugin(),
    ],
});
