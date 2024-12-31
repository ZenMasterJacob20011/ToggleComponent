const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        clean: true
    },

    mode: "development",

    plugins: [
        new HTMLWebpackPlugin({
            title: "Webpack App",
            template: "./src/index.html"
        })
    ],

    devtool: 'inline-source-map',

    devServer: {
        static: './dist'
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}