const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'development',
    devtool: false,
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
        }, {
            test: /\.s?css$/,
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
    ],
};
