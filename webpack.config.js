const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        index:'./src/index.js'
    },


    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: 'restaurant page',
            filename: 'index.html',
            inject: 'body'

        }),
    ], 

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ]
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    }
};