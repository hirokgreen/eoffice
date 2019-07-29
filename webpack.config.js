const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm

module.exports = {
    entry: "./src/index.js",
    plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html' })
    ]
};
