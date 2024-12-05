const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        liveReload: true,
        watchFiles: [
            'src/**/*.html',
            'src/**/*.css'
        ]
    },
    module: {
        rules: [
            {
                test: /\.hbs$/,
                loader: 'raw-loader'
            },
            {
                test: /\.json$/,
                type: 'json'
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body',
        }),
        new HtmlWebpackPlugin({
            template: './src/qrcode.html',
            filename: 'qrcode.html',
            inject: 'body',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'node_modules/@shoelace-style/shoelace/dist', to: 'shoelace' }
            ]
        })
    ],
};
